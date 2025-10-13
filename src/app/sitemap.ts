import { MetadataRoute } from 'next'
import servicePages from '@/data/servicePages.json'
import blogs from '@/data/blogs.json'
import staticPagesData from '@/data/staticPages.json'
import writers from '@/data/writers.json' // ✅ Add this
import tier2Config from '@/data/configs/tier2-subjects.json' // ← ADD THIS

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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://domyhomework.co'
  
  const staticPages = staticPagesData as StaticPage[]
  
  // Static pages
  const staticPageUrls = staticPages.map((page) => ({
    url: page.slug ? `${baseUrl}/${page.slug}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Service pages
  // T1 Service pages (from servicePages.json)
const t1ServiceUrls = servicePages.map((page: ServicePage) => ({
  url: `${baseUrl}/${page.slug}`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.8,
}))

// T2 Service pages (from tier2-subjects.json)
const t2ServiceUrls = tier2Config.subjects.map((subject: any) => ({
  url: `${baseUrl}/${subject.slug}`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.7, // Slightly lower priority than T1 hub pages
}))

  // Blog posts
  const blogUrls = blogs.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // ✅ ADD: Writer profiles (noindex but include in sitemap for discovery)
  const writerUrls = writers.map((writer: any) => ({
    url: `${baseUrl}/top-writers/${writer.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6, // Lower priority since noindexed
  }))

  return [...staticPageUrls, ...t1ServiceUrls, ...t2ServiceUrls, ...blogUrls, ...writerUrls]
}