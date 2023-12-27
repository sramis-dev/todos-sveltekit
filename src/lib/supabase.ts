import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://tvqwfgsdirtxxsxwjomo.supabase.co';
const supabaseKey =
  process.env.SUPABASE_ANNON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2cXdmZ3NkaXJ0eHhzeHdqb21vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM1OTA1NzEsImV4cCI6MjAxOTE2NjU3MX0.djsQSC3_SHVyvKy5CflvrG2v1RgTqlFzqCsMqs0RrGM';

export const supabase = createClient(supabaseUrl, supabaseKey);
