import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  // Initialize Supabase client directly
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  // Sign out the user
  await supabase.auth.signOut();
  
  // Redirect to the home page
  return NextResponse.redirect(new URL('/', request.url));
} 