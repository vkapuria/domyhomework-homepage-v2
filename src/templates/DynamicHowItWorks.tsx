'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface HowItWorksStep {
  number: string
  title: string
  description: string
}

interface DynamicHowItWorksProps {
  title: string
  subtitle: string
  steps: HowItWorksStep[]
  chipText?: string
  ctaText?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export default function DynamicHowItWorks({ 
  title, 
  subtitle, 
  steps,
  chipText = "How It Works",
  ctaText = "Start Your Order",
  secondaryCtaText = "Or, See Our Pricing →",
  secondaryCtaLink = "/pricing"
}: DynamicHowItWorksProps) {
  return (
    <section className="relative py-12 sm:py-16 bg-white overflow-hidden" aria-labelledby="how-it-works-heading">

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center z-10">
        {/* Section Chip + Heading - EXACT SAME AS HOMEPAGE */}
        <span className="inline-block text-sm font-medium border border-purple-500 bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
          {chipText}
        </span>
        <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          {subtitle}
        </p>

        {/* Steps with SMOOTH Animation (No Staggering) - EXACT SAME AS HOMEPAGE */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 text-center">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Image src={`/icons/number ${step.number}.png`} alt={`Step ${step.number}`} width={54} height={54} priority />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* UPDATED: Dual CTA Buttons */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <a 
              href="#order-form"
              className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
            >
              {ctaText}
            </a>
            
            {/* Secondary CTA */}
            <a 
              href={secondaryCtaLink}
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg border-2 border-purple-600 font-medium hover:bg-purple-50 transition-colors"
            >
              {secondaryCtaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}