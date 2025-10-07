'use client'
import { useState } from 'react'
import Image from 'next/image'
import PricingSection from '@/components/PricingSection'
import { IconPlus, IconMinus, IconCheck, IconArrowDown } from '@tabler/icons-react'

// Service comparison data
const services = [
  {
    id: 'writing',
    icon: '/icons/expert-writers.svg',
    title: 'Academic Writing',
    description: 'Essays, research papers, dissertations, and all academic content',
    basePrice: '$12-24',
    features: [
      'Original research and writing',
      'Plagiarism report included',
      'Free formatting (APA, MLA, Chicago, etc.)',
      'Free title page and bibliography',
      'Unlimited revisions'
    ]
  },
  {
    id: 'editing',
    icon: '/icons/original.svg',
    title: 'Editing & Proofreading',
    description: 'Grammar, style, clarity, and structure improvements',
    basePrice: '$8-12',
    features: [
      'Comprehensive grammar check',
      'Style and clarity improvements',
      'Structure and flow optimization',
      'Formatting corrections',
      'Track changes document'
    ]
  },
  {
    id: 'technical',
    icon: '/icons/affordable.svg',
    title: 'Technical & Problem Solving',
    description: 'Math, programming, statistics, and STEM subjects',
    basePrice: 'Custom Quote',
    features: [
      'Math and statistics problems',
      'Programming assignments',
      'Engineering calculations',
      'Data analysis',
      'Step-by-step solutions'
    ]
  }
]

// Quick reference price guide
const priceGuide = [
  { deadline: '14 Days', highSchool: '$10', bachelors: '$12', masters: '$16', phd: '$20' },
  { deadline: '7 Days', highSchool: '$12', bachelors: '$14', masters: '$19', phd: '$24' },
  { deadline: '3 Days', highSchool: '$13', bachelors: '$15', masters: '$21', phd: '$26' },
  { deadline: '24 Hours', highSchool: '$16', bachelors: '$18', masters: '$25', phd: '$31' },
]

// FAQ data
const faqs = [
  {
    question: "How much does homework help cost?",
    answer: "Our pricing starts at $12 per page for bachelor's level work with a 7-day deadline. Prices vary based on academic level (high school, bachelor's, master's, PhD), deadline urgency, and assignment type. Use our calculator above to get an exact quote for your specific needs."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No. All prices shown include everything - research, writing, formatting, title page, and bibliography. The only additional costs would be optional extras you specifically choose, like VIP support or progressive delivery."
  },
  {
    question: "Do you offer discounts?",
    answer: "Yes! We offer automatic bulk discounts: 10% off for 5-9 pages, 15% off for 10-14 pages, and 20% off for 15+ pages. First-time customers also receive a welcome discount."
  },
  {
    question: "What's included in the price?",
    answer: "Every order includes: original research and writing, plagiarism report, free formatting in any style (APA, MLA, Chicago, Harvard, etc.), title page, bibliography/references, and unlimited free revisions until you're satisfied."
  },
  {
    question: "How do I calculate the final cost?",
    answer: "Use our interactive calculator above. Select your academic level, document type, deadline, and number of pages. The calculator automatically applies any eligible bulk discounts and shows your final price with no surprises."
  },
  {
    question: "Do prices change for rush orders?",
    answer: "Yes, shorter deadlines have higher per-page rates due to prioritization. However, we still offer competitive rates: 24-hour turnaround is only about 30% more than a 7-day deadline, not double or triple like some services."
  }
]

