import './globals.css'
import type { Metadata } from 'next'
import { Navigation } from '@memes/ui'

export const metadata: Metadata = {
  title: '⭐ The More You Know',
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
    url: 'https://www.themoreyouknow.meme',
    title: '⭐ The More You Know',
    description: '',
    images: [{
      url: 'https://www.themoreyouknow.meme/themoreyouknow.jpg',
      width: 1200,
      height: 1200,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '⭐ The More You Know',
    description: '',
    images: ['https://www.themoreyouknow.meme/themoreyouknow.jpg'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '⭐ The More You Know',
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
        <Navigation emoji="⭐" />
        {children}
      </body>
    </html>
  )
} 