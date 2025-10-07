import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Money Back Guarantee - DoMyHomework.co',
  description: 'Our Money Back Guarantee ensures quality work or your money back. Learn about our refund policy, eligibility criteria, and how to request a refund.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://domyhomework.co/money-back-guarantee',
  },
}

// Generate structured data
function generateGuaranteeStructuredData() {
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
        "name": "Money Back Guarantee",
        "item": "https://domyhomework.co/money-back-guarantee"
      }
    ]
  }

  return [breadcrumbSchema]
}

export default function GuaranteeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generateGuaranteeStructuredData()

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