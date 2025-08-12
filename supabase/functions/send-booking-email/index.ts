
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Max-Age": "86400",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Content-Security-Policy": "default-src 'self'; script-src 'none'; object-src 'none';",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
};

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS_PER_IP = 5;
const requestTracker = new Map<string, { count: number; firstRequest: number }>();

// Request size limit (10KB)
const MAX_REQUEST_SIZE = 10 * 1024;

interface BookingEmailRequest {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  preferredDate: string;
  numberOfTravelers: number;
  specialRequests: string;
  packageType: string;
  totalCost: number;
  tourName: string;
  duration: string;
  packageLevel: string;
}

// Rate limiting function
const checkRateLimit = (clientIP: string): boolean => {
  const now = Date.now();
  const clientData = requestTracker.get(clientIP);
  
  if (!clientData) {
    requestTracker.set(clientIP, { count: 1, firstRequest: now });
    return true;
  }
  
  // Reset if window has passed
  if (now - clientData.firstRequest > RATE_LIMIT_WINDOW) {
    requestTracker.set(clientIP, { count: 1, firstRequest: now });
    return true;
  }
  
  // Check if within limits
  if (clientData.count >= MAX_REQUESTS_PER_IP) {
    return false;
  }
  
  // Increment counter
  clientData.count++;
  return true;
};

