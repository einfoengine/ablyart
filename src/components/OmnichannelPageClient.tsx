"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import ValueFocusSection from "@/components/ValueFocusSection";
import { FaGlobe, FaShareAlt, FaChartLine, FaSearchDollar } from "react-icons/fa";

const deliverables = [
  {
    title: "Omnichannel Strategy Playbook",
    desc: "A custom roadmap detailing exactly how we will position your brand across social, search, and web platforms to maximize impact.",
  },
  {
    title: "High-Converting Content Creation",
    desc: "We write, design, and produce custom web assets and static content tailored specifically to perform on FB, IG, TikTok, and your website.",
  },
  {
    title: "Advanced Tracking & Infrastructure",
    desc: "Flawless pixel setup, conversion tracking, and retargeting mapping so we capture and utilize data from every single visitor.",
  },
  {
    title: "Proactive Media Buying",
    desc: "Day-to-day management of your ad budgets by senior buyers who optimize pacing, bid caps, and creative testing for maximum ROAS.",
  },
  {
    title: "Dedicated Growth Partner",
    desc: "You aren't handed off to an account manager. You get direct access to the strategists actively running your campaigns via Slack/Email.",
  }
];

const omnichannelPackages = [
  {
    name: "Foundation",
    price: "$2,500",
    period: "/mo",
    description: "Establish a unified presence across 2 core platforms (e.g., Meta + Google Search).",
    features: [
      "Social Media Management (1 Platform)",
      "10 Assorted Posts / mo",
      "Basic Profile SEO Setup",
      "Monthly Strategy Sync"
    ],
    detailedDeliverables: [
      {
        title: "Social Setup",
        quantity: "1 Platform",
        quality: "Standard Optimization",
        time: "Monthly"
      },
      {
        title: "Content",
        quantity: "10 Posts",
        quality: "Standard Graphics",
        time: "Ongoing"
      }
    ],
    isPopular: false,
  },
  {
    name: "Omnipresence",
    price: "$4,000",
    period: "/mo",
    description: "Scale your presence across multiple traffic channels simultaneously.",
    features: [
      "Full Social Management (3 Platforms)",
      "24 Posts + Custom Web Graphics",
      "Basic SEO Content (2 Blogs/mo)",
      "Bi-Weekly Analytics Sync",
      "Dedicated Account Slack"
    ],
    detailedDeliverables: [
      {
        title: "Platform Scaling",
        quantity: "3 Platforms",
        quality: "Aggressive Optimization",
        time: "Bi-Weekly"
      },
      {
        title: "Content Generation",
        quantity: "24 Mixed Media Assets",
        quality: "Premium Design",
        time: "Ongoing"
      }
    ],
    isPopular: true,
  },
  {
    name: "Market Domination",
    price: "$8,500+",
    period: "/mo",
    description: "The peak package for comprehensive ad buying, PR, and mass-scale publishing.",
    features: [
      "Unlimited Organic Content",
      "Ad Setup & Scaling ($10k+ Spend)",
      "Digital PR Placements",
      "Full Search Engine Dominance",
      "Daily Performance Reporting",
      "Priority 24/7 Adjustments"
    ],
    detailedDeliverables: [
      {
        title: "Comprehensive Output",
        quantity: "Unlimited Production",
        quality: "Enterprise Tier",
        time: "24/7 Deployment"
      },
      {
        title: "Paid Media",
        quantity: "Full Budget Ops",
        quality: "Strict ROAS Targets",
        time: "Daily Tuning"
      }
    ],
    isPopular: false,
  }
];

