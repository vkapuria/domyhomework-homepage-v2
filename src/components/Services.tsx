'use client'
import { motion } from 'framer-motion'
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
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">

        {/* Section Chip + Heading */}
        <span className="inline-block text-sm font-medium border border-purple-500 bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
          Our Services
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Pay Someone to Do My Homework – Services We Offer
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          From quick assignments to detailed research papers, DoMyHomework.co covers every subject and format students need to succeed.
        </p>

        {/* Services Grid with Fixed Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ 
            once: true, 
            amount: 0.4,      // ✅ Changed from 0.2 to 0.4 (trigger later)
            margin: "-100px"  // ✅ Added margin to delay trigger
          }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } } // ✅ Faster stagger
          }}
        >
          {/* Service 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 }, // ✅ Reduced from y: 40 to y: 20
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ 
              duration: 0.5,                    // ✅ Shorter duration
              ease: [0.25, 0.46, 0.45, 0.94]  // ✅ Gentler easing curve
            }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300 hover:border-2 transition-all text-center"
          >
            <IconBook2 className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Homework & Assignments
            </h3>
            <p className="text-sm text-gray-600">
              Accurate and well-structured solutions for daily homework and coursework assignments.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300 hover:border-2 transition-all text-center"
          >
            <IconFileText className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Essays & Reports
            </h3>
            <p className="text-sm text-gray-600">
              Expertly written essays, lab reports, and summaries tailored to your academic needs.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300 hover:border-2 transition-all text-center"
          >
            <IconPresentation className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Presentations & Projects
            </h3>
            <p className="text-sm text-gray-600">
              Engaging slides, case studies, and collaborative project assistance for students.
            </p>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300 hover:border-2 transition-all text-center"
          >
            <IconMathFunction className="w-10 h-10 text-purple-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Math & Statistics Help
            </h3>
            <p className="text-sm text-gray-600">
              Step-by-step solutions for algebra, calculus, statistics, and advanced math problems.
            </p>
          </motion.div>

          {/* Service 5 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300 hover:border-2 transition-all text-center"
          >
            <IconCertificate className="w-10 h-10 text-pink-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Research Papers & Dissertations
            </h3>
            <p className="text-sm text-gray-600">
              In-depth academic research, thesis chapters, and full dissertations by expert writers.
            </p>
          </motion.div>

          {/* Service 6 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-200 hover:border-gray-300 hover:border-2 transition-all text-center"
          >
            <IconChalkboard className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Online Tutoring & Guidance
            </h3>
            <p className="text-sm text-gray-600">
              One-on-one academic guidance and tutoring for homework concepts and exam prep.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}