"use client";

import React from "react";
import Head from "next/head";

export default function PrivacyPage() {
    return (
      <div className="bg-white">
        
        {/* Student-Friendly Summary Section */}
        <section className="bg-gradient-to-br from-purple-50 to-white py-16 sm:py-20 border-b-2 border-gray-200">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Promise to Students
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1: Confidential */}
              <div className="bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  100% Confidential
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your school or university will never know you used our services.
                </p>
              </div>
  
              {/* Card 2: No Data Selling */}
              <div className="bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  No Data Selling
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We never sell or share your personal information with third parties.
                </p>
              </div>
  
              {/* Card 3: Safe Payments */}
              <div className="bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Safe Payments
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Transactions are processed via trusted, encrypted payment gateways.
                </p>
              </div>
  
            </div>
          </div>
        </section>
  
        {/* Main Privacy Policy Content */}
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              <strong>Last Updated:</strong> January 2025
            </p>
          </div>
  
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-10">
              <p className="text-gray-700 leading-relaxed">
                At DoMyHomework.co ("we," "us," or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our academic assistance services. For information about our service terms, please see our <a href="/terms" className="text-purple-600 hover:text-purple-700 underline">Terms and Conditions</a>.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>
  
            {/* 1. Information We Collect */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed">
                When you use our services, we may collect the following personal information:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li><strong>Contact Information:</strong> Name, email address, phone number</li>
                <li><strong>Account Information:</strong> Username, password, and account preferences</li>
                <li><strong>Academic Information:</strong> Educational level, institution name, subject areas</li>
                <li><strong>Order Information:</strong> Assignment details, deadlines, special instructions</li>
                <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely through our payment processors)</li>
              </ul>
  
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages</li>
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience</li>
              </ul>
            </section>
  
            {/* 2. How We Use Your Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Delivery:</strong> To process and complete your homework assistance orders</li>
                <li><strong>Communication:</strong> To send order confirmations, updates, and respond to inquiries</li>
                <li><strong>Quality Assurance:</strong> To match you with appropriate experts and ensure high-quality work</li>
                <li><strong>Payment Processing:</strong> To process payments and prevent fraudulent transactions</li>
                <li><strong>Customer Support:</strong> To provide assistance and resolve any issues</li>
                <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our platform</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                <li><strong>Marketing:</strong> To send promotional emails about our services (you can opt-out anytime)</li>
              </ul>
            </section>
  
            {/* 3. Information Sharing and Disclosure */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We respect your privacy and do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Expert Writers:</strong> We share necessary assignment details with matched experts to complete your order</li>
                <li><strong>Service Providers:</strong> We work with trusted third-party providers (payment processors, hosting services, analytics tools) who assist in operating our platform</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale, your information may be transferred</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>We do NOT share your personal information with your educational institution.</strong> Your use of our services is completely confidential.
              </p>
            </section>
  
            {/* 4. Data Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>SSL/TLS encryption for all data transmission</li>
                <li>Secure payment processing through PCI-DSS compliant payment gateways</li>
                <li>Regular security audits and updates</li>
                <li>Restricted access to personal information on a need-to-know basis</li>
                <li>Encrypted data storage</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>
  
            {/* 5. Cookies and Tracking Technologies */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use cookies and similar tracking technologies to enhance your experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Track your activity to show relevant advertisements</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
              </p>
            </section>
  
            {/* 6. Data Retention */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>Account information is retained while your account is active</li>
                <li>Order history and completed assignments are retained for quality assurance and dispute resolution</li>
                <li>Financial records are retained as required by law (typically 7 years)</li>
                <li>You may request deletion of your data by contacting us at orders@domyhomework.co</li>
              </ul>
            </section>
  
            {/* 7. Your Privacy Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, contact us at <a href="mailto:orders@domyhomework.co" className="text-purple-600 hover:text-purple-700 font-medium">orders@domyhomework.co</a>
              </p>
            </section>
  
            {/* 8. Third-Party Links */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>
  
            {/* 9. Children's Privacy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are intended for users aged 18 and older. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a minor, please contact us immediately at orders@domyhomework.co.
              </p>
            </section>
  
            {/* 10. International Users */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Users</h2>
              <p className="text-gray-700 leading-relaxed">
                If you are accessing our services from outside the United States, please note that your information may be transferred to, stored, and processed in the United States where our servers are located. By using our services, you consent to this transfer.
              </p>
            </section>
  
            {/* 11. Changes to This Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>Posting the updated policy on this page with a new "Last Updated" date</li>
                <li>Sending an email notification to registered users (for material changes)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </section>
  
            {/* 12. Contact Us */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                <p className="text-gray-900 font-semibold mb-2">DoMyHomework.co</p>
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:orders@domyhomework.co" className="text-purple-600 hover:text-purple-700">orders@domyhomework.co</a>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Privacy Requests:</strong> Please include "Privacy Request" in your email subject line
                </p>
              </div>
            </section>
  
            {/* Consent */}
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 mt-10">
              <p className="text-gray-900 font-semibold mb-2">Your Consent</p>
              <p className="text-gray-700">
                By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. Please also review our <a href="/terms" className="text-purple-600 hover:text-purple-700 underline">Terms and Conditions</a> for complete information about using our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }