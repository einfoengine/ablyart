"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import ValueFocusSection from "@/components/ValueFocusSection";
import { FaGlobe, FaSearchDollar, FaChartLine, FaUsers } from "react-icons/fa";

const deliverables = [
  {
    title: "Digital Ecosystem Consolidation",
    desc: "We bring your web design, social media, SEO, and paid advertising under a single, highly coordinated roof. No more miscommunication between a dozen freelancers.",
  },
  {
    title: "Omnichannel Command",
    desc: "Your brand becomes inescapable. We create a unified user journey that seamlessly tracks a browser from an Instagram Reel directly to a highly-optimized checkout page.",
  },
  {
    title: "Predictable Revenue Systems",
    desc: "Marketing shouldn't be a gamble. We utilize sophisticated tracking and analytics to ensure every dollar heavily impacts your bottom line.",
  },
  {
    title: "Agile Growth Engineering",
    desc: "We adapt immediately to market changes. If TikTok drops, we pivot to YouTube Shorts. If Google algorithms shift, our technical team instantly hotfixes your architecture.",
  }
];

const holisticPackages = [
  {
    name: "Growth Engine",
    price: "$5,000",
    period: "/mo",
    description: "Perfect for taking an established business and digitizing their entire marketing flow.",
    features: [
      "Complete Web Redesign",
      "Basic SEO & Citations",
      "3 Social Platforms Managed",
      "Introductory Media Buying",
      "Bi-Weekly Reporting"
    ],
    detailedDeliverables: [
      {
        title: "Complete Web Redesign",
        quantity: "1 Home + 4 Core Pages",
        quality: "Custom UI/UX, Next.js Architecture, Mobile Perfect",
        time: "Initial Launch in 30 Days"
      },
      {
        title: "Search & Local SEO",
        quantity: "50 Citations + Tech Audit",
        quality: "White-hat Google compliant, Hand-written code fixes",
        time: "Continuous Monthly Tuning"
      },
      {
        title: "Social Platforms Managed",
        quantity: "3 Platforms (IG, TikTok, FB), 12 Posts",
        quality: "High-end Graphic Design & Value-driven Copy",
        time: "3 Posts Minimum Per Week"
      },
      {
        title: "Introductory Media Buying",
        quantity: "Up to $3,000 Monthly Ad Spend",
        quality: "Meta Ads Manager precise targeting & A/B testing",
        time: "Daily Campaign Monitoring"
      }
    ],
    isPopular: false,
  },
  {
    name: "Market Domination",
    price: "$8,500",
    period: "/mo",
    description: "Our core offering. We run your entire digital department end-to-end.",
    features: [
      "Custom Web App Development",
      "Advanced Topical SEO Architecture",
      "Omnichannel Social (4 Platforms)",
      "Aggressive Ad Scale (Up to $50k spend)",
      "Weekly Strategy & Growth Syncs",
      "Full Funnel Optimization"
    ],
    detailedDeliverables: [
      {
        title: "Custom Web App / E-Commerce Built",
        quantity: "Uncapped Core Pages + CMS integration",
        quality: "Headless architecture, zero-latency load times",
        time: "Ongoing dedicated development hours"
      },
      {
        title: "Topical SEO Authority",
        quantity: "4 Long-Form Pillar Articles + Link Building",
        quality: "Expert-written, fully Schema marked, deep research",
        time: "4 Published Articles Monthly"
      },
      {
        title: "Omnichannel Social Play",
        quantity: "4 Platforms, 24 Posts (Static + Reels)",
        quality: "Viral hooks matching strict brand identity",
        time: "6x Posts per week + Active Community Mgmt"
      },
      {
        title: "Aggressive Ad Scaling",
        quantity: "Up to $50,000 Monthly Ad Spend",
        quality: "Full retargeting funnels, Lookalike mapping",
        time: "Daily Optimization & Hourly Budget Adjustments"
      }
    ],
    isPopular: true,
  },
  {
    name: "Enterprise Scaling",
    price: "$15,000+",
    period: "/mo",
    description: "Designed for massive scale, aggressive content production, and enterprise traffic.",
    features: [
      "Headless E-Commerce/Web Support",
      "In-House Quality Video Production",
      "Digital PR & Link Building",
      "Unlimited Lead Gen Flows",
      "Dedicated Team of 4 Experts",
      "24/7 Priority Support"
    ],
    detailedDeliverables: [
      {
        title: "Enterprise Web Support",
        quantity: "Full Dedicated Stack Control",
        quality: "Bank-level security, instant server-side rendering",
        time: "24/7 Uptime & Instant Bug Fixes"
      },
      {
        title: "In-House Video Production",
        quantity: "15 Shorts + 2 Cinematic Long-forms",
        quality: "4k Camera Equipment, Pro Grading & Editing",
        time: "Monthly filming days"
      },
      {
        title: "Digital PR Machinery",
        quantity: "High-Domain Authority Placements",
        quality: "Real news outlets, DO-FOLLOW context links",
        time: "3-5 Premium Placements Monthly"
      },
      {
        title: "Unlimited Dedicated Account Support",
        quantity: "1 Dedicated Director + 3 Specialists",
        quality: "Direct Slack channel, zero wait times",
        time: "Responses under 15 minutes, 24/7 emergencies"
      }
    ],
    isPopular: false,
  }
];

