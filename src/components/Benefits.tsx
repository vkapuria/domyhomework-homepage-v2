'use client'
import Image from 'next/image'

export default function Benefits() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Chip + Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
            Your Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Online Homework Help Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Our service is built around reliability, quality, and student success. 
            Here&apos;s what makes us the go-to choice for online homework help.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* 1. Expert Writers */}
          <div className="relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-15 h-15 bg-white rounded-full flex items-center justify-center animate-gentle-float z-10">
              <Image src="/icons/expert-writers.svg" alt="Expert Writers" width={40} height={40} />
            </div>
            <div className="bg-white p-6 pt-6 border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                Expert Writers
              </h3>
              <p className="text-sm text-gray-600 text-left">
                Qualified professionals with advanced degrees delivering accurate, subject-specific help. Our writers undergo rigorous screening to ensure top-quality academic assistance.
              </p>
            </div>
          </div>

          {/* 2. Plagiarism-Free */}
          <div className="relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-15 h-15 bg-white rounded-full flex items-center justify-center animate-gentle-float z-10" style={{animationDelay: '0.5s'}}>
              <Image src="/icons/original.svg" alt="Original Work" width={40} height={40} />
            </div>
            <div className="bg-white p-6 pt-6 border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                Plagiarism-Free
              </h3>
              <p className="text-sm text-gray-600 text-left">
                All assignments are written from scratch and checked with advanced plagiarism detection tools. We guarantee completely original work with comprehensive reports.
              </p>
            </div>
          </div>

          {/* 3. On-Time Delivery */}
          <div className="relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-15 h-15 bg-white rounded-full flex items-center justify-center animate-gentle-float z-10" style={{animationDelay: '1s'}}>
              <Image src="/icons/on-time.svg" alt="On-Time Delivery" width={40} height={40} />
            </div>
            <div className="bg-white p-6 pt-6 border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                On-Time Delivery
              </h3>
              <p className="text-sm text-gray-600 text-left">
              We meet even tight deadlines so you never miss a submission. Our efficient workflow and dedicated professional team ensure punctual delivery every single time.
              </p>
            </div>
          </div>

          {/* 4. Affordable Pricing */}
          <div className="relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-15 h-15 bg-white rounded-full flex items-center justify-center animate-gentle-float z-10" style={{animationDelay: '1.5s'}}>
              <Image src="/icons/affordable.svg" alt="Affordable Pricing" width={40} height={40} />
            </div>
            <div className="bg-white p-6 pt-6 border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                Affordable Pricing
              </h3>
              <p className="text-sm text-gray-600 text-left">
              Fair pricing with no hidden fees—get high-quality work within your budget. Completely transparent rates with no subscription, no hidden fee, secure payment for all students.
              </p>
            </div>
          </div>

          {/* 5. 24/7 Support */}
          <div className="relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-15 h-15 bg-white rounded-full flex items-center justify-center animate-gentle-float z-10" style={{animationDelay: '2s'}}>
              <Image src="/icons/24-hours-service.svg" alt="24/7 Support" width={40} height={40} />
            </div>
            <div className="bg-white p-6 pt-6 border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                24/7 Support
              </h3>
              <p className="text-sm text-gray-600 text-left">
                Round-the-clock assistance with full privacy and confidentiality guaranteed. Our support team is always available to help with any questions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}