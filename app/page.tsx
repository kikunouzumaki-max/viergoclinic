import { HeroHeader, HeroSection } from '@/components/blocks/hero-section'
import { TreatmentsSection } from '@/components/blocks/treatments-section'
import { AboutSection } from '@/components/blocks/about-section'
import { GallerySection } from '@/components/blocks/gallery-section'
import { TestimonialsSection } from '@/components/blocks/testimonials-section'
import { CTASection } from '@/components/blocks/cta-section'
import { Footer } from '@/components/layout/footer'
import { WhatsAppFloat } from '@/components/layout/whatsapp-float'

export default function Home() {
  return (
    <>
      <HeroHeader />
      <main>
        <HeroSection />
        <TreatmentsSection />
        <AboutSection />
        <GallerySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
