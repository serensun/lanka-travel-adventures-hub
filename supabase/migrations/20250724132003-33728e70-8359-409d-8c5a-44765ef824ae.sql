-- Create data retention and cleanup functions for security

-- Function to clean old booking submissions (older than 2 years)
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to clean old client details (older than 2 years)  
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to anonymize old booking data (older than 1 year) instead of deleting
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get data retention statistics
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add indexes for better performance on cleanup operations
CREATE INDEX IF NOT EXISTS idx_booking_submissions_created_at ON public.booking_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_client_details_created_at ON public."client details"(created_at);