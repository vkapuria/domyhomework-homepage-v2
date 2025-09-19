import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Do My Homework Online | Expert Homework Help 24/7',
  description:
    'Get plagiarism-free homework help online from expert writers. Do my homework services with A+ quality, on-time delivery, and 24/7 support.',
  keywords:
    'do my homework online, homework help, pay someone to do my homework, online homework help, professional homework help, urgent homework help, homework writing service',
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
    description:
      'Plagiarism-free homework help online from qualified experts. Do my homework services with guaranteed A+ results, secure payments, and round-the-clock support.',
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
    description:
      'Get expert homework help online. Plagiarism-free, original, and on-time homework solutions from professional writers.',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
