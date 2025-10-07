export default function TermsPage() {
    return (
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-600">
              <strong>Last Updated:</strong> January 2025
            </p>
          </div>
  
          {/* Student-Friendly Summary - 3 Cards */}
            <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Quick Summary for Students
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Card 1: Quality Guarantee */}
                <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="mb-4">
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Quality Guarantee
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    We guarantee high-quality work or your money back. Free revisions until you're satisfied.
                </p>
                </div>

                {/* Card 2: Your Responsibility */}
                <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="mb-4">
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Your Responsibility
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    Use our work as a reference and study guide. You're responsible for how you use the materials.
                </p>
                </div>

                {/* Card 3: Fair Usage */}
                <div className="bg-white border-2 border-black rounded-lg p-6 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <div className="mb-4">
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Fair Usage Policy
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    We respect academic integrity. Our services are for learning and reference purposes.
                </p>
                </div>

            </div>
            </div>
  
          {/* Content */}
          <div className="prose max-w-none text-xs">
            
            {/* 1. INTRODUCTION */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. INTRODUCTION</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please read these Terms and Conditions (these "Terms") carefully as they govern your use of our services and this website domyhomework.co (our "Site").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using this Site, placing an order, or making payment, it is deemed that you have read and agreed to these Terms. These Terms include, and hereby incorporate by reference, our <a href="/privacy" className="text-purple-600 hover:text-purple-700 underline">Privacy Policy</a>, <a href="/fair-use-policy" className="text-purple-600 hover:text-purple-700 underline">Fair Use Policy</a>, <a href="/money-back-guarantee" className="text-purple-600 hover:text-purple-700 underline">Money Back Guarantee</a>, and other relevant agreements located on the Site, as they may be in effect and modified from time to time. If you do not agree to them, do not use the Site or access the services from it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Subject to the conditions set forth herein, we may, at our sole discretion, amend these Terms at any time by posting a revised version on the Site. Any revisions to the Terms will take effect on the noted effective date.
              </p>
            </section>
  
            {/* 2. OUR SERVICES */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. OUR SERVICES</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The services we may provide our clients with on this Site are content writing, editing, proofreading, problem solving, and other related academic assistance services (the "Services"). The outcome of these Services you get is a sample paper or solution (the "Product"), which is intended to be used as set out in the Section "Product License" hereof.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
                <li>Academic writing (essays, research papers, reports, dissertations)</li>
                <li>Editing and proofreading</li>
                <li>Problem solving (math, statistics, programming, technical subjects)</li>
                <li>Research assistance</li>
              </ul>
            </section>
  
            {/* 3. ELIGIBILITY */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. ELIGIBILITY</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By placing an order, you certify that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You are an individual 18 years or older who can form legally binding contracts</li>
                <li>You are legally qualified to enter a binding contract with us</li>
                <li>You are not prohibited by law from using the Services</li>
                <li>The email address you provide is accurate and belongs to you</li>
                <li>All information provided is truthful and accurate</li>
              </ul>
            </section>
  
            {/* 4. ORDER PROCESS */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. ORDER PROCESS</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To place an Order, you will need to provide information which specifies the scope of work and delivery terms (Order Details). Requirements to Order Details depend on the Order and will be clarified through the Order Form while placing the Order. You are responsible for providing all the significant materials and clear requirements in the Order Details and Order Form.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When placing an Order, you agree to buy the Product. Payment is required upfront before work begins.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to verify the Order Details after payment to confirm whether the requirements have been successfully met. In case of non-compliance, we reserve the right to suspend execution of the Order until such mismatches are corrected.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Order Revision</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may request a free revision within the following time frames, starting from the Order deadline:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>For Products of up to 10 pages – within 14 days from the Order deadline</li>
                <li>For Products with more than 10 pages – within 30 days from the Order deadline</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To proceed with the Product revision, you will be asked to provide extra time or to extend the deadline (minimum 24 hours are needed to complete the Product revision).
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Please note that if you provide any additional data (including materials, documents or sources) once the Product is ready, you will need to make an additional Order or contact our Support team. You will have to pay additional costs in both cases.
              </p>
            </section>
  
            {/* 5. PRICING AND PAYMENT */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. PRICING AND PAYMENT</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pricing for our Services is based on academic level, deadline, complexity, and page count. All prices are quoted in USD.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Payment is required before work begins on your order</li>
                <li>We accept major credit cards, debit cards, and other payment methods as displayed at checkout</li>
                <li>Payments are processed securely through third-party payment processors</li>
                <li>The price quoted includes all standard charges unless you select optional add-ons</li>
                <li>We reserve the right to adjust pricing at any time, but orders already placed are honored at the agreed price</li>
              </ul>
            </section>
  
            {/* 6. REFUNDS */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. REFUNDS</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We allow you to request a Refund if you consider that the Product was accomplished below the standards and requirements set out in the order form.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please consider the option of revision of your Order before requesting a Refund. If you are not satisfied with the Product and/or Order Revision did not result in the desired Product, you may be entitled to request a Refund.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refund eligibility includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Full Refund:</strong> If we fail to deliver by the agreed deadline (unless caused by your actions)</li>
                <li><strong>Partial Refund:</strong> If delivered work significantly deviates from original instructions</li>
                <li><strong>Quality Issues:</strong> If work quality is below agreed standards after revision attempts</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Refund requests must be made within 14 days of delivery. Please note that if a refund is granted, you are not allowed to use the Product and all rights granted to you under the Product License are deemed terminated.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Contact orders@domyhomework.co to initiate a refund request. For complete details on our refund process, please see our <a href="/money-back-guarantee" className="text-purple-600 hover:text-purple-700 underline">Money Back Guarantee</a> page. Decisions regarding refunds are made at our sole discretion on a case-by-case basis.
              </p>
            </section>
  
            {/* 7. PRODUCT LICENSE */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. PRODUCT LICENSE</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By placing an order and ordering Services that result in providing you with the Product on our Site, you are hereby granted a license to use the Product as specified hereof (the "Product License").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under the Product License upon the Product delivery, you are granted a non-exclusive, limited, non-transferable right to use the Product for your personal purposes (including educational ones) in non-commercial manner without any further distribution.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are not assigned any copyright, and we keep full copyright in any Products delivered to you.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree that copying the Product; issuing copies of the Product to the public; communicating, renting or lending the Product to the public; passing the Product as your own development are restricted acts. Indeed, you can use the Product as a supplementary source for getting acquainted with a particular topic; for referencing; for making your own research and getting ideas to reflect in your own copyrighted development, etc. Please see our <a href="/fair-use-policy" className="text-purple-600 hover:text-purple-700 underline">Fair Use Policy</a> for more details on appropriate usage.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Neither we nor any of our affiliates and/or partners shall be liable for your inappropriate, illegal, unethical, or otherwise wrongful use of the Product by you. This includes plagiarism, expulsion, academic probation, loss of scholarships / titles / awards / prizes / grants / positions, lawsuits, poor grading, failure, suspension, or any other disciplinary or legal actions.</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                All rights granted to you under the Product License shall terminate immediately upon your breach of any part of these Terms. You are responsible for all damages and losses that we may suffer as a result of any unauthorized use of the Products.
              </p>
            </section>
  
            {/* 8. PROPRIETARY RIGHTS */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. PROPRIETARY RIGHTS</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You acknowledge that the Site and all of its content (the "Site Content"), including but not limited to source code, scripts, design of and "look and feel", HTML code, web apps, artwork, text, software, technical drawings, configurations, graphics, other files, and their selection and arrangement, are either the proprietary content of DoMyHomework.co, or are the proprietary property of our affiliates or licensors.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                All copyright and other intellectual property rights in the Site Content either are possessed wholly by or are licensed to us. All trademarks, service marks, trade names, and trade dress are proprietary to us and/or our licensors.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You are not allowed to change, publish, issue or otherwise replicate any Site Content without prior receiving our written consent. Any unauthorized copying, alteration, distribution, transmission, performance, display, or alternative use of the Site Content is prohibited.
              </p>
            </section>
  
            {/* 9. CONFIDENTIALITY */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. CONFIDENTIALITY</h2>
              <p className="text-gray-700 leading-relaxed">
                We take your privacy seriously. Your personal information and order details are kept strictly confidential. We do not share your information with your educational institution or any third parties except as necessary to provide our services (such as payment processors). For full details, see our Privacy Policy.
              </p>
            </section>
  
            {/* 10. NO WARRANTIES */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. NO WARRANTIES</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                THE SITE AND THE SERVICE, ARE PROVIDED "AS IS" AND "AS AVAILABLE". TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ANY REPRESENTATION OR WARRANTY OF ANY KIND, WHETHER EXPRESS OR IMPLIED, AS TO ANY MATTER WHATSOEVER RELATING TO THE SITE, OR THE SERVICE, AND THE PRODUCTS AND SERVICES OF OTHERS, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                WE MAKE NO GUARANTEE THAT THE CONTENT OF THE SITE IS UP-TO-DATE, ACCURATE, RELIABLE OR COMPLETE, AND YOU SHOULD NOT RELY ON OR ASSUME THE ACCURACY OR AUTHENTICITY OF ANY SUCH CONTENT.
              </p>
              <p className="text-gray-700 leading-relaxed">
                BY YOUR USE OF THE SITE, THE SERVICE, OR THE PRODUCTS AND SERVICES OF OTHERS, YOU AGREE AND ACKNOWLEDGE THAT YOUR USE OF SUCH IS AT YOUR OWN RISK. THIS SECTION SHALL SURVIVE ANY TERMINATION OF THESE TERMS. NOTHING ON THIS SITE CONSTITUTES, OR IS MEANT TO CONSTITUTE, ADVICE OF ANY KIND.
              </p>
            </section>
  
            {/* 11. LIMITATION OF LIABILITY */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. LIMITATION OF LIABILITY</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                IN NO EVENT SHALL DOMYHOMEWORK.CO AND ITS SUBSIDIARIES, DIRECTORS, EMPLOYEES, MANAGERS, OFFICERS, REPRESENTATIVES, BE LIABLE FOR ANY INDIRECT, ECONOMIC, SPECIAL, INCIDENTAL OR CONSEQUENTIAL LOSSES OR ANY OTHER DAMAGES RELATED TO: (A) THE SERVICE; (B) SITE CONTENT OR THE PRODUCTS; (C) YOUR USE OF, INABILITY TO USE, OR THE PERFORMANCE OF THE SITE; (D) ANY ERRORS OR OMISSIONS IN THE SERVICE' TECHNICAL OPERATION; OR (E) ANY DAMAGE THAT RESULTS FROM EVENTS BEYOND OUR REASONABLE CONTROL.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                IN NO EVENT WILL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES OR CAUSES OR ACTION EXCEED THE AMOUNTS PAID BY YOU, IF ANY, TO US FOR THE SPECIFIC ORDER IN QUESTION, OR $200, WHICHEVER IS GREATER.
              </p>
              <p className="text-gray-700 leading-relaxed">
                BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES OR JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
              </p>
            </section>
  
            {/* 12. INDEMNITY */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. INDEMNITY</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are solely responsible for all of your activity in connection with the Service. To the fullest extent permitted by applicable law, you agree to defend, indemnify, and hold harmless DoMyHomework.co, its affiliates, and each of its and its affiliates' employees, contractors, directors, suppliers and representatives from all liabilities, claims, and expenses, including reasonable attorneys' fees, that arise from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your use or misuse of the Service, the Site or Products</li>
                <li>Your access to any part of the Service</li>
                <li>Your violation of any third-party right, including without limitation any right of privacy or Intellectual Property Rights</li>
                <li>Your violation of these Terms or any applicable law, rule or regulation</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You will cooperate as fully required by us in the defense of any claim. These indemnity obligations shall survive any expiration or termination of your relationship with us.
              </p>
            </section>
  
            {/* 13. GENERAL */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. GENERAL</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Entire Agreement</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms set forth the entire agreement and understanding between you and DoMyHomework.co relating to the subject matter hereof and cancels and supersedes any prior or contemporaneous discussions, agreements, representations, warranties, and other communications between you and us, written or oral, to the extent they relate in any way to the subject matter hereof.
              </p>
  
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Severability</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Should any provision of the Terms be held invalid or unenforceable for any reason or to any extent, such invalidity or enforceability shall not in any manner affect or render invalid or unenforceable the remaining provisions of these Terms, and the application of that provision shall be enforced to the extent permitted by law.
              </p>
  
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Third Party Websites</h3>
              <p className="text-gray-700 leading-relaxed">
                The Site may contain links to third party websites. The inclusion of any website link does not imply an approval, endorsement or recommendation by us. You agree that you access any such website at your own risk, and that such site is not governed by the terms and conditions contained in this Agreement. We expressly disclaim any liability for these websites.
              </p>
            </section>
  
            {/* 14. CHANGES TO TERMS */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. CHANGES TO TERMS</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms from time to time. Changes will be posted on this page with an updated "Last Updated" date. Significant changes will be communicated via email if you have placed an order with us. Your continued use of our services after changes constitutes acceptance of the updated Terms.
              </p>
            </section>
  
            {/* 15. CONTACT US */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. CONTACT US</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any questions or concerns about these Terms should be brought to our attention by email to orders@domyhomework.co, and providing us with information relating to your concern.
              </p>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                <p className="text-gray-900 font-semibold mb-2">DoMyHomework.co</p>
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href="mailto:orders@domyhomework.co" className="text-purple-600 hover:text-purple-700">orders@domyhomework.co</a>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Terms Questions:</strong> Please include "Terms Question" in your email subject line
                </p>
              </div>
            </section>
  
            {/* Agreement */}
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 mt-10">
              <p className="text-gray-900 font-semibold mb-2">Agreement</p>
              <p className="text-gray-700">
                By using DoMyHomework.co, placing an order, or making payment, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
  
          </div>
        </div>
      </div>
    )
  }