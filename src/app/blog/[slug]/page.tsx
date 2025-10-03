import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogTemplate from '@/components/BlogTemplate'
import blogsData from '@/data/blogs.json'

interface BlogPost {
    slug: string
    title: string
    metaDescription: string
    h1: string
    content: string
    publishedAt: string
    category: string
    readTime?: number
    lastUpdated?: string  // Make this optional
  }

interface BlogPageProps {
  params: {
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = blogsData.find((post: BlogPost) => post.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: (post as BlogPost).lastUpdated || post.publishedAt,
      authors: ['DoMyHomework Expert Team'],
      section: post.category,
      url: `https://domyhomework.co/blog/${post.slug}`,
      siteName: 'DoMyHomework.co'
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription
    },
    alternates: {
      canonical: `https://domyhomework.co/blog/${post.slug}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'article:author': 'DoMyHomework Expert Team',
      'article:published_time': post.publishedAt,
      'article:modified_time': (post as BlogPost).lastUpdated || post.publishedAt,
      'article:section': post.category
    }
  }
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return blogsData.map((post: BlogPost) => ({
    slug: post.slug,
  }))
}

// Get related posts based on category
function getRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[], limit: number = 3): BlogPost[] {
  return allPosts
    .filter(post => post.slug !== currentPost.slug && post.category === currentPost.category)
    .slice(0, limit)
}

// Main page component
export default function BlogPost({ params }: BlogPageProps) {
  const post = blogsData.find((post: BlogPost) => post.slug === params.slug)
  // Add this debug line temporarily
  console.log('Post content length:', post?.content?.length)
  console.log('H2 count in content:', (post?.content?.match(/<h2>/g) || []).length)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, blogsData)

  return <BlogTemplate post={post} relatedPosts={relatedPosts} />
}