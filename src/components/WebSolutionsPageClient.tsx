"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import ValueFocusSection from "@/components/ValueFocusSection";
import { FaLaptopCode, FaPaintBrush, FaTachometerAlt, FaShieldAlt } from "react-icons/fa";

const deliverables = [
  {
    title: "Charge Premium Prices (UI/UX Design)",
    desc: "Buyers judge a book by its cover. Our design team crafts stunning branding, pixel-perfect wireframes, and sophisticated aesthetics that instantly position your business as an industry leader.",
  },
  {
    title: "Convert Traffic Effortlessly (Web Development)",
    desc: "We build lightning-fast, highly optimized landing pages and web applications specifically designed to eliminate buying friction, ensuring every single click has the highest possible chance of converting.",
  },
  {
    title: "Scale Without Limits (Architecture)",
    desc: "We utilize modern frameworks like Next.js and enterprise headless CMS systems to ensure your website can handle traffic spikes seamlessly and remains incredibly fast globally.",
  },
  {
    title: "Sleep Autonomously (Security & Hosting)",
    desc: "Proactive server monitoring, automated daily database backups, and instant security patch deployments. Your digital storefront never closes and your data remains untouchable.",
  }
];

const webDevPackages = [
  {
    name: "Landing Pages",
    price: "$2,500+",
    period: "/project",
    description: "Perfect for a high-converting single page or short funnel.",
    features: [
      "Custom UI/UX Design",
      "Next.js / React Architecture",
      "Mobile & Speed Optimized",
      "Basic SEO Setup",
      "Analytics Integration"
    ],
    isPopular: false,
  },
  {
    name: "Corporate Build",
    price: "$6,500+",
    period: "/project",
    description: "Full multi-page site for established growing businesses.",
    features: [
      "Full Brand Identity Integration",
      "CMS Setup (Sanity)",
      "Dynamic Routing & SEO",
      "Advanced Analytics",
      "2 Weeks Post-Launch Support",
      "Dedicated Account Manager"
    ],
    isPopular: true,
  },
  {
    name: "Enterprise Systems",
    price: "$15,000+",
    period: "/project",
    description: "Complex logic, user portals, or full headless commerce.",
    features: [
      "Custom Database Architecture",
      "Headless E-Commerce Setup",
      "Third-Party API Integrations",
      "Rigorous Security & QA",
      "Priority 24/7 Support",
      "Continuous Delivery Pipeline"
    ],
    isPopular: false,
  }
];

