"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

function FadeUp({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 0.07}>
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "0" }}>
        <button
          onClick={() => setOpen(!open)}
          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
        >
          <span style={{ fontSize: "0.95rem", fontWeight: 700, color: open ? "#f0f0f8" : "rgba(240,240,248,0.75)", transition: "color 0.2s", letterSpacing: "-0.01em" }}>
            {q}
          </span>
          <div style={{ width: "26px", height: "26px", borderRadius: "50%", border: `1px solid ${open ? "rgba(155,255,110,0.4)" : "rgba(255,255,255,0.1)"}`, background: open ? "rgba(155,255,110,0.1)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>
              <path d="M5 1v8M1 5h8" stroke={open ? "#9bff6e" : "rgba(240,240,248,0.5)"} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
              <p style={{ fontSize: "0.875rem", color: "rgba(240,240,248,0.5)", lineHeight: 1.75, paddingBottom: "20px" }}>{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

const defaultFaqs = [
  {
    q: "What digital marketing services does Ablyart provide?",
    a: "Ablyart is a full-funnel digital growth agency providing Organic Social Growth, Performance Media Buying (Ads), Technical SEO, High-Performance Website Engineering, and complete Funnel Optimization for scaling startups and B2B brands.",
  },
  {
    q: "How quickly do you respond to inquiries?",
    a: "We respond to all enquiries within 24 business hours. For urgency, use our direct email (hello@ablyart.com) and mention priority in the subject line.",
  },
  {
    q: "What is the typical timeframe to see ROI with Ablyart?",
    a: "While organic initiatives like SEO and community building compound over 3-6 months, our performance media buying and funnel optimizations typically demonstrate a positive ROI and increased qualified lead flow within the first 30 to 45 days.",
  },
  {
    q: "What happens after I submit the contact form?",
    a: "A senior strategist reviews your business details and schedules a free 30-minute growth audit call within 1–2 business days.",
  },
  {
    q: "Is the Ablyart growth audit actually free?",
    a: "100%. No pitch deck, no invoice. We audit your current marketing infrastructure and give you a custom 90-day execution roadmap — that is it.",
  },
];

export default function FaqSection({ faqs = defaultFaqs }: { faqs?: { q: string, a: string }[] }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section id="faq" style={{ padding: "100px 24px", background: "var(--background)", position: "relative" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div style={{ maxWidth: "740px", margin: "0 auto" }}>
        <SectionHeader
          titleBase="Frequently Asked"
          titleHighlight="Questions"
          subtitle="Everything you need to know about partnering with Ablyart for your growth."
          alignment="center"
        />

        <div>
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
