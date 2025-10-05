'use client'
import Image from 'next/image'

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

        {/* Benefit Cards - EXACT SAME DESIGN AS HOMEPAGE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {items.map((benefit, index) => (
            <div key={index} className="relative">
              {/* Floating Icon - EXACT SAME AS HOMEPAGE */}
              <div 
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-15 h-15 bg-white rounded-full flex items-center justify-center animate-gentle-float z-10"
                style={{animationDelay: `${index * 0.5}s`}}
              >
                <Image src={benefit.icon} alt={benefit.title} width={40} height={40} />
              </div>
              
              {/* Card - EXACT SAME STYLING AS HOMEPAGE */}
              <div className="bg-white p-6 pt-6 border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {benefit.title}
                </h3>
                <div 
                  className="text-sm text-gray-600 text-left"
                  dangerouslySetInnerHTML={{ __html: benefit.description }}
                />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}