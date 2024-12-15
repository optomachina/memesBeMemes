'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const tooltipTimeoutRef = useRef<NodeJS.Timeout>()
  const imageRef = useRef<HTMLImageElement>(null)

  const showTooltipAt = (x: number, y: number) => {
    setTooltipPosition({ x, y })
    setShowTooltip(true)
    if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current)
    tooltipTimeoutRef.current = setTimeout(() => setShowTooltip(false), 2000)
  }

  const copyImage = async (e: MouseEvent | TouchEvent) => {
    if (!imageRef.current) return

    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY

    try {
      const response = await fetch(imageRef.current.src)
      const blob = await response.blob()
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ])
      showTooltipAt(clientX, clientY)
    } catch (err) {
      try {
        const canvas = document.createElement('canvas')
        canvas.width = imageRef.current.naturalWidth
        canvas.height = imageRef.current.naturalHeight
        const ctx = canvas.getContext('2d')
        if (!ctx) throw new Error('Could not get canvas context')
        ctx.drawImage(imageRef.current, 0, 0)
        canvas.toBlob(async (blob) => {
          if (!blob) return
          try {
            await navigator.clipboard.write([
              new ClipboardItem({
                [blob.type]: blob
              })
            ])
            showTooltipAt(clientX, clientY)
          } catch (err) {
            navigator.clipboard.writeText(window.location.origin + imageRef.current!.src)
              .then(() => showTooltipAt(clientX, clientY))
          }
        })
      } catch (err) {
        navigator.clipboard.writeText(window.location.origin + imageRef.current.src)
          .then(() => showTooltipAt(clientX, clientY))
      }
    }
  }

  useEffect(() => {
    const image = imageRef.current
    if (!image) return

    let touchTimeout: NodeJS.Timeout

    const handleTouchStart = (e: TouchEvent) => {
      touchTimeout = setTimeout(() => {
        copyImage(e)
      }, 500)
    }

    const clearTouchTimeout = () => {
      if (touchTimeout) clearTimeout(touchTimeout)
    }

    image.addEventListener('touchstart', handleTouchStart as any)
    image.addEventListener('touchend', clearTouchTimeout)
    image.addEventListener('touchmove', clearTouchTimeout)
    document.addEventListener('click', copyImage as any)

    return () => {
      image.removeEventListener('touchstart', handleTouchStart as any)
      image.removeEventListener('touchend', clearTouchTimeout)
      image.removeEventListener('touchmove', clearTouchTimeout)
      document.removeEventListener('click', copyImage as any)
    }
  }, [])

  return (
    <main>
      <div className="hero" id="top">
        <Image
          ref={imageRef as any}
          src="/surprisedPikachu.jpg"
          alt=":o"
          fill
          className="object-contain"
          priority
          quality={100}
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