const webDevArticles = [
  {
    category: "Branding",
    date: "Feb 10, 2024",
    title: "Why Your Outdated Website is Costing You 40% of Referrals",
    excerpt: "Word of mouth doesn't work if your digital footprint looks untrustworthy. Here is the modern UI baseline check.",
    imageGrad: "linear-gradient(135deg, rgba(155,255,110,0.15) 0%, rgba(155,255,110,0.02) 100%)",
  },
  {
    category: "Performance",
    date: "Mar 22, 2024",
    title: "How We Accelerated Site Speed by 2.4s and Doubled Conversion",
    excerpt: "Google and users both strictly penalize slow websites. Here is the exact performance stack we run on all servers.",
    imageGrad: "linear-gradient(135deg, rgba(110,231,255,0.15) 0%, rgba(110,231,255,0.02) 100%)",
  },
  {
    category: "Architecture",
    date: "Dec 05, 2024",
    title: "Migrating from WordPress to Headless: A Technical Breakdown",
    excerpt: "Why the biggest brands are abandoning legacy builders for custom React stacks to secure their future scale.",
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
              Digital Infrastructure
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
          Web <br />
          <span className="gradient-text">Solutions</span>
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
          We engineer high-performance websites and digital experiences. From premium UI/UX design and robust full-stack development to 24/7 autonomous maintenance, we run your entire web infrastructure.
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

export default function WebSolutionsPageClient() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <HeroSection />
      
      {/* Wavy Marquee SVG */}
      <div style={{ width: "100%", overflow: "hidden", position: "relative", zIndex: 10, marginTop: "-40px", marginBottom: "40px" }}>
        <svg width="4000" height="140" viewBox="0 0 4000 140" style={{ display: "block" }}>
          <path id="wavy-path-static" d="M 0 70 Q 250 10 500 70 T 1000 70 T 1500 70 T 2000 70 T 2500 70 T 3000 70 T 3500 70 T 4000 70" fill="none" stroke="var(--accent)" strokeWidth="52" />
          <text fill="#060608" fontSize="20" fontWeight="900" letterSpacing="0.1em">
            <textPath href="#wavy-path-static" startOffset="0" textLength="6000" dominantBaseline="central">
              UI/UX DESIGN ✦ FULL-STACK DEVELOPMENT ✦ 24/7 MAINTENANCE ✦ SECURITY ✦ UI/UX DESIGN ✦ FULL-STACK DEVELOPMENT ✦ 24/7 MAINTENANCE ✦ SECURITY ✦ UI/UX DESIGN ✦ FULL-STACK DEVELOPMENT ✦ 24/7 MAINTENANCE ✦ SECURITY ✦ 
              <animate attributeName="startOffset" from="0" to="-1000" dur="12s" repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>
      </div>

      <ValueFocusSection 
        badge="Zero Friction"
        titleBase="Engineered For"
        titleHighlight="Conversion"
        subtitle="Traffic is useless if your website drops the ball. We merge stunning aesthetics with deep technical intelligence to instantly capture demand."
        customFeatures={[
          {
            title: "Premium Design",
            description: "We craft stunning visual identities and intuitive interfaces that instantly build trust and differentiate you from competitors.",
            icon: <FaPaintBrush size={32} />
          },
          {
            title: "Custom Development",
            description: "Lightning-fast, mobile-optimized platforms engineered with modern tech stacks to handle limitless scale.",
            icon: <FaLaptopCode size={32} />
          },
          {
            title: "Blazing Speed",
            description: "If your site takes more than 2 seconds to load, you lose sales. Our architecture guarantees instant load times.",
            icon: <FaTachometerAlt size={32} />
          },
          {
            title: "Ironclad Security",
            description: "Complete SSL encryption, daily cloud backups, and proactive hack prevention. We protect your digital estate.",
            icon: <FaShieldAlt size={32} />
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
        subtitle="When you try to run your business on clunky DIY builders like Wix or a broken WordPress theme, your growth stalls entirely."
        customAgitations={[
          {
            service: "UI/UX Design",
            title: "Amateur Visuals",
            pain: "A clunky, outdated design destroys your authority instantly. When prospects compare you to competitors who look premium, they assume your service is inferior.",
            accent: "rgba(255, 179, 71, 0.2)",
            textAccent: "#ffb347"
          },
          {
            service: "Web Development",
            title: "Slow & Buggy Sites",
            pain: "Over 50% of users bounce if a page takes more than 3 seconds to load. Poorly written, sluggish code is literally blocking your customers from buying.",
            accent: "rgba(255, 80, 120, 0.2)",
            textAccent: "#ff5078"
          },
          {
            service: "Maintenance",
            title: "Security Breaches & Downtime",
            pain: "Ignoring server health and database structures makes you highly susceptible to hacks. If your website crashes during a busy period, your revenue stops completely.",
            accent: "rgba(255, 120, 80, 0.2)",
            textAccent: "#ff7850"
          },
          {
            service: "Founder's Time",
            title: "Wasted Operations",
            pain: "You are a CEO, not a webmaster. Every hour you spend trying to format a plugin or resize an image is an hour you aren't closing deals, costing you thousands.",
            accent: "rgba(255, 80, 80, 0.2)",
            textAccent: "#ff5050"
          }
        ]}
      />
      <PricingSection customPackages={webDevPackages} />
      <BlogSection 
        badge="Proof of Concept"
        titleBase="See The Strategy"
        titleHighlight="In Action"
        subtitle="Read exactly how we structure enterprise web development projects to safely scale businesses."
        customPosts={webDevArticles}
      />
    </main>
  );
}
