"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── FadeUp ────────────────────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      style={style}
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const contactMethods = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 8l9 6 9-6M3 8v10a1 1 0 001 1h16a1 1 0 001-1V8M3 8a1 1 0 011-1h16a1 1 0 011 1" stroke="#9bff6e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Email Us",
    value: "hello@ablyart.com",
    href: "mailto:hello@ablyart.com",
    accent: "#9bff6e",
    rgb: "155,255,110",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.18 12a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#6ee7ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Call Us",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
    accent: "#6ee7ff",
    rgb: "110,231,255",
  },
];

const faqs = [
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
    q: "Do you work with businesses outside the US?",
    a: "Yes — we work with brands globally. We have robust asynchronous communication protocols, so time zones never stop us from delivering predictable growth.",
  },
  {
    q: "Is the Ablyart growth audit actually free?",
    a: "100%. No pitch deck, no invoice. We audit your current marketing infrastructure and give you a custom 90-day execution roadmap — that is it.",
  },
];

// ─── FAQ Item ──────────────────────────────────────────────────────────────────

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeUp delay={index * 0.07}>
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          paddingBottom: "0",
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "20px 0",
            background: "none",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <span
            style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              color: open ? "#f0f0f8" : "rgba(240,240,248,0.75)",
              transition: "color 0.2s",
              letterSpacing: "-0.01em",
            }}
          >
            {q}
          </span>
          <div
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              border: `1px solid ${open ? "rgba(155,255,110,0.4)" : "rgba(255,255,255,0.1)"}`,
              background: open ? "rgba(155,255,110,0.1)" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.2s",
            }}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              style={{ transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}
            >
              <path d="M5 1v8M1 5h8" stroke={open ? "#9bff6e" : "rgba(240,240,248,0.5)"} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(240,240,248,0.5)",
                  lineHeight: 1.75,
                  paddingBottom: "20px",
                }}
              >
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

