-- Add admin role support to profiles table
ALTER TABLE public.profiles 
ADD COLUMN role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin'));

-- Add index for role lookups
CREATE INDEX idx_profiles_role ON public.profiles(role);

-- Create security definer function to check admin role
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Create RLS policies for client details table
-- Only admins can view customer data
CREATE POLICY "Only admins can view client details" 
ON public."client details"
FOR SELECT 
USING (public.is_admin());

-- Only admins can update client details
CREATE POLICY "Only admins can update client details" 
ON public."client details"
FOR UPDATE 
USING (public.is_admin());

-- Only admins can delete client details
CREATE POLICY "Only admins can delete client details" 
ON public."client details"
FOR DELETE 
USING (public.is_admin());

-- Create function to safely promote user to admin (for initial setup)
CREATE OR REPLACE FUNCTION public.promote_user_to_admin(user_email TEXT)
RETURNS BOOLEAN AS $$
DECLARE
  user_profile_id UUID;
BEGIN
  -- Find user by email from auth.users and update their profile
  SELECT p.id INTO user_profile_id
  FROM public.profiles p
  JOIN auth.users u ON p.id = u.id
  WHERE u.email = user_email;
  
  IF user_profile_id IS NOT NULL THEN
    UPDATE public.profiles 
    SET role = 'admin' 
    WHERE id = user_profile_id;
    RETURN TRUE;
  END IF;
  
  RETURN FALSE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;