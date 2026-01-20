import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import Script from 'next/script'
import { GeneralInquiriesForm } from '@/components/GeneralInquiriesForm'

// Helper function to ensure URL has protocol
function ensureUrlProtocol(url: string): string {
  if (!url) return 'https://excede.ai'
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  return `https://${url}`
}

const baseUrl = ensureUrlProtocol(process.env.NEXT_PUBLIC_SITE_URL || 'https://excede.ai')

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with excede for questions, partnerships, or investor inquiries. Contact our team or reach out to investors@excede.ai for investment opportunities.",
  keywords: ['contact excede', 'investor inquiries', 'partnerships', 'customer service'],
  openGraph: {
    title: "Contact excede - Get in Touch",
    description: "Get in touch with excede for questions, partnerships, or investor inquiries.",
    url: `${baseUrl}/contact`,
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
}

export default function ContactPage() {
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
        name: 'Contact',
        item: `${baseUrl}/contact`,
      },
    ],
  }

  const contactStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact excede',
    description: 'Get in touch with excede for questions, partnerships, or investor inquiries',
    url: `${baseUrl}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: 'excede',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'contact@excede.ai',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'Investor Relations',
          email: 'investors@excede.ai',
        },
      ],
    },
  }

  return (
    <>
      <Script
        id="contact-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <Script
        id="contact-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }}
      />
      <article className="container py-12 md:py-24">
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
              <GeneralInquiriesForm />
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
                  <a href="mailto:investors@excede.ai" className="text-muted-foreground hover:text-foreground transition-colors underline">
                    investors@excede.ai
                  </a>
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
    </article>
    </>
  )
}
