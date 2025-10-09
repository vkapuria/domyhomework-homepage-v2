import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import writersData from '@/data/writers.json'

interface Writer {
  id: string
  name: string
  specializations: string[]
  bio: string
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const writer = writersData.find((w: Writer) => w.id === slug)
  
  if (!writer) {
    return {
      title: 'Writer Not Found | DoMyHomework.co',
    }
  }

  return {
    title: `${writer.name} - Expert Writer | DoMyHomework.co`,
    description: `Hire ${writer.name}, expert in ${writer.specializations.slice(0, 2).join(' and ')}. ${writer.bio.substring(0, 150)}...`,
    keywords: `${writer.name}, ${writer.specializations.join(', ')}, academic writer, homework help`,
    authors: [{ name: 'DoMyHomework.co' }],
    creator: 'DoMyHomework.co',
    publisher: 'DoMyHomework.co',
    robots: 'index, follow',
    alternates: {
      canonical: `https://domyhomework.co/top-writers/${slug}`,
    },
    openGraph: {
      type: 'profile',
      locale: 'en_US',
      url: `https://domyhomework.co/top-writers/${slug}`,
      siteName: 'DoMyHomework.co',
      title: `${writer.name} - Expert Writer`,
      description: `Hire ${writer.name} for professional academic writing services.`,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${writer.name} - DoMyHomework.co`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${writer.name} | DoMyHomework.co`,
      description: `Expert in ${writer.specializations.slice(0, 2).join(' & ')}`,
      images: ['/twitter-image.jpg'],
    },
  }
}

// Generate breadcrumb structured data
async function generateStructuredData(params: Promise<{ slug: string }>) {
  const { slug } = await params
  const writer = writersData.find((w: Writer) => w.id === slug)
  
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
    "jobTitle": "Academic Writer",
    "description": writer.bio,
    "knowsAbout": writer.specializations
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
  return writersData.map((writer: Writer) => ({
    slug: writer.id,
  }))
}