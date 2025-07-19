"use client";

import { useRouter } from "next/navigation";

export default function IndustrialSubsidy() {
  const router = useRouter();

  const handleApplyNow = () => {
    router.push("/quick-enquiry");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              GOVERNMENT SUBSIDY OPTIMIZATION
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Unlock maximum government benefits with our expert subsidy
              guidance. From capital subsidies to SGST benefits, we ensure you
              claim every advantage available for your industrial growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Apply for Subsidy
              </button>
              <div className="flex items-center justify-center space-x-2 bg-white/10 px-6 py-3 rounded-lg">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-medium">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidy Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Government Subsidy Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of government subsidy programs
              designed to accelerate your industrial growth and reduce
              operational costs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Interest Subsidy
              </h3>
              <p className="text-gray-600 mb-4">
                Government support to reduce interest burden on industrial loans
                and term loans.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Up to 5% interest subsidy</li>
                <li>• Available for MSME units</li>
                <li>• Maximum 5 years benefit</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Capital Subsidy
              </h3>
              <p className="text-gray-600 mb-4">
                Direct financial support for capital investment in machinery and
                equipment.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Up to 25% of project cost</li>
                <li>• Maximum Rs. 50 Lakhs</li>
                <li>• One-time benefit</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SGST Subsidy
              </h3>
              <p className="text-gray-600 mb-4">
                State GST reimbursement for eligible industrial units and
                manufacturing facilities.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Up to 100% SGST reimbursement</li>
                <li>• Available for 5-7 years</li>
                <li>• Quarterly disbursement</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Power Subsidy
              </h3>
              <p className="text-gray-600 mb-4">
                Electricity tariff subsidy for industrial units to reduce
                operational costs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Up to Rs. 2 per unit</li>
                <li>• Available for 5 years</li>
                <li>• Monthly benefit</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Electric Duty Subsidy
              </h3>
              <p className="text-gray-600 mb-4">
                Exemption from electricity duty charges for eligible industrial
                establishments.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 100% exemption available</li>
                <li>• For new industrial units</li>
                <li>• Up to 5 years period</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Land Subsidy
              </h3>
              <p className="text-gray-600 mb-4">
                Financial support for land acquisition and industrial plot
                development.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Up to 50% land cost</li>
                <li>• Maximum 5 acres</li>
                <li>• One-time benefit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Government Schemes Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Major Government Schemes
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We help you avail benefits under various central and state
              government schemes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Central Government Schemes
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      PMEGP (Prime Minister's Employment Generation Programme)
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Subsidy up to 35% for manufacturing and service sector
                      units
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      ASPIRE (A Scheme for Promotion of Innovation, Rural
                      Entrepreneurship and Agro Industry)
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Support for rural entrepreneurship and agro-industry
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      SFURTI (Scheme of Fund for Regeneration of Traditional
                      Industries)
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Support for traditional industries and artisans
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      CLCSS (Credit Linked Capital Subsidy Scheme)
                    </h4>
                    <p className="text-gray-600 text-sm">
                      15% capital subsidy for technology upgradation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                State Government Schemes
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Industrial Promotion Policy
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive incentives for new industrial investments
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      MSME Development Policy
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Special benefits for micro, small and medium enterprises
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Export Promotion Scheme
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Incentives for export-oriented industrial units
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Women Entrepreneurship Scheme
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Special support for women-led industrial units
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits of Our Subsidy Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Maximum Benefits
              </h3>
              <p className="text-gray-600 text-sm">
                Ensure you get all eligible subsidies and benefits
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fast Processing
              </h3>
              <p className="text-gray-600 text-sm">
                Quick processing and timely disbursement
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                100% Success Rate
              </h3>
              <p className="text-gray-600 text-sm">
                Proven track record in subsidy approvals
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Expert Guidance
              </h3>
              <p className="text-gray-600 text-sm">
                Professional team with deep knowledge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Subsidy Application Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Initial Consultation
              </h3>
              <p className="text-gray-600 text-sm">
                Free consultation to understand your eligibility and
                requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Documentation
              </h3>
              <p className="text-gray-600 text-sm">
                We help you prepare and organize all required documents
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Application Submission
              </h3>
              <p className="text-gray-600 text-sm">
                Submit application to relevant government departments
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Follow-up & Disbursement
              </h3>
              <p className="text-gray-600 text-sm">
                Regular follow-up until subsidy is approved and disbursed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Apply for Industrial Subsidy?
          </h2>
          <p className="text-gray-300 mb-8">
            Get maximum government benefits with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleApplyNow}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Apply Now
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
