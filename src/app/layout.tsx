import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Surprised Pikachu Meme',
  description: 'The classic surprised Pikachu meme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="bg-gray-900 w-full h-full">{children}</body>
    </html>
  )
} 