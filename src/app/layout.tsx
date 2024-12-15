import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: ':o',
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
    url: 'https://www.surprisedpikachu.meme',
    title: '',
    description: '',
    images: [{
      url: 'https://www.surprisedpikachu.meme/surprisedPikachu.jpg',
      width: 1200,
      height: 1200,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '',
    description: '',
    images: ['https://www.surprisedpikachu.meme/surprisedPikachu.jpg'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '',
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
        <nav className="nav">
          <a href="#top" style={{ color: '#000' }}>:o</a>
          <a href="#shop">shop</a>
        </nav>
        {children}
      </body>
    </html>
  )
} 