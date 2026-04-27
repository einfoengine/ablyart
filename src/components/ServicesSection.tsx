"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

// [... data block unchanged ...]

const servicesData = [
  {
    id: "full-funnel",
    number: "01",
    title: "Full-Funnel Optimization",
    description: "Unlike traditional marketing that focuses on the \"top of the funnel\" (awareness), growth marketers manage the AAARRR framework (also known as Pirate Metrics):",
    bullets: [
      "Awareness: Increasing brand visibility.",
      "Acquisition: Driving traffic and leads.",
      "Activation: Ensuring the user has a great \"first experience.\"",
      "Retention: Keeping customers coming back.",
      "Referral: Turning users into brand advocates.",
      "Revenue: Increasing the lifetime value (LTV) of each customer."
    ],
    color: "#9bff6e",
    rgb: "155, 255, 110",
  },
  {
    id: "rapid-experimentation",
    number: "02",
    title: "Rapid Experimentation and Testing",
    description: "A core duty is running continuous experiments to find \"growth levers.\" This includes:",
    bullets: [
      "A/B Testing: Comparing different versions of landing pages, email subject lines, or ad creatives.",
      "Multivariate Testing: Testing multiple variables simultaneously to see which combination performs best.",
      "Channel Testing: Identifying which platforms (LinkedIn, Meta, Google, etc.) yield the highest ROI."
    ],
    color: "#ffec8fff",
    rgb: "255, 236, 143",
  },
  {
    id: "data-analysis",
    number: "03",
    title: "Data Analysis and Attribution",
    description: "Growth marketing is deeply rooted in analytics. Companies must:",
    bullets: [
      "Track user behavior across different platforms.",
      "Set up advanced tracking (Server-side tagging, Conversion APIs).",
      "Perform Attribution Modeling to understand which touchpoints actually led to a conversion.",
      "Monitor key KPIs like Customer Acquisition Cost (CAC) and Churn Rate."
    ],
    color: "#5d98f7ff",
    rgb: "93, 152, 247",
  },
  {
    id: "search-gen-ai",
    number: "04",
    title: "Search & Generative Engine Strategy",
    description: "They ensure the brand is discoverable where users are searching. This includes:",
    bullets: [
      "Technical SEO: Improving site speed and architecture.",
      "AEO & GEO: Optimizing content for AI-driven answers and generative search engines.",
      "Content Strategy: Creating high-quality assets that answer specific user intent."
    ],
    color: "#6ee7ff",
    rgb: "110, 231, 255",
  },
  {
    id: "cro",
    number: "05",
    title: "Conversion Rate Optimization (CRO)",
    description: "A growth firm analyzes why users aren't converting and fixes those friction points. This involves:",
    bullets: [
      "UX Audits: Identifying confusing navigation or slow-loading elements.",
      "Copywriting: Refining messaging to build trust and urgency.",
      "Landing Page Design: Building layouts that guide users toward a specific action."
    ],
    color: "#b09eff",
    rgb: "176, 158, 255",
  },
  {
    id: "lead-generation",
    number: "06",
    title: "B2B & B2C Lead Generation",
    description: "Traffic means nothing if it doesn't convert into qualified pipeline. A dedicated lead gen framework ensures:",
    bullets: [
      "Lead Magnets & Offers: Creating irresistible entry points for your buyers.",
      "Funnel Engineering: Building multi-step qualification flows that weed out bad leads.",
      "Omnichannel Capture: Intercepting intent across Search, Meta, LinkedIn, and cold email.",
      "CRM Integration: Seamlessly passing enriched data into HubSpot or Salesforce."
    ],
    color: "#ff5078",
    rgb: "255, 80, 120",
  },
  {
    id: "retention-lifecycle",
    number: "07",
    title: "Retention & Lifecycle Marketing",
    description: "It is often cheaper to keep an existing customer than to acquire a new one. Growth companies manage:",
    bullets: [
      "Email & SMS Automation: Nurturing leads through personalized sequences.",
      "Loyalty Programs: Encouraging repeat purchases.",
      "Onboarding: Helping new users understand the product's value quickly."
    ],
    color: "#73d39bff",
    rgb: "115, 211, 155",
  }
];

