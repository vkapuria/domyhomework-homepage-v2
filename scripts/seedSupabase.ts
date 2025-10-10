// Load environment variables from .env.local
import { config } from 'dotenv'
import { resolve } from 'path'

config({ path: resolve(process.cwd(), '.env.local') })

import { createClient } from '@supabase/supabase-js'
import writersData from '../src/data/writers.json'
import { generateReviews } from '../src/utils/reviewGenerator'

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

async function seedDatabase() {
  console.log('🚀 Starting database seed...\n')

  try {
    // Step 1: Clear existing data (if any)
    console.log('🧹 Clearing existing data...')
    await supabase.from('dmh_reviews').delete().neq('id', '00000000-0000-0000-0000-000000000000')
    await supabase.from('dmh_writers').delete().neq('id', 'dummy')
    console.log('✅ Cleared existing data\n')

    // Step 2: Insert writers
    console.log('📝 Inserting writers...')
    let writersInserted = 0

    for (const writer of writersData) {
      const writerData = {
        id: writer.id,
        name: writer.name,
        title: writer.title || null,
        photo: writer.photo,
        country: writer.country,
        country_flag: writer.countryFlag,
        bio: writer.bio,
        specializations: writer.specializations,
        subjects: writer.subjects,
        stats: writer.stats,
        rating_breakdown: writer.ratingBreakdown || null,
        top_subjects: writer.topSubjects || null,
        top_paper_types: writer.topPaperTypes || null,
        last_order: writer.lastOrder,
        review_count: writer.reviewCount,
        is_active: true
      }

      const { error } = await supabase.from('dmh_writers').insert(writerData)

      if (error) {
        console.error(`   ❌ Error inserting ${writer.name}:`, error.message)
      } else {
        writersInserted++
        console.log(`   ✅ ${writer.name}`)
      }
    }

    console.log(`\n✅ Inserted ${writersInserted}/${writersData.length} writers\n`)

    // Step 3: Generate and insert reviews
    console.log('💬 Generating and inserting reviews...')
    let totalReviews = 0

    for (const writer of writersData) {
      const regularReviews = generateReviews(writer as any, writer.reviewCount || 12)

      const regularReviewsData = regularReviews.map(review => ({
        writer_id: writer.id,
        order_number: review.orderNumber,
        date: review.date,
        rating: review.rating,
        comment: review.comment,
        paper_type: review.paperType,
        writer_response: review.writerResponse || null,
        helpful_count: 0,
        is_premium: false
      }))

      const { error: regularError } = await supabase.from('dmh_reviews').insert(regularReviewsData)

      if (regularError) {
        console.error(`   ❌ Error inserting regular reviews for ${writer.name}:`, regularError.message)
      }

      if (writer.premiumReviews && writer.premiumReviews.length > 0) {
        const premiumReviewsData = writer.premiumReviews.map(review => ({
          writer_id: writer.id,
          order_number: review.orderNumber,
          date: review.date,
          rating: review.rating,
          comment: review.comment,
          paper_type: review.paperType,
          writer_response: review.writerResponse || null,
          helpful_count: review.helpfulCount || 0,
          is_premium: true
        }))

        const { error: premiumError } = await supabase.from('dmh_reviews').insert(premiumReviewsData)

        if (premiumError) {
          console.error(`   ❌ Error inserting premium reviews for ${writer.name}:`, premiumError.message)
        }
      }

      const totalForWriter = regularReviews.length + (writer.premiumReviews?.length || 0)
      totalReviews += totalForWriter
      console.log(`   ✅ ${writer.name}: ${totalForWriter} reviews`)
    }

    console.log(`\n✅ Inserted ${totalReviews} total reviews\n`)

    // Step 4: Verify data
    console.log('🔍 Verifying data...')
    
    const { count: writerCount } = await supabase
      .from('dmh_writers')
      .select('*', { count: 'exact', head: true })

    const { count: reviewCount } = await supabase
      .from('dmh_reviews')
      .select('*', { count: 'exact', head: true })

    console.log(`   Writers in DB: ${writerCount}`)
    console.log(`   Reviews in DB: ${reviewCount}`)

    console.log('\n✅ Database seeding completed successfully! 🎉\n')

  } catch (error) {
    console.error('❌ Error during seeding:', error)
    process.exit(1)
  }
}

seedDatabase()