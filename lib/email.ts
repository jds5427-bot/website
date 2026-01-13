import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder-key')

export async function sendVerificationEmail(email: string, token: string) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set. Email will not be sent.')
    throw new Error('Email service not configured')
  }

  const verifyUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/waitlist/verify?token=${token}`
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'excede <noreply@excede.ai>',
      to: email,
      subject: 'Verify your email - excede',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to excede</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
              <p style="font-size: 16px; margin-bottom: 20px;">Thank you for joining our waitlist! We're excited to have you on board.</p>
              <p style="font-size: 16px; margin-bottom: 30px;">Please verify your email address to complete your signup and stay updated on our launch progress.</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${verifyUrl}" style="display: inline-block; background: #667eea; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">Verify Email Address</a>
              </div>
              <p style="font-size: 14px; color: #666; margin-top: 30px;">If the button doesn't work, copy and paste this link into your browser:</p>
              <p style="font-size: 12px; color: #999; word-break: break-all;">${verifyUrl}</p>
              <p style="font-size: 14px; color: #666; margin-top: 30px;">We're launching in Q2 2026 and will keep you updated on our progress, beta opportunities, and early access.</p>
              <p style="font-size: 14px; color: #666; margin-top: 20px;">Best regards,<br>The excede Team</p>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Error sending verification email:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Failed to send verification email:', error)
    throw error
  }
}

export async function sendWelcomeEmail(email: string) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set. Email will not be sent.')
    throw new Error('Email service not configured')
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'excede <noreply@excede.ai>',
      to: email,
      subject: "You're all set! - excede",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">You're All Set!</h1>
            </div>
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
              <p style="font-size: 16px; margin-bottom: 20px;">Thank you for verifying your email! You're now on our waitlist for early access to excede.</p>
              <h2 style="font-size: 20px; margin-top: 30px; margin-bottom: 15px;">What's Next?</h2>
              <ul style="font-size: 16px; line-height: 1.8; color: #555;">
                <li>We'll keep you updated on our product development progress</li>
                <li>You'll be among the first to know about beta testing opportunities</li>
                <li>We'll notify you as soon as we launch in Q2 2026</li>
              </ul>
              <p style="font-size: 16px; margin-top: 30px;">In the meantime, feel free to learn more about what we're building:</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/products" style="display: inline-block; background: #667eea; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">Explore Our Products</a>
              </div>
              <p style="font-size: 14px; color: #666; margin-top: 30px;">If you have any questions, just reply to this email - we'd love to hear from you!</p>
              <p style="font-size: 14px; color: #666; margin-top: 20px;">Best regards,<br>The excede Team</p>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('Error sending welcome email:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Failed to send welcome email:', error)
    throw error
  }
}
