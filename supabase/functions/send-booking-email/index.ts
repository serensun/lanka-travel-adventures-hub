
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Max-Age": "86400",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin"
};

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

const handler = async (req: Request): Promise<Response> => {
  console.log('Email function called, method:', req.method);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    console.log('Processing booking email request...');
    const bookingData: BookingEmailRequest = await req.json();
    
    // Enhanced input validation
    if (!bookingData.fullName?.trim() || !bookingData.email?.trim() || !bookingData.packageType?.trim() || 
        !bookingData.phone?.trim() || !bookingData.country?.trim() || !bookingData.preferredDate || 
        !bookingData.numberOfTravelers || !bookingData.totalCost) {
      console.log('Missing required fields in booking request');
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Enhanced validation checks
    if (bookingData.fullName.length > 100 || bookingData.email.length > 254 || 
        bookingData.phone.length > 20 || bookingData.country.length > 50 || 
        bookingData.packageType.length > 100) {
      console.log('Field length validation failed');
      return new Response(JSON.stringify({ error: 'Invalid field lengths' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
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
    
    const emailResponse = await resend.emails.send({
      from: "Sri Lanka Tours <reservations@serendipitypvt.com>",
      to: ["admin@seerendipitytours.com", "enquiries@serendipitypvt.com"],
      subject: `New Booking Request - ${bookingData.tourName}`,
      html: emailContent,
    });

    console.log("Booking email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
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
