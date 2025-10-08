import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | DoMyHomework.co',
  description: 'Find answers to common questions about our homework help services, pricing, quality guarantees, delivery, and more. Get instant support for all your academic needs.',
  keywords: 'homework help FAQ, academic assistance questions, homework service support, student help questions',
  authors: [{ name: 'DoMyHomework.co' }],
  creator: 'DoMyHomework.co',
  publisher: 'DoMyHomework.co',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://domyhomework.co/faq',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://domyhomework.co/faq',
    siteName: 'DoMyHomework.co',
    title: 'FAQ - DoMyHomework.co Help Center',
    description: 'Get answers to all your questions about homework help, pricing, delivery, and quality guarantees.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DoMyHomework.co FAQ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - DoMyHomework.co',
    description: 'Common questions about homework help services answered.',
    images: ['/twitter-image.jpg'],
  },
  other: {
    'theme-color': '#8300e9',
  },
}

// Generate structured data
function generateFAQStructuredData() {
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
        "name": "FAQ",
        "item": "https://domyhomework.co/faq"
      }
    ]
  }

  // FAQ Schema with actual questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is DoMyHomework.co?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DoMyHomework.co is a professional academic assistance platform that connects students with qualified experts who can help with homework, essays, research papers, and other assignments. We provide high-quality, original work tailored to your specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Is DoMyHomework.co legit and legal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, DoMyHomework.co is 100% legitimate and legal. We provide academic assistance services as reference materials and study guides. Our service operates transparently and complies with all applicable laws."
        }
      },
      {
        "@type": "Question",
        "name": "How much does homework help cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing depends on academic level, deadline, complexity, and length. Prices typically range from $15-50 per page. Use our pricing calculator for an instant quote based on your specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can you complete my homework?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer flexible deadlines: Express (as fast as 6 hours), Standard (1-3 days), and Extended (up to 2 weeks). Pricing varies based on urgency - longer deadlines are more affordable."
        }
      },
      {
        "@type": "Question",
        "name": "Is the work 100% original and plagiarism-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Every assignment is written from scratch specifically for you. We guarantee 100% original, plagiarism-free content scanned through premium detection software. We can provide an originality report upon request."
        }
      },
      {
        "@type": "Question",
        "name": "Do you use AI to write assignments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No! All work is written by real human experts. We do not use ChatGPT, AI writing tools, or automated content generation. Our experts conduct genuine research and craft original responses."
        }
      },
      {
        "@type": "Question",
        "name": "What is your money-back guarantee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a comprehensive money-back guarantee. You can request a full or partial refund if we fail to deliver by deadline, work doesn't meet requirements after revisions, or there are severe unresolved quality issues."
        }
      },
      {
        "@type": "Question",
        "name": "Is my personal information confidential?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Your personal information is never shared with third parties. We don't contact your school, experts only see necessary information, and all data is encrypted and securely stored."
        }
      },
      {
        "@type": "Question",
        "name": "How many free revisions do I get?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlimited free revisions within our revision period: 14 days for orders up to 10 pages, 30 days for orders over 10 pages. Revisions must stay within scope of original instructions."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and PayPal. All transactions are processed through secure, encrypted payment gateways."
        }
      }
    ]
  }

  return [breadcrumbSchema, faqSchema]
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generateFAQStructuredData()

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