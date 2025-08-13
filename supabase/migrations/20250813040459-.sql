-- Fix function search_path issues and implement proper role system

-- First, remove the problematic functions and column
DROP FUNCTION IF EXISTS public.is_admin();
DROP FUNCTION IF EXISTS public.promote_user_to_admin(TEXT);
ALTER TABLE public.profiles DROP COLUMN IF EXISTS role;

-- Create proper role system with separate table
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function with proper search_path
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  );
$$;

-- Create function to check if current user is admin with proper search_path
CREATE OR REPLACE FUNCTION public.is_current_user_admin()
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT public.has_role(auth.uid(), 'admin'::public.app_role);
$$;

-- Create function to promote user to admin with proper search_path
CREATE OR REPLACE FUNCTION public.promote_user_to_admin(user_email TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
DECLARE
  target_user_id UUID;
BEGIN
  -- Find user by email
  SELECT id INTO target_user_id
  FROM auth.users
  WHERE email = user_email;
  
  IF target_user_id IS NOT NULL THEN
    -- Insert admin role (use ON CONFLICT to handle duplicates)
    INSERT INTO public.user_roles (user_id, role)
    VALUES (target_user_id, 'admin'::public.app_role)
    ON CONFLICT (user_id, role) DO NOTHING;
    RETURN TRUE;
  END IF;
  
  RETURN FALSE;
END;
$$;

-- Update RLS policies for client details table to use the new role system
DROP POLICY IF EXISTS "Only admins can view client details" ON public."client details";
DROP POLICY IF EXISTS "Only admins can update client details" ON public."client details";
DROP POLICY IF EXISTS "Only admins can delete client details" ON public."client details";

-- Create new policies using the proper role system
CREATE POLICY "Only admins can view client details" 
ON public."client details"
FOR SELECT 
TO authenticated
USING (public.is_current_user_admin());

CREATE POLICY "Only admins can update client details" 
ON public."client details"
FOR UPDATE 
TO authenticated
USING (public.is_current_user_admin());

CREATE POLICY "Only admins can delete client details" 
ON public."client details"
FOR DELETE 
TO authenticated
USING (public.is_current_user_admin());

-- Add RLS policies for user_roles table
CREATE POLICY "Users can view their own roles" 
ON public.user_roles
FOR SELECT 
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Only admins can manage roles" 
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::public.app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));