-- Fix function search path security issues

-- Update log_booking_submission function with secure search_path
CREATE OR REPLACE FUNCTION public.log_booking_submission()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = ''
AS $$
BEGIN
  RAISE LOG 'New booking submission: ID=%, Email=%, Package=%, Cost=%', 
    NEW.id, NEW.email, NEW.package_type, NEW.total_cost;
  RETURN NEW;
END;
$$;

-- Update log_client_details function with secure search_path  
CREATE OR REPLACE FUNCTION public.log_client_details()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = ''
AS $$
BEGIN
  RAISE LOG 'New client inquiry: ID=%, Email=%, Name=%', 
    NEW.id, NEW."Email", NEW."Full_name";
  RETURN NEW;
END;
$$;