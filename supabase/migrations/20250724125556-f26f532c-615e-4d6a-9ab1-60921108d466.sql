-- Fix critical RLS policy issues (handling existing policies)

-- 1. Fix booking_submissions table policies
-- Drop all existing policies first
DROP POLICY IF EXISTS "Anyone can view booking submissions" ON public.booking_submissions;
DROP POLICY IF EXISTS "Users can update their own booking submissions" ON public.booking_submissions; 
DROP POLICY IF EXISTS "Users can delete their own booking submissions" ON public.booking_submissions;
DROP POLICY IF EXISTS "Anyone can create booking submissions" ON public.booking_submissions;

-- Create secure policy for booking_submissions - only allow INSERT
CREATE POLICY "Public can create booking submissions" 
ON public.booking_submissions 
FOR INSERT 
WITH CHECK (true);

-- 2. Create RLS policies for client details table
-- Enable RLS on client details table (if not already enabled)
ALTER TABLE public."client details" ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into client details (for contact forms)
CREATE POLICY "Public can create client details" 
ON public."client details" 
FOR INSERT 
WITH CHECK (true);

-- 3. Add audit logging triggers
CREATE OR REPLACE FUNCTION public.log_booking_submission()
RETURNS TRIGGER AS $$
BEGIN
  RAISE LOG 'New booking submission: ID=%, Email=%, Package=%, Cost=%', 
    NEW.id, NEW.email, NEW.package_type, NEW.total_cost;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS booking_submission_audit ON public.booking_submissions;

CREATE TRIGGER booking_submission_audit
AFTER INSERT ON public.booking_submissions
FOR EACH ROW EXECUTE FUNCTION public.log_booking_submission();

-- 4. Add audit logging for client details
CREATE OR REPLACE FUNCTION public.log_client_details()
RETURNS TRIGGER AS $$
BEGIN
  RAISE LOG 'New client inquiry: ID=%, Email=%, Name=%', 
    NEW.id, NEW."Email", NEW."Full_name";
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS client_details_audit ON public."client details";

CREATE TRIGGER client_details_audit
AFTER INSERT ON public."client details"
FOR EACH ROW EXECUTE FUNCTION public.log_client_details();