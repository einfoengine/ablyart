import HeroSection from "@/components/HeroSection";
import VslSection from "@/components/VslSection";
import ServicesSection from "@/components/ServicesSection";
import TechAndSocial from "@/components/TechAndSocial";
import ValueFocusSection from "@/components/ValueFocusSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <VslSection />
        <ValueFocusSection />
        <TechAndSocial />
        <ServicesSection />
      </main>
      
    </>
  );
}
