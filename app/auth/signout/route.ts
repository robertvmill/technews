import { createServerClient } from '@/app/lib/supabase/server';
import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const supabase = createServerClient();
  
  // Sign out the user
  await supabase.auth.signOut();
  
  // Redirect to the home page
  return NextResponse.redirect(new URL('/', request.url));
} 