import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: "About Us - excede",
  description: "Learn about excede and our mission to transform professional services firms with AI-powered tools.",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About excede</h1>
          <p className="text-lg text-muted-foreground">
            Building the future of professional services management
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                excede is an AI-powered business development automation platform designed to help professional services firms automate and optimize their client outreach, proposal generation, and relationship management.
              </p>
              <p className="text-muted-foreground">
                Originally built for MEP (Mechanical, Electrical, Plumbing) engineering firms, our platform is adaptable to any professional services industry. We're creating a unified SaaS solution that brings together business development, project management, and financial analytics in one powerful platform.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Why We're Building This</h2>
              <p className="text-muted-foreground mb-4">
                Professional services firms face unique challenges:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                <li>Manual client outreach is time-consuming and inconsistent</li>
                <li>Project deliverables get lost in email threads and spreadsheets</li>
                <li>Billing and financial tracking is fragmented across multiple tools</li>
                <li>There's no unified view of business health and performance</li>
              </ul>
              <p className="text-muted-foreground">
                We're solving these problems by combining AI-powered automation with intuitive project management and comprehensive financial analytics. Our platform integrates seamlessly with the tools you already use—Microsoft 365, Zoho, Clockify, and more—so you can work smarter, not harder.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Jonathan Sharp</h3>
                  <p className="text-sm text-muted-foreground mb-3">President / Chief Executive Officer / Director</p>
                  <p className="text-muted-foreground">
                    Jonathan is a Partner and Senior Mechanical Engineer with over 10 years of experience in the MEP consulting industry. Having worked across all phases of engineering services in diverse market sectors including commercial, education, media, infrastructure, hospitality, healthcare, and laboratories, he has led numerous high-profile projects and delivered innovative engineering solutions. His extensive project portfolio spans his roles at COLLECTIF, Vanderweil Engineers, and AMA Group, where he honed his expertise in mechanical systems design, project management, and team leadership.
                  </p>
                  <p className="text-muted-foreground mt-3">
                    Through his decade-plus in the MEP consulting industry, Jonathan has experienced the pain points of manual client outreach, fragmented project management, and disconnected billing systems firsthand. Recognizing the need for better tools, he worked to develop excede specifically with these industry pain points in mind, creating solutions that address the real challenges professional services firms face every day.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Rafael Figueroa</h3>
                  <p className="text-sm text-muted-foreground mb-3">Chairman of the Board / Director</p>
                  <p className="text-muted-foreground">
                    Rafael is a Partner and Senior Mechanical Engineer with over 20 years of extensive experience in project engineering and management. Trained in San Juan, Boston, and New York City, he specializes in designing mechanical systems and controls across healthcare, laboratories, hospitality, residential, mixed-use, commercial, and education sectors. Since 2016, he has been leading COLLECTIF as a Minority Business Enterprise (MBE), partnering with companies and organizations promoting diversity and inclusion. Throughout his career, Rafael has contributed to all phases of engineering services at organizations including Vanderweil Engineers, Cannon Design, Stantec, WeWork/WeLive, and CitizenM Hotels, demonstrating his versatility and expertise.
                  </p>
                  <p className="text-muted-foreground mt-3">
                    With over two decades in the MEP consulting industry, Rafael has experienced the operational challenges of managing complex projects, client relationships, and financial tracking across multiple organizations firsthand. His deep understanding of the industry's pain points, combined with his leadership experience, has been instrumental in developing excede's solutions to address the specific needs of professional services firms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Launch Timeline</h2>
              <p className="text-muted-foreground mb-4">
                We're currently in pre-launch and building our waitlist of early adopters. Our full multi-tenant SaaS platform is scheduled to launch in <strong>Q2 2026</strong>.
              </p>
              <p className="text-muted-foreground">
                Join our waitlist to be among the first to access the platform, receive beta testing invitations, and help shape the future of professional services management.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
