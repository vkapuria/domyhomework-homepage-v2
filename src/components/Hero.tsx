'use client'
import { useState } from 'react'
import { 
  IconBook, 
  IconClock, 
  IconShieldCheck, 
  IconBolt, 
  IconStarFilled 
} from '@tabler/icons-react'

export default function Hero() {
  const [formData, setFormData] = useState({
    subject: '',
    deadline: '',
    email: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(formData as Record<string, string>)
    window.open(`https://order.domyhomework.co/?${params.toString()}`, '_blank')
  }

  return (
    <section className="relative bg-white py-16 sm:py-20">
  {/* Gradient fade at bottom */}
  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-white to-slate-100 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              {/* Chip */}
              <div className="inline-block">
                <span className="px-4 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                  🎓 Do My Homework Online – 100% Human-Written
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Do My Homework Online – Expert Help You Can Trust
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Get plagiarism-free, original assignments written by experts. On-time delivery, 24/7 support, 
                and a money-back guarantee—trusted by students worldwide.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
              <div className="flex -space-x-3">
                {['John Doe', 'Mary Smith', 'Sarah Johnson', 'Alex Brown'].map((name, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-100 shadow-sm">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=3B82F6&color=fff&size=40`} 
                      alt={name} 
                      className="object-cover w-full h-full" 
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center items-center md:items-start">
                <div className="flex items-center text-yellow-400">
                  <IconStarFilled className="w-5 h-5" />
                  <IconStarFilled className="w-5 h-5" />
                  <IconStarFilled className="w-5 h-5" />
                  <IconStarFilled className="w-5 h-5" />
                  <IconStarFilled className="w-5 h-5" />
                </div>
                <span className="text-sm text-gray-600 font-medium mt-1">
                  Trusted by 15,000+ students for online homework help
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Start Form */}
          <div id="order-form" className="scroll-mt-28 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Your Homework Request</h3>
              <p className="text-gray-600">Enter details below to move to our secure order form</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Subject & Deadline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject/Topic</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g., Mathematics"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                  <input
                    type="datetime-local"
                    required
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                className="w-full bg-neutral-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-neutral-800 transition-colors shadow-md hover:shadow-lg"
              >
                Continue to Order →
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              Your details remain secure & confidential.
            </p>
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-16">
          {/* Card 1 */}
          <div className="flex items-start space-x-3 p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <IconBook className="w-7 h-7 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Professional Homework Writers</h3>
              <p className="text-sm text-gray-500">Qualified experts with advanced degrees across subjects.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start space-x-3 p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <IconClock className="w-7 h-7 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-500">Round-the-clock assistance whenever you need help.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start space-x-3 p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <IconShieldCheck className="w-7 h-7 text-yellow-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Plagiarism-Free Guarantee</h3>
              <p className="text-sm text-gray-500">Original work checked with advanced plagiarism tools.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-start space-x-3 p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <IconBolt className="w-7 h-7 text-pink-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Fast & Simple Homework Help</h3>
              <p className="text-sm text-gray-500">Submit, pay, receive—homework done in 3 easy steps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
