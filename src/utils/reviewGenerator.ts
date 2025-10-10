// Review Generator with 100+ Curated Templates
// Generates contextual, realistic reviews for writers

interface Writer {
    name: string;
    specializations: string[];
    stats: {
      projects: number;
      rating: number;
    };
  }
  
  interface GeneratedReview {
    id: string;
    orderNumber: string;
    date: string;
    rating: number;
    comment: string;
    paperType: string;
    writerResponse?: string | null;
  }

  // Gender-neutral writer references
function getWriterReference(writerName: string, useCase: 'subject' | 'object' | 'possessive'): string {
  const firstName = writerName.split(' ')[0]
  
  // 20% chance to use actual name
  if (Math.random() < 0.2) {
    return firstName
  }
  
  // 80% use gender-neutral alternatives
  const alternatives = {
    subject: ['this expert', 'the writer', 'my tutor', 'this writer', 'my helper', 'the tutor', 'this professional'],
    object: ['this expert', 'the writer', 'them', 'this tutor', 'my helper'],
    possessive: ['their', 'this expert\'s', 'the writer\'s', 'my tutor\'s']
  }
  
  const options = alternatives[useCase]
  return options[Math.floor(Math.random() * options.length)]
}
  
  // ==================== TEMPLATES ====================
  
  // TIER 1: Premium Reviews (Long, detailed - for "What Students Loved" section)
  const premiumTemplates = [
    "Working with {name} was a breath of fresh air. They took the time to understand my project's nuances and delivered a piece that perfectly captured what I was looking for. Their attention to detail was remarkable.",
    "I was initially hesitant about using this service, but I'm glad I did. {name} was incredibly helpful and patient with my numerous questions. The final paper was well-researched and eloquently written. I'm thoroughly impressed!",
    "I've used several writing services before, but this one stands out. {name} didn't just complete the assignment; they provided insightful comments that helped me understand the topic better. It was like having a personal tutor.",
    "The level of professionalism displayed by {name} was outstanding. From our initial conversation to the final delivery, every interaction was smooth and productive. Their expertise in the subject matter was evident in the quality of work.",
    "I approached this service with a challenging topic and tight deadline. Not only did {name} deliver on time, but the quality of research and analysis exceeded my expectations. It's clear they have access to excellent resources.",
    "What sets {name} apart is their commitment to excellence. They went above and beyond, suggesting improvements to my original outline that significantly enhanced the final paper. I'm grateful for their expertise and dedication.",
    "I was pleasantly surprised by how seamless the entire process was. {name} kept me updated at every stage, and their willingness to incorporate my feedback made the final product feel truly collaborative. Highly recommended!",
    "The attention to detail in my assignment was impressive. Not only was the content spot-on, but the formatting and citations were flawless. It's evident that {name} takes pride in their work and strives for perfection.",
    "I appreciated {name}'s ability to explain complex concepts in a way that was easy to understand. They didn't just complete the assignment; they ensured I grasped the underlying principles. This level of commitment is rare and valuable.",
    "{name}'s expertise in my subject area was evident from the start. They asked insightful questions and provided perspectives I hadn't considered. The resulting paper was not just well-written but genuinely thought-provoking.",
    "I must say, the experience was quite pleasant. {name} demonstrated a keen understanding of the subject matter. Their approach was methodical, and the final product reflected a depth of analysis I hadn't anticipated.",
    "It's refreshing to work with professionals who truly value quality. The attention to detail in my assignment was remarkable. Every aspect, from the research to the formatting, was handled by {name} with utmost care. I'm thoroughly satisfied with the outcome.",
    "I found the entire process to be smooth and efficient. {name} was receptive to my input and incorporated my ideas seamlessly into the work. The final product exceeded my expectations in terms of both content and presentation.",
    "The level of customization offered was impressive. {name} took the time to understand my specific needs and tailored the work accordingly. It's clear that they prioritize client satisfaction and are willing to go the extra mile.",
    "I was particularly impressed by {name}'s ability to meet a tight deadline without compromising on quality. The work was well-researched, coherently structured, and delivered promptly. It's evident that time management is one of their strong suits."
  ];
  
  // TIER 2: Excellent Reviews (5-star - Main bulk)
  const excellentTemplates = [
    "Excellent work! {name} completed the project on time and exceeded my expectations.",
    "Outstanding writing skills! The paper was comprehensive and well-structured.",
    "{name}'s attention to detail and dedication is truly impressive. Will hire again.",
    "Fantastic work! The report was detailed and met all the requirements.",
    "Very professional and detail-oriented. Highly recommend {name}'s services.",
    "Great job on the assignment. It was well-researched and perfectly formatted.",
    "{name} provided insightful analysis and delivered the work ahead of schedule.",
    "Very satisfied with the service. The project was well-written and thorough.",
    "Always amazing work from {name}!",
    "Thank you so much for doing my homework. {name} was able to finish even before the said deadline!",
    "Went above and beyond. {name} is exceptional!",
    "Excellent writer. {name} is always on time.",
    "Very responsive and professional. Great work from {name}!",
    "The project was done perfectly by {name}. I couldn't ask for more.",
    "{name} delivered high-quality work and was very communicative throughout the process.",
    "This service has been a lifesaver. Highly recommend {name}!",
    "Great experience overall. The work from {name} was top-notch.",
    "{name} was attentive to detail and very knowledgeable.",
    "Quick turnaround and excellent quality from {name}. Will use again.",
    "Outstanding service! {name}'s work was delivered on time and exceeded my expectations.",
    "{name} was very thorough and provided a well-researched paper.",
    "Fantastic job! {name} was very professional and delivered exactly what I needed.",
    "Great job! The paper from {name} was well-written and met all the requirements.",
    "Very impressed with the quality of work from {name}. Will definitely recommend.",
    "{name} did an excellent job. Very satisfied with the results.",
    "Exceptional work from {name} and always accommodating. Very punctual as well!",
    "Attentive and asks relevant questions. {name} delivers excellent work on time. Highly recommended!",
    "{name} was very thorough with the assignment and very timely. I will definitely be using this service again.",
    "Very good communication when messaging. {name} delivered the project on time and was very thorough.",
    "Outstanding service from {name}, very efficient and reliable.",
    "Provided excellent work in a timely manner. Very satisfied with {name}.",
    "The work from {name} was exceptional and delivered before the deadline.",
    "Superb quality and very responsive to messages. {name} is amazing!",
    "Quick turnaround and the work from {name} exceeded expectations.",
    "Professional and very thorough. Highly recommend {name}.",
    "The project was completed by {name} well ahead of time and met all my requirements.",
    "Very detailed and prompt. The work from {name} was top-notch.",
    "Quick and efficient. The work from {name} was exactly what I needed.",
    "{name} exceeded expectations with the quality and speed of the work.",
    "Professional, timely, and excellent quality from {name}.",
    "Very happy with the service from {name}. Will definitely use again.",
    "The work from {name} was impeccable and delivered before the deadline.",
    "Outstanding communication and very high-quality work from {name}.",
    "Highly recommend {name}. The work was delivered ahead of schedule.",
    "The project was completed by {name} to a high standard and very quickly.",
    "Efficient and detailed. The work from {name} was perfect.",
    "Very responsive and the work from {name} was of excellent quality.",
    "Incredible attention to detail. The work from {name} was flawless and delivered early.",
    "{name} exceeded all expectations! Very professional and thorough.",
    "Quick turnaround and excellent quality from {name}. Highly satisfied!",
    "Outstanding work from {name}! The research was comprehensive and well-presented.",
    "Very responsive and accommodating. The final product from {name} was perfect.",
    "Fantastic job from {name}! Met all requirements and delivered ahead of schedule.",
    "Impressed by {name}'s depth of knowledge and writing skills. Will hire again!",
    "Exceptional service from {name}. The work was top-notch and completed quickly.",
    "Great communicator and very professional. Highly recommend {name}!",
    "The quality of work from {name} was outstanding. Very pleased with the results.",
    "Absolutely amazing work from {name}! 🌟 Exceeded all my expectations.",
    "Thank you {name} for the excellent work! 🙏 Will definitely use again.",
    "Superb job from {name}! 👏 Delivered well before the deadline.",
    "Fantastic writer! {name} is very knowledgeable and efficient. 💯",
    "Impressed by {name}'s quality and speed. 🚀 Highly recommend!",
    "Very satisfied with the work from {name}. Delivered before the deadline!",
    "Exceptional quality and attention to detail from {name}. Will use again!",
    "Great job on the assignment from {name}. Very thorough and well-written.",
    "Impressive work from {name}! The analysis was spot-on and comprehensive.",
    "{name} exceeded my expectations. Very professional and efficient.",
    "Outstanding service from {name}! The work was perfect and delivered early.",
    "Highly recommend {name}! The quality of work was exceptional.",
    "Very pleased with the results from {name}. Will definitely hire again.",
    "Fantastic experience with {name}! Very knowledgeable and prompt.",
    "Excellent communication and superior quality work from {name}. Thank you!",
    "Amazing work as always from {name}! 🌟 Reliable and consistent quality.",
    "Thank you {name} for the quick turnaround! 🚀 Saved me at the last minute.",
    "Brilliant job from {name}! 🏆 The paper was well-researched and structured.",
    "Awesome writer! {name} is very responsive and professional. 👍",
    "Couldn't be happier with the results from {name}! 😊 Highly recommend."
  ];
  
  // TIER 3: Good Reviews (4-star)
  const goodTemplates = [
    "Good job. {name} completed the work professionally.",
    "Very good work from {name}. A few minor tweaks needed but overall solid.",
    "Delivered on time. {name} did a good job overall.",
    "The work from {name} was good. Met most of my expectations.",
    "Nice work from {name}. Would use again.",
    "Solid performance from {name}. The assignment was completed well.",
    "{name} did a good job. Professional and timely.",
    "Good quality work from {name}. Minor revisions were needed.",
    "Overall satisfied with {name}'s work. Good communication.",
    "The work from {name} was decent. Delivered on time.",
    "Good experience with {name}. The work met the requirements.",
    "{name} provided good work. A couple of adjustments but nothing major.",
    "Satisfied with the service from {name}. Good overall quality.",
    "The assignment from {name} was good. Would recommend.",
    "Good work from {name}. Professional and reliable."
  ];

  // Structured checkmark reviews
