'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { IconStarFilled } from '@tabler/icons-react'
import writersData from '@/data/writers.json'
import Link from 'next/link'

/* ---------------- TYPES ---------------- */
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

/* ---------------- MAIN PAGE ---------------- */
export default function TopWritersPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('All Subjects')
  const [sortBy, setSortBy] = useState<string>('most-rated')
  const [displayCount, setDisplayCount] = useState(6)

  // All subjects (unique)
  const allSubjects = useMemo(() => {
    const subjects = new Set<string>()
    writersData.forEach((writer: Writer) => {
      writer.subjects.forEach(subject => subjects.add(subject))
    })
    return ['All Subjects', ...Array.from(subjects).sort()]
  }, [])

  // Filter + sort writers
  const filteredWriters = useMemo(() => {
    let filtered = selectedSubject === 'All Subjects' 
      ? writersData 
      : writersData.filter((writer: Writer) => writer.subjects.includes(selectedSubject))
    
    return [...filtered].sort((a, b) => {
      switch(sortBy) {
        case 'most-rated': return b.stats.rating - a.stats.rating
        case 'most-reviewed': return b.stats.projects - a.stats.projects
        case 'finished-projects': return b.stats.projects - a.stats.projects
        case 'success-rate': return b.stats.successRate - a.stats.successRate
        default: return 0
      }
    })
  }, [selectedSubject, sortBy])

  const displayedWriters = filteredWriters.slice(0, displayCount)
  const hasMore = displayCount < filteredWriters.length

  // Featured = Top 3
  const featuredWriters = [...writersData]
    .sort((a, b) => b.stats.rating - a.stats.rating || b.stats.successRate - a.stats.successRate)
    .slice(0, 3)

  return (
    <div className="bg-white min-h-screen">

      {/* ---------------- HERO ---------------- */}
      <section className="relative bg-gradient-to-br from-[#8300e9] via-purple-600 to-purple-500 py-16 lg:py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

            {/* LEFT: Title + Filters */}
            <div className="text-white space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Meet Our Team of Expert Homework Helpers
                </h1>
                <p className="text-lg text-purple-100 leading-relaxed max-w-2xl">
                  We take pride in our exceptional team of subject matter experts. 
                  Only the most qualified professionals with verified credentials join us, 
                  ensuring top-quality academic support for your assignments.
                </p>
              </div>

              {/* Filter Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  
                  {/* Subject Dropdown */}
                  <select
                    value={selectedSubject}
                    onChange={(e) => {
                      setSelectedSubject(e.target.value)
                      setDisplayCount(6)
                    }}
                    className="w-full p-3.5 border-2 border-gray-300 bg-white text-gray-900 rounded-lg font-medium text-sm 
                               focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  >
                    <option value="">All Subjects</option>
                    {allSubjects.filter(s => s !== 'All Subjects').map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>

                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-3.5 border-2 border-gray-300 bg-white text-gray-900 rounded-lg font-medium text-sm 
                               focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  >
                    <option value="most-rated">Most rated</option>
                    <option value="most-reviewed">Most reviewed</option>
                    <option value="finished-projects">Finished projects</option>
                    <option value="success-rate">Success rate</option>
                  </select>

                  {/* Search Button */}
                  <button 
                    onClick={() => setDisplayCount(6)}
                    className="bg-black text-white py-3.5 px-6 rounded-lg font-bold hover:bg-gray-800 transition-all"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT: Avatars */}
            <div className="hidden lg:flex justify-end items-center">
              <div className="flex -space-x-6">
                {featuredWriters.slice(0, 5).map((writer) => (
                  <div 
                    key={writer.id}
                    className="relative w-40 h-40 rounded-full overflow-hidden border-[3px] border-white shadow-lg"
                  >
                    <Image
                      src={writer.photo}
                      alt={writer.name}
                      width={150}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- FEATURED WRITERS ---------------- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Writers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWriters.map((writer) => (
              <FeaturedWriterCard key={writer.id} writer={writer} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WRITERS GRID ---------------- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayedWriters.map((writer: Writer) => (
              <WriterCard key={writer.id} writer={writer} />
            ))}
          </div>

          {filteredWriters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No writers found for this subject. Please try another filter.
              </p>
            </div>
          )}

          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setDisplayCount(prev => prev + 3)}
                className="inline-block bg-black text-white px-8 py-4 border-2 border-black rounded-lg font-bold hover:bg-gray-800 transition-all shadow-[4px_4px_0px_#000]"
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

/* ---------------- FEATURED WRITER CARD ---------------- */
function FeaturedWriterCard({ writer }: { writer: Writer }) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all relative">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 rounded-xl overflow-hidden">
            <Image
              src={writer.photo}
              alt={writer.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-1 -right-1 text-2xl">{writer.countryFlag}</div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{writer.name}</h3>
          <p className="text-xs text-purple-600">{writer.subjects.slice(0, 3).join(' • ')}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-4 line-clamp-4">{writer.bio}</p>
      <div className="flex items-center justify-between text-sm font-medium text-gray-700 mb-6">
        <span>Projects: <strong>{writer.stats.projects}</strong></span>
        <span>Success: <strong>{writer.stats.successRate}%</strong></span>
        <span className="flex items-center gap-1">
          <IconStarFilled className="w-4 h-4 text-yellow-400" /> {writer.stats.rating}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <a
        href={`https://order.domyhomework.co?writerId=${writer.id}&writerName=${encodeURIComponent(writer.name)}&writerPhoto=${encodeURIComponent(writer.photo)}&writerRating=${writer.stats.rating}&writerProjects=${writer.stats.projects}&writerSuccessRate=${writer.stats.successRate}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white text-center py-2.5 rounded-lg font-bold text-xs hover:bg-gray-800"
      >
        Hire Now
      </a>
        <Link
          href={`/top-writers/${writer.id}`}
          className="bg-gray-200 text-black text-center py-2.5 border border-gray-300 rounded-lg font-bold text-xs hover:bg-purple-50 hover:border-purple-300"
        >
          View Profile
        </Link>
      </div>
    </article>
  )
}

/* ---------------- WRITER CARD ---------------- */
function WriterCard({ writer }: { writer: Writer }) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-purple-200 hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-4 mb-3">
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-xl overflow-hidden">
            <Image
              src={writer.photo}
              alt={writer.name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -top-1 -right-1 text-lg">{writer.countryFlag}</div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-gray-900">{writer.name}</h3>
          <div className="flex flex-wrap gap-1 mt-1">
            {writer.subjects.slice(0, 2).map((spec, idx) => (
              <span key={idx} className="bg-purple-50 text-purple-700 text-[12px] font-medium px-2 py-0.5 rounded-full border border-purple-200">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-600 mb-4 leading-relaxed line-clamp-2">
        {writer.bio}
      </p>

      <div className="flex items-center justify-around mb-5 py-3">
        <StatBlock label="Projects" value={writer.stats.projects} />
        <div className="w-px h-10 bg-gray-300"></div>
        <StatBlock label="Success" value={`${writer.stats.successRate}%`} />
        <div className="w-px h-10 bg-gray-300"></div>
        <StatBlock label="Rating" value={writer.stats.rating} icon />
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <a
        href={`https://order.domyhomework.co?writerId=${writer.id}&writerName=${encodeURIComponent(writer.name)}&writerPhoto=${encodeURIComponent(writer.photo)}&writerRating=${writer.stats.rating}&writerProjects=${writer.stats.projects}&writerSuccessRate=${writer.stats.successRate}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white text-center py-2.5 px-3 rounded-lg font-bold text-xs hover:bg-gray-800 transition-all"
      >
        Hire Now
      </a>
        <Link
          href={`/top-writers/${writer.id}`}
          className="bg-gray-200 text-black text-center py-2.5 px-3 border border-gray-300 rounded-lg font-bold text-xs hover:bg-purple-50 hover:border-purple-300 transition-all"
        >
          View Profile
        </Link>
      </div>
    </article>
  )
}

function StatBlock({ label, value, icon }: { label: string; value: any; icon?: boolean }) {
  return (
    <div className="text-center flex-1">
      <div className="text-xs text-gray-600 mb-1">{label}</div>
      <div className="flex items-center justify-center gap-1.5">
        {icon && <IconStarFilled className="w-4 h-4 text-yellow-400" />}
        <span className="text-xl font-bold text-gray-900">{value}</span>
      </div>
    </div>
  )
}
