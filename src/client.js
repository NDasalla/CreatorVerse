import { createClient } from "@supabase/supabase-js";
const PUBLIC_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xaHFhYmFxZXRwcnB1bmJma2d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0MDY0NjksImV4cCI6MjAwNzk4MjQ2OX0.ewb7sdLOwK5mIrQ5TX2IhsTNtdXUfscQbFqw7FG5uuc";
const URL = "https://nqhqabaqetprpunbfkgx.supabase.co";

export const supabase = createClient(URL, PUBLIC_API_KEY);
