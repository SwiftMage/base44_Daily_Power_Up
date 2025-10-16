# Deployment Guide

## Environment Variables Setup

This project requires Supabase environment variables to be configured for the email signup functionality to work.

### Local Development

The `.env` file is already configured with your Supabase credentials (this file is git-ignored for security).

### Vercel Deployment

To deploy this app to Vercel, you need to add the following environment variables in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

#### Required Environment Variables:

```
VITE_SUPABASE_URL=https://zhknqbiemyoutvvumlce.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpoa25xYmllbXlvdXR2dnVtbGNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1OTQzNTQsImV4cCI6MjA3NjE3MDM1NH0.dgomxPBXUZLMLe6FfUwiNIqz_rF2fkI5hA6q_YYaZJ4
```

4. Make sure to add these for **all environments** (Production, Preview, Development)
5. Redeploy your application after adding the variables

### Supabase Database Setup

The email signup feature uses a Supabase table called `email_signups`.

If you haven't already created it, run this SQL in your Supabase SQL Editor:

```sql
-- Create the email_signups table
CREATE TABLE email_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (for signup form)
CREATE POLICY "Allow public inserts"
ON email_signups
FOR INSERT
TO anon
WITH CHECK (true);

-- Prevent public reads (only you can view via dashboard)
CREATE POLICY "Prevent public reads"
ON email_signups
FOR SELECT
TO anon
USING (false);
```

### Viewing Email Signups

To view the collected email addresses:

1. Go to your Supabase dashboard
2. Navigate to **Table Editor**
3. Select the `email_signups` table
4. You can export the data as CSV for use with email marketing tools

## Testing Locally

To test the email signup locally:

1. Make sure your `.env` file exists with the correct credentials
2. Run `npm run dev`
3. Navigate to the "Our Story" section
4. Try signing up with a test email
5. Check your Supabase dashboard to confirm the email was saved
