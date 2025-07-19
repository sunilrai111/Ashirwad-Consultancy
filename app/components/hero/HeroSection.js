export default function HeroSection({
  title,
  subtitle,
  primaryButtonText = "Quick Enquiry",
  secondaryButtonText = null,
  phoneNumber = "+91 98765 43210",
  gradientFrom = "from-blue-600",
  gradientTo = "to-blue-800",
  showPhone = true,
}) {
  return (
    <section
      className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              {primaryButtonText}
            </button>
            {secondaryButtonText && (
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                {secondaryButtonText}
              </button>
            )}
            {showPhone && (
              <div className="flex items-center justify-center space-x-2 bg-white/10 px-6 py-3 rounded-lg">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-medium">{phoneNumber}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
