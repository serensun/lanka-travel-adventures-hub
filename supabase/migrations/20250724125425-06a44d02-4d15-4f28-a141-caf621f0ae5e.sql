-- Fix critical RLS policy issues

-- 1. Fix booking_submissions table policies
-- Remove overly permissive policies that allow anyone to view/edit all bookings
DROP POLICY IF EXISTS "Anyone can view booking submissions" ON public.booking_submissions;
DROP POLICY IF EXISTS "Users can update their own booking submissions" ON public.booking_submissions;
DROP POLICY IF EXISTS "Users can delete their own booking submissions" ON public.booking_submissions;

-- Create secure policies for booking_submissions
-- Only allow creating bookings (for public booking form)
CREATE POLICY "Anyone can create booking submissions" 
ON public.booking_submissions 
FOR INSERT 
WITH CHECK (true);

-- Only authenticated users can view their own bookings (if we add user_id later)
-- For now, no SELECT policy since there's no user_id column
-- Admins would need to access via service role or separate admin interface

-- 2. Create RLS policies for client details table
-- Enable RLS on client details table
ALTER TABLE public."client details" ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into client details (for contact forms)
CREATE POLICY "Anyone can create client details" 
ON public."client details" 
FOR INSERT 
WITH CHECK (true);

-- No SELECT policy for client details - admin access only via service role

-- 3. Add audit logging trigger for booking submissions
CREATE OR REPLACE FUNCTION public.log_booking_submission()
RETURNS TRIGGER AS $$
BEGIN
  -- Log the booking submission for security monitoring
  RAISE LOG 'New booking submission: ID=%, Email=%, Package=%, Cost=%', 
    NEW.id, NEW.email, NEW.package_type, NEW.total_cost;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER booking_submission_audit
AFTER INSERT ON public.booking_submissions
FOR EACH ROW EXECUTE FUNCTION public.log_booking_submission();

-- 4. Add audit logging trigger for client details
CREATE OR REPLACE FUNCTION public.log_client_details()
RETURNS TRIGGER AS $$
BEGIN
  -- Log the client inquiry for security monitoring
  RAISE LOG 'New client inquiry: ID=%, Email=%, Name=%', 
    NEW.id, NEW."Email", NEW."Full_name";
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER client_details_audit
AFTER INSERT ON public."client details"
FOR EACH ROW EXECUTE FUNCTION public.log_client_details();