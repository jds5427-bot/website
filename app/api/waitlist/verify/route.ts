import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { sendWelcomeEmail } from '@/lib/email'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const token = searchParams.get('token')
    
    if (!token) {
      return NextResponse.json(
        { error: 'Verification token is required' },
        { status: 400 }
      )
    }
    
    // Check if service role key is configured
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY === 'placeholder-service-key') {
      console.error('SUPABASE_SERVICE_ROLE_KEY is not configured')
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      )
    }
    
    // Use service role client to bypass RLS for server-side operations
    const supabase = createServerClient()
    
    // Find signup by token
    const { data: signup, error: findError } = await supabase
      .from('waitlist_signups')
      .select('*')
      .eq('verification_token', token)
      .single()
    
    if (findError) {
      console.error('Find error:', JSON.stringify(findError, null, 2))
      console.error('Token searched:', token)
      return NextResponse.json(
        { error: `Invalid or expired verification token: ${findError.message || 'Token not found'}` },
        { status: 400 }
      )
    }
    
    if (!signup) {
      console.error('No signup found for token:', token)
      return NextResponse.json(
        { error: 'Invalid or expired verification token' },
        { status: 400 }
      )
    }
    
    if (signup.verified) {
      // Already verified, redirect to success page
      return NextResponse.redirect(
        new URL('/waitlist/verify?verified=true', request.url)
      )
    }
    
    // Mark as verified
    const { error: updateError } = await supabase
      .from('waitlist_signups')
      .update({
        verified: true,
        subscribed_at: new Date().toISOString(),
        verification_token: null, // Clear token after verification
      })
      .eq('id', signup.id)
    
    if (updateError) {
      console.error('Update error:', updateError)
      return NextResponse.json(
        { error: 'Failed to verify email. Please try again.' },
        { status: 500 }
      )
    }
    
    // Send welcome email
    try {
      await sendWelcomeEmail(signup.email)
    } catch (emailError) {
      console.error('Welcome email error:', emailError)
      // Don't fail if email fails
    }
    
    // Redirect to success page
    return NextResponse.redirect(
      new URL('/waitlist/verify?verified=true', request.url)
    )
  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred during verification.' },
      { status: 500 }
    )
  }
}
