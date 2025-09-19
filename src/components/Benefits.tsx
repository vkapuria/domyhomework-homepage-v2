'use client'
import { 
  IconSchool, // Replaced IconUserGraduate as it's not exported from @tabler/icons-react
  IconShieldCheck, 
  IconClock, 
  IconWallet, 
  IconHeadset 
} from '@tabler/icons-react'

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
            Here’s what makes us the go-to choice for online homework help.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* 1. Expert Writers */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all text-center">
            <IconSchool className="w-7 h-7 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Expert Homework Writers
            </h3>
            <p className="text-sm text-gray-600">
              Qualified professionals with advanced degrees delivering accurate, subject-specific help.
            </p>
          </div>

          {/* 2. Plagiarism-Free */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all text-center">
            <IconShieldCheck className="w-7 h-7 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              100% Plagiarism-Free
            </h3>
            <p className="text-sm text-gray-600">
              All assignments are written from scratch and checked with advanced plagiarism detection tools.
            </p>
          </div>

          {/* 3. On-Time Delivery */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all text-center">
            <IconClock className="w-7 h-7 text-yellow-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              On-Time Delivery
            </h3>
            <p className="text-sm text-gray-600">
              We meet even tight deadlines so you never miss a submission.
            </p>
          </div>

          {/* 4. Affordable Pricing */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all text-center">
            <IconWallet className="w-7 h-7 text-purple-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Affordable & Transparent
            </h3>
            <p className="text-sm text-gray-600">
              Fair pricing with no hidden fees—get high-quality work within your budget.
            </p>
          </div>

          {/* 5. 24/7 Support */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all text-center">
            <IconHeadset className="w-7 h-7 text-pink-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              24/7 Confidential Support
            </h3>
            <p className="text-sm text-gray-600">
              Round-the-clock assistance with full privacy and confidentiality guaranteed.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}