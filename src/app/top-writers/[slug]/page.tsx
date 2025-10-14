'use client'
import { use, useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { IconStarFilled, IconQuote, IconHome, IconUsers } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import FeaturedReviews from '@/components/FeaturedReviews'
import WorkHistoryChart from '@/components/WorkHistoryChart'

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
  const [displayedCount, setDisplayedCount] = useState(6)
  const [bioExpanded, setBioExpanded] = useState(false)
  const [showMobileCTA, setShowMobileCTA] = useState(false)

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

  // Show mobile CTA after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMobileCTA(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

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
  const displayedReviews = reviews.slice(0, displayedCount)
  const remainingCount = reviews.length - displayedCount
  const hasMore = remainingCount > 0
  
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

                  <div className="flex-1 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Left side - Name & Title */}
                    <div className="text-center md:text-left">
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
                        <p className="text-base text-gray-600 font-medium">
                          {writer.title}
                        </p>
                      )}
                    </div>

                    {/* Right side - Stars & Reviews */}
                    <div className="flex flex-col items-center md:items-end gap-1">
                      <div className="flex items-center gap-2">
                        <StarRating rating={writer.stats.rating} size={5} />
                        <span className="text-lg font-bold text-gray-900">{writer.stats.rating}</span>
                      </div>
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

              {/* Expert In + Work History Split */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
                
                {/* Left: Expert In (40%) */}
                <div className="md:col-span-2">
                  <h2 className="text-lg font-bold text-gray-900 mb-4">Expert In</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {[
                      ...(writer.specializations || []),
                      ...(writer.subjects || [])
                    ].join(' • ')}
                  </p>
                </div>

                {/* Right: Work History Chart (60%) */}
                <div className="md:col-span-3">
                  <WorkHistoryChart totalProjects={writer.stats.projects} />
                </div>

              </div>

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

            {/* Reviews Section - Timeline Style */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Client Feedback</h2>
              <p className="text-sm text-gray-600 mb-6">Real feedback from verified projects</p>
              
              <div className="space-y-0">
                {displayedReviews.map((review, index) => (
                  <div
                    key={review.id}
                    id={`review-${index}`}
                    className={`
                      ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} 
                      rounded-xl p-6
                      transition-all duration-300
                    `}
                  >
                    <TimelineReviewCard review={review} writerName={writer.name} />
                  </div>
                ))}
              </div>        
            {hasMore && (
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <button
                  onClick={() => {
                    const previousCount = displayedCount
                    const newCount = Math.min(displayedCount + 12, reviews.length)
                    
                    console.log(`🔽 [ACTION] Load More clicked - Showing ${newCount} of ${reviews.length} reviews`)
                    
                    setDisplayedCount(newCount)
                    
                    // Smooth scroll to first newly loaded review after state updates
                    setTimeout(() => {
                      const newReviewElement = document.getElementById(`review-${previousCount}`)
                      if (newReviewElement) {
                        newReviewElement.scrollIntoView({ 
                          behavior: 'smooth', 
                          block: 'center' 
                        })
                      }
                    }, 100)
                  }}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors shadow-sm hover:shadow-md"
                >
                  Load More Reviews ({remainingCount} more)
                </button>
              </div>
            )}
            </div>
          </div>
          {/* RIGHT COLUMN - Sticky CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 self-start z-40">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                
                {/* Writer Photo + Name - Side by Side */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-purple-100 flex-shrink-0">
                    <Image
                      src={writer.photo}
                      alt={writer.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{writer.name}</h3>
                </div>

                {/* Benefits - 3 random items */}
                <div className="space-y-4 mb-6">
                  <RandomBenefits />
                </div>

                {/* CTA Button */}
                
                <a href={`https://order.domyhomework.co?writerId=${writer.id}&writerName=${encodeURIComponent(writer.name)}&writerPhoto=${encodeURIComponent(writer.photo)}&writerRating=${writer.stats.rating}&writerProjects=${writer.stats.projects}&writerSuccessRate=${writer.stats.successRate}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-purple-600 text-white text-center py-4 rounded-xl font-bold text-base hover:bg-purple-700 transition-all shadow-lg mb-3"
                >
                  Get Help from {writer.name.split(' ')[0]}
                </a>

                {/* Security Badge */}
                <p className="text-xs text-gray-500 text-center">
                  🔒 Secure & Confidential
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sticky Mobile CTA - Black Brutalist Style */}
      <div 
        className={`
          fixed bottom-0 left-0 right-0 z-50
          lg:hidden
          bg-white border-t-2 border-gray-200
          transition-transform duration-500 ease-out
          ${showMobileCTA ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        <div className="w-full px-2 py-3">
          
           <a href={`http://order.domyhomework.co?writerId=${writer.id}&writerName=${encodeURIComponent(writer.name)}&writerPhoto=${encodeURIComponent(writer.photo)}&writerRating=${writer.stats.rating}&writerProjects=${writer.stats.projects}&writerSuccessRate=${writer.stats.successRate}`}
            className="flex items-center justify-between gap-2 bg-black hover:bg-gray-800 border-2 border-black rounded-lg px-3 py-3 transition-all"
          >
            {/* Left: Photo */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-lg overflow-hidden ring-2 ring-white">
                <Image
                  src={writer.photo}
                  alt={writer.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Center: Text */}
            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-sm flex items-center gap-1.5">
                Hire {writer.name.split(' ')[0]}
                <Image
                  src="/icons/submit.svg"
                  alt="arrow"
                  width={17}
                  height={17}
                  className="w-3.5 h-3.5 invert"
                />
              </div>
              <div className="text-gray-300 text-xs flex items-center gap-1.5 mt-0.5">
                <span className="flex items-center gap-1">
                  <Image
                    src="/icons/star.svg"
                    alt="rating"
                    width={14}
                    height={14}
                    className="w-3 h-3"
                  />
                  {writer.stats.rating}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Image
                    src="/icons/checked.svg"
                    alt="success"
                    width={14}
                    height={14}
                    className="w-3 h-3"
                  />
                  {writer.stats.successRate}% success
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

// Helper Components
function StatBlock({ label, value }: { label: string; value: any }) {
  return (
    <div className="text-center">
      <div className="text-xs sm:text-base text-gray-600 mb-1 uppercase tracking-wide">{label}</div>
      <div className="flex items-center justify-center gap-1.5">
        <span className="text-xl sm:text-2xl font-bold text-gray-900">{value}</span>
      </div>
    </div>
  )
}

function TimelineReviewCard({ review, writerName }: { review: Review; writerName: string }) {
  const firstName = writerName.split(' ')[0]

  return (
    <div className="py-4">
      {/* Header Row: Stars left / Chip right */}
      <div className="flex items-center justify-between mb-3">
        {/* Stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <IconStarFilled
              key={i}
              className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        {/* Paper Type Chip */}
        <span
          className="
            text-xs sm:text-sm 
            font-medium 
            text-purple-700 
            bg-purple-50 
            px-2 py-0.5 sm:px-2.5 sm:py-1 
            rounded-full 
            border border-purple-200
          "
        >
          {review.paper_type}
        </span>

      </div>

      {/* Review Content */}
      <p className="text-gray-800 text-base leading-relaxed mt-5 mb-5">
        {review.comment}
      </p>

      {/* Footer Row: Order left / Date right */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <p>
          Order: <span className="font-semibold text-gray-900">{review.order_number}</span>
        </p>
        <p className="text-gray-500">{new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
      </div>

      {/* Writer Response */}
      {review.writer_response && (
        <div className="mt-4 pl-4 border-l-2 border-purple-300 bg-purple-50/40 py-2 pr-2 rounded-r">
          <div className="flex items-start gap-2">
            <span className="text-sm font-semibold text-purple-900">{firstName}:</span>
            <p className="text-sm text-gray-700 flex-1">{review.writer_response}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function BenefitItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function RandomBenefits() {
  const benefits = [
    {
      icon: '/images/trophy.jpg',
      title: 'Credentials Verified',
      description: 'Verified academic expertise and professional qualifications'
    },
    {
      icon: '/icons/quick.svg',
      title: 'On-Time Delivery',
      description: 'Consistently meeting deadlines with efficient workflow'
    },
    {
      icon: '/icons/authenticity.svg',
      title: '100% Original Work',
      description: 'Plagiarism-free and AI-free guaranteed solutions'
    },
    {
      icon: '/icons/infinity.svg',
      title: 'Free Revisions',
      description: 'Unlimited revisions until you\'re completely satisfied'
    }
  ]

  // Randomly select 3 benefits on component mount
  const [selectedBenefits] = useState(() => {
    const shuffled = [...benefits].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 3)
  })

  return (
    <>
      {selectedBenefits.map((benefit, idx) => (
        <BenefitItem
          key={idx}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </>
  )
}

function StarRating({ rating, size = 5 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const starPosition = i + 1
        const fillPercentage = Math.min(Math.max((rating - i) * 100, 0), 100)
        
        if (fillPercentage === 0) {
          // Empty star
          return (
            <IconStarFilled
              key={i}
              className={`w-${size} h-${size} text-gray-300`}
            />
          )
        } else if (fillPercentage === 100) {
          // Full star
          return (
            <IconStarFilled
              key={i}
              className={`w-${size} h-${size} text-yellow-400`}
            />
          )
        } else {
          // Partial star
          return (
            <div key={i} className="relative inline-block">
              <IconStarFilled className={`w-${size} h-${size} text-gray-300`} />
              <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{ width: `${fillPercentage}%` }}
              >
                <IconStarFilled className={`w-${size} h-${size} text-yellow-400`} />
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}