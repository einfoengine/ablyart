"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "social-media",
    number: "01",
    title: "Social Media",
    tagline: "Content that converts scrollers into buyers.",
    description:
      "We build and manage high-performing social presences across Instagram, TikTok, LinkedIn, Facebook, and X. From strategy and creative production to community management and paid social — we turn followers into revenue.",
    bullets: [
      "Platform strategy & audience research",
      "Content creation & short-form video",
      "Paid social campaigns (Meta, TikTok)",
      "Community management & growth",
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
    platforms: ["Instagram", "TikTok", "LinkedIn", "Facebook", "X"],
  },
  {
    id: "search-engines",
    number: "02",
    title: "Search Engines",
    tagline: "Rank higher. Get found. Drive intent traffic.",
    description:
      "We combine technical SEO, content strategy, and Google Ads to make sure your brand appears exactly when people are searching for what you offer. More visibility, more qualified clicks, more growth.",
    bullets: [
      "Technical SEO & site audits",
      "Keyword research & content strategy",
      "Google Ads & PPC management",
      "Local SEO & maps optimization",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="12" cy="12" r="7" stroke="#6ee7ff" strokeWidth="1.8" fill="none" />
        <line x1="17.5" y1="17.5" x2="24" y2="24" stroke="#6ee7ff" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="12" x2="15" y2="12" stroke="#6ee7ff" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="9" x2="12" y2="15" stroke="#6ee7ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "#6ee7ff",
    rgb: "110,231,255",
    platforms: ["Google", "Bing", "YouTube", "Maps", "Shopping"],
  },
  {
    id: "web-development",
    number: "03",
    title: "Web Development",
    tagline: "Sites that look great and perform even better.",
    description:
      "We design and develop fast, conversion-optimised websites and landing pages built on modern tech stacks. From brand-new builds to full redesigns — every pixel is purpose-built to turn visitors into customers.",
    bullets: [
      "Custom website & landing page design",
      "Next.js, React & Webflow builds",
      "CRO-optimised UX & UI",
      "Speed, SEO & accessibility audits",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="16" rx="2" stroke="#b09eff" strokeWidth="1.8" fill="none" />
        <line x1="3" y1="10" x2="25" y2="10" stroke="#b09eff" strokeWidth="1.5" />
        <line x1="14" y1="21" x2="14" y2="25" stroke="#b09eff" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="25" x2="19" y2="25" stroke="#b09eff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 15 L12 18 L9 21" stroke="#b09eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="14" y1="21" x2="19" y2="21" stroke="#b09eff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "#b09eff",
    rgb: "176,158,255",
    platforms: ["Next.js", "React", "Webflow", "Shopify", "WordPress"],
  },
  {
    id: "video-marketing",
    number: "04",
    title: "Video Marketing",
    tagline: "Stories that stop the scroll and drive action.",
    description:
      "From concept to publish, we handle the full video lifecycle. Whether it's brand films, social reels, motion graphics, or YouTube growth — we create video content that captures attention and converts viewers into customers.",
    bullets: [
      "Videography & studio/on-location shoots",
      "2D/3D animation & motion graphics",
      "Professional video editing & colour grade",
      "YouTube & social channel management",
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="6" width="18" height="16" rx="2" stroke="#ffb347" strokeWidth="1.8" fill="none" />
        <path d="M20 10.5l6-3v13l-6-3V10.5z" stroke="#ffb347" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <circle cx="11" cy="14" r="3" stroke="#ffb347" strokeWidth="1.5" fill="none" />
        <path d="M10 13.2l3 1.8-3 1.8V13.2z" fill="#ffb347" />
      </svg>
    ),
    color: "#ffb347",
    rgb: "255,179,71",
    platforms: ["YouTube", "Instagram", "TikTok", "Vimeo", "After Effects"],
  },
];

export default function ServicesSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  // sentinel -1 so first-run always triggers a state update
  const phaseRef = useRef<number>(-1);
  const [scrollActiveIdx, setScrollActiveIdx] = useState<number | null>(null);
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

      let newActive: number | null = null;

      if (scrolledPast > 0) {
        const n = services.length;
        if (scrolledPast >= scrollable) {
          // Keep the last accordion open as it scrolls out of view into the footer
          newActive = n - 1;
        } else {
          // +1 extra phase at start (all collapsed intro) + n service phases
          const phaseSize = scrollable / (n + 1);
          const phase = Math.floor(scrolledPast / phaseSize);
          if (phase >= 1 && phase <= n) {
            newActive = phase - 1;
          } else if (phase > n) {
            newActive = n - 1;
          }
        }
      }

      // Only update state when phase actually changes
      const numericNew = newActive === null ? -99 : newActive;
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
    <section id="services" style={{ position: "relative" }}>
      {/* Section header — normal scroll */}
      <div style={{ padding: "100px 24px 72px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "inline-flex", marginBottom: "20px" }}>
          <span className="tag-pill">What we do</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
          <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, maxWidth: "560px" }}>
            Four channels.{" "}<span className="gradient-text">One strategy.</span>
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(240,240,248,0.5)", maxWidth: "340px", lineHeight: 1.8 }}>
            We don&apos;t do everything — we do four things exceptionally well, and we make them work together.
          </p>
        </div>
      </div>

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
        background: isOpen ? "rgb(16,16,20)" : "rgb(11,11,14)",
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
          {/* Tagline slides in when open */}
          <div style={{ maxHeight: isOpen ? "28px" : "0", opacity: isOpen ? 1 : 0, overflow: "hidden", transition: "max-height 0.4s ease, opacity 0.3s ease" }}>
            <p style={{ fontSize: "0.85rem", color: service.color, fontWeight: 600, margin: "4px 0 0" }}>{service.tagline}</p>
          </div>
        </div>

        {/* +/× expand indicator */}
        <div style={{ width: 32, height: 32, borderRadius: "50%", border: `1px solid ${isOpen ? `rgba(${service.rgb},0.4)` : "rgba(255,255,255,0.12)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "border-color 0.3s" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" style={{ transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)" }}>
            <path d="M7 1v12M1 7h12" stroke={isOpen ? service.color : "rgba(240,240,248,0.4)"} strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Body — collapses / expands */}
      <div style={{ maxHeight: isOpen ? "700px" : "0", opacity: isOpen ? 1 : 0, overflow: "hidden", transition: "max-height 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease" }}>
        <div style={{ padding: "0 36px 36px" }}>
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
  );
}
