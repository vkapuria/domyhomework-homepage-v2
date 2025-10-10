'use client'
import { use, useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { IconStarFilled, IconQuote, IconHome, IconUsers } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import FeaturedReviews from '@/components/FeaturedReviews'

interface Writer {
  id: string
  name: string
  title?: string
  photo: string
  country_flag: string
  specializations: string[]
  stats: {
    projects: number
    successRate: number
    rating: number
  }
  bio: string
  subjects: string[]
  last_order: string
  review_count: number
  rating_breakdown?: {
    qualityOfWork: number
    followsInstructions: number
    responseSpeed: number
    communication: number
  }
  top_subjects?: Array<{ name: string; count: number; percentage: number }>
  top_paper_types?: Array<{ name: string; count: number; percentage: number }>
}

interface Review {
  id: string
  order_number: string
  date: string
  rating: number
  comment: string
  paper_type: string
  writer_response?: string | null
  helpful_count?: number
  is_premium: boolean
}

export default function WriterProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('🎨 [FRONTEND] Writer Profile Page Loaded')
  console.log(`🔑 Slug: ${slug}`)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  
  const [writer, setWriter] = useState<Writer | null>(null)
  const [reviews, setReviews] = useState<Review[]>([])
  const [premiumReviews, setPremiumReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [bioExpanded, setBioExpanded] = useState(false)

// ✅ Fetch writer + reviews in PARALLEL
useEffect(() => {
  async function fetchAllData() {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('🚀 [FETCH] Fetching writer + reviews IN PARALLEL')
    console.log(`🔑 Slug: ${slug}`)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    
    try {
      // Fetch BOTH at the same time!
      const startTime = performance.now()
      
      const [writerResponse, reviewsResponse] = await Promise.all([
        fetch(`/api/writers/${slug}`),
        fetch(`/api/writers/${slug}/reviews`)
      ])

      const fetchTime = performance.now() - startTime
      console.log(`⚡ [PERFORMANCE] Both fetched in ${fetchTime.toFixed(0)}ms`)

      if (!writerResponse.ok) {
        console.error('❌ [ERROR] Writer not found')
        throw new Error('Writer not found')
      }
      
      if (!reviewsResponse.ok) {
        console.error('❌ [ERROR] Reviews not found')
        throw new Error('Reviews not found')
      }

      // Parse both responses
      const [writerData, reviewsData] = await Promise.all([
        writerResponse.json(),
        reviewsResponse.json()
      ])

      if (!writerData || !writerData.writer) {
        console.error('❌ [ERROR] Invalid writer data')
        throw new Error('Invalid writer data')
      }

      console.log('✅ [SUCCESS] Writer data received:', writerData.writer.name)
      console.log('📊 [DATA]', {
        projects: writerData.writer.stats.projects,
        rating: writerData.writer.stats.rating,
        reviewCount: writerData.writer.review_count
      })

      setWriter(writerData.writer)

      // Process reviews
      const allReviews = reviewsData.reviews || []
      const premium = allReviews.filter((r: Review) => r.is_premium)
      const regular = allReviews.filter((r: Review) => !r.is_premium)
      
      console.log('✅ [SUCCESS] Reviews received')
      console.log(`📊 [BREAKDOWN] Total: ${allReviews.length}, Premium: ${premium.length}, Regular: ${regular.length}`)
      console.log(`⭐ [RATINGS] Average: ${allReviews.length ? (allReviews.reduce((acc: number, r: Review) => acc + r.rating, 0) / allReviews.length).toFixed(1) : 'N/A'}`)
      
      setPremiumReviews(premium)
      setReviews(regular)
      setLoading(false)

      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
      console.log(`✅ [COMPLETE] Page loaded in ${fetchTime.toFixed(0)}ms`)
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    } catch (err) {
      console.error('❌ [FETCH ERROR]', err)
      setError('Failed to load data')
      setLoading(false)
    }
  }

  fetchAllData()
}, [slug])

  // Show loading state
  if (loading) {
    console.log('⏳ [STATE] Loading...')
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading writer profile...</p>
        </div>
      </div>
    )
  }

  // Show error state
  if (error || !writer) {
    console.error('❌ [STATE] Error state:', error)
    notFound()
  }

  // Show all reviews or just first 6
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 6)
  
  // Calculate days ago for last order
  const lastOrderDate = new Date(writer.last_order)
  const today = new Date()
  const daysAgo = Math.floor((today.getTime() - lastOrderDate.getTime()) / (1000 * 60 * 60 * 24))

  console.log('🎨 [RENDER] Rendering profile page')
  console.log(`📊 [DISPLAY] Showing ${displayedReviews.length}/${reviews.length} regular reviews`)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="flex items-center gap-1 hover:text-purple-600 transition-colors">
              <IconHome className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <Link href="/top-writers" className="flex items-center gap-1 hover:text-purple-600 transition-colors">
              <IconUsers className="w-4 h-4" />
              Top Writers
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{writer.name}</span>
          </nav>
        </div>
      </div>

      <div className="bg-gray-50 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN - Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* COMBINED PROFILE CARD */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              
              {/* Profile Header */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-purple-100 shadow-sm">
                      <Image
                        src={writer.photo}
                        alt={writer.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-3 text-3xl">{writer.country_flag}</div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                      <h1 className="text-3xl font-extrabold text-gray-900">{writer.name}</h1>
                      <Image
                        src="/icons/insurance.svg"
                        alt="Verified"
                        width={22}
                        height={22}
                        className="w-6 h-6"
                        title="Credentials Verified"
                      />
                    </div>

                    {writer.title && (
                      <p className="text-base text-gray-600 mb-3 font-medium">
                        {writer.title}
                      </p>
                    )}

                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <IconStarFilled 
                            key={i} 
                            className={`w-5 h-5 ${i < Math.floor(writer.stats.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-lg font-bold text-gray-900">{writer.stats.rating}</span>
                      <span className="text-sm text-gray-600">({writer.review_count} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="flex items-center text-lg justify-around py-4 bg-gray-50 rounded-lg px-6">
                  <StatBlock label="Projects" value={writer.stats.projects} />
                  <div className="w-px h-10 bg-gray-300"></div>
                  <StatBlock label="Success Rate" value={`${writer.stats.successRate}%`} />
                  <div className="w-px h-10 bg-gray-300"></div>
                  <StatBlock label="Last Order" value={`${daysAgo}d ago`} />
                </div>
              </div>

              {/* Specializations */}
              {writer.specializations && writer.specializations.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-lg font-bold text-gray-900 mb-3">Specializations</h2>
                  <div className="flex flex-wrap gap-2">
                    {writer.specializations.map((spec, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-50 text-purple-700 text-sm font-medium px-3 py-1.5 rounded-full border border-purple-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Subjects */}
              {writer.subjects && writer.subjects.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-lg font-bold text-gray-900 mb-3">Expert In</h2>
                  <div className="flex flex-wrap gap-2">
                    {writer.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full border border-blue-200"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Bio */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">About Me</h2>
                <p className={`text-gray-700 leading-relaxed ${!bioExpanded && 'line-clamp-4'}`}>
                  {writer.bio}
                </p>
                {writer.bio && writer.bio.length > 200 && (
                  <button
                    onClick={() => setBioExpanded(!bioExpanded)}
                    className="text-purple-600 font-medium text-sm mt-2 hover:text-purple-700"
                  >
                    {bioExpanded ? 'Show less ▲' : 'Show more ▼'}
                  </button>
                )}
              </div>
            </div>

            {/* Featured Reviews */}
            {premiumReviews.length > 0 && (
              <FeaturedReviews 
                reviews={premiumReviews.map(r => ({
                  ...r,
                  orderNumber: r.order_number,
                  paperType: r.paper_type,
                  writerResponse: r.writer_response,
                  helpfulCount: r.helpful_count || 0
                }))} 
                writerName={writer.name} 
              />
            )}

            {/* Top Subjects & Paper Types */}
            {(writer.top_subjects || writer.top_paper_types) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {writer.top_subjects && writer.top_subjects.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Top 4 Subjects</h3>
                    <div className="space-y-3">
                      {writer.top_subjects.map((subject, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-700">{subject.name}</span>
                            <span className="font-semibold text-gray-900">{subject.count}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="bg-purple-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${subject.percentage}%` }}
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {writer.top_paper_types && writer.top_paper_types.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Top 4 Paper Types</h3>
                    <div className="space-y-3">
                      {writer.top_paper_types.map((paper, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-700">{paper.name}</span>
                            <span className="font-semibold text-gray-900">{paper.count}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="bg-yellow-400 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${paper.percentage}%` }}
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Reviews Section */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Work History & Client Feedback</h2>
              <p className="text-sm text-gray-600 mb-6">Real feedback from verified projects</p>
              <div className="space-y-6">
                {displayedReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} writerName={writer.name} />
                ))}
              </div>
              
              {!showAllReviews && reviews.length > 6 && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => {
                      console.log(`🔽 [ACTION] Load More clicked - Showing all ${reviews.length} reviews`)
                      setShowAllReviews(true)
                    }}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    Load More Reviews ({reviews.length - 6} more)
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN - Sticky CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 self-start">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                
                <div className="text-center mb-6">
                  <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-purple-100 mb-3">
                    <Image
                      src={writer.photo}
                      alt={writer.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{writer.name}</h3>
                  <div className="flex items-center justify-center gap-1 text-yellow-500">
                    {[...Array(Math.round(writer.stats.rating))].map((_, i) => (
                      <IconStarFilled key={i} className="w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{writer.review_count} verified reviews</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-600 text-lg">✓</span> Credentials Verified
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-600 text-lg">✓</span> 100% Original Work
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-600 text-lg">✓</span> Free Revisions
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-600 text-lg">✓</span> On-Time Delivery
                  </li>
                </ul>

                <a
                  href="https://order.domyhomework.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                  aria-label={`Hire ${writer.name} now`}
                  className="block w-full bg-purple-600 text-white text-center py-4 rounded-xl font-bold text-base hover:bg-purple-700 transition-all shadow-lg mb-4"
                >
                  Hire This Writer
                </a>

                <p className="text-xs text-gray-500 text-center">
                  🔒 Secure & Confidential
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

// Helper Components
function StatBlock({ label, value }: { label: string; value: any }) {
  return (
    <div className="text-center">
      <div className="text-base text-gray-600 mb-1">{label}</div>
      <div className="flex items-center justify-center gap-1.5">
        <span className="text-xl font-bold text-gray-900">{value}</span>
      </div>
    </div>
  )
}

function ReviewCard({ review, writerName }: { review: Review; writerName: string }) {
  const firstName = writerName.split(' ')[0]
  
  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
      <div className="absolute top-4 right-4">
        <IconQuote className="w-12 h-12 text-gray-200 opacity-40" />
      </div>

      <div className="relative z-10 mb-4">
        <p className="text-gray-800 text-base leading-relaxed">
          {review.comment}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex-1">
          <p className="text-xs text-gray-600">
            Order: <span className="font-semibold text-gray-900">{review.order_number}</span>
          </p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-xs text-gray-500">{review.date}</p>
            <span className="text-gray-400">•</span>
            <span className="text-xs font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
              {review.paper_type}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 ml-4">
          {[...Array(5)].map((_, i) => (
            <IconStarFilled 
              key={i} 
              className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {review.writer_response && (
        <div className="mt-4 ml-6 pl-4 border-l-2 border-gray-300 bg-gray-50 rounded-r-lg p-4">
          <div className="flex items-start gap-2">
            <span className="text-sm font-semibold text-gray-900">{firstName}:</span>
            <p className="text-sm text-gray-700 flex-1">
              {review.writer_response}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}