const structuredReasons = [
    "Professional and courteous",
    "Profound subject matter expertise",
    "Timely delivery",
    "High-quality writing",
    "Clear communication",
    "Thorough research",
    "Met all requirements",
    "Original and creative work",
    "Friendly and responsive",
    "Well-organized content",
    "Attention to detail",
    "Excellent grammar",
    "Helpful feedback",
    "Comprehensive analysis",
    "Easy to work with",
    "Strong understanding of the topic",
    "Reliable and consistent",
    "Insightful ideas",
    "Accurate and precise",
    "Engaging writing style",
    "Excellent formatting",
    "Meticulous attention to detail",
    "Exceptional writing style",
    "In-depth research",
    "Excellent grasp of the subject",
    "Well-structured content",
    "Responsive to feedback",
    "High-quality output",
    "Professional communication",
    "Exceptional writing skills"
  ];
  
  function generateStructuredReview(): string {
    // Pick 2 random reasons
    const shuffled = [...structuredReasons].sort(() => Math.random() - 0.5);
    const reason1 = shuffled[0];
    const reason2 = shuffled[1];
    
    return `The customer provided a positive review based on the following reasons: ✅ ${reason1} ✅ ${reason2}`;
  }
  
  // Add 30 structured reviews to excellent templates
  const structuredReviews = Array.from({ length: 30 }, () => generateStructuredReview());
  excellentTemplates.push(...structuredReviews);
  
  // TIER 4: Mixed Reviews (3-star and below - rare)
  const mixedTemplates = [
    "The work was okay. {name} could improve on following specific instructions.",
    "Decent work from {name} but required some revisions.",
    "The assignment was completed but didn't fully meet my expectations.",
    "Work from {name} was acceptable after requesting revisions.",
    "The paper was okay. {name} delivered on time but quality could be better."
  ];
  
  // ==================== PAPER TYPES ====================
  
  const paperTypesBySpecialization: Record<string, string[]> = {
    "Literature": ["Literary Analysis", "Essay (any type)", "Literature Review", "Critical Analysis", "Book Review"],
    "Literature Review": ["Literature Review", "Research Paper", "Annotated Bibliography"],
    "Critical Analysis": ["Critical Analysis", "Essay (any type)", "Analytical Essay"],
    "Essay Writing": ["Essay (any type)", "Argumentative Essay", "Persuasive Essay", "Expository Essay"],
    "Research Papers": ["Research Paper", "Term Paper", "Thesis", "Dissertation Chapter"],
    "Academic Writing": ["Essay (any type)", "Research Paper", "Term Paper", "Academic Paper"],
    "Creative Writing": ["Creative Writing", "Narrative Essay", "Descriptive Essay", "Short Story"],
    "Business Writing": ["Business Plan", "Case Study", "Business Report", "Market Analysis"],
    "Technical Writing": ["Technical Report", "Lab Report", "Research Proposal", "White Paper"],
    "Mathematics": ["Homework Help", "Problem Set", "Math Assignment", "Calculus Problems"],
    "Statistics": ["Data Analysis", "Statistical Analysis", "Homework Help", "Regression Analysis"],
    "Science": ["Lab Report", "Research Paper", "Scientific Report", "Case Study"],
    "History": ["Essay (any type)", "Research Paper", "Historical Analysis", "Book Review"],
    "Psychology": ["Research Paper", "Case Study", "Essay (any type)", "Literature Review"],
    "Sociology": ["Research Paper", "Essay (any type)", "Case Study", "Social Analysis"],
    "English": ["Essay (any type)", "Literary Analysis", "Research Paper", "Composition"],
    "Writing": ["Essay (any type)", "Content Writing", "Article", "Research Paper"]
  };
  
  // Default paper types if specialization not found
  const defaultPaperTypes = ["Essay (any type)", "Research Paper", "Homework Help", "Assignment"];
  
  // ==================== WRITER RESPONSES ====================
  
  const writerResponses = [
    "Thank you so much! It was a pleasure working on your project. 😊",
    "❤️ Glad you loved it! Looking forward to our next collaboration.",
    "👍",
    "🙏 Thank you for the kind words!",
    "So happy I could help! 😊",
    "Thank you! Always happy to assist.",
    "Appreciate the feedback! 🙏",
    "It was my pleasure! Thanks for trusting me with your work.",
    "🙏 Congratulations on your success!",
    "Thank you! I'm here whenever you need help again.",
    "😊 Glad everything worked out perfectly!",
    "Thanks for the opportunity to work on this!",
    "❤️ Your success is my success!",
    "Thank you for the wonderful review!",
    "🎉 So glad you're happy with the results!"
  ];
  
  // ==================== DATE GENERATION ====================
  
  function generateReviewDate(): Date {
    // 15-month rolling window from today
    const today = new Date()
    const fifteenMonthsAgo = new Date()
    fifteenMonthsAgo.setMonth(today.getMonth() - 15)
    
    // Random date within window
    const timeSpan = today.getTime() - fifteenMonthsAgo.getTime()
    const randomTime = Math.random() * timeSpan
    const reviewDate = new Date(fifteenMonthsAgo.getTime() + randomTime)
    
    // Add random hours/minutes
    reviewDate.setHours(Math.floor(Math.random() * 24))
    reviewDate.setMinutes(Math.floor(Math.random() * 60))
    
    return reviewDate
  }
  
  // ==================== MAIN GENERATOR ====================
  
  export function generateReviews(
    writer: Writer,
    count: number = 10
  ): GeneratedReview[] {
    const reviews: GeneratedReview[] = [];
    const firstName = writer.name.split(' ')[0];
    
    // Star distribution: 85% 5-star, 10% 4-star, 5% lower
    const starDistribution = [
      { stars: 5, probability: 0.85, templates: excellentTemplates },
      { stars: 4, probability: 0.95, templates: goodTemplates }, // Cumulative
      { stars: 3, probability: 1.0, templates: mixedTemplates }  // Cumulative
    ];
    
    // Get paper types for this writer
    let paperTypes: string[] = [];
    writer.specializations.forEach(spec => {
      const types = paperTypesBySpecialization[spec];
      if (types) {
        paperTypes = [...paperTypes, ...types];
      }
    });
    
    // Use default if no matching specializations
    if (paperTypes.length === 0) {
      paperTypes = defaultPaperTypes;
    }
    
    // Remove duplicates
    paperTypes = [...new Set(paperTypes)];
    
    for (let i = 0; i < count; i++) {
      // Determine star rating
      const rand = Math.random();
      let rating = 5;
      let templatePool = excellentTemplates;
      
      for (const dist of starDistribution) {
        if (rand < dist.probability) {
          rating = dist.stars;
          templatePool = dist.templates;
          break;
        }
      }
      
      // Select random template and insert writer name
      const template = templatePool[Math.floor(Math.random() * templatePool.length)];
      const comment = template.replace(/{name}/g, firstName);
      
      // Generate date
      const reviewDate = generateReviewDate();
      
      // Generate order number
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const year = reviewDate.getFullYear().toString().slice(-2);
      const orderNumber = `DMH${randomNum}_${year}`;
      
      // Select paper type
      const paperType = paperTypes[Math.floor(Math.random() * paperTypes.length)];
      
      // Add writer response (30% chance for 5-star, 10% for others)
      const responseChance = rating === 5 ? 0.3 : 0.1;
      const writerResponse = Math.random() < responseChance
        ? writerResponses[Math.floor(Math.random() * writerResponses.length)]
        : null;
      
      reviews.push({
        id: `rev-${i + 1}`,
        orderNumber,
        date: reviewDate.toISOString().split('T')[0],
        rating,
        comment,
        paperType,
        writerResponse
      });
    }
    
    // Sort by date (newest first)
    reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return reviews;
  }
  
  // ==================== PREMIUM REVIEWS GENERATOR ====================
  
  export function generatePremiumReviews(
    writer: Writer,
    count: number = 3
  ): GeneratedReview[] {
    const reviews: GeneratedReview[] = [];
    const firstName = writer.name.split(' ')[0];
    
    // Get paper types
    let paperTypes: string[] = [];
    writer.specializations.forEach(spec => {
      const types = paperTypesBySpecialization[spec];
      if (types) {
        paperTypes = [...paperTypes, ...types];
      }
    });
    
    if (paperTypes.length === 0) {
      paperTypes = defaultPaperTypes;
    }
    
    paperTypes = [...new Set(paperTypes)];
    
    // Premium reviews from 15-month rolling window
    const now = new Date();
    const fifteenMonthsAgo = new Date();
    fifteenMonthsAgo.setMonth(now.getMonth() - 15);
    
    for (let i = 0; i < Math.min(count, premiumTemplates.length); i++) {
      const template = premiumTemplates[i];
      const comment = template.replace(/{name}/g, firstName);
      
      // Random date in last 6 months
      const timeSpan = now.getTime() - fifteenMonthsAgo.getTime();
      const randomTime = Math.random() * timeSpan;
      const reviewDate = new Date(fifteenMonthsAgo.getTime() + randomTime);
      reviewDate.setHours(Math.floor(Math.random() * 24));
      reviewDate.setMinutes(Math.floor(Math.random() * 60));
      
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const year = reviewDate.getFullYear().toString().slice(-2);
      const orderNumber = `DMH${randomNum}_${year}`;
      
      const paperType = paperTypes[Math.floor(Math.random() * paperTypes.length)];
      
      // Premium reviews always have writer responses
      const writerResponse = writerResponses[Math.floor(Math.random() * writerResponses.length)];
      
      reviews.push({
        id: `premium-${i + 1}`,
        orderNumber,
        date: reviewDate.toISOString().split('T')[0],
        rating: 5, // Premium reviews are always 5-star
        comment,
        paperType,
        writerResponse
      });
    }
    
    // Sort by date (newest first)
    reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return reviews;
  }