// Security logging function
const logSecurityEvent = async (eventType: string, clientIP: string, details: any) => {
  try {
    console.log(`SECURITY_EVENT: ${eventType}`, { clientIP, details, timestamp: new Date().toISOString() });
    
    // Store security events in database
    await supabase.from('security_logs').insert({
      event_type: eventType,
      client_ip: clientIP,
      details: details,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Failed to log security event:', error);
  }
};

const handler = async (req: Request): Promise<Response> => {
  const startTime = Date.now();
  const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  
  console.log('Booking email function called', { method: req.method, clientIP, timestamp: new Date().toISOString() });
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    await logSecurityEvent('INVALID_METHOD', clientIP, { method: req.method });
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  // Rate limiting check
  if (!checkRateLimit(clientIP)) {
    await logSecurityEvent('RATE_LIMIT_EXCEEDED', clientIP, { 
      maxRequests: MAX_REQUESTS_PER_IP, 
      windowMs: RATE_LIMIT_WINDOW 
    });
    return new Response(JSON.stringify({ 
      error: 'Too many requests. Please try again later.' 
    }), {
      status: 429,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  // Request size validation
  const contentLength = req.headers.get('content-length');
  if (contentLength && parseInt(contentLength) > MAX_REQUEST_SIZE) {
    await logSecurityEvent('REQUEST_TOO_LARGE', clientIP, { size: contentLength });
    return new Response(JSON.stringify({ error: 'Request too large' }), {
      status: 413,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    console.log('Processing booking email request...');
    const bookingData: BookingEmailRequest = await req.json();

    // Bot detection - check for honeypot field
    if ((bookingData as any).website || (bookingData as any).url || (bookingData as any).honeypot) {
      await logSecurityEvent('BOT_DETECTED', clientIP, { 
        honeypotFields: Object.keys(bookingData).filter(key => 
          ['website', 'url', 'honeypot'].includes(key)
        )
      });
      // Return success to not reveal bot detection
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
    
    // Enhanced input validation
    if (!bookingData.fullName?.trim() || !bookingData.email?.trim() || !bookingData.packageType?.trim() || 
        !bookingData.phone?.trim() || !bookingData.country?.trim() || !bookingData.preferredDate || 
        !bookingData.numberOfTravelers || !bookingData.totalCost) {
      await logSecurityEvent('VALIDATION_FAILED', clientIP, { 
        reason: 'Missing required fields',
        receivedFields: Object.keys(bookingData)
      });
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Enhanced validation checks with suspicious pattern detection
    if (bookingData.fullName.length > 100 || bookingData.email.length > 254 || 
        bookingData.phone.length > 20 || bookingData.country.length > 50 || 
        bookingData.packageType.length > 100) {
      await logSecurityEvent('FIELD_LENGTH_VIOLATION', clientIP, {
        fieldLengths: {
          fullName: bookingData.fullName.length,
          email: bookingData.email.length,
          phone: bookingData.phone?.length || 0,
          country: bookingData.country?.length || 0,
          packageType: bookingData.packageType.length
        }
      });
      return new Response(JSON.stringify({ error: 'Invalid field lengths' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Detect suspicious patterns (SQL injection, XSS attempts)
    const suspiciousPatterns = [
      /(<script|javascript:|onload=|onerror=)/i,
      /(union|select|insert|update|delete|drop|create|alter)\s/i,
      /(\bor\s+1=1|admin'--|'or'1'='1)/i
    ];
    
    const allFields = [
      bookingData.fullName, bookingData.email, bookingData.phone,
      bookingData.country, bookingData.packageType, bookingData.specialRequests || ''
    ].join(' ');
    
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(allFields)) {
        await logSecurityEvent('SUSPICIOUS_INPUT_DETECTED', clientIP, {
          pattern: pattern.toString(),
          matchedContent: allFields.substring(0, 200)
        });
        return new Response(JSON.stringify({ error: 'Invalid input detected' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }
    }

    if (bookingData.numberOfTravelers < 1 || bookingData.numberOfTravelers > 50 || 
        bookingData.totalCost < 0 || bookingData.totalCost > 1000000) {
      console.log('Invalid numeric values');
      return new Response(JSON.stringify({ error: 'Invalid numeric values' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (bookingData.specialRequests && bookingData.specialRequests.length > 1000) {
      console.log('Special requests too long');
      return new Response(JSON.stringify({ error: 'Special requests too long' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Enhanced email validation with stricter pattern
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(bookingData.email)) {
      console.log('Invalid email format:', bookingData.email);
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Enhanced sanitization to prevent XSS and injection attacks
    const sanitizeInput = (input: string) => {
      return input
        .replace(/[<>'"&]/g, (match) => {
          const entityMap: { [key: string]: string } = {
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '&': '&amp;'
          };
          return entityMap[match];
        })
        .trim();
    };

    const sanitizedData = {
      ...bookingData,
      fullName: sanitizeInput(bookingData.fullName),
      email: bookingData.email.trim().toLowerCase(),
      phone: sanitizeInput(bookingData.phone || ''),
      country: sanitizeInput(bookingData.country || ''),
      packageType: sanitizeInput(bookingData.packageType),
      tourName: sanitizeInput(bookingData.tourName || ''),
      duration: sanitizeInput(bookingData.duration || ''),
      packageLevel: sanitizeInput(bookingData.packageLevel || ''),
      specialRequests: bookingData.specialRequests ? sanitizeInput(bookingData.specialRequests) : ''
    };

    console.log('Received booking data from:', sanitizedData.email, 'for package:', sanitizedData.packageType);

    const emailContent = `
      <h2>New Booking Request Received</h2>
      
      <h3>Customer Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${sanitizedData.fullName}</li>
        <li><strong>Email:</strong> ${sanitizedData.email}</li>
        <li><strong>Phone:</strong> ${sanitizedData.phone}</li>
        <li><strong>Country:</strong> ${sanitizedData.country}</li>
      </ul>
      
      <h3>Tour Details:</h3>
      <ul>
        <li><strong>Tour:</strong> ${sanitizedData.tourName}</li>
        <li><strong>Duration:</strong> ${sanitizedData.duration}</li>
        <li><strong>Package Level:</strong> ${sanitizedData.packageLevel}</li>
        <li><strong>Preferred Travel Date:</strong> ${sanitizedData.preferredDate}</li>
        <li><strong>Number of Travelers:</strong> ${sanitizedData.numberOfTravelers}</li>
        <li><strong>Total Cost:</strong> $${sanitizedData.totalCost.toLocaleString()}</li>
      </ul>
      
      ${sanitizedData.specialRequests ? `
      <h3>Special Requests:</h3>
      <p>${sanitizedData.specialRequests}</p>
      ` : ''}
      
      <hr>
      <p><em>This booking request was submitted through the website booking form.</em></p>
    `;

    console.log('Sending email with Resend...');
    
    // Use verified domain - Change this to your verified domain
    const fromEmail = Deno.env.get("FROM_EMAIL") || "info@yourdomain.com";
    const emailResponse = await resend.emails.send({
      from: `Sri Lanka Tours <${fromEmail}>`,
      to: ["admin@seerendipitytours.com"],
      subject: `New Booking Request - ${bookingData.tourName}`,
      html: emailContent,
    });

    console.log("Booking email sent successfully:", emailResponse);

    // Log successful request
    const processingTime = Date.now() - startTime;
    await logSecurityEvent('BOOKING_SUCCESS', clientIP, {
      email: sanitizedData.email,
      packageType: sanitizedData.packageType,
      processingTime,
      emailId: emailResponse.id
    });

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    const processingTime = Date.now() - startTime;
    console.error("Error in send-booking-email function:", error);
    
    await logSecurityEvent('BOOKING_ERROR', clientIP, {
      error: error.message,
      processingTime,
      stack: error.stack?.substring(0, 500)
    });
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
