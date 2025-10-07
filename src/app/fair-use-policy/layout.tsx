import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fair Use Policy - DoMyHomework.co',
  description: 'Learn how to properly use academic materials from DoMyHomework.co. Our Fair Use Policy outlines ethical guidelines for using our services as educational resources.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://domyhomework.co/fair-use-policy',
  },
}

// Generate structured data
function generateFairUseStructuredData() {
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
        "name": "Fair Use Policy",
        "item": "https://domyhomework.co/fair-use-policy"
      }
    ]
  }

  return [breadcrumbSchema]
}

export default function FairUseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generateFairUseStructuredData()

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