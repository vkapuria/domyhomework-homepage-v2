'use client'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { IconStarFilled } from '@tabler/icons-react'
import writersData from '@/data/writers.json'
import Link from 'next/link'

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
  const [displayCount, setDisplayCount] = useState(6)

  // Get unique subjects
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

  const displayedWriters = filteredWriters.slice(0, displayCount)
  const hasMore = displayCount < filteredWriters.length

  // Pick top 3 featured writers (e.g. highest rating & success rate)
  const featuredWriters = [...writersData]
    .sort((a, b) => b.stats.rating - a.stats.rating || b.stats.successRate - a.stats.successRate)
    .slice(0, 3)

  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="grid grid-cols-6 gap-8 max-w-6xl mx-auto px-6">
            {writersData.slice(0, 12).map((writer) => (
              <div key={writer.id} className="w-16 h-16 rounded-full overflow-hidden mx-auto">
                <Image
                  src={writer.photo}
                  alt={writer.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <span className="inline-block text-sm font-medium bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4 border border-purple-500">
            Our Expert Writers
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Top-Rated Expert Writers
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selected from the top 2% of applicants, our writers hold advanced degrees and have proven subject expertise to deliver high-quality, plagiarism-free work.
          </p>

          {/* Trust metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <TrustCard icon="✓" number="500+" label="Verified Experts" color="purple" />
            <TrustCard icon="★" number="98%" label="Success Rate" color="green" />
            <TrustCard icon="🎓" number="100+" label="Subjects Covered" color="blue" />
          </div>

          <div className="mt-10">
            <a
              href="https://order.domyhomework.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-all shadow-[4px_4px_0px_#000]"
            >
              Hire an Expert Now
            </a>
          </div>
        </div>
      </section>

      {/* Featured Writers Section */}
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

      {/* Writers Grid Section */}
      <section className="py-20">
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
                  setDisplayCount(9)
                }}
                className="w-full p-4 border-2 border-black bg-white text-base font-medium rounded-lg"
              >
                {allSubjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Writers Grid */}
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

/* ---------------- TRUST CARD ---------------- */
function TrustCard({ icon, number, label, color }: { icon: string, number: string, label: string, color: string }) {
  const bg = color === 'purple' ? 'bg-purple-100 text-purple-700' :
             color === 'green' ? 'bg-green-100 text-green-700' :
             'bg-blue-100 text-blue-700'
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
  <div className={`w-12 h-12 ${bg} rounded-full flex items-center justify-center text-2xl font-bold mb-3`}>
    {icon}
  </div>
  <div className="text-3xl font-bold text-gray-900">{number}</div>
  <div className="text-sm text-gray-600">{label}</div>
</div>
  )
}

/* ---------------- FEATURED WRITER CARD ---------------- */
function FeaturedWriterCard({ writer }: { writer: Writer }) {
    const [showTooltip, setShowTooltip] = useState(false)
  
    return (
      <article className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all relative">
        
        {/* Verification Badge - Top Right */}
        <div 
          className="absolute top-4 right-4 cursor-help"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <Image
            src="/icons/insurance.svg"
            alt="Verified"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          {showTooltip && (
            <div className="absolute top-8 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg z-10">
              Credentials Verified
              <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
            </div>
          )}
        </div>
  
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
            <p className="text-sm text-gray-600">{writer.specializations.join(' • ')}</p>
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
          href="https://order.domyhomework.co"
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

/* ---------------- STANDARD WRITER CARD ---------------- */
function WriterCard({ writer }: { writer: Writer }) {
  const randomSpecialization = writer.specializations[
    Math.floor(Math.random() * writer.specializations.length)
  ]

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
        {/* Flag badge */}
        <div className="absolute -top-1 -right-1 text-lg">
            {writer.countryFlag}
        </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-gray-900">{writer.name}</h3>
          <div className="flex flex-wrap gap-1 mt-1">
            {writer.specializations.slice(0, 2).map((spec, idx) => (
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

      {/* Stats */}
      <div className="flex items-center justify-around mb-5 py-3">
        <StatBlock label="Projects" value={writer.stats.projects} />
        <div className="w-px h-10 bg-gray-300"></div>
        <StatBlock label="Success" value={`${writer.stats.successRate}%`} />
        <div className="w-px h-10 bg-gray-300"></div>
        <StatBlock label="Rating" value={writer.stats.rating} icon />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href="https://order.domyhomework.co"
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
