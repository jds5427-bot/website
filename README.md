# excede Pre-Launch Website

A modern, conversion-focused pre-launch website built with Next.js 14 to build a waitlist for the excede SaaS platform launching in Q2 2026.

## Features

- **Landing Page**: Hero section, product highlights, and clear CTAs
- **Waitlist System**: Email signup with verification flow
- **Product Pages**: Detailed information about our three core products
- **About Page**: Company mission and team information
- **Contact Page**: General inquiries and investor information
- **SEO Optimized**: Meta tags, structured data, sitemap, robots.txt
- **Analytics Ready**: Google Analytics 4 integration support

## Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Database**: Supabase (PostgreSQL) for waitlist storage
- **Email**: Resend for transactional emails
- **Form Handling**: React Hook Form + Zod validation
- **Hosting**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Resend account (for email)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Configure your environment variables in `.env.local`:
   - Supabase URL and keys
   - Resend API key
   - Site URL
   - Google Analytics ID (optional)

4. Set up Supabase database:
   - Create a new Supabase project
   - Run the SQL from `supabase-schema.sql` in the Supabase SQL Editor

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Landing page
│   ├── waitlist/           # Waitlist pages
│   ├── products/           # Product details page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── api/                # API routes
│   ├── sitemap.ts          # Sitemap generation
│   └── robots.ts           # Robots.txt
├── components/
│   ├── ui/                 # shadcn components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── WaitlistForm.tsx
│   └── Analytics.tsx
├── lib/
│   ├── supabase.ts         # Supabase client
│   ├── email.ts            # Email utilities
│   └── utils.ts
└── supabase-schema.sql     # Database schema
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set all environment variables in your hosting platform:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_SITE_URL` (your production domain)
- `NEXT_PUBLIC_GA_ID` (optional)

## Database Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Go to SQL Editor
3. Copy and paste the contents of `supabase-schema.sql`
4. Run the SQL to create the `waitlist_signups` table

## Email Setup

1. Create a Resend account at [resend.com](https://resend.com)
2. Get your API key
3. Add it to your environment variables
4. Update the "from" email address in `lib/email.ts` to match your verified domain

## Customization

- **Branding**: Update colors in `tailwind.config.js` and component files
- **Content**: Edit page content in `app/` directory
- **Email Templates**: Customize email HTML in `lib/email.ts`
- **Metadata**: Update SEO metadata in `app/layout.tsx` and individual pages

## License

Proprietary - All rights reserved
