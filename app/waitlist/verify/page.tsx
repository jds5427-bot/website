import Link from 'next/link'
import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

function VerifyContent({ verified }: { verified?: string }) {
  const isVerified = verified === 'true'

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          {isVerified ? (
            <>
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-2xl">Email Verified!</CardTitle>
              <CardDescription>
                Your email has been successfully verified. You're all set!
              </CardDescription>
            </>
          ) : (
            <>
              <CardTitle className="text-2xl">Verifying Email...</CardTitle>
              <CardDescription>
                Please wait while we verify your email address.
              </CardDescription>
            </>
          )}
        </CardHeader>
        {isVerified && (
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>You're now on our waitlist! Here's what happens next:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>We'll keep you updated on our product development</li>
                <li>You'll be notified about beta testing opportunities</li>
                <li>You'll be among the first to know when we launch</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <Button asChild>
                <Link href="/products">Learn About Our Products</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}

export default async function VerifyPage({
  searchParams,
}: {
  searchParams: Promise<{ verified?: string }>
}) {
  const params = await searchParams
  
  return (
    <Suspense fallback={
      <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Verifying Email...</CardTitle>
            <CardDescription>
              Please wait while we verify your email address.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    }>
      <VerifyContent verified={params.verified} />
    </Suspense>
  )
}
