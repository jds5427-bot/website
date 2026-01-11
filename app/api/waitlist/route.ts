import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendVerificationEmail } from '@/lib/email'
import { z } from 'zod'
import crypto from 'crypto'

const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  company_name: z.string().optional(),
  industry: z.string().optional(),
  company_size: z.string().optional(),
  referral_source: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables at runtime
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      )
    }

    const body = await request.json()
    
    // Validate input
    const validated = waitlistSchema.parse(body)
    
    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex')
    
    // Check if email already exists
    const { data: existing } = await supabase
      .from('waitlist_signups')
      .select('id, verified')
      .eq('email', validated.email)
      .single()
    
    if (existing) {
      if (existing.verified) {
        return NextResponse.json(
          { error: 'This email is already registered and verified.' },
          { status: 400 }
        )
      } else {
        // Resend verification email
        await sendVerificationEmail(validated.email, verificationToken)
        
        // Update token
        await supabase
          .from('waitlist_signups')
          .update({ verification_token: verificationToken })
          .eq('email', validated.email)
        
        return NextResponse.json(
          { message: 'Verification email sent. Please check your inbox.' },
          { status: 200 }
        )
      }
    }
    
    // Insert new signup
    const { data, error } = await supabase
      .from('waitlist_signups')
      .insert({
        email: validated.email,
        company_name: validated.company_name || null,
        industry: validated.industry || null,
        company_size: validated.company_size || null,
        referral_source: validated.referral_source || null,
        verification_token: verificationToken,
        verified: false,
      })
      .select()
      .single()
    
    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to process signup. Please try again.' },
        { status: 500 }
      )
    }
    
    // Send verification email
    try {
      await sendVerificationEmail(validated.email, verificationToken)
    } catch (emailError) {
      console.error('Email error:', emailError)
      // Don't fail the request if email fails, but log it
    }
    
    return NextResponse.json(
      { 
        message: 'Signup successful! Please check your email to verify your address.',
        id: data.id
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.issues[0]
      return NextResponse.json(
        { error: firstError?.message || 'Validation error' },
        { status: 400 }
      )
    }
    
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    )
  }
}
