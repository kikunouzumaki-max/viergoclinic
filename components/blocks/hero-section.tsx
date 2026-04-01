'use client'
import React from 'react'
import Image from 'next/image'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { cn } from '@/lib/utils'
import { Menu, X, Phone, Star } from 'lucide-react'
import { useScroll, motion } from 'motion/react'

const menuItems = [
  { name: 'Treatments', href: '#treatments' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
]

export function HeroHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => setScrolled(v > 0.03))
    return unsub
  }, [scrollYProgress])

  return (
    <header>
      <nav
        data-state={menuOpen ? 'active' : undefined}
        className="group fixed z-50 w-full pt-3"
      >
        <div
          className={cn(
            'mx-auto max-w-7xl rounded-brand-lg px-6 transition-all duration-500 lg:px-10',
            scrolled
              ? 'bg-cream/85 backdrop-blur-xl border border-fog shadow-sm shadow-rosewood-pale/20'
              : ''
          )}
        >
          <div
            className={cn(
              'relative flex flex-wrap items-center justify-between gap-6 py-4 duration-300 lg:gap-0',
              scrolled ? 'lg:py-3' : 'lg:py-5'
            )}
          >
            {/* Logo & Hamburger Container */}
            <div className="flex w-full items-center justify-between lg:w-auto lg:justify-start lg:gap-10">
              <a href="/" aria-label="Viergo Clinic home" className="flex items-center gap-2.5">
                <Image
                  src="/logo.jpg"
                  alt="Viergo Clinic"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col leading-none">
                  <span className="font-playfair italic font-light text-xl text-rosewood-deep tracking-wide">
                    viergo
                  </span>
                  <span className="font-sans text-[8px] tracking-[0.2em] uppercase text-taupe -mt-0.5">
                    clinic
                  </span>
                </div>
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="relative z-20 flex items-center justify-center w-10 h-10 -mr-3 lg:hidden text-rosewood-deep transition-transform duration-300 active:scale-95 translate-y-0.5"
              >
                <Menu className="group-data-[state=active]:opacity-0 group-data-[state=active]:scale-0 absolute size-6 stroke-[1.5px] duration-200" />
                <X className="group-data-[state=active]:opacity-100 group-data-[state=active]:scale-100 absolute size-6 stroke-[1.5px] opacity-0 scale-0 duration-200" />
              </button>

              {/* Desktop nav */}
              <div className="hidden lg:block">
                <ul className="flex gap-8">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="font-sans text-sm text-taupe hover:text-rosewood-deep transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile menu + CTAs */}
            <div className="hidden group-data-[state=active]:flex fixed inset-0 z-[100] w-full min-h-screen flex-col bg-[#FDFBF9] p-7 animate-in fade-in slide-in-from-top-6 duration-700 lg:static lg:z-auto lg:min-h-0 lg:w-auto lg:flex lg:flex-row lg:items-center lg:gap-4 lg:bg-transparent lg:p-0 lg:animate-none">
              <div className="flex items-center justify-between lg:hidden mb-14">
                <a href="/" className="flex items-center gap-3">
                  <Image
                    src="/logo.jpg"
                    alt="Viergo Clinic"
                    width={36}
                    height={36}
                    className="rounded-full object-cover"
                  />
                  <span className="font-playfair italic text-2xl text-rosewood-deep tracking-tight">viergo</span>
                </a>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-1.5 text-taupe/60 hover:text-rosewood-deep transition-colors"
                >
                  <X className="size-6 stroke-[1.5px]" />
                </button>
              </div>

              <div className="lg:hidden w-full">
                <ul className="flex flex-col">
                  {menuItems.map((item, idx) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.07 + 0.2, ease: "easeOut" }}
                      className="border-b border-fog/20 last:border-0"
                    >
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between py-8 group"
                      >
                        <span className="font-sans font-medium text-[20px] text-espresso tracking-tight group-hover:text-rosewood transition-colors">
                          {item.name}
                        </span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 text-taupe/40 group-hover:text-rosewood group-hover:translate-x-1.5 transition-all duration-300"
                        >
                          <path d="M5 12h14m-7-7 7 7-7 7" />
                        </svg>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col gap-3.5 mt-auto lg:mt-0 pb-10 lg:pb-0">
                <div className="flex flex-col sm:flex-row gap-3 lg:flex-row lg:items-center lg:gap-2">
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex flex-1 items-center justify-center h-12 rounded-full bg-rosewood-deep text-white text-[13px] font-semibold tracking-wider uppercase hover:bg-rosewood transition-all lg:flex-none lg:h-8 lg:px-4 lg:bg-rosewood lg:rounded-brand-sm lg:shadow-sm lg:text-xs lg:font-medium lg:normal-case lg:tracking-normal"
                  >
                    Book Your Visit
                  </a>
                  <a
                    href="tel:+971501000991"
                    className="flex flex-1 items-center justify-center h-12 rounded-full border border-rosewood-pale/50 bg-white text-rosewood-deep text-[13px] font-semibold tracking-wider hover:bg-rosewood-pale/10 transition-all lg:flex-none lg:h-8 lg:px-4 lg:border lg:border-rosewood/10 lg:bg-cream/90 lg:rounded-brand-sm lg:text-xs lg:font-medium"
                  >
                    050 100 0991
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-cream overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden border border-rosewood-pale/30 bg-cream">
        <img
          src="/heroimage.png"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-[80%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/90 md:from-cream md:via-cream/50 to-cream/20 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-36 pb-24 lg:pt-48 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl lg:max-w-2xl pt-2 md:pt-0"
        >
          {/* Eyebrow */}
          <p className="font-sans text-[10px] md:text-xs font-medium tracking-[0.14em] uppercase text-taupe">
            Ajman · Al Rawda 3
          </p>

          {/* Headline */}
          <h1 className="mt-3 md:mt-5 font-display font-light italic text-[2.75rem] leading-[1.05] text-rosewood-deep md:text-6xl lg:text-7xl">
            Beauty That<br />Feels Personal.
          </h1>

          {/* Subheadline */}
          <p className="mt-4 md:mt-6 font-sans text-[0.95rem] md:text-lg text-taupe leading-relaxed max-w-[18rem] md:max-w-md">
            Expert aesthetic care by women, for women — HydroFacial, Dermapen,
            and advanced skin treatments in a space where you feel truly at ease.
          </p>

          {/* Trust signals */}
          <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:flex-wrap items-start md:items-center gap-3 md:gap-4 lg:mt-6">
            <div className="flex items-center gap-1.5 bg-white/40 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none px-3 py-1.5 md:p-0 rounded-full md:rounded-none border border-white/60 md:border-transparent w-max">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
              <span className="font-sans text-xs md:text-sm font-medium text-espresso ml-1">4.9</span>
              <span className="font-sans text-xs md:text-sm text-taupe">· 22 Reviews</span>
            </div>
            <div className="hidden md:block text-fog">|</div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-sans text-xs md:text-sm text-taupe bg-white/40 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none px-3 py-1.5 md:p-0 rounded-full md:rounded-none border border-white/60 md:border-transparent whitespace-nowrap">
                Female Practitioners
              </span>
              <span className="hidden md:inline text-fog">|</span>
              <span className="font-sans text-xs md:text-sm text-taupe bg-white/40 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none px-3 py-1.5 md:p-0 rounded-full md:rounded-none border border-white/60 md:border-transparent whitespace-nowrap">
                Dermatology
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 w-full max-w-[20rem] sm:max-w-none">
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 w-full sm:w-auto rounded-brand-sm bg-rosewood px-8 text-cream text-[13px] md:text-sm tracking-wide hover:bg-rosewood-deep transition-colors duration-300 cursor-pointer font-sans shadow-lg shadow-rosewood/20"
            >
              Book Your Visit
            </a>
            <a
              href="#treatments"
              className="inline-flex items-center justify-center h-12 w-full sm:w-auto rounded-brand-sm border border-rosewood/20 bg-white/50 backdrop-blur-md md:bg-transparent md:border-fog md:backdrop-blur-none px-8 text-[13px] md:text-sm text-rosewood-deep md:text-taupe hover:bg-blush hover:text-rosewood-deep transition-colors duration-300 cursor-pointer font-sans"
            >
              Explore Treatments
            </a>
          </div>
        </motion.div>
      </div>

      {/* Treatments strip */}
      <div className="relative z-10 border-t border-fog bg-cream/90 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-center gap-4 py-5 md:flex-row">
            <p className="font-sans text-xs font-medium tracking-[0.1em] uppercase text-taupe whitespace-nowrap md:pr-6 md:border-r md:border-fog">
              Our Treatments
            </p>
            <div className="relative w-full overflow-hidden">
              <InfiniteSlider speedOnHover={20} speed={35} gap={56}>
                {[
                  'HydroFacial',
                  'Dermapen Microneedling',
                  'Laser Hair Removal',
                  'Chemical Peel',
                  'Skin Brightening',
                  'LED Light Therapy',
                  'Mesotherapy',
                  'PRP Treatment',
                  'Cupping Therapy',
                  'IV Drip',
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2 whitespace-nowrap">
                    <span className="w-1 h-1 rounded-full bg-rosewood-light" />
                    <span className="font-display italic text-lg text-rosewood-deep">
                      {t}
                    </span>
                  </div>
                ))}
              </InfiniteSlider>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
