import HeroSection from "@/components/HeroSection";
import GrowthCalculatorSection from "@/components/GrowthCalculatorSection";
import HotServicesSection from "@/components/HotServicesSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TechAndSocial from "@/components/TechAndSocial";
import ValueFocusSection from "@/components/ValueFocusSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import FaqSection from "@/components/FaqSection";



export default function Home() {
  return (
    <>
      <main>
        <HeroSection id="hero-section" />
        <GrowthCalculatorSection id="growth-calculator-section" />
        <HotServicesSection id="hot-services-section" />
        {/* <VslSection id="vsl-section" /> */}
        <ValueFocusSection id="value-focus-section" />
        <ServicesSection id="services-section" />
        <AgitationSection id="agitation-section" />
        {/* <CompanyLogosSection id="company-logos-section" /> */}
        <WhyChooseUsSection id="why-choose-us-section" />
        <TechAndSocial id="tech-and-social-section" />
        <FaqSection id="faq-section" />
        <BlogSection id="blog-section" />
      </main>
      
    </>
  );
}
