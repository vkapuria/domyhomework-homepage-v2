'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  AcademicCapIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon,
  CheckBadgeIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

export default function AboutPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const stats = [
    { value: "500+", label: "Verified Experts", icon: CheckBadgeIcon },
    { value: "50,000+", label: "Assignments Completed", icon: DocumentCheckIcon },
    { value: "98.5%", label: "Customer Satisfaction", icon: ChartBarIcon },
    { value: "120+", label: "Countries Served", icon: GlobeAltIcon },
    { value: "< 1 Hr", label: "Avg Response Time", icon: ClockIcon },
    { value: "100+", label: "Subjects Covered", icon: AcademicCapIcon },
  ]
  
  const faqs = [
    {
      question: "How long has DoMyHomework.co been in business?",
      answer: (
        <>
          We've been helping students since 2017, growing from a small team to over 500 verified experts serving students in 120+ countries.
        </>
      )
    },
    {
      question: "What makes your expert selection process unique?",
      answer: (
        <>
          We accept only the top 2% of applicants through a rigorous 4-stage vetting process including background checks, subject expertise tests, writing assessments, and quality control reviews.
        </>
      )
    },
    {
      question: "How do you ensure quality control?",
      answer: (
        <>
          Every expert goes through continuous performance monitoring, plagiarism checks on all work, customer feedback reviews, and regular quality assurance audits by our QA team. Read more about our{' '}
          <Link href="/money-back-guarantee" className="text-purple-600 hover:underline font-medium">
            Money Back Guarantee
          </Link>.
        </>
      )
    },
    {
      question: "What subjects and academic levels do you cover?",
      answer: (
        <>
          We cover 100+ subjects across all academic levels from high school to PhD, including STEM, humanities, business, law, nursing, and technical fields.
        </>
      )
    },
    {
      question: "Is my personal information kept confidential?",
      answer: (
        <>
          Absolutely. We never share your information with third parties or your educational institution. All data is encrypted and stored securely with strict privacy protocols. See our{' '}
          <Link href="/privacy" className="text-purple-600 hover:underline font-medium">
            Privacy Policy
          </Link>{' '}
          for complete details.
        </>
      )
    },
    {
      question: "How quickly can I get help?",
      answer: (
        <>
          We offer 24/7 support with an average response time of under 1 hour. For urgent assignments, we can deliver quality work in as little as 6 hours depending on complexity.
        </>
      )
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Trusted Homework Help Since 2017
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Serving 50,000+ students in 120+ countries with 500+ verified experts.
            </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We're a team of dedicated educators and academic experts committed to making homework less stressful and more successful for students worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/how-it-works"
                  className="px-8 py-4 bg-black text-white font-bold border-2 border-black rounded-lg hover:bg-gray-900 transition-colors"
                >
                  How It Works
                </Link>
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white text-black font-bold border-2 border-black rounded-lg hover:bg-purple-50 hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative">
                <div className="bg-purple-100 border-4 border-black rounded-lg shadow-[8px_8px_0px_#000]">
                    <Image
                    src="/images/graduation.jpg"
                    alt="Happy student celebrating graduation"
                    width={500}
                    height={500}
                    className="rounded-lg w-full h-auto"
                    priority
                    />
                </div>
                </div>
          </div>
        </div>
      </div>

      {/* Our Mission - 2 Column Layout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
            <Image
                src="/images/young-students-university.jpg"
                alt="Students collaborating at university"
                width={600}
                height={600}
                className="rounded-lg w-full h-auto"
            />
            </div>          
          
          {/* Right - Content */}
          <div className="order-1 lg:order-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We started in 2017 with a simple idea: make homework less stressful and more successful for students. 
            Today, we’ve helped over 50,000 students worldwide achieve their goals without compromising on quality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            Every student deserves expert guidance, personalized support, and academic confidence. 
            That’s why we’re committed to delivering exceptional service and genuine care in every assignment.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
        <div className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Value 1 */}
            <div className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="mb-4">
                <AcademicCapIcon className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Students First</h3>
                <p className="text-gray-700">
                Your success drives everything we do.
                </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
            <div className="mb-4">
                <ShieldCheckIcon className="w-12 h-12 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Guaranteed</h3>
            <p className="text-gray-700">
                Every paper checked, reviewed, and verified.{' '}
                <Link href="/money-back-guarantee" className="text-purple-600 hover:underline font-medium">
                See our guarantee
                </Link>
            </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="mb-4">
                <ClockIcon className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Always Available</h3>
                <p className="text-gray-700">
                24/7 support because deadlines never sleep.
                </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="mb-4">
                <UserGroupIcon className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-700">
                500+ vetted experts with advanced degrees.
                </p>
            </div>

            {/* Value 5 */}
            <div className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="mb-4">
                <ShieldCheckIcon className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Confidential & Secure</h3>
                <p className="text-gray-700">
                Your privacy is our top priority—always protected.
                </p>
            </div>
            </div>
        </div>
        </div>


      {/* By The Numbers - Open Box Style (EduBirdie) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-gray-200">
        {stats.map((stat, index) => (
            <div 
            key={index} 
            className="flex flex-col items-center justify-center text-center p-8 border-b border-r border-gray-200"
            >
            <stat.icon className="w-10 h-10 text-purple-600 mb-3" />
            <div className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-1">
                {stat.value}
            </div>
            <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
        ))}
        </div>

      {/* Expert Selection Process */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 py-16 sm:py-20">
  <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Our Rigorous Expert Selection
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        We handpick only the top 2% of applicants to ensure you get the best academic support possible.
      </p>
    </div>

    {/* Horizontal Stepper */}
    <div className="relative">
      {/* Connecting line (desktop only) */}
      <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center bg-white border-2 border-black rounded-lg p-6">
          <Image src="/images/1.png" alt="Step 1" width={60} height={60} className="mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Background Check</h3>
          <span className="px-3 py-1 bg-purple-600 text-white text-sm font-bold rounded mb-3">Only 20% Pass</span>
          <p className="text-gray-700 text-sm">
            We thoroughly examine applicant credentials, verify degrees, and review academic backgrounds to ensure legitimacy and expertise.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center bg-white border-2 border-black rounded-lg p-6">
          <Image src="/images/2.png" alt="Step 2" width={60} height={60} className="mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Subject Expertise Test</h3>
          <p className="text-gray-700 text-sm">
            Candidates complete comprehensive tests in their subject areas to prove deep understanding and problem-solving abilities.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center bg-white border-2 border-black rounded-lg p-6">
          <Image src="/images/3.png" alt="Step 3" width={60} height={60} className="mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Writing Assessment</h3>
          <p className="text-gray-700 text-sm">
            Applicants complete sample assignments under deadline pressure to demonstrate writing quality, research skills, and time management.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center bg-purple-600 border-2 border-black rounded-lg p-6 text-white">
          <Image src="/images/4.png" alt="Step 4" width={60} height={60} className="mb-4" />
          <h3 className="text-xl font-bold mb-2">Quality Control Review</h3>
          <span className="px-3 py-1 bg-white text-purple-600 text-sm font-bold rounded mb-3">Only 2% Pass</span>
          <p className="text-sm">
            Our quality assurance team evaluates work samples for originality, accuracy, formatting, and adherence to academic standards. Only the best make it through.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom graphic */}
    <div className="mt-12 text-center">
    <div className="inline-flex items-center gap-4 bg-white border-2 border-black rounded-lg px-8 py-4">
        <UserGroupIcon className="w-8 h-8 text-purple-600" />
        <p className="text-lg font-bold text-gray-900">
        Top 2% Academic Talent = Guaranteed Excellence
        </p>
    </div>
    <p className="text-gray-700 mt-6">
        Learn more about our commitment to academic integrity in our{' '}
        <Link href="/fair-use-policy" className="text-purple-600 hover:underline font-medium">
        Fair Use Policy
        </Link>
    </p>
    </div>
  </div>
</div>


      {/* Our Journey Timeline */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From humble beginnings to helping thousands of students succeed
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black hidden lg:block"></div>

            <div className="space-y-12">
              {/* 2017 */}
              <div className="relative flex items-center justify-between lg:justify-start">
                <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                  <div className="bg-white border-2 border-black rounded-lg p-6 inline-block shadow-[4px_4px_0px_#000]">
                    <div className="text-2xl font-bold text-purple-600 mb-2">2017</div>
                    <p className="text-gray-700 font-medium">DoMyHomework.co was founded with a mission to help students succeed</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 border-4 border-black rounded-full hidden lg:block"></div>
              </div>

              {/* 2019 */}
              <div className="relative flex items-center justify-between lg:justify-end">
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="bg-white border-2 border-black rounded-lg p-6 inline-block shadow-[4px_4px_0px_#000]">
                    <div className="text-2xl font-bold text-purple-600 mb-2">2019</div>
                    <p className="text-gray-700 font-medium">Reached 100+ expert writers across 50+ subjects</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 border-4 border-black rounded-full hidden lg:block"></div>
              </div>

              {/* 2021 */}
              <div className="relative flex items-center justify-between lg:justify-start">
                <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                  <div className="bg-white border-2 border-black rounded-lg p-6 inline-block shadow-[4px_4px_0px_#000]">
                    <div className="text-2xl font-bold text-purple-600 mb-2">2021</div>
                    <p className="text-gray-700 font-medium">Launched 24/7 support and expanded to 100+ countries worldwide</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 border-4 border-black rounded-full hidden lg:block"></div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-center justify-between lg:justify-end">
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="bg-white border-2 border-black rounded-lg p-6 inline-block shadow-[4px_4px_0px_#000]">
                    <div className="text-2xl font-bold text-purple-600 mb-2">2023</div>
                    <p className="text-gray-700 font-medium">Completed 25,000+ assignments with 98%+ satisfaction rate</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 border-4 border-black rounded-full hidden lg:block"></div>
              </div>

              {/* 2024 */}
              <div className="relative flex items-center justify-between lg:justify-start">
                <div className="lg:w-1/2 lg:pr-12 lg:text-right">
                  <div className="bg-white border-2 border-black rounded-lg p-6 inline-block shadow-[4px_4px_0px_#000]">
                    <div className="text-2xl font-bold text-purple-600 mb-2">2024</div>
                    <p className="text-gray-700 font-medium">500+ verified experts, 50,000+ happy students, and growing strong</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 border-4 border-black rounded-full hidden lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Questions, Answered
            </h2>
            <p className="text-lg text-gray-700">
            Students ask, we answer—clear, honest, and upfront. 
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-black rounded-lg bg-white overflow-hidden hover:shadow-[4px_4px_0px_#000] transition-all"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={openFAQ === index}
                >
                  <span className="font-bold text-gray-900 pr-8 text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDownIcon className="w-6 h-6 text-gray-600" />
                  </motion.div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 py-4 border-t-2 border-black bg-gray-50 text-gray-700 leading-relaxed">
                        {faq.answer}
                        </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">Still have questions?</p>
            <Link 
              href="/faq"
              className="inline-block px-6 py-3 bg-white text-black font-bold border-2 border-black rounded-lg hover:bg-purple-50 hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Experience the DoMyHomework.co Difference?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Join thousands of students who trust us with their academic success. Get expert help today.
          </p>
          <a 
            href="https://order.domyhomework.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-purple-600 font-bold border-4 border-white rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  )
}