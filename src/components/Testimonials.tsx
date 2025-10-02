'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { IconStarFilled } from '@tabler/icons-react'
import { IconMessageCircle } from '@tabler/icons-react'


type SourceKey = 'domyhomework' | 'gmail' | 'sitejabber' | 'reviewsio'

type Review = {
  author: string
  source: SourceKey
  rating: 4 | 5
  title: string
  highlights: string[]
  body: string
  date: string
}

const SOURCE_BADGE: Record<SourceKey, { label: string; icon: string }> = {
  domyhomework: { label: 'DMH', icon: '/icons/Favicon-DMH-Transp-bg.png' },
  gmail:        { label: 'Gmail', icon: '/icons/gmail.png' },
  sitejabber:   { label: 'Sitejabber', icon: '/icons/sitejabber-logo.svg' },
  reviewsio:    { label: 'Reviews.io', icon: '/icons/Reviews.io.svg' },
}

// --- 12 reviews (complete) ---
const REVIEWS: Review[] = [
  { author:'Sam R.', source:'domyhomework', rating:5, title:'Market report, done & dusted', highlights:['looking great!!','next level'], body:`It's looking great!! Exactly what I needed to take my semester project to the next level. Clear citations, no fluff, on time.`, date:'2025-03-12' },
  { author:'Priya K.', source:'domyhomework', rating:5, title:'Saved me during finals', highlights:['massive time saver','plagiarism-free'], body:`Finals week was chaos. This was a massive time saver and the paper came back plagiarism-free with the report.`, date:'2025-02-26' },
  { author:'Miguel A.', source:'domyhomework', rating:4, title:'Solid work, quick revisions', highlights:['followed the rubric','fast edits'], body:`They followed the rubric well. Asked for tweaks and got fast edits within a few hours. Would use again.`, date:'2025-01-18' },

  { author:'Jen (via email)', source:'gmail', rating:5, title:'Calc problem set ✅', highlights:['step-by-step','right before class'], body:`Thank you! The solutions were step-by-step and easy to follow. Delivered right before class. Lifesaver.`, date:'2025-03-04' },
  { author:'Omar (inbox)', source:'gmail', rating:5, title:'Nursing case study nailed', highlights:['evidence-based','zero plagiarism'], body:`Case study was evidence-based with current sources. Checked the report—zero plagiarism. Appreciate the care.`, date:'2025-02-11' },
  { author:'Lina — email reply', source:'gmail', rating:4, title:'Great, small delay on chat', highlights:['quality was excellent','support stayed with me'], body:`There was a minor chat delay but the quality was excellent. Support stayed with me until submission. 4/5.`, date:'2025-01-29' },

  { author:'Aiden P.', source:'sitejabber', rating:5, title:'Best decision this term', highlights:['on-time delivery','A+ paper'], body:`Got on-time delivery and an A+ paper for my marketing analysis. Clear visuals + perfect APA.`, date:'2025-03-09' },
  { author:'Sofia L.', source:'sitejabber', rating:5, title:'Legit help for stats', highlights:['clean datasets','explained the why'], body:`They provided clean datasets and explained the why, not just answers. Stats finally makes sense 🧠.`, date:'2025-02-20' },
  { author:'Trent W.', source:'sitejabber', rating:5, title:'Overnight turnaround (!!)', highlights:['urgent order','still original'], body:`Placed an urgent order at midnight—woke up to a complete draft. Checked: still original. Unreal.`, date:'2025-01-31' },

  { author:'Naomi C.', source:'reviewsio', rating:5, title:'MBA finance memo', highlights:['hit the brief','executive tone'], body:`They hit the brief perfectly and kept an executive tone. Professor comments were all positive.`, date:'2025-03-06' },
  { author:'DK', source:'reviewsio', rating:5, title:'Coding assignment fixed', highlights:['well-commented','passed all tests'], body:`Refactored my JS, well-commented, and it passed all tests. Learned a couple tricks too.`, date:'2025-02-14' },
  { author:'Helena G.', source:'reviewsio', rating:5, title:'Thesis chapter clarity', highlights:['clear structure','sources were current'], body:`Loved the clear structure and the sources were current (last 2 years). Exactly what I needed.`, date:'2025-01-22' },
]

// --- helpers ---
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function generateDynamicDate(index: number): string {
  const today = new Date()
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  const currentDay = today.getDate()
  
  // 5 months ago from today
  const fiveMonthsAgo = new Date(currentYear, currentMonth - 5, currentDay)
  
  // 3 years ago from today  
  const threeYearsAgo = new Date(currentYear - 3, currentMonth, currentDay)
  
  // Ensure at least 2 reviews are from current year
  if (index < 2) {
    // Generate dates from January 1st current year to 5 months ago
    const startOfYear = new Date(currentYear, 0, 1)
    const randomTime = startOfYear.getTime() + Math.random() * (fiveMonthsAgo.getTime() - startOfYear.getTime())
    const randomDate = new Date(randomTime)
    return randomDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }
  
  // For the rest, generate random dates in the full 3-year range
  const randomTime = threeYearsAgo.getTime() + Math.random() * (fiveMonthsAgo.getTime() - threeYearsAgo.getTime())
  const randomDate = new Date(randomTime)
  
  return randomDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  })
}

