'use client'
import { IconShieldCheck, IconClockCheck, IconLock, IconCircleCheck } from '@tabler/icons-react'

export default function Guarantees() {
  return (
    <section className="py-12 sm:py-16 scroll-mt-28" data-section="guarantees">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Chip + H2 */}
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium border border-purple-500 bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
            Our Guarantees
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Homework Help Guarantees: Plagiarism-Free, On-Time, Confidential
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            We back every order with clear, student-first policies. No fluff—just guarantees that protect your grade, deadline, and privacy.
          </p>
        </div>

        {/* Guarantee Strip (not cards) */}
        <div className="border-y border-gray-500 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

            {/* Plagiarism-Free */}
            <div className="md:border-r md:border-gray-500 md:pr-8">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <IconShieldCheck className="w-7 h-7 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">Plagiarism-Free Guarantee</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <IconCircleCheck className="w-5 h-5 mt-0.5 text-green-600" />
                  100% original, written from scratch
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <IconCircleCheck className="w-5 h-5 mt-0.5 text-green-600" />
                  Free originality report on request
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <IconCircleCheck className="w-5 h-5 mt-0.5 text-green-600" />
                  Free revisions to match the rubric
                </li>
              </ul>
            </div>

            {/* On-Time Delivery */}
            <div className="md:px-8 md:border-r md:border-gray-500">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <IconClockCheck className="w-7 h-7 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">On-Time Delivery</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <IconCircleCheck className="w-5 h-5 mt-0.5 text-blue-600" />
                  Deadline-matched scheduling
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <IconCircleCheck className="w-5 h-5 mt-0.5 text-blue-600" />
                  Milestone updates on larger orders
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <IconCircleCheck className="w-5 h-5 mt-0.5 text-blue-600" />
                  Money-back guarantee if we miss it
                </li>
              </ul>
            </div>

            {/* Confidentiality */}
            <div className="md:pl-8">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <IconLock className="w-7 h-7 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900">Confidential & Secure</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-700">
                  <IconCircleCheck className="w-5 h-5 mt-0.5 text-purple-600" />
                  Private, encrypted communication
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <IconCircleCheck className="w-5 h-5 mt-0.5 text-purple-600" />
                  No data shared with schools/third parties
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <IconCircleCheck className="w-5 h-5 mt-0.5 text-purple-600" />
                  Discreet billing and support
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Policy line + CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
        <p className="text-gray-600 flex flex-wrap items-center gap-2">
  *Covered by our
  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 border border-gray-300  text-black text-sm font-medium">
    💸 Money-Back Guarantee
  </span>
  and
  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 border border-gray-300 text-black text-sm font-medium">
    ✍️ Free Revisions Policy
  </span>
</p>

          <a
            href="#order-form"
            className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            Start Your Order
          </a>
        </div>

      </div>
    </section>
  )
}
