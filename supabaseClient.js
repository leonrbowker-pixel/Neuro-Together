// Supabase Configuration
const SUPABASE_URL = 'https://lomndhkkgunyuarrobxz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvbW5kaGtrZ3VueXVhcnJvYnh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMDQzNDUsImV4cCI6MjEwNjg4MDM0NX0.5sSqw0LrK8XulUuw9E_An5_uMOgG288tLc0iVLJL93M';

// Attach directly to window using the CDN's supabase object
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: window.sessionStorage,
    persistSession: true,
    autoRefreshToken: true
  }
});