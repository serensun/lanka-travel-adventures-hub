import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.2";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  console.log('Booking summary email function called, method:', req.method);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Fetching all booking submissions...');
    
    // Fetch all booking submissions from the database
    const { data: bookings, error } = await supabase
      .from('booking_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching bookings:', error);
      throw new Error(`Database error: ${error.message}`);
    }

    console.log(`Found ${bookings?.length || 0} booking submissions`);

    if (!bookings || bookings.length === 0) {
      return new Response(
        JSON.stringify({ message: "No booking submissions found" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Calculate total revenue
    const totalRevenue = bookings.reduce((sum, booking) => sum + booking.total_cost, 0);

    // Generate email content
    const emailContent = `
      <h2>Booking Summary Report</h2>
      <p><strong>Total Bookings:</strong> ${bookings.length}</p>
      <p><strong>Total Revenue:</strong> $${totalRevenue.toLocaleString()}</p>
      
      <hr>
      
      ${bookings.map((booking, index) => `
        <div style="margin-bottom: 30px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3>Booking #${index + 1}</h3>
          
          <h4>Customer Information:</h4>
          <ul>
            <li><strong>Name:</strong> ${booking.full_name}</li>
            <li><strong>Email:</strong> ${booking.email}</li>
            <li><strong>Phone:</strong> ${booking.phone}</li>
            <li><strong>Country:</strong> ${booking.country}</li>
          </ul>
          
          <h4>Tour Details:</h4>
          <ul>
            <li><strong>Package Type:</strong> ${booking.package_type}</li>
            <li><strong>Preferred Travel Date:</strong> ${booking.preferred_date}</li>
            <li><strong>Number of Travelers:</strong> ${booking.number_of_travelers}</li>
            <li><strong>Total Cost:</strong> $${booking.total_cost.toLocaleString()}</li>
          </ul>
          
          ${booking.special_requests ? `
            <h4>Special Requests:</h4>
            <p>${booking.special_requests}</p>
          ` : ''}
          
          <p><strong>Submitted:</strong> ${new Date(booking.created_at).toLocaleString()}</p>
        </div>
      `).join('')}
      
      <hr>
      <p><em>This report was generated automatically from the website booking system.</em></p>
    `;

    console.log('Sending booking summary email...');
    
    const emailResponse = await resend.emails.send({
      from: "Sri Lanka Tours <reservations@serendipitypvt.com>",
      to: ["reservations@serendipitypvt.com", "enquiries@serendipitypvt.com"],
      subject: `Booking Summary Report - ${bookings.length} Total Bookings`,
      html: emailContent,
    });

    console.log("Booking summary email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      emailResponse,
      totalBookings: bookings.length,
      totalRevenue 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-summary function:", error);
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