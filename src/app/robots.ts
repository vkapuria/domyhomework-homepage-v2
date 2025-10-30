import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/', // ✅ ADD: Block Next.js static resources
        ],
      },
    ],
    sitemap: 'https://domyhomework.co/sitemap.xml',
  }
}