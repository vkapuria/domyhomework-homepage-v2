'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/icons/DMH-Logo.png" 
              alt="DoMyHomework.co" 
              width={180} 
              height={40}
              priority
              className="h-8 w-auto"
            />
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
          <Link href="/order" className="bg-black text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors hidden md:block">
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
              <Link href="/order" className="bg-black text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-center">
  Order Now
</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}