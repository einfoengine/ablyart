import HeroSection from "@/components/HeroSection";
import VslSection from "@/components/VslSection";
import ServicesSection from "@/components/ServicesSection";
import TechAndSocial from "@/components/TechAndSocial";
import ValueFocusSection from "@/components/ValueFocusSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";



export default function Home() {
  return (
    // On branch maruf
    <>
      <main>
        <HeroSection />
        <VslSection />
        <ValueFocusSection />
        <ServicesSection />
        <AgitationSection />
        <PricingSection />
        <TestimonialsSection />
        <TechAndSocial />
        <BlogSection />
      </main>
      
    </>
  );
}
