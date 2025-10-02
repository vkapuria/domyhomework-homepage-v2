'use client'
import { 
  IconBook2, 
  IconFileText, 
  IconPresentation, 
  IconMathFunction, 
  IconCertificate, 
  IconChalkboard 
} from '@tabler/icons-react'

export default function Services() {
  return (
    <section className="py-12 sm:py-16" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">

        {/* Section Chip + Heading */}
        <span className="inline-block text-sm font-medium border border-purple-500 bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
          Our Services
        </span>
        <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Pay Someone to Do My Homework – Services We Offer
          </h2>
          <div className="text-xs text-gray-500 mb-2">
            Updated for {new Date().getFullYear()}-{new Date().getFullYear() + 1} Academic Year
          </div>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          From quick assignments to detailed research papers, DoMyHomework.co covers every subject and format students need to succeed.
        </p>

        {/* Services Grid with Clean Hover Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300 hover:border-2 transition-all duration-300 hover:scale-105 text-center">
            <IconBook2 className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Homework & Assignments
            </h3>
            <p className="text-sm text-gray-600">
              Accurate and well-structured solutions for daily homework and coursework assignments.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300 hover:border-2 transition-all duration-300 hover:scale-105 text-center">
            <IconFileText className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Essays & Reports
            </h3>
            <p className="text-sm text-gray-600">
              Expertly written essays, lab reports, and summaries tailored to your academic needs.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300 hover:border-2 transition-all duration-300 hover:scale-105 text-center">
            <IconPresentation className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Presentations & Projects
            </h3>
            <p className="text-sm text-gray-600">
              Engaging slides, case studies, and collaborative project assistance for students.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300 hover:border-2 transition-all duration-300 hover:scale-105 text-center">
            <IconMathFunction className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Math & Statistics Help
            </h3>
            <p className="text-sm text-gray-600">
              Step-by-step solutions for algebra, calculus, statistics, and advanced math problems.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300 hover:border-2 transition-all duration-300 hover:scale-105 text-center">
            <IconCertificate className="w-10 h-10 text-pink-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Research Papers & Dissertations
            </h3>
            <p className="text-sm text-gray-600">
              In-depth academic research, thesis chapters, and full dissertations by expert writers.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300 hover:border-2 transition-all duration-300 hover:scale-105 text-center">
            <IconChalkboard className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Online Tutoring & Guidance
            </h3>
            <p className="text-sm text-gray-600">
              One-on-one academic guidance and tutoring for homework concepts and exam prep.
            </p>
          </div>
        </div>

        {/* Related Services Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/do-my-homework-online" className="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors">
              Do My Homework Online
            </a>
            <a href="/professional-homework-help" className="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors">
              Professional Homework Help
            </a>
            <a href="/homework-writing-service" className="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors">
              Homework Writing Service
            </a>
            <a href="/pay-someone-to-do-my-homework" className="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors">
              Pay Someone to Do My Homework
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}