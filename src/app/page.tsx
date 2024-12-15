'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { MouseEvent, TouchEvent } from 'react'

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const tooltipTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  const showTooltipAt = (x: number, y: number, message: string = 'Copied!') => {
    setTooltipPosition({ x, y })
    setShowTooltip(true)
    if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current)
    tooltipTimeoutRef.current = setTimeout(() => setShowTooltip(false), 2000)
  }

  const handleImageClick = async (e: MouseEvent<HTMLImageElement>) => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      showTooltipAt(e.clientX, e.clientY)
    } catch (err) {
      showTooltipAt(e.clientX, e.clientY, 'Failed to copy')
      console.error('Failed to copy:', err)
    }
  }

  const handleTouchStart = (e: TouchEvent<HTMLImageElement>) => {
    const touch = e.touches[0]
    try {
      navigator.clipboard.writeText(window.location.href)
      showTooltipAt(touch.clientX, touch.clientY)
    } catch (err) {
      showTooltipAt(touch.clientX, touch.clientY, 'Failed to copy')
      console.error('Failed to copy:', err)
    }
  }

  return (
    <main>
      <div className="hero" id="top">
        <Image
          src="/surprisedPikachu.jpg"
          alt=":o"
          fill
          className="object-contain"
          priority
          quality={100}
          onClick={handleImageClick}
          onTouchStart={handleTouchStart}
        />
        <div 
          className={`copy-tooltip ${showTooltip ? 'show' : ''}`}
          style={{
            left: `${tooltipPosition.x - 50}px`,
            top: `${tooltipPosition.y - 40}px`
          }}
        >
          Copied!
        </div>
      </div>

      <div className="shop-grid" id="shop">
        <div className="product">
          <Image
            src="/surprisedPikachu.jpg"
            alt="Surprised Pikachu Mug"
            width={300}
            height={300}
            className="object-cover"
          />
          <div className="product-info">
            <h2 className="product-title">Surprised Mug</h2>
            <p className="product-price">$14.99</p>
            <button className="buy-button">Add to Cart</button>
          </div>
        </div>

        <div className="product">
          <Image
            src="/surprisedPikachu.jpg"
            alt="Surprised Pikachu T-Shirt"
            width={300}
            height={300}
            className="object-cover"
          />
          <div className="product-info">
            <h2 className="product-title">Surprised Shirt</h2>
            <p className="product-price">$24.99</p>
            <button className="buy-button">Add to Cart</button>
          </div>
        </div>

        <div className="product">
          <Image
            src="/surprisedPikachu.jpg"
            alt="Surprised Pikachu Sticker"
            width={300}
            height={300}
            className="object-cover"
          />
          <div className="product-info">
            <h2 className="product-title">Surprised Sticker</h2>
            <p className="product-price">$4.99</p>
            <button className="buy-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </main>
  )
}