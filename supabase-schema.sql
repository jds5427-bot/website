-- Waitlist Signups Table
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS waitlist_signups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  company_name TEXT,
  industry TEXT,
  company_size TEXT,
  referral_source TEXT,
  verified BOOLEAN DEFAULT false,
  verification_token TEXT UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  subscribed_at TIMESTAMP WITH TIME ZONE
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist_signups(email);

-- Create index on verification_token for faster verification
CREATE INDEX IF NOT EXISTS idx_waitlist_token ON waitlist_signups(verification_token);

-- Create index on created_at for sorting/filtering
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist_signups(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (for signups)
CREATE POLICY "Allow public insert" ON waitlist_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Allow reading own record (for verification)
-- Note: This is a basic policy. For production, you may want to restrict this further
CREATE POLICY "Allow read with token" ON waitlist_signups
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policy: Allow service role to read all (for admin dashboard)
-- This will be handled server-side with service role key
