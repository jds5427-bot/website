'use client'

import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react'

function VerifyContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const token = searchParams.get('token')
  const verified = searchParams.get('verified')
  
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    // If already verified via query param, show success
    if (verified === 'true') {
      setStatus('success')
      return
    }

    // If no token, show error
    if (!token) {
      setStatus('error')
      setErrorMessage('Verification token is missing.')
      return
    }

    // Call verification API
    const verifyEmail = async () => {
      try {
        const response = await fetch(`/api/waitlist/verify?token=${token}`, {
          redirect: 'follow'
        })
        
        // If redirect was followed, response.url will be the final URL
        if (response.redirected && response.url.includes('verified=true')) {
          setStatus('success')
          router.replace('/waitlist/verify?verified=true')
        } else if (response.ok) {
          // Success case
          setStatus('success')
          router.replace('/waitlist/verify?verified=true')
        } else {
          // Error case
          try {
            const data = await response.json()
            setStatus('error')
            setErrorMessage(data.error || 'Verification failed. Please try again.')
          } catch {
            setStatus('error')
            setErrorMessage('Verification failed. Please try again.')
          }
        }
      } catch (error) {
        console.error('Verification error:', error)
        setStatus('error')
        setErrorMessage('An unexpected error occurred. Please try again.')
      }
    }

    verifyEmail()
  }, [token, verified, router])

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          {status === 'loading' && (
            <>
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                <Loader2 className="h-8 w-8 text-muted-foreground animate-spin" />
              </div>
              <CardTitle className="text-2xl">Verifying Email...</CardTitle>
              <CardDescription>
                Please wait while we verify your email address.
              </CardDescription>
            </>
          )}
          {status === 'success' && (
            <>
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-2xl">Email Verified!</CardTitle>
              <CardDescription>
                Your email has been successfully verified. You're all set!
              </CardDescription>
            </>
          )}
          {status === 'error' && (
            <>
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle className="text-2xl">Verification Failed</CardTitle>
              <CardDescription>
                {errorMessage || 'Unable to verify your email address.'}
              </CardDescription>
            </>
          )}
        </CardHeader>
        {(status === 'success' || status === 'error') && (
          <CardContent className="space-y-4">
            {status === 'success' && (
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>You're now on our waitlist! Here's what happens next:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>We'll keep you updated on our product development</li>
                  <li>You'll be notified about beta testing opportunities</li>
                  <li>You'll be among the first to know when we launch</li>
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-2">
              {status === 'success' && (
                <>
                  <Button asChild>
                    <Link href="/products">Learn About Our Products</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/">Back to Home</Link>
                  </Button>
                </>
              )}
              {status === 'error' && (
                <>
                  <Button asChild>
                    <Link href="/waitlist">Try Again</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/">Back to Home</Link>
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-muted flex items-center justify-center">
              <Loader2 className="h-8 w-8 text-muted-foreground animate-spin" />
            </div>
            <CardTitle className="text-2xl">Verifying Email...</CardTitle>
            <CardDescription>
              Please wait while we verify your email address.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    }>
      <VerifyContent />
    </Suspense>
  )
}
