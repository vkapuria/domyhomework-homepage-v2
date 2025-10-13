'use client'
import DynamicHero from '@/templates/DynamicHero'
import DynamicTestimonials from '@/templates/DynamicTestimonials'
import DynamicBenefits from '@/templates/DynamicBenefits'
import DynamicHowItWorks from '@/templates/DynamicHowItWorks'
import DynamicServices from '@/templates/DynamicServices'
import DynamicPricingSection from '@/templates/DynamicPricingSection'
import DynamicFAQ from '@/templates/DynamicFAQ'
import { ServicePageData } from '@/types/servicePage'

interface PageTemplateProps {
  data: ServicePageData
}

export default function PageTemplate({ data }: PageTemplateProps) {
  return (
    <main>
      <DynamicHero 
        badgeText={data.hero.badgeText}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        bulletPoints={data.hero.bulletPoints}
        ctaText={data.hero.ctaText}
        trustSignals={data.hero.trustSignals}
      />
      
      <DynamicTestimonials 
        title={data.sections.testimonials.title}
        subtitle={data.sections.testimonials.subtitle}
      />
      
      <DynamicBenefits 
        title={data.sections.benefits.title}
        subtitle={data.sections.benefits.subtitle}
        items={data.sections.benefits.items}
      />
      
      <DynamicHowItWorks 
        title={data.sections.howItWorks.title}
        subtitle={data.sections.howItWorks.subtitle}
        steps={data.sections.howItWorks.steps}
      />
      
      <DynamicServices 
        title={data.sections.services.title}
        subtitle={data.sections.services.subtitle}
      />
      
      <DynamicPricingSection 
        title={data.sections.pricing.title}
        subtitle={data.sections.pricing.subtitle}
      />
      
      <DynamicFAQ 
        title={data.sections.faq.title}
        subtitle={data.sections.faq.subtitle}
        items={data.sections.faq.items}
        seoContent={data.sections.seoContent}
      />
    </main>
  )
}