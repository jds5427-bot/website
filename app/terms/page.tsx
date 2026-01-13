import { Metadata } from 'next'
import Script from 'next/script'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://excede.ai'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for excede - Read our terms and conditions for using our services. Understand your rights and obligations when using the excede platform.',
  keywords: ['terms of service', 'terms and conditions', 'user agreement', 'service terms'],
  openGraph: {
    title: 'Terms of Service | excede',
    description: 'Terms of Service for excede - Read our terms and conditions for using our services.',
    url: `${baseUrl}/terms`,
  },
  alternates: {
    canonical: `${baseUrl}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
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
        name: 'Terms of Service',
        item: `${baseUrl}/terms`,
      },
    ],
  }

  return (
    <>
      <Script
        id="terms-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <article className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Terms of Service
      </h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Agreement to Terms</h2>
          <p>
            By accessing or using excede ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, then you may not access the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Description of Service</h2>
          <p>
            excede is a unified SaaS platform providing AI-powered business development, project management, and billing solutions for professional services firms. Our services are currently in development and launching in Q2 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Waitlist and Beta Access</h2>
          <p>
            By joining our waitlist, you acknowledge that:
          </p>
          <ul>
            <li>Your participation does not guarantee access to the Service</li>
            <li>We reserve the right to prioritize access at our sole discretion</li>
            <li>We may contact you via the email address you provide</li>
            <li>You may opt out of communications at any time</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
          </p>
          <ul>
            <li>Maintaining the security of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any illegal purpose or in violation of any laws</li>
            <li>Violate any intellectual property rights of others</li>
            <li>Transmit any viruses, malware, or harmful code</li>
            <li>Attempt to gain unauthorized access to the Service or related systems</li>
            <li>Interfere with or disrupt the Service or servers connected to the Service</li>
            <li>Use automated systems to access the Service without permission</li>
            <li>Impersonate any person or entity</li>
            <li>Collect or store personal data about other users without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are owned by exceda, inc. and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Service without prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">User Content</h2>
          <p>
            You retain ownership of any content you submit, post, or display on or through the Service ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and distribute such content for the purpose of providing and improving our Service.
          </p>
          <p>
            You represent and warrant that you have all necessary rights to grant this license and that your User Content does not violate any third-party rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Payment and Billing</h2>
          <p>
            If you purchase access to our Service, you agree to pay all fees associated with your subscription. Fees are subject to change with reasonable notice. All fees are non-refundable except as required by law or as explicitly stated in our refund policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Service Availability</h2>
          <p>
            We strive to ensure the Service is available, but we do not guarantee uninterrupted, secure, or error-free operation. The Service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, EXCEDA, INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SERVICE.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless exceda, inc., its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of the Service or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will cease immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of [Your Jurisdiction].
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between you and exceda, inc. regarding the Service and supersede all prior and contemporaneous written or oral agreements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:legal@excede.ai" className="text-purple-600 hover:underline">legal@excede.ai</a><br />
            <strong>Website:</strong> <a href="https://excede.ai" className="text-purple-600 hover:underline">https://excede.ai</a>
          </p>
        </section>
      </div>
    </article>
    </>
  )
}
