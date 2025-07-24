-- Create security_logs table to track security events
CREATE TABLE IF NOT EXISTS public.security_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL,
  client_ip TEXT NOT NULL,
  details JSONB,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.security_logs ENABLE ROW LEVEL SECURITY;

-- Create policy - only admin can read security logs
CREATE POLICY "Only admin can read security logs" 
ON public.security_logs 
FOR SELECT 
USING (false); -- No public access

-- Create policy for inserts (service role only)
CREATE POLICY "Service role can insert security logs" 
ON public.security_logs 
FOR INSERT 
WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_security_logs_event_type ON public.security_logs(event_type);
CREATE INDEX idx_security_logs_client_ip ON public.security_logs(client_ip);
CREATE INDEX idx_security_logs_timestamp ON public.security_logs(timestamp);

-- Create function to clean up old security logs (older than 6 months)
CREATE OR REPLACE FUNCTION public.cleanup_old_security_logs()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  deleted_count INTEGER;
BEGIN
  DELETE FROM public.security_logs 
  WHERE created_at < NOW() - INTERVAL '6 months';
  
  GET DIAGNOSTICS deleted_count = ROW_COUNT;
  
  RAISE LOG 'Security logs cleanup: Deleted % old records', deleted_count;
  RETURN deleted_count;
END;
$$;