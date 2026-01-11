import { WaitlistForm } from '@/components/WaitlistForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function WaitlistPage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Join the Waitlist</h1>
          <p className="text-muted-foreground">
            Be among the first to access excede when we launch in Q2 2026
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Get Early Access</CardTitle>
            <CardDescription>
              Sign up to receive updates on our launch progress and beta opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <WaitlistForm />
          </CardContent>
        </Card>
        <p className="text-sm text-center text-muted-foreground mt-6">
          By joining, you agree to receive updates about excede. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}
