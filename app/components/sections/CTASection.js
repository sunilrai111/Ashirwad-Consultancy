"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import WorkInProgress from "../ui/WorkInProgress";

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
  const [showWorkInProgress, setShowWorkInProgress] = useState(false);
  const [workInProgressConfig, setWorkInProgressConfig] = useState({});

  const handlePrimaryClick = () => {
    router.push("/quick-enquiry");
  };

  const handleSecondaryClick = () => {
    if (secondaryButtonText?.toLowerCase().includes("brochure")) {
      setWorkInProgressConfig({
        title: "Brochure Download",
        message:
          "Our comprehensive company brochure is being prepared. Contact us for detailed information about our services.",
      });
      setShowWorkInProgress(true);
    } else if (secondaryButtonLink && secondaryButtonLink !== "#") {
      router.push(secondaryButtonLink);
    } else {
      setWorkInProgressConfig({
        title: "Coming Soon!",
        message:
          "This feature is currently under development. We'll notify you when it's ready!",
      });
      setShowWorkInProgress(true);
    }
  };

  if (showWorkInProgress) {
    return (
      <WorkInProgress
        title={workInProgressConfig.title}
        message={workInProgressConfig.message}
        showBackButton={true}
      />
    );
  }

  return (
    <section className={`py-16 ${bgColor} ${textColor}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handlePrimaryClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {primaryButtonText}
          </button>
          {secondaryButtonText && (
            <button
              onClick={handleSecondaryClick}
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
