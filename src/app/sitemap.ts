import { MetadataRoute } from 'next'
import servicePages from '@/data/servicePages.json'
import blogs from '@/data/blogs.json'
import staticPagesData from '@/data/staticPages.json'

type ServicePage = {
  slug: string
  [key: string]: any
}

type StaticPage = {
  slug: string
  title: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://domyhomework-co.vercel.app'
  
  // Cast JSON data to proper type
  const staticPages = staticPagesData as StaticPage[]
  
  // Static pages - NOW FULLY DYNAMIC FROM JSON!
  const staticPageUrls = staticPages.map((page) => ({
    url: page.slug ? `${baseUrl}/${page.slug}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Service pages
  const servicePageUrls = servicePages.map((page: ServicePage) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog posts
  const blogUrls = blogs.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPageUrls, ...servicePageUrls, ...blogUrls]
}