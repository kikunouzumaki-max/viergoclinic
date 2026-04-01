'use client'
import { motion } from 'motion/react'
import { Shield, Heart, Award, Users } from 'lucide-react'

const stats = [
  { value: '4.9★', label: 'Google Rating', sub: '22 verified reviews' },
  { value: '100%', label: 'Female Practitioners', sub: 'Women-owned & operated' },
  { value: '10+', label: 'Treatments', sub: 'Medical-grade protocols' },
  { value: 'Ajman', label: 'Based In', sub: 'Al Rawda 3, UAE' },
]

const pillars = [
  {
    icon: Shield,
    title: 'Medical-Grade Safety',
    body: 'Every procedure follows clinical protocols. Our equipment is certified and our practitioners are licensed medical professionals.',
  },
  {
    icon: Heart,
    title: 'By Women, For Women',
    body: 'Our clinic was founded with a single mission — to create a space where women feel seen, comfortable, and truly cared for.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    body: 'From first-time clients to loyal regulars, our results speak through glowing skin and five-star reviews.',
  },
  {
    icon: Users,
    title: 'Personalised Approach',
    body: 'No two skins are alike. Every consultation starts with listening — we tailor every treatment to your unique concerns.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-blush py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Two-column: text + image */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-xs font-medium tracking-[0.14em] uppercase text-rosewood-light">
              Our Story
            </p>
            <h2 className="mt-4 font-display font-light italic text-4xl text-rosewood-deep md:text-5xl leading-[1.1]">
              Your Trusted Health<br />& Beauty Clinic
            </h2>
            <p className="mt-6 font-sans text-base text-taupe leading-relaxed">
              Viergo Clinic was born from the belief that every woman deserves
              professional aesthetic care delivered with warmth, expertise, and
              discretion. Located in the heart of Al Rawda 3, Ajman, we bring
              together dermatology, aesthetics, and wellness under one roof.
            </p>
            <p className="mt-4 font-sans text-base text-taupe leading-relaxed">
              Our all-female team of practitioners ensures you feel at ease from
              the moment you walk in — whether it's your first HydroFacial or a
              follow-up Dermapen session. We speak your language: Arabic, English,
              and everything in between.
            </p>

            {/* Pillars grid */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {pillars.map((p, i) => {
                const Icon = p.icon
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 flex-shrink-0 rounded-brand-sm bg-rosewood-pale/50 flex items-center justify-center mt-0.5">
                      <Icon className="w-4 h-4 text-rosewood" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-espresso">{p.title}</p>
                      <p className="mt-0.5 font-sans text-sm text-taupe leading-relaxed">{p.body}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Image stack */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-brand-xl overflow-hidden">
              <img
                src="/sectionimage2.png"
                alt="Viergo Clinic treatment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rosewood-deep/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-cream border border-fog rounded-brand-lg px-5 py-4 shadow-lg shadow-rosewood-pale/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rosewood flex items-center justify-center">
                  <span className="font-display italic text-cream text-sm">V</span>
                </div>
                <div>
                  <p className="font-sans text-xs text-taupe">Since 2022</p>
                  <p className="font-sans text-sm font-medium text-espresso">Viergo Clinic</p>
                </div>
              </div>
            </div>
            {/* Second image */}
            <div className="absolute -right-5 top-12 w-36 h-44 rounded-brand-lg overflow-hidden border-2 border-cream shadow-lg">
              <img
                src="/sectionimage1.jpeg"
                alt="Clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-fog rounded-brand-lg overflow-hidden"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-cream px-8 py-8 text-center">
              <p className="font-display font-light text-3xl text-rosewood-deep md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 font-sans text-sm font-medium text-espresso">{s.label}</p>
              <p className="mt-0.5 font-sans text-xs text-taupe">{s.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
