"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

// ─── Data ─────────────────────────────────────────────────────────────────────

const coreServices = [
  {
    id: "omnichannel-traffic",
    number: "01",
    title: "Omnichannel Traffic & Awareness",
    tagline: "Get seen everywhere your customers spend time.",
    description:
      "We combine Social Media, Video Marketing, and SEO to build an omnipresent brand — capturing peak attention across every platform your buyers are on.",
    bullets: ["Social Media Management", "SEO & Content Strategy", "Video Production & Shorts", "Paid Social Campaigns"],
    color: "#9bff6e",
    rgb: "155,255,110",
    icon: (
      <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
        <circle cx="7" cy="14" r="3" fill="#9bff6e" />
        <circle cx="21" cy="7" r="3" fill="#9bff6e" />
        <circle cx="21" cy="21" r="3" fill="#9bff6e" />
        <line x1="9.6" y1="12.6" x2="18.4" y2="8.4" stroke="#9bff6e" strokeWidth="1.5" />
        <line x1="9.6" y1="15.4" x2="18.4" y2="19.6" stroke="#9bff6e" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "lead-generation",
    number: "02",
    title: "Strategic Lead Generation",
    tagline: "High-intent prospects, straight to your pipeline.",
    description:
      "Traffic is worthless without intent. We engineer automated, targeted funnels that consistently attract prospects who are actively looking to buy your solution.",
    bullets: ["Lead Capture Funnels", "Paid Ads Acquisition", "Email & SMS Sequences", "Attribution & Tracking"],
    color: "#ffb347",
    rgb: "255,179,71",
    icon: (
      <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
        <path d="M4 6h20l-7.5 9.5v7.5l-5 3v-10.5z" stroke="#ffb347" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: "funnel-optimization",
    number: "03",
    title: "Conversion Funnel Optimization",
    tagline: "Frictionless journeys that turn traffic into profit.",
    description:
      "We design, build, and relentlessly optimize high-converting sales environments — eliminating friction and turning curious clicks into paying customers.",
    bullets: ["Landing Page Design", "A/B Split Testing", "UX & Buyer Psychology", "High-Ticket Closing Systems"],
    color: "#ff6eb4",
    rgb: "255,110,180",
    icon: (
      <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
        <path d="M3 5h22l-8.5 10.5v8.5l-5-3v-5.5z" stroke="#ff6eb4" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: "retention-maximization",
    number: "04",
    title: "Retention & Value Maximization",
    tagline: "Turn one-time buyers into lifelong advocates.",
    description:
      "Acquisition is just the start. We build powerful backend retention systems, upsell sequences, and loyalty mechanics that maximize the lifetime value of every customer.",
    bullets: ["Backend Upsell Strategy", "Customer Lifecycle Email/SMS", "Loyalty Programs & Community", "Churn Reduction Analytics"],
    color: "#6ee7ff",
    rgb: "110,231,255",
    icon: (
      <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
        <path d="M4 14a10 10 0 1 1 20 0 10 10 0 0 1-20 0z" stroke="#6ee7ff" strokeWidth="1.8" fill="none" />
        <path d="M14 8v6l4 4" stroke="#6ee7ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const generalServices = [
  {
    id: "web-social",
    label: "Web & Social",
    description: "Social management + web presence for growing brands.",
    startingAt: "$1,500/mo",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "seo",
    label: "SEO",
    description: "Rank higher, drive organic traffic, dominate search.",
    startingAt: "$1,800/mo",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "video",
    label: "Video Marketing",
    description: "Short-form, long-form, and cinematic production.",
    startingAt: "$2,200/mo",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M17 9l5-3v12l-5-3V9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "lead-gen",
    label: "Lead Generation",
    description: "Predictable pipeline via funnels, ads & automation.",
    startingAt: "$2,000/mo",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M3 5h18l-7 9v6l-4-2v-4L3 5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

// ─── Animations ────────────────────────────────────────────────────────────────

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.985, filter: "blur(6px)" },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0, y: -6, scale: 0.99, filter: "blur(4px)",
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const detailVariants = {
  hidden: { opacity: 0, x: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1, x: 0, filter: "blur(0px)",
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0, x: -6, filter: "blur(4px)",
    transition: { duration: 0.12, ease: "easeIn" },
  },
};

// ─── Detail Panel (right column) ──────────────────────────────────────────────

function DetailPanel({ service }: { service: (typeof coreServices)[number] }) {
  return (
    <motion.div
      key={service.id}
      variants={detailVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "28px",
        borderRadius: "16px",
        background: `linear-gradient(135deg, rgba(${service.rgb},0.07) 0%, rgba(${service.rgb},0.02) 100%)`,
        border: `1px solid rgba(${service.rgb},0.18)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(${service.rgb},0.15) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, rgba(${service.rgb},0.7), transparent)`,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Icon */}
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: `rgba(${service.rgb},0.12)`,
            border: `1px solid rgba(${service.rgb},0.28)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
            flexShrink: 0,
          }}
        >
          {service.icon}
        </div>

        {/* Number + Title */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "8px" }}>
          <span
            style={{
              fontSize: "0.6rem",
              fontWeight: 800,
              letterSpacing: "0.15em",
              color: service.color,
              opacity: 0.8,
              flexShrink: 0,
            }}
          >
            {service.number}
          </span>
          <h3
            style={{
              fontSize: "0.95rem",
              fontWeight: 800,
              color: "#f0f0f8",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "0.76rem",
            color: "rgba(240,240,248,0.5)",
            lineHeight: 1.7,
            marginBottom: "20px",
          }}
        >
          {service.description}
        </p>

        {/* Bullets */}
        <div style={{ display: "flex", flexDirection: "column", gap: "9px", flex: 1 }}>
          {service.bullets.map((b) => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: service.color,
                  flexShrink: 0,
                  boxShadow: `0 0 5px ${service.color}`,
                }}
              />
              <span style={{ fontSize: "0.75rem", color: "rgba(240,240,248,0.7)", fontWeight: 500 }}>
                {b}
              </span>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <a
          href="#services"
          style={{
            marginTop: "20px",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "0.72rem",
            fontWeight: 700,
            color: service.color,
            textDecoration: "none",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            flexShrink: 0,
          }}
        >
          Explore service
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function ServicesMegaMenu({ isScrolled }: { isScrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const [activeCore, setActiveCore] = useState(0);
  const [mounted, setMounted] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMounted(true); }, []);

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 250);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  // Click outside → close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative" }}
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      {/* ── Trigger ── */}
      <button
        aria-haspopup="true"
        aria-expanded={open}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          color: open ? "#ffffff" : "rgba(240,240,248,0.6)",
          fontWeight: open ? 600 : 500,
          fontSize: "0.9rem",
          fontFamily: "inherit",
          transition: "color 0.2s",
          position: "relative",
        }}
      >
        Services
        <svg
          width="11" height="11" viewBox="0 0 12 12" fill="none"
          style={{ transition: "transform 0.25s ease", transform: open ? "rotate(180deg)" : "none" }}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* Active dot */}
        <span
          style={{
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: open ? "translateX(-50%) scale(1)" : "translateX(-50%) scale(0)",
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "var(--accent)",
            boxShadow: "0 0 8px var(--accent)",
            opacity: open ? 1 : 0,
            transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </button>

      {/* ── Dropdown via Portal (escapes header transform stacking context) ── */}
      {mounted && createPortal(
        <AnimatePresence>
        {open && (
          <motion.div
            key="mega-menu"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            style={{
              position: "fixed",
              // Centre on the viewport, not on the trigger
              left: "50vw",
              top: isScrolled ? "calc(16px + 64px + 12px)" : "calc(80px + 12px)",
              transform: "translateX(-50%)",
              width: isScrolled ? "min(1100px, calc(100vw - 32px))" : "min(1200px, calc(100vw - 48px))",
              background: "rgba(7,7,11,0.97)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "20px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.06)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              zIndex: 200,
              overflow: "hidden",
            }}
          >
            {/* Main body: left list + right detail */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", minHeight: "320px" }}>

              {/* ── LEFT: Core Services stacked column ── */}
              <div style={{ padding: "24px 0 0 24px" }}>
                {/* Section label */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px", paddingRight: "24px" }}>
                  <span style={{
                    width: "6px", height: "6px", borderRadius: "50%",
                    background: "var(--accent)", boxShadow: "0 0 8px var(--accent)",
                    display: "inline-block", flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.16em",
                    textTransform: "uppercase", color: "rgba(240,240,248,0.3)",
                  }}>
                    Core Growth Services
                  </span>
                </div>

                {/* 4 service rows */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {coreServices.map((svc, i) => {
                    const isActive = activeCore === i;
                    return (
                      <div
                        key={svc.id}
                        onMouseEnter={() => setActiveCore(i)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          padding: "13px 20px 13px 0",
                          borderRadius: "12px",
                          cursor: "default",
                          transition: "background 0.18s ease",
                          background: isActive ? `rgba(${svc.rgb},0.06)` : "transparent",
                          position: "relative",
                          marginRight: "12px",
                        }}
                      >
                        {/* Left accent bar */}
                        <div
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "3px",
                            height: isActive ? "60%" : "0%",
                            borderRadius: "2px",
                            background: svc.color,
                            transition: "height 0.2s ease",
                            boxShadow: isActive ? `0 0 8px ${svc.color}` : "none",
                          }}
                        />

                        {/* Padding to account for accent bar */}
                        <div style={{ paddingLeft: "14px", display: "flex", alignItems: "center", gap: "14px", flex: 1 }}>
                          {/* Icon badge */}
                          <div
                            style={{
                              width: "38px",
                              height: "38px",
                              borderRadius: "10px",
                              background: isActive ? `rgba(${svc.rgb},0.14)` : "rgba(255,255,255,0.04)",
                              border: `1px solid ${isActive ? `rgba(${svc.rgb},0.3)` : "rgba(255,255,255,0.07)"}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              transition: "background 0.2s, border-color 0.2s",
                            }}
                          >
                            {svc.icon}
                          </div>

                          {/* Text */}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                              <span style={{
                                fontSize: "0.58rem", fontWeight: 800,
                                letterSpacing: "0.14em", color: `rgba(${svc.rgb},${isActive ? 0.9 : 0.45})`,
                                transition: "color 0.2s", flexShrink: 0,
                              }}>
                                {svc.number}
                              </span>
                              <span style={{
                                fontSize: "0.85rem", fontWeight: 700,
                                color: isActive ? "#f0f0f8" : "rgba(240,240,248,0.72)",
                                letterSpacing: "-0.01em",
                                transition: "color 0.2s",
                              }}>
                                {svc.title}
                              </span>
                            </div>
                            <p style={{
                              fontSize: "0.7rem",
                              color: isActive ? "rgba(240,240,248,0.5)" : "rgba(240,240,248,0.3)",
                              marginTop: "2px",
                              lineHeight: 1.45,
                              transition: "color 0.2s",
                            }}>
                              {svc.tagline}
                            </p>
                          </div>

                          {/* Chevron */}
                          <div style={{
                            color: isActive ? svc.color : "rgba(255,255,255,0.18)",
                            transition: "color 0.2s, transform 0.2s",
                            transform: isActive ? "translateX(3px)" : "none",
                            flexShrink: 0,
                          }}>
                            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* General Services label + strip */}
                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    marginTop: "16px",
                    paddingTop: "16px",
                    paddingBottom: "20px",
                    paddingRight: "24px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <span style={{
                      width: "6px", height: "6px", borderRadius: "50%",
                      background: "rgba(240,240,248,0.25)", display: "inline-block", flexShrink: 0,
                    }} />
                    <span style={{
                      fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.16em",
                      textTransform: "uppercase", color: "rgba(240,240,248,0.3)",
                    }}>
                      General Packages
                    </span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                    {generalServices.map((svc) => (
                      <a
                        key={svc.id}
                        href="#pricing"
                        onClick={() => setOpen(false)}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                          padding: "12px",
                          borderRadius: "10px",
                          border: "1px solid rgba(255,255,255,0.06)",
                          background: "rgba(255,255,255,0.02)",
                          textDecoration: "none",
                          transition: "border-color 0.18s, background 0.18s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.13)";
                          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                        }}
                      >
                        <div style={{
                          width: "28px", height: "28px", borderRadius: "7px",
                          background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "rgba(240,240,248,0.5)",
                        }}>
                          {svc.icon}
                        </div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#f0f0f8" }}>{svc.label}</div>
                        <div style={{ fontSize: "0.62rem", fontWeight: 700, color: "var(--accent)", marginTop: "auto" }}>
                          From {svc.startingAt}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Detail panel ── */}
              <div
                style={{
                  borderLeft: "1px solid rgba(255,255,255,0.06)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <AnimatePresence mode="wait">
                  <DetailPanel key={coreServices[activeCore].id} service={coreServices[activeCore]} />
                </AnimatePresence>
              </div>
            </div>

            {/* ── Footer strip ── */}
            <div style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              padding: "12px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(255,255,255,0.01)",
            }}>
              <span style={{ fontSize: "0.72rem", color: "rgba(240,240,248,0.3)" }}>
                Not sure which fits? We&apos;ll figure it out together.
              </span>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  fontSize: "0.72rem", fontWeight: 700, color: "var(--accent)",
                  textDecoration: "none", padding: "6px 14px", borderRadius: "9999px",
                  background: "rgba(155,255,110,0.08)", border: "1px solid rgba(155,255,110,0.2)",
                  transition: "background 0.18s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(155,255,110,0.14)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(155,255,110,0.08)"; }}
              >
                Book a Free Audit
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
