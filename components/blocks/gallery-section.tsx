'use client'
import { motion } from 'motion/react'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&fit=crop',
    alt: 'HydroFacial treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80&fit=crop',
    alt: 'Skin care treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80&fit=crop',
    alt: 'Clinic treatment room',
  },
  {
    src: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&q=80&fit=crop',
    alt: 'Facial treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80&fit=crop',
    alt: 'Beauty treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80&fit=crop',
    alt: 'Skin care',
  },
  {
    src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80&fit=crop',
    alt: 'Dermapen treatment',
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop',
    alt: 'Medical aesthetics',
  },
]

const duplicated = [...galleryImages, ...galleryImages]

export function GallerySection() {
  return (
    <section id="gallery" className="bg-cream py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="font-sans text-xs font-medium tracking-[0.14em] uppercase text-rosewood-light">
              Real Results
            </p>
            <h2 className="mt-4 font-display font-light italic text-4xl text-rosewood-deep md:text-5xl">
              From Our Clinic
            </h2>
            <p className="mt-3 font-sans text-base text-taupe max-w-md">
              Every image tells a story of transformation — real clients, real results,
              delivered by our skilled practitioners.
            </p>
          </div>
          <a
            href="https://www.instagram.com/viergo.clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-rosewood border border-rosewood-pale rounded-brand-sm px-5 py-2.5 hover:bg-blush transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            Follow on Instagram
          </a>
        </motion.div>
      </div>

      {/* Auto-scrolling strip */}
      <div className="scroll-container w-full overflow-hidden">
        <div className="infinite-scroll flex gap-4 w-max">
          {duplicated.map((img, i) => (
            <div
              key={i}
              className="image-item flex-shrink-0 w-56 h-72 md:w-72 md:h-88 rounded-brand-lg overflow-hidden border border-fog"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
