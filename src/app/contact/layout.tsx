import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get Help with Your Homework | DoMyHomework.co',
  description: 'Need help? Contact our 24/7 support team for homework assistance, order questions, or general inquiries. Average response time: 1 hour.',
  keywords: 'contact homework help, student support, academic assistance contact, homework help support',
  authors: [{ name: 'DoMyHomework.co' }],
  creator: 'DoMyHomework.co',
  publisher: 'DoMyHomework.co',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://domyhomework.co/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://domyhomework.co/contact',
    siteName: 'DoMyHomework.co',
    title: 'Contact Us - 24/7 Homework Help Support',
    description: 'Get in touch with our expert support team. We respond to all inquiries within 1 hour.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DoMyHomework.co Contact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact DoMyHomework.co - 24/7 Support',
    description: 'Questions about homework help? We respond within 1 hour.',
    images: ['/twitter-image.jpg'],
  },
  other: {
    'theme-color': '#8300e9',
  },
}

// Generate structured data
function generateContactStructuredData() {
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
        "name": "Contact",
        "item": "https://domyhomework.co/contact"
      }
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DoMyHomework.co",
    "url": "https://domyhomework.co",
    "logo": "https://domyhomework.co/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "orders@domyhomework.co",
        "contactType": "Customer Service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "writers@domyhomework.co",
        "contactType": "Recruitment",
        "areaServed": "Worldwide",
        "availableLanguage": "English"
      }
    ]
  }

  return [breadcrumbSchema, organizationSchema]
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generateContactStructuredData()

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