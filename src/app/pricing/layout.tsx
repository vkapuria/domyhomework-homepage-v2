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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does homework help cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing starts at $12 per page for high school level work with a 14-day deadline. Prices vary based on academic level (high school, bachelor's, master's, PhD), deadline urgency, and assignment complexity. We offer bulk discounts: 10% off for 5-9 pages, 15% off for 10-14 pages, and 20% off for 15+ pages."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any hidden fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All prices shown include everything - research, writing, formatting, title page, and bibliography. The only additional costs would be optional extras you specifically choose, like VIP support or progressive delivery."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer discounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer automatic bulk discounts: 10% off for 5-9 pages, 15% off for 10-14 pages, and 20% off for 15+ pages. First-time customers also receive a welcome discount. Check our calculator for exact pricing with discounts applied."
        }
      }
    ]
  }

  return [priceSpecification, breadcrumbSchema, faqSchema]
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