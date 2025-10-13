import Link from 'next/link'
import Image from 'next/image'

export default function ServicesPage() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Complete Academic Services for Every Need
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                From essays to dissertations, our comprehensive services cover all academic needs. 
                Expert help across hundreds of subjects, backed by qualified professionals with proven track records.
              </p>
              <Link 
                href="https://order.domyhomework.co"
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                Get Started Now
              </Link>
            </div>

            {/* Right: Image */}
            <div className="relative h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 rounded-lg border-2 border-black drop-shadow-[7px_7px_0_#000] overflow-hidden">
                <Image 
                src="/images/services.jpg"
                alt="Academic services and homework help"
                fill
                className="object-cover"
                priority
                />
            </div>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-medium bg-purple-50 text-purple-700 px-3 py-1 rounded-full mb-4">
              Most Popular
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Top-Rated Academic Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most sought-after services, trusted by thousands of students for quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              href="/pay-someone-to-do-my-homework"
              title="Pay Someone to Do My Homework"
              description="Hire experts to complete your homework assignments"
            />
            <ServiceCard 
              href="/do-my-homework-online"
              title="Do My Homework Online"
              description="24/7 online homework help platform"
            />
            <ServiceCard 
              href="/online-homework-help"
              title="Online Homework Help"
              description="Get instant help from qualified tutors"
            />
            <ServiceCard 
              href="/professional-homework-help"
              title="Professional Homework Help"
              description="Expert assistance with guaranteed quality"
            />
          </div>
        </div>
      </section>

      {/* Writing Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Professional Writing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert writing assistance for essays, papers, and academic documents.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <ServiceLink href="/essay-writing-service" text="Essay Writing Service" />
            <ServiceLink href="/buy-essay-online" text="Buy Essay Online" />
            <ServiceLink href="/assignment-help" text="Assignment Help" />
            <ServiceLink href="/homework-writing-service" text="Homework Writing Service" />
            <ServiceLink href="/write-my-research-paper" text="Write My Research Paper" />
            <ServiceLink href="/write-my-term-paper" text="Write My Term Paper" />
            <ServiceLink href="/personal-statement-writing-service" text="Personal Statement Writing" />
            <ServiceLink href="/essay-editing-service" text="Essay Editing Service" />
            <ServiceLink href="/proofread-my-essay" text="Proofread My Essay" />
            <ServiceLink href="/write-my-literature-review" text="Literature Review" />
            <ServiceLink href="/write-my-annotated-bibliography" text="Annotated Bibliography" />
            <ServiceLink href="/case-study-writing-service" text="Case Study Writing" />
            <ServiceLink href="/discussion-board-post-help" text="Discussion Board Posts" />
            <ServiceLink href="/speech-writing-service" text="Speech Writing" />
            <ServiceLink href="/book-movie-review-writing-service" text="Book/Movie Reviews" />
          </div>
        </div>
      </section>

      {/* Math & Statistics Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Math & Statistics Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert assistance with all levels of mathematics and statistical analysis.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <ServiceLink href="/do-my-math-homework" text="Math Homework" />
            <ServiceLink href="/do-my-algebra-homework" text="Algebra" />
            <ServiceLink href="/do-my-calculus-homework" text="Calculus" />
            <ServiceLink href="/do-my-geometry-homework" text="Geometry" />
            <ServiceLink href="/do-my-statistics-homework" text="Statistics" />
          </div>
        </div>
      </section>

      {/* Sciences Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Science Homework Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for all science subjects and lab work.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <ServiceLink href="/do-my-science-homework" text="Science (General)" />
            <ServiceLink href="/do-my-chemistry-homework" text="Chemistry" />
            <ServiceLink href="/do-my-physics-homework" text="Physics" />
            <ServiceLink href="/do-my-biology-homework" text="Biology" />
          </div>
        </div>
      </section>

      {/* Business & Economics Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Business & Economics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional help with business, finance, and economics coursework.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <ServiceLink href="/do-my-business-homework" text="Business" />
            <ServiceLink href="/do-my-finance-homework" text="Finance" />
            <ServiceLink href="/do-my-accounting-homework" text="Accounting" />
            <ServiceLink href="/do-my-marketing-homework" text="Marketing" />
            <ServiceLink href="/do-my-economics-homework" text="Economics" />
            <ServiceLink href="/do-my-microeconomics-homework" text="Microeconomics" />
            <ServiceLink href="/do-my-macroeconomics-homework" text="Macroeconomics" />
          </div>
        </div>
      </section>

      {/* Humanities & Tech Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Humanities & Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert assistance across humanities subjects and programming.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <ServiceLink href="/do-my-english-homework" text="English" />
            <ServiceLink href="/do-my-psychology-homework" text="Psychology" />
            <ServiceLink href="/do-my-history-homework" text="History" />
            <ServiceLink href="/do-my-programming-homework" text="Programming" />
            <ServiceLink href="/do-my-computer-science-homework" text="Computer Science" />
            <ServiceLink href="/do-my-java-homework" text="Java" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Join thousands of students who trust us with their academic success.
          </p>
          <Link 
            href="https://order.domyhomework.co"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
          >
            Order Now
          </Link>
        </div>
      </section>

    </main>
  )
}

// Reusable Service Card Component
function ServiceCard({ 
  href, 
  title, 
  description 
}: { 
  href: string
  title: string
  description: string
}) {
  return (
    <Link 
      href={href}
      className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-purple-600 hover:shadow-lg transition-all group"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </Link>
  )
}

// Reusable Service Link Component
function ServiceLink({ 
  href, 
  text 
}: { 
  href: string
  text: string
}) {
  return (
    <Link 
      href={href}
      className="block px-4 py-3 bg-white border border-gray-200 rounded-md text-sm text-gray-700 hover:border-purple-600 hover:text-purple-600 hover:bg-purple-50 transition-all text-center font-medium"
    >
      {text}
    </Link>
  )
}