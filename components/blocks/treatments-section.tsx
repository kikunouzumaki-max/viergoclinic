'use client'
import { motion } from 'motion/react'
import { Sparkles, Zap, Droplets, Sun, Leaf, Activity, Wind, FlaskConical } from 'lucide-react'

const treatments = [
  {
    icon: Droplets,
    name: 'HydroFacial',
    description: 'Deep cleanse, exfoliate, and hydrate in one signature treatment. Delivers instant glow with zero downtime.',
    tag: 'Most Loved',
  },
  {
    icon: Sparkles,
    name: 'Dermapen Microneedling',
    description: 'Precision micro-channels stimulate collagen renewal for smoother, firmer skin and refined texture.',
    tag: 'Award Winning',
  },
  {
    icon: Zap,
    name: 'Laser Hair Removal',
    description: 'Permanent, pain-minimised hair reduction using advanced diode laser technology. Safe for all skin tones.',
    tag: null,
  },
  {
    icon: Sun,
    name: 'Chemical Peel',
    description: 'Medically-formulated peels that resurface, brighten, and correct uneven tone, pigmentation and acne marks.',
    tag: null,
  },
  {
    icon: Activity,
    name: 'Mesotherapy',
    description: 'Micro-injections of vitamins, hyaluronic acid and actives delivered precisely into the skin for deep nourishment.',
    tag: null,
  },
  {
    icon: Leaf,
    name: 'PRP Treatment',
    description: 'Platelet-Rich Plasma harvested from your own blood, reintroduced to accelerate skin rejuvenation.',
    tag: 'Natural',
  },
  {
    icon: Wind,
    name: 'LED Light Therapy',
    description: 'Non-invasive wavelengths of light target acne-causing bacteria, reduce redness and stimulate collagen.',
    tag: null,
  },
  {
    icon: FlaskConical,
    name: 'Skin Brightening',
    description: 'Bespoke brightening protocols combining serums, peels and light-based modalities for lasting luminosity.',
    tag: null,
  },
]


export function TreatmentsSection() {
  return (
    <section id="treatments" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <p className="font-sans text-xs font-medium tracking-[0.14em] uppercase text-rosewood-light">
            What We Offer
          </p>
          <h2 className="mt-4 font-display font-light italic text-4xl text-rosewood-deep md:text-5xl">
            Treatments Crafted<br />for Your Skin
          </h2>
          <p className="mt-4 font-sans text-base text-taupe leading-relaxed">
            Every treatment at Viergo is administered by certified female practitioners
            using medical-grade technology — personalised to your skin's unique needs.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-10 md:mt-14 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {treatments.map((t, i) => {
            const Icon = t.icon
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.04, ease: 'easeOut' }}
                className="group relative bg-warm-cream border border-fog rounded-brand-lg p-4 md:p-6 hover:border-rosewood-pale hover:shadow-lg hover:shadow-rosewood-pale/20 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {t.tag && (
                  <span className="absolute top-3 right-3 md:top-4 md:right-4 font-sans text-[8px] md:text-[10px] font-medium tracking-[0.1em] uppercase text-rosewood bg-rosewood-pale/60 px-1.5 md:px-2 py-0.5 rounded-brand-sm">
                    {t.tag}
                  </span>
                )}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-brand-md bg-blush flex items-center justify-center mb-3 md:mb-4 group-hover:bg-rosewood-pale transition-colors duration-300 shrink-0">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-rosewood" />
                </div>
                <h3 className="font-display font-light text-[0.95rem] md:text-xl text-espresso leading-snug mb-1.5 md:mb-2">
                  {t.name}
                </h3>
                <p className="font-sans text-[0.7rem] md:text-sm text-taupe leading-relaxed flex-grow">
                  {t.description}
                </p>
                <div className="mt-3 md:mt-4 flex items-center gap-1 text-rosewood opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-sans text-[9px] md:text-xs font-medium uppercase tracking-wider md:normal-case md:tracking-normal">Learn more</span>
                  <span className="text-[10px] md:text-sm">→</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/971501000991?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20treatments"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm text-rosewood border border-rosewood-pale rounded-brand-sm px-6 py-3 hover:bg-blush transition-colors duration-300 cursor-pointer"
          >
            Ask about a treatment on WhatsApp
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
