import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://domyhomework-co.vercel.app'
  
  return {
    rules: {
      userAgent: '*',
      allow: ['/favicon.ico', '/js/*.js', '/css/*.css', '/'],
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}