import { Metadata } from 'next'
import Script from 'next/script'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://excede.ai'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for excede - Learn how we collect, use, and protect your information. Understand your privacy rights and how we safeguard your data.',
  keywords: ['privacy policy', 'data protection', 'privacy rights', 'GDPR'],
  openGraph: {
    title: 'Privacy Policy | excede',
    description: 'Privacy Policy for excede - Learn how we collect, use, and protect your information.',
    url: `${baseUrl}/privacy`,
  },
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
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
        name: 'Privacy Policy',
        item: `${baseUrl}/privacy`,
      },
    ],
  }

  return (
    <>
      <Script
        id="privacy-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <article className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Privacy Policy
      </h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p>
            exceda, inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or join our waitlist.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Join our waitlist</li>
            <li>Contact us through our contact form</li>
            <li>Subscribe to our newsletter or marketing communications</li>
            <li>Use our services</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Company name</li>
            <li>Job title</li>
            <li>Phone number</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages you visit and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>Date and time of your visit</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Send you updates about our product launch and services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Analyze website usage and trends to improve user experience</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul>
            <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as email hosting, analytics, and customer support.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            <li><strong>With Your Consent:</strong> We may share your information with your explicit consent.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and receive a copy of your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict processing of your information</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Unsubscribe from marketing communications</li>
          </ul>
          <p>To exercise these rights, please contact us at <a href="mailto:privacy@excede.ai" className="text-purple-600 hover:underline">privacy@excede.ai</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any website you visit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:privacy@excede.ai" className="text-purple-600 hover:underline">privacy@excede.ai</a><br />
            <strong>Website:</strong> <a href="https://excede.ai" className="text-purple-600 hover:underline">https://excede.ai</a>
          </p>
        </section>
      </div>
    </article>
    </>
  )
}
