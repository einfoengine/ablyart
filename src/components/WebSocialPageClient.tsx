"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import ValueFocusSection from "@/components/ValueFocusSection";
import { FaLaptopCode, FaShareAlt, FaPaintBrush, FaSearchDollar } from "react-icons/fa";

const deliverables = [
  {
    title: "Scale Revenue Predictably (Media Buying)",
    desc: "Stop gambling with ad spend. We deploy aggressive, data-driven paid advertising campaigns across Meta, Google, and TikTok to generate high-intent traffic with a mathematically proven ROAS.",
  },
  {
    title: "Dominate Market Attention (Organic Social)",
    desc: "We transform your social profiles into highly-engaging community hubs. By producing viral, brand-aligned content, we build the unshakeable trust required to close modern buyers.",
  },
  {
    title: "Charge Premium Prices (UI/UX Design)",
    desc: "Buyers judge a book by its cover. Our design team crafts stunning branding, pixel-perfect wireframes, and sophisticated ad creatives that instantly position your business as an industry leader.",
  },
  {
    title: "Convert Traffic Effortlessly (Web Development)",
    desc: "We build lightning-fast, highly optimized landing pages and web applications engineered to eliminate buying friction, ensuring every single click has the highest possible chance of converting.",
  }
];

const webSocialPackages = [
  {
    name: "Social Ignition",
    price: "$1,800",
    period: "/mo",
    description: "Perfect for brands needing to establish a baseline organic and paid presence.",
    features: [
      "2 Organic Social Platforms",
      "Basic UI/UX Design Requests",
      "Basic Web Maintenance",
      "Up to $5k Ad Spend Managed",
      "Monthly Analytics Report"
    ],
    isPopular: false,
  },
  {
    name: "Growth Catalyst",
    price: "$3,800",
    period: "/mo",
    description: "Aggressive omnichannel strategy mixing heavy organic content and paid ads.",
    features: [
      "4 Organic Social Platforms",
      "Full Custom UI/UX Redesigns",
      "Custom Landing Page Dev",
      "Up to $20k Ad Spend Managed",
      "Bi-Weekly Strategy Syncs"
    ],
    isPopular: true,
  },
  {
    name: "Digital Takeover",
    price: "$7,500+",
    period: "/mo",
    description: "A complete outsourced digital scaling department for 7-figure businesses.",
    features: [
      "Omnichannel Organic Presence",
      "Enterprise Full-Stack Dev",
      "Unlimited UX/UI Graphic Queues",
      "Unlimited Media Buying Budgets",
      "Dedicated Media & Content Team"
    ],
    isPopular: false,
  }
];

