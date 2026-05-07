// Hili ndilo file lako la siri la uunganisho
const SUPABASE_URL = 'https://ydkqcpextbjsdmhjndfg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlka3FjcGV4dGJqc2RtaGpuZGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNTI5MTQsImV4cCI6MjA5MzcyODkxNH0.1Bdutn1PIeyChLe72olIpynLxg1xUJcG7D1gSjnjOlg';

// Tumeshabadilisha hapa kuwa 'db' ili kuzuia error
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
