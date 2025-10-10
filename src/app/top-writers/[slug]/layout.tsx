import { Metadata } from 'next'
import writersData from '@/data/writers.json'

interface Writer {
  id: string
  name: string
  title?: string
  photo: string
  countryFlag: string
  specializations: string[]
  stats: {
    projects: number
    successRate: number
    rating: number
  }
  bio: string
  subjects: string[]
  reviewCount: number
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const writer = writersData.find((w: any) => w.id === slug) as Writer | undefined
  
  if (!writer) {
    return {
      title: 'Writer Not Found | DoMyHomework.co',
      description: 'The writer profile you are looking for does not exist.'
    }
  }

  const writerTitle = writer.title || 'Expert Writer'
  const specializations = writer.specializations.slice(0, 2).join(' & ')
  const rating = writer.stats.rating
  const reviews = writer.reviewCount
  const projects = writer.stats.projects

  return {
    title: `${writer.name} - ${writerTitle} | DoMyHomework.co`,
    description: `Hire ${writer.name}, ${writerTitle} with ${rating}/5 rating (${reviews}+ verified reviews). Specializes in ${specializations}. ${projects}+ completed projects with ${writer.stats.successRate}% success rate.`,
    keywords: `${writer.name}, ${writer.specializations.join(', ')}, ${writer.subjects.join(', ')}, academic writer, homework help, expert tutor`,
    authors: [{ name: 'DoMyHomework.co' }],
    creator: 'DoMyHomework.co',
    publisher: 'DoMyHomework.co',
    robots: 'noindex, follow',
    alternates: {
      canonical: `https://domyhomework.co/top-writers/${slug}`,
    },
    openGraph: {
      type: 'profile',
      locale: 'en_US',
      url: `https://domyhomework.co/top-writers/${slug}`,
      siteName: 'DoMyHomework.co',
      title: `${writer.name} - ${writerTitle}`,
      description: `⭐ ${rating}/5 (${reviews} reviews) • ${projects}+ projects • ${specializations}`,
      images: [
        {
          url: writer.photo,
          width: 400,
          height: 400,
          alt: `${writer.name} - Expert Writer at DoMyHomework.co`,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: `${writer.name} - ${writerTitle}`,
      description: `⭐ ${rating}/5 • ${reviews} reviews • Expert in ${specializations}`,
      images: [writer.photo],
    },
  }
}

// Generate breadcrumb structured data + Enhanced Person Schema
async function generateStructuredData(params: Promise<{ slug: string }>) {
  const { slug } = await params
  const writer = writersData.find((w: any) => w.id === slug) as Writer | undefined
  
  if (!writer) return []

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://domyhomework.co"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Top Writers",
        "item": "https://domyhomework.co/top-writers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": writer.name,
        "item": `https://domyhomework.co/top-writers/${slug}`
      }
    ]
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": writer.name,
    "jobTitle": writer.title || "Academic Writer",
    "description": writer.bio,
    "knowsAbout": writer.specializations,
    "hasOccupation": {
      "@type": "Occupation",
      "name": writer.title || "Academic Writer",
      "occupationLocation": {
        "@type": "Country",
        "name": writer.countryFlag
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": writer.stats.rating,
      "reviewCount": writer.reviewCount,
      "bestRating": 5,
      "worstRating": 1
    }
  }

  return [breadcrumbSchema, personSchema]
}

export default async function WriterProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const structuredData = await generateStructuredData(params)

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  )
}

export async function generateStaticParams() {
  return writersData.map((writer: any) => ({
    slug: writer.id,
  }))
}