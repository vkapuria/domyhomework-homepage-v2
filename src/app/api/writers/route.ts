import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('📡 [API] GET /api/writers - Fetching all writers')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  
  try {
    console.log('🔍 [DB] Querying dmh_writers table...')
    
    const { data: writers, error } = await supabase
      .from('dmh_writers')
      .select('id, name, photo, country_flag, specializations, stats, subjects, review_count')
      .eq('is_active', true)
      .order('stats->projects', { ascending: false })

    if (error) {
      console.error('❌ [DB ERROR]', error)
      return NextResponse.json(
        { error: 'Failed to fetch writers' },
        { status: 500 }
      )
    }

    console.log(`✅ [SUCCESS] Fetched ${writers?.length || 0} writers`)
    console.log(`📊 [DATA] Writers:`, writers?.map(w => w.name).join(', '))
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

    return NextResponse.json(
      { writers },
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