'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-2 border-black rounded-lg bg-white overflow-hidden hover:shadow-[4px_4px_0px_#000] transition-all"
        >
          {/* Question Button */}
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-bold text-gray-900 pr-8 text-lg">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <ChevronDownIcon className="w-6 h-6 text-gray-600" />
            </motion.div>
          </button>

          {/* Answer Content */}
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div 
                  className="px-6 py-4 border-t-2 border-black bg-gray-50 text-gray-700 leading-relaxed prose prose-purple max-w-none"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}