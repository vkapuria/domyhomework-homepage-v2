'use client'
import DynamicHero from '@/templates/DynamicHero'
import DynamicBenefits from '@/templates/DynamicBenefits'
import DynamicFAQ from '@/templates/DynamicFAQ'
// Import other dynamic components as needed
import { ServicePageData } from '@/types/servicePage'

interface PageTemplateProps {
  data: ServicePageData
}

export default function PageTemplate({ data }: PageTemplateProps) {
  return (
    <main>
      <DynamicHero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        bulletPoints={data.hero.bulletPoints}
        ctaText={data.hero.ctaText}
        trustSignals={data.hero.trustSignals}
      />
      
      <DynamicBenefits 
        title={data.sections.benefits.title}
        subtitle={data.sections.benefits.subtitle}
        items={data.sections.benefits.items}
      />
      
      <DynamicFAQ 
        title={data.sections.faq.title}
        subtitle={data.sections.faq.subtitle}
        items={data.sections.faq.items}
      />
      
      {/* Add other dynamic components as we create them */}
    </main>
  )
}