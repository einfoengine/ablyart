"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import ValueFocusSection from "@/components/ValueFocusSection";
import { FaEnvelopeOpenText, FaMobileAlt, FaCrown, FaArrowUp } from "react-icons/fa";

const deliverables = [
  {
    title: "Advanced Klaviyo Architecture",
    desc: "Complete setup and optimization of 15+ automated revenue-generating flows including cart abandons, post-purchase cascades, and win-backs.",
  },
  {
    title: "Dynamic SMS Campaigns",
    desc: "High-ROI, compliance-checked text message marketing that cuts through the noise with 90%+ open rates.",
  },
  {
    title: "VIP Tier Structuring",
    desc: "Gamification of your customer journey. We build loyalty programs that mathematically push customers to increase their Average Order Value.",
  },
  {
    title: "Churn Recovery Protocols",
    desc: "Aggressive, automated systems to identify customers right before they churn and reactivate them using highly targeted dynamic offers.",
  },
  {
    title: "Continuous Creative Iteration",
    desc: "Dedicated copywriters and designers who are constantly A/B testing subject lines, imagery, and send times to squeeze out every drop of ROI.",
  }
];

const retentionPackages = [
  {
    name: "Backend Foundation",
    price: "$1,800",
    period: "/mo",
    description: "Perfect for brands ready to stop relying solely on expensive paid ads.",
    features: [
      "5 Core Automated Email Flows",
      "Basic SMS Infrastructure Setup",
      "2 Campaign Sends / Week",
      "Quarterly A/B Subject Line Tests",
      "Monthly Backend Revenue Report"
    ],
    isPopular: false,
  },
  {
    name: "LTV Maximizer",
    price: "$3,500",
    period: "/mo",
    description: "Aggressive backend scaling to multiply customer lifetime value.",
    features: [
      "15 Advanced Klaviyo Flows",
      "Dynamic SMS Campaigns Managed",
      "4 Campaign Sends / Week",
      "Dedicated Backend Copywriter",
      "Bi-Weekly Strategy Syncs"
    ],
    isPopular: true,
  },
  {
    name: "Retention Enterprise",
    price: "$6,500+",
    period: "/mo",
    description: "Fully bespoke fidelity for high-volume 7 and 8-figure brands.",
    features: [
      "Multi-Channel App Integrations",
      "Custom Loyalty & Rewards Auth",
      "Predictive Churn AI Modeling",
      "Daily Multivariate Flow Testing",
      "Direct Slack Channel Support"
    ],
    isPopular: false,
  }
];

