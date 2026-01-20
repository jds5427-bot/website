import { MetadataRoute } from 'next'

// Helper function to ensure URL has protocol
function ensureUrlProtocol(url: string): string {
  if (!url) return 'https://excede.ai'
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  return `https://${url}`
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = ensureUrlProtocol(process.env.NEXT_PUBLIC_SITE_URL || 'https://excede.ai')
  
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
