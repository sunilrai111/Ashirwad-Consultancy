"use client";

import { useRouter } from "next/navigation";

export default function CTASection({
  title,
  subtitle,
  primaryButtonText = "Get Started",
  secondaryButtonText = null,
  primaryButtonLink = "#",
  secondaryButtonLink = "#",
  bgColor = "bg-gray-900",
  textColor = "text-white",
}) {
  const router = useRouter();

  const handlePrimaryClick = () => {
    router.push("/quick-enquiry");
  };

  const handleSecondaryClick = () => {
    if (secondaryButtonLink && secondaryButtonLink !== "#") {
      router.push(secondaryButtonLink);
    }
  };

  return (
    <section className={`py-16 ${bgColor} ${textColor}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handlePrimaryClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            {primaryButtonText}
          </button>
          {secondaryButtonText && (
            <button
              onClick={handleSecondaryClick}
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
