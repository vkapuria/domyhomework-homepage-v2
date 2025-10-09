'use client'
import { useState, useMemo } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { IconStarFilled, IconClock, IconQuote, IconHome, IconUsers } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import writersData from '@/data/writers.json'
import { generateReviews } from '@/utils/reviewGenerator'
import FeaturedReviews from '@/components/FeaturedReviews'

interface Writer {
    id: string
    name: string
    title?: string
    photo: string
    countryFlag: string
    specializations: string[]
    stats: {
      projects: number
      successRate: number
      rating: number
    }
    bio: string
    subjects: string[]
    lastOrder: string
    reviewCount: number
    ratingBreakdown: {
      qualityOfWork: number
      followsInstructions: number
      responseSpeed: number
      communication: number
    }
    topSubjects: Array<{ name: string; count: number; percentage: number }>
    topPaperTypes: Array<{ name: string; count: number; percentage: number }>
    premiumReviews?: Array<{
      id: string
      orderNumber: string
      date: string
      rating: number
      comment: string
      paperType: string
      writerResponse?: string | null
      helpfulCount: number
    }>
    reviews: Array<{
      id: string
      orderNumber: string
      date: string
      rating: number
      comment: string
      paperType: string
      writerResponse?: string | null
    }>
  }

  export default function WriterProfilePage({ params }: { params: { slug: string } }) {
    const [showAllReviews, setShowAllReviews] = useState(false)
    const [bioExpanded, setBioExpanded] = useState(false)
    
    const writer = writersData.find((w: any) => w.id === params.slug) as Writer | undefined
    
    if (!writer) {
      notFound()
    }
    
    // Cache reviews using useMemo so they don't regenerate
    const regularReviews = useMemo(
      () => generateReviews(writer, writer.reviewCount || 12),
      [writer.id]
    )
    
    // Show 6 initially, then all on "Load More"
    const displayedReviews = showAllReviews ? regularReviews : regularReviews.slice(0, 6)
  
  // Calculate days ago for last order
  const lastOrderDate = new Date(writer.lastOrder)
  const today = new Date()
  const daysAgo = Math.floor((today.getTime() - lastOrderDate.getTime()) / (1000 * 60 * 60 * 24))

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
            
            {/* COMBINED PROFILE CARD - Header + Specializations + Subjects + Bio */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              
              {/* Profile Header */}
<div className="mb-8 pb-8 border-b border-gray-200">
  {/* Top Section: Image + Name + Stars */}
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
      <div className="absolute -top-2 -right-3 text-3xl">{writer.countryFlag}</div>
    </div>

    <div className="flex-1 text-center md:text-left">
      {/* Name + Verification Badge */}
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

      {/* Professional Title */}
      {writer.title && (
        <p className="text-base text-gray-600 mb-3 font-medium">
          {writer.title}
        </p>
      )}

      {/* Rating Stars */}
      <div className="flex items-center justify-center md:justify-start gap-2">
      <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
                <IconStarFilled 
                key={i} 
                className={`w-5 h-5 ${i < writer.stats.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                />
            ))}
        </div>
        <span className="text-lg font-bold text-gray-900">{writer.stats.rating}</span>
        <span className="text-sm text-gray-600">({writer.reviewCount} reviews)</span>
      </div>
    </div>
  </div>

  {/* Stats Bar - Full Width at Bottom */}
  <div className="flex items-center text-lg justify-around py-4 bg-gray-50 rounded-lg px-6">
    <StatBlock label="Projects" value={writer.stats.projects} />
    <div className="w-px h-10 bg-gray-300"></div>
    <StatBlock label="Success Rate" value={`${writer.stats.successRate}%`} />
    <div className="w-px h-10 bg-gray-300"></div>
    <StatBlock label="Last Order" value={`${daysAgo}d ago`} />
  </div>
</div>

              {/* Specializations */}
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

              {/* Subjects */}
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

              {/* Bio */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-3">About Me</h2>
                <p className={`text-gray-700 leading-relaxed ${!bioExpanded && 'line-clamp-4'}`}>
                  {writer.bio}
                </p>
                {writer.bio.length > 200 && (
                  <button
                    onClick={() => setBioExpanded(!bioExpanded)}
                    className="text-purple-600 font-medium text-sm mt-2 hover:text-purple-700"
                  >
                    {bioExpanded ? 'Show less ▲' : 'Show more ▼'}
                  </button>
                )}
              </div>
            </div>

            {/* Featured Reviews - What Students Loved */}
            {writer.premiumReviews && writer.premiumReviews.length > 0 && (
            <FeaturedReviews 
                reviews={writer.premiumReviews} 
                writerName={writer.name} 
            />
            )}

            {/* Top Subjects & Paper Types Grid - With Animations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Top Subjects */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Top 4 Subjects</h3>
                <div className="space-y-3">
                  {writer.topSubjects.map((subject, idx) => (
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

              {/* Top Paper Types */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Top 4 Paper Types</h3>
                <div className="space-y-3">
                  {writer.topPaperTypes.map((paper, idx) => (
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
            </div>

            {/* Work History & Feedback Section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Work History & Client Feedback</h2>
        <p className="text-sm text-gray-600 mb-6">Real feedback from verified projects</p>
        <div className="space-y-6">
    {displayedReviews.map((review) => (
      <ReviewCard key={review.id} review={review} writerName={writer.name} />
    ))}
  </div>
  
  {!showAllReviews && regularReviews.length > 6 && (
    <div className="mt-6 text-center">
      <button
        onClick={() => setShowAllReviews(true)}
        className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
      >
        Load More Reviews ({regularReviews.length - 6} more)
      </button>
    </div>
  )}
</div>

          </div>

          {/* RIGHT COLUMN - Sticky CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 self-start">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                
                {/* Writer Mini Header */}
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
                  <p className="text-sm text-gray-600">{writer.reviewCount} verified reviews</p>
                </div>

                {/* Trust Features */}
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

                {/* CTA Button */}
                
                 <a href="https://order.domyhomework.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-purple-600 text-white text-center py-4 rounded-xl font-bold text-base hover:bg-purple-700 transition-all shadow-lg mb-4"
                >
                  Hire This Writer
                </a>

                {/* Bottom trust seal */}
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

// Stat Block Component
function StatBlock({ label, value, icon }: { label: string; value: any; icon?: boolean }) {
    return (
      <div className="text-center">
        <div className="text-base text-gray-600 mb-1">{label}</div>
        <div className="flex items-center justify-center gap-1.5">
          {icon && <IconStarFilled className="w-4 h-4 text-yellow-400" />}
          <span className="text-xl font-bold text-gray-900">{value}</span>
        </div>
      </div>
    )
  }

// Review Card Component - Balanced Layout
function ReviewCard({ review, writerName }: { review: any; writerName: string }) {
    // Extract first name (e.g., "Claire H." → "Claire")
    const firstName = writerName.split(' ')[0]
    
    return (
      <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
        
        {/* Quote Icon */}
        <div className="absolute top-4 right-4">
          <IconQuote className="w-12 h-12 text-gray-200 opacity-40" />
        </div>
  
        {/* Review Content */}
        <div className="relative z-10 mb-4">
          <p className="text-gray-800 text-base leading-relaxed">
            {review.comment}
          </p>
        </div>
  
        {/* Balanced Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          
          {/* Left: Customer Info + Paper Type */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">{review.customerId}</p>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-xs text-gray-500">{review.date}</p>
              <span className="text-gray-400">•</span>
              <span className="text-xs font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                {review.paperType}
              </span>
            </div>
          </div>
  
          {/* Right: Star Rating */}
            <div className="flex items-center gap-1 ml-4">
            {[...Array(5)].map((_, i) => (
                <IconStarFilled 
                key={i} 
                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                />
            ))}
            </div>
        </div>
  
        {/* Writer Response (if exists) */}
        {review.writerResponse && (
          <div className="mt-4 ml-6 pl-4 border-l-2 border-gray-300 bg-gray-50 rounded-r-lg p-4">
            <div className="flex items-start gap-2">
              <span className="text-sm font-semibold text-gray-900">{firstName}:</span>
              <p className="text-sm text-gray-700 flex-1">
                {review.writerResponse}
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }