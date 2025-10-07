'use client'
import Image from 'next/image'
import { IconMail, IconClock, IconUser, IconPencil, IconNews } from '@tabler/icons-react'

const contactCards = [
  {
    id: 'students',
    icon: <IconUser className="w-12 h-12" />,
    title: 'For Students',
    description: 'Questions about orders, pricing, or need help with an assignment?',
    email: 'orders@domyhomework.co',
    buttonText: 'Email Us',
    color: 'purple'
  },
  {
    id: 'writers',
    icon: <IconPencil className="w-12 h-12" />,
    title: 'For Writers',
    description: 'Information about opportunities to join our expert writing team.',
    email: 'writers@domyhomework.co',
    buttonText: 'Apply Now',
    color: 'blue'
  },
  {
    id: 'media',
    icon: <IconNews className="w-12 h-12" />,
    title: 'For Media & Partners',
    description: 'Press inquiries, partnerships, and collaboration opportunities.',
    email: 'hello@domyhomework.co',
    buttonText: 'Get in Touch',
    color: 'green'
  }
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            We're Here to Help You Succeed
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            Questions? Need support? Our team responds to all inquiries within 1 hour during business hours.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 text-gray-800" style={{borderRadius: '60px', border: '1px solid #d1f4d5', background: '#f3fcf4', boxShadow: '0px 3px 6px 0px rgba(64, 160, 83, 0.15)'}}>
              <Image src="/icons/checked.svg" alt="" width={12} height={12} />
              24/7 Available
            </span>
            <span className="px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 text-gray-800" style={{borderRadius: '60px', border: '1px solid #d1f4d5', background: '#f3fcf4', boxShadow: '0px 3px 6px 0px rgba(64, 160, 83, 0.15)'}}>
              <Image src="/icons/checked.svg" alt="" width={12} height={12} />
              1 Hour Response Time
            </span>
            <span className="px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 text-gray-800" style={{borderRadius: '60px', border: '1px solid #d1f4d5', background: '#f3fcf4', boxShadow: '0px 3px 6px 0px rgba(64, 160, 83, 0.15)'}}>
              <Image src="/icons/checked.svg" alt="" width={12} height={12} />
              Expert Support Team
            </span>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose How to Reach Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the department that best matches your inquiry for faster assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactCards.map((card) => (
              <div 
                key={card.id}
                className="bg-white border-2 border-black rounded-lg p-8 text-center hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                <div className="flex justify-center mb-4 text-purple-600">
                  {card.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 min-h-[48px]">
                  {card.description}
                </p>
                
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900">{card.email}</p>
                </div>
                
                <a 
                  href={`mailto:${card.email}`}
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 border-2 border-black font-semibold hover:bg-purple-700 transition-all shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] rounded"
                >
                  <IconMail className="w-4 h-4" />
                  {card.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="bg-purple-600 border-2 border-black rounded-lg p-8 text-center shadow-[8px_8px_0px_#000]">
            <IconClock className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Need Immediate Help?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              For urgent inquiries about existing orders, email us directly at orders@domyhomework.co and we'll respond within 1 hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:orders@domyhomework.co"
                className="inline-block bg-white text-purple-600 px-6 py-3 border-2 border-black font-bold hover:bg-gray-100 transition-all shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] rounded"
              >
                Email Support
              </a>
              <a 
                href="/how-it-works#faq"
                className="inline-block bg-purple-700 text-white px-6 py-3 border-2 border-black font-bold hover:bg-purple-800 transition-all shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] rounded"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}