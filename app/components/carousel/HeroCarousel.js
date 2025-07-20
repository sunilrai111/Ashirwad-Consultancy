"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import WorkInProgress from "../ui/WorkInProgress";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function HeroCarousel() {
  const router = useRouter();
  const [showWorkInProgress, setShowWorkInProgress] = useState(false);
  const [workInProgressConfig, setWorkInProgressConfig] = useState({});

  const handleSecondaryButtonClick = (buttonText) => {
    let title = "Coming Soon!";
    let message = "We&apos;re working hard to bring you something amazing.";

    switch (buttonText) {
      case "Explore Solutions":
        title = "Solutions Explorer";
        message =
          "Our comprehensive solutions explorer is under development. You&apos;ll soon be able to browse all our services in detail.";
        break;
      case "Check Eligibility":
        title = "Eligibility Checker";
        message =
          "Our advanced eligibility checker is being developed. For now, please use our quick enquiry form for eligibility assessment.";
        break;
      case "Download Guide":
        title = "Government Benefits Guide";
        message =
          "Our comprehensive guide to government benefits and subsidies is being prepared. Contact us for immediate assistance.";
        break;
      case "View Products":
        title = "Product Catalog";
        message =
          "Our detailed product catalog is under development. Contact us to learn about our machinery financing options.";
        break;
      default:
        title = "Feature Coming Soon";
        message =
          "This feature is currently under development. We&apos;ll notify you when it&apos;s ready!";
    }

    setWorkInProgressConfig({ title, message });
    setShowWorkInProgress(true);
  };

  const slides = [
    {
      title: "YOUR INDUSTRIAL GROWTH PARTNER",
      subtitle:
        "Transform your manufacturing dreams into reality with Ashirwad&apos;s expert financial solutions. From MSME growth to mega projects, we&apos;re your trusted partner for success.",
      primaryButtonText: "Start Your Journey",
      secondaryButtonText: "Explore Solutions",
      gradientFrom: "from-blue-600",
      gradientTo: "to-blue-800",
      phoneNumber: "+91 9714631847",
      backgroundImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    },
    {
      title: "SMART MSME SOLUTIONS",
      subtitle:
        "Accelerate your business growth with our innovative MSME financing. Competitive rates from 7.5%, quick processing, and flexible terms designed for your success.",
      primaryButtonText: "Get Started",
      secondaryButtonText: "Check Eligibility",
      gradientFrom: "from-green-600",
      gradientTo: "to-green-800",
      phoneNumber: "+91 9714631847",
      backgroundImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "MAXIMIZE GOVERNMENT BENEFITS",
      subtitle:
        "Unlock the full potential of government subsidies with our expert guidance. From capital subsidies to SGST benefits, we ensure you get every advantage available.",
      primaryButtonText: "Claim Benefits",
      secondaryButtonText: "Download Guide",
      gradientFrom: "from-purple-600",
      gradientTo: "to-purple-800",
      phoneNumber: "+91 9714631847",
      backgroundImage:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    },
    {
      title: "FUTURE-READY MACHINERY FINANCE",
      subtitle:
        "Stay ahead of the competition with our advanced machinery financing. From automation to cutting-edge technology, we fund your path to industrial excellence.",
      primaryButtonText: "Get Quote",
      secondaryButtonText: "View Products",
      gradientFrom: "from-orange-600",
      gradientTo: "to-orange-800",
      phoneNumber: "+91 9714631847",
      backgroundImage:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

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
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative min-h-[600px] flex items-center"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay with gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${slide.gradientFrom} ${slide.gradientTo} opacity-80`}
              ></div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in-delay text-white">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
                    <button
                      className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                      onClick={() => router.push("/quick-enquiry")}
                    >
                      {slide.primaryButtonText}
                    </button>
                    <button
                      className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                      onClick={() =>
                        handleSecondaryButtonClick(slide.secondaryButtonText)
                      }
                    >
                      {slide.secondaryButtonText}
                    </button>
                    <div className="flex items-center justify-center space-x-2 bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                      <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="font-medium text-white">
                        {slide.phoneNumber}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-white !bg-black/20 !w-12 !h-12 !rounded-full !backdrop-blur-sm hover:!bg-black/40 transition-all duration-300"></div>
        <div className="swiper-button-next !text-white !bg-black/20 !w-12 !h-12 !rounded-full !backdrop-blur-sm hover:!bg-black/40 transition-all duration-300"></div>
      </Swiper>

      {/* Custom Pagination */}
      <style jsx global>{`
        .hero-swiper .swiper-pagination {
          bottom: 30px;
        }

        .hero-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          width: 12px;
          height: 12px;
          margin: 0 6px;
          transition: all 0.3s ease;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.2);
        }

        .hero-swiper .swiper-button-prev::after,
        .hero-swiper .swiper-button-next::after {
          font-size: 18px;
          font-weight: bold;
        }

        /* Animation classes */
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
