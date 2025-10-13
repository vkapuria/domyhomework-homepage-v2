import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageTemplate from '@/components/PageTemplate'
import servicePages from '@/data/servicePages.json'
import { ServicePageData } from '@/types/servicePage'
// Import at top of file

const RESERVED_SLUGS = new Set(['blog', 'api', 'sitemap.xml', 'robots.txt', 'favicon.ico', '_next'])

export async function generateStaticParams() {
  
  
  // Generate params for T1 pages
  const t1Params = servicePages.map((page) => ({
    slug: page.slug
  }))
  
  // Generate params for T2 pages
  const t2Params = tier2Config.subjects.map((subject: any) => ({
    slug: subject.slug
  }))
  
  // Combine both
  return [...t1Params, ...t2Params]
}

// Enhanced metadata function
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = servicePages.find((p) => p.slug === params.slug) as ServicePageData | undefined
  
  if (!page) {
    return {}
  }

  const pageUrl = `https://domyhomework.co/${page.slug}`
  
  return {
    title: page.title,
    description: page.metaDescription,
    keywords: `${page.focusKeyword}, homework help, academic assistance, ${page.focusKeyword} online, professional homework help`,
    authors: [{ name: 'DoMyHomework.co' }],
    creator: 'DoMyHomework.co',
    publisher: 'DoMyHomework.co',
    robots: 'index, follow',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: pageUrl,
      siteName: 'DoMyHomework.co',
      title: page.title,
      description: page.metaDescription,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${page.title} - DoMyHomework.co`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.metaDescription,
      images: ['/twitter-image.jpg'],
    },
    other: {
      'theme-color': '#8300e9',
    },
  }
}

// Generate service-specific structured data
function generateServiceStructuredData(page: ServicePageData) {
  const pageUrl = `https://domyhomework.co/${page.slug}`

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": page.title,
    "description": page.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "DoMyHomework.co",
      "url": "https://domyhomework.co"
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": pageUrl,
      "availableLanguage": "English"
    },
    "serviceType": "Academic Writing Service",
    "offers": {
      "@type": "Offer",
      "price": "12",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://order.domyhomework.co"
    }
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
        "name": page.title,
        "item": pageUrl
      }
    ]
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": page.title,
    "image": "https://domyhomework.co/icons/DMH-Logo.png",
    "description": page.metaDescription,
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
      "url": "https://order.domyhomework.co",
      "validFrom": "2024-01-01",
      "priceValidUntil": "2025-12-31"
    }
  }

  return [serviceSchema, breadcrumbSchema, productSchema]
}

// Import the new files at the top
import tier2Template from '@/data/templates/tier2-template.json'
import tier2Config from '@/data/configs/tier2-subjects.json'
import { mergeTemplateWithSubject } from '@/lib/mergeTemplate'

export default function ServicePage({ params }: { params: { slug: string } }) {
  if (RESERVED_SLUGS.has(params.slug)) {
    return notFound()
  }

  // First, check if it's a T1 page (existing servicePages.json)
  let page = servicePages.find((p) => p.slug === params.slug) as ServicePageData | undefined

  // If not found, check if it's a T2 page (template-based)
  if (!page) {
    const subject = tier2Config.subjects.find((s: any) => s.slug === params.slug)
    
    if (subject) {
      // Merge template with subject config
      page = mergeTemplateWithSubject(tier2Template, subject)
    }
  }

  // If still not found, return 404
  if (!page) {
    return notFound()
  }
  const structuredData = generateServiceStructuredData(page)

  return (
    <>
      {/* Add structured data for this specific page */}
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PageTemplate data={page} />
    </>
  )
}