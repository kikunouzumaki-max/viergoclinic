'use client'
import { motion } from 'motion/react'
import { Star } from 'lucide-react'

export interface Testimonial {
  text: string
  name: string
  role: string
  image: string
  rating?: number
}

export function TestimonialsColumn({
  testimonials,
  duration = 15,
  className,
}: {
  testimonials: Testimonial[]
  duration?: number
  className?: string
}) {
  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        animate={{ translateY: '-50%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[0, 1].map((rep) => (
          <div key={rep} className="flex flex-col gap-5">
            {testimonials.map((t, i) => (
              <div
                key={`${rep}-${i}`}
                className="bg-warm-cream border border-fog rounded-brand-lg p-6 max-w-xs w-full"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating ?? 5 }).map((_, s) => (
                    <Star key={s} className="w-3 h-3 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-sans text-sm text-taupe leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-2.5 mt-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-sans text-sm font-medium text-espresso leading-tight">
                      {t.name}
                    </p>
                    <p className="font-sans text-xs text-taupe">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
