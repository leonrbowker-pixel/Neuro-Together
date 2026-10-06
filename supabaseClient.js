// Supabase Configuration
const SUPABASE_URL = 'https://lomndhkkgunyuarrobxz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZ';

// Attach directly to window using the CDN's supabase object
window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);