import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      
      {/* Newsletter Section */}
<div className="bg-gray-800 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
      
      {/* Left: Logo */}
      <div className="flex justify-center lg:justify-start">
        <Image 
          src="/icons/DMH-Logo.png"
          alt="DoMyHomework.co"
          width={180}
          height={40}
          className="h-9 w-auto"
        />
      </div>

      {/* Center: Stay Updated Text */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-1">Stay Updated</h3>
        <p className="text-gray-400 text-sm">Get exclusive discounts and academic tips in your inbox</p>
      </div>

      {/* Right: Email Input + Button */}
      <div className="flex gap-2 w-full">
        <input
          type="email"
          placeholder="Your email address"
          className="px-4 py-2.5 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-500 flex-1"
        />
        <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap">
          Subscribe
        </button>
      </div>

    </div>
  </div>
</div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Popular Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Popular Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/essay-writing-service" className="hover:text-purple-400 transition-colors text-sm">
                  Essay Writing Service
                </Link>
              </li>
              <li>
                <Link href="/pay-someone-to-do-my-homework" className="hover:text-purple-400 transition-colors text-sm">
                  Pay Someone to Do Homework
                </Link>
              </li>
              <li>
                <Link href="/do-my-homework-online" className="hover:text-purple-400 transition-colors text-sm">
                  Do My Homework Online
                </Link>
              </li>
              <li>
                <Link href="/write-my-research-paper" className="hover:text-purple-400 transition-colors text-sm">
                  Research Paper Writing
                </Link>
              </li>
              <li>
                <Link href="/assignment-help" className="hover:text-purple-400 transition-colors text-sm">
                  Assignment Help
                </Link>
              </li>
              <li>
                <Link href="/homework-writing-service" className="hover:text-purple-400 transition-colors text-sm">
                  Homework Writing Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/how-it-works" className="hover:text-purple-400 transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-purple-400 transition-colors text-sm">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-purple-400 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/top-writers" className="hover:text-purple-400 transition-colors text-sm">
                  Top Writers
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-purple-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-purple-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="hover:text-purple-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-purple-400 transition-colors text-sm">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/money-back-guarantee" className="hover:text-purple-400 transition-colors text-sm">
                  Money-Back Guarantee
                </Link>
              </li>
            </ul>

            {/* Trust Badges Placeholder */}
            <div className="mt-6 space-y-2">
              <div className="relative">
                <Image 
                  src="/images/money-back.png"
                  alt="100% Money Back Guarantee"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Email us 24/7:</p>
                  <a href="mailto:orders@domyhomework.co" className="text-white hover:text-purple-400 transition-colors">
                    orders@domyhomework.co
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Live Chat:</p>
                  <p className="text-white">Available 24/7</p>
                </div>
              </li>
            </ul>

            {/* Social Media Placeholder */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Follow Us:</p>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Payment Methods */}
<div className="border-t border-gray-800 pt-8 pb-6">
  <p className="text-sm text-gray-400 mb-4 text-center">We Accept:</p>
  <div className="flex flex-wrap justify-center items-center gap-6">
    <div className="relative w-14 h-10 flex items-center justify-center">
      <Image 
        src="/images/visa.svg"
        alt="Visa"
        width={56}
        height={40}
        className="object-contain"
      />
    </div>
    <div className="relative w-14 h-10 flex items-center justify-center">
      <Image 
        src="/images/mastercard.svg"
        alt="Mastercard"
        width={56}
        height={40}
        className="object-contain"
      />
    </div>
    <div className="relative w-14 h-10 flex items-center justify-center">
      <Image 
        src="/images/discover.svg"
        alt="Discover"
        width={56}
        height={40}
        className="object-contain"
      />
    </div>
    <div className="relative w-20 h-10 flex items-center justify-center">
      <Image 
        src="/images/paypal-wordmark.svg"
        alt="PayPal"
        width={80}
        height={40}
        className="object-contain"
      />
    </div>
  </div>
</div>

        {/* Legal Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/terms" className="hover:text-purple-400 transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/fair-use-policy" className="hover:text-purple-400 transition-colors">
                Fair Use Policy
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="/money-back-guarantee" className="hover:text-purple-400 transition-colors">
                Refund Policy
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              © {currentYear} DoMyHomework.co. All rights reserved.
            </p>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 max-w-4xl mx-auto">
              All model papers offered by DoMyHomework.co should be properly referenced. We do not encourage or endorse any activities that violate applicable law or university/college policies.
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}