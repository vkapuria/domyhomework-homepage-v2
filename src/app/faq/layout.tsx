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

// ✅ Simple layout - no structured data
export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}