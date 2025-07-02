
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
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookingEmailRequest = await req.json();

    const emailContent = `
      <h2>New Booking Request Received</h2>
      
      <h3>Customer Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${bookingData.fullName}</li>
        <li><strong>Email:</strong> ${bookingData.email}</li>
        <li><strong>Phone:</strong> ${bookingData.phone}</li>
        <li><strong>Country:</strong> ${bookingData.country}</li>
      </ul>
      
      <h3>Tour Details:</h3>
      <ul>
        <li><strong>Tour:</strong> ${bookingData.tourName}</li>
        <li><strong>Duration:</strong> ${bookingData.duration}</li>
        <li><strong>Package Level:</strong> ${bookingData.packageLevel}</li>
        <li><strong>Preferred Travel Date:</strong> ${bookingData.preferredDate}</li>
        <li><strong>Number of Travelers:</strong> ${bookingData.numberOfTravelers}</li>
        <li><strong>Total Cost:</strong> $${bookingData.totalCost.toLocaleString()}</li>
      </ul>
      
      ${bookingData.specialRequests ? `
      <h3>Special Requests:</h3>
      <p>${bookingData.specialRequests}</p>
      ` : ''}
      
      <hr>
      <p><em>This booking request was submitted through the website booking form.</em></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Sri Lanka Tours <onboarding@resend.dev>",
      to: ["seerendipitytourslk@gmail.com"],
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
