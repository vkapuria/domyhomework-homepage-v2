'use client'
import { useEffect } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { 
  LockIcon, 
  Shield01Icon, 
  CustomerSupportIcon, 
  CheckmarkCircle01Icon 
} from '@hugeicons/core-free-icons'

export default function PayNowPage() {
  // Load the Paperform embed script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://paperform.co/__embed.min.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#F9FAFB] py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Value Prop & Assurances */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wide mb-4">
                <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                Secure Checkout
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                Complete Your Order
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                You are one step away from getting expert academic help. Please fill out the details securely to proceed.
              </p>
            </div>

            {/* Trust Cards */}
            <div className="space-y-4">
              
              {/* Assurance 1 */}
              <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg text-blue-600">
                  <HugeiconsIcon icon={LockIcon} size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Bank-Level Security</h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    All transactions are encrypted with 256-bit SSL security protocols.
                  </p>
                </div>
              </div>

              {/* Assurance 2 */}
              <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-green-50 rounded-lg text-green-600">
                  <HugeiconsIcon icon={Shield01Icon} size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">Money-Back Guarantee</h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    We protect your order with a comprehensive refund policy.
                  </p>
                </div>
              </div>

              {/* Assurance 3 */}
              <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-purple-50 rounded-lg text-purple-600">
                  <HugeiconsIcon icon={CustomerSupportIcon} size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">24/7 Expert Support</h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Our team is ready to help you at any stage of your order.
                  </p>
                </div>
              </div>

            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400 pt-4">
               <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} className="text-green-500" strokeWidth={1.5} />
               <span>Trusted by 14,800+ students worldwide</span>
            </div>
          </div>

          {/* Right Column: Payment Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative">
              
              {/* Decorative top bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600"></div>

              <div className="p-6 sm:p-10">
                {/* Paperform Embed */}
                <div data-paperform-id="bhcln5as"></div>
              </div>
              
            </div>
            
            {/* SSL Seal / Footer */}
            <div className="mt-6 text-center">
              <div className="text-xs text-gray-400 flex items-center justify-center gap-2">
                <HugeiconsIcon icon={LockIcon} size={12} strokeWidth={1.5} />
                <span>Secured by SSL. Your data is safe.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}