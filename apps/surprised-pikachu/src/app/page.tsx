'use client'

import { MemeHero, MemeShop, type Product } from '@memes/ui'

const products: Product[] = [
  {
    imagePath: '/surprisedPikachu.jpg',
    title: 'Surprised Mug',
    price: 14.99,
    alt: 'Surprised Pikachu Mug'
  },
  {
    imagePath: '/surprisedPikachu.jpg',
    title: 'Surprised Shirt',
    price: 24.99,
    alt: 'Surprised Pikachu T-Shirt'
  },
  {
    imagePath: '/surprisedPikachu.jpg',
    title: 'Surprised Sticker',
    price: 4.99,
    alt: 'Surprised Pikachu Sticker'
  }
]

export default function Home() {
  return (
    <main>
      <MemeHero imagePath="/surprisedPikachu.jpg" />
      <MemeShop products={products} />
    </main>
  )
}