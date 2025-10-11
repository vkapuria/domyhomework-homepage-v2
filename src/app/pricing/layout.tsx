import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Affordable Homework Help Rates | DoMyHomework.co',
  description: 'Transparent pricing for homework help services. Starting at $12/page with bulk discounts. No hidden fees, free revisions, and money-back guarantee.',
  keywords: 'homework help pricing, academic writing rates, assignment help cost, student pricing, affordable homework service',
  authors: [{ name: 'DoMyHomework.co' }],
  creator: 'DoMyHomework.co',
  publisher: 'DoMyHomework.co',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://domyhomework.co/pricing',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://domyhomework.co/pricing',
    siteName: 'DoMyHomework.co',
    title: 'Transparent Pricing for Homework Help Services',
    description: 'Get quality homework help at student-friendly rates. Starting at $12/page with volume discounts and no hidden fees.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DoMyHomework.co Pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homework Help Pricing | DoMyHomework.co',
    description: 'Transparent, student-friendly pricing starting at $12/page. No hidden fees.',
    images: ['/twitter-image.jpg'],
  },
  other: {
    'theme-color': '#8300e9',
  },
}

// Generate structured data
function generatePricingStructuredData() {
  const priceSpecification = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "price": "12.00",
    "priceCurrency": "USD",
    "valueAddedTaxIncluded": false,
    "billingIncrement": "1",
    "unitText": "page"
  }

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
        "name": "Pricing",
        "item": "https://domyhomework.co/pricing"
      }
    ]
  }

  return [priceSpecification, breadcrumbSchema]
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generatePricingStructuredData()

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