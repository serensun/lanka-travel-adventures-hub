
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
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
    
    // Input validation
    if (!bookingData.fullName?.trim() || !bookingData.email?.trim() || !bookingData.packageType?.trim()) {
      console.log('Missing required fields in booking request');
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(bookingData.email)) {
      console.log('Invalid email format:', bookingData.email);
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Sanitize inputs to prevent XSS
    const sanitizedData = {
      ...bookingData,
      fullName: bookingData.fullName.replace(/[<>]/g, ''),
      phone: bookingData.phone?.replace(/[<>]/g, '') || '',
      country: bookingData.country?.replace(/[<>]/g, '') || '',
      specialRequests: bookingData.specialRequests?.replace(/[<>]/g, '') || ''
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
