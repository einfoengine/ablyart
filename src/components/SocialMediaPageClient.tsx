"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import ValueFocusSection from "@/components/ValueFocusSection";
import { FaShareAlt, FaSearchDollar, FaCalendarAlt, FaComments } from "react-icons/fa";

const deliverables = [
  {
    title: "Scale Revenue Predictably (Media Buying)",
    desc: "Stop gambling with ad spend. We deploy aggressive, data-driven paid advertising campaigns across Meta, TikTok, and LinkedIn to generate high-intent traffic with a mathematically proven ROAS.",
  },
  {
    title: "Dominate Market Attention (Organic Growth)",
    desc: "We transform your social profiles into highly-engaging community hubs. By producing viral, brand-aligned short-form content, we build the unshakeable trust required to close modern buyers.",
  },
  {
    title: "Become Top of Mind (Content Strategy)",
    desc: "We analyze competitor gaps and craft tailored monthly content calendars, ensuring that every post serves a deliberate purpose in moving prospects down your conversion funnel.",
  },
  {
    title: "Build Brand Loyalty (Community Management)",
    desc: "Active engagement is non-negotiable. We proactively manage your comments, DMs, and community interactions so that your audience feels heard and valued 24/7.",
  }
];

const socialPackages = [
  {
    name: "Baseline Organic",
    price: "$1,200",
    period: "/mo",
    description: "Consistent branding to ensure your digital footprint looks alive.",
    features: [
      "2 Platforms Managed",
      "12 Custom Posts per Month",
      "Basic Community Management",
      "Monthly Content Calendar",
      "Analytics Overview"
    ],
    isPopular: false,
  },
  {
    name: "Aggressive Growth",
    price: "$2,800",
    period: "/mo",
    description: "Our most chosen tier to rapidly expand and capture audience attention.",
    features: [
      "4 Platforms Managed",
      "24 Custom Posts (Static + Video)",
      "Proactive Outbound Engagement",
      "Graphic Design Support",
      "Bi-Weekly Strategy Calls",
      "Dedicated Account Manager"
    ],
    isPopular: true,
  },
  {
    name: "Viral Machinery",
    price: "$5,000+",
    period: "/mo",
    description: "A complete outsourced content team for high-volume brands.",
    features: [
      "Omnichannel Presence",
      "Unlimited Daily Posts",
      "Influencer Outreach Management",
      "Dedicated Video Editor",
      "Priority 24/7 Community Handling",
      "Custom Dashboard Analytics"
    ],
    isPopular: false,
  }
];

