import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter, Italiana } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const italiana = Italiana({
  subsets: ['latin'],
  variable: '--font-italiana',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'M & Co. Hair Salon | Roxbury, Boston',
    template: '%s | M & Co. Hair Salon',
  },
  description:
    'M & Co. Hair Salon is a Black-owned luxury hair salon in Roxbury, Boston. Specializing in textured hair, protective styles, precision cuts, color, and natural hair care.',
  keywords: [
    'hair salon Roxbury',
    'Black-owned hair salon Boston',
    'natural hair care Boston',
    'protective styles Roxbury',
    'braids Boston',
    'luxury hair salon',
  ],
  openGraph: {
    title: 'M & Co. Hair Salon | Roxbury, Boston',
    description:
      'Where Beauty Meets Artistry. A Black-owned luxury hair salon in Roxbury, Boston.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${cormorantGaramond.variable} ${inter.variable} ${italiana.variable}`}
    >
      <body className="bg-[#0A0A0A] text-[#FAF7F0] antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