const omnichannelArticles = [
  {
    category: "Case Study",
    date: "Sep 14, 2024",
    title: "How Cross-Platform Retargeting Dropped Average CPA By 42%",
    excerpt: "See the exact framework we used to capture lost traffic from Facebook and convert them via YouTube ads.",
    imageGrad: "linear-gradient(135deg, rgba(155,255,110,0.15) 0%, rgba(155,255,110,0.02) 100%)",
  },
  {
    category: "Strategy",
    date: "Oct 02, 2024",
    title: "The Death of Single-Channel Marketing",
    excerpt: "Why relying solely on one traffic source is the biggest risk your business faces this year, and how to diversify.",
    imageGrad: "linear-gradient(135deg, rgba(110,231,255,0.15) 0%, rgba(110,231,255,0.02) 100%)",
  },
  {
    category: "Design Tactics",
    date: "Nov 18, 2024",
    title: "Why High-Converting Landing Pages Create Unbeatable Audiences",
    excerpt: "Break down the exact funnel structure that leverages optimized web design into highly qualified search intent.",
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
              Service Landing Page
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
          Omnichannel Traffic <br />
          <span className="gradient-text">& Awareness</span>
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
          Get seen everywhere your customers spend time. We combine Social Media, Web Design, and SEO to build an omnipresent brand — capturing peak attention across every platform your buyers are on.
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

export default function OmnichannelPageClient() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <HeroSection />
      
      {/* Wavy Marquee SVG */}
      <div style={{ width: "100%", overflow: "hidden", position: "relative", zIndex: 10, marginTop: "-40px", marginBottom: "40px" }}>
        <svg width="4000" height="140" viewBox="0 0 4000 140" style={{ display: "block" }}>
          <path id="wavy-path-static" d="M 0 70 Q 250 10 500 70 T 1000 70 T 1500 70 T 2000 70 T 2500 70 T 3000 70 T 3500 70 T 4000 70" fill="none" stroke="var(--accent)" strokeWidth="52" />
          <text fill="#060608" fontSize="20" fontWeight="900" letterSpacing="0.1em">
            <textPath href="#wavy-path-static" startOffset="0" textLength="6000" dominantBaseline="central">
              FOCUS ON YOUR CORE BUSINESS ✦ LET US MANAGE YOUR ONLINE PRESENCE ✦ MONEY BACK GUARANTEE ✦ FOCUS ON YOUR CORE BUSINESS ✦ LET US MANAGE YOUR ONLINE PRESENCE ✦ MONEY BACK GUARANTEE ✦ FOCUS ON YOUR CORE BUSINESS ✦ LET US MANAGE YOUR ONLINE PRESENCE ✦ MONEY BACK GUARANTEE ✦ FOCUS ON YOUR CORE BUSINESS ✦ LET US MANAGE YOUR ONLINE PRESENCE ✦ MONEY BACK GUARANTEE ✦ FOCUS ON YOUR CORE BUSINESS ✦ LET US MANAGE YOUR ONLINE PRESENCE ✦ MONEY BACK GUARANTEE ✦ FOCUS ON YOUR CORE BUSINESS ✦ LET US MANAGE YOUR ONLINE PRESENCE ✦ MONEY BACK GUARANTEE ✦ 
              <animate attributeName="startOffset" from="0" to="-1000" dur="12s" repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>
      </div>

      <ValueFocusSection 
        badge="Omnichannel Domination"
        titleBase="Be Everywhere Your"
        titleHighlight="Buyers Are"
        subtitle="Relying on one traffic source is a risk. We engineer a multi-platform presence that surrounds your target audience, builds limitless trust, and slashes acquisition costs."
        customFeatures={[
          {
            title: "Omnipresent Authority",
            description: "Appear everywhere your customers look. We create an inescapable ecosystem across social, search, and the web that builds absolute trust and makes competitors irrelevant.",
            icon: <FaGlobe size={32} />
          },
          {
            title: "Multi-Touch Conversions",
            description: "Consumers rarely buy on the first click. We design strategic retargeting loops that naturally guide users across platforms until they are begging to work with you.",
            icon: <FaShareAlt size={32} />
          },
          {
            title: "Plummeting Ad Costs",
            description: "When you rely on a single channel, you pay premium prices. By diversifying traffic and sharing cross-platform pixel data, we consistently lower your overall CPA.",
            icon: <FaChartLine size={32} />
          },
          {
            title: "Capture Every Intent",
            description: "We seamlessly merge demand generation with demand capture. Cover Facebook/TikTok for impulse buys, and lock down Google/YouTube for direct search intent.",
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
              No vague promises. Here is exactly what is included when we take over your traffic and awareness ecosystem.
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
        titleBase="The High Cost of Being"
        titleHighlight="Invisible"
        subtitle="While you're relying on word-of-mouth or a single dying ad channel, your competitors are actively surrounding your ideal buyers and stealing market share."
        customAgitations={[
          {
            service: "Platform Consistency",
            title: "Scattered & Weak Presence",
            pain: "Inconsistent posting across platforms destroys trust. If a prospect finds your Instagram dead and your website outdated, they bounce immediately to a competitor who looks alive.",
            accent: "rgba(255, 80, 80, 0.2)",
            textAccent: "#ff5050"
          },
          {
            service: "Retargeting Infrastructure",
            title: "Leaking Acquired Traffic Potential",
            pain: "Driving traffic with no retargeting structure means 98% of your visitors leave and never return. You are paying premium rates to acquire leads and letting them slip right through your fingers.",
            accent: "rgba(255, 120, 80, 0.2)",
            textAccent: "#ff7850"
          },
          {
            service: "Predictable Traffic Sources",
            title: "Unscalable Business Growth",
            pain: "Relying purely on referrals or organic reach creates massive revenue bottlenecks. If you cannot predictably buy attention today, you mathematically cannot scale your business tomorrow.",
            accent: "rgba(255, 179, 71, 0.2)",
            textAccent: "#ffb347"
          },
          {
            service: "Channel Diversification",
            title: "Single Point of Failure",
            pain: "If your only lead source changes its algorithm or bans your ad account, your entire business collapses overnight. A lack of true omnichannel presence is an existential threat to your revenue.",
            accent: "rgba(255, 80, 120, 0.2)",
            textAccent: "#ff5078"
          }
        ]}
      />
      <PricingSection customPackages={omnichannelPackages} />
      <BlogSection 
        badge="Proof of Concept"
        titleBase="See The Strategy"
        titleHighlight="In Action"
        subtitle="Read exactly how we deploy these omnichannel strategies to create predictable revenue growth for our partners."
        customPosts={omnichannelArticles}
      />
    </main>
  );
}
