'use client'

interface DynamicSEOContentProps {
  title: string
  content: string
  isVisible: boolean
}

export default function DynamicSEOContent({ title, content, isVisible }: DynamicSEOContentProps) {
  if (!isVisible) return null

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* EXACT SAME LAYOUT AS HOMEPAGE - Fixed height with scroll and border */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-[400px] overflow-y-auto border border-gray-700 rounded-2xl bg-white p-8">
          
          {/* Dynamic Content spans both columns with proper spacing */}
          <div 
            className="md:col-span-2"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          
        </div>
      </div>
    </section>
  )
}