import { Metadata } from 'next'
import Link from 'next/link'

const blogsData = [
  {
    "slug": "homework-stress-management-practical-tips-for-students",
    "title": "Homework Stress Management: Practical Tips for Students",
    "metaDescription": "Learn effective strategies to manage homework stress. Expert tips for better time management, study techniques, and maintaining mental health while handling academic workload.",
    "publishedAt": "2025-04-09",
    "category": "Student Tips"
  },
  {
    "slug": "mastering-citation-styles-a-guide-for-homework-writing-excellence",
    "title": "Mastering Citation Styles: A Complete Guide for Academic Excellence",
    "metaDescription": "Master APA, MLA, Chicago citation styles with our comprehensive guide. Learn proper formatting, avoid common mistakes, and improve your academic writing quality.",
    "publishedAt": "2025-07-16",
    "category": "Writing Help"
  }
]

export const metadata: Metadata = {
  title: 'Blog - Expert Homework Help Tips & Guides | DoMyHomework.co',
  description: 'Expert guides, tips, and insights for academic success.',
}

export default function BlogListingPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Homework Help Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tips, guides, and insights to help you succeed in your academic journey.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((post) => (
            <article key={post.slug} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-600"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 text-sm mb-4">
                  {post.metaDescription}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{formatDate(post.publishedAt)}</span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}