// ─── Contact Form ──────────────────────────────────────────────────────────────

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", message: "" });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.09)",
    background: "rgba(255,255,255,0.04)",
    color: "#f0f0f8",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "64px 32px",
          minHeight: "400px",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "rgba(155,255,110,0.12)",
            border: "2px solid rgba(155,255,110,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M5 14l6 6L23 8" stroke="#9bff6e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.02em" }}>
          Message Received!
        </h3>
        <p style={{ color: "rgba(240,240,248,0.5)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "320px" }}>
          A senior strategist will review your details and reach out within 24 business hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Name + Email */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div>
          <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(240,240,248,0.5)", display: "block", marginBottom: "6px", letterSpacing: "0.04em" }}>
            Full Name *
          </label>
          <input
            required
            type="text"
            placeholder="Shane Maruf"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(155,255,110,0.4)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; }}
          />
        </div>
        <div>
          <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(240,240,248,0.5)", display: "block", marginBottom: "6px", letterSpacing: "0.04em" }}>
            Work Email *
          </label>
          <input
            required
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(155,255,110,0.4)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; }}
          />
        </div>
      </div>

      {/* Company + Budget */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div>
          <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(240,240,248,0.5)", display: "block", marginBottom: "6px", letterSpacing: "0.04em" }}>
            Company
          </label>
          <input
            type="text"
            placeholder="Acme Inc."
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            style={inputStyle}
            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(155,255,110,0.4)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; }}
          />
        </div>
        <div>
          <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(240,240,248,0.5)", display: "block", marginBottom: "6px", letterSpacing: "0.04em" }}>
            Monthly Budget
          </label>
          <select
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
            onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(155,255,110,0.4)"; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; }}
          >
            <option value="" style={{ background: "#0b0b0e" }}>Select range…</option>
            <option value="<2k" style={{ background: "#0b0b0e" }}>Under $2,000</option>
            <option value="2k-5k" style={{ background: "#0b0b0e" }}>$2,000 – $5,000</option>
            <option value="5k-10k" style={{ background: "#0b0b0e" }}>$5,000 – $10,000</option>
            <option value="10k-25k" style={{ background: "#0b0b0e" }}>$10,000 – $25,000</option>
            <option value=">25k" style={{ background: "#0b0b0e" }}>$25,000+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(240,240,248,0.5)", display: "block", marginBottom: "6px", letterSpacing: "0.04em" }}>
          Tell Us About Your Goals *
        </label>
        <textarea
          required
          rows={5}
          placeholder="What are you trying to grow? Where are you stuck? What have you tried before?"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
          onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(155,255,110,0.4)"; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; }}
        />
      </div>

      <button
        type="submit"
        className="btn-glow"
        style={{
          padding: "15px 32px",
          fontSize: "0.95rem",
          cursor: "pointer",
          border: "none",
          width: "100%",
          marginTop: "4px",
        }}
      >
        Send Message →
      </button>

      <p style={{ fontSize: "0.72rem", color: "rgba(240,240,248,0.3)", textAlign: "center" }}>
        No spam. No sales pressure. Just an honest conversation about your growth.
      </p>
    </form>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ContactPageClient() {
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
    <main id="contact" style={{ minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          paddingTop: "140px",
          paddingBottom: "80px",
          overflow: "hidden",
        }}
      >
        <div className="hero-blob-1" style={{ opacity: 0.55 }} />
        <div className="hero-blob-2" style={{ opacity: 0.4 }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(155,255,110,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(155,255,110,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "900px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
              <span className="tag-pill"><span className="glow-dot" />Get in Touch</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "22px",
            }}
          >
            Let&apos;s Build Your
            <br />
            <span className="gradient-text">Growth Engine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              color: "rgba(240,240,248,0.5)",
              lineHeight: 1.75,
              maxWidth: "580px",
              margin: "0 auto",
            }}
          >
            Fill in the form below and a senior strategist will reach out within 24 hours. No junior handoffs — you talk to the people who do the work.
          </motion.p>
        </div>
      </section>

      {/* ── Contact Methods ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 64px" }}>
        <div className="contact-methods" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", maxWidth: "800px", margin: "0 auto" }}>
          {contactMethods.map((m, i) => (
            <FadeUp key={m.label} delay={i * 0.1}>
              <a
                href={m.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    transition: "border-color 0.2s, transform 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `rgba(${m.rgb},0.35)`;
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "12px",
                      background: `rgba(${m.rgb},0.1)`,
                      border: `1px solid rgba(${m.rgb},0.25)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {m.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: m.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "3px" }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#f0f0f8" }}>{m.value}</div>
                  </div>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── Form + FAQ Grid ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "40px", alignItems: "start" }}>

          {/* Left: Form */}
          <FadeUp delay={0}>
            <div
              className="glass-card"
              style={{ padding: "40px", position: "relative", overflow: "hidden" }}
            >
              {/* Top accent line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(155,255,110,0.8), transparent)" }} />

              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "8px", letterSpacing: "-0.03em" }}>
                Book a Free Growth Audit
              </h2>
              <p style={{ fontSize: "0.85rem", color: "rgba(240,240,248,0.45)", marginBottom: "28px", lineHeight: 1.6 }}>
                Tell us about your business and goals. We&apos;ll audit your marketing and send you a personalised 90-day roadmap.
              </p>

              <ContactForm />
            </div>
          </FadeUp>

          {/* Right: Info + FAQ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* What to expect */}
            <FadeUp delay={0.15}>
              <div className="glass-card" style={{ padding: "28px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(110,231,255,0.7), transparent)" }} />
                <h3 style={{ fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6ee7ff", marginBottom: "20px" }}>
                  What Happens Next
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { step: "01", text: "You submit the form with your goals and budget." },
                    { step: "02", text: "A senior strategist reviews your details within 24h." },
                    { step: "03", text: "We schedule a 30-min free audit call at your convenience." },
                    { step: "04", text: "You receive a custom 90-day growth roadmap — free, no strings." },
                  ].map((s) => (
                    <div key={s.step} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#6ee7ff", opacity: 0.7, flexShrink: 0, paddingTop: "2px", letterSpacing: "0.06em" }}>
                        {s.step}
                      </span>
                      <span style={{ fontSize: "0.84rem", color: "rgba(240,240,248,0.6)", lineHeight: 1.6 }}>
                        {s.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Social links */}
            <FadeUp delay={0.25}>
              <div className="glass-card" style={{ padding: "24px 28px" }}>
                <h3 style={{ fontSize: "0.85rem", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(240,240,248,0.4)", marginBottom: "16px" }}>
                  Find Us Elsewhere
                </h3>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {[
                    { label: "LinkedIn", href: "https://linkedin.com/company/ablyart" },
                    { label: "Twitter / X", href: "https://twitter.com/ablyart" },
                    { label: "Instagram", href: "https://instagram.com/ablyart" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      style={{
                        padding: "8px 16px",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "40px 24px 100px", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "740px", margin: "0 auto" }}>
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "52px" }}>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, letterSpacing: "-0.035em", marginBottom: "14px" }}>
                Common <span className="gradient-text">Questions</span>
              </h2>
              <p style={{ color: "rgba(240,240,248,0.45)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Everything you need to know before reaching out.
              </p>
            </div>
          </FadeUp>

          <div>
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-methods { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .contact-methods { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
