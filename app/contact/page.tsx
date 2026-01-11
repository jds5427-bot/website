import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Contact Us - excede",
  description: "Get in touch with excede for questions, partnerships, or investor inquiries.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>General Inquiries</CardTitle>
              <CardDescription>
                Questions about our products, waitlist, or general information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" suppressHydrationWarning>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4">
                Note: This is a demo form. For production, integrate with your email service or contact management system.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Investor Inquiries</CardTitle>
              <CardDescription>
                Interested in learning more about investment opportunities?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  We're currently in pre-fundraising and building our waitlist. If you're interested in learning more about investment opportunities, please reach out.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">investors@excede.ai</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-2">Key Information</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Launch: Q2 2026</li>
                  <li>• Target Market: Professional Services Firms</li>
                  <li>• Three Core Products: Business Development, Project Management, Billing</li>
                  <li>• Technology: AI-powered automation with enterprise integrations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Join Our Waitlist</h2>
              <p className="text-muted-foreground mb-4">
                Be among the first to access our platform when we launch
              </p>
              <Button asChild>
                <Link href="/waitlist">Join the Waitlist</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
