import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// ✅ Cache at Next.js level for 1 hour
export const revalidate = 3600

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log(`📡 [API] GET /api/writers/${slug}`)
  console.log(`🔑 [PARAMS] Slug: ${slug}`)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  try {
    console.log(`🔍 [DB] Querying dmh_writers for id: ${slug}...`)

    // ✅ Select only needed fields (not *)
    const { data: writer, error } = await supabase
      .from('dmh_writers')
      .select('id, name, title, photo, country, country_flag, bio, specializations, subjects, stats, rating_breakdown, top_subjects, top_paper_types, last_order, review_count, is_active')
      .eq('id', slug)
      .eq('is_active', true)
      .single()

    if (error || !writer) {
      console.error('❌ [NOT FOUND] Writer not found:', error?.message || 'No data returned')
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
      return NextResponse.json(
        { error: 'Writer not found' },
        { status: 404 }
      )
    }

    console.log(`✅ [SUCCESS] Found writer: ${writer.name}`)
    console.log(`📊 [DATA] Projects: ${writer.stats.projects}, Rating: ${writer.stats.rating}`)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    return NextResponse.json(
      { writer },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    )
  } catch (error) {
    console.error('❌ [UNEXPECTED ERROR]', error)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}