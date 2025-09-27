import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Do My Homework Online | Expert Homework Help 24/7',
  description: 'Get plagiarism-free homework help online from expert writers. Do my homework services with A+ quality, on-time delivery, and 24/7 support.',
  keywords: 'do my homework online, homework help, pay someone to do my homework, online homework help, professional homework help, urgent homework help, homework writing service',
  authors: [{ name: 'DoMyHomework.co' }],
  creator: 'DoMyHomework.co',
  publisher: 'DoMyHomework.co',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://domyhomework.co',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://domyhomework.co',
    siteName: 'DoMyHomework.co',
    title: 'Do My Homework Online | Expert Homework Help 24/7',
    description: 'Plagiarism-free homework help online from qualified experts. Do my homework services with guaranteed A+ results, secure payments, and round-the-clock support.',
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
    description: 'Get expert homework help online. Plagiarism-free, original, and on-time homework solutions from professional writers.',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: '6Xh8UU2ZWVLITjkYX53GdpS4OVueyBg9ho1mxnj1IQ0', // Replace with actual code
  },
  other: {
    'theme-color': '#8300e9',
  },
}

// Update the generateStructuredData function
function generateStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DoMyHomework.co",
    "description": "Professional homework help and academic assistance service for students worldwide.",
    "url": "https://domyhomework.co",
    "logo": "https://domyhomework.co/icons/DMH-Logo.png",
    "sameAs": [
      "https://www.facebook.com/domyhomework",
      "https://www.twitter.com/domyhomework"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English",
      "email": "order@domyhomework.co"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Do My Homework | Professional Academic Help | DoMyHomework.co",
    "image": "https://domyhomework.co/icons/DMH-Logo.png",
    "description": "Original, A+ grade homework help by PhD experts at DoMyHomework.co. Alleviate student stress with plagiarism-free, human-written papers, timely delivery, and academic success guarantees. Affordable, secure service with 24/7 support, money-back guarantee, and free revisions.",
    "brand": {
      "@type": "Brand",
      "name": "DoMyHomework.co"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.87",
      "ratingCount": "1792"
    },
    "offers": {
      "@type": "Offer",
      "price": "12",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://order.domyhomework.co/"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can you do my homework online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes – we complete homework fully online for you. Our platform matches your task with a subject expert, who delivers accurate solutions directly through our system."
        }
      },
      {
        "@type": "Question", 
        "name": "Is the homework help 100% human-written?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely – every solution is written by a real expert. We do not use AI generators; all work is custom, plagiarism-free, and checked for academic integrity."
        }
      },
      {
        "@type": "Question",
        "name": "What subjects do you cover?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cover 100+ subjects – from Math and Science to Nursing and Programming. Assignments range from essays and reports to coding projects, lab work, and case studies."
        }
      },
      {
        "@type": "Question",
        "name": "How fast can you deliver my homework?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "As fast as a few hours – for urgent homework. We also handle regular deadlines with planned scheduling to guarantee on-time delivery."
        }
      }
    ]
  };

  return [organizationSchema, productSchema, faqSchema];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = generateStructuredData();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
