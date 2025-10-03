'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  IconBook, 
  IconClock, 
  IconShieldCheck, 
  IconBolt, 
  IconStarFilled,
  IconFileText,
  IconCalendarEvent,
  IconMail
} from '@tabler/icons-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Image from 'next/image'

// ==================== CONSTANTS ====================

// Trust metrics for flip animation
const TRUST_METRICS = [
  <>Trusted by <span className="text-blue-600 font-bold">14,800+</span> students for online homework help</>,
  <><span className="text-green-600 font-bold">12,400+</span> students helped this year</>, 
  <><span className="text-purple-600 font-bold">47,000+</span> assignments completed successfully</>,
  <><span className="text-orange-600 font-bold">8 years</span> of academic writing excellence</>
]

// Avatar images for social proof
const AVATAR_IMAGES = [
  'https://randomuser.me/api/portraits/women/12.jpg',  // Young woman
  'https://randomuser.me/api/portraits/women/23.jpg',  // Young woman  
  'https://randomuser.me/api/portraits/women/18.jpg',  // Young woman
  'https://randomuser.me/api/portraits/men/15.jpg',    // Young man
]

// Feature highlights for bottom section
const FEATURE_HIGHLIGHTS = [
  {
    icon: IconBook,
    color: 'text-blue-600',
    title: 'Professional Homework Writers',
    description: 'Qualified experts with advanced degrees across subjects.'
  },
  {
    icon: IconClock,
    color: 'text-green-600',
    title: '24/7 Support',
    description: 'Round-the-clock assistance whenever you need help.'
  },
  {
    icon: IconShieldCheck,
    color: 'text-yellow-600',
    title: 'Plagiarism-Free Guarantee',
    description: 'Original work checked with advanced plagiarism tools.'
  },
  {
    icon: IconBolt,
    color: 'text-pink-600',
    title: 'Fast & Simple Homework Help',
    description: 'Submit, pay, receive—homework done in 3 easy steps.'
  }
]

// Document types configuration
const DOCUMENT_TYPES = [
  {
    group: 'Popular Choices',
    options: [
      { value: 'essay', label: 'Essay' },
      { value: 'research_paper', label: 'Research Paper' },
      { value: 'homework', label: 'Homework' },
      { value: 'coursework', label: 'Coursework' },
      { value: 'lab_report', label: 'Lab Report' },
      { value: 'discussion_post', label: 'Discussion Post' },
      { value: 'powerpoint', label: 'PowerPoint Presentation' },
      { value: 'article_review', label: 'Article Review' },
      { value: 'capstone_project', label: 'Capstone Project' },
      { value: 'other', label: 'Other' },
    ]
  },
  {
    group: 'Essays & Papers',
    options: [
      { value: 'argumentative_essay', label: 'Argumentative Essay/Paper' },
      { value: 'reflective_essay', label: 'Reflective Essay/Paper' },
      { value: 'analytical_essay', label: 'Analytical Essay/Paper' },
      { value: 'other_essay', label: 'Other Essay Type' },
    ]
  },
  {
    group: 'Research',
    options: [
      { value: 'annotated_bibliography', label: 'Annotated Bibliography' },
      { value: 'critical_analysis', label: 'Critical Analysis' },
      { value: 'dissertation', label: 'Dissertation' },
      { value: 'literature_review', label: 'Literature Review' },
      { value: 'research_proposal', label: 'Research Proposal' },
      { value: 'term_paper', label: 'Term Paper' },
      { value: 'thesis', label: 'Thesis' },
    ]
  },
  {
    group: 'Business',
    options: [
      { value: 'business_plan', label: 'Business Plan' },
      { value: 'case_study', label: 'Case Study' },
      { value: 'report', label: 'Report' },
      { value: 'feasibility_study', label: 'Feasibility Study' },
      { value: 'white_paper', label: 'White Paper' },
      { value: 'marketing_plan', label: 'Marketing Plan' },
      { value: 'executive_summary', label: 'Executive Summary' },
    ]
  }
]

// Shared form styles
const INPUT_STYLES = "w-full h-[60px] p-4 border-2 border-black bg-white text-base font-medium transition-all hover:scale-[1.01] hover:shadow-[2px_2px_0px_#000000] focus:border-purple-600 focus:shadow-[0_0_0_2px_#8300e9] focus:scale-[1.02]"
const LABEL_STYLES = "block text-sm font-bold text-black uppercase tracking-wide mb-2 flex items-center gap-2"

// ==================== SUB-COMPONENTS ====================

const AvatarStack = () => (
  <div className="flex -space-x-3">
    {AVATAR_IMAGES.map((src, i) => (
      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white shadow-sm">
        <img 
          src={src}
          alt={`Student ${i + 1}`} 
          className="object-cover w-full h-full" 
        />
      </div>
    ))}
    {/* 5th avatar with initials "AS" */}
    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-blue-600 shadow-sm flex items-center justify-center">
      <span className="text-white text-xs font-bold">AS</span>
    </div>
  </div>
)

