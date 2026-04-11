"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import ValueFocusSection from "@/components/ValueFocusSection";
import { FaSearch, FaCode, FaLink, FaMapMarkerAlt } from "react-icons/fa";

const deliverables = [
  {
    title: "Capture High-Intent Traffic (Technical & On-Page)",
    desc: "We completely overhaul your website's architecture and content. By fixing indexation errors, optimizing metadata, and improving site speed, we ensure Google effortlessly crawls and ranks your most profitable pages.",
  },
  {
    title: "Dominate the Content Authority (Content Strategy)",
    desc: "Stop guessing what to write. We deploy data-backed, keyword-rich content clusters that position your website as the definitive, undeniable authority in your industry.",
  },
  {
    title: "Build Unshakeable Domain Trust (Link Building)",
    desc: "We secure high-quality, relevant backlinks from trusted industry publications. Strong link equity is the fuel that permanently locks your pages into the top 3 search results.",
  },
  {
    title: "Monopolize Your Geography (Local SEO)",
    desc: "For local businesses, we aggressively optimize your Google Business Profile and local citations, ensuring your phone rings every time a nearby customer searches for your service.",
  }
];

const seoPackages = [
  {
    name: "Local Authority",
    price: "$1,800",
    period: "/mo",
    description: "Dominate local search results and capture high-intent geographic traffic.",
    features: [
      "Google Business Profile Optimization",
      "Local Citation Building",
      "Basic Google Search Ads Setup",
      "Basic Technical SEO Audit",
      "Keyword Tracking (Up to 50)"
    ],
    detailedDeliverables: [
      {
        title: "Local SEO Setup",
        quantity: "1 Location + 50 Citations",
        quality: "Fully filled maps, 100% NAP consistency",
        time: "Spread out over first 3 months"
      },
      {
        title: "Paid Search (PPC)",
        quantity: "Google Search Ads Launch",
        quality: "High-intent local keywords targeting, strict budget control",
        time: "Daily ad monitoring"
      },
      {
        title: "Content Optimization",
        quantity: "2 Target SEO Blogs/mo",
        quality: "SurferSEO optimized (Score 80+), human written",
        time: "Bi-weekly publishing"
      }
    ],
    isPopular: false,
  },
  {
    name: "National Ascend",
    price: "$3,500",
    period: "/mo",
    description: "Aggressive organic & paid growth targeting highly competitive national keywords.",
    features: [
      "Comprehensive Technical SEO",
      "Advanced PPC Management ($10k Spend)",
      "High-Quality Backlink Building",
      "Paid Retargeting Interception",
      "Advanced Schema Markup",
      "Monthly Strategy Deep-Dive"
    ],
    detailedDeliverables: [
      {
        title: "PPC Engine & Retargeting",
        quantity: "Google Ads + Performance Max",
        quality: "Split-tested ad copy, deep conversion API tracking",
        time: "Daily optimization & Hourly checks"
      },
      {
        title: "Technical Foundation",
        quantity: "Full Site Architecture Fix",
        quality: "Zero broken links, lightning fast load, canonicals fixed",
        time: "First 45 Days"
      },
      {
        title: "Pillar Content & Backlinks",
        quantity: "4 Indepth Articles + 3-5 DR 40+ Links",
        quality: "Industry-expert level research, genuine outreach",
        time: "Weekly alignment"
      }
    ],
    isPopular: true,
  },
  {
    name: "Enterprise Dominance",
    price: "$7,000+",
    period: "/mo",
    description: "Massive scale SEO & aggressive ad buys for massive websites.",
    features: [
      "Programmatic SEO Strategy",
      "Enterprise PPC Scale ($50k+ Spend)",
      "Google Shopping / PMax Ads",
      "Digital PR & Link Acquisition",
      "Log File & Crawl Analysis",
      "Custom ROI Reporting"
    ],
    detailedDeliverables: [
      {
        title: "Mass Scale Ads (PPC)",
        quantity: "Unlimited Campaigns & Spend Mgmt",
        quality: "Automated bidding rules, rigorous negative keywords",
        time: "Always-on dedicated monitoring"
      },
      {
        title: "Programmatic Scale",
        quantity: "Thousands of Generated Pages",
        quality: "High-quality dynamic data combining without cannibalization",
        time: "3-6 Month deployment cycle"
      },
      {
        title: "Competitor Interception",
        quantity: "Deep Gap Analysis & Ad Bidding",
        quality: "Stealing traffic directly from competitor branded terms",
        time: "Monthly sprint planning"
      }
    ],
    isPopular: false,
  }
];

