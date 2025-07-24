import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EnquiryEmailRequest {
  fullName: string;
  email: string;
  contactNumber?: string;
  enquiryMessage: string;
}

const handler = async (req: Request): Promise<Response> => {
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
    const { fullName, email, contactNumber, enquiryMessage }: EnquiryEmailRequest = await req.json();

    // Input validation
    if (!fullName?.trim() || !email?.trim() || !enquiryMessage?.trim()) {
      console.log('Missing required fields in enquiry request');
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format:', email);
      return new Response(JSON.stringify({ error: 'Invalid email format' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }

    // Sanitize inputs to prevent XSS
    const sanitizedData = {
      fullName: fullName.replace(/[<>]/g, ''),
      email: email.trim(),
      contactNumber: contactNumber?.replace(/[<>]/g, '') || '',
      enquiryMessage: enquiryMessage.replace(/[<>]/g, '')
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
    console.error("Error in send-enquiry-email function:", error);
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