const holisticArticles = [
  {
    category: "Agency Dynamics",
    date: "Jan 12, 2025",
    title: "Why Firing Your 4 Freelancers Saved This Brand $40,000",
    excerpt: "Disjointed marketing burns cash. Here is why consolidating into a holistic agency accelerates growth and prevents catastrophic miscommunications.",
    imageGrad: "linear-gradient(135deg, rgba(155,255,110,0.15) 0%, rgba(155,255,110,0.02) 100%)",
  },
  {
    category: "Full Funnel Strategy",
    date: "Feb 05, 2025",
    title: "How We Scaled a DTC Brand 300% by Unifying Web & Social",
    excerpt: "When your landing page matches your viral TikTok hook, conversion rates skyrocket. We break down the exact omnichannel architecture.",
    imageGrad: "linear-gradient(135deg, rgba(110,231,255,0.15) 0%, rgba(110,231,255,0.02) 100%)",
  },
  {
    category: "Analytics",
    date: "Mar 18, 2025",
    title: "Attribution is Dead: How We Track Buyers in 2025",
    excerpt: "Stop relying on basic Facebook Pixel data. Learn how our holistic data modeling actually attributes where your high-ticket leads are coming from.",
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}>
            <span className="tag-pill">
              <span className="glow-dot" style={{ backgroundColor: "#9bff6e", boxShadow: "0 0 10px #9bff6e" }} />
              End-To-End Growth
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
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
          Holistic Digital <br />
          <span className="gradient-text">Marketing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            color: "rgba(240,240,248,0.5)",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            maxWidth: "680px",
            margin: "0 auto 48px",
            lineHeight: 1.75,
          }}
        >
          Stop juggling multiple agencies. We become your fully outsourced digital department, seamlessly harmonizing web design, SEO, social media, and paid ads to architect exponential expansion.
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