const seoArticles = [
  {
    category: "Technical Rescue",
    date: "Sep 12, 2024",
    title: "How We Recovered a Site from a 60% Google Core Update Penalty",
    excerpt: "When thin content and poor technical structure crush your traffic, here is the exact 30-day technical sprint we use to bounce back.",
    imageGrad: "linear-gradient(135deg, rgba(155,255,110,0.15) 0%, rgba(155,255,110,0.02) 100%)",
  },
  {
    category: "Content Strategy",
    date: "Oct 05, 2024",
    title: "The Topic Cluster Model That Generated $240k in Organic Pipeline",
    excerpt: "Stop writing random blog posts. Learn how semantic clustering forces Google to view you as the definitive topical authority.",
    imageGrad: "linear-gradient(135deg, rgba(110,231,255,0.15) 0%, rgba(110,231,255,0.02) 100%)",
  },
  {
    category: "Link Building",
    date: "Nov 18, 2024",
    title: "Why 1 Good Backlink is Worth 100 'Toxic' Directory Submissions",
    excerpt: "The truth about modern link building. We break down our digital PR process that lands placements on DR 70+ industry publications.",
    imageGrad: "linear-gradient(135deg, rgba(176,158,255,0.15) 0%, rgba(176,158,255,0.02) 100%)",
  }
];

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        paddingTop: "140px",
        paddingBottom: "100px",
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}>
            <span className="tag-pill">
              <span className="glow-dot" style={{ backgroundColor: "#9bff6e", boxShadow: "0 0 10px #9bff6e" }} />
              Organic Growth Strategy
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: "28px",
            color: "#f0f0f8",
          }}
        >
          SEO & Paid <br />
          <span className="gradient-text">Domination</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            color: "rgba(240,240,248,0.5)",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            maxWidth: "680px",
            margin: "0 auto 48px",
            lineHeight: 1.75,
          }}
        >
          Capture the highest-converting traffic on the internet. We deploy elite technical SEO, strategic content clustering, and high-authority link building to rank you #1 when your customers are ready to buy.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#pricing"
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
            View Pricing
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function SeoPageClient() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <HeroSection />
      
      {/* Wavy Marquee SVG */}
      <div style={{ width: "100%", overflow: "hidden", position: "relative", zIndex: 10, marginTop: "-40px", marginBottom: "40px" }}>
        <svg width="4000" height="140" viewBox="0 0 4000 140" style={{ display: "block" }}>
          <path id="wavy-path-static" d="M 0 70 Q 250 10 500 70 T 1000 70 T 1500 70 T 2000 70 T 2500 70 T 3000 70 T 3500 70 T 4000 70" fill="none" stroke="var(--accent)" strokeWidth="52" />
          <text fill="#060608" fontSize="20" fontWeight="900" letterSpacing="0.1em">
            <textPath href="#wavy-path-static" startOffset="0" textLength="6000" dominantBaseline="central">
              TECHNICAL ARCHITECTURE ✦ CONTENT STRATEGY ✦ LINK BUILDING ✦ LOCAL AUTHORITY ✦ TECHNICAL ARCHITECTURE ✦ CONTENT STRATEGY ✦ LINK BUILDING ✦ LOCAL AUTHORITY ✦ TECHNICAL ARCHITECTURE ✦ CONTENT STRATEGY ✦ LINK BUILDING ✦ LOCAL AUTHORITY ✦ 
              <animate attributeName="startOffset" from="0" to="-1000" dur="12s" repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>
      </div>

      <ValueFocusSection 
        badge="The Organic Flywheel"
        titleBase="How We Command"
        titleHighlight="Search Engines"
        subtitle="SEO is not magic; it's a math equation. We systematically satisfy Google's core ranking pillars to guarantee predictable, sustainable traffic growth."
        customFeatures={[
          {
            title: "Technical Excellence",
            description: "We optimize your codebase, site speed, and indexability so search bots can instantly crawl and rank your most valuable pages.",
            icon: <FaCode size={32} />
          },
          {
            title: "Contextual Relevance",
            description: "Deep keyword gap analysis and topic clustering ensure you capture high-intent searches that your competitors are missing.",
            icon: <FaSearch size={32} />
          },
          {
            title: "Authority Acquisition",
            description: "We launch digital PR campaigns to acquire powerful, editorial backlinks that permanently boost your domain authority.",
            icon: <FaLink size={32} />
          },
          {
            title: "Local Supremacy",
            description: "Hyper-localized on-page optimization and citation building to guarantee you show up in the top 3 Google Maps pack.",
            icon: <FaMapMarkerAlt size={32} />
          }
        ]}
        hideBottomSection={true}
      />

      <section style={{ padding: "100px 24px", background: "var(--background)", position: "relative" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#f0f0f8", marginBottom: "16px", letterSpacing: "-0.03em" }}>
              How Do We <span className="gradient-text">Actually Help You</span>
            </h2>
            <p style={{ color: "rgba(240,240,248,0.5)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              We do not just offer technical audits; we deliver tangible growth. Here is exactly how our SEO campaigns drive revenue.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {deliverables.map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: "rgba(255,255,255,0.03)", 
                  border: "1px solid rgba(255,255,255,0.08)", 
                  borderRadius: "16px", 
                  padding: "32px",
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start"
                }}
              >
                <div style={{ 
                  width: "48px", height: "48px", borderRadius: "12px", 
                  background: "rgba(155,255,110,0.1)", 
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, color: "var(--accent)", fontSize: "1.2rem", fontWeight: 900
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#f0f0f8", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ color: "rgba(240,240,248,0.6)", lineHeight: 1.6, fontSize: "0.95rem" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AgitationSection 
        badge="The Cost of Ignorance"
        titleBase="Why Your Competitors"
        titleHighlight="Are Winning"
        subtitle="If you aren't on the first page, you don't exist. Here is why your current web strategy is actively handing money to your competitors."
        customAgitations={[
          {
            service: "Buried Rankings",
            title: "Zero Inbound Pipeline",
            pain: "75% of users never scroll past the first page of search results. If you rely on referrals because your organic search is dead, your revenue growth is effectively capped.",
            accent: "rgba(255, 80, 80, 0.2)",
            textAccent: "#ff5050"
          },
          {
            service: "Poor Architecture",
            title: "Bleeding Paid Ad Spend",
            pain: "Without SEO optimizing your landing pages, your Quality Score on Google Ads drops. You end up paying 3x more per click than your optimized competitors for the exact same traffic.",
            accent: "rgba(255, 120, 80, 0.2)",
            textAccent: "#ff7850"
          },
          {
            service: "Low Authority",
            title: "Outranked by Inferior Brands",
            pain: "It is infuriating to watch a competitor with a worse product beat you simply because they invested in link building and topical authority. They are stealing your high-intent buyers.",
            accent: "rgba(255, 179, 71, 0.2)",
            textAccent: "#ffb347"
          },
          {
            service: "Algorithm Penalties",
            title: "Traffic Wipeouts",
            pain: "Using outdated, cheap SEO tactics makes you incredibly vulnerable. A single Google Core Update can wipe out 80% of your traffic overnight if your technical baseline isn't perfect.",
            accent: "rgba(255, 80, 120, 0.2)",
            textAccent: "#ff5078"
          }
        ]}
      />
      <PricingSection customPackages={seoPackages} />
      <BlogSection 
        badge="Proof of Concept"
        titleBase="See The Rankings"
        titleHighlight="In Action"
        subtitle="Read exactly how we structure enterprise SEO campaigns to capture highly lucrative search positions."
        customPosts={seoArticles}
      />
    </main>
  );
}
