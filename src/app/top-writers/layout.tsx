import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Do My Homework Online | Expert Homework Help 24/7',
  description: 'Expert homework help online. Plagiarism-free, A+ quality work with 24/7 support. Get assignments done by qualified writers.',
  keywords: 'do my homework online, homework help, pay someone to do my homework, online homework help, professional homework help, urgent homework help, homework writing service',
  authors: [{ name: 'DoMyHomework.co' }],
  creator: 'DoMyHomework.co',
  publisher: 'DoMyHomework.co',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://domyhomework.co/', // ✅ FIXED: Added trailing slash
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://domyhomework.co/', // ✅ FIXED: Added trailing slash
    siteName: 'DoMyHomework.co',
    title: 'Do My Homework Online | Expert Homework Help 24/7',
    description: 'Expert homework help online. Plagiarism-free, A+ quality work with 24/7 support. Get assignments done by qualified writers.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DoMyHomework.co - Homework Help Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Do My Homework Online | Expert Homework Help 24/7',
    description: 'Expert homework help online. Plagiarism-free, A+ quality work with 24/7 support. Get assignments done by qualified writers.',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: '6Xh8UU2ZWVLITjkYX53GdpS4OVueyBg9ho1mxnj1IQ0',
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