"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: "omnichannel-traffic",
    number: "01",
    title: "Omnichannel Traffic & Awareness",
    tagline: "Get seen everywhere your ideal customers spend their time.",
    description:
      "We combine Social Media Management, Video Marketing, and SEO to build an omnipresent brand. We capture peak attention across platforms, turning cold audiences into engaged followers.",
    bullets: [
      "Paid & organic social media",
      "SEO & intent-based search",
      "Video production & shorts",
      "Content strategy & distribution",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="7" cy="14" r="3" fill="#9bff6e" />
        <circle cx="21" cy="7" r="3" fill="#9bff6e" />
        <circle cx="21" cy="21" r="3" fill="#9bff6e" />
        <line x1="9.6" y1="12.6" x2="18.4" y2="8.4" stroke="#9bff6e" strokeWidth="1.5" />
        <line x1="9.6" y1="15.4" x2="18.4" y2="19.6" stroke="#9bff6e" strokeWidth="1.5" />
      </svg>
    ),
    color: "#9bff6e",
    rgb: "155,255,110",
    platforms: ["Meta", "TikTok", "Google", "YouTube"],
  },
  {
    id: "lead-generation",
    number: "02",
    title: "Strategic Lead Generation",
    tagline: "High-intent prospects delivered straight to your pipeline.",
    description:
      "Traffic is useless without intent. We design automated, highly-targeted funnels focused purely on capturing qualified leads who are actively looking to buy your exact solution.",
    bullets: [
      "Targeted lead capture systems",
      "Paid ads lead acquisition",
      "Email & SMS nurturing sequences",
      "Performance tracking & attribution",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M4 6h20l-7.5 9.5v7.5l-5 3v-10.5z" stroke="#ffb347" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    color: "#ffb347",
    rgb: "255,179,71",
    platforms: ["HubSpot", "ActiveCampaign", "Zapier"],
  },
  {
    id: "funnel-optimization",
    number: "03",
    title: "Conversion Funnel Optimization",
    tagline: "Frictionless journeys that turn traffic into profit.",
    description:
      "We design, build, and optimize high-converting sales environments. Through relentless testing and UX optimization, we eliminate friction and seamlessly transition leads to paying customers.",
    bullets: [
      "Landing page & checkout design",
      "A/B split testing & heat-mapping",
      "Buyer psychology & UX analysis",
      "High-ticket closing systems",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M3 5h22l-8.5 10.5v8.5l-5-3v-5.5z" stroke="#ff6eb4" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    color: "#ff6eb4",
    rgb: "255,110,180",
    platforms: ["ClickFunnels", "Shopify", "Hotjar", "Google Optimize"],
  },
  {
    id: "retention-maximization",
    number: "04",
    title: "Retention & Value Maximization",
    tagline: "Transform one-time buyers into passionate, loyal advocates.",
    description:
      "Acquisition is just the beginning. We build powerful backend retention systems, automated follow-ups, and irresistible upsell sequences that maximize the lifetime value of every customer you win.",
    bullets: [
      "Backend offer & upsell strategy",
      "Customer lifecycle email/SMS",
      "Loyalty programs & community",
      "Churn reduction & analytics",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M4 14a10 10 0 1 1 20 0 10 10 0 0 1-20 0z" stroke="#6ee7ff" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <path d="M14 8v6l4 4" stroke="#6ee7ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "#6ee7ff",
    rgb: "110,231,255",
    platforms: ["Klaviyo", "Skool", "Stripe", "Postscript"],
  },
];

export default function ServicesSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  // sentinel -1 so first-run always triggers a state update
  const phaseRef = useRef<number>(-1);
  const [scrollActiveIdx, setScrollActiveIdx] = useState<number | null>(0);
  const [clickOverrideIdx, setClickOverrideIdx] = useState<number | null>(null);

  const activeIndex = clickOverrideIdx !== null ? clickOverrideIdx : scrollActiveIdx;

  useEffect(() => {
    const onScroll = () => {
      const outer = outerRef.current;
      if (!outer) return;

      const rect = outer.getBoundingClientRect();
      const scrolledPast = Math.max(0, -rect.top);
      const scrollable = outer.offsetHeight - window.innerHeight;

      if (scrollable <= 0) return;

      let newActive: number = 0;

      if (scrolledPast > 0) {
        const n = services.length;
        if (scrolledPast >= scrollable) {
          // Keep the last accordion open as it scrolls out of view into the footer
          newActive = n - 1;
        } else {
          // n service phases (first one is open by default)
          const phaseSize = scrollable / n;
          const phase = Math.floor(scrolledPast / phaseSize);
          newActive = Math.max(0, Math.min(phase, n - 1));
        }
      }

      // Only update state when phase actually changes
      const numericNew = newActive;
      if (numericNew !== phaseRef.current) {
        phaseRef.current = numericNew;
        setScrollActiveIdx(newActive);
        setClickOverrideIdx(null); // scroll phase change clears click override
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (idx: number) => {
    setClickOverrideIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="services" className="mt-48" style={{ position: "relative" }}>
      {/* Section header — normal scroll */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 24px 40px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div style={{ display: "inline-flex", marginBottom: "20px" }}>
          <span className="tag-pill">What we do</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
          <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, maxWidth: "560px" }}>
            Four Core Services.{" "}<span className="gradient-text">One Strategy.</span>
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(240,240,248,0.5)", maxWidth: "340px", lineHeight: 1.8 }}>
            We don&apos;t do everything — we do four things exceptionally well, and we make them work together.
          </p>
        </div>
      </motion.div>

      {/* Tall outer div drives scroll — sticky inner holds the accordion */}
      <div ref={outerRef} style={{ height: "400vh", position: "relative" }}>
        <div style={{ position: "sticky", top: "82px", padding: "0 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "6px" }}>
            {services.map((svc, idx) => (
              <AccordionItem
                key={svc.id}
                service={svc}
                isOpen={activeIndex === idx}
                onClick={() => handleClick(idx)}
              />
            ))}

            {/* Scroll hint — fades out once first card opens */}
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "20px" }}>
              {services.map((svc, idx) => (
                <div
                  key={idx}
                  style={{
                    height: "3px",
                    borderRadius: "2px",
                    width: activeIndex === idx ? "28px" : "8px",
                    background: activeIndex === idx ? svc.color : "rgba(255,255,255,0.15)",
                    transition: "width 0.4s, background 0.4s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "80px" }} />
    </section>
  );
}

function AccordionItem({
  service,
  isOpen,
  onClick,
}: {
  service: (typeof services)[number];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      style={{
        background: isOpen ? "rgba(255,255,255,0.02)" : "transparent",
        border: `1px solid ${isOpen ? `rgba(${service.rgb},0.2)` : "rgba(255,255,255,0.07)"}`,
        borderRadius: "16px",
        transition: "background 0.4s ease, border-color 0.4s ease",
        overflow: "hidden",
      }}
    >
      {/* Header row — always visible, click to toggle */}
      <div
        role="button"
        aria-expanded={isOpen}
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          padding: "22px 36px",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {/* Number */}
        <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "rgba(240,240,248,0.22)", letterSpacing: "0.12em", flexShrink: 0 }}>
          {service.number}
        </span>

        {/* Divider */}
        <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)", flexShrink: 0 }} />

        {/* Icon badge */}
        <div style={{ width: 44, height: 44, borderRadius: "12px", background: `rgba(${service.rgb},0.1)`, border: `1px solid rgba(${service.rgb},0.2)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.3s" }}>
          {service.icon}
        </div>

        {/* Title + tagline */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 0 }}>
            {service.title}
          </h3>
          {/* Tagline is always visible, varying color based on active state */}
          <div>
            <p style={{ fontSize: "0.85rem", color: isOpen ? service.color : "rgba(240,240,248,0.45)", fontWeight: 600, margin: "4px 0 0", transition: "color 0.3s ease" }}>{service.tagline}</p>
          </div>
        </div>

        {/* +/× expand indicator */}
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: `1px solid ${isOpen ? `rgba(${service.rgb},0.4)` : "rgba(255,255,255,0.12)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "border-color 0.3s" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" style={{ transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)" }}>
            <path d="M7 1v12M1 7h12" stroke={isOpen ? service.color : "rgba(240,240,248,0.4)"} strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Body — collapses / expands (smooth grid transition) */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              padding: "0 36px 36px",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-12px)",
              transition: "opacity 0.65s ease, transform 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
          {/* Separator */}
          <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: "32px" }} />

          {/* 2-column body */}
          <div className="service-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
            {/* Left: description + CTA */}
            <div>
              <p style={{ fontSize: "0.9rem", color: "rgba(240,240,248,0.55)", lineHeight: 1.85, marginBottom: "28px" }}>
                {service.description}
              </p>
              <a
                href="#contact"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", fontWeight: 700, color: service.color, textDecoration: "none", transition: "gap 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "14px"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "8px"; }}
              >
                Start a project
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Right: bullets + platforms */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {service.bullets.map((bullet) => (
                  <div key={bullet} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.875rem", color: "rgba(240,240,248,0.75)", lineHeight: 1.55 }}>
                    <span style={{ width: 18, height: 18, borderRadius: "50%", background: `rgba(${service.rgb},0.12)`, border: `1px solid rgba(${service.rgb},0.4)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5l2 2 4-4" stroke={service.color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {bullet}
                  </div>
                ))}
              </div>
              <div>
                <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "rgba(240,240,248,0.28)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
                  Platforms &amp; tools
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {service.platforms.map((p) => (
                    <span key={p} style={{ padding: "5px 13px", borderRadius: "9999px", fontSize: "0.78rem", fontWeight: 600, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(240,240,248,0.6)" }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
