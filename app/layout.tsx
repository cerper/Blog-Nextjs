import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/index'
import Footer from '@/components/Footer'
import { cx } from '../components/utils'
import { siteMetaData } from '../components/utils/metaSiteMap'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-in',
})
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mr',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetaData.title}`,
    default: siteMetaData.title, // a default is required when creating a template
  },

  metadataBase: new URL(siteMetaData.siteUrl),
  description: siteMetaData.description,
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    images: [siteMetaData.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetaData.title,
    images: [siteMetaData.socialBanner], // Must be an absolute URL
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cx(inter.variable, manrope.variable, 'font-mr bg-light')}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
