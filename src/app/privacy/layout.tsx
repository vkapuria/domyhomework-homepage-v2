import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - DoMyHomework.co',
  description: 'Learn how DoMyHomework.co collects, uses, and protects your personal information. Your privacy and security are our top priorities.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://domyhomework.co/privacy',
  },
}

// Generate structured data for Privacy Policy
function generatePrivacyStructuredData() {
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
        "name": "Privacy Policy",
        "item": "https://domyhomework.co/privacy"
      }
    ]
  }

  const privacyPolicySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - DoMyHomework.co",
    "url": "https://domyhomework.co/privacy",
    "dateModified": "2025-01-01",
    "inLanguage": "en",
    "description": "DoMyHomework.co Privacy Policy: Your data is safe, payments secure, and information never shared or sold.",
    "publisher": {
      "@type": "Organization",
      "name": "DoMyHomework.co",
      "url": "https://domyhomework.co",
      "logo": {
        "@type": "ImageObject",
        "url": "https://domyhomework.co/logo.png"
      }
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is my information kept private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We keep your academic details, orders, and contact info 100% confidential. Your school or college will never know you used our services."
          }
        },
        {
          "@type": "Question",
          "name": "How safe are my payments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All payments are encrypted and securely processed through PCI-DSS compliant payment gateways. We never store raw card details."
          }
        },
        {
          "@type": "Question",
          "name": "Do you sell my data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. We never sell your personal information to advertisers or third parties. Your privacy is our top priority."
          }
        }
      ]
    }
  }

  return [breadcrumbSchema, privacyPolicySchema]
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generatePrivacyStructuredData()

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