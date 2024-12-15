import './globals.css'
import type { Metadata } from 'next'
import { Navigation } from '@memes/ui'

export const metadata: Metadata = {
  title: 'boffum',
  description: '',
  themeColor: '#f0f0f0',
  manifest: '/assets/icons/site.webmanifest',
  icons: {
    apple: '/assets/icons/apple-touch-icon.png',
    icon: [
      { url: '/assets/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://www.boffum.meme',
    title: 'boffum',
    description: '',
    images: [{
      url: 'https://www.boffum.meme/boffum.jpg',
      width: 1200,
      height: 1200,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'boffum',
    description: '',
    images: ['https://www.boffum.meme/boffum.jpg'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'boffum',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation emoji="boffum" />
        {children}
      </body>
    </html>
  )
} 