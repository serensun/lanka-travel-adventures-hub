-- Fix search path security issues for data retention functions

-- Update cleanup_old_booking_submissions function with secure search path
CREATE OR REPLACE FUNCTION public.cleanup_old_booking_submissions()
RETURNS INTEGER AS $$
DECLARE
  deleted_count INTEGER;
BEGIN
  DELETE FROM public.booking_submissions 
  WHERE created_at < NOW() - INTERVAL '2 years';
  
  GET DIAGNOSTICS deleted_count = ROW_COUNT;
  
  RAISE LOG 'Data cleanup: Deleted % old booking submissions', deleted_count;
  RETURN deleted_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Update cleanup_old_client_details function with secure search path  
CREATE OR REPLACE FUNCTION public.cleanup_old_client_details()
RETURNS INTEGER AS $$
DECLARE
  deleted_count INTEGER;
BEGIN
  DELETE FROM public."client details" 
  WHERE created_at < NOW() - INTERVAL '2 years';
  
  GET DIAGNOSTICS deleted_count = ROW_COUNT;
  
  RAISE LOG 'Data cleanup: Deleted % old client details', deleted_count;
  RETURN deleted_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Update anonymize_old_bookings function with secure search path
CREATE OR REPLACE FUNCTION public.anonymize_old_bookings()
RETURNS INTEGER AS $$
DECLARE
  updated_count INTEGER;
BEGIN
  UPDATE public.booking_submissions 
  SET 
    full_name = 'ANONYMIZED',
    email = 'anonymized@example.com',
    phone = 'ANONYMIZED',
    special_requests = CASE 
      WHEN special_requests IS NOT NULL THEN 'ANONYMIZED' 
      ELSE NULL 
    END
  WHERE created_at < NOW() - INTERVAL '1 year'
    AND full_name != 'ANONYMIZED';
  
  GET DIAGNOSTICS updated_count = ROW_COUNT;
  
  RAISE LOG 'Data anonymization: Anonymized % old booking submissions', updated_count;
  RETURN updated_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';

-- Update get_data_retention_stats function with secure search path
CREATE OR REPLACE FUNCTION public.get_data_retention_stats()
RETURNS TABLE(
  table_name TEXT,
  total_records BIGINT,
  records_older_than_1_year BIGINT,
  records_older_than_2_years BIGINT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    'booking_submissions'::TEXT,
    (SELECT COUNT(*) FROM public.booking_submissions),
    (SELECT COUNT(*) FROM public.booking_submissions WHERE created_at < NOW() - INTERVAL '1 year'),
    (SELECT COUNT(*) FROM public.booking_submissions WHERE created_at < NOW() - INTERVAL '2 years')
  UNION ALL
  SELECT 
    'client_details'::TEXT,
    (SELECT COUNT(*) FROM public."client details"),
    (SELECT COUNT(*) FROM public."client details" WHERE created_at < NOW() - INTERVAL '1 year'),
    (SELECT COUNT(*) FROM public."client details" WHERE created_at < NOW() - INTERVAL '2 years');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = '';