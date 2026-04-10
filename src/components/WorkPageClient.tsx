"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────
type Category = "All" | "Social Media" | "Lead Generation" | "Funnel" | "SEO";

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  category: Category;
  tagline: string;
  description: string;
  services: string[];
  results: { label: string; value: string; delta?: string }[];
  color: string;
  rgb: string;
  duration: string;
  featured?: boolean;
}

// ─── Demo Data ────────────────────────────────────────────────────────────────
const caseStudies: CaseStudy[] = [
  {
    id: "nova-ecom",
    client: "Nova Commerce",
    industry: "E-Commerce / Fashion",
    category: "Funnel",
    tagline: "From 1.2% to 4.8% conversion rate in 90 days.",
    description:
      "Nova Commerce was burning budget on ads but losing customers at checkout. We rebuilt their entire funnel — landing pages, checkout flow, email sequences — and deployed A/B tests weekly until the numbers moved.",
    services: ["Funnel Redesign", "CRO", "Email Automation", "Paid Ads"],
    results: [
      { label: "Conversion Rate", value: "4.8%", delta: "+300%" },
      { label: "Revenue MoM", value: "$240K", delta: "+188%" },
      { label: "Cart Abandonment", value: "31%", delta: "-44%" },
      { label: "ROAS", value: "6.2×", delta: "+210%" },
    ],
    color: "#9bff6e",
    rgb: "155,255,110",
    duration: "90 days",
    featured: true,
  },
  {
    id: "apex-saas",
    client: "Apex SaaS",
    industry: "B2B / Software",
    category: "Lead Generation",
    tagline: "482 qualified demos booked in a single quarter.",
    description:
      "Apex had a great product but zero inbound engine. We built a LinkedIn outbound system paired with SEO-driven content and a high-converting demo booking funnel that flooded their pipeline with decision-makers.",
    services: ["LinkedIn Outbound", "Content Marketing", "SEO", "Demo Funnels"],
    results: [
      { label: "Demos Booked", value: "482", delta: "+0 to 482" },
      { label: "Cost per Demo", value: "$38", delta: "-62% vs target" },
      { label: "MQL to SQL", value: "68%", delta: "+45 pts" },
      { label: "ARR Added", value: "$1.2M", delta: "Q1 impact" },
    ],
    color: "#6ee7ff",
    rgb: "110,231,255",
    duration: "1 quarter",
    featured: true,
  },
  {
    id: "bright-clinic",
    client: "Bright Clinic",
    industry: "Healthcare / Aesthetics",
    category: "Social Media",
    tagline: "0 to 84K followers and fully booked 6 weeks out.",
    description:
      "Bright Clinic had no social presence. We developed a content strategy, built a production system, and ran targeted awareness campaigns that built a loyal community and filled their appointment calendar.",
    services: [
      "Social Media Management",
      "Short-Form Video",
      "Paid Social",
      "Community",
    ],
    results: [
      { label: "Followers Gained", value: "84K", delta: "from 0" },
      { label: "Avg. Reel Reach", value: "220K", delta: "/month" },
      { label: "Bookings Increase", value: "3.4×", delta: "MoM" },
      { label: "Waitlist", value: "6 wks", delta: "fully booked" },
    ],
    color: "#ff6eb4",
    rgb: "255,110,180",
    duration: "5 months",
  },
  {
    id: "zenith-legal",
    client: "Zenith Legal",
    industry: "Legal Services",
    category: "SEO",
    tagline: "Page 1 for 38 high-intent keywords in 4 months.",
    description:
      "Zenith was invisible on Google. We performed a full technical SEO audit, rebuilt their content architecture, and launched a targeted link-building campaign that pushed them to the top for their most competitive terms.",
    services: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"],
    results: [
      { label: "Pg-1 Keywords", value: "38", delta: "from 3" },
      { label: "Organic Traffic", value: "+312%", delta: "in 4 months" },
      { label: "Avg. Position", value: "3.1", delta: "from 24.7" },
      { label: "Leads from SEO", value: "+190%", delta: "YoY" },
    ],
    color: "#ffb347",
    rgb: "255,179,71",
    duration: "4 months",
  },
  {
    id: "pulse-fitness",
    client: "Pulse Fitness",
    industry: "Health & Wellness",
    category: "Social Media",
    tagline: "Viral campaign generated 2.1M organic impressions.",
    description:
      "Pulse wanted a brand moment. We designed and executed a 30-day challenge campaign that went viral on TikTok and Instagram, dramatically growing their email list and driving a surge in memberships.",
    services: [
      "Campaign Strategy",
      "UGC Production",
      "Influencer Outreach",
      "Email List Growth",
    ],
    results: [
      { label: "Organic Impressions", value: "2.1M", delta: "in 30 days" },
      { label: "Email Signups", value: "14,200", delta: "from campaign" },
      { label: "New Members", value: "+840", delta: "membership surge" },
      { label: "Media Coverage", value: "12", delta: "press mentions" },
    ],
    color: "#c4b5fd",
    rgb: "196,181,253",
    duration: "30 days",
  },
  {
    id: "vela-agency",
    client: "Vela Agency",
    industry: "Creative / B2B",
    category: "Lead Generation",
    tagline: "Cold email system bringing in 30+ discovery calls/month.",
    description:
      "Vela struggled to grow beyond referrals. We built a data-enriched cold email infrastructure, wrote high-converting sequences, and set up a simple CRM workflow that now runs almost entirely on autopilot.",
    services: [
      "Cold Email Infrastructure",
      "Copywriting",
      "CRM Setup",
      "Automation",
    ],
    results: [
      { label: "Discovery Calls/Mo", value: "30+", delta: "from 4" },
      { label: "Open Rate", value: "54%", delta: "industry avg: 24%" },
      { label: "Reply Rate", value: "11%", delta: "industry avg: 3%" },
      { label: "Pipeline Growth", value: "8×", delta: "in 60 days" },
    ],
    color: "#a3e635",
    rgb: "163,230,53",
    duration: "60 days",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Social Media",
  "Lead Generation",
  "Funnel",
  "SEO",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section className="w-full px-4 md:px-10 pb-32 pt-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto relative rounded-[40px] overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(155,255,110,0.12) 0%, rgba(110,231,255,0.08) 100%)",
          border: "1px solid rgba(155,255,110,0.2)",
          padding: "80px 48px",
        }}
      >
        {/* Glow blob */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(155,255,110,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="relative z-10 text-center">
          <span className="tag-pill mb-6 inline-flex">Ready to be next?</span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Let&apos;s Build Your{" "}
            <span className="gradient-text">Success Story</span>
          </h2>
          <p
            style={{
              color: "rgba(240,240,248,0.55)",
              fontSize: "1.05rem",
              maxWidth: "480px",
              margin: "0 auto 40px",
              lineHeight: 1.75,
            }}
          >
            Book a free strategy call. We&apos;ll audit your current setup and
            show you exactly where the growth is hiding.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#contact"
              className="btn-glow"
              style={{
                padding: "16px 36px",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Book a Free Strategy Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <Link
              href="/"
              className="btn-outline"
              style={{
                padding: "16px 36px",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Featured Card ────────────────────────────────────────────────────────────
function FeaturedCard({ study }: { study: CaseStudy }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? `rgba(${study.rgb},0.35)` : "rgba(255,255,255,0.07)"}`,
        borderRadius: "28px",
        padding: "48px",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.35s ease, transform 0.35s ease",
        transform: hovered ? "translateY(-6px)" : "none",
        cursor: "default",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "400px",
          height: "300px",
          background: `radial-gradient(ellipse at top right, rgba(${study.rgb},0.12) 0%, transparent 70%)`,
          pointerEvents: "none",
          transition: "opacity 0.4s",
          opacity: hovered ? 1 : 0.6,
        }}
      />
      {/* Featured badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
        <span
          style={{
            padding: "4px 14px",
            borderRadius: "9999px",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            background: `rgba(${study.rgb},0.12)`,
            color: study.color,
            border: `1px solid rgba(${study.rgb},0.3)`,
          }}
        >
          ★ Featured Case Study
        </span>
        <span style={{ fontSize: "0.78rem", color: "rgba(240,240,248,0.35)", fontWeight: 500 }}>
          {study.duration} · {study.industry}
        </span>
      </div>

      <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start" }}>
        {/* Left */}
        <div>
          <h3
            style={{
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            {study.client}
          </h3>
          <p style={{ color: study.color, fontWeight: 700, fontSize: "1.05rem", marginBottom: "20px" }}>
            &ldquo;{study.tagline}&rdquo;
          </p>
          <p style={{ color: "rgba(240,240,248,0.5)", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "28px" }}>
            {study.description}
          </p>
          {/* Services */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {study.services.map((s) => (
              <span
                key={s}
                style={{
                  padding: "5px 14px",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  color: "rgba(240,240,248,0.65)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Results grid */}
        <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {study.results.map((r) => (
            <div
              key={r.label}
              style={{
                padding: "24px 20px",
                borderRadius: "16px",
                background: `rgba(${study.rgb},0.05)`,
                border: `1px solid rgba(${study.rgb},0.15)`,
              }}
            >
              <div
                style={{
                  fontSize: "clamp(1.6rem, 2vw, 2rem)",
                  fontWeight: 900,
                  color: study.color,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {r.value}
              </div>
              {r.delta && (
                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: study.color, opacity: 0.7, marginBottom: "6px" }}>
                  {r.delta}
                </div>
              )}
              <div style={{ fontSize: "0.78rem", color: "rgba(240,240,248,0.45)", fontWeight: 500 }}>
                {r.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Regular Card ─────────────────────────────────────────────────────────────
function StudyCard({ study }: { study: CaseStudy }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? `rgba(${study.rgb},0.3)` : "rgba(255,255,255,0.07)"}`,
        borderRadius: "24px",
        padding: "36px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-6px)" : "none",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Glow top-right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "260px",
          height: "180px",
          background: `radial-gradient(ellipse at top right, rgba(${study.rgb},0.1) 0%, transparent 70%)`,
          pointerEvents: "none",
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.4s",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
        <div>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: study.color,
              display: "block",
              marginBottom: "6px",
            }}
          >
            {study.category} · {study.duration}
          </span>
          <h3
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            {study.client}
          </h3>
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(240,240,248,0.4)",
              marginTop: "4px",
              fontWeight: 500,
            }}
          >
            {study.industry}
          </p>
        </div>
        {/* Color dot */}
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            background: `rgba(${study.rgb},0.12)`,
            border: `1px solid rgba(${study.rgb},0.25)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: study.color,
              boxShadow: `0 0 10px ${study.color}`,
            }}
          />
        </div>
      </div>

      {/* Tagline */}
      <p
        style={{
          fontSize: "0.92rem",
          fontWeight: 700,
          color: "rgba(240,240,248,0.85)",
          lineHeight: 1.5,
          marginBottom: "20px",
          fontStyle: "italic",
        }}
      >
        &ldquo;{study.tagline}&rdquo;
      </p>

      {/* Results — 2×2 mini grid */}
      <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "24px" }}>
        {study.results.slice(0, 4).map((r) => (
          <div
            key={r.label}
            style={{
              padding: "14px 16px",
              borderRadius: "12px",
              background: `rgba(${study.rgb},0.06)`,
              border: `1px solid rgba(${study.rgb},0.12)`,
            }}
          >
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 900,
                color: study.color,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: "4px",
              }}
            >
              {r.value}
            </div>
            <div style={{ fontSize: "0.7rem", color: "rgba(240,240,248,0.4)", fontWeight: 500 }}>
              {r.label}
            </div>
          </div>
        ))}
      </div>

      {/* Services row */}
      <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {study.services.map((s) => (
          <span
            key={s}
            style={{
              padding: "4px 12px",
              borderRadius: "9999px",
              fontSize: "0.72rem",
              fontWeight: 600,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(240,240,248,0.5)",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function WorkPageClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const featured = caseStudies.filter((s) => s.featured);
  const filtered =
    activeCategory === "All"
      ? caseStudies.filter((s) => !s.featured)
      : caseStudies.filter(
          (s) => s.category === activeCategory && !s.featured
        );

  // When category changes, also include featured if they match
  const allFiltered =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((s) => s.category === activeCategory);

  const featuredFiltered =
    activeCategory === "All"
      ? featured
      : allFiltered.filter((s) => s.featured);

  const regularFiltered =
    activeCategory === "All"
      ? filtered
      : allFiltered.filter((s) => !s.featured);

  const stats = [
    { value: "12+", label: "Brands Scaled" },
    { value: "3.8×", label: "Avg. ROAS" },
    { value: "$4.2M+", label: "Revenue Generated" },
    { value: "98%", label: "Client Retention" },
  ];

  return (
    <main
      style={{ background: "var(--background)", minHeight: "100vh", paddingTop: "100px" }}
    >
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient blobs */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "-200px",
            width: "600px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(155,255,110,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "100px",
            right: "-150px",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(110,231,255,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <div style={{ marginBottom: "20px" }}>
            <span className="tag-pill">Our Work</span>
          </div>
          <h1
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 1.0,
              maxWidth: "700px",
              marginBottom: "24px",
            }}
          >
            Real Brands.{" "}
            <span className="gradient-text">Real Results.</span>
          </h1>
          <p
            style={{
              color: "rgba(240,240,248,0.5)",
              fontSize: "1.1rem",
              maxWidth: "520px",
              lineHeight: 1.8,
              marginBottom: "56px",
            }}
          >
            We let the numbers do the talking. Explore how we&apos;ve helped
            founders and brand teams break through plateaus and scale with
            precision.
          </p>

          {/* Stats row */}
          <div
            className="about-stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2px",
              maxWidth: "680px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 20px",
                  background: "rgba(6,6,8,0.6)",
                  textAlign: "center",
                  borderRight:
                    i < stats.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    color: "var(--accent)",
                    marginBottom: "4px",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "0.72rem", color: "rgba(240,240,248,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FILTER TABS ───────────────────────────────────────────────────── */}
      <section
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 48px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "9px 22px",
                  borderRadius: "9999px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  border: isActive
                    ? "1px solid rgba(155,255,110,0.5)"
                    : "1px solid rgba(255,255,255,0.08)",
                  background: isActive
                    ? "rgba(155,255,110,0.12)"
                    : "rgba(255,255,255,0.03)",
                  color: isActive ? "var(--accent)" : "rgba(240,240,248,0.55)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  letterSpacing: "0.03em",
                }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────────────────────── */}
      <section
        ref={gridRef}
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 48px" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {/* Featured — full-width cards */}
            {featuredFiltered.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "20px" }}>
                {featuredFiltered.map((study) => (
                  <FeaturedCard key={study.id} study={study} />
                ))}
              </div>
            )}

            {/* Regular — 3-col grid */}
            {regularFiltered.length > 0 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))",
                  gap: "20px",
                }}
              >
                {regularFiltered.map((study) => (
                  <StudyCard key={study.id} study={study} />
                ))}
              </div>
            )}

            {/* Empty state */}
            {featuredFiltered.length === 0 && regularFiltered.length === 0 && (
              <motion.div
                variants={cardVariants}
                style={{ textAlign: "center", padding: "80px 24px", color: "rgba(240,240,248,0.3)" }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>📂</div>
                <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                  No case studies in this category yet.
                </p>
                <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>
                  Check back soon — more are on the way.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Divider */}
      <div style={{ maxWidth: "1200px", margin: "0 auto 0", padding: "0 24px" }}>
        <div className="divider" />
      </div>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <CtaBanner />


    </main>
  );
}
