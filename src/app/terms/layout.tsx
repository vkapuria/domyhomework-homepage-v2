import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions - DoMyHomework.co',
  description: 'Read our terms of service for using DoMyHomework.co academic assistance services. Understand your rights, our responsibilities, and service policies.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://domyhomework.co/terms',
  },
}

// Generate structured data for Terms and Conditions
function generateTermsStructuredData() {
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
        "name": "Terms and Conditions",
        "item": "https://domyhomework.co/terms"
      }
    ]
  }

  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms and Conditions - DoMyHomework.co",
    "url": "https://domyhomework.co/terms",
    "dateModified": "2025-01-01",
    "inLanguage": "en",
    "description": "Terms of Service for DoMyHomework.co: Academic assistance policies, user responsibilities, and service guarantees.",
    "publisher": {
      "@type": "Organization",
      "name": "DoMyHomework.co",
      "url": "https://domyhomework.co",
      "logo": {
        "@type": "ImageObject",
        "url": "https://domyhomework.co/logo.png"
      }
    }
  }

  return [breadcrumbSchema, termsSchema]
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generateTermsStructuredData()

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