const FlippingTrustMetrics = ({ currentMetric }: { currentMetric: number }) => (
  <div className="text-sm text-gray-600 font-medium mt-1 h-6 flex items-center overflow-hidden">
    <AnimatePresence mode="wait">
    <motion.span
      key={currentMetric}
      initial={{ rotateX: 90, opacity: 0, scale: 0.95, filter: "blur(2px)", y: 10 }}
      animate={{ rotateX: 0, opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
      exit={{ rotateX: -90, opacity: 0, scale: 0.95, filter: "blur(2px)", y: -10 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="block"
    >
        {TRUST_METRICS[currentMetric]}
      </motion.span>
    </AnimatePresence>
  </div>
)

const FeatureHighlights = () => (
  <motion.div
    className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 border-y border-gray-200 mt-20"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.1 }}
  >
    {FEATURE_HIGHLIGHTS.map((feature, index) => (
      <div key={index} className="flex items-center gap-3 text-center md:text-left max-w-xs">
        <feature.icon className={`w-6 h-6 ${feature.color}`} />
        <div>
          <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
          <p className="text-xs text-gray-500">{feature.description}</p>
        </div>
      </div>
    ))}
  </motion.div>
)

// ==================== MAIN COMPONENT ====================

export default function Hero() {
  // ========== STATE ==========
  const [formData, setFormData] = useState({
    subject: '',
    deadline: null as Date | null,
    email: ''
  })

  const [currentMetric, setCurrentMetric] = useState(0)

  // ========== EFFECTS ==========
  // Auto-flip trust metrics every 5 seconds (increased delay for better readability)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % TRUST_METRICS.length)
    }, 5000) // Increased to 5 seconds for better readability
    return () => clearInterval(interval)
  }, [])

  // ========== HANDLERS ==========
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const submissionData = {
      documentType: formData.subject,
      deadline: formData.deadline ? formData.deadline.toISOString().split('T')[0] : '',
      email: formData.email
    }
    const params = new URLSearchParams(submissionData)
    window.location.href = `https://order.domyhomework.co/?${params.toString()}`
  }

  // ========== RENDER ==========
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* ========== LEFT COLUMN - CONTENT ========== */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Header Content */}
            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-block">
                <span className="px-4 py-1 rounded-full bg-purple-50 border border-purple-500 text-purple-700 text-sm font-medium">
                  🎓 Do My Homework Online – 100% Human-Written
                </span>
              </div>

              {/* Main Headline */}
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
              {/* Avatar Stack */}
              <AvatarStack />

              {/* Rating & Trust Metrics */}
              <div className="flex flex-col justify-center items-center md:items-start">
                <div className="flex items-center text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStarFilled key={i} className="w-5 h-5" />
                  ))}
                </div>
                <FlippingTrustMetrics currentMetric={currentMetric} />
              </div>
            </div>
          </div>

          {/* ========== RIGHT COLUMN - FORM ========== */}
          <div id="order-form" className="scroll-mt-28 bg-white border-[3px] border-[#9333ea] p-6 sm:p-8 shadow-[8px_8px_0px_#9333ea]">
            {/* Form Header */}
            <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-black uppercase tracking-wide mb-2">
              Start Your Homework Request
            </h3>
            <p className="text-gray-700 text-sm font-medium">
              Tell us about your assignment and get started in 15 minutes
            </p>
          </div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Assignment Type & Deadline Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Assignment Type Field */}
                <div>
                  <label className={LABEL_STYLES}>
                    <IconFileText className="w-4 h-4 text-gray-600" />
                    Assignment Type *
                  </label>
                  
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`${INPUT_STYLES} ${formData.subject === '' ? 'text-gray-400' : 'text-black'}`} 
                  >
                    <option value="">Choose one...</option>
                    {DOCUMENT_TYPES.map((group) => (
                      <optgroup key={group.group} label={group.group}>
                        {group.options.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                {/* Deadline Field */}
                <div>
                  <label className={LABEL_STYLES}>
                    <IconCalendarEvent className="w-4 h-4 text-gray-600" />
                    Deadline *
                  </label>
                  <DatePicker
                    selected={formData.deadline}
                    onChange={(date) => setFormData({ ...formData, deadline: date })}
                    minDate={new Date()}
                    placeholderText="Select deadline date"
                    className={INPUT_STYLES}
                    calendarClassName="brutalist-calendar"
                    wrapperClassName="w-full"
                    required
                  />
                </div>
              </div>

              {/* Email & CTA Row */}
              <div className="space-y-2">
                <label className={LABEL_STYLES}>
                  <IconMail className="w-4 h-4 text-gray-600" />
                  Email Address *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Input */}
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className={INPUT_STYLES}
                  />
                  
                  {/* CTA Button */}
                  <button
                    type="submit"
                    className="bg-black text-white border-[3px] border-black py-3 px-6 font-black text-base sm:text-lg uppercase tracking-wider hover:bg-gray-800 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span className="hidden sm:inline">Get Help Now</span>
                    <span className="sm:hidden">Get Help</span>
                    <Image 
                      src="/icons/submit.svg" 
                      alt="→" 
                      width={24} 
                      height={24}
                      className="filter invert"
                      priority
                    />
                  </button>
                </div>
              </div>
            </form>

            {/* Form Footer - Guarantees */}
            <div className="text-center mt-4">
              <p className="text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3">
                <span className="flex items-center gap-1">
                  <span className="text-gray-600">✓</span>
                  Free Quote - No Payment Required
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-gray-600">✓</span>
                  Secure & Confidential
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ========== FEATURE HIGHLIGHTS ========== */}
        <FeatureHighlights />

      </div>
    </section>
  )
}