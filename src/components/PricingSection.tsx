'use client'
import { useState } from 'react'

export default function PricingSection() {
  // Example state for price (replace with your real calculation logic)
  const [price, setPrice] = useState(25)

  return (
    <section className="relative py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* ===== Left Column: Calculator Form ===== */}
        <div className="bg-white rounded-2xl border-2 border-gray-900 p-6 sm:p-8 shadow-[6px_6px_0px_#000]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Instant Price Calculator
          </h2>
          <form className="space-y-5">
            {/* Service Type */}
            <div>
              <label className="block text-sm font-semibold mb-1">Service Type</label>
              <select className="w-full border-2 border-gray-900 rounded-lg p-2 focus:outline-none">
                <option>Homework</option>
                <option>Essay</option>
                <option>Research Paper</option>
              </select>
            </div>
            {/* Academic Level */}
            <div>
              <label className="block text-sm font-semibold mb-1">Academic Level</label>
              <select className="w-full border-2 border-gray-900 rounded-lg p-2 focus:outline-none">
                <option>High School</option>
                <option>College</option>
                <option>University</option>
              </select>
            </div>
            {/* Deadline */}
            <div>
              <label className="block text-sm font-semibold mb-1">Deadline</label>
              <select className="w-full border-2 border-gray-900 rounded-lg p-2 focus:outline-none">
                <option>7 Days</option>
                <option>3 Days</option>
                <option>24 Hours</option>
              </select>
            </div>
            {/* Pages */}
            <div>
              <label className="block text-sm font-semibold mb-1">Pages</label>
              <input
                type="number"
                defaultValue={1}
                min={1}
                className="w-full border-2 border-gray-900 rounded-lg p-2 focus:outline-none"
              />
            </div>

            {/* Price Output */}
            <div className="mt-6 text-xl font-bold">
              Estimated Price: <span className="font-['Zilla_Slab']">${price}</span>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-[#8300e9] hover:bg-purple-700 text-white py-3 rounded-lg font-semibold shadow-md"
            >
              Proceed to Order
            </button>
          </form>
        </div>

        {/* ===== Right Column: All-Inclusive Pricing Card ===== */}
        <div className="relative bg-white rounded-2xl border-2 border-gray-900 p-8 sm:p-10 shadow-[6px_6px_0px_#000] text-center">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-bold text-xs px-3 py-1 rounded-full shadow">
            SAVE 15%
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            All-Inclusive Pricing
          </h3>
          <p className="text-gray-600 mb-6">
            No hidden charges. Everything you need, in one simple price.
          </p>

          {/* Price */}
          <div className="text-4xl sm:text-5xl font-['Zilla_Slab'] font-bold mb-4">
            $<span>{price}</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">per page (double-spaced)</p>

          {/* Features */}
          <ul className="space-y-3 text-sm sm:text-base text-left max-w-sm mx-auto">
            <li className="flex items-center gap-2">
              ✅ Free Title & Reference Page
            </li>
            <li className="flex items-center gap-2">
              ✅ Free Revisions
            </li>
            <li className="flex items-center gap-2">
              ✅ 100% Plagiarism-Free
            </li>
            <li className="flex items-center gap-2">
              ✅ On-Time Delivery
            </li>
            <li className="flex items-center gap-2">
              ✅ 24/7 Support
            </li>
          </ul>

          <button
            className="mt-8 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  )
}
