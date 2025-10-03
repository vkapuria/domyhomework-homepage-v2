import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import Guarantees from '@/components/Guarantees'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import PricingSection from '@/components/PricingSection'

// Homepage structured data
function generateHomepageStructuredData() {
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
    "description": "Original, A+ grade homework help by PhD experts at DoMyHomework.co. Alleviate student stress with plagiarism-free, human-written papers, timely delivery, and academic success guarantees.",
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

export default function Home() {
  const structuredData = generateHomepageStructuredData();

  return (
    <>
      {/* Homepage structured data */}
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="min-h-screen" id="main-content" role="main">
        <Hero />
        <Testimonials />
        <Benefits />
        <HowItWorks />
        <Services />
        <PricingSection />
        <Guarantees />
        <FAQ />
      </main>
    </>
  )
}