const retentionArticles = [
  {
    category: "Case Study",
    date: "Jul 10, 2024",
    title: "How 3 Simple Post-Purchase Emails Increased LTV by 45%",
    excerpt: "The exact email templates we used to turn one-time luxury buyers into fierce, repeat brand advocates.",
    imageGrad: "linear-gradient(135deg, rgba(155,255,110,0.15) 0%, rgba(155,255,110,0.02) 100%)",
  },
  {
    category: "Strategy",
    date: "Sep 05, 2024",
    title: "Email vs SMS: The Ultimate Omnichannel Backend Sandbox",
    excerpt: "Stop treating email and SMS as the same. How to intertwine them to avoid fatigue and maximize conversions.",
    imageGrad: "linear-gradient(135deg, rgba(110,231,255,0.15) 0%, rgba(110,231,255,0.02) 100%)",
  },
  {
    category: "Reactivation",
    date: "Dec 12, 2024",
    title: "The 'Win-Back' Formula: Reviving 10,000 Dormant Customers",
    excerpt: "You have thousands of dollars sitting in a dead email list. Here is the 4-step sequence to wake them up.",
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
          Retention & Value <br />
          <span className="gradient-text">Maximization</span>
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
          Acquiring customers is expensive. Making them buy again shouldn't be. We build powerful, automated backend systems using Email and SMS to multiply the lifetime value of every customer you win.
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

export default function RetentionPageClient() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <HeroSection />
      
      {/* Wavy Marquee SVG */}
      <div style={{ width: "100%", overflow: "hidden", position: "relative", zIndex: 10, marginTop: "-40px", marginBottom: "40px" }}>
        <svg width="4000" height="140" viewBox="0 0 4000 140" style={{ display: "block" }}>
          <path id="wavy-path-static" d="M 0 70 Q 250 10 500 70 T 1000 70 T 1500 70 T 2000 70 T 2500 70 T 3000 70 T 3500 70 T 4000 70" fill="none" stroke="var(--accent)" strokeWidth="52" />
          <text fill="#060608" fontSize="20" fontWeight="900" letterSpacing="0.1em">
            <textPath href="#wavy-path-static" startOffset="0" textLength="6000" dominantBaseline="central">
              MAXIMIZE LIFETIME VALUE ✦ TURN BUYERS INTO ADVOCATES ✦ ZERO CUSTOMER CHURN ✦ MAXIMIZE LIFETIME VALUE ✦ TURN BUYERS INTO ADVOCATES ✦ ZERO CUSTOMER CHURN ✦ MAXIMIZE LIFETIME VALUE ✦ TURN BUYERS INTO ADVOCATES ✦ ZERO CUSTOMER CHURN ✦ MAXIMIZE LIFETIME VALUE ✦ TURN BUYERS INTO ADVOCATES ✦ ZERO CUSTOMER CHURN ✦ MAXIMIZE LIFETIME VALUE ✦ 
              <animate attributeName="startOffset" from="0" to="-1000" dur="12s" repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>
      </div>

      <ValueFocusSection 
        badge="Backend Monetization"
        titleBase="Stop Relying On"
        titleHighlight="Acquisition"
        subtitle="When 80% of your future revenue will come from just 20% of your existing customers, having a bulletproof retention strategy isn't optional—it's mandatory."
        customFeatures={[
          {
            title: "Automated Email Flows",
            description: "We deploy aggressive abandoned cart, browse abandonment, and welcome sequences that print money in your sleep.",
            icon: <FaEnvelopeOpenText size={32} />
          },
          {
            title: "VIP Upsell Sequences",
            description: "Automatically identify your highest spenders and immediately hit them with exclusive, high-ticket backend offers.",
            icon: <FaArrowUp size={32} />
          },
          {
            title: "Loyalty & Rewards",
            description: "Turn one-time purchasers into fierce brand advocates that generate thousands of dollars in pure organic referrals.",
            icon: <FaCrown size={32} />
          },
          {
            title: "Omnichannel SMS",
            description: "We augment your email capabilities with hyper-targeted text messages to bypass crowded inboxes entirely.",
            icon: <FaMobileAlt size={32} />
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
              No vague promises. Here is exactly what is included when we optimize your retention and customer lifecycle.
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
        titleBase="The High Cost of"
        titleHighlight="Customer Churn"
        subtitle="Without a dedicated backend system, you are essentially paying Facebook and Google to acquire customers, only for them to buy once and disappear forever."
        customAgitations={[
          {
            service: "Backend Architecture",
            title: "Total Acquisition Dependency",
            pain: "If you rely entirely on paid ads for revenue, your margins are razor thin. When ad costs spike, your profitability vanishes because you have zero backend equity.",
            accent: "rgba(255, 80, 80, 0.2)",
            textAccent: "#ff5050"
          },
          {
            service: "Email Deliverability",
            title: "Millions Left in the Inbox",
            pain: "You have a list of ten thousand people, but you never email them, or they all go straight to spam. That list is a literal goldmine of pure profit that is rusting away.",
            accent: "rgba(255, 120, 80, 0.2)",
            textAccent: "#ff7850"
          },
          {
            service: "Loyalty Programs",
            title: "One-and-Done Buyers",
            pain: "Without post-purchase nurturing, a buyer feels no loyalty. The exact moment they need your product again, they are just as likely to buy from your competitor.",
            accent: "rgba(255, 179, 71, 0.2)",
            textAccent: "#ffb347"
          },
          {
            service: "Churn Tracking",
            title: "Silent Unsubscribes",
            pain: "Your customers are churning and you have absolutely no idea why. Lacking automated feedback loops means you cannot fix the leaks in your product delivery.",
            accent: "rgba(255, 80, 120, 0.2)",
            textAccent: "#ff5078"
          }
        ]}
      />
      <PricingSection customPackages={retentionPackages} />
      <BlogSection 
        badge="Proof of Concept"
        titleBase="See The Strategy"
        titleHighlight="In Action"
        subtitle="Read exactly how we deploy these retention strategies to skyrocket customer lifetime value for our partners."
        customPosts={retentionArticles}
      />
    </main>
  );
}
