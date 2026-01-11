import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Sparkles, BarChart3, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center space-y-8 py-24 md:py-32">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            AI-Powered Business Development
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> for Professional Services</span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Automate client outreach, streamline project management, and optimize billing with our unified SaaS platform. 
            Built by professional service experts for professional service experts.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/waitlist">Join the Waitlist</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <Link href="/products">Learn More</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Launching Q2 2026 • Early access available
          </p>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional Services Firms Deserve Better Tools
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-600">The Problem</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>Manual client outreach is time-consuming and inconsistent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>Project deliverables get lost in email threads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>Billing and financial tracking is fragmented across tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>No unified view of business health and performance</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600">Our Solution</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>AI-powered email outreach that personalizes at scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Centralized project management with real-time visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Integrated billing and financial analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>Unified dashboard for complete business insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">Three Powerful Products, One Platform</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our unified SaaS platform brings together AI-powered business development, project management, and financial analytics.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI Business Development</CardTitle>
                <CardDescription>
                  Automate client outreach with AI-powered email generation and intelligent contact management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automated weekly contact selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Personalized email drafts with AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Integrated CRM and proposal tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Microsoft 365 & Zoho integrations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Project Management</CardTitle>
                <CardDescription>
                  Track deliverables, manage team assignments, and forecast workloads with real-time visibility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Deliverable tracking with priorities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Workload forecasting and busyness calendar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automatic Outlook calendar integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Team assignment and subtask management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Financial Analytics & Billing</CardTitle>
                <CardDescription>
                  Comprehensive billing tracking, financial analytics, and project profitability insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>48-month billing forecasts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Company-wide financial dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Project multiplier and profitability analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Zoho Books & Clockify integrations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl rounded-lg border bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our waitlist to be among the first to access our unified platform when we launch in Q2 2026.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/waitlist">Join the Waitlist</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
