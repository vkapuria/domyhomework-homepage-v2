'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IconPlus, IconMinus, IconStarFilled } from '@tabler/icons-react'
import { useState } from 'react'

const faqs = [
  {
    question: "Is using homework help services legal and ethical?",
    answer: "Yes, absolutely. Our service is academic assistance - just like hiring a personal tutor. We help you understand concepts and provide guidance to improve your learning. Many students use our work as study materials to better understand their subjects."
  },
  {
    question: "How do I know the quality will meet my standards?",
    answer: "All our experts have advanced degrees and years of experience in their fields. We provide free revisions until you're completely satisfied, plus a money-back guarantee if the work doesn't meet your requirements. You can also view samples before placing an order."
  },
  {
    question: "Is my personal information safe and confidential?",
    answer: "Your privacy is our top priority. We never share your personal information with third parties. All communication is encrypted, payments are secure, and we maintain strict confidentiality. Your school will never know you used our service."
  },
  {
    question: "What if I need revisions or I'm not satisfied?",
    answer: "We offer unlimited free revisions until the work meets your exact requirements. If you're still not satisfied, our money-back guarantee covers you. Our 24/7 support team is always available to address any concerns quickly."
  }
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* FAQ Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Questions Students Often Ask
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our homework help process and policies.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className={`bg-white border-2 rounded-lg overflow-hidden transition-all ${
                openIndex === index 
                  ? 'border-purple-600 shadow-[4px_4px_0px_#8300e9]' 
                  : 'border-black shadow-[4px_4px_0px_#000]'
              }`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors ${
                    openIndex === index ? 'border-t-4 border-purple-600' : ''
                  }`}
                >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <IconMinus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <IconPlus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              
              <div className={`grid transition-all duration-200 ease-in-out ${
                openIndex === index 
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

        {/* CTA Section - Compact Professional Layout */}
        <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-black shadow-[8px_8px_0px_#000] rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 items-center min-h-[450px]">
            
            {/* Left Column - Image + Social Proof (2 columns) */}
            <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center items-center space-y-6">
            {/* Properly Sized Image */}
            <div className="w-full max-w-[480px]">
                <Image 
                src="/images/Happy-student.png"
                alt="Happy Student"
                width={280}
                height={280}
                className="w-full h-auto"
                priority
                />
            </div>
            
            {/* Compact Social Proof Box */}
                <div className="w-full max-w-[280px]">
                <div className="flex items-center justify-center text-yellow-400 gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                    <IconStarFilled key={i} className="w-6 h-6" />
                    ))}
                </div>
                <p className="text-base font-bold text-gray-900 text-center">
                    Trusted by 14,800+ students
                </p>
                </div>
            </div>
            
            {/* Right Column - Content + CTA (3 columns) */}
            <div className="lg:col-span-3 p-6 lg:p-10 bg-white flex flex-col justify-center">
            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Ready to Make Your Homework Stress-Free?
            </h3>
            
            {/* Description */}
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Join thousands of successful students who trust us with their academic success.
            </p>
            
            {/* CTA Button */}
            <a 
                href="https://order.domyhomework.co"
                className="inline-block bg-purple-600 text-white px-8 py-4 border-2 border-black font-bold text-lg hover:bg-purple-700 transition-all shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] text-center mb-5 rounded w-full sm:w-auto"
            >
                Get My Homework Quote Now
            </a>            
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}

// Generate structured data for How It Works page
function generateHowItWorksStructuredData() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://domyhomework.co"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "How It Works",
            "item": "https://domyhomework.co/how-it-works"
          }
        ]
      }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get Professional Homework Help",
    "description": "Simple 3-step process to get expert homework assistance online",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Submit Your Task",
        "text": "Upload your assignment details, requirements, and deadline. Takes just 2-3 minutes.",
        "position": 1
      },
      {
        "@type": "HowToStep", 
        "name": "Get Matched With an Expert",
        "text": "We assign a qualified expert with PhD or Master's degree in your subject area.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Receive Your Work", 
        "text": "Get your completed assignment before deadline, plagiarism-free with quality report.",
        "position": 3
      }
    ]
  }

  return [breadcrumbSchema, howToSchema]
}

