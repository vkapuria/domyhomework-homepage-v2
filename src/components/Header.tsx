'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            DoMyHomework.co
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
            <Link href="/reviews" className="text-gray-700 hover:text-blue-600">Reviews</Link>
            <Link href="/top-writers" className="text-gray-700 hover:text-blue-600">Writers</Link>
          </nav>

          {/* CTA Button */}
          <Link href="/order" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 hidden md:block">
            Order Now
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-6">
              <span className="block w-full h-0.5 bg-gray-600 mb-1"></span>
              <span className="block w-full h-0.5 bg-gray-600 mb-1"></span>
              <span className="block w-full h-0.5 bg-gray-600"></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/how-it-works" className="text-gray-700">How It Works</Link>
              <Link href="/services" className="text-gray-700">Services</Link>
              <Link href="/pricing" className="text-gray-700">Pricing</Link>
              <Link href="/reviews" className="text-gray-700">Reviews</Link>
              <Link href="/top-writers" className="text-gray-700">Writers</Link>
              <Link href="/order" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center">
                Order Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}