import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works - Professional Homework Help Process | DoMyHomework.co',
  description: 'Learn how our homework help service works. Simple 3-step process: submit your task, get matched with an expert, receive completed work. Get started today.',
  keywords: 'how homework help works, academic assistance process, homework service steps, professional homework help, how to get homework done',
  authors: [{ name: 'DoMyHomework.co' }],
  creator: 'DoMyHomework.co',
  publisher: 'DoMyHomework.co',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://domyhomework.co/how-it-works',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://domyhomework.co/how-it-works',
    siteName: 'DoMyHomework.co',
    title: 'How Our Homework Help Service Works | DoMyHomework.co',
    description: 'Simple 3-step process to get expert homework help. Trusted by thousands of students worldwide.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How Our Homework Help Works - DoMyHomework.co',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Our Homework Help Service Works | DoMyHomework.co',
    description: 'Simple 3-step process to get expert homework help. Trusted by thousands of students worldwide.',
    images: ['/twitter-image.jpg'],
  },
  other: {
    'theme-color': '#8300e9',
  },
}

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}