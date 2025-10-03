export interface ServicePageData {
    slug: string
    focusKeyword: string
    title: string
    metaDescription: string
    h1: string
    
    hero: {
      title: string
      subtitle: string
      bulletPoints?: string[]
      ctaText: string
      trustSignals: string[]
    }
    
    sections: {
      services: {
        title: string
        subtitle: string
        items: Array<{
          title: string
          description: string
          features: string[]
        }>
      }
      
      benefits: {
        title: string
        subtitle: string
        items: Array<{
          icon: string
          title: string
          description: string
        }>
      }
      
      howItWorks: {
        title: string
        subtitle: string
        steps: Array<{
          number: string
          title: string
          description: string
        }>
      }
      
      pricing: {
        title: string
        subtitle: string
        description: string
        ctaText: string
      }
      
      guarantees: {
        title: string
        subtitle: string
        items: Array<{
          icon: string
          title: string
          description: string
        }>
      }
      
      testimonials: {
        title: string
        subtitle: string
        featured: Array<{
          name: string
          text: string
          rating: number
          course?: string
        }>
      }
      
      faq: {
        title: string
        subtitle: string
        items: Array<{
          question: string
          answer: string
        }>
      }
      
      seoContent: {
        title: string
        content: string
        isVisible: boolean
      }
    }
  }