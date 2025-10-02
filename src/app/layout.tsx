import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Do My Homework Online | Expert Homework Help 24/7',
  description: 'Expert homework help online. Plagiarism-free, A+ quality work with 24/7 support. Get assignments done by qualified writers.',
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
    description: 'Expert homework help online. Plagiarism-free, A+ quality work with 24/7 support. Get assignments done by qualified writers.',
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
    description: 'Expert homework help online. Plagiarism-free, A+ quality work with 24/7 support. Get assignments done by qualified writers.',
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Online Homework Help Service",
    "description": "Professional homework writing and academic assistance service with 24/7 support, plagiarism-free guarantee, and expert writers.",
    "provider": {
      "@type": "Organization",
      "name": "DoMyHomework.co"
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://domyhomework.co",
      "availableLanguage": "English"
    },
    "serviceType": "Academic Writing Service",
    "offers": {
      "@type": "Offer",
      "price": "12",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

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
        "name": "Do My Homework Online",
        "item": "https://domyhomework.co"
      }
    ]
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
      "url": "https://order.domyhomework.co/",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2025-12-31"
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

  return [organizationSchema, serviceSchema, breadcrumbSchema, productSchema, faqSchema];
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
      <meta name="format-detection" content="telephone=no" />
      <meta name="referrer" content="origin-when-cross-origin" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
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
