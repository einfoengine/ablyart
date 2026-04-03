import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechAndSocial from "@/components/TechAndSocial";
import ValueFocusSection from "@/components/ValueFocusSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ValueFocusSection />
        <TechAndSocial />
        <ServicesSection />
      </main>
      
    </>
  );
}
