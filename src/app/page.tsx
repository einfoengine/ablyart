import HeroSection from "@/components/HeroSection";
import GrowthCalculatorSection from "@/components/GrowthCalculatorSection";
import HotServicesSection from "@/components/HotServicesSection";
import VslSection from "@/components/VslSection";
import ServicesSection from "@/components/ServicesSection";
import CompanyLogosSection from "@/components/CompanyLogosSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TechAndSocial from "@/components/TechAndSocial";
import ValueFocusSection from "@/components/ValueFocusSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";



export default function Home() {
  return (
    // On branch maruf
    <>
      <main>
        <HeroSection />
        <GrowthCalculatorSection />
        <HotServicesSection />
        <VslSection />
        <ValueFocusSection />
        <ServicesSection />
        <CompanyLogosSection />
        <WhyChooseUsSection />
        <AgitationSection />
        <TestimonialsSection />
        <TechAndSocial />
        <FaqSection />
        <BlogSection />
      </main>
      
    </>
  );
}