export default function HowItWorksPage() {
  const structuredData = generateHowItWorksStructuredData()

  return (
    <>
      {/* Add structured data */}
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How Our Homework Help Actually Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
            From overwhelmed to confident in just 3 steps. Here's how we make homework stress-free.   
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 text-gray-800" style={{borderRadius: '60px', border: '1px solid #d1f4d5', background: '#f3fcf4', boxShadow: '0px 69px 19px 0px rgba(64, 160, 83, 0), 0px 44px 18px 0px rgba(64, 160, 83, 0.02), 0px 25px 15px 0px rgba(64, 160, 83, 0.07), 0px 11px 11px 0px rgba(64, 160, 83, 0.13), 0px 3px 6px 0px rgba(64, 160, 83, 0.15)'}}>
                <Image src="/icons/checked.svg" alt="" width={17} height={17} />
                Transparent process
            </span>
            <span className="px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 text-gray-800" style={{borderRadius: '60px', border: '1px solid #d1f4d5', background: '#f3fcf4', boxShadow: '0px 69px 19px 0px rgba(64, 160, 83, 0), 0px 44px 18px 0px rgba(64, 160, 83, 0.02), 0px 25px 15px 0px rgba(64, 160, 83, 0.07), 0px 11px 11px 0px rgba(64, 160, 83, 0.13), 0px 3px 6px 0px rgba(64, 160, 83, 0.15)'}}>
                <Image src="/icons/checked.svg" alt="" width={17} height={17} />
                No hidden fees
            </span>
            <span className="px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 text-gray-800" style={{borderRadius: '60px', border: '1px solid #d1f4d5', background: '#f3fcf4', boxShadow: '0px 69px 19px 0px rgba(64, 160, 83, 0), 0px 44px 18px 0px rgba(64, 160, 83, 0.02), 0px 25px 15px 0px rgba(64, 160, 83, 0.07), 0px 11px 11px 0px rgba(64, 160, 83, 0.13), 0px 3px 6px 0px rgba(64, 160, 83, 0.15)'}}>
                <Image src="/icons/checked.svg" alt="" width={17} height={17} />
                Get started in 5 minutes
            </span>
            </div>
        </div>
      </section>

      {/* Trust Stats Divider */}
<div className="bg-black text-white py-10">
  <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
      <div className="transition-transform hover:scale-105">
        <div className="text-4xl font-extrabold text-purple-400 mb-1">47,000+</div>
        <div className="text-sm text-gray-300">Assignments Completed</div>
      </div>
      <div className="transition-transform hover:scale-105">
        <div className="text-4xl font-extrabold text-purple-400 mb-1">98%</div>
        <div className="text-sm text-gray-300">Customer Satisfaction</div>
      </div>
      <div className="transition-transform hover:scale-105">
        <div className="text-4xl font-extrabold text-purple-400 mb-1">24/7</div>
        <div className="text-sm text-gray-300">Expert Support</div>
      </div>
    </div>
  </div>
</div>


      {/* How It Works Process */}
      {/* How It Works Process */}
<section className="py-16 sm:py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
    
    {/* Card Container - LiveChat Style */}
    <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 lg:p-16" style={{boxShadow: '0px 149px 42px 0px rgba(0, 0, 0, 0.00), 0px 95px 38px 0px rgba(0, 0, 0, 0.01), 0px 53px 32px 0px rgba(0, 0, 0, 0.02), 0px 24px 24px 0px rgba(0, 0, 0, 0.04), 0px 6px 13px 0px rgba(0, 0, 0, 0.05)'}}>
      
      {/* Chip Badge */}
      <div className="text-center mb-8">
        <span className="inline-block text-xs font-semibold text-gray-700 border border-gray-300 rounded-full px-3 py-1.5 uppercase tracking-wide">
          How It Works
        </span>
      </div>
      
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Three Simple Steps to Academic Success
        </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures you get high-quality help quickly and securely.
            </p>
          </div>

          {/* Steps */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-purple-300 z-0"></div>
            
            {/* Step 1 */}
            <div className="relative bg-white border-2 border-black shadow-[4px_4px_0px_#000] rounded-lg p-6 text-center hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all z-10">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Image src="/icons/number 1.png" alt="Step 1" width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                Submit Your Task
              </h3>
              <p className="text-gray-600 mb-4">
                Upload your assignment details, requirements, and deadline. Takes just 2-3 minutes.
              </p>
              <div className="text-sm text-purple-600 font-medium">
                ⏱️ No payment required to get quote
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white border-2 border-black shadow-[4px_4px_0px_#000] rounded-lg p-6 text-center hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all z-10">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Image src="/icons/number 2.png" alt="Step 2" width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                Get Matched With an Expert
              </h3>
              <p className="text-gray-600 mb-4">
                We assign a qualified expert with PhD or Master's degree in your subject area.
              </p>
              <div className="text-sm text-purple-600 font-medium">
                ⚡ Expert assigned within 15 minutes
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white border-2 border-black shadow-[4px_4px_0px_#000] rounded-lg p-6 text-center hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all z-10">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Image src="/icons/number 3.png" alt="Step 3" width={48} height={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                Receive Your Work
              </h3>
              <p className="text-gray-600 mb-4">
                Get your completed assignment before deadline, plagiarism-free with quality report.
              </p>
              <div className="text-sm text-purple-600 font-medium">
                🔄 Free revisions until satisfied
              </div>
            </div>
          </motion.div>

          {/* Process CTA */}
            <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#faq"
                className="inline-block bg-purple-600 text-white px-8 py-3 border-2 border-black font-semibold hover:bg-purple-700 transition-colors shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                Get Started in Minutes
                </a>
                
                <a href="/pricing"
                className="inline-block bg-white text-black-600 px-8 py-3 border-2 border-purple-600 font-semibold hover:bg-purple-50 transition-colors shadow-[4px_4px_0px_#8300e9] hover:shadow-[2px_2px_0px_#8300e9] hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                Or, See Our Pricing →
                </a>
            </div>
            </div>
            </div>
      </div> {/* End Card Container */}
  </section>

      {/* FAQ + CTA Section */}
      <FAQSection />
    </>
  )
}