'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  return (
    <section className="relative py-12 sm:py-16 bg-white overflow-hidden" aria-labelledby="how-it-works-heading">

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center z-10">
        {/* Section Chip + Heading */}
        <span className="inline-block text-sm font-medium border border-purple-500 bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
          How It Works
        </span>
        <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          How Our Do My Homework Service Works
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Getting professional homework help is simple. Just follow these three quick steps and get your assignments done on time, every time.
        </p>

        {/* Steps with SMOOTH Animation (No Staggering) */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Step 1 */}
          <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 text-center">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Image src="/icons/number 1.png" alt="Step 1" width={54} height={54} priority />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
              Place Your Order
            </h3>
            <p className="text-sm text-gray-600">
              Submit your subject, deadline, and instructions to get started instantly.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 text-center">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Image src="/icons/number 2.png" alt="Step 2" width={54} height={54} priority />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
              Get Matched with an Expert
            </h3>
            <p className="text-sm text-gray-600">
              We'll connect you with a qualified homework writer for your specific subject.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 text-center">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <Image src="/icons/number 3.png" alt="Step 3" width={54} height={54} priority />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
              Receive Completed Homework
            </h3>
            <p className="text-sm text-gray-600">
              Get your assignment delivered on time, plagiarism-free, and ready to submit.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-12">
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