import { ServicePageData } from '@/types/servicePage'

interface SubjectConfig {
  slug: string
  name: string
  nameLower: string
  focusKeyword: string
  category: string
  metaTitle: string        // ← ADD THIS
  metaDescription: string  // ← ADD THIS
  h1: string              // ← ADD THIS
  parentT1Links: Array<{ slug: string; anchor: string; url: string }>
  siblingT2Links: Array<{ slug: string; anchor: string; url: string }>
  h2Variations: { benefits: string; howItWorks: string }
  benefitDescriptions: { benefit1: string; benefit2: string; benefit4: string }
  subjectChallenges: string
  topicsWeHelp: string
  uniqueFAQs: Array<{ question: string; answer: string }>
}

/**
 * Merges the T2 template with subject-specific configuration
 * Replaces all {{PLACEHOLDERS}} with actual values
 */
export function mergeTemplateWithSubject(
  template: any,
  subject: SubjectConfig
): ServicePageData {
  // Deep clone template to avoid mutations
  let pageData = JSON.parse(JSON.stringify(template))

  // Replace simple string placeholders
pageData = replacePlaceholder(pageData, '{{SLUG}}', subject.slug)
pageData = replacePlaceholder(pageData, '{{SUBJECT_NAME}}', subject.name)
pageData = replacePlaceholder(pageData, '{{SUBJECT_NAME_LOWER}}', subject.nameLower)
pageData = replacePlaceholder(pageData, '{{FOCUS_KEYWORD}}', subject.focusKeyword)

// Replace meta fields with unique values
pageData = replacePlaceholder(pageData, '{{META_TITLE}}', subject.metaTitle)
pageData = replacePlaceholder(pageData, '{{META_DESCRIPTION}}', subject.metaDescription)
pageData = replacePlaceholder(pageData, '{{H1}}', subject.h1)

  // Replace H2 variations
  pageData = replacePlaceholder(pageData, '{{BENEFITS_H2}}', subject.h2Variations.benefits)
  pageData = replacePlaceholder(pageData, '{{HOW_IT_WORKS_H2}}', subject.h2Variations.howItWorks)

  // Replace benefit descriptions
  pageData = replacePlaceholder(pageData, '{{BENEFIT_1_TITLE}}', `Expert ${subject.name} Tutors`)
  pageData = replacePlaceholder(pageData, '{{BENEFIT_1_DESCRIPTION}}', subject.benefitDescriptions.benefit1)
  pageData = replacePlaceholder(pageData, '{{BENEFIT_2_DESCRIPTION}}', subject.benefitDescriptions.benefit2)
  pageData = replacePlaceholder(pageData, '{{BENEFIT_4_DESCRIPTION}}', subject.benefitDescriptions.benefit4)

  // Replace parent T1 links
  if (subject.parentT1Links[0]) {
    const link1 = `<a href='${subject.parentT1Links[0].url}' class='text-blue-600 hover:text-blue-800 underline'>${subject.parentT1Links[0].anchor}</a>`
    pageData = replacePlaceholder(pageData, '{{PARENT_T1_LINK_1}}', link1)
  }
  if (subject.parentT1Links[1]) {
    const link2 = `<a href='${subject.parentT1Links[1].url}' class='text-blue-600 hover:text-blue-800 underline'>${subject.parentT1Links[1].anchor}</a>`
    pageData = replacePlaceholder(pageData, '{{PARENT_T1_LINK_2}}', link2)
  }

  // Replace sibling T2 links
  if (subject.siblingT2Links[0]) {
    const link1 = `<a href='${subject.siblingT2Links[0].url}' class='text-blue-600 hover:text-blue-800 underline'>${subject.siblingT2Links[0].anchor}</a>`
    pageData = replacePlaceholder(pageData, '{{SIBLING_T2_LINK_1}}', link1)
  }
  if (subject.siblingT2Links[1]) {
    const link2 = `<a href='${subject.siblingT2Links[1].url}' class='text-blue-600 hover:text-blue-800 underline'>${subject.siblingT2Links[1].anchor}</a>`
    pageData = replacePlaceholder(pageData, '{{SIBLING_T2_LINK_2}}', link2)
  }

  // Merge FAQ items (generic + unique)
  const faqItems = [
    {
      question: `How does your ${subject.nameLower} homework help work?`,
      answer: `Our platform connects you with expert ${subject.nameLower} tutors who provide personalized assistance. Submit your assignment details, get matched with a qualified ${subject.name} tutor, communicate directly, and receive professionally completed work with detailed explanations. Check out our <a href='/how-it-works/' class='text-blue-600 hover:text-blue-800 underline'>how it works</a> page for the complete process.`
    },
    {
      question: `How much does ${subject.nameLower} homework help cost?`,
      answer: `Our ${subject.nameLower} homework help rates vary based on assignment complexity, academic level, and deadline. Prices start at $12 per page for standard work with 7-14 day deadlines. Rush orders and advanced academic levels cost more. Use our calculator on the <a href='/pricing/' class='text-blue-600 hover:text-blue-800 underline'>pricing</a> page for an instant, personalized quote.`
    },
    ...subject.uniqueFAQs,
    {
      question: `Are your ${subject.nameLower} tutors qualified?`,
      answer: `Yes! All our ${subject.name} tutors hold advanced degrees (Master's or PhD) in ${subject.nameLower} or related fields. We verify credentials, test subject expertise, and review past work before accepting any tutor. Our <a href='/top-writers/' class='text-blue-600 hover:text-blue-800 underline'>expert writers</a> page showcases some of our top ${subject.nameLower} specialists. Every ${subject.name} expert is carefully vetted to ensure they can provide high-quality academic assistance.`
    },
    {
      question: `Do you guarantee plagiarism-free ${subject.nameLower} work?`,
      answer: `Absolutely! Every ${subject.nameLower} assignment is completed from scratch by real experts—no AI tools, no plagiarism. We provide free plagiarism and AI-detection reports with every order. Our ${subject.nameLower} tutors create authentic, original work tailored to your specific requirements, ensuring your academic integrity is protected.`
    }
  ]
  pageData.sections.faq.items = faqItems

  // Generate SEO content
  const seoContent = generateSEOContent(subject)
  pageData.sections.seoContent.content = seoContent

  return pageData as ServicePageData
}

