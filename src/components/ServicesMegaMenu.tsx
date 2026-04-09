"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextLink from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const coreServices = [
  {
    id: "omnichannel-traffic",
    number: "01",
    title: "Omnichannel Traffic & Awareness",
    tagline: "Get seen everywhere your customers spend time.",
    bullets: ["Social Media Management", "SEO & Content", "Video Production", "Paid Social"],
    color: "#9bff6e",
    rgb: "155,255,110",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
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
    bullets: ["Lead Capture Funnels", "Paid Ads", "Email & SMS Nurturing", "Attribution Tracking"],
    color: "#ffb347",
    rgb: "255,179,71",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <path d="M4 6h20l-7.5 9.5v7.5l-5 3v-10.5z" stroke="#ffb347" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: "funnel-optimization",
    number: "03",
    title: "Conversion Funnel Optimization",
    tagline: "Frictionless journeys that turn traffic into profit.",
    bullets: ["Landing Page Design", "A/B Testing", "UX & Buyer Psychology", "High-Ticket Closing"],
    color: "#ff6eb4",
    rgb: "255,110,180",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <path d="M3 5h22l-8.5 10.5v8.5l-5-3v-5.5z" stroke="#ff6eb4" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: "retention-maximization",
    number: "04",
    title: "Retention & Value Maximization",
    tagline: "Turn one-time buyers into lifelong advocates.",
    bullets: ["Backend Upsell Strategy", "Lifecycle Email/SMS", "Loyalty Programs", "Churn Analytics"],
    color: "#6ee7ff",
    rgb: "110,231,255",
    icon: (
      <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
        <path d="M4 14a10 10 0 1 1 20 0 10 10 0 0 1-20 0z" stroke="#6ee7ff" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
        <path d="M14 8v6l4 4" stroke="#6ee7ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const generalServices = [
  {
    id: "web-social",
    label: "Web & Social",
    description: "Social media management + web presence for growing brands.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    startingAt: "$1,500/mo",
  },
  {
    id: "seo",
    label: "SEO",
    description: "Rank higher, drive organic traffic, and dominate search results.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    startingAt: "$1,800/mo",
  },
  {
    id: "video",
    label: "Video Marketing",
    description: "Short-form, long-form, and cinematic video production.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M17 9l5-3v12l-5-3V9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
    startingAt: "$2,200/mo",
  },
  {
    id: "lead-gen",
    label: "Lead Generation",
    description: "Predictable pipeline with funnels, ads, and automation.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M3 5h18l-7 9v6l-4-2v-4L3 5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    startingAt: "$2,000/mo",
  },
];

// ─── Animation variants ────────────────────────────────────────────────────────

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    filter: "blur(4px)",
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── CoreServiceCard ───────────────────────────────────────────────────────────

function CoreServiceCard({
  service,
  index,
  isActive,
  onHover,
}: {
  service: (typeof coreServices)[number];
  index: number;
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={onHover}
      style={{
        padding: "16px",
        borderRadius: "14px",
        border: `1px solid ${isActive ? `rgba(${service.rgb},0.35)` : "rgba(255,255,255,0.06)"}`,
        background: isActive ? `rgba(${service.rgb},0.06)` : "rgba(255,255,255,0.02)",
        cursor: "pointer",
        transition: "all 0.2s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top glow when active */}
      {isActive && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: `linear-gradient(90deg, transparent, rgba(${service.rgb},0.8), transparent)`,
          }}
        />
      )}

      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
        {/* Icon badge */}
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            background: `rgba(${service.rgb},0.1)`,
            border: `1px solid rgba(${service.rgb},0.2)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {service.icon}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Number + Title */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
            <span
              style={{
                fontSize: "0.62rem",
                fontWeight: 700,
                color: `rgba(${service.rgb},0.7)`,
                letterSpacing: "0.12em",
                flexShrink: 0,
              }}
            >
              {service.number}
            </span>
            <h4
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: isActive ? "#f0f0f8" : "rgba(240,240,248,0.8)",
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
              }}
            >
              {service.title}
            </h4>
          </div>
          <p
            style={{
              fontSize: "0.72rem",
              color: "rgba(240,240,248,0.4)",
              lineHeight: 1.5,
            }}
          >
            {service.tagline}
          </p>
        </div>

        {/* Arrow */}
        <div
          style={{
            color: isActive ? service.color : "rgba(255,255,255,0.2)",
            transition: "color 0.2s, transform 0.2s",
            transform: isActive ? "translateX(2px)" : "none",
            flexShrink: 0,
            paddingTop: "2px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Detail Panel ──────────────────────────────────────────────────────────────

function DetailPanel({ service }: { service: (typeof coreServices)[number] }) {
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        padding: "24px",
        borderRadius: "16px",
        background: `rgba(${service.rgb},0.04)`,
        border: `1px solid rgba(${service.rgb},0.15)`,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "240px",
      }}
    >
      {/* Top: icon + title */}
      <div>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            background: `rgba(${service.rgb},0.12)`,
            border: `1px solid rgba(${service.rgb},0.25)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          {service.icon}
        </div>
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 800,
            color: "#f0f0f8",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: "8px",
          }}
        >
          {service.title}
        </h3>
        <p style={{ fontSize: "0.78rem", color: "rgba(240,240,248,0.5)", lineHeight: 1.65, marginBottom: "20px" }}>
          {service.tagline}
        </p>

        {/* Bullets */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {service.bullets.map((b) => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: service.color,
                  flexShrink: 0,
                  boxShadow: `0 0 6px ${service.color}`,
                }}
              />
              <span style={{ fontSize: "0.76rem", color: "rgba(240,240,248,0.65)", fontWeight: 500 }}>
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <a
        href="#services"
        style={{
          marginTop: "20px",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "0.75rem",
          fontWeight: 700,
          color: service.color,
          textDecoration: "none",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        Explore this service
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </motion.div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────

export default function ServicesMegaMenu({
  isScrolled,
}: {
  isScrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [hoveredCore, setHoveredCore] = useState(0);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  // Click outside to close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        triggerRef.current &&
        menuRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const activeCore = coreServices[hoveredCore];

  return (
    <div
      ref={triggerRef}
      style={{ position: "relative" }}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      {/* Trigger */}
      <button
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
        }}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Services
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          style={{
            transition: "transform 0.25s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

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
          backgroundColor: "var(--accent)",
          boxShadow: "0 0 8px var(--accent)",
          opacity: open ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      />

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            key="mega-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            style={{
              position: "absolute",
              top: "calc(100% + 20px)",
              left: "50%",
              transform: "translateX(-50%)",
              width: "760px",
              background: "rgba(8,8,12,0.97)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "24px",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              overflow: "hidden",
              zIndex: 999,
            }}
          >
            {/* Top arrow pointer */}
            <div
              style={{
                position: "absolute",
                top: "-6px",
                left: "50%",
                transform: "translateX(-50%) rotate(45deg)",
                width: "12px",
                height: "12px",
                background: "rgba(8,8,12,0.97)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRight: "none",
                borderBottom: "none",
              }}
            />

            {/* ── CORE SERVICES ─────────────────────────────────── */}
            <div style={{ padding: "24px 24px 0" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "14px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    boxShadow: "0 0 8px var(--accent)",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(240,240,248,0.35)",
                  }}
                >
                  Core Growth Services
                </span>
              </div>

              {/* 2-column: list + detail */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 220px", gap: "12px" }}>
                {/* Left: 4 service cards */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {coreServices.map((svc, i) => (
                    <CoreServiceCard
                      key={svc.id}
                      service={svc}
                      index={i}
                      isActive={hoveredCore === i}
                      onHover={() => setHoveredCore(i)}
                    />
                  ))}
                </div>

                {/* Right: Detail panel */}
                <AnimatePresence mode="wait">
                  <DetailPanel key={activeCore.id} service={activeCore} />
                </AnimatePresence>
              </div>
            </div>

            {/* ── DIVIDER ───────────────────────────────────────── */}
            <div
              style={{
                height: "1px",
                margin: "20px 24px 0",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
              }}
            />

            {/* ── GENERAL SERVICES ──────────────────────────────── */}
            <div style={{ padding: "16px 24px 20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "rgba(240,240,248,0.3)",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(240,240,248,0.35)",
                  }}
                >
                  General Packages
                </span>
              </div>

              {/* 4 general service pills */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                {generalServices.map((svc, i) => (
                  <motion.a
                    key={svc.id}
                    custom={i + 4}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    href="#pricing"
                    onClick={() => setOpen(false)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      padding: "14px",
                      borderRadius: "12px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      background: "rgba(255,255,255,0.02)",
                      textDecoration: "none",
                      transition: "border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(240,240,248,0.6)",
                      }}
                    >
                      {svc.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#f0f0f8", marginBottom: "3px" }}>
                        {svc.label}
                      </div>
                      <div style={{ fontSize: "0.68rem", color: "rgba(240,240,248,0.4)", lineHeight: 1.5 }}>
                        {svc.description}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: "var(--accent)",
                        marginTop: "auto",
                      }}
                    >
                      From {svc.startingAt}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ── FOOTER STRIP ──────────────────────────────────── */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                padding: "14px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(255,255,255,0.01)",
              }}
            >
              <span style={{ fontSize: "0.75rem", color: "rgba(240,240,248,0.35)"}}>
                Not sure which fits? We&apos;ll figure it out together.
              </span>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  textDecoration: "none",
                  padding: "7px 16px",
                  borderRadius: "9999px",
                  background: "rgba(155,255,110,0.08)",
                  border: "1px solid rgba(155,255,110,0.2)",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(155,255,110,0.14)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(155,255,110,0.08)";
                }}
              >
                Book a Free Audit
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
