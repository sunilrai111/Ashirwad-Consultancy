export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Your Trusted Financial Partner
          </h2>
          <p className="text-gray-600 mx-auto text-lg">
            <strong>Ashirwad Consultancy</strong> is your premier{" "}
            <strong>industrial financing & government subsidy</strong> partner,
            transforming business dreams into reality since 2001.
          </p>
          <p className="text-gray-600 mx-auto mt-4">
            We specialize in innovative financing solutions including Smart Term
            Loans, Advanced Machinery Finance, Dynamic Working Capital, and
            comprehensive government subsidy optimization for manufacturing
            excellence.
          </p>
          <p className="text-gray-600 mx-auto mt-4">
            With over <strong>1500+</strong> successful clients and{" "}
            <strong>Rs. 7500+ Crores</strong> in arranged financing, we&apos;ve
            established ourselves as the go-to partner for industrial growth and
            success.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.8%</div>
                <div className="text-xs text-blue-100">Success Rate</div>
              </div>
            </div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">7500+</div>
                <div className="text-xs text-green-100">Cr</div>
              </div>
            </div>
            <div className="text-gray-600 font-medium">Financing Arranged</div>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1200+</div>
                <div className="text-xs text-purple-100">Cr</div>
              </div>
            </div>
            <div className="text-gray-600 font-medium">Subsidy Secured</div>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1500+</div>
                <div className="text-xs text-orange-100">Clients</div>
              </div>
            </div>
            <div className="text-gray-600 font-medium">Happy Entrepreneurs</div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To empower industrial entrepreneurs with innovative financial
              solutions and expert guidance, enabling them to achieve
              sustainable growth and market leadership.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be the most trusted financial partner for industrial growth,
              recognized for excellence, innovation, and unwavering commitment
              to client success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
