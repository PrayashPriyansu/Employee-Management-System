import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ejpxwgiuevcqdleenyov.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqcHh3Z2l1ZXZjcWRsZWVueW92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5MjEyMjksImV4cCI6MjA1MjQ5NzIyOX0.bVhaDGhe5plRjG1oQRBL5sM7NSrrGvfv26FV6XEs0qc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
