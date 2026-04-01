import { cn } from '@/lib/utils'

interface ProgressiveBlurProps {
  direction?: 'left' | 'right' | 'top' | 'bottom'
  blurIntensity?: number
  className?: string
}

export function ProgressiveBlur({
  direction = 'left',
  blurIntensity = 1,
  className,
}: ProgressiveBlurProps) {
  const layers = 8
  const gradientDir = {
    left: 'to right',
    right: 'to left',
    top: 'to bottom',
    bottom: 'to top',
  }[direction]

  return (
    <div className={cn('pointer-events-none', className)} aria-hidden>
      {Array.from({ length: layers }).map((_, i) => {
        const blur = (blurIntensity * (i + 1)) / layers
        const startOpacity = i / layers
        const endOpacity = (i + 1) / layers
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: `linear-gradient(${gradientDir}, rgba(0,0,0,${startOpacity}) 0%, rgba(0,0,0,${endOpacity}) 100%)`,
              WebkitMaskImage: `linear-gradient(${gradientDir}, rgba(0,0,0,${startOpacity}) 0%, rgba(0,0,0,${endOpacity}) 100%)`,
            }}
          />
        )
      })}
    </div>
  )
}