export default function HolisticMarketingPageClient() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <HeroSection />
      
      {/* Wavy Marquee SVG */}
      <div style={{ width: "100%", overflow: "hidden", position: "relative", zIndex: 10, marginTop: "-40px", marginBottom: "40px" }}>
        <svg width="4000" height="140" viewBox="0 0 4000 140" style={{ display: "block" }}>
          <path id="wavy-path-static" d="M 0 70 Q 250 10 500 70 T 1000 70 T 1500 70 T 2000 70 T 2500 70 T 3000 70 T 3500 70 T 4000 70" fill="none" stroke="var(--accent)" strokeWidth="52" />
          <text fill="#060608" fontSize="20" fontWeight="900" letterSpacing="0.1em">
            <textPath href="#wavy-path-static" startOffset="0" textLength="6000" dominantBaseline="central">
              WEB SOLUTIONS ✦ SOCIAL Dominance ✦ PAID MEDIA ✦ SEARCH AUTHORITY ✦ WEB SOLUTIONS ✦ SOCIAL Dominance ✦ PAID MEDIA ✦ SEARCH AUTHORITY ✦ WEB SOLUTIONS ✦ SOCIAL Dominance ✦ PAID MEDIA ✦ SEARCH AUTHORITY ✦ 
              <animate attributeName="startOffset" from="0" to="-1000" dur="12s" repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>
      </div>

      <ValueFocusSection 
        badge="Unified Execution"
        titleBase="An Orchestra of"
        titleHighlight="Growth"
        subtitle="Siloed marketing fails. We interlock every digital touchpoint to create a compounding feedback loop of revenue generation."
        customFeatures={[
          {
            title: "Web Foundation",
            description: "A high-performance codebase and premium UI/UX ensuring that inbound traffic experiences zero friction to purchase.",
            icon: <FaGlobe size={32} />
          },
          {
            title: "Search Superiority",
            description: "Advanced indexation and deep topical content clustering that securely locking your domain to the top of Google.",
            icon: <FaChartLine size={32} />
          },
          {
            title: "Omnichannel Social",
            description: "A synchronized organic presence across Meta, TikTok, and LinkedIn to build long-term, unshakeable audience trust.",
            icon: <FaUsers size={32} />
          },
          {
            title: "Ruthless Media Buying",
            description: "Highly aggressive, mathematically sound paid advertising campaigns scaled confidently across massive budgets.",
            icon: <FaSearchDollar size={32} />
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
              We do not just run ads or build websites; we construct your digital monopoly. Here is exactly what our holistic framework achieves.
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
        badge="The Agency Trap"
        titleBase="Why Patchwork Systems"
        titleHighlight="Crush Margins"
        subtitle="When you hire one agency for SEO, another for Ads, and a freelancer for your website, you bleed cash through operational friction."
        customAgitations={[
          {
            service: "Disjointed Strategy",
            title: "Marketing in Silos",
            pain: "Your SEO team doesn't talk to your ad team. They bid against each other and use completely different messaging, confusing your prospects and burning your money.",
            accent: "rgba(255, 80, 80, 0.2)",
            textAccent: "#ff5050"
          },
          {
            service: "Slow Execution",
            title: "The Freelancer Bottleneck",
            pain: "You need a landing page launched for Black Friday, but your developer won't answer your emails. Your ad team is paused waiting on the launch. Revenue is paralyzed.",
            accent: "rgba(255, 120, 80, 0.2)",
            textAccent: "#ff7850"
          },
          {
            service: "Poor Quality Control",
            title: "Inconsistent Branding",
            pain: "Your Instagram looks premium, but your website looks like a 2012 scam. When visitors see inconsistent brand identity across platforms, they instantly lose trust.",
            accent: "rgba(255, 179, 71, 0.2)",
            textAccent: "#ffb347"
          },
          {
            service: "Finger Pointing",
            title: "Zero Accountability",
            pain: "When sales drop, the ad agency blames the web developer for a slow site, and the developer blames the ad agency for bad traffic. You are left holding the bag.",
            accent: "rgba(255, 80, 120, 0.2)",
            textAccent: "#ff5078"
          }
        ]}
      />
      <PricingSection customPackages={holisticPackages} />
      <BlogSection 
        badge="Proof of Concept"
        titleBase="See The Strategy"
        titleHighlight="In Action"
        subtitle="Read exactly how we structure massive, all-in-one digital takeovers for our aggressive partners."
        customPosts={holisticArticles}
      />
    </main>
  );
}
