export * from './components/MemeHero'
export * from './components/MemeShop'
export * from './components/Navigation'

// Re-export types
export interface Product {
  imagePath: string
  title: string
  price: number
  alt: string
} 