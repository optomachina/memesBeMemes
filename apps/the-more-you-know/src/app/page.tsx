'use client'

import { MemeHero, MemeShop, type Product } from '@memes/ui'

const products: Product[] = [
  {
    imagePath: '/themoreyouknow.jpg',
    title: 'Knowledge Mug',
    price: 14.99,
    alt: 'The More You Know Mug'
  },
  {
    imagePath: '/themoreyouknow.jpg',
    title: 'Knowledge Shirt',
    price: 24.99,
    alt: 'The More You Know T-Shirt'
  },
  {
    imagePath: '/themoreyouknow.jpg',
    title: 'Knowledge Sticker',
    price: 4.99,
    alt: 'The More You Know Sticker'
  }
]

export default function Home() {
  return (
    <main>
      <MemeHero imagePath="/themoreyouknow.jpg" alt="⭐" />
      <MemeShop products={products} />
    </main>
  )
} 