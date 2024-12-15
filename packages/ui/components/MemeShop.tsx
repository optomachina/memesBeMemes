'use client'

import Image from 'next/image'

interface Product {
  imagePath: string
  title: string
  price: number
  alt: string
}

interface MemeShopProps {
  products: Product[]
}

export function MemeShop({ products }: MemeShopProps) {
  return (
    <div className="shop-grid" id="shop">
      {products.map((product, index) => (
        <div key={index} className="product">
          <Image
            src={product.imagePath}
            alt={product.alt}
            width={300}
            height={300}
            className="object-cover"
          />
          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="buy-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
} 