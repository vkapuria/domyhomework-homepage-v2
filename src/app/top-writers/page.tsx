'use client'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { IconStarFilled } from '@tabler/icons-react'
import writersData from '@/data/writers.json'

interface Writer {
  id: string
  name: string
  photo: string
  country: string
  countryFlag: string
  specializations: string[]
  stats: {
    projects: number
    successRate: number
    rating: number
  }
  bio: string
  subjects: string[]
}

export default function TopWritersPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('All Subjects')
  const [displayCount, setDisplayCount] = useState(9)

  // Get unique subjects from all writers
  const allSubjects = useMemo(() => {
    const subjects = new Set<string>()
    writersData.forEach((writer: Writer) => {
      writer.subjects.forEach(subject => subjects.add(subject))
    })
    return ['All Subjects', ...Array.from(subjects).sort()]
  }, [])

  // Filter writers by subject
  const filteredWriters = useMemo(() => {
    if (selectedSubject === 'All Subjects') {
      return writersData
    }
    return writersData.filter((writer: Writer) => 
      writer.subjects.includes(selectedSubject)
    )
  }, [selectedSubject])

  // Writers to display (with load more functionality)
  const displayedWriters = filteredWriters.slice(0, displayCount)
  const hasMore = displayCount < filteredWriters.length

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            {/* Chip Badge */}
            <span className="inline-block text-sm font-medium bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4 border border-purple-500">
              Our Expert Writers
            </span>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Top-Rated Expert Writers
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our expert writers are carefully selected from the top 2% of applicants. Each writer holds advanced degrees and has proven expertise in their subject areas, ready to deliver high-quality, plagiarism-free work.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Verified Experts</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">★</span>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Subjects Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writers Grid Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          
          {/* Filter Dropdown */}
          <div className="mb-12 flex justify-center">
            <div className="w-full max-w-xs">
              <label htmlFor="subject-filter" className="block text-sm font-bold text-gray-900 mb-2">
                Filter by Subject
              </label>
              <select
                id="subject-filter"
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value)
                  setDisplayCount(9) // Reset display count when filtering
                }}
                className="w-full p-4 border-2 border-black bg-white text-base font-medium transition-all hover:shadow-[2px_2px_0px_#000] focus:border-purple-600 focus:shadow-[0_0_0_2px_#8300e9] appearance-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2716%27%20height%3D%2710%27%20viewBox%3D%270%200%2016%2010%27%20fill%3D%27none%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cpath%20d%3D%27M1%201L8%208L15%201%27%20stroke%3D%27black%27%20stroke-width%3D%273%27%20stroke-linecap%3D%27square%27/%3E%3C/svg%3E')] bg-no-repeat bg-[calc(100%-20px)_center] pr-14 rounded-lg"
              >
                {allSubjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              
              {/* Results count */}
              <p className="mt-2 text-sm text-gray-600">
                Showing {displayedWriters.length} of {filteredWriters.length} writers
              </p>
            </div>
          </div>

          {/* Writers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedWriters.map((writer: Writer) => (
              <WriterCard key={writer.id} writer={writer} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredWriters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No writers found for this subject. Please try another filter.
              </p>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setDisplayCount(prev => prev + 9)}
                className="inline-block bg-black text-white px-8 py-4 border-2 border-black rounded-lg font-bold hover:bg-gray-800 transition-all shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                Load More Writers
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

// Writer Card Component
function WriterCard({ writer }: { writer: Writer }) {
  return (
    <article className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
      
      {/* Photo + Flag */}
      <div className="relative mb-4">
        <div className="w-32 h-32 mx-auto rounded-lg overflow-hidden border-2 border-black">
          <Image
            src={writer.photo}
            alt={writer.name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Flag in top-right corner */}
        <div className="absolute top-0 right-0 text-3xl">
          {writer.countryFlag}
        </div>
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
        {writer.name}
      </h3>

      {/* Specialization Chips */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {writer.specializations.map((spec, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-50 text-purple-700 text-sm font-medium rounded-full border border-purple-500"
          >
            {spec}
          </span>
        ))}
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed line-clamp-3">
        {writer.bio}
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-gray-200">
        {/* Projects */}
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{writer.stats.projects}</div>
          <div className="text-xs text-gray-600">Projects</div>
        </div>

        {/* Success Rate */}
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{writer.stats.successRate}%</div>
          <div className="text-xs text-gray-600">Success Rate</div>
        </div>

        {/* Rating */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1">
            <IconStarFilled className="w-5 h-5 text-yellow-400" />
            <span className="text-2xl font-bold text-gray-900">{writer.stats.rating}</span>
          </div>
          <div className="text-xs text-gray-600">Rating</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3">
        {/* Hire Now Button */}
        
         <a href="https://order.domyhomework.co"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white text-center py-3 px-4 border-2 border-black rounded-lg font-bold text-sm hover:bg-gray-800 transition-all"
        >
          Hire Now
        </a>

        {/* View Profile Button */}
        
         <a href={`/top-writers/${writer.id}`}
          className="bg-white text-black text-center py-3 px-4 border-2 border-black rounded-lg font-bold text-sm hover:bg-purple-50 transition-all"
        >
          View Profile
        </a>
      </div>
    </article>
  )
}