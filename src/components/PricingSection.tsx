'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'


// Constants from WordPress version
const WORDS_PER_PAGE = 300
const specialPricingRules = { smallOrder: 3, mediumOrder: 8 }

// Document types mapping
const ALL_DOCUMENTS = {
  // Popular choices
  article_review: 'Article Review',
  capstone_project: 'Capstone Project',
  coursework: 'Coursework',
  essay: 'Essay',
  homework: 'Homework',
  other: 'Other',
  powerpoint: 'Presentation',
  research_paper: 'Research Paper',
  // All other types
  admission_essay: 'Application Essay',
  annotated_bibliography: 'Annotated Bibliography',
  business_plan: 'Business Plan',
  case_study: 'Case Study',
  programming_task: 'Code',
  content_writing: 'Content Writing',
  creative_writing: 'Creative Writing',
  dissertation: 'Dissertation',
  editing: 'Editing',
  excel_assignment: 'Excel Assignment',
  math_problems: 'Math Solving',
  outline: 'Outline',
  personal_statement: 'Personal Statement',
  proposal: 'Proposal',
  qa: 'Q&A',
  reflective_writing: 'Reflective Writing',
  report: 'Report',
  review: 'Review',
  speech: 'Speech',
  term_paper: 'Term Paper',
  test: 'Test',
  thesis: 'Thesis'
} as const

type DocumentType = keyof typeof ALL_DOCUMENTS
type EducationLevel = 'high_school' | 'bachelor' | 'master' | 'phd'

interface CalculatorState {
  educationLevel: EducationLevel
  documentType: DocumentType
  deadline: string
  quantity: number
}

