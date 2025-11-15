// Refresh Dates Script
// Run this periodically (e.g., weekly/monthly) to keep writer last_order dates
// and review dates fresh and recent

import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(process.cwd(), '.env.local') })

import { createClient } from '@supabase/supabase-js'

// Load environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables!')
  process.exit(1)
}

// Create admin client
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Helper to generate fresh last order date (1-3 days ago, consistent per writer)
function generateFreshLastOrderDate(writerId: string): string {
  const today = new Date()
  const idHash = writerId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const daysAgo = (idHash % 3) + 1 // 1, 2, or 3 days

  const lastOrderDate = new Date(today)
  lastOrderDate.setDate(today.getDate() - daysAgo)

  return lastOrderDate.toISOString().split('T')[0] // Format: YYYY-MM-DD
}

// Helper to generate fresh review date within last 15 months
function generateFreshReviewDate(reviewId: string): string {
  const today = new Date()
  const fifteenMonthsAgo = new Date()
  fifteenMonthsAgo.setMonth(today.getMonth() - 15)

  // Use review ID as seed for consistent transformation
  const idHash = reviewId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)

  // Map to the 15-month window
  const timeSpan = today.getTime() - fifteenMonthsAgo.getTime()
  const randomOffset = (idHash % 10000) / 10000 // Pseudo-random 0-1 based on ID
  const freshTimestamp = fifteenMonthsAgo.getTime() + (timeSpan * randomOffset)

  return new Date(freshTimestamp).toISOString()
}

async function refreshDates() {
  console.log('🔄 Starting date refresh...\n')

  try {
    // Step 1: Update writer last_order dates
    console.log('📝 Updating writer last_order dates...')

    const { data: writers, error: fetchError } = await supabase
      .from('dmh_writers')
      .select('id')

    if (fetchError) {
      console.error('❌ Error fetching writers:', fetchError.message)
      process.exit(1)
    }

    let writersUpdated = 0
    for (const writer of writers || []) {
      const newLastOrderDate = generateFreshLastOrderDate(writer.id)

      const { error: updateError } = await supabase
        .from('dmh_writers')
        .update({ last_order: newLastOrderDate })
        .eq('id', writer.id)

      if (updateError) {
        console.error(`   ❌ Error updating writer ${writer.id}:`, updateError.message)
      } else {
        writersUpdated++
        if (writersUpdated % 10 === 0) {
          console.log(`   ✅ Updated ${writersUpdated} writers...`)
        }
      }
    }

    console.log(`\n✅ Updated ${writersUpdated}/${writers?.length || 0} writers\n`)

    // Step 2: Update review dates
    console.log('💬 Updating review dates...')

    const { data: reviews, error: reviewFetchError } = await supabase
      .from('dmh_reviews')
      .select('id')

    if (reviewFetchError) {
      console.error('❌ Error fetching reviews:', reviewFetchError.message)
      process.exit(1)
    }

    let reviewsUpdated = 0
    for (const review of reviews || []) {
      const newReviewDate = generateFreshReviewDate(review.id)

      const { error: updateError } = await supabase
        .from('dmh_reviews')
        .update({ date: newReviewDate })
        .eq('id', review.id)

      if (updateError) {
        console.error(`   ❌ Error updating review ${review.id}:`, updateError.message)
      } else {
        reviewsUpdated++
        if (reviewsUpdated % 50 === 0) {
          console.log(`   ✅ Updated ${reviewsUpdated} reviews...`)
        }
      }
    }

    console.log(`\n✅ Updated ${reviewsUpdated}/${reviews?.length || 0} reviews\n`)

    // Step 3: Verify updates
    console.log('🔍 Verifying updates...')

    const { data: sampleWriter } = await supabase
      .from('dmh_writers')
      .select('id, name, last_order')
      .limit(1)
      .single()

    const { data: sampleReview } = await supabase
      .from('dmh_reviews')
      .select('id, date')
      .limit(1)
      .single()

    if (sampleWriter) {
      console.log(`   Sample writer: ${sampleWriter.name} - Last order: ${sampleWriter.last_order}`)
    }

    if (sampleReview) {
      const reviewDate = new Date(sampleReview.date)
      console.log(`   Sample review: ${sampleReview.id} - Date: ${reviewDate.toLocaleDateString()}`)
    }

    console.log('\n✅ Date refresh completed successfully! 🎉\n')
    console.log('💡 TIP: Run this script periodically (weekly/monthly) to keep dates fresh\n')

  } catch (error) {
    console.error('❌ Error during date refresh:', error)
    process.exit(1)
  }
}

refreshDates()
