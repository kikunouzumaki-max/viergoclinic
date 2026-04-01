'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'

interface ImageSwiperProps {
  images: string[]
  cardWidth?: number
  cardHeight?: number
  className?: string
}

export function ImageSwiper({
  images,
  cardWidth = 260,
  cardHeight = 360,
  className = '',
}: ImageSwiperProps) {
  const cardStackRef = useRef<HTMLDivElement>(null)
  const isSwiping = useRef(false)
  const startX = useRef(0)
  const currentX = useRef(0)
  const animationFrameId = useRef<number | null>(null)

  const [cardOrder, setCardOrder] = useState<number[]>(() =>
    Array.from({ length: images.length }, (_, i) => i)
  )

  const getCards = useCallback((): HTMLElement[] => {
    if (!cardStackRef.current) return []
    return [...cardStackRef.current.querySelectorAll<HTMLElement>('.swiper-card')]
  }, [])

  const getActiveCard = useCallback((): HTMLElement | null => {
    return getCards()[0] ?? null
  }, [getCards])

  const updatePositions = useCallback(() => {
    getCards().forEach((card, i) => {
      card.style.setProperty('--i', (i + 1).toString())
      card.style.setProperty('--swipe-x', '0px')
      card.style.setProperty('--swipe-rotate', '0deg')
      card.style.opacity = '1'
    })
  }, [getCards])

  const applySwipeStyles = useCallback((deltaX: number) => {
    const card = getActiveCard()
    if (!card) return
    card.style.setProperty('--swipe-x', `${deltaX}px`)
    card.style.setProperty('--swipe-rotate', `${deltaX * 0.15}deg`)
    card.style.opacity = String(1 - Math.min(Math.abs(deltaX) / 120, 1) * 0.7)
  }, [getActiveCard])

  const handleEnd = useCallback(() => {
    if (!isSwiping.current) return
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current)
      animationFrameId.current = null
    }

    const deltaX = currentX.current - startX.current
    const threshold = 60
    const card = getActiveCard()

    if (card) {
      card.style.transition = 'transform 0.3s ease, opacity 0.3s ease'

      if (Math.abs(deltaX) > threshold) {
        const dir = Math.sign(deltaX)
        card.style.setProperty('--swipe-x', `${dir * 350}px`)
        card.style.setProperty('--swipe-rotate', `${dir * 20}deg`)

        setTimeout(() => {
          setCardOrder((prev) => [...prev.slice(1), prev[0]])
        }, 300)
      } else {
        applySwipeStyles(0)
      }
    }

    isSwiping.current = false
    startX.current = 0
    currentX.current = 0
  }, [getActiveCard, applySwipeStyles])

  const handleMove = useCallback((clientX: number) => {
    if (!isSwiping.current) return
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    animationFrameId.current = requestAnimationFrame(() => {
      currentX.current = clientX
      applySwipeStyles(currentX.current - startX.current)
      if (Math.abs(currentX.current - startX.current) > 60) handleEnd()
    })
  }, [applySwipeStyles, handleEnd])

  const handleStart = useCallback((clientX: number) => {
    if (isSwiping.current) return
    isSwiping.current = true
    startX.current = clientX
    currentX.current = clientX
    const card = getActiveCard()
    if (card) card.style.transition = 'none'
  }, [getActiveCard])

  useEffect(() => {
    const el = cardStackRef.current
    if (!el) return
    const down = (e: PointerEvent) => handleStart(e.clientX)
    const move = (e: PointerEvent) => handleMove(e.clientX)
    const up   = ()               => handleEnd()
    el.addEventListener('pointerdown', down)
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerup', up)
    return () => {
      el.removeEventListener('pointerdown', down)
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerup', up)
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [handleStart, handleMove, handleEnd])

  useEffect(() => { updatePositions() }, [cardOrder, updatePositions])

  return (
    <div
      ref={cardStackRef}
      className={`relative select-none ${className}`}
      style={{
        width: cardWidth + 48,
        height: cardHeight + 48,
        touchAction: 'none',
        perspective: '800px',
      }}
    >
      {cardOrder.map((originalIndex, displayIndex) => (
        <div
          key={`${images[originalIndex]}-${originalIndex}`}
          className="swiper-card absolute inset-0 m-auto cursor-grab active:cursor-grabbing rounded-brand-lg overflow-hidden border border-rosewood-pale/40 shadow-lg will-change-transform"
          style={{
            '--i': displayIndex + 1,
            zIndex: images.length - displayIndex,
            width: cardWidth,
            height: cardHeight,
            transform: `perspective(800px)
              translateZ(calc(-12px * var(--i, 1)))
              translateY(calc(7px * var(--i, 1)))
              translateX(var(--swipe-x, 0px))
              rotateY(var(--swipe-rotate, 0deg))`,
          } as React.CSSProperties}
        >
          <img
            src={images[originalIndex]}
            alt={`Gallery ${originalIndex + 1}`}
            className="w-full h-full object-cover pointer-events-none select-none"
            draggable={false}
          />
        </div>
      ))}
    </div>
  )
}
