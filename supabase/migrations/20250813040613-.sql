-- Add RLS policies for booking_submissions table to protect sensitive customer data

-- Only admins can view booking submissions
CREATE POLICY "Only admins can view booking submissions" 
ON public.booking_submissions
FOR SELECT 
USING (public.is_admin());

-- Only admins can update booking submissions
CREATE POLICY "Only admins can update booking submissions" 
ON public.booking_submissions
FOR UPDATE 
USING (public.is_admin());

-- Only admins can delete booking submissions
CREATE POLICY "Only admins can delete booking submissions" 
ON public.booking_submissions
FOR DELETE 
USING (public.is_admin());