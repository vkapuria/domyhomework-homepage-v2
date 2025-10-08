import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Top Expert Writers - Professional Homework Help | DoMyHomework.co',
  description: 'Meet our verified expert writers with advanced degrees. 500+ qualified professionals ready to help with your homework across 100+ subjects.',
  keywords: 'expert writers, homework experts, academic writers, professional tutors, qualified experts',
  authors: [{ name: 'DoMyHomework.co' }],
  creator: 'DoMyHomework.co',
  publisher: 'DoMyHomework.co',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://domyhomework.co/top-writers',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://domyhomework.co/top-writers',
    siteName: 'DoMyHomework.co',
    title: 'Top Expert Writers - Professional Homework Help',
    description: 'Meet our verified expert writers. PhD and Master's qualified professionals ready to help.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DoMyHomework.co Top Writers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Expert Writers | DoMyHomework.co',
    description: 'Meet our verified expert writers with advanced degrees.',
    images: ['/twitter-image.jpg'],
  },
  other: {
    'theme-color': '#8300e9',
  },
}

// Generate breadcrumb structured data
function generateBreadcrumbSchema() {
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
      }
    ]
  }

  return [breadcrumbSchema]
}

export default function TopWritersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generateBreadcrumbSchema()

  return (
    <>
      {/* Add structured data */}
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