export default function PricingSection() {
  const [state, setState] = useState<CalculatorState>({
    educationLevel: 'bachelor',
    documentType: 'essay',
    deadline: '7',
    quantity: 1
  })

  // Pricing calculation functions (exact from WordPress)
  const calculateBasePricePerPage = useCallback((): number => {
    let basePricePerPage: number

    switch (state.educationLevel) {
      case 'high_school': basePricePerPage = 12; break
      case 'bachelor': basePricePerPage = 14; break
      case 'master': basePricePerPage = 19; break
      case 'phd': basePricePerPage = 24; break
      default: basePricePerPage = 14
    }

    // Document type specific pricing
    if (state.documentType === 'powerpoint') {
      switch (state.educationLevel) {
        case 'high_school': basePricePerPage = 10; break
        case 'bachelor': basePricePerPage = 12; break
        case 'master': basePricePerPage = 17; break
        case 'phd': basePricePerPage = 21; break
      }
    } else if (['research_paper', 'thesis', 'dissertation', 'term_paper'].includes(state.documentType)) {
      switch (state.educationLevel) {
        case 'high_school': basePricePerPage = Math.round(basePricePerPage * 1.4); break
        case 'bachelor': basePricePerPage = 19; break
        case 'master': basePricePerPage = 21; break
        case 'phd': basePricePerPage = Math.round(basePricePerPage * 1.4); break
      }
    } else if (['programming_task', 'math_problems', 'excel_assignment', 'homework'].includes(state.documentType)) {
      basePricePerPage = Math.round(basePricePerPage * 1.6)
    } else if (state.documentType === 'editing') {
      switch (state.educationLevel) {
        case 'high_school': basePricePerPage = 10; break
        case 'bachelor': basePricePerPage = 12; break
        case 'master': basePricePerPage = Math.round(basePricePerPage * 0.5); break
        case 'phd': basePricePerPage = Math.round(basePricePerPage * 0.5); break
      }
    }

    return basePricePerPage
  }, [state.educationLevel, state.documentType])

  const calculatePricePerPage = useCallback((): number => {
    const basePricePerPage = calculateBasePricePerPage()
    const deadline = Number(state.deadline)
    const pages = state.quantity
    let deadlineMultiplier = 1.0

    if (pages <= specialPricingRules.smallOrder) {
      deadlineMultiplier = 1.0
    } else if (pages <= specialPricingRules.mediumOrder && deadline >= 2) {
      deadlineMultiplier = 1.0
    } else {
      switch (deadline) {
        case 14: deadlineMultiplier = 0.85; break
        case 10: deadlineMultiplier = 0.9; break
        case 7: deadlineMultiplier = 1.0; break
        case 5: deadlineMultiplier = 1.05; break
        case 3: deadlineMultiplier = 1.1; break
        case 2: deadlineMultiplier = 1.2; break
        case 1: deadlineMultiplier = 1.3; break
        case 0.5: deadlineMultiplier = 1.6; break
        case 0.25: deadlineMultiplier = 2.0; break
      }
    }

    return Math.round(basePricePerPage * deadlineMultiplier)
  }, [calculateBasePricePerPage, state.deadline, state.quantity])

  const calculateTotalPrice = useCallback((): number => {
    const pricePerPage = calculatePricePerPage()
    return pricePerPage * state.quantity
  }, [calculatePricePerPage, state.quantity])

  const calculateDiscountedPrice = useCallback((originalPrice: number) => {
    let discountPercentage = 15

    if (state.educationLevel === 'high_school') {
      discountPercentage = 20
    } else if (state.educationLevel === 'phd') {
      discountPercentage = 10
    }

    if (state.quantity >= 10) {
      discountPercentage += 5
    } else if (state.quantity >= 5) {
      discountPercentage += 3
    }

    const discountedPrice = Math.round(originalPrice * (1 - discountPercentage / 100))
    return { discountedPrice, discountPercentage }
  }, [state.educationLevel, state.quantity])

  const calculateDeadlineDate = useCallback((days: string): string => {
    const date = new Date()
    const numDays = Number(days)
    date.setDate(date.getDate() + Math.floor(numDays))
    const hours = (numDays - Math.floor(numDays)) * 24
    date.setHours(date.getHours() + hours)

    const minutes = date.getMinutes()
    if (minutes >= 30) {
      date.setHours(date.getHours() + 1)
    }
    date.setMinutes(0, 0, 0)

    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      hour12: true,
      month: 'long',
      day: 'numeric'
    }
    return date.toLocaleString('en-US', options)
  }, [])

  const getQuantityLabel = useCallback((): string => {
    const pages = state.quantity

    if (state.documentType === 'powerpoint') {
      return `${pages} slide${pages !== 1 ? 's' : ''}`
    } else if (state.documentType === 'math_problems') {
      return `${pages} problem${pages !== 1 ? 's' : ''}`
    } else if (['qa', 'test'].includes(state.documentType)) {
      return `${pages} question${pages !== 1 ? 's' : ''}`
    } else {
      const words = pages * WORDS_PER_PAGE
      return `${pages} page${pages !== 1 ? 's' : ''}/${words} words`
    }
  }, [state.quantity, state.documentType])

  // Calculate current pricing
  const originalPrice = calculateTotalPrice()
  const { discountedPrice, discountPercentage } = calculateDiscountedPrice(originalPrice)
  const deliveryDate = calculateDeadlineDate(state.deadline)
  const quantityLabel = getQuantityLabel()

  const updateQuantity = (newQuantity: number) => {
    const numValue = Math.max(1, Math.min(363, newQuantity))
    setState(prev => ({ ...prev, quantity: numValue }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const orderData = {
      educationLevel: state.educationLevel,
      documentType: state.documentType,
      deadline: state.deadline,
      quantity: state.quantity,
      price: discountedPrice
    }

    // Store in session storage
    sessionStorage.setItem('calculatorData', JSON.stringify({
      ...orderData,
      timestamp: Date.now()
    }))

    // Redirect to order page
    const params = new URLSearchParams({
      education_level: state.educationLevel,
      document_type: state.documentType,
      deadline: state.deadline,
      quantity: state.quantity.toString(),
      prefilled: 'true',
      source: 'calculator'
    })

    window.open(`https://order.domyhomework.co/?${params.toString()}`, '_blank')
  }

  return (
    <section className="relative py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Chip + Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium border border-purple-500 bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
            Pricing & Rates
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Affordable Homework Writing Service Pricing
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Get expert homework help at transparent & student-friendly rates. No hidden fees, no surprises—just quality academic assistance within your budget.
          </p>
        </div>

        {/* Calculator + Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* ===== Left Column: Calculator Form ===== */}
        <div className="calculator-wrapper relative">
        <div className="calculator bg-gray-100 border-[3px] border-black p-6 w-full shadow-[8px_8px_0px_#000000] relative">
              <form onSubmit={handleSubmit} className="calculator__form">
                <div className="calculator__fields mb-6">
                  
                  {/* Document Type */}
                  <label className="calculator__group flex flex-col mb-4">
                    <span className="calculator__label text-sm font-bold text-black uppercase tracking-wide mb-2">
                      Choose type of work
                    </span>
                    <select 
                      value={state.documentType}
                      onChange={(e) => setState(prev => ({ ...prev, documentType: e.target.value as DocumentType }))}
                      className="calculator__field w-full p-4 border-2 border-black text-sm font-medium bg-white transition-all hover:scale-[1.01] hover:shadow-[2px_2px_0px_#000000] focus:border-purple-600 focus:shadow-[0_0_0_2px_#8300e9] focus:scale-[1.02] appearance-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2716%27%20height%3D%2710%27%20viewBox%3D%270%200%2016%2010%27%20fill%3D%27none%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cpath%20d%3D%27M1%201L8%208L15%201%27%20stroke%3D%27black%27%20stroke-width%3D%273%27%20stroke-linecap%3D%27square%27/%3E%3C/svg%3E')] bg-no-repeat bg-[calc(100%-20px)_center] pr-14"
                    >
                      <optgroup label="Popular Choices" className="font-bold">
                        <option value="article_review">Article Review</option>
                        <option value="capstone_project">Capstone Project</option>
                        <option value="coursework">Coursework</option>
                        <option value="essay">Essay</option>
                        <option value="homework">Homework</option>
                        <option value="other">Other</option>
                        <option value="powerpoint">Presentation</option>
                        <option value="research_paper">Research Paper</option>
                      </optgroup>
                      <optgroup label="All Types" className="font-bold">
                        <option value="admission_essay">Application Essay</option>
                        <option value="annotated_bibliography">Annotated Bibliography</option>
                        <option value="business_plan">Business Plan</option>
                        <option value="case_study">Case Study</option>
                        <option value="programming_task">Code</option>
                        <option value="content_writing">Content Writing</option>
                        <option value="creative_writing">Creative Writing</option>
                        <option value="dissertation">Dissertation</option>
                        <option value="editing">Editing</option>
                        <option value="excel_assignment">Excel Assignment</option>
                        <option value="math_problems">Math Solving</option>
                        <option value="outline">Outline</option>
                        <option value="personal_statement">Personal Statement</option>
                        <option value="proposal">Proposal</option>
                        <option value="qa">Q&A</option>
                        <option value="reflective_writing">Reflective Writing</option>
                        <option value="report">Report</option>
                        <option value="review">Review</option>
                        <option value="speech">Speech</option>
                        <option value="term_paper">Term Paper</option>
                        <option value="test">Test</option>
                        <option value="thesis">Thesis</option>
                      </optgroup>
                    </select>
                  </label>

                  {/* Education Level & Deadline Row */}
                  <div className="calculator__row flex flex-wrap -mx-2">
                    <label className="calculator__group flex flex-col flex-1 mx-2 mb-4 min-w-[150px]">
                      <span className="calculator__label text-sm font-bold text-black uppercase tracking-wide mb-2">
                        Education level
                      </span>
                      <select 
                        value={state.educationLevel}
                        onChange={(e) => setState(prev => ({ ...prev, educationLevel: e.target.value as EducationLevel }))}
                        className="calculator__field w-full p-4 border-2 border-black text-sm font-medium bg-white transition-all hover:scale-[1.01] hover:shadow-[2px_2px_0px_#000000] focus:border-purple-600 focus:shadow-[0_0_0_2px_#8300e9] focus:scale-[1.02] appearance-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2716%27%20height%3D%2710%27%20viewBox%3D%270%200%2016%2010%27%20fill%3D%27none%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cpath%20d%3D%27M1%201L8%208L15%201%27%20stroke%3D%27black%27%20stroke-width%3D%273%27%20stroke-linecap%3D%27square%27/%3E%3C/svg%3E')] bg-no-repeat bg-[calc(100%-20px)_center] pr-14"
                      >
                        <option value="high_school">High school</option>
                        <option value="bachelor">Bachelor</option>
                        <option value="master">Master</option>
                        <option value="phd">Ph.D.</option>
                      </select>
                    </label>

                    <label className="calculator__group flex flex-col flex-1 mx-2 mb-4 min-w-[150px]">
                      <span className="calculator__label text-sm font-bold text-black uppercase tracking-wide mb-2">
                        Deadline
                      </span>
                      <select 
                        value={state.deadline}
                        onChange={(e) => setState(prev => ({ ...prev, deadline: e.target.value }))}
                        className="calculator__field w-full p-4 border-2 border-black text-sm font-medium bg-white transition-all hover:scale-[1.01] hover:shadow-[2px_2px_0px_#000000] focus:border-purple-600 focus:shadow-[0_0_0_2px_#8300e9] focus:scale-[1.02] appearance-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2716%27%20height%3D%2710%27%20viewBox%3D%270%200%2016%2010%27%20fill%3D%27none%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cpath%20d%3D%27M1%201L8%208L15%201%27%20stroke%3D%27black%27%20stroke-width%3D%273%27%20stroke-linecap%3D%27square%27/%3E%3C/svg%3E')] bg-no-repeat bg-[calc(100%-20px)_center] pr-14"
                      >
                        <option value="0.25">6 hours</option>
                        <option value="0.5">12 hours</option>
                        <option value="1">1 day</option>
                        <option value="2">2 days</option>
                        <option value="3">3 days</option>
                        <option value="5">5 days</option>
                        <option value="7">7 days</option>
                        <option value="10">10 days</option>
                        <option value="14">2 weeks</option>
                      </select>
                    </label>
                  </div>

                  {/* Quantity Control */}
                  <div className="calculator__group flex flex-col mb-4">
                    <label className="calculator__label text-sm font-bold text-black uppercase tracking-wide mb-2">
                      Quantity
                    </label>
                    <div className="calculator__quantity flex items-center bg-white border-2 border-black min-h-[56px] px-4 transition-all hover:scale-[1.01] hover:shadow-[2px_2px_0px_#000000] focus-within:border-purple-600 focus-within:shadow-[0_0_0_2px_#8300e9] focus-within:scale-[1.02]">
                      
                      <button
                        type="button"
                        onClick={() => updateQuantity(state.quantity - 1)}
                        disabled={state.quantity <= 1}
                        className="calculator__ghost w-10 h-10 bg-white border-2 border-black cursor-pointer transition-all flex-shrink-0 shadow-[2px_2px_0px_#000000] hover:bg-purple-600 hover:text-white hover:scale-105 hover:shadow-none active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative before:content-['−'] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:text-xl before:font-extrabold"
                      />
                      
                      <div className="quantity relative flex-1 h-10 flex items-center mx-4">
                        <input
                          type="number"
                          min="1"
                          max="363"
                          value={state.quantity}
                          onChange={(e) => updateQuantity(parseInt(e.target.value) || 1)}
                          className="calculator__field--quantity absolute inset-0 opacity-0 text-center font-bold bg-transparent border-none w-full h-full"
                        />
                        <div className="quantity__mask absolute inset-0 flex justify-center items-center px-5 font-bold text-base text-black whitespace-nowrap overflow-hidden text-ellipsis pointer-events-none">
                          {quantityLabel}
                        </div>
                      </div>
                      
                      <button
                        type="button"
                        onClick={() => updateQuantity(state.quantity + 1)}
                        disabled={state.quantity >= 363}
                        className="calculator__ghost w-10 h-10 bg-white border-2 border-black cursor-pointer transition-all flex-shrink-0 shadow-[2px_2px_0px_#000000] hover:bg-purple-600 hover:text-white hover:scale-105 hover:shadow-none active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative before:content-['+'] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:text-xl before:font-extrabold"
                      />
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <div className="calculator__result flex flex-wrap justify-between items-center py-5 mb-1 font-bold">
                  <div className="calculator__result-label mr-5 flex items-center text-lg font-extrabold text-black uppercase tracking-wide">
                    <span>Approx. price:</span>
                  </div>
                  <div className="calculator__total flex items-baseline gap-4 m-0 text-4xl font-black">
                    <del className="calculator__amount--wrong text-gray-500 line-through text-2xl font-bold">
                      ${originalPrice}
                    </del>
                    <span className="calculator__amount text-4xl font-black text-black font-['Zilla_Slab']">
                      ${discountedPrice}
                    </span>
                    <span className="calculator__result-percent bg-yellow-400 text-black px-3 py-1.5 border-[3px] border-black text-sm font-black shadow-[2px_2px_0px_#000000] -rotate-2">
                      -{discountPercentage}%
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="calculator__submit-wrap mb-1">
                  <button
                    type="button"
                    onClick={() => {
                        const orderForm = document.querySelector('#order-form')
                        if (orderForm) {
                        orderForm.scrollIntoView({ behavior: 'smooth' })
                        }
                    }}
                    className="calculator__submit w-full bg-black text-white border-[3px] border-black p-4 text-xl font-black cursor-pointer transition-all shadow-[6px_6px_0px_#474151] uppercase tracking-wider hover:shadow-[3px_3px_0px_#374151] hover:translate-x-[3px] hover:translate-y-[3px] hover:bg-gray-800 active:shadow-none active:translate-x-[6px] active:translate-y-[6px] active:bg-gray-900 focus:outline-none focus:shadow-[6px_6px_0px_#374151,_0_0_0_2px_#FFD700]"
                    >
                    Get it Done
                    </button>
                </div>

                {/* Delivery Date */}
                    <div className="calculator-date flex items-center justify-center gap-1 pt-1 text-black text-sm font-bold">
                    <div className="calculator-date__text font-medium uppercase tracking-wide">
                        🚀 Get it by {deliveryDate}
                    </div>
                    </div>

                    {/* Trust Footer */}
                    <div className="mt-4 pt-4 border-t-1 border-black">
                    <div className="grid grid-cols-3 gap-3 text-xs">
                        <div className="flex items-center gap-2">
                        <Image src="/icons/checked.svg" alt="✓" width={16} height={16} />
                        <span className="font-medium text-black">Expert Writers</span>
                        </div>
                        <div className="flex items-center gap-2">
                        <Image src="/icons/checked.svg" alt="✓" width={16} height={16} />
                        <span className="font-medium text-black">On-Time</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                        <Image src="/icons/checked.svg" alt="✓" width={16} height={16} />
                        <span className="font-medium text-black">24/7 Support</span>
                        </div>
                    </div>
                    </div>
                </form>
            </div>
          </div>

          {/* ===== Right Column: All-Inclusive Pricing Card ===== */}
          <div className="relative bg-white border-[3px] border-black p-0 shadow-[8px_8px_0px_#000] text-center h-fit">
            {/* Yellow Badge Above Header */}
            <div className="bg-yellow-400 text-black px-4 py-2 border-b-[3px] border-black">
            <div className="text-center text-sm font-bold uppercase tracking-wide">
                100% Human Written
            </div>
            </div>

            {/* Black Header */}
            <div className="bg-black text-white py-4 px-6 border-b-[3px] border-black">
            <h3 className="text-xl font-bold uppercase tracking-wide">
                ALL-INCLUSIVE PRICING
            </h3>
            </div>

{/* Content Area */}
<div className="p-6">
  {/* Features List */}
  <div className="space-y-0">
    <div className="flex items-center justify-between py-2 border-b-2 border-gray-200">
      <div className="flex items-center gap-3">
        <Image src="/icons/checked.svg" alt="✓" width={24} height={24} />
        <span className="text-base font-medium text-gray-900">Writing Services</span>
      </div>
      <span className="text-sm text-gray-500 font-medium">from $12.00/page</span>
    </div>
    
    <div className="flex items-center justify-between py-4 border-b-2 border-gray-200">
      <div className="flex items-center gap-3">
        <Image src="/icons/checked.svg" alt="✓" width={24} height={24} />
        <span className="text-base font-medium text-gray-900">Rewriting Services</span>
      </div>
      <span className="text-sm text-gray-500 font-medium">from $8.00/page</span>
    </div>
    
    <div className="flex items-center justify-between py-4 border-b-2 border-gray-200">
      <div className="flex items-center gap-3">
        <Image src="/icons/checked.svg" alt="✓" width={24} height={24} />
        <span className="text-base font-medium text-gray-900">Originality Report</span>
      </div>
      <span className="text-sm font-bold text-purple-600">FREE</span>
    </div>
    
    <div className="flex items-center justify-between py-4 border-b-2 border-gray-200">
      <div className="flex items-center gap-3">
        <Image src="/icons/checked.svg" alt="✓" width={24} height={24} />
        <span className="text-base font-medium text-gray-900">Unlimited Edits</span>
      </div>
      <span className="text-sm font-bold text-purple-600">FREE</span>
    </div>
    
    <div className="flex items-center justify-between py-4 border-b-2 border-gray-200">
      <div className="flex items-center gap-3">
        <Image src="/icons/checked.svg" alt="✓" width={24} height={24} />
        <span className="text-base font-medium text-gray-900">Formatting</span>
      </div>
      <span className="text-sm font-bold text-purple-600">FREE</span>
    </div>
    
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <Image src="/icons/checked.svg" alt="✓" width={24} height={24} />
        <span className="text-base font-medium text-gray-900">Title Page</span>
      </div>
      <span className="text-sm font-bold text-purple-600">FREE</span>
    </div>
  </div>

  {/* Secondary CTA */}
  <button
    onClick={() => {
      // Scroll to guarantees section or open help
      const guaranteesSection = document.querySelector('[data-section="guarantees"]')
      if (guaranteesSection) {
        guaranteesSection.scrollIntoView({ behavior: 'smooth' })
      }
    }}
    className="mt-6 w-full bg-purple-600 text-white py-4 px-6 border-[3px] border-black font-bold text-lg uppercase tracking-wide shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
  >
    View All Guarantees
  </button>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}