import HeroSection from "@/components/HeroSection";
import VslSection from "@/components/VslSection";
import ServicesSection from "@/components/ServicesSection";
import TechAndSocial from "@/components/TechAndSocial";
import ValueFocusSection from "@/components/ValueFocusSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <VslSection />
        <ValueFocusSection />
        <ServicesSection />
        <AgitationSection />
        <PricingSection />
        <TechAndSocial />
        <BlogSection />
      </main>
      
    </>
  );
}
