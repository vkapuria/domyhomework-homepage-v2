import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
    google: '6Xh8UU2ZWVLITjkYX53GdpS4OVueyBg9ho1mxnj1IQ0',
  },
  other: {
    'theme-color': '#8300e9',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <script 
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="0c039096-8034-4264-9f1c-be8364e51aba";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`
          }}
        />
      </head>
      <body className={inter.className}>
        {/* GTM NoScript (fallback) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KLFHQFR"
            height="0" 
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />
        {children}
        <Footer />

        {/* GTM Script - Must be in body, not head */}
        <Script 
          id="gtm-script" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KLFHQFR');
            `,
          }}
        />
      </body>
    </html>
  )
}