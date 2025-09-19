import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">DoMyHomework.co</h3>
            <p className="text-gray-600 mb-4">Professional homework help for students worldwide.</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/do-my-homework-online" className="hover:text-blue-600">Essay Writing</Link></li>
              <li><Link href="/professional-homework-help" className="hover:text-blue-600">Research Papers</Link></li>
              <li><Link href="/homework-writing-service" className="hover:text-blue-600">Coursework</Link></li>
              <li><Link href="/pay-someone-to-do-my-homework" className="hover:text-blue-600">General Help</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/how-it-works" className="hover:text-blue-600">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link href="/reviews" className="hover:text-blue-600">Reviews</Link></li>
              <li><Link href="/top-writers" className="hover:text-blue-600">Our Writers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>24/7 Support</li>
              <li>Email: support@domyhomework.co</li>
              <li>Live Chat Available</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2024 DoMyHomework.co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}