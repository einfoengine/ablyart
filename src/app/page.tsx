import HeroSection from "@/components/HeroSection";
import VslSection from "@/components/VslSection";
import ServicesSection from "@/components/ServicesSection";
import CompanyLogosSection from "@/components/CompanyLogosSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TechAndSocial from "@/components/TechAndSocial";
import ValueFocusSection from "@/components/ValueFocusSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";



export default function Home() {
  return (
    // On branch maruf
    <>
      <main>
        <HeroSection />
        <VslSection />
        <ValueFocusSection />
        <ServicesSection />
        <CompanyLogosSection />
        <WhyChooseUsSection />
        <AgitationSection />
        <PricingSection />
        <TestimonialsSection />
        <TechAndSocial />
        <FaqSection />
        <BlogSection />
      </main>
      
    </>
  );
}
