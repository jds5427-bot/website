import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Sparkles, BarChart3, Zap, Mail, Calendar, TrendingUp, FileText } from 'lucide-react'
import type { Metadata } from 'next'
import Script from 'next/script'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://excede.ai'

export const metadata: Metadata = {
  title: "Products - Three Powerful Tools for Professional Services",
  description: "Learn about excede's three core products: AI-Powered Business Development, Project Management System, and Financial Analytics & Billing. Unified SaaS platform for professional services firms.",
  keywords: ['AI business development software', 'project management for engineers', 'financial analytics software', 'billing software', 'CRM for professional services'],
  openGraph: {
    title: "excede Products - Three Powerful Tools for Professional Services",
    description: "Learn about our three core products: AI Business Development, Project Management, and Financial Analytics & Billing.",
    url: `${baseUrl}/products`,
  },
  alternates: {
    canonical: `${baseUrl}/products`,
  },
}

export default function ProductsPage() {
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${baseUrl}/products`,
      },
    ],
  }

  const productStructuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'AI-Powered Business Development',
      description: 'Automate client outreach with AI-powered email generation and intelligent contact management',
      category: 'Business Software',
      brand: {
        '@type': 'Brand',
        name: 'excede',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        availabilityStarts: '2026-04-01',
        priceValidUntil: '2026-12-31',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1',
        bestRating: '5',
        worstRating: '1',
      },
      review: [],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Project Management System',
      description: 'Track deliverables, manage team assignments, and forecast workloads with real-time visibility',
      category: 'Project Management Software',
      brand: {
        '@type': 'Brand',
        name: 'excede',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        availabilityStarts: '2026-04-01',
        priceValidUntil: '2026-12-31',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1',
        bestRating: '5',
        worstRating: '1',
      },
      review: [],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Financial Analytics & Billing',
      description: 'Comprehensive billing tracking, financial analytics, and project profitability insights',
      category: 'Financial Software',
      brand: {
        '@type': 'Brand',
        name: 'excede',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        availabilityStarts: '2026-04-01',
        priceValidUntil: '2026-12-31',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1',
        bestRating: '5',
        worstRating: '1',
      },
      review: [],
    },
  ]

  return (
    <>
      <Script
        id="products-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {productStructuredData.map((product, index) => (
        <Script
          key={index}
          id={`product-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
        />
      ))}
      <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-muted-foreground">
            Three powerful tools, one unified platform for professional services firms
          </p>
        </div>

        {/* AI Business Development */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">AI-Powered Business Development</CardTitle>
                <CardDescription>Automate and optimize client outreach</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Mail className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">AI Email Outreach</p>
                      <p className="text-sm text-muted-foreground">Automated lead creation with personalized AI-generated drafts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Contact Management</p>
                      <p className="text-sm text-muted-foreground">Find existing contacts and new potential contacts via data sets like Apollo.io in one place with intelligent filtering</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Document Generation</p>
                      <p className="text-sm text-muted-foreground">AI-powered proposal and document creation with company branding</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">CRM Management</p>
                      <p className="text-sm text-muted-foreground">Full pipeline management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Management */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">Project Management System</CardTitle>
                <CardDescription>Track deliverables and manage team workloads</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Deliverable Tracking</p>
                      <p className="text-sm text-muted-foreground">Priority-based tracking with subtasks and file attachments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Calendar Integration</p>
                      <p className="text-sm text-muted-foreground">Automatic Outlook calendar sync for all team members</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Workload Forecasting</p>
                      <p className="text-sm text-muted-foreground">Projected busyness calendar with effort-based calculations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Team Management</p>
                      <p className="text-sm text-muted-foreground">Multi-person assignments by trade (HVAC, Electrical, Plumbing)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Analytics */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl">Financial Analytics & Billing</CardTitle>
                <CardDescription>Comprehensive financial insights and billing management</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Billing Forecasts</p>
                      <p className="text-sm text-muted-foreground">48-month spreadsheet-style forecasting with status tracking</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <BarChart3 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Financial Dashboards</p>
                      <p className="text-sm text-muted-foreground">Company-wide analytics with revenue, profit, cash flow tracking and more, with AI integration for data aggregation and projections</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <FileText className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Project Analytics</p>
                      <p className="text-sm text-muted-foreground">Multiplier calculations, profitability analysis, and aging reports</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">PM Reports</p>
                      <p className="text-sm text-muted-foreground">Project manager-level aggregations with custom AI-generated invoice follow-up emails</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  )
}