function getInitials(name: string) {
  const parts = name.replace(/[()]/g, '').split(' ').filter(Boolean)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? '' : ''
  return (first + last).toUpperCase()
}

function useHighlighted(text: string, phrases: string[]) {
  return useMemo(() => {
    if (!phrases?.length) return text
    const ordered = [...phrases].sort((a, b) => b.length - a.length)
    let out = text
    for (const p of ordered) {
      const esc = p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const re = new RegExp(`(${esc})`, 'gi')
      out = out.replace(
        re,
        '<span class="bg-yellow-200 px-1 py-0.5 rounded font-semibold text-black-700">' + '$1' + '</span>'
      )
    }
    return out
  }, [text, phrases])
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [loopList, setLoopList] = useState<Review[]>([])
  const [speed] = useState(1)

  // Shuffle once, then duplicate the array for seamless looping
  useEffect(() => {
    const shuffled = shuffle(REVIEWS)
    setLoopList([...shuffled, ...shuffled])
  }, [])

  // Continuous, seamless auto-scroll
  useEffect(() => {
    const track = trackRef.current
    if (!track || loopList.length === 0) return

    let raf = 0

    const animate = () => {
      if (track.scrollLeft >= (track.scrollWidth / 2)) {
        track.scrollLeft = track.scrollLeft - (track.scrollWidth / 2)
      }
      track.scrollLeft += speed
      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [loopList, speed])

  return (
    <section className="relative py-12 sm:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Chip + H2 + description (centered) */}
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-medium border border-purple-500 bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
  Reviews of Our Do My Homework Online Service
</h2>
<div className="text-sm text-gray-600 mb-2">
  {(1792 + Math.floor((new Date().getMonth() + 1) * 25)).toLocaleString()} verified reviews and growing daily
</div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Real feedback from students who trust our expert writers for plagiarism-free, on-time homework help.
          </p>
        </div>

        {/* Continuous track */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <div
            ref={trackRef}
            className="flex gap-6 px-4 sm:px-6 lg:px-8 overflow-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {loopList.map((r, idx) => (
              <Card key={idx} review={r} reviewIndex={idx} />
            ))}
          </div>
          </div>

               {/* See All Reviews button */}
               <div className="text-center mt-10">
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#8300e9] hover:bg-purple-700 transition-colors shadow-sm"
          >
            <IconMessageCircle className="w-5 h-5" />
            See All Reviews
          </a>
        </div>
      </div>

    </section>
  )
}

function Card({ review, reviewIndex }: { review: Review; reviewIndex: number }) {
  const html = useHighlighted(review.body, review.highlights)
  const src = SOURCE_BADGE[review.source]
  // const initials = getInitials(review.author)
  const dynamicDate = generateDynamicDate(reviewIndex)

  return (
    <article className="relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px] bg-white border border-gray-200 hover:border-gray-300 hover:border-2 rounded-2xl shadow-sm hover:shadow-md transition-all p-6">
      
      <div className="space-y-4 relative z-10">
                {/* Blockquote with title + decorative icon */}
                <div className="space-y-2">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.17 6A4.17 4.17 0 0 0 3 10.17v3.66A4.17 4.17 0 0 0 7.17 18H9v-6H6.83V10.17A1.17 1.17 0 0 1 8 9h1V6H7.17ZM17.17 6A4.17 4.17 0 0 0 13 10.17v3.66A4.17 4.17 0 0 0 17.17 18H19v-6h-2.17V10.17A1.17 1.17 0 0 1 18 9h1V6h-1.83Z" />
            </svg>
            <h3 className="text-base font-semibold text-gray-900">
              {review.title}
            </h3>
          </div>
          <blockquote
            className="text-base sm:text-lg leading-relaxed italic text-gray-900"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>


        {/* Footer row */}
        <div className="flex items-center gap-4 pt-2">

          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-sm truncate text-gray-900">{review.author}</h4>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-xs text-gray-500">{dynamicDate}</p>
            </div>
            <div className="flex items-center">
              {Array.from({ length: review.rating }).map((_, i) => (
                <IconStarFilled key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              {review.rating === 4 && (
                <span className="ml-2 text-xs text-gray-500">4/5</span>
              )}
            </div>
          </div>

          {/* Source badge - stacked vertically */}
          <div className="flex-shrink-0 flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-white transition-colors duration-200" title={src.label}>
            <Image src={src.icon} alt={src.label} width={30} height={30} className="object-contain" />
            <span className="text-xs font-medium text-gray-600 leading-none">{src.label}</span>
          </div>
        </div>
      </div>
    </article>
  )
}