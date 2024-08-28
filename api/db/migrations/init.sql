-- User and Session
-- Enable the uuid-ossp extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create User table if it doesn't exist
CREATE TABLE IF NOT EXISTS "user" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    role TEXT,
    "hashed_password" TEXT,
    picture TEXT,
    job_config_completed BOOLEAN DEFAULT FALSE,
    resume_info_completed BOOLEAN DEFAULT FALSE,
    linkedin_info_completed BOOLEAN DEFAULT FALSE,
    email_verified BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS "email_verification" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
    token TEXT UNIQUE NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL
);

CREATE TABLE password_reset (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.user(id),
  token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Session table if it doesn't exist
CREATE TABLE IF NOT EXISTS "session" (
    id TEXT PRIMARY KEY,
    "user_id" UUID NOT NULL,
    "expires_at" TIMESTAMP NOT NULL,
    FOREIGN KEY ("user_id") REFERENCES "user"(id)
);

-- Create index for foreign key if it doesn't exist
CREATE INDEX IF NOT EXISTS "Session_userId_idx" ON "session"("user_id");