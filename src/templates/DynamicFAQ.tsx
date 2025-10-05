'use client'
import { useState } from 'react'
import { IconPlus, IconMinus } from '@tabler/icons-react'

interface FAQItem {
  question: string
  answer: string
}

interface DynamicFAQProps {
  title: string
  subtitle: string
  items: FAQItem[]
  chipText?: string
  seoContent?: {
    title: string
    content: string
    isVisible: boolean
  }
}

export default function DynamicFAQ({ 
  title, 
  subtitle, 
  items,
  chipText = "FAQ",
  seoContent
}: DynamicFAQProps) {
  const [open, setOpen] = useState<number | null>(null)
  const [showSEOContent, setShowSEOContent] = useState(false)

  return (
    <section className="py-12 sm:py-16" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* EXACT SAME HEADER AS HOMEPAGE */}
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium border border-purple-500 bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
            {chipText}
          </span>
          <div className="text-xs text-gray-500 mb-2">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            {subtitle}
          </p>
          
          {/* Show More Button - Only if seoContent exists */}
          {seoContent && (
            <div className="mt-8">
              <button
                onClick={() => setShowSEOContent(!showSEOContent)}
                className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors"
              >
                {showSEOContent ? 'Show Less ↑' : 'Read More About Our Services ↓'}
              </button>
            </div>
          )}
        </div>

        {/* EXACT SAME ACCORDION AS HOMEPAGE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((faq, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              {/* Header */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex justify-between items-center px-6 py-4 font-medium text-gray-800 bg-white hover:bg-gray-200 transition-colors`}
              >
                {faq.question}
                {open === i ? (
                  <IconMinus className="w-5 h-5 text-gray-600" />
                ) : (
                  <IconPlus className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  open === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden bg-white">
                  <div className="px-6 py-3 pb-4 text-gray-600 space-y-2">
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Content - Conditionally rendered inside FAQ like homepage */}
        {seoContent && showSEOContent && (
          <div className="mt-12">
            {/* EXACT SAME LAYOUT AS HOMEPAGE - Fixed height with scroll and border */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-[400px] overflow-y-auto border border-gray-700 rounded-2xl bg-white p-8">
              <div 
                className="md:col-span-2"
                dangerouslySetInnerHTML={{ __html: seoContent.content }}
              />
            </div>
          </div>
        )}
        
      </div>
    </section>
  )
}