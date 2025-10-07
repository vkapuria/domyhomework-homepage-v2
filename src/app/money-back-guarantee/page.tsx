export default function MoneyBackGuaranteePage() {
    return (
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Money Back Guarantee
            </h1>
            <p className="text-gray-600">
              <strong>Last Updated:</strong> January 2025
            </p>
          </div>
  
          {/* Introduction Box */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Our Commitment to You</h2>
            <p className="text-gray-700 leading-relaxed">
              At DoMyHomework.co, we stand behind the quality of our work. If we fail to meet the agreed standards, we'll make it right or refund your money. Your satisfaction is our priority.
            </p>
          </div>
  
          {/* Content */}
          <div className="prose max-w-none text-sm">
            
            {/* What We Guarantee */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Guarantee</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Money Back Guarantee is designed to protect you and ensure you receive high-quality work that meets your requirements. We guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>On-Time Delivery:</strong> Work delivered by the agreed deadline</li>
                <li><strong>Quality Standards:</strong> Work that meets the specified academic level and requirements</li>
                <li><strong>Original Content:</strong> 100% plagiarism-free work with originality report</li>
                <li><strong>Adherence to Instructions:</strong> Work completed according to your order specifications</li>
                <li><strong>Free Revisions:</strong> Unlimited revisions within the revision period</li>
              </ul>
            </section>
  
            {/* Refund Eligibility */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">When You Can Request a Refund</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are eligible to request a refund in the following situations:
              </p>
  
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">1. Full Refund (100%)</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                You qualify for a complete refund if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Missed Deadline:</strong> We fail to deliver work by the agreed deadline through no fault of yours</li>
                <li><strong>Non-Delivery:</strong> We are unable to complete your order</li>
                <li><strong>Wrong Order:</strong> The delivered work is for a different assignment than ordered</li>
                <li><strong>Severe Quality Issues:</strong> Work fails to meet basic quality standards after revision attempts</li>
              </ul>
  
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2. Partial Refund (Up to 70%)</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                You may qualify for a partial refund if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Instructions Not Followed:</strong> Delivered work significantly deviates from your original instructions (after revision attempts)</li>
                <li><strong>Quality Below Standards:</strong> Work quality is below the agreed academic level but still usable</li>
                <li><strong>Incomplete Work:</strong> Some portions of the order are missing or inadequate</li>
                <li><strong>Late Delivery with Use:</strong> Work was delivered late but you still intend to use it</li>
              </ul>
  
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mt-6">
                <p className="text-gray-700 leading-relaxed text-sm">
                  <strong>💡 Important:</strong> The refund amount for partial refunds is determined on a case-by-case basis by our Quality Assurance Team, considering factors like the percentage of work completed, adherence to instructions, and overall quality.
                </p>
              </div>
            </section>
  
            {/* When Refunds Are NOT Available */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">When Refunds Are NOT Available</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To ensure fairness and in accordance with our <a href="/terms" className="text-purple-600 hover:text-purple-700 underline">Terms and Conditions</a>, refunds are not provided in the following situations:              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>After Approval:</strong> Once you approve the completed work</li>
                <li><strong>After Use:</strong> If you've submitted or used the work in any way</li>
                <li><strong>Change of Mind:</strong> Simple dissatisfaction without specific quality issues</li>
                <li><strong>New Requirements:</strong> Requests based on requirements not included in the original order</li>
                <li><strong>Third-Party Feedback:</strong> Refunds based solely on grades or professor feedback (unless quality issues are proven)</li>
                <li><strong>Missed Communication:</strong> Issues caused by your failure to respond to our communications</li>
                <li><strong>After Revision Period:</strong> Requests made after the 14-day revision period (for orders up to 10 pages) or 30-day period (for orders over 10 pages)</li>
                <li><strong>Incomplete Information:</strong> Problems caused by incomplete or unclear order instructions you provided</li>
              </ul>
            </section>
  
            {/* Revision First Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Try Revisions First</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before requesting a refund, we strongly encourage you to request revisions. Most issues can be resolved through our free revision process:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Unlimited Free Revisions:</strong> Available within 14 days (orders up to 10 pages) or 30 days (orders over 10 pages)</li>
                <li><strong>Quick Turnaround:</strong> Most revision requests completed within 24-48 hours</li>
                <li><strong>No Extra Cost:</strong> Revisions are completely free within the revision period</li>
                <li><strong>Direct Communication:</strong> Work directly with your writer to address concerns</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Revisions must stay within the scope of your original order instructions. If you provide new requirements or materials after work is completed, this may require a new order or additional payment.
              </p>
            </section>
  
            {/* How to Request a Refund */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request a Refund</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you believe you qualify for a refund after attempting revisions, follow these steps:
              </p>
  
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Step 1: Document the Issues</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Prepare clear evidence of quality issues or instruction violations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Original order instructions and requirements</li>
                <li>The delivered work highlighting specific problems</li>
                <li>Screenshots or documentation of issues</li>
                <li>Communication history with your writer (if applicable)</li>
                <li>Any revision requests you've made</li>
              </ul>
  
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Step 2: Contact Support</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Email our support team with your refund request:
              </p>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 mb-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:orders@domyhomework.co" className="text-purple-600 hover:text-purple-700">orders@domyhomework.co</a>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Subject Line:</strong> "Refund Request - Order #[Your Order Number]"
                </p>
              </div>
  
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Step 3: Include Required Information</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Your refund request should include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your order number</li>
                <li>Specific reasons for the refund request</li>
                <li>Supporting documentation or evidence</li>
                <li>What attempts you've made to resolve the issue (revisions requested, etc.)</li>
              </ul>
  
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Step 4: Review Process</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Our Quality Assurance Team will:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Review your order details and delivered work</li>
                <li>Verify the issues you've reported</li>
                <li>Check communication history and revision attempts</li>
                <li>Make a determination within 3-5 business days</li>
                <li>Notify you of the decision via email</li>
              </ul>
  
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Step 5: Refund Processing</h3>
              <p className="text-gray-700 leading-relaxed">
                If your refund is approved, funds will be returned via your original payment method within 5-10 business days. The exact timing depends on your bank or credit card company's processing time.
              </p>
            </section>
  
            {/* Important Conditions */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Conditions</h2>
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>⚠️ Please Note:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>No Use After Refund:</strong> If you receive a full refund, you agree not to use the delivered work in any way. All rights to the work are terminated.</li>
                  <li><strong>14-Day Window:</strong> All refund requests must be made within 14 days of the original delivery date (30 days for orders over 10 pages).</li>
                  <li><strong>One-Time Review:</strong> Each refund request is reviewed once. Our Quality Assurance Team's decision is final.</li>
                  <li><strong>Communication Required:</strong> You must respond to our support team's communications within 48 hours during the review process.</li>
                  <li><strong>Evidence Required:</strong> Vague complaints without specific examples or evidence cannot be processed.</li>
                </ul>
              </div>
            </section>
  
            {/* Quality Assurance Process */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Quality Assurance Process</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To ensure fairness, all refund requests are reviewed by our independent Quality Assurance Team, who evaluate:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Order Instructions:</strong> Whether original requirements were clear and complete</li>
                <li><strong>Work Quality:</strong> If delivered work meets the specified academic level</li>
                <li><strong>Instruction Adherence:</strong> How well work follows your guidelines</li>
                <li><strong>Revision History:</strong> What revision attempts were made and their outcomes</li>
                <li><strong>Communication:</strong> Response times and cooperation from both parties</li>
                <li><strong>Originality:</strong> Plagiarism check results and proper citations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                This objective review ensures that refund decisions are fair and based on actual quality issues rather than subjective preferences.
              </p>
            </section>
  
            {/* Tips for Success */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips to Avoid Refund Situations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most issues can be prevented by following these best practices:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Be Specific:</strong> Provide detailed, clear instructions when placing your order</li>
                <li><strong>Upload Materials:</strong> Include all relevant files, rubrics, and examples</li>
                <li><strong>Stay Available:</strong> Check your email regularly and respond promptly to questions</li>
                <li><strong>Allow Adequate Time:</strong> Choose realistic deadlines to ensure quality work</li>
                <li><strong>Review Carefully:</strong> Check delivered work thoroughly during the revision period</li>
                <li><strong>Communicate Issues:</strong> Report problems immediately rather than waiting</li>
                <li><strong>Request Revisions:</strong> Use the free revision process before considering refunds</li>
              </ul>
            </section>
  
            {/* Contact Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Guarantee?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have questions about our Money Back Guarantee or refund policy, please <a href="/contact" className="text-purple-600 hover:text-purple-700 underline">contact us</a>. We're here to ensure your satisfaction and address any concerns. For general service information, see our <a href="/terms" className="text-purple-600 hover:text-purple-700 underline">Terms and Conditions</a>.              </p>
              
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                <p className="text-gray-900 font-semibold mb-2">DoMyHomework.co Support</p>
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:orders@domyhomework.co" className="text-purple-600 hover:text-purple-700">orders@domyhomework.co</a>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Response Time:</strong> We typically respond within 1 hour during business hours
                </p>
              </div>
            </section>
  
            {/* Final Notice */}
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 mt-10">
              <p className="text-gray-900 font-semibold mb-2">Our Promise</p>
              <p className="text-gray-700 leading-relaxed">
                We're committed to delivering high-quality work that meets your expectations. Our Money Back Guarantee demonstrates our confidence in our services and our commitment to your satisfaction. If we don't deliver on our promises, we'll make it right. Learn more about our <a href="/fair-use-policy" className="text-purple-600 hover:text-purple-700 underline">Fair Use Policy</a> and <a href="/terms" className="text-purple-600 hover:text-purple-700 underline">Terms and Conditions</a>.              </p>
            </div>
  
          </div>
        </div>
      </div>
    )
  }