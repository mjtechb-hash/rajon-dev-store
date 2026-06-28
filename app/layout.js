import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata = {
  title: 'Rajon Dev Store - Premium MOD APK',
  description: 'Download safe & customized MOD APKs for free. Premium unlocked apps and games.',
  keywords: 'MOD APK, premium apps, Rajon Dev Store, free APK download',
  authors: [{ name: 'Rajon Ai Dev' }],
  openGraph: {
    title: 'Rajon Dev Store - Premium MOD APK',
    description: 'Download safe & customized MOD APKs for free.',
    url: 'https://rajondevstore.vercel.app',
    siteName: 'Rajon Dev Store',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajon Dev Store - Premium MOD APK',
    description: 'Download safe & customized MOD APKs for free.',
  },
  metadataBase: new URL('https://rajondevstore.vercel.app'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <meta name="theme-color" content="#050811" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
      </head>
      <body className={jakarta.className}>
        {children}
      </body>
    </html>
  )
}
