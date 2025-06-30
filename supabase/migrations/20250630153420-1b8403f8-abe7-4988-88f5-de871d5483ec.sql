
-- Create a table for booking form submissions
CREATE TABLE public.booking_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  number_of_travelers INTEGER NOT NULL,
  special_requests TEXT,
  package_type TEXT NOT NULL,
  total_cost INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.booking_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert booking submissions
-- (since this is a public booking form)
CREATE POLICY "Anyone can create booking submissions" 
  ON public.booking_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy that allows reading all booking submissions
-- (you may want to restrict this to admin users later)
CREATE POLICY "Anyone can view booking submissions" 
  ON public.booking_submissions 
  FOR SELECT 
  USING (true);
