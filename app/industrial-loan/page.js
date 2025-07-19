"use client";

import { useRouter } from "next/navigation";
import LoanTypesSection from "../components/sections/LoanTypesSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import CTASection from "../components/sections/CTASection";
import HeroSection from "../components/hero/HeroSection";

export default function IndustrialLoan() {
  const router = useRouter();

  const handleCheckEligibility = () => {
    router.push("/quick-enquiry");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <HeroSection
        title="INDUSTRIAL LOAN"
        subtitle="We are arranging bank loan for the manufacturing sector in the form of MSME Loan, Term Loan, Machinery Loan, Working Capital Loan, Cash Credit, Project Loan to meet their financial requirements."
        primaryButtonText="Apply Now"
        gradientFrom="from-blue-600"
        gradientTo="to-blue-800"
      /> */}

      <LoanTypesSection />

      <FeaturesSection
        title="Why Choose Our Loan Services?"
        bgColor="bg-blue-50"
      />

      {/* Requirements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Loan Requirements
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Business Documents
                    </h3>
                    <p className="text-gray-600 text-sm">
                      PAN Card, Aadhar Card, Business Registration, GST
                      Registration
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Financial Statements
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Last 3 years audited financial statements, bank statements
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Project Details
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Project report, machinery quotations, land documents
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Security</h3>
                    <p className="text-gray-600 text-sm">
                      Property mortgage, machinery hypothecation, personal
                      guarantee
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Eligibility Check
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Manufacturing</option>
                    <option>Service</option>
                    <option>Trading</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Turnover
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Below 1 Cr</option>
                    <option>1-5 Cr</option>
                    <option>5-25 Cr</option>
                    <option>Above 25 Cr</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount Required
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Below 50 Lakhs</option>
                    <option>50 Lakhs - 2 Cr</option>
                    <option>2-10 Cr</option>
                    <option>Above 10 Cr</option>
                  </select>
                </div>
                <button
                  onClick={handleCheckEligibility}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200"
                >
                  Check Eligibility
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Your Industrial Loan?"
        subtitle="Get in touch with our experts for personalized loan solutions"
        primaryButtonText="Apply Now"
        secondaryButtonText="Download Brochure"
      />
    </div>
  );
}