export default function PricingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [selectedDeadline, setSelectedDeadline] = useState(1) // Default to 7 Days (index 1)

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('pricing-calculator')
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Hero Section - Two Columns */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-18 items-center">
        
            {/* Left Column - Hero Content (2/3 width) */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <span className="inline-block text-sm font-medium bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4 border border-purple-200">
                Transparent Pricing
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Homework Help Pricing That Works for Students
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                No hidden fees, no surprises. Just honest, student-friendly pricing with automatic bulk discounts and a money-back guarantee.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
                <span className="px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 text-gray-800" style={{borderRadius: '60px', border: '1px solid #d1f4d5', background: '#f3fcf4', boxShadow: '0px 3px 6px 0px rgba(64, 160, 83, 0.15)'}}>
                  <Image src="/icons/checked.svg" alt="" width={12} height={12} />
                  Starting at $12/page
                </span>
                <span className="px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 text-gray-800" style={{borderRadius: '60px', border: '1px solid #d1f4d5', background: '#f3fcf4', boxShadow: '0px 3px 6px 0px rgba(64, 160, 83, 0.15)'}}>
                  <Image src="/icons/checked.svg" alt="" width={12} height={12} />
                  Up to 20% bulk discount
                </span>
                <span className="px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 text-gray-800" style={{borderRadius: '60px', border: '1px solid #d1f4d5', background: '#f3fcf4', boxShadow: '0px 3px 6px 0px rgba(64, 160, 83, 0.15)'}}>
                  <Image src="/icons/checked.svg" alt="" width={12} height={12} />
                  No hidden fees
                </span>
              </div>

              {/* Smooth Scroll Button */}
              <button
                onClick={scrollToCalculator}
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 border-2 border-black font-semibold hover:bg-purple-700 transition-all shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] rounded"
              >
                Calculate Your Exact Price
                <IconArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Right Column - Quick Price Guide (1/3 width) */}
            <div className="lg:col-span-1 bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Price Guide</h3>
              <p className="text-sm text-gray-600 mb-4">Price per page for academic writing:</p>
              
              {/* Deadline Selector Dropdown */}
              <div className="mb-4">
                <label htmlFor="deadline-select-hero" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
                  Select Deadline
                </label>
                <select
                  id="deadline-select-hero"
                  value={selectedDeadline}
                  onChange={(e) => setSelectedDeadline(Number(e.target.value))}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg bg-white text-sm font-medium focus:border-purple-600 focus:outline-none transition-all"
                >
                  {priceGuide.map((item, index) => (
                    <option key={index} value={index}>{item.deadline}</option>
                  ))}
                </select>
              </div>
              
              {/* Single Selected Card */}
              <div className="bg-white border-2 border-purple-200 rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-purple-700 mb-3 text-base">
                  {priceGuide[selectedDeadline].deadline}
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-gray-600">High School:</div>
                  <div className="font-bold text-right text-gray-900">{priceGuide[selectedDeadline].highSchool}/pg</div>
                  <div className="text-gray-600">Bachelor's:</div>
                  <div className="font-bold text-right text-gray-900">{priceGuide[selectedDeadline].bachelors}/pg</div>
                  <div className="text-gray-600">Master's:</div>
                  <div className="font-bold text-right text-gray-900">{priceGuide[selectedDeadline].masters}/pg</div>
                  <div className="text-gray-600">PhD:</div>
                  <div className="font-bold text-right text-gray-900">{priceGuide[selectedDeadline].phd}/pg</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-xs text-gray-600 space-y-2">
                  <div className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Bulk discounts automatically applied</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>All features included</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <IconCheck className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>No hidden charges</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Calculator Section - Wider */}
      <section id="pricing-calculator" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">

          {/* Calculator card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 lg:p-16" style={{boxShadow: '0px 149px 42px 0px rgba(0, 0, 0, 0.00), 0px 95px 38px 0px rgba(0, 0, 0, 0.01), 0px 53px 32px 0px rgba(0, 0, 0, 0.02), 0px 24px 24px 0px rgba(0, 0, 0, 0.04), 0px 6px 13px 0px rgba(0, 0, 0, 0.05)'}}>
            <PricingSection />
          </div>
        </div>
      </section>

      {/* Service Comparison Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium border border-purple-500 bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
              Service Types
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compare Our Service Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different services, same commitment to quality and transparency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image src={service.icon} alt="" width={40} height={40} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-purple-600 font-semibold">{service.basePrice}/page</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <IconCheck className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium border border-purple-500 bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
              Pricing FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Common Pricing Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white border-2 rounded-lg overflow-hidden transition-all ${
                  openFaqIndex === index 
                    ? 'border-purple-600 shadow-[4px_4px_0px_#8300e9]' 
                    : 'border-black shadow-[4px_4px_0px_#000]'
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className={`w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors ${
                    openFaqIndex === index ? 'border-t-4 border-purple-600' : ''
                  }`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaqIndex === index ? (
                    <IconMinus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <IconPlus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                
                <div className={`grid transition-all duration-200 ease-in-out ${
                  openFaqIndex === index 
                    ? "grid-rows-[1fr] opacity-100" 
                    : "grid-rows-[0fr] opacity-0"
                }`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 border-2 border-black rounded-lg p-8 sm:p-12 shadow-[8px_8px_0px_#000]">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
              Get your exact quote in 60 seconds. No credit card required, no commitments.
            </p>
            <a 
              href="https://order.domyhomework.co"
              className="inline-block bg-white text-purple-600 px-8 py-4 border-2 border-black font-bold text-lg hover:bg-gray-100 transition-all shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] rounded"
            >
              Calculate Your Price Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}