import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import Guarantees from '@/components/Guarantees'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import PricingSection from '@/components/PricingSection'
import SEOContent from '@/components/SEOContent' // Add this import

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Testimonials />
      <Benefits />
      <HowItWorks />
      <Services />
      <PricingSection />
      <Guarantees />
      <FAQ />
    </main>
  )
}