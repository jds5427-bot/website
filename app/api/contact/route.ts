import { NextRequest, NextResponse } from 'next/server'
import { sendContactInquiryEmail } from '@/lib/email'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables at runtime
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set.')
      return NextResponse.json(
        { 
          error: 'Server configuration error. Email service is not configured.',
        },
        { status: 500 }
      )
    }

    const body = await request.json()
    
    // Validate input
    const validated = contactSchema.parse(body)
    
    // Send email
    await sendContactInquiryEmail(
      validated.name,
      validated.email,
      validated.message
    )
    
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      )
    }
    
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
