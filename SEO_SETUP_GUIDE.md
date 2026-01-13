# SEO Setup Guide - Next Steps

## What is an Open Graph Image?

An **Open Graph (OG) image** is the preview image that appears when your website is shared on social media platforms (Facebook, Twitter/X, LinkedIn, etc.), messaging apps, and some search engines.

When someone shares a link to your website:
- **Without OG image**: A generic preview with just text
- **With OG image**: A rich preview with your branding, title, description, and a custom image

### Requirements:
- **Dimensions**: 1200 x 630 pixels (recommended)
- **Format**: PNG or JPG
- **File size**: Under 8MB (smaller is better for faster loading)
- **Location**: Place in `/public/og-image.png`

### What to Include in Your OG Image:
1. Your logo/branding
2. Main headline/tagline
3. Key visual elements (can match your website design)
4. Make it visually appealing and on-brand

### How to Create It:
- **Option 1**: Use a design tool (Canva, Figma, Adobe)
- **Option 2**: Use an online OG image generator
- **Option 3**: Export from your existing design assets

---

## Verification Codes

Verification codes are provided by search engines to prove you own the website. They help you:
- Access search console tools
- View search performance data
- Submit sitemaps
- Monitor indexing status

### Where to Get Verification Codes:

#### 1. Google Search Console
1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Select "URL prefix" and enter: `https://excede.ai`
4. Choose verification method (recommended: HTML tag)
5. Copy the verification code (looks like: `<meta name="google-site-verification" content="ABC123..." />`)
6. Extract the content value (the part after `content="`)

#### 2. Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Click "Add a Site"
3. Enter: `https://excede.ai`
4. Choose verification method (HTML tag)
5. Copy the verification code

#### 3. Yandex Webmaster (optional, mainly for Russian market)
1. Go to https://webmaster.yandex.com
2. Add your site and get verification code

---

## Step-by-Step Implementation

### Step 1: Create and Add Open Graph Image

1. **Create the image** (1200x630px) with your branding
2. **Save it** as `og-image.png`
3. **Place it** in the `/public` folder
4. The code is already set up - just add the image file!

**File location:** `website/public/og-image.png`

---

### Step 2: Add Verification Codes

Once you have your verification codes:

1. Open `website/app/layout.tsx`
2. Find the `verification` section in metadata (around line 78-83)
3. Uncomment and add your codes:

```typescript
verification: {
  google: 'your-google-verification-code-here',
  bing: 'your-bing-verification-code-here',
  // yandex: 'your-yandex-verification-code-here', // Optional
},
```

---

### Step 3: Create Web App Manifest

A manifest.json file enables your site to be installed as a PWA (Progressive Web App) and improves mobile experience.

1. Create a file: `website/public/manifest.json`
2. Add this content:

```json
{
  "name": "excede - AI-Powered Business Development",
  "short_name": "excede",
  "description": "Unified SaaS platform for professional services firms",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#6366f1",
  "icons": [
    {
      "src": "/icon.png",
      "sizes": "any",
      "type": "image/png"
    }
  ]
}
```

The manifest is already referenced in your layout.tsx - just create the file!

---

### Step 4: Monitor with Google Search Console

After deployment:

1. **Verify your site** in Google Search Console (Step 2)
2. **Submit your sitemap**:
   - Go to Sitemaps section
   - Add: `https://excede.ai/sitemap.xml`
   - Click "Submit"
3. **Monitor performance**:
   - Check indexing status
   - View search queries
   - Monitor Core Web Vitals
   - Fix any crawl errors

---

## Quick Checklist

- [ ] Create `og-image.png` (1200x630px) and place in `/public/`
- [ ] Get Google Search Console verification code
- [ ] Get Bing Webmaster verification code (optional)
- [ ] Add verification codes to `app/layout.tsx`
- [ ] Create `public/manifest.json`
- [ ] Deploy your site
- [ ] Verify site ownership in search consoles
- [ ] Submit sitemap: `https://excede.ai/sitemap.xml`
- [ ] Monitor performance over time

---

## Testing Your Setup

### Test Open Graph Image:
1. Use Facebook's Sharing Debugger: https://developers.facebook.com/tools/debug/
2. Enter your URL and click "Debug"
3. Click "Scrape Again" to see your OG image

### Test Structured Data:
1. Use Google's Rich Results Test: https://search.google.com/test/rich-results
2. Enter your URL
3. Verify all structured data is detected

### Test Overall SEO:
1. Use Google's PageSpeed Insights: https://pagespeed.web.dev/
2. Check mobile-friendliness
3. Review SEO score

---

## Notes

- OG images are cached by social platforms - you may need to use their debug tools to refresh
- Verification codes are unique per domain - don't share them publicly
- Manifest.json improves mobile experience and enables "Add to Home Screen"
- Search engines may take a few days to index your changes
