"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SimpleCarousel({
  slides = [],
  autoplayDelay = 5000,
  showNavigation = true,
  showPagination = true,
  className = "",
}) {
  const defaultSlides = [
    {
      title: "Industrial Loan",
      subtitle: "Comprehensive financing solutions for manufacturing sector",
      gradientFrom: "from-blue-600",
      gradientTo: "to-blue-800",
    },
    {
      title: "Government Subsidies",
      subtitle: "Maximize benefits with expert subsidy guidance",
      gradientFrom: "from-green-600",
      gradientTo: "to-green-800",
    },
    {
      title: "MSME Solutions",
      subtitle: "Quick approval for small and medium enterprises",
      gradientFrom: "from-purple-600",
      gradientTo: "to-purple-800",
    },
  ];

  const displaySlides = slides.length > 0 ? slides : defaultSlides;

  return (
    <section className={`relative ${className}`}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={
          showPagination
            ? {
                clickable: true,
                dynamicBullets: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        loop={true}
        className="simple-swiper"
      >
        {displaySlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`bg-gradient-to-r ${slide.gradientFrom} ${slide.gradientTo} text-white min-h-[400px] flex items-center`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
                <div className="text-center">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg mb-6 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  {slide.buttonText && (
                    <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                      {slide.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {showNavigation && (
          <>
            <div className="swiper-button-prev !text-white !bg-black/20 !w-10 !h-10 !rounded-full !backdrop-blur-sm hover:!bg-black/40 transition-all duration-300"></div>
            <div className="swiper-button-next !text-white !bg-black/20 !w-10 !h-10 !rounded-full !backdrop-blur-sm hover:!bg-black/40 transition-all duration-300"></div>
          </>
        )}
      </Swiper>

      <style jsx global>{`
        .simple-swiper .swiper-pagination {
          bottom: 20px;
        }

        .simple-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 4px;
          transition: all 0.3s ease;
        }

        .simple-swiper .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.2);
        }

        .simple-swiper .swiper-button-prev::after,
        .simple-swiper .swiper-button-next::after {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