const socialArticles = [
  {
    category: "Organic Social",
    date: "Jun 02, 2024",
    title: "The 'Ghost Town' Effect: Why Consistency Trumps Virality",
    excerpt: "You don't need a million views to close sales. You just need to show prospects your business is alive and active.",
    imageGrad: "linear-gradient(135deg, rgba(110,231,255,0.15) 0%, rgba(110,231,255,0.02) 100%)",
  },
  {
    category: "Media Buying",
    date: "Aug 29, 2024",
    title: "Scaling Meta Ads: How We Hit 4.5x ROAS in 30 Days",
    excerpt: "Stop boosting posts. Here is the exact creative testing architecture we use to scale paid campaigns highly profitably.",
    imageGrad: "linear-gradient(135deg, rgba(176,158,255,0.15) 0%, rgba(176,158,255,0.02) 100%)",
  },
  {
    category: "Community Strategy",
    date: "Nov 12, 2024",
    title: "Turning Likes into Pipeline: A B2B Engagement Guide",
    excerpt: "Followers mean nothing if they aren't converting. Here is how we turn passing attention into booked discovery calls.",
    imageGrad: "linear-gradient(135deg, rgba(255,158,158,0.15) 0%, rgba(255,158,158,0.02) 100%)",
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
              Audience Growth
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
          Social Media <br />
          <span className="gradient-text">& Media Buying</span>
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
          Stop posting into the void. From aggressive performance media buying to creating highly engaging viral organic content, we build your brand's digital megaphone.
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

export default function SocialMediaPageClient() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <HeroSection />
      
      {/* Wavy Marquee SVG */}
      <div style={{ width: "100%", overflow: "hidden", position: "relative", zIndex: 10, marginTop: "-40px", marginBottom: "40px" }}>
        <svg width="4000" height="140" viewBox="0 0 4000 140" style={{ display: "block" }}>
          <path id="wavy-path-static" d="M 0 70 Q 250 10 500 70 T 1000 70 T 1500 70 T 2000 70 T 2500 70 T 3000 70 T 3500 70 T 4000 70" fill="none" stroke="var(--accent)" strokeWidth="52" />
          <text fill="#060608" fontSize="20" fontWeight="900" letterSpacing="0.1em">
            <textPath href="#wavy-path-static" startOffset="0" textLength="6000" dominantBaseline="central">
              ORGANIC GROWTH ✦ MEDIA BUYING ✦ COMMUNITY MANAGEMENT ✦ VIRAL CONTENT ✦ ORGANIC GROWTH ✦ MEDIA BUYING ✦ COMMUNITY MANAGEMENT ✦ VIRAL CONTENT ✦ ORGANIC GROWTH ✦ MEDIA BUYING ✦ COMMUNITY MANAGEMENT ✦ VIRAL CONTENT ✦ 
              <animate attributeName="startOffset" from="0" to="-1000" dur="12s" repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>
      </div>

      <ValueFocusSection 
        badge="Omnichannel Domination"
        titleBase="We Command"
        titleHighlight="Attention"
        subtitle="We build multi-platform content ecosystems designed to intercept your ideal buyers wherever they prefer to scroll."
        customFeatures={[
          {
            title: "Performance Ads",
            description: "Data-driven ad creatives designed specifically for conversion and maximum ROI on Meta and TikTok.",
            icon: <FaSearchDollar size={32} />
          },
          {
            title: "Viral Organics",
            description: "Brand-aligned short-form content that captures massive attention and drives free audience growth.",
            icon: <FaShareAlt size={32} />
          },
          {
            title: "Content Strategy",
            description: "Rigorous planning and monthly content calendars aligned perfectly with your high-level business goals.",
            icon: <FaCalendarAlt size={32} />
          },
          {
            title: "Community Growth",
            description: "Active outbound and inbound community management that turns passive scrollers into raving superfans.",
            icon: <FaComments size={32} />
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
              We do not just offer empty likes; we deliver tangible growth. Here is exactly what our social infrastructure achieves for you.
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
        badge="The Cost of Invisibility"
        titleBase="Why Your Social"
        titleHighlight="Is Failing"
        subtitle="When you try to manage your own social channels without a strategy, your growth stagnates because you are purely guessing."
        customAgitations={[
          {
            service: "Organic Social",
            title: "Ghost Town Profiles",
            pain: "You post sporadically when you have free time. When a buyer audits your digital footprint, a dead social presence heavily implies your business is struggling.",
            accent: "rgba(255, 80, 80, 0.2)",
            textAccent: "#ff5050"
          },
          {
            service: "Paid Promotions",
            title: "Burning Ad Spend",
            pain: "Trying to manage media buying yourself is like setting cash on fire. Without strict tracking and A/B testing, you're paying premium rates for zero conversions.",
            accent: "rgba(255, 120, 80, 0.2)",
            textAccent: "#ff7850"
          },
          {
            service: "Content Creation",
            title: "Zero Engagement",
            pain: "You spend hours designing a graphic only to get 3 likes. Creating generic corporate content without human hooks completely repels the modern doom-scroller.",
            accent: "rgba(255, 179, 71, 0.2)",
            textAccent: "#ffb347"
          },
          {
            service: "Community Management",
            title: "Ignored Customers",
            pain: "When prospects DM you and receive no reply for 48 hours, they instantly move to a competitor. Poor community flow destroys trust instantly.",
            accent: "rgba(255, 80, 120, 0.2)",
            textAccent: "#ff5078"
          }
        ]}
      />
      <PricingSection customPackages={socialPackages} />
      <BlogSection 
        badge="Proof of Concept"
        titleBase="See The Strategy"
        titleHighlight="In Action"
        subtitle="Read exactly how we deploy comprehensive media strategies for our partners."
        customPosts={socialArticles}
      />
    </main>
  );
}
