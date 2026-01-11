# Deployment Guide

This guide will help you deploy the excede pre-launch website to production.

## Prerequisites

1. **Supabase Account**
   - Sign up at [supabase.com](https://supabase.com)
   - Create a new project
   - Run the SQL from `supabase-schema.sql` in the SQL Editor

2. **Resend Account**
   - Sign up at [resend.com](https://resend.com)
   - Verify your domain (or use the default domain for testing)
   - Get your API key

3. **Vercel Account** (Recommended)
   - Sign up at [vercel.com](https://vercel.com)
   - Connect your GitHub account

4. **Domain** (Optional)
   - Purchase a domain (e.g., excede.ai)
   - Or use Vercel's free domain

## Step-by-Step Deployment

### 1. Set Up Supabase

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy the contents of `supabase-schema.sql`
4. Paste and run the SQL to create the `waitlist_signups` table
5. Go to **Settings** > **API** to get your:
   - Project URL (`NEXT_PUBLIC_SUPABASE_URL`)
   - Anon/Public key (`NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - Service role key (`SUPABASE_SERVICE_ROLE_KEY`) - Keep this secret!

### 2. Set Up Resend

1. Log in to Resend
2. Go to **API Keys** and create a new API key
3. Copy the API key
4. (Optional) Add and verify your domain in **Domains**
5. Update the "from" email in `lib/email.ts` to match your verified domain

### 3. Deploy to Vercel

#### Option A: Deploy via GitHub

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Add environment variables in the Vercel dashboard:

   **Required:**
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
   - `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (keep secret!)
   - `RESEND_API_KEY` - Your Resend API key
   - `NEXT_PUBLIC_SITE_URL` - Your production URL (e.g., https://excede.ai)

   **Optional:**
   - `NEXT_PUBLIC_GA_ID` - Your Google Analytics 4 measurement ID

6. Click **Deploy**

#### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Add environment variables:
   ```bash
   vercel env add NEXT_PUBLIC_SUPABASE_URL
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
   vercel env add SUPABASE_SERVICE_ROLE_KEY
   vercel env add RESEND_API_KEY
   vercel env add NEXT_PUBLIC_SITE_URL
   ```

5. Deploy to production:
   ```bash
   vercel --prod
   ```

### 4. Configure Domain (Optional)

1. In Vercel dashboard, go to your project
2. Navigate to **Settings** > **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions
5. Update `NEXT_PUBLIC_SITE_URL` environment variable to your custom domain

### 5. Test the Deployment

1. Visit your deployed site
2. Test the waitlist signup form
3. Check that verification emails are sent
4. Verify email verification flow works
5. Test all pages load correctly

### 6. Post-Deployment Checklist

- [ ] All environment variables are set correctly
- [ ] Waitlist signup form works
- [ ] Email verification emails are sent
- [ ] Welcome emails are sent after verification
- [ ] All pages load without errors
- [ ] Mobile responsiveness works
- [ ] SEO meta tags are correct
- [ ] Google Analytics is tracking (if configured)
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`

## Monitoring

### Vercel Analytics
- Built-in analytics available in Vercel dashboard
- View page views, unique visitors, and performance metrics

### Google Analytics
- Set up GA4 property
- Add measurement ID to environment variables
- View detailed user behavior and conversion tracking

### Supabase Dashboard
- Monitor database usage
- View waitlist signups in the table
- Check API usage and limits

## Troubleshooting

### Emails Not Sending
- Verify `RESEND_API_KEY` is set correctly
- Check Resend dashboard for email logs
- Ensure domain is verified in Resend (if using custom domain)
- Check server logs in Vercel for errors

### Database Errors
- Verify Supabase environment variables are correct
- Check Supabase dashboard for connection issues
- Ensure RLS policies are set correctly
- Verify table schema matches `supabase-schema.sql`

### Build Errors
- Check all environment variables are set
- Review build logs in Vercel
- Ensure all dependencies are in `package.json`
- Check TypeScript errors locally with `npm run build`

## Security Notes

- Never commit `.env` files to version control
- Keep `SUPABASE_SERVICE_ROLE_KEY` secret (only use server-side)
- Use environment variables for all sensitive data
- Enable RLS (Row Level Security) in Supabase
- Regularly rotate API keys

## Next Steps

After deployment:
1. Monitor waitlist growth
2. Set up email automation for updates
3. A/B test CTA copy and placement
4. Add more content as needed
5. Prepare for Q2 2026 launch!