const webSocialArticles = [
  {
    category: "Branding",
    date: "May 14, 2024",
    title: "Why Your Outdated Website is Costing You 40% of Referrals",
    excerpt: "Word of mouth doesn't work if your digital footprint looks untrustworthy. Here is the modern baseline check.",
    imageGrad: "linear-gradient(135deg, rgba(155,255,110,0.15) 0%, rgba(155,255,110,0.02) 100%)",
  },
  {
    category: "Social Presence",
    date: "Jun 02, 2024",
    title: "The 'Ghost Town' Effect: Why Consistency Trumps Virality",
    excerpt: "You don't need a million views to close sales. You just need to show prospects your business is alive and active.",
    imageGrad: "linear-gradient(135deg, rgba(110,231,255,0.15) 0%, rgba(110,231,255,0.02) 100%)",
  },
  {
    category: "Technical SEO",
    date: "Aug 29, 2024",
    title: "How We Accelerated Site Speed by 2.4s and Doubled Traffic",
    excerpt: "Google strictly penalizes slow websites. Here is the exact maintenance protocol we run on all client servers.",
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
          Web, Social <br />
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
          Focus on your core business. From aggressive media buying and organic social management to custom UI/UX design and elite web development, we handle your complete digital scaling engine.
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

export default function WebSocialPageClient() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <HeroSection />
      
      {/* Wavy Marquee SVG */}
      <div style={{ width: "100%", overflow: "hidden", position: "relative", zIndex: 10, marginTop: "-40px", marginBottom: "40px" }}>
        <svg width="4000" height="140" viewBox="0 0 4000 140" style={{ display: "block" }}>
          <path id="wavy-path-static" d="M 0 70 Q 250 10 500 70 T 1000 70 T 1500 70 T 2000 70 T 2500 70 T 3000 70 T 3500 70 T 4000 70" fill="none" stroke="var(--accent)" strokeWidth="52" />
          <text fill="#060608" fontSize="20" fontWeight="900" letterSpacing="0.1em">
            <textPath href="#wavy-path-static" startOffset="0" textLength="6000" dominantBaseline="central">
              SOCIAL MANAGEMENT ✦ MEDIA BUYING ✦ UI/UX DESIGN ✦ WEB DEVELOPMENT ✦ SOCIAL MANAGEMENT ✦ MEDIA BUYING ✦ UI/UX DESIGN ✦ WEB DEVELOPMENT ✦ SOCIAL MANAGEMENT ✦ MEDIA BUYING ✦ UI/UX DESIGN ✦ WEB DEVELOPMENT ✦ SOCIAL MANAGEMENT ✦ MEDIA BUYING ✦ UI/UX DESIGN ✦ WEB DEVELOPMENT ✦ 
              <animate attributeName="startOffset" from="0" to="-1000" dur="12s" repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>
      </div>

      <ValueFocusSection 
        badge="Done-For-You Operations"
        titleBase="We Handle The"
        titleHighlight="Heavy Lifting"
        subtitle="You shouldn't be spending your weekends fixing broke Wordpress plugins or designing Instagram posts. We take the entire digital burden off your plate."
        customFeatures={[
          {
            title: "Social Management",
            description: "Consistent, highly-engaging organic content that keeps your audience captivated without you lifting a finger.",
            icon: <FaShareAlt size={32} />
          },
          {
            title: "Paid Media Buying",
            description: "Aggressive advertising campaigns across all major platforms mathematically designed to maximize your ROAS.",
            icon: <FaSearchDollar size={32} />
          },
          {
            title: "Premium UI/UX Design",
            description: "We craft stunning visual identities and intuitive interfaces that instantly build trust and convert visitors.",
            icon: <FaPaintBrush size={32} />
          },
          {
            title: "Custom Development",
            description: "Lightning-fast, bespoke performance landing pages engineered with modern tech stacks to handle massive scale.",
            icon: <FaLaptopCode size={32} />
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
              We do not just offer technical skills; we deliver tangible growth. Here is exactly what our digital infrastructure achieves for you.
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
        badge="The Cost of DIY"
        titleBase="The High Cost of"
        titleHighlight="Doing It Yourself"
        subtitle="When you try to manage your own website and social channels, your growth stagnates because you are working IN your business, not ON it."
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
            service: "UI/UX Design",
            title: "Amateur Visuals",
            pain: "A clunky, outdated design destroys your authority instantly. When prospects compare you to competitors who look premium, they assume your service is inferior.",
            accent: "rgba(255, 179, 71, 0.2)",
            textAccent: "#ffb347"
          },
          {
            service: "Web Development",
            title: "Broken Experiences",
            pain: "Over 50% of users bounce if a page takes more than 3 seconds to load. Poorly written, sluggish code is literally blocking your customers from giving you their money.",
            accent: "rgba(255, 80, 120, 0.2)",
            textAccent: "#ff5078"
          }
        ]}
      />
      <PricingSection customPackages={webSocialPackages} />
      <BlogSection 
        badge="Proof of Concept"
        titleBase="See The Strategy"
        titleHighlight="In Action"
        subtitle="Read exactly how we deploy comprehensive web and social strategies for our partners."
        customPosts={webSocialArticles}
      />
    </main>
  );
}
