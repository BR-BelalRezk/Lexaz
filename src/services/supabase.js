import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xgimipnxyodjijyqissq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnaW1pcG54eW9kamlqeXFpc3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTUyMTAsImV4cCI6MjAyMzkzMTIxMH0.j27k7tqjuJS5z5vqDQ-QDejI-oa-uDFoOmxTyQ29Iuw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
