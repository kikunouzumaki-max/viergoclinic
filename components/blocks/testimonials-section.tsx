'use client'
import { motion } from 'motion/react'
import { TestimonialsColumn, type Testimonial } from '@/components/ui/testimonials-column'

const testimonials: Testimonial[] = [
  {
    text: "One of the best medical centers in Ajman. Very good results with HydroFacial and Dermapen professional treatment. Thank you!",
    name: "Shafi Asees",
    role: "Verified Patient",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
  },
  {
    text: "Good results for HydroFacial. Very professional services. The staff made me feel so comfortable throughout the entire session.",
    name: "Kumar Sharmila",
    role: "Verified Patient",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    text: "One of the finest and most beautiful clinics you could ever visit. If you want to pamper yourself and appreciate your beauty — this is the place.",
    name: "Ibtesam Shuhail",
    role: "Verified Patient",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
  },
  {
    text: "The results were absolutely incredible. My skin looks brighter and healthier than it has in years. Highly recommend the Dermapen treatment!",
    name: "Fatima Al-Hassan",
    role: "Regular Client",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
  },
  {
    text: "The team here is incredibly knowledgeable and professional. They explained every step of the process and made sure I was comfortable.",
    name: "Sara Mohammed",
    role: "New Client",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
  },
  {
    text: "I've been coming here for 6 months now and the improvement in my skin is remarkable. The staff remembers you by name — very personal service.",
    name: "Aisha Al-Rahma",
    role: "Loyal Patient",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 5,
  },
  {
    text: "Best laser hair removal I've had. Painless and effective. The clinic is spotlessly clean and the equipment is clearly top-of-the-line.",
    name: "Priya Sharma",
    role: "Verified Patient",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    rating: 5,
  },
  {
    text: "What I appreciate most is the honest consultation. They told me exactly what I needed and what I didn't. Trustworthy and skilled team.",
    name: "Mariam Al-Zaabi",
    role: "Verified Patient",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    rating: 5,
  },
  {
    text: "The HydroFacial was an absolute treat — my skin felt like silk afterwards. The clinic has a genuinely luxurious feel while staying approachable.",
    name: "Noor Khalid",
    role: "Regular Client",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    rating: 5,
  },
]

const col1 = testimonials.slice(0, 3)
const col2 = testimonials.slice(3, 6)
const col3 = testimonials.slice(6, 9)

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-blush py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-lg mx-auto mb-14"
        >
          <p className="font-sans text-xs font-medium tracking-[0.14em] uppercase text-rosewood-light">
            Client Love
          </p>
          <h2 className="mt-4 font-display font-light italic text-4xl text-rosewood-deep md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 font-sans text-base text-taupe leading-relaxed">
            Real experiences from the women who trust Viergo with their skin.
          </p>

          {/* Aggregate rating */}
          <div className="mt-6 inline-flex items-center gap-3 bg-cream border border-fog rounded-brand-lg px-6 py-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} viewBox="0 0 20 20" className="w-4 h-4 fill-gold">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <span className="font-display text-2xl text-rosewood-deep font-light">4.9</span>
            <span className="font-sans text-sm text-taupe">22 Google Reviews</span>
          </div>
        </motion.div>

        {/* Scrolling columns */}
        <div className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={col1} duration={18} />
          <TestimonialsColumn testimonials={col2} duration={22} className="hidden md:block" />
          <TestimonialsColumn testimonials={col3} duration={20} className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
