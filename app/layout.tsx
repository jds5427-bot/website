import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "excede - AI-Powered Business Development for Professional Services",
  description: "Unified SaaS platform for professional services firms. AI-powered business development, project management, and financial analytics. Launching Q2 2026.",
  keywords: ["SaaS", "professional services", "MEP engineering", "business development", "project management", "billing software", "AI automation"],
  authors: [{ name: "excede" }],
  openGraph: {
    title: "excede - AI-Powered Business Development",
    description: "Unified SaaS platform for professional services firms. Launching Q2 2026.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "excede - AI-Powered Business Development",
    description: "Unified SaaS platform for professional services firms. Launching Q2 2026.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://excede.ai'
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'excede',
    description: 'AI-powered business development automation platform for professional services firms',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@excede.ai',
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <Analytics />
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