/**
 * Recursively replaces placeholder in all strings within an object
 */
function replacePlaceholder(obj: any, placeholder: string, value: string): any {
  if (typeof obj === 'string') {
    return obj.replace(new RegExp(placeholder, 'g'), value)
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => replacePlaceholder(item, placeholder, value))
  }
  
  if (obj !== null && typeof obj === 'object') {
    const result: any = {}
    for (const key in obj) {
      result[key] = replacePlaceholder(obj[key], placeholder, value)
    }
    return result
  }
  
  return obj
}

/**
 * Generates SEO content HTML for subject page
 */
function generateSEOContent(subject: SubjectConfig): string {
  const parentLinks = subject.parentT1Links.map(link => 
    `<a href='${link.url}' class='text-blue-600 hover:text-blue-800 underline'>${link.anchor}</a>`
  ).join(' or ')

  const siblingLinks = subject.siblingT2Links.map(link =>
    `<a href='${link.url}' class='text-blue-600 hover:text-blue-800 underline'>${link.anchor}</a>`
  ).join(', ')

  return `<div class='grid grid-cols-1 md:grid-cols-2 gap-12'>
    <div class='space-y-6 pr-6'>
      <div class='prose prose-sm text-gray-700'>
        <h3 class='text-lg font-semibold text-gray-900 mb-3'>When to Seek ${subject.name} Homework Help</h3>
        <p>Struggling with ${subject.nameLower} assignments is common among students. Whether you're dealing with ${subject.subjectChallenges}, there comes a point when professional ${subject.nameLower} help makes sense.</p>
        <p>Our ${subject.nameLower} homework help service is designed to support you when you need it most. If you're finding it tough to balance your workload or if ${subject.nameLower} concepts aren't clicking, it might be time to ${parentLinks}.</p>
        <p>Our expert ${subject.nameLower} tutors provide personalized guidance that helps you understand concepts deeply, not just complete assignments. This approach ensures you're building genuine ${subject.nameLower} skills for future success.</p>
      </div>
      
      <div class='prose prose-sm text-gray-700'>
        <h3 class='text-lg font-semibold text-gray-900 mb-3'>What Makes Our ${subject.name} Help Different</h3>
        <p>At DoMyHomework, our ${subject.nameLower} homework help stands out for several reasons. First, we connect you with ${subject.nameLower} specialists who have deep expertise in ${subject.topicsWeHelp}.</p>
        <p>Our ${subject.nameLower} tutors don't just provide answers—they explain the reasoning behind solutions, helping you master concepts that you'll use throughout your ${subject.nameLower} coursework and beyond.</p>
        <p>We also understand that modern academic integrity policies are strict. That's why our ${subject.nameLower} help is 100% human-written with no AI tools, ensuring your work passes all detection software while maintaining originality.</p>
        <p>Ready to improve your ${subject.nameLower} grades? <a href='https://order.domyhomework.co' class='text-blue-600 hover:text-blue-800 underline'>Place your order</a> today and experience professional ${subject.nameLower} assistance that makes a real difference.</p>
      </div>
    </div>
    
    <div class='space-y-6 pl-6'>
      <div class='prose prose-sm text-gray-700'>
        <h3 class='text-lg font-semibold text-gray-900 mb-3'>How Our ${subject.name} Tutors Help You Succeed</h3>
        <p>Our ${subject.nameLower} homework help process is straightforward and designed with students in mind. When you submit your ${subject.nameLower} assignment, we carefully match you with a tutor who specializes in your specific topic.</p>
        <p>Whether you need help with ${subject.subjectChallenges}, our ${subject.nameLower} experts provide detailed, step-by-step solutions that show you exactly how to approach similar problems in the future.</p>
        <p>Many students also find our related services helpful. If you're taking multiple courses, check out our ${siblingLinks} for comprehensive academic support across subjects.</p>
        <p>Our <a href='/top-writers/' class='text-blue-600 hover:text-blue-800 underline'>expert writers</a> have helped thousands of students improve their ${subject.nameLower} understanding and grades. With 24/7 availability and fast turnaround times, we're here whenever you need ${subject.nameLower} help.</p>
      </div>
      
      <div class='prose prose-sm text-gray-700'>
        <h3 class='text-lg font-semibold text-gray-900 mb-3'>${subject.name} Homework Help FAQ</h3>
        <p><strong>Q: Is your ${subject.nameLower} homework help legitimate?</strong></p>
        <p>A: Yes! Our ${subject.nameLower} tutoring service is completely legal and ethical. We provide academic support similar to private tutoring, helping you understand ${subject.nameLower} concepts and complete assignments with expert guidance.</p>
        
        <p><strong>Q: Will my ${subject.nameLower} work pass plagiarism detection?</strong></p>
        <p>A: Absolutely. Every ${subject.nameLower} assignment is written from scratch by real human experts—no AI, no copied content. We provide free plagiarism reports to verify originality.</p>
        
        <p><strong>Q: How qualified are your ${subject.nameLower} tutors?</strong></p>
        <p>A: Our ${subject.nameLower} tutors hold advanced degrees (Master's or PhD) in ${subject.nameLower} or related fields. They're carefully vetted for subject expertise, teaching ability, and professional experience.</p>
        
        <p><strong>Q: Can I communicate with my ${subject.nameLower} tutor?</strong></p>
        <p>A: Yes! Direct communication with your ${subject.nameLower} tutor is encouraged. Ask questions, request clarifications, and get updates throughout the process.</p>
        
        <p>Don't let ${subject.nameLower} stress hold you back. Check out our <a href='/reviews/' class='text-blue-600 hover:text-blue-800 underline'>student reviews</a> to see how we've helped others succeed, then get started with professional ${subject.nameLower} help today!</p>
      </div>
    </div>
  </div>`
}