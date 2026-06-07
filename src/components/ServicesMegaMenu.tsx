"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const services = [
  {
    title: "SEO, GEO & AEO",
    description: "Get found on Google, AI search, and answer engines.",
    href: "/services/seo-geo-aeo",
    color: "#9bff6e",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Social Media Management",
    description: "Build trust with planned, consistent social content.",
    href: "/services/social-media-management",
    color: "#6ee7ff",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 21h8M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Media Buying",
    description: "Run paid campaigns that bring qualified traffic.",
    href: "/services/media-buying",
    color: "#ffb347",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M4 17V7M10 17V4M16 17v-6M22 17v-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M3 20h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Lead Generation",
    description: "Reach the right prospects and turn interest into calls.",
    href: "/services/lead-generation",
    color: "#ff6eb4",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M4 5h16l-6 7.5V19l-4 2v-8.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const dropdownVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: -10, scale: 0.985, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.99,
    filter: "blur(4px)",
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

export default function ServicesMegaMenu({ isScrolled }: { isScrolled: boolean }) {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const canUseDOM = typeof document !== "undefined";

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 250);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

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
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
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
          width="11"
          height="11"
          viewBox="0 0 12 12"
          fill="none"
          style={{ transition: "transform 0.25s ease", transform: open ? "rotate(180deg)" : "none" }}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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

      {canUseDOM &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div
                key="mega-menu-positioner"
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                style={{
                  position: "fixed",
                  left: "50%",
                  top: isScrolled ? "calc(16px + 64px + 12px)" : "calc(80px + 12px)",
                  transform: "translateX(-50%)",
                  width: isScrolled ? "min(1100px, calc(100vw - 32px))" : "min(1200px, calc(100vw - 48px))",
                  zIndex: 200,
                }}
              >
                <motion.div
                  key="mega-menu"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    background: "rgba(7,7,11,0.97)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    borderRadius: "20px",
                    boxShadow: "0 24px 80px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.06)",
                    backdropFilter: "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)",
                    overflow: "hidden",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      padding: "20px 24px",
                    }}
                  >
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                      {services.map((service) => (
                        <a
                          key={service.href}
                          href={service.href}
                          onClick={() => setOpen(false)}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            padding: "14px",
                            borderRadius: "10px",
                            border: "1px solid rgba(255,255,255,0.06)",
                            background: "rgba(255,255,255,0.02)",
                            textDecoration: "none",
                            transition: "border-color 0.18s, background 0.18s",
                            minHeight: "150px",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.13)";
                            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                            e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                          }}
                        >
                          <div
                            style={{
                              width: "28px",
                              height: "28px",
                              borderRadius: "7px",
                              background: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: service.color,
                            }}
                          >
                            {service.icon}
                          </div>
                          <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#f0f0f8", lineHeight: 1.25 }}>
                            {service.title}
                          </div>
                          <p style={{ fontSize: "0.68rem", color: "rgba(240,240,248,0.48)", lineHeight: 1.55, margin: 0 }}>
                            {service.description}
                          </p>
                          <div style={{ fontSize: "0.62rem", fontWeight: 700, color: "var(--accent)", marginTop: "auto" }}>
                            Explore service
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      padding: "12px 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "rgba(255,255,255,0.01)",
                    }}
                  >
                    <span style={{ fontSize: "0.72rem", color: "rgba(240,240,248,0.3)" }}>
                      Not sure which fits? We&apos;ll figure it out together.
                    </span>
                    <button
                      onClick={() => {
                        setOpen(false);
                        window.dispatchEvent(new Event("openAuditPotentialModal"));
                      }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "var(--accent)",
                        textDecoration: "none",
                        padding: "6px 14px",
                        borderRadius: "9999px",
                        background: "rgba(155,255,110,0.08)",
                        border: "1px solid rgba(155,255,110,0.2)",
                        transition: "background 0.18s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(155,255,110,0.14)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(155,255,110,0.08)";
                      }}
                    >
                      Book a Free Audit
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
