"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import ValueFocusSection from "@/components/ValueFocusSection";
import { FaSearch, FaFlask, FaChartPie, FaMousePointer } from "react-icons/fa";

const deliverables = [
  {
    title: "Comprehensive UX/UI Audits",
    desc: "We analyze heatmaps, session recordings, and drop-off analytics to identify exactly where your users are abandoning the journey.",
  },
  {
    title: "Continuous A/B Split Testing",
    desc: "We build and test iterative variations of your headlines, CTA buttons, and layouts to mathematically prove what converts best.",
  },
  {
    title: "Frictionless Checkout Redesign",
    desc: "Streamlining your cart and opt-in forms to remove cognitive load, reducing cart abandonment and capturing more immediate revenue.",
  },
  {
    title: "Direct Response Copywriting",
    desc: "Rewriting your landing page messaging to speak directly to your avatar's pain points, dramatically increasing time-on-page and engagement.",
  },
  {
    title: "Site Velocity & Performance",
    desc: "Technical optimization of your funnel architecture to ensure lightning-fast load speeds, saving mobile traffic from bouncing early.",
  }
];

const optimizationPackages = [
  {
    name: "Conversion Audit",
    price: "$1,500",
    period: "/one-off",
    description: "A complete teardown of your primary funnel with actionable implementation steps.",
    features: [
      "Full Heatmap & Session Tracking Setup",
      "UX/UI Heuristic Evaluation",
      "Copywriting Competitor Analysis",
      "Checkout Flow Friction Audit",
      "Detailed 20+ Page Action Plan"
    ],
    isPopular: false,
  },
  {
    name: "Continuous CRO",
    price: "$4,000",
    period: "/mo",
    description: "Ongoing split testing and aggressive iteration for established traffic streams.",
    features: [
      "2 Active Split Tests / Month",
      "Custom Landing Page Redesigns",
      "Weekly Heatmap Reviews",
      "Copywriting Optimization",
      "Bi-Weekly Analytics Sync"
    ],
    isPopular: true,
  },
  {
    name: "Enterprise Experience",
    price: "$7,500+",
    period: "/mo",
    description: "Full-stack technical and visual optimization for high-volume enterprise stores.",
    features: [
      "5+ Active Split Tests / Month",
      "Full Headless Commerce Support",
      "Backend Speed Optimization Setup",
      "Multi-variate Checkout Testing",
      "Predictive Behavioral Analytics"
    ],
    isPopular: false,
  }
];

