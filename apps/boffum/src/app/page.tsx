'use client'

import { MemeHero, MemeShop, type Product } from '@memes/ui'

const products: Product[] = [
  {
    imagePath: '/boffum.jpg',
    title: 'Boffum Mug',
    price: 14.99,
    alt: 'Boffum Mug'
  },
  {
    imagePath: '/boffum.jpg',
    title: 'Boffum Shirt',
    price: 24.99,
    alt: 'Boffum T-Shirt'
  },
  {
    imagePath: '/boffum.jpg',
    title: 'Boffum Sticker',
    price: 4.99,
    alt: 'Boffum Sticker'
  }
]

export default function Home() {
  return (
    <main>
      <MemeHero imagePath="/boffum.jpg" />
      <MemeShop products={products} />
    </main>
  )
} 