export default function ServicesSection({ id }: { id?: string }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef<number>(-1);
  const [scrollActiveIdx, setScrollActiveIdx] = useState<number>(0);
  const [clickActiveIdx, setClickActiveIdx] = useState<number | null>(null);

  const activeIdx = clickActiveIdx !== null ? clickActiveIdx : scrollActiveIdx;

  useEffect(() => {
    const onScroll = () => {
      const outer = outerRef.current;
      if (!outer) return;

      const rect = outer.getBoundingClientRect();
      const scrolledPast = Math.max(0, -rect.top);
      const scrollable = outer.offsetHeight - window.innerHeight;

      if (scrollable <= 0) return;

      let newActive = 0;

      if (scrolledPast > 0) {
        const n = servicesData.length;
        if (scrolledPast >= scrollable) {
          newActive = n - 1;
        } else {
          const phaseSize = scrollable / n;
          const phase = Math.floor(scrolledPast / phaseSize);
          newActive = Math.max(0, Math.min(phase, n - 1));
        }
      }

      if (newActive !== phaseRef.current) {
        phaseRef.current = newActive;
        setScrollActiveIdx(newActive);
        setClickActiveIdx(null); // Clear manual clicks on large scroll shifts
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleTabClick = (idx: number) => {
    setClickActiveIdx(idx);
    
    if (outerRef.current) {
      const n = servicesData.length;
      const scrollable = outerRef.current.offsetHeight - window.innerHeight;
      const phaseSize = scrollable / n;
      const targetScrollPast = phaseSize * idx + (phaseSize / 2);
      const targetWindowScroll = (window.scrollY + outerRef.current.getBoundingClientRect().top) + targetScrollPast;
      window.scrollTo({ top: targetWindowScroll, behavior: "smooth" });
    }
  };

  return (
    <section id={id || "services"} className="pt-24 md:pt-32" style={{ position: "relative" }}>
      
      {/* Section header */}
      <SectionHeader
        badge="No procastination, Start it today"
        titleBase="Seven steps"
        titleHighlight="Growth Engineering"
        subtitle="It's not costing you. Our active support team even help you for free! Join our community and let's grow together."
        alignment="center"
      />

      <div ref={outerRef} style={{ height: "400vh", position: "relative" }}>
        <div style={{ position: "sticky", top: "120px", paddingBottom: "120px" }}>
          {/* Tabs Layout */}
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-start">
            
            {/* Left column: The Options / Tabs */}
            <div className="flex flex-col gap-3">
              {servicesData.map((svc, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={svc.id}
                    onClick={() => handleTabClick(idx)}
                className="group"
                style={{
                  textAlign: "left",
                  padding: "20px 24px",
                  background: isActive ? `rgba(${svc.rgb}, 0.06)` : "rgba(255,255,255,0.02)",
                  border: `1px solid ${isActive ? `rgba(${svc.rgb}, 0.3)` : "rgba(255,255,255,0.05)"}`,
                  borderRadius: "16px",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  }
                }}
              >
                <div 
                  style={{ 
                    color: isActive ? svc.color : "rgba(240,240,248,0.3)", 
                    fontSize: "0.85rem", 
                    fontWeight: 800, 
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.05em",
                    transition: "color 0.3s"
                  }}
                >
                  {svc.number}
                </div>
                <div 
                  style={{
                    color: isActive ? "#ffffff" : "rgba(240,240,248,0.6)",
                    fontSize: "1.05rem",
                    fontWeight: isActive ? 700 : 500,
                    transition: "color 0.3s"
                  }}
                >
                  {svc.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right column: Dynamic Details */}
        <div className="relative" style={{ minHeight: "450px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid rgba(${servicesData[activeIdx].rgb}, 0.15)`,
                borderRadius: "24px",
                padding: "40px",
                boxShadow: `0 20px 40px rgba(0,0,0,0.5), inset 0 0 100px rgba(${servicesData[activeIdx].rgb}, 0.02)`
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "28px" }}>
                <div 
                  style={{ 
                    width: "56px", 
                    height: "56px", 
                    borderRadius: "16px", 
                    background: `linear-gradient(135deg, rgba(${servicesData[activeIdx].rgb}, 0.15), rgba(${servicesData[activeIdx].rgb}, 0.05))`, 
                    border: `1px solid rgba(${servicesData[activeIdx].rgb}, 0.3)`,
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <span style={{ color: servicesData[activeIdx].color, fontWeight: 900, fontSize: "1.1rem" }}>
                    {servicesData[activeIdx].number}
                  </span>
                </div>
                <h3 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15 }}>
                  {servicesData[activeIdx].title}
                </h3>
              </div>

              <p style={{ fontSize: "1.05rem", color: "rgba(240,240,248,0.65)", lineHeight: 1.8, marginBottom: "36px" }}>
                {servicesData[activeIdx].description}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {servicesData[activeIdx].bullets.map((bullet, i) => {
                   // Split out the bold title from the description (e.g. "Awareness: Increasing brand visibility.")
                   const splitIdx = bullet.indexOf(":");
                   const hasColon = splitIdx !== -1;
                   const boldPart = hasColon ? bullet.slice(0, splitIdx) : "";
                   const restPart = hasColon ? bullet.slice(splitIdx + 1) : bullet;

                   return (
                     <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                        <div 
                          style={{ 
                            marginTop: "8px", 
                            width: "8px", 
                            height: "8px", 
                            borderRadius: "50%", 
                            background: servicesData[activeIdx].color, 
                            boxShadow: `0 0 10px ${servicesData[activeIdx].color}`,
                            flexShrink: 0 
                          }} 
                        />
                        <p style={{ fontSize: "0.95rem", color: "rgba(240,240,248,0.7)", lineHeight: 1.6 }}>
                           {hasColon ? (
                              <>
                                 <strong style={{ color: "#ffffff", fontWeight: 700 }}>{boldPart}:</strong> {restPart}
                              </>
                           ) : (
                              bullet
                           )}
                        </p>
                     </div>
                   );
                })}
              </div>

              {/* Dynamic CTA */}
              <div style={{ marginTop: "48px" }}>
                <a
                  href={`/services/${servicesData[activeIdx].id}`}
                  style={{ 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "10px", 
                    fontSize: "0.95rem", 
                    fontWeight: 700, 
                    color: servicesData[activeIdx].color, 
                    textDecoration: "none", 
                    transition: "gap 0.3s cubic-bezier(0.16, 1, 0.3, 1)" 
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "16px"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "10px"; }}
                >
                  Explore {servicesData[activeIdx].title}
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

          </div>
        </div>
      </div>

      {/* CTA and Community Links */}
      <div className="flex flex-col items-center gap-6 mt-4 mb-20 relative z-20 px-6">
        <Button variant="primary" size="lg" href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
          Book a free session →
        </Button>
        <div className="flex items-center gap-4 text-gray-400 font-medium bg-white/5 px-6 py-3 rounded-full border border-white/10 shadow-sm">
          <span className="text-sm tracking-wide">Join our community:</span>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
            <FaLinkedin size={22} />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877f2] transition-colors">
            <FaFacebook size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
