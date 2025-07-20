"use client";

import { useRouter } from "next/navigation";

export default function EnquiryForm() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/quick-enquiry");
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Any Query or Requirements?</h2>
        <p className="text-gray-300 mb-8">
          Submit your details below and we&apos;ll get back to you
        </p>

        <div className="bg-white/10 p-8 rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white"
              />
              <input
                type="tel"
                placeholder="Mobile No."
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white"
              />
              <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-white">
                <option value="">Select Service</option>
                <option value="industrial-loan">Industrial Loan</option>
                <option value="industrial-subsidy">Industrial Subsidy</option>
              </select>
            </div>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-white"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
