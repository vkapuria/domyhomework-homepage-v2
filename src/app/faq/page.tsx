import { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/faq/FAQAccordion'

// FAQ Data Arrays (moved to top so schema can access them)
const generalQuestions = [
  {
    question: "What is DoMyHomework.co?",
    answer: "DoMyHomework.co is a professional academic assistance platform that connects students with qualified experts who can help with homework, essays, research papers, and other assignments. We provide high-quality, original work tailored to your specific requirements."
  },
  {
    question: "Is DoMyHomework.co legit and legal?",
    answer: "Yes, DoMyHomework.co is 100% legitimate and legal. We provide academic assistance services as reference materials and study guides. Our service operates transparently and complies with all applicable laws. Please review our Fair Use Policy for more information on ethical usage."
  },
  {
    question: "What subjects and services do you cover?",
    answer: "We cover 100+ subjects including Math, Science, English, History, Programming, Business, and more. Our services include: Homework help and problem solving, Essay and research paper writing, Editing and proofreading, Math and statistics solutions, Programming assignments, Lab reports and case studies."
  },
  {
    question: "How does DoMyHomework.co work?",
    answer: "Getting help is simple: (1) Fill out our order form with assignment details, (2) Get matched with a qualified expert in your subject, (3) Receive your completed work by the deadline, (4) Request free revisions if needed. Learn more on our How It Works page."
  },
  {
    question: "Can I see samples of your work?",
    answer: "Yes! We believe in transparency. You can view sample assignments and see the quality of our work before placing an order. Contact our support team to request relevant samples in your subject area."
  }
]

const orderingQuestions = [
  {
    question: "How do I place an order?",
    answer: "Placing an order is quick and easy: (1) Visit our homepage and fill out the order form, (2) Provide assignment details, deadline, and any special instructions, (3) Upload relevant files (rubrics, lecture notes, etc.), (4) Review pricing and complete payment, (5) Get matched with an expert and track your order."
  },
  {
    question: "How fast can you complete my homework?",
    answer: "We offer flexible deadlines based on your needs: Express (as fast as 6 hours for urgent assignments), Standard (1-3 days for most homework), Extended (up to 2 weeks for complex projects). Pricing varies based on urgency - longer deadlines are more affordable."
  },
  {
    question: "Can I upload files with my order?",
    answer: "Yes! You can (and should) upload any relevant files including assignment instructions, rubrics, lecture notes, textbook pages, or examples. This helps our experts understand your requirements better and deliver exactly what you need."
  },
  {
    question: "How will I receive my completed work?",
    answer: "You'll receive an email notification when your work is ready. You can then download it from your account dashboard or have it sent directly to your email. All deliveries include the completed assignment in your requested format (Word, PDF, etc.)."
  },
  {
    question: "Can I communicate with my expert?",
    answer: "Absolutely! We encourage direct communication. You can message your assigned expert through our secure messaging system to ask questions, provide additional clarification, or check on progress."
  },
  {
    question: "What if I need changes after delivery?",
    answer: "We offer free unlimited revisions within our revision period: 14 days for orders up to 10 pages, 30 days for orders over 10 pages. Simply request revisions through your account, and we'll make the necessary adjustments."
  }
]

const qualityQuestions = [
  {
    question: "Who will work on my homework?",
    answer: "Your homework will be completed by qualified experts who: Hold advanced degrees (Bachelor's, Master's, or PhD) in relevant fields, Have proven expertise in your specific subject area, Pass rigorous screening and qualification tests, Maintain high customer satisfaction ratings, Are native English speakers with excellent writing skills."
  },
  {
    question: "Is the work 100% original and plagiarism-free?",
    answer: "Yes! Every assignment is written from scratch specifically for you. We guarantee 100% original, plagiarism-free content. All work is scanned through premium plagiarism detection software, and we can provide an originality report upon request."
  },
  {
    question: "Do you use AI to write assignments?",
    answer: "No! All work is written by real human experts. We do not use ChatGPT, AI writing tools, or any automated content generation. Our experts conduct genuine research and craft original responses based on their knowledge and your requirements."
  },
  {
    question: "What quality standards do you maintain?",
    answer: "We ensure top quality through: Expert matching to your specific subject and academic level, Thorough research using credible academic sources, Proper citations and formatting (APA, MLA, Harvard, Chicago, etc.), Grammar and spell-checking by qualified editors, Plagiarism scanning with detailed reports, Quality assurance review before delivery."
  },
  {
    question: "Can you guarantee a specific grade?",
    answer: "While we cannot guarantee specific grades (as grading is subjective), we guarantee that your work will meet high academic standards, follow all instructions, and be of excellent quality. Most of our clients report improved grades after using our service."
  }
]

const pricingQuestions = [
  {
    question: "How much does homework help cost?",
    answer: "Pricing depends on several factors: Academic level (High school to PhD), Deadline (Urgent orders cost more), Complexity (Technical subjects may have higher rates), Length (Number of pages or problems). Use our pricing calculator for an instant quote. Prices typically range from $15-50 per page depending on these factors."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and PayPal. All transactions are processed through secure, encrypted payment gateways."
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes! We use industry-standard security measures: SSL encryption for all transactions, PCI-DSS compliant payment processing, No storage of credit card information on our servers, Secure third-party payment processors. Your financial information is never shared or stored."
  },
  {
    question: "Do you offer discounts?",
    answer: "Yes! We offer discounts for first-time customers, large orders, and returning clients. We also run seasonal promotions. Contact our support team or check our homepage for current discount offers."
  },
  {
    question: "When do I need to pay?",
    answer: "Payment is required upfront before work begins on your assignment. This ensures your expert can start immediately and protects both parties. Your payment is held securely until you approve the final work."
  }
]

const guaranteeQuestions = [
  {
    question: "What is your money-back guarantee?",
    answer: "We offer a comprehensive money-back guarantee. You can request a full or partial refund if: We fail to deliver by the agreed deadline, The work doesn't meet the specified requirements after revisions, There are severe quality issues that can't be resolved, We're unable to complete your order."
  },
  {
    question: "How do I request a refund?",
    answer: "To request a refund: (1) Email orders@domyhomework.co with your order number, (2) Explain the specific issues with your order, (3) Provide supporting evidence (assignment feedback, quality issues, etc.), (4) Our Quality Assurance team will review within 3-5 business days, (5) If approved, refunds are processed within 5-10 business days."
  },
  {
    question: "What if my work is delivered late?",
    answer: "On-time delivery is guaranteed. If we fail to deliver by your deadline through no fault of yours, you're eligible for a full refund. However, delays caused by late payment, unclear instructions, or lack of response to our questions may affect eligibility."
  },
  {
    question: "How many free revisions do I get?",
    answer: "Unlimited free revisions within our revision period (14 days for orders up to 10 pages, 30 days for longer orders). Revisions must stay within the scope of your original instructions. New requirements may require additional payment."
  },
  {
    question: "What if I'm not satisfied with the quality?",
    answer: "First, request free revisions - most issues can be resolved this way. If revisions don't resolve your concerns, contact our support team. We may offer a partial refund or reassign to a different expert, depending on the situation."
  }
]

const securityQuestions = [
  {
    question: "Is my personal information confidential?",
    answer: "Absolutely! We take privacy seriously: Your personal information is never shared with third parties, We don't contact your school or institution, Experts only see the information necessary to complete your order, All data is encrypted and securely stored."
  },
  {
    question: "Will my school find out I used your service?",
    answer: "No. We operate with complete confidentiality. Your school has no way of knowing you used our service. We never contact educational institutions, and all transactions appear as generic charges. Your privacy is our top priority."
  },
  {
    question: "Can my writer see my personal details?",
    answer: "No. Your expert only sees the information necessary to complete your assignment (subject, deadline, instructions). They don't have access to your name, email, school, or any other personal information."
  },
  {
    question: "How do you protect my data?",
    answer: "We use multiple layers of security: SSL/TLS encryption for all data transmission, Secure servers with regular security audits, Restricted access to personal information, Compliance with data protection regulations, Regular security updates and monitoring."
  },
  {
    question: "Can I delete my account and data?",
    answer: "Yes. You can request account deletion at any time by contacting orders@domyhomework.co. We'll permanently delete your personal information from our systems within 30 days, in accordance with our privacy policy and legal requirements."
  },
  {
    question: "Do you sell or resell completed work?",
    answer: "Never! Each assignment is custom-written for you and remains your property. We don't resell, reuse, or share your completed work with anyone. Your work is 100% unique and exclusive to you."
  }
]

// ✅ Generate structured data for FAQ page
function generateFAQStructuredData() {
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
        "name": "FAQ",
        "item": "https://domyhomework.co/faq"
      }
    ]
  }

  // Combine all FAQ questions from arrays
  const allQuestions = [
    ...generalQuestions,
    ...orderingQuestions,
    ...qualityQuestions,
    ...pricingQuestions,
    ...guaranteeQuestions,
    ...securityQuestions
  ].map(q => ({
    "@type": "Question",
    "name": q.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.answer
    }
  }))

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions
  }

  return [breadcrumbSchema, faqSchema]
}

