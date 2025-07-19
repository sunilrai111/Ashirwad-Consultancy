export default function ServicesSection() {
  const services = [
    {
      title: "Smart Industrial Financing",
      description:
        "Comprehensive financing solutions tailored for manufacturing excellence. From MSME growth to mega projects, we provide innovative loan products with competitive rates and flexible terms.",
      gradientFrom: "from-blue-600",
      gradientTo: "to-blue-700",
      buttonColor: "text-blue-600",
      buttonHover: "hover:bg-gray-100",
    },
    {
      title: "Government Subsidy Optimization",
      description:
        "Maximize your government benefits with our expert subsidy guidance. We help you claim capital subsidies, interest subsidies, SGST benefits, power subsidies, and more to reduce your operational costs.",
      gradientFrom: "from-green-600",
      gradientTo: "to-green-700",
      buttonColor: "text-green-600",
      buttonHover: "hover:bg-gray-100",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover how we can transform your industrial growth journey with
            our specialized solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${service.gradientFrom} ${service.gradientTo} text-white p-8 rounded-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6">{service.description}</p>
              <button
                className={`bg-white ${service.buttonColor} ${service.buttonHover} px-6 py-2 rounded-lg font-medium transition-colors duration-200`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
