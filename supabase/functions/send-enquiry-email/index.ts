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

interface EnquiryEmailRequest {
  fullName: string;
  email: string;
  contactNumber?: string;
  enquiryMessage: string;
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
  
  console.log('Enquiry email function called', { method: req.method, clientIP, timestamp: new Date().toISOString() });
  
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
    const requestData = await req.json();

    // Bot detection - check for honeypot field
    if (requestData.website || requestData.url || requestData.honeypot) {
      await logSecurityEvent('BOT_DETECTED', clientIP, { 
        honeypotFields: Object.keys(requestData).filter(key => 
          ['website', 'url', 'honeypot'].includes(key)
        )
      });
      // Return success to not reveal bot detection
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    const { fullName, email, contactNumber, enquiryMessage } = requestData;

    // Enhanced input validation
    if (!fullName?.trim() || !email?.trim() || !enquiryMessage?.trim()) {
      await logSecurityEvent('VALIDATION_FAILED', clientIP, { 
        reason: 'Missing required fields',
        receivedFields: Object.keys(requestData)
      });
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
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
    
    const allFields = [fullName, email, contactNumber || '', enquiryMessage].join(' ');
    
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

    // Enhanced validation checks
    if (fullName.length > 100 || email.length > 254 || enquiryMessage.length > 2000) {
      console.log('Field length validation failed');
      return new Response(JSON.stringify({ error: 'Invalid field lengths' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    if (contactNumber && contactNumber.length > 20) {
      console.log('Contact number too long');
      return new Response(JSON.stringify({ error: 'Contact number too long' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Enhanced email validation with stricter pattern
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format:', email);
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
      fullName: sanitizeInput(fullName),
      email: email.trim().toLowerCase(),
      contactNumber: contactNumber ? sanitizeInput(contactNumber) : '',
      enquiryMessage: sanitizeInput(enquiryMessage)
    };

    console.log("Received enquiry from:", sanitizedData.email);

    // Send email to reservations@serendipitypvt.com
    const emailResponse = await resend.emails.send({
      from: "Sri Lanka Tours <reservations@serendipitypvt.com>",
      to: ["reservations@serendipitypvt.com", "enquiries@serendipitypvt.com"],
      subject: `New Enquiry from ${sanitizedData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">New Customer Enquiry</h1>
            <p style="margin: 10px 0 0; opacity: 0.9;">Serendipity Tours Sri Lanka</p>
          </div>
          
          <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h2 style="color: #1e40af; margin: 0 0 15px; font-size: 20px;">Customer Information</h2>
              <p style="margin: 8px 0; color: #374151;"><strong>Name:</strong> ${sanitizedData.fullName}</p>
              <p style="margin: 8px 0; color: #374151;"><strong>Email:</strong> ${sanitizedData.email}</p>
              ${sanitizedData.contactNumber ? `<p style="margin: 8px 0; color: #374151;"><strong>Contact Number:</strong> ${sanitizedData.contactNumber}</p>` : ''}
            </div>
            
            <div style="margin-bottom: 25px;">
              <h3 style="color: #1e40af; margin: 0 0 15px; font-size: 18px;">Enquiry Message</h3>
              <div style="background: #f9fafb; border-left: 4px solid #3b82f6; padding: 20px; border-radius: 4px;">
                <p style="margin: 0; color: #374151; line-height: 1.6;">${sanitizedData.enquiryMessage || 'No specific message provided.'}</p>
              </div>
            </div>
            
            <div style="background: #ecfdf5; border: 1px solid #d1fae5; padding: 15px; border-radius: 8px; margin-top: 25px;">
              <p style="margin: 0; color: #065f46; font-size: 14px;">
                <strong>Next Steps:</strong> Please respond to this enquiry within 24 hours to maintain our excellent customer service standards.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>This enquiry was submitted through the Serendipity Tours website contact form.</p>
          </div>
        </div>
      `,
    });

    console.log("Enquiry email sent successfully:", emailResponse);

    // Log successful request
    const processingTime = Date.now() - startTime;
    await logSecurityEvent('ENQUIRY_SUCCESS', clientIP, {
      email: sanitizedData.email,
      processingTime,
      emailId: emailResponse.id
    });

    return new Response(JSON.stringify({ 
      success: true,
      message: "Enquiry submitted successfully!" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    const processingTime = Date.now() - startTime;
    console.error("Error in send-enquiry-email function:", error);
    
    await logSecurityEvent('ENQUIRY_ERROR', clientIP, {
      error: error.message,
      processingTime,
      stack: error.stack?.substring(0, 500)
    });
    
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message || "Failed to send enquiry"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);