'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import authorsData from '@/data/authors.json'
import { IconClock, IconUser, IconShare, IconArrowUp, IconCalendar, IconChevronDown } from '@tabler/icons-react'

interface BlogPost {
  slug: string
  title: string
  metaDescription: string
  h1: string
  content: string
  publishedAt: string
  category: string
  readTime?: number
  lastUpdated?: string
  authorId?: string
}

interface Author {
  id: string
  name: string
  title: string
  bio: string
  avatar?: string
}

interface BlogTemplateProps {
  post: BlogPost
  relatedPosts: BlogPost[]
}

export default function BlogTemplate({ post, relatedPosts }: BlogTemplateProps) {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isTocExpanded, setIsTocExpanded] = useState(false)

  // Find the author
  const author = authorsData.find((author: Author) => author.id === post.authorId) || {
    id: 'dmh-team',
    name: 'DoMyHomework Expert Team',
    title: 'Academic Writing Experts',
    bio: 'Our team of academic experts and professional writers brings years of experience in helping students achieve academic success.',
    avatar: undefined
  }

  // Generate TOC from headings
  const generateTOC = (content: string) => {
    const sections = []
    const sectionRegex = /<section id="([^"]+)"[^>]*>[\s\S]*?<h2[^>]*>(.*?)<\/h2>/g
    let match

    while ((match = sectionRegex.exec(content)) !== null) {
      const id = match[1]
      const text = match[2].replace(/<[^>]*>/g, '').replace(/className="[^"]*"/g, '').trim()
      
      sections.push({ 
        level: 2, 
        text: text, 
        id: id
      })
    }
    return sections
  }

  const tocItems = generateTOC(post.content)
  const showTOC = tocItems.length >= 3

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // TOC link handling
  useEffect(() => {
    const handleTocClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const sectionId = target.getAttribute('href')?.substring(1);
        const section = document.getElementById(sectionId || '');
        
        if (section) {
          const headerHeight = 100;
          const elementTop = section.getBoundingClientRect().top + window.pageYOffset;
          
          window.scrollTo({
            top: elementTop - headerHeight,
            behavior: 'smooth'
          });
          
          // Close mobile TOC after navigation
          setIsTocExpanded(false);
        }
      }
    };

    const tocLinks = document.querySelectorAll('.toc-link');
    tocLinks.forEach(link => {
      link.addEventListener('click', handleTocClick);
    });

    return () => {
      tocLinks.forEach(link => {
        link.removeEventListener('click', handleTocClick);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.split(/\s+/).length
    return Math.ceil(wordCount / wordsPerMinute)
  }

  const readTime = post.readTime || estimateReadTime(post.content)

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({ 
        title: post.title, 
        url: window.location.href 
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <article className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Mobile-Optimized Breadcrumbs */}
        <nav className="mb-4 sm:mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-1 text-xs sm:text-sm text-gray-600 overflow-hidden">
            <li className="flex-shrink-0">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            </li>
            <li className="before:content-['/'] before:mx-1 before:text-gray-400 flex-shrink-0">
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            </li>
            <li className="before:content-['/'] before:mx-1 before:text-gray-400 min-w-0">
              <span className="text-gray-900 block truncate max-w-[150px] sm:max-w-[300px] md:max-w-none" title={post.title}>
                {post.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Header Section */}
        <header className="mb-6 sm:mb-8">
          {/* Category Badge */}
          <div className="mb-3 sm:mb-4">
            <span className="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.h1}
          </h1>

          {/* Mobile-Optimized Meta Information */}
          <div className="space-y-3 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:gap-4 lg:gap-6 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <IconCalendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
            </div>
            
            <div className="flex items-center gap-2">
              <IconClock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>{readTime} min read</span>
            </div>

            <div className="flex items-center gap-2">
              <IconUser className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">{author.name}</span>
            </div>

            <div className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium inline-block">
              Expert Reviewed
            </div>
          </div>

          {/* Last Updated */}
          {post.lastUpdated && (
            <div className="text-xs text-gray-500 italic">
              Last updated: {formatDate(post.lastUpdated)}
            </div>
          )}
        </header>

        {/* Mobile-Optimized Table of Contents */}
        {showTOC && (
          <div className="mb-6 sm:mb-8">
            {/* Mobile: Collapsible TOC */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsTocExpanded(!isTocExpanded)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 flex items-center justify-between text-left"
              >
                <span className="font-medium text-gray-900">Table of Contents</span>
                <IconChevronDown 
                  className={`w-4 h-4 text-gray-600 transition-transform ${isTocExpanded ? 'rotate-180' : ''}`} 
                />
              </button>
              {isTocExpanded && (
                <div className="mt-2 bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <nav>
                    <ul className="space-y-2">
                      {tocItems.map((item, index) => (
                        <li key={index}>
                          <a 
                            href={`#${item.id}`}
                            className="text-blue-600 hover:text-blue-800 text-sm hover:underline toc-link block py-1"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}
            </div>

            {/* Desktop: Always visible TOC */}
            <div className="hidden sm:block bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
              <nav>
                <ul className="space-y-2">
                  {tocItems.map((item, index) => (
                    <li key={index}>
                      <a 
                        href={`#${item.id}`}
                        className="text-blue-600 hover:text-blue-800 text-sm hover:underline toc-link transition-colors"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="prose prose-sm sm:prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="space-y-4 sm:space-y-6"
          />

          {/* Mobile-Optimized CTA Box */}
          <div className="my-6 sm:my-8 bg-purple-50 border border-purple-200 rounded-lg p-4 sm:p-6 text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Need Help with Your Homework?
            </h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Get expert assistance with your assignments. Professional writers, on-time delivery, plagiarism-free work.
            </p>
            <Link
                href="https://order.domyhomework.co"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm sm:text-base"
                >
                Get Started Now
                </Link>
          </div>
        </div>

        {/* Mobile-Optimized Share Buttons */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
            <button
              onClick={sharePost}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm w-full sm:w-auto"
            >
              <IconShare className="w-4 h-4" />
              Share Article
            </button>
          </div>
        </div>

        {/* Mobile-Optimized Author Bio */}
        <div className="mt-6 sm:mt-8 bg-gray-50 rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 mx-auto sm:mx-0">
              {author.avatar ? (
                <img src={author.avatar} alt={author.name} className="w-full h-full rounded-full object-cover" />
              ) : (
                author.name.split(' ').map(n => n[0]).join('')
              )}
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {author.name}
              </h3>
              <p className="text-sm text-purple-600 font-medium mb-2">
                {author.title}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {author.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile-Optimized Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-8 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatedPosts.slice(0, 3).map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      <Link 
                        href={`/blog/${relatedPost.slug}`}
                        className="hover:text-blue-600 line-clamp-2 transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {relatedPost.metaDescription}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{formatDate(relatedPost.publishedAt)}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">{relatedPost.category}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all z-50"
          aria-label="Back to top"
        >
          <IconArrowUp className="w-5 h-5" />
        </button>
      )}
    </article>
  )
}