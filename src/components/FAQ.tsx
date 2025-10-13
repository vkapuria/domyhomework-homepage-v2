"use client";

import { useState } from "react";
import SEOContent from './SEOContent';
import { IconPlus, IconMinus } from '@tabler/icons-react'

const faqs = [
  {
    question: "Can you do my homework online?",
    answer: (
      <>
        <p>
          <strong>Yes –</strong> we complete homework fully online for you.
        </p>
        <p>
          Our platform matches your task with a subject expert, who delivers
          accurate solutions directly through our system.
        </p>
      </>
    ),
  },
  {
    question: "Is the homework help 100% human-written?",
    answer: (
      <>
        <p>
          <strong>Absolutely –</strong> every solution is written by a real
          expert.
        </p>
        <p>
          We do not use AI generators; all work is custom, plagiarism-free, and
          checked for academic integrity.
        </p>
      </>
    ),
  },
  {
    question: "What subjects do you cover?",
    answer: (
      <>
        <p>
          <strong>We cover 100+ subjects –</strong> from Math and Science to
          Nursing and Programming.
        </p>
        <p>
          Assignments range from essays and reports to coding projects, lab
          work, and case studies. <a href="/services" className="text-blue-600 hover:text-blue-800 underline">View all services</a>.
        </p>
      </>
    ),
  },
  {
    question: "How fast can you deliver my homework?",
    answer: (
      <>
        <p>
          <strong>As fast as a few hours –</strong> for urgent homework.
        </p>
        <p>
          We also handle regular deadlines with planned scheduling to guarantee
          on-time delivery.
        </p>
      </>
    ),
  },
  {
    question: "Do you offer revisions?",
    answer: (
      <>
        <p>
          <strong>Yes –</strong> free revisions are included until you're
          satisfied.
        </p>
        <p>
          We refine the solution at no extra cost based on your feedback, as
          part of our policy.
        </p>
      </>
    ),
  },
  {
    question: "Is my information kept private?",
    answer: (
      <>
        <p>
          <strong>Yes –</strong> your information is fully confidential.
        </p>
        <p>
          We never share personal or academic details with third parties,
          ensuring complete privacy.
        </p>
      </>
    ),
  },
  {
    question: "What guarantees do you provide?",
    answer: (
      <>
        <p>
          <strong>We guarantee quality –</strong> through Money-Back and Free
          Revision policies.
        </p>
        <p>
          If you're not satisfied, we'll revise or refund, ensuring your trust
          and peace of mind.
        </p>
      </>
    ),
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [showSEOContent, setShowSEOContent] = useState(false);

  return (
    <section className="py-12 sm:py-16" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Chip + Heading */}
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium border border-purple-500 bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
            FAQ
          </span>
          <div className="text-xs text-gray-500 mb-2">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight border-y-4 border-black inline-block px-6 py-2">
            FAQ – Do My Homework Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Answers to the most common questions students ask before ordering homework help online.
          </p>
          
          {/* Show More Button */}
          <div className="mt-8">
            <button
              onClick={() => setShowSEOContent(!showSEOContent)}
              className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors"
            >
              {showSEOContent ? 'Show Less ↑' : 'Read More About Our Services ↓'}
            </button>
          </div>
        </div>

        {/* Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border-2 border-black rounded-md drop-shadow-[7px_7px_0_#000] transition-transform duration-200 ease-in-out hover:-translate-y-1"
            >
              {/* Header */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 font-semibold text-gray-900 bg-white"
              >
                {faq.question}
                <IconPlus
                className={`w-5 h-5 text-gray-800 transform transition-transform duration-300 ${
                  open === i ? "rotate-45" : "rotate-0"
                }`}
              />

              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  open === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden bg-white">
                  <div className="px-6 py-4 text-sm text-gray-700 leading-5 space-y-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Conditionally render SEO Content */}
        {showSEOContent && <SEOContent />}
        
      </div>
    </section>
  );
}