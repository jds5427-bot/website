# Creating Your Open Graph Image

## What You Need

Create an image that will appear when your website is shared on social media.

## Specifications

- **Size**: 1200 pixels wide × 630 pixels tall (exact ratio 1.91:1)
- **Format**: PNG (recommended) or JPG
- **File size**: Keep under 1MB for best performance
- **File name**: `og-image.png`
- **Location**: Save in `website/public/og-image.png`

## What to Include

### Recommended Content:
1. **Your logo** - Place prominently (top-left or centered)
2. **Main headline** - "excede" or "excede - AI-Powered Business Development"
3. **Tagline** - "Unified SaaS Platform for Professional Services"
4. **Visual elements** - Match your brand colors (purple/indigo gradient)
5. **Call to action** - "Launching Q2 2026" or "Join the Waitlist"

### Design Tips:
- Use high contrast text (readable on mobile)
- Keep text minimal (most people won't read long text)
- Use your brand colors (purple/indigo from your site)
- Make it shareable and professional
- Ensure important info is in the center (edges may be cropped on some platforms)

## How to Create It

### Option 1: Using Canva (Easiest)
1. Go to https://www.canva.com
2. Create custom size: 1200 × 630 pixels
3. Add your logo, text, and design elements
4. Download as PNG
5. Save as `og-image.png` in `website/public/`

### Option 2: Using Figma
1. Create a new frame: 1200 × 630 pixels
2. Design your image with logo and text
3. Export as PNG
4. Save to `website/public/og-image.png`

### Option 3: Using Online Tools
- **OG Image Generator**: https://www.opengraph.xyz/
- **Social Share Preview**: https://socialsharepreview.com/

### Option 4: Use Your Existing Assets
You can use your `logo.png` and create a simple layout:
- Background with brand colors
- Your logo centered or top-left
- Text overlay with tagline

## Example Layout Ideas

### Layout 1: Centered Logo
```
┌─────────────────────────────────┐
│                                 │
│                                 │
│         [Your Logo]             │
│                                 │
│   AI-Powered Business Dev       │
│   Launching Q2 2026             │
│                                 │
└─────────────────────────────────┘
```

### Layout 2: Split Design
```
┌─────────────────────────────────┐
│ [Logo]         │   [Visual]    │
│                │                │
│ excede         │   Purple/      │
│                │   Indigo       │
│ AI-Powered     │   Gradient     │
│ Business Dev   │                │
└─────────────────────────────────┘
```

## Testing Your OG Image

Once you've added the image:

1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
   - Enter your URL
   - Click "Debug"
   - Check if image appears correctly

2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
   - Enter your URL
   - Preview how it looks on Twitter

3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
   - Enter your URL
   - See LinkedIn preview

**Note**: Social platforms cache OG images. After updating, use these tools to force a refresh.

## Quick Start

If you want something simple right now, you can:
1. Take your existing `logo.png`
2. Create a 1200×630 canvas in any image editor
3. Add a purple/indigo gradient background
4. Place your logo in the center
5. Add text "excede - AI-Powered Business Development"
6. Export as `og-image.png` to `website/public/`
