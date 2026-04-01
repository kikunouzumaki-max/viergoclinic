'use client'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface InfiniteSliderProps {
  children: React.ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 40,
  speedOnHover,
  className,
}: InfiniteSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (!trackRef.current || speedOnHover === undefined) return
    trackRef.current.style.animationDuration = `${speedOnHover}s`
  }

  const handleMouseLeave = () => {
    if (!trackRef.current) return
    trackRef.current.style.animationDuration = `${speed}s`
  }

  return (
    <div
      className={cn('overflow-hidden w-full', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden
    >
      <div
        ref={trackRef}
        className="flex w-max animate-[infinite-scroll_linear_infinite]"
        style={{
          gap,
          animationDuration: `${speed}s`,
        }}
      >
        {/* Render twice for seamless loop */}
        {children}
        {children}
      </div>
    </div>
  )
}
