import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// ✅ Cache at Next.js level for 1 hour
export const revalidate = 3600

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const { searchParams } = new URL(request.url)
  const premiumOnly = searchParams.get('premium') === 'true'

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log(`📡 [API] GET /api/writers/${slug}/reviews`)
  console.log(`🔑 [PARAMS] Slug: ${slug}`)
  console.log(`🎯 [QUERY] Premium Only: ${premiumOnly}`)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  try {
    console.log(`🔍 [DB] Querying dmh_reviews for writer_id: ${slug}${premiumOnly ? ' (premium only)' : ''}...`)

    // ✅ Select only needed fields, use composite index
    let query = supabase
      .from('dmh_reviews')
      .select('id, order_number, date, rating, comment, paper_type, writer_response, is_premium, helpful_count')
      .eq('writer_id', slug)
      .order('date', { ascending: false })

    if (premiumOnly) {
      query = query.eq('is_premium', true)
    }

    const { data: reviews, error } = await query

    if (error) {
      console.error('❌ [DB ERROR]', error)
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
      return NextResponse.json(
        { error: 'Failed to fetch reviews' },
        { status: 500 }
      )
    }

    const premiumCount = reviews?.filter(r => r.is_premium).length || 0
    const regularCount = reviews?.filter(r => !r.is_premium).length || 0

    console.log(`✅ [SUCCESS] Fetched ${reviews?.length || 0} reviews`)
    console.log(`📊 [BREAKDOWN] Premium: ${premiumCount}, Regular: ${regularCount}`)
    console.log(`⭐ [RATINGS] Average: ${reviews?.length ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) : 'N/A'}`)
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    return NextResponse.json(
      { reviews },
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