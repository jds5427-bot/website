import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  metadataBase: new URL(baseUrl),
  title: {
    default: "excede - AI-Powered Business Development for Professional Services",
    template: "%s | excede"
  },
  description: "Unified SaaS platform for professional services firms. AI-powered business development, project management, and financial analytics. Launching Q2 2026.",
  keywords: ["SaaS", "professional services", "MEP engineering", "business development", "project management", "billing software", "AI automation", "CRM", "financial analytics", "workflow automation"],
  authors: [{ name: "excede" }],
  creator: "excede",
  publisher: "excede",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/icon.png',
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "excede",
    title: "excede - AI-Powered Business Development for Professional Services",
    description: "Unified SaaS platform for professional services firms. AI-powered business development, project management, and financial analytics. Launching Q2 2026.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "excede - AI-Powered Business Development Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "excede - AI-Powered Business Development for Professional Services",
    description: "Unified SaaS platform for professional services firms. Launching Q2 2026.",
    images: [`${baseUrl}/og-image.png`],
    creator: "@excede",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'excede',
      legalName: 'excede, inc.',
      description: 'AI-powered business development automation platform for professional services firms',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      sameAs: [
        'https://www.linkedin.com/company/excede-ai',
        'https://www.instagram.com/excede.ai/#',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          email: 'contact@excede.ai',
          availableLanguage: 'English',
        },
        {
          '@type': 'ContactPoint',
          contactType: 'Investor Relations',
          email: 'investors@excede.ai',
          availableLanguage: 'English',
        },
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'excede',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        availabilityStarts: '2026-04-01',
        priceValidUntil: '2026-12-31',
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: 30,
          returnMethod: 'https://schema.org/ReturnByMail',
          returnFees: 'https://schema.org/FreeReturn',
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: '0',
            currency: 'USD',
          },
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressCountry: 'US',
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            businessDays: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
              ],
            },
            cutoffTime: '14:00',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 0,
              maxValue: 0,
              unitCode: 'DAY',
            },
            transitTime: {
              '@type': 'QuantitativeValue',
              minValue: 0,
              maxValue: 0,
              unitCode: 'DAY',
            },
          },
        },
      },
      description: 'AI-powered business development, project management, and financial analytics platform for professional services firms',
      url: baseUrl,
      publisher: {
        '@type': 'Organization',
        name: 'excede',
        url: baseUrl,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1',
        bestRating: '5',
        worstRating: '1',
      },
      featureList: [
        'AI-powered email outreach',
        'Client relationship management',
        'Project deliverable tracking',
        'Financial analytics and billing',
        'Microsoft 365 integration',
        'Zoho integration',
      ],
      softwareHelp: {
        '@type': 'CreativeWork',
        url: `${baseUrl}/contact`,
      },
    },
  ]

  return (
    <html lang="en">
      <head>
        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
