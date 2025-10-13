'use client'
import Image from 'next/image'
import { useState } from 'react'

interface BenefitItem {
  icon: string
  title: string
  description: string
}

interface DynamicBenefitsProps {
  title: string
  subtitle: string
  items: BenefitItem[]
  chipText?: string
}

export default function DynamicBenefits({ 
  title, 
  subtitle, 
  items,
  chipText = "Your Benefits" 
}: DynamicBenefitsProps) {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  const toggleCard = (index: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <section className="py-16 sm:py-20" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Chip + Heading - EXACT SAME AS HOMEPAGE */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
            {chipText}
          </span>
          <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Benefit Cards - WITH READ MORE FEATURE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((benefit, index) => {
            const isExpanded = expandedCards.has(index)
            
            return (
              <div key={index} className="relative">
                {/* Floating Icon - EXACT SAME AS HOMEPAGE */}
                <div 
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                  w-16 h-16 bg-purple-100 rounded-md border-2 border-black 
                  flex items-center justify-center 
                  drop-shadow-[7px_7px_0_#000] z-10"
                  style={{animationDelay: `${index * 0.5}s`}}
                >
                  <Image src={benefit.icon} alt={benefit.title} width={40} height={40} />
                </div>
                
                {/* Card - WITH FIXED HEIGHT AND EXPANSION */}
                <div className="bg-white p-6 pt-12 border-2 border-black rounded-md 
                              drop-shadow-[7px_7px_0_#000] 
                              transition-all duration-200 ease-in-out hover:-translate-y-1
                              flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                    {benefit.title}
                  </h3>
                  
                  {/* Description with overflow control */}
                  <div 
                    className={`text-sm text-gray-600 text-left overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[1000px]' : 'max-h-[120px]'
                    }`}
                  >
                    <div dangerouslySetInnerHTML={{ __html: benefit.description }} />
                  </div>
                  
                  {/* Read More Button */}
                  <button
                    onClick={() => toggleCard(index)}
                    className="mt-3 text-purple-600 hover:text-purple-700 text-sm font-medium 
                             flex items-center justify-center gap-1 transition-colors duration-200"
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? "Show less" : "Read more"}
                  >
                    {isExpanded ? (
                      <>
                        Show Less
                        <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        Read More
                        <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}