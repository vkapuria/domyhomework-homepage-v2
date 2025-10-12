'use client'
import Image from 'next/image'

export default function Benefits() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Chip + Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4 border border-purple-200">
            Your Benefits
          </span>
          <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
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
            {/* Floating Icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                            w-16 h-16 bg-purple-100 rounded-md border-2 border-black 
                            flex items-center justify-center 
                            drop-shadow-[7px_7px_0_#000] z-10">
              <Image src="/icons/expert-writers.svg" alt="Expert Writers" width={32} height={32} />
            </div>
            {/* Card */}
            <div className="bg-white p-6 pt-12 border-2 border-black rounded-md 
                            drop-shadow-[7px_7px_0_#000] 
                            transition-transform duration-200 ease-in-out hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                Expert Writers
              </h3>
              <p className="text-sm text-gray-600 text-left leading-relaxed">
                Qualified professionals with advanced degrees delivering accurate, subject-specific help. Our writers undergo rigorous screening to ensure top-quality <a href="/services" className="text-purple-600 hover:text-purple-800 underline font-medium">academic assistance</a>.
              </p>
            </div>
          </div>

          {/* 2. Plagiarism-Free */}
          <div className="relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                            w-16 h-16 bg-green-100 rounded-md border-2 border-black 
                            flex items-center justify-center 
                            drop-shadow-[7px_7px_0_#000] z-10">
              <Image src="/icons/original.svg" alt="Original Work" width={32} height={32} />
            </div>
            <div className="bg-white p-6 pt-12 border-2 border-black rounded-md 
                            drop-shadow-[7px_7px_0_#000] 
                            transition-transform duration-200 ease-in-out hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                Plagiarism-Free
              </h3>
              <p className="text-sm text-gray-600 text-left leading-relaxed">
                All assignments are written from scratch and checked with advanced plagiarism detection tools. We guarantee completely original work with comprehensive reports.
              </p>
            </div>
          </div>

          {/* 3. On-Time Delivery */}
          <div className="relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                            w-16 h-16 bg-blue-100 rounded-md border-2 border-black 
                            flex items-center justify-center 
                            drop-shadow-[7px_7px_0_#000] z-10">
              <Image src="/icons/on-time.svg" alt="On-Time Delivery" width={32} height={32} />
            </div>
            <div className="bg-white p-6 pt-12 border-2 border-black rounded-md 
                            drop-shadow-[7px_7px_0_#000] 
                            transition-transform duration-200 ease-in-out hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                On-Time Delivery
              </h3>
              <p className="text-sm text-gray-600 text-left leading-relaxed">
                We meet even tight deadlines so you never miss a submission. Our efficient workflow and dedicated professional team ensure punctual delivery every single time. <a href="/how-it-works" className="text-purple-600 hover:text-purple-800 underline font-medium">See how it works</a>.
              </p>
            </div>
          </div>

          {/* 4. Affordable Pricing */}
          <div className="relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                            w-16 h-16 bg-yellow-100 rounded-md border-2 border-black 
                            flex items-center justify-center 
                            drop-shadow-[7px_7px_0_#000] z-10">
              <Image src="/icons/affordable.svg" alt="Affordable Pricing" width={32} height={32} />
            </div>
            <div className="bg-white p-6 pt-12 border-2 border-black rounded-md 
                            drop-shadow-[7px_7px_0_#000] 
                            transition-transform duration-200 ease-in-out hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                Affordable Pricing
              </h3>
              <p className="text-sm text-gray-600 text-left leading-relaxed">
                Fair pricing with no hidden fees—get high-quality work within your budget. Completely transparent rates with no subscription, no hidden fee, secure payment for all students. <a href="/pricing" className="text-purple-600 hover:text-purple-800 underline font-medium">View pricing</a>.
              </p>
            </div>
          </div>

          {/* 5. 24/7 Support */}
          <div className="relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                            w-16 h-16 bg-pink-100 rounded-md border-2 border-black 
                            flex items-center justify-center 
                            drop-shadow-[7px_7px_0_#000] z-10">
              <Image src="/icons/24-hours-service.svg" alt="24/7 Support" width={32} height={32} />
            </div>
            <div className="bg-white p-6 pt-12 border-2 border-black rounded-md 
                            drop-shadow-[7px_7px_0_#000] 
                            transition-transform duration-200 ease-in-out hover:-translate-y-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                24/7 Support
              </h3>
              <p className="text-sm text-gray-600 text-left leading-relaxed">
                Round-the-clock assistance with full privacy and confidentiality guaranteed. Our support team is always available to help with any questions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
