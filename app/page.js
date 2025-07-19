import HeroCarousel from "./components/carousel/HeroCarousel";
import AboutSection from "./components/sections/AboutSection";
import USPSection from "./components/sections/USPSection";
import ServicesSection from "./components/sections/ServicesSection";
import EnquiryForm from "./components/sections/EnquiryForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroCarousel />

      <AboutSection />

      <USPSection />

      <ServicesSection />

      <EnquiryForm />
    </div>
  );
}
