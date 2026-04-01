'use client'
import { motion } from 'motion/react'
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

const info = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '050 100 0991',
    href: 'tel:+971501000991',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sheikh Ammar Bin Humaid St, Al Rawda 3, Ajman',
    href: 'https://maps.app.goo.gl/8e2JPwcHMtZm9ZfyVhg_st',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Open · Closes 10 PM',
    href: null,
  },
]

export function CTASection() {
  return (
    <section id="contact" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">

          {/* Left — headline + info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-xs font-medium tracking-[0.14em] uppercase text-rosewood-light">
              Get In Touch
            </p>
            <h2 className="mt-4 font-display font-light italic text-4xl text-rosewood-deep md:text-5xl leading-[1.1]">
              Ready to Start Your<br />Skin Journey?
            </h2>
            <p className="mt-5 font-sans text-base text-taupe leading-relaxed max-w-md">
              Book your consultation today — WhatsApp us for the fastest response,
              or call our clinic directly. We're open seven days a week.
            </p>

            {/* Contact info */}
            <div className="mt-10 space-y-5">
              {info.map((item) => {
                const Icon = item.icon
                const inner = (
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-brand-md bg-blush flex items-center justify-center">
                      <Icon className="w-5 h-5 text-rosewood" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-taupe uppercase tracking-wider">{item.label}</p>
                      <p className="font-sans text-sm font-medium text-espresso mt-0.5">{item.value}</p>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                )
              })}
            </div>

            {/* Google Maps embed hint */}
            <div className="mt-8">
              <a
                href="https://maps.app.goo.gl/8e2JPwcHMtZm9ZfyVhg_st"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm text-rosewood border border-rosewood-pale rounded-brand-sm px-5 py-2.5 hover:bg-blush transition-colors duration-300 cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                Get Directions on Google Maps
              </a>
            </div>
          </motion.div>

          {/* Right — booking card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-warm-cream border border-fog rounded-brand-xl p-8 lg:p-10">
              <h3 className="font-display font-light italic text-2xl text-rosewood-deep">
                Book via WhatsApp
              </h3>
              <p className="mt-2 font-sans text-sm text-taupe leading-relaxed">
                The fastest way to secure your appointment. Choose your treatment
                below and we'll confirm your slot within minutes.
              </p>

              {/* Treatment selector */}
              <div className="mt-7 space-y-3">
                {[
                  'HydroFacial',
                  'Dermapen Microneedling',
                  'Laser Hair Removal',
                  'Chemical Peel',
                  'General Consultation',
                ].map((t) => (
                  <a
                    key={t}
                    href={`https://wa.me/971501000991?text=Hi%2C%20I%27d%20like%20to%20book%20a%20${encodeURIComponent(t)}%20appointment%20at%20Viergo%20Clinic`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full bg-cream border border-fog rounded-brand-md px-4 py-3 hover:border-rosewood-pale hover:bg-blush group transition-all duration-200 cursor-pointer"
                  >
                    <span className="font-sans text-sm text-espresso group-hover:text-rosewood-deep transition-colors duration-200">
                      {t}
                    </span>
                    <MessageCircle className="w-4 h-4 text-taupe group-hover:text-rosewood transition-colors duration-200" />
                  </a>
                ))}
              </div>

              {/* Direct WhatsApp CTA */}
              <a
                href="https://wa.me/971501000991?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Viergo%20Clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2.5 w-full h-12 rounded-brand-sm bg-[#25D366] text-white font-sans text-sm font-medium hover:bg-[#1FAD55] transition-colors duration-300 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>

              <p className="mt-3 text-center font-sans text-xs text-taupe">
                Usually responds within a few minutes
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
