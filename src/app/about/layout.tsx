import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Expert Homework Help Team | DoMyHomework.co',
  description: 'Learn about DoMyHomework.co - our mission, values, expert selection process, and commitment to student success. Meet the team helping thousands of students excel academically.',
  keywords: 'about domyhomework, homework help team, academic assistance experts, student support mission',
  authors: [{ name: 'DoMyHomework.co' }],
  creator: 'DoMyHomework.co',
  publisher: 'DoMyHomework.co',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://domyhomework.co/about',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://domyhomework.co/about',
    siteName: 'DoMyHomework.co',
    title: 'About DoMyHomework.co - Your Academic Success Partner',
    description: 'Discover our mission to help students succeed. Rigorous expert selection, 24/7 support, and commitment to quality.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DoMyHomework.co About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About DoMyHomework.co',
    description: 'Meet the team dedicated to your academic success',
    images: ['/twitter-image.jpg'],
  },
  other: {
    'theme-color': '#8300e9',
  },
}

// Generate structured data
function generateAboutStructuredData() {
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
        "name": "About Us",
        "item": "https://domyhomework.co/about"
      }
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DoMyHomework.co",
    "url": "https://domyhomework.co",
    "logo": "https://domyhomework.co/logo.png",
    "description": "Professional academic assistance platform helping students excel in their studies with expert homework help, writing services, and tutoring support.",
    "foundingDate": "2020",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 500
    },
    "areaServed": "Worldwide",
    "sameAs": [
      "https://facebook.com/domyhomework",
      "https://twitter.com/domyhomework",
      "https://linkedin.com/company/domyhomework"
    ]
  }

  return [breadcrumbSchema, organizationSchema]
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generateAboutStructuredData()

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