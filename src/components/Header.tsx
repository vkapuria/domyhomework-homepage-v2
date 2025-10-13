'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { IconCalculator, IconFlask, IconBriefcase, IconBook } from '@tabler/icons-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setServicesOpen(false)
    setWhoWeAreOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = () => {
      setServicesOpen(false)
      setWhoWeAreOpen(false)
    }
    if (servicesOpen || whoWeAreOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [servicesOpen, whoWeAreOpen])

  const isActive = (path: string) => pathname === path

  return (
    <header 
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`} 
      role="banner"
    >
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-purple-600 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image 
              src="/icons/DMH-Logo.png" 
              alt="DoMyHomework.co - Academic Writing Services" 
              width={180} 
              height={40}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            
            {/* Services Mega Menu */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setServicesOpen(!servicesOpen)
                  setWhoWeAreOpen(false)
                }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-all flex items-center gap-1"
                aria-expanded={servicesOpen}
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              {servicesOpen && (
                <div className="absolute left-0 top-full mt-2 w-[850px] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50">
                  <div className="grid grid-cols-3 gap-6">
                    
                    {/* Column 1: Popular Services */}
                    <div>
                      <h3 className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-2.5">Popular Services</h3>
                      <div className="space-y-0.5">
                        <Link href="/pay-someone-to-do-my-homework" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors">
                          ⭐ Pay Someone to Do My Homework
                        </Link>
                        <Link href="/do-my-homework-online" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors">
                          ⭐ Do My Homework Online
                        </Link>
                        <Link href="/online-homework-help" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors">
                          Online Homework Help
                        </Link>
                        <Link href="/professional-homework-help" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors">
                          Professional Homework Help
                        </Link>
                      </div>
                    </div>

                    {/* Column 2: Writing Services */}
                    <div>
                      <h3 className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-2.5">Writing Services</h3>
                      <div className="space-y-0.5">
                        <Link href="/essay-writing-service" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors">
                          ⭐ Essay Writing Service
                        </Link>
                        <Link href="/buy-essay-online" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors">
                          Buy Essay Online
                        </Link>
                        <Link href="/assignment-help" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors">
                          Assignment Help
                        </Link>
                        <Link href="/homework-writing-service" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors">
                          Homework Writing Service
                        </Link>
                        <div className="border-t border-gray-200 my-1.5"></div>
                        <Link href="/write-my-research-paper" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors">
                          Write My Research Paper
                        </Link>
                        <Link href="/write-my-term-paper" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors">
                          Write My Term Paper
                        </Link>
                        <Link href="/personal-statement-writing-service" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors">
                          Personal Statement Writing
                        </Link>
                        <Link href="/essay-editing-service" className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors">
                          Essay Editing Service
                        </Link>
                      </div>
                    </div>

                    {/* Column 3: Subject Help */}
                    <div>
                      <h3 className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-2.5">Subject Help</h3>
                      <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                        
                        {/* Math & Statistics */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <IconCalculator size={16} className="text-purple-500" stroke={2} />
                            <p className="text-xs font-semibold text-gray-600">Math & Statistics</p>
                          </div>
                          <div className="space-y-0.5 ml-5">
                            <Link href="/do-my-math-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              Math Homework
                            </Link>
                            <Link href="/do-my-algebra-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              Algebra
                            </Link>
                            <Link href="/do-my-statistics-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              Statistics
                            </Link>
                          </div>
                        </div>

                        {/* Sciences */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <IconFlask size={16} className="text-purple-500" stroke={2} />
                            <p className="text-xs font-semibold text-gray-600">Sciences</p>
                          </div>
                          <div className="space-y-0.5 ml-5">
                            <Link href="/do-my-chemistry-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              Chemistry
                            </Link>
                            <Link href="/do-my-physics-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              Physics
                            </Link>
                            <Link href="/do-my-biology-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              Biology
                            </Link>
                          </div>
                        </div>

                        {/* Business & Economics */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <IconBriefcase size={16} className="text-purple-500" stroke={2} />
                            <p className="text-xs font-semibold text-gray-600">Business & Economics</p>
                          </div>
                          <div className="space-y-0.5 ml-5">
                            <Link href="/do-my-finance-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              Finance
                            </Link>
                            <Link href="/do-my-accounting-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              Accounting
                            </Link>
                            <Link href="/do-my-marketing-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              Marketing
                            </Link>
                            <Link href="/do-my-economics-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              Economics
                            </Link>
                          </div>
                        </div>

                        {/* Humanities & Tech */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <IconBook size={16} className="text-purple-500" stroke={2} />
                            <p className="text-xs font-semibold text-gray-600">Humanities & Tech</p>
                          </div>
                          <div className="space-y-0.5 ml-5">
                            <Link href="/do-my-english-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              English
                            </Link>
                            <Link href="/do-my-psychology-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              Psychology
                            </Link>
                            <Link href="/do-my-programming-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              Programming
                            </Link>
                            <Link href="/do-my-computer-science-homework" className="block px-2 py-1 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors">
                              Computer Science
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Regular Links */}
            <Link
              href="/how-it-works"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive('/how-it-works')
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
              }`}
            >
              How It Works
            </Link>

            <Link
              href="/pricing"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive('/pricing')
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/top-writers"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive('/top-writers')
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
              }`}
            >
              Top Writers
            </Link>

            {/* Who We Are Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setWhoWeAreOpen(!whoWeAreOpen)
                  setServicesOpen(false)
                }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-all flex items-center gap-1"
                aria-expanded={whoWeAreOpen}
              >
                Who We Are
                <svg className={`w-4 h-4 transition-transform ${whoWeAreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {whoWeAreOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-1.5 z-50">
                  <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                    About Us
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                    Contact
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                    Blog
                  </Link>
                  <Link href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                    FAQ
                  </Link>
                </div>
              )}
            </div>

          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="https://order.domyhomework.co" 
              className="bg-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-sm hover:shadow-md"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span 
                className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`block w-full h-0.5 bg-gray-700 transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2" aria-label="Mobile navigation">
            <Link href="/how-it-works" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              How It Works
            </Link>
            <Link href="/pricing" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Pricing
            </Link>
            <Link href="/top-writers" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Top Writers
            </Link>
            
            <div className="border-t border-gray-200 my-2"></div>
            
            <Link href="/about" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              About Us
            </Link>
            <Link href="/contact" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Contact
            </Link>
            <Link href="/blog" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Blog
            </Link>
            <Link href="/faq" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              FAQ
            </Link>

            <Link 
              href="https://order.domyhomework.co" 
              className="block mt-4 bg-purple-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center shadow-sm"
            >
              Order Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}