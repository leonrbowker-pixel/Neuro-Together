// Supabase Configuration
const SUPABASE_URL = 'https://lomndhkkgunxuarrobxz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvbW5kaGtrZ3VueXVhcnJvYnh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzMDQzNDUsImV4cCI6MjEwNjg4MDM0NX0.5sSqw0LrK8XulUuw9E_An5_uMOgG288tLc0iVLJL93M';

// Initialize the Supabase client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);