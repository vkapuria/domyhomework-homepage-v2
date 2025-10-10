'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconStarFilled, IconQuote } from '@tabler/icons-react'
import Image from 'next/image'

interface Review {
  id: string
  orderNumber: string
  date: string
  rating: number
  comment: string
  paperType: string
  writerResponse?: string | null
  helpfulCount: number
}

interface FeaturedReviewsProps {
  reviews: Review[]
  writerName: string
}

export default function FeaturedReviews({ reviews, writerName }: FeaturedReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, 'up' | 'down' | null>>({})

  if (!reviews || reviews.length === 0) return null

  const firstName = writerName.split(' ')[0]
  const currentReview = reviews[currentIndex]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const handleHelpfulVote = (reviewId: string, vote: 'up' | 'down') => {
    setHelpfulVotes((prev) => ({
      ...prev,
      [reviewId]: prev[reviewId] === vote ? null : vote
    }))
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">What Students Loved About This Expert</h2>
        
        {reviews.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              aria-label="Previous review"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              aria-label="Next review"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
            key={currentReview.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative"
        >
            {/* Quote Icon */}
            <div className="absolute top-4 right-4">
            <IconQuote className="w-12 h-12 text-gray-200 opacity-40" />
            </div>

            {/* Review Header */}
            <div className="relative z-10 flex items-center justify-between mb-4 text-sm">
            <span className="text-gray-600">{currentReview.date}</span>
            <span className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                {currentReview.paperType}
            </span>
            </div>

            {/* Review Content */}
            <div className="relative z-10 mb-4">
            <p className="text-gray-800 text-base leading-relaxed">
                {currentReview.comment}
            </p>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="text-xs text-gray-600">
                Order: <span className="font-semibold text-gray-900">{currentReview.orderNumber}</span>
            </div>

            <div className="flex items-center gap-1">
                {[...Array(currentReview.rating)].map((_, i) => (
                <IconStarFilled key={i} className="w-5 h-5 text-yellow-400" />
                ))}
            </div>
            </div>

            {/* Writer Response */}
            {currentReview.writerResponse && (
            <div className="mt-4 ml-6 pl-4 border-l-2 border-gray-300 bg-gray-50 rounded-r-lg p-4">
                <div className="flex items-start gap-2">
                <span className="text-sm font-semibold text-gray-900">{firstName}:</span>
                <p className="text-sm text-gray-700 flex-1">
                    {currentReview.writerResponse}
                </p>
                </div>
            </div>
            )}

            {/* Helpful Section */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="text-sm text-gray-600">
                <span className="font-semibold">{currentReview.helpfulCount}</span> people found this helpful
            </div>

            <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Helpful?</span>
                <button
                onClick={() => handleHelpfulVote(currentReview.id, 'up')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-colors ${
                    helpfulVotes[currentReview.id] === 'up'
                    ? 'bg-green-50 border-green-300 text-green-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H16.4262C17.907 22 19.1662 20.9197 19.3914 19.4562L20.4683 12.4562C20.7479 10.6389 19.3418 9 17.5032 9H14C13.4477 9 13 8.55228 13 8V4.46584C13 3.10399 11.896 2 10.5342 2C10.2093 2 9.91498 2.1913 9.78306 2.48812L7 9H4C2.89543 9 2 9.89543 2 11V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Yes
                </button>
                <button
                onClick={() => handleHelpfulVote(currentReview.id, 'down')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-colors ${
                    helpfulVotes[currentReview.id] === 'down'
                    ? 'bg-red-50 border-red-300 text-red-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M17 2V13M22 11V4C22 2.89543 21.1046 2 20 2H7.57377C6.09297 2 4.83379 3.08027 4.60862 4.54382L3.53172 11.5438C3.2521 13.3611 4.65824 15 6.49679 15H10C10.5523 15 11 15.4477 11 16V19.5342C11 20.896 12.104 22 13.4658 22C13.7907 22 14.085 21.8087 14.2169 21.5119L17 15H20C21.1046 15 22 14.1046 22 13V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                No
                </button>
            </div>
            </div>
        </motion.div>
        </AnimatePresence>

      {/* Pagination Dots */}
      {reviews.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-purple-600 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}