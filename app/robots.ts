import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://excede.ai'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/waitlist/verify'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