const optimizationArticles = [
  {
    category: "Case Study",
    date: "Aug 22, 2024",
    title: "How Changing a Single Headline Increased SaaS Trials by 38%",
    excerpt: "Why what you think sounds good is often killing your conversion rates—and how we used data to fix it.",
    imageGrad: "linear-gradient(135deg, rgba(155,255,110,0.15) 0%, rgba(155,255,110,0.02) 100%)",
  },
  {
    category: "E-Commerce",
    date: "Oct 29, 2024",
    title: "The Silent Killer: Finding and Fixing Mobile Checkout Friction",
    excerpt: "Over 70% of traffic is mobile, yet most checkouts are built for desktops. We share 5 immediate fixes.",
    imageGrad: "linear-gradient(135deg, rgba(110,231,255,0.15) 0%, rgba(110,231,255,0.02) 100%)",
  },
  {
    category: "Analytics",
    date: "Nov 15, 2024",
    title: "Stop Guessing: A Beginner's Guide to Heatmaps and Scroll Depth",
    excerpt: "Numbers don't lie. How to effectively deploy behavioral tools to visually spot where your leads are bleeding out.",
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
              Service Landing Page
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
          Conversion Funnel <br />
          <span className="gradient-text">Optimization</span>
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
          Stop paying for traffic that doesn't convert. We isolate the leaks in your customer journey and deploy data-driven design changes that dramatically increase your conversion rates and lower acquisition costs.
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

export default function FunnelOptimizationPageClient() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <HeroSection />
      
      {/* Wavy Marquee SVG */}
      <div style={{ width: "100%", overflow: "hidden", position: "relative", zIndex: 10, marginTop: "-40px", marginBottom: "40px" }}>
        <svg width="4000" height="140" viewBox="0 0 4000 140" style={{ display: "block" }}>
          <path id="wavy-path-static" d="M 0 70 Q 250 10 500 70 T 1000 70 T 1500 70 T 2000 70 T 2500 70 T 3000 70 T 3500 70 T 4000 70" fill="none" stroke="var(--accent)" strokeWidth="52" />
          <text fill="#060608" fontSize="20" fontWeight="900" letterSpacing="0.1em">
            <textPath href="#wavy-path-static" startOffset="0" textLength="6000" dominantBaseline="central">
              CONVERT CLICKS INTO CASH ✦ STOP LEAKING REVENUE ✦ DATA-DRIVEN CRO ✦ CONVERT CLICKS INTO CASH ✦ STOP LEAKING REVENUE ✦ DATA-DRIVEN CRO ✦ CONVERT CLICKS INTO CASH ✦ STOP LEAKING REVENUE ✦ DATA-DRIVEN CRO ✦ CONVERT CLICKS INTO CASH ✦ STOP LEAKING REVENUE ✦ DATA-DRIVEN CRO ✦ CONVERT CLICKS INTO CASH ✦ STOP LEAKING REVENUE ✦ 
              <animate attributeName="startOffset" from="0" to="-1000" dur="12s" repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>
      </div>

      <ValueFocusSection 
        badge="Performance Architecture"
        titleBase="Turn Friction Into"
        titleHighlight="Flow"
        subtitle="A beautiful website means nothing if users can't navigate it. We apply rigorous behavioral psychology and testing to ensure every pixel pushes your customer toward the 'Buy' button."
        customFeatures={[
          {
            title: "Behavioral Analytics",
            description: "We reveal the invisible. By tracking scroll depths, rage clicks, and mouse movements, we discover exactly what confuses your users.",
            icon: <FaMousePointer size={32} />
          },
          {
            title: "Scientific Split Testing",
            description: "We don't guess what looks good. We run isolated A/B/n tests on layouts and copy to mathematically guarantee a higher conversion rate.",
            icon: <FaFlask size={32} />
          },
          {
            title: "Profit Diagnostics",
            description: "We look deep into your Google Analytics to find the specific audience segments and devices that are bleeding your ad spend.",
            icon: <FaChartPie size={32} />
          },
          {
            title: "UX Heuristic Reviews",
            description: "Expert audits based on decades of conversion principles. We strip away cognitive overload so buying becomes the path of least resistance.",
            icon: <FaSearch size={32} />
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
              No vague promises. Here is exactly what is included when we optimize your conversion rates.
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
        badge="The Cost of Inaction"
        titleBase="The High Cost of A"
        titleHighlight="Broken Funnel"
        subtitle="Every 1% drop in your conversion rate forces you to buy twice as much traffic to make the exact same amount of money."
        customAgitations={[
          {
            service: "Checkout Optimization",
            title: "Massive Cart Abandonment",
            pain: "Your marketing worked, they added to cart, but an unexpected fee or a confusing form made them instantly close the tab. You are losing your warmest buyers at the finish line.",
            accent: "rgba(255, 80, 80, 0.2)",
            textAccent: "#ff5050"
          },
          {
            service: "Data-Driven UX Design",
            title: "Navigational Dead Ends",
            pain: "Users are hopelessly lost on your site. If they cannot find the pricing or the exact product variant they want within 5 seconds, they will leave and simply buy it from Amazon.",
            accent: "rgba(255, 120, 80, 0.2)",
            textAccent: "#ff7850"
          },
          {
            service: "Performance Tuning",
            title: "Mobile Loading Friction",
            pain: "Over 70% of traffic is mobile. If your bloated images and poorly coded scripts take 6 seconds to load, half of your expensive ad traffic will bounce before the page even renders.",
            accent: "rgba(255, 179, 71, 0.2)",
            textAccent: "#ffb347"
          },
          {
            service: "Iterative Split Testing",
            title: "Blind Intuition Guesswork",
            pain: "Making changes to your site based on what you 'feel' looks pretty is a guaranteed way to bleed revenue. Without statistical A/B testing, redesigns are just expensive gambles.",
            accent: "rgba(255, 80, 120, 0.2)",
            textAccent: "#ff5078"
          }
        ]}
      />
      <PricingSection customPackages={optimizationPackages} />
      <BlogSection 
        badge="Proof of Concept"
        titleBase="See The Strategy"
        titleHighlight="In Action"
        subtitle="Read exactly how we deploy these optimization strategies to multiply organic revenue for our partners."
        customPosts={optimizationArticles}
      />
    </main>
  );
}