export default function FAQPage() {
  const structuredData = generateFAQStructuredData()

  return (
    <>
      {/* ✅ Add structured data */}
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-purple-50 to-white border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
            {/* Breadcrumbs */}
            <div className="mb-6">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-purple-600 transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">FAQ</span>
              </nav>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Find answers to common questions about our homework help services. 
                Can't find what you're looking for? <Link href="/contact" className="text-purple-600 hover:text-purple-700 underline font-medium">Contact us</Link> anytime.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
          
          {/* Quick Links - Button Style */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Jump to Section:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <a 
                href="#general"
                className="px-6 py-4 bg-white border-2 border-black rounded-lg font-bold text-gray-900 text-center hover:bg-purple-50 hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                📋 General Questions
              </a>

              <a 
                href="#ordering"
                className="px-6 py-4 bg-white border-2 border-black rounded-lg font-bold text-gray-900 text-center hover:bg-purple-50 hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                📦 Ordering & Delivery
              </a>

              <a 
                href="#quality"
                className="px-6 py-4 bg-white border-2 border-black rounded-lg font-bold text-gray-900 text-center hover:bg-purple-50 hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                ⭐ Quality & Writers
              </a>

              <a 
                href="#pricing"
                className="px-6 py-4 bg-white border-2 border-black rounded-lg font-bold text-gray-900 text-center hover:bg-purple-50 hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                💰 Pricing & Payment
              </a>

              <a 
                href="#guarantees"
                className="px-6 py-4 bg-white border-2 border-black rounded-lg font-bold text-gray-900 text-center hover:bg-purple-50 hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                ✅ Guarantees & Refunds
              </a>

              <a 
                href="#security"
                className="px-6 py-4 bg-white border-2 border-black rounded-lg font-bold text-gray-900 text-center hover:bg-purple-50 hover:shadow-[4px_4px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                🔒 Privacy & Security
              </a>

            </div>
          </div>

          {/* General Questions */}
          <section id="general" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">General Questions</h2>
              <p className="text-gray-600">Learn about our service and how we can help with your homework</p>
            </div>
            <FAQAccordion items={generalQuestions} />
          </section>

          {/* Ordering & Delivery */}
          <section id="ordering" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Ordering & Delivery</h2>
              <p className="text-gray-600">Information about placing orders and receiving your work</p>
            </div>
            <FAQAccordion items={orderingQuestions} />
          </section>

          {/* Quality & Writers */}
          <section id="quality" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Quality & Writers</h2>
              <p className="text-gray-600">Meet our experts and learn about our quality standards</p>
            </div>
            <FAQAccordion items={qualityQuestions} />
          </section>

          {/* Pricing & Payment */}
          <section id="pricing" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Pricing & Payment</h2>
              <p className="text-gray-600">Understanding our pricing and payment methods</p>
            </div>
            <FAQAccordion items={pricingQuestions} />
          </section>

          {/* Guarantees & Refunds */}
          <section id="guarantees" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Guarantees & Refunds</h2>
              <p className="text-gray-600">Our commitment to your satisfaction</p>
            </div>
            <FAQAccordion items={guaranteeQuestions} />
          </section>

          {/* Privacy & Security */}
          <section id="security" className="mb-16 scroll-mt-24">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Privacy & Security</h2>
              <p className="text-gray-600">How we protect your information and maintain confidentiality</p>
            </div>
            <FAQAccordion items={securityQuestions} />
          </section>

          {/* Still Have Questions CTA */}
          <div className="mt-16 text-center p-10 bg-purple-50 border-2 border-black rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our support team is available 24/7 to help you with any questions or concerns. 
              We typically respond within minutes.
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-black text-white font-bold border-2 border-black rounded-lg hover:bg-gray-900 transition-colors"
            >
              Contact Support
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}