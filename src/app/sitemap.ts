import { MetadataRoute } from 'next'
import servicePages from '@/data/servicePages.json'
import blogs from '@/data/blogs.json'
import staticPagesData from '@/data/staticPages.json'
import writers from '@/data/writers.json'
import tier2Config from '@/data/configs/tier2-subjects.json'

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
  
  // ✅ FIXED: Static pages with trailing slashes
  const staticPageUrls = staticPages.map((page) => ({
    url: page.slug ? `${baseUrl}/${page.slug}/` : `${baseUrl}/`, // Added trailing slash
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // ✅ FIXED: T1 Service pages with trailing slashes
  const t1ServiceUrls = servicePages.map((page: ServicePage) => ({
    url: `${baseUrl}/${page.slug}/`, // Added trailing slash
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ✅ FIXED: T2 Service pages with trailing slashes
  const t2ServiceUrls = tier2Config.subjects.map((subject: any) => ({
    url: `${baseUrl}/${subject.slug}/`, // Added trailing slash
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // ✅ FIXED: Blog posts with trailing slashes
  const blogUrls = blogs.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}/`, // Added trailing slash
    lastModified: new Date(post.date || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // ✅ FIXED: Writer profiles with trailing slashes
  const writerUrls = writers.map((writer: any) => ({
    url: `${baseUrl}/top-writers/${writer.id}/`, // Added trailing slash
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticPageUrls, ...t1ServiceUrls, ...t2ServiceUrls, ...blogUrls, ...writerUrls]
}