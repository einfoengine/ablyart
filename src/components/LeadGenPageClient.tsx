"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PricingSection from "@/components/PricingSection";
import BlogSection from "@/components/BlogSection";
import AgitationSection from "@/components/AgitationSection";
import ValueFocusSection from "@/components/ValueFocusSection";
import { FaMagnet, FaFilter, FaRobot, FaEnvelopeOpenText } from "react-icons/fa";

const deliverables = [
  {
    title: "Complete Funnel Architecture",
    desc: "End-to-end design and deployment of high-converting lead generation funnels, including VSLs and opt-in mechanics.",
  },
  {
    title: "Scalable Outbound Campaigns",
    desc: "We build and manage robust cold email and LinkedIn outreach infrastructures that bypass spam filters and land in primary inboxes.",
  },
  {
    title: "Conversion-Optimized Landing Pages",
    desc: "Our copywriters and designers build pages strictly engineered to convert absolute cold traffic into hyper-qualified appointments.",
  },
  {
    title: "Automated Lead Nurturing",
    desc: "Complex Email and SMS sequences designed to warm up early-stage prospects until they are begging to jump on a sales call.",
  },
  {
    title: "CRM & Performance Dashboards",
    desc: "Full integration with your CRM (Hubspot, GoHighLevel, Salesforce) so you can track exact acquisition costs down to the dollar.",
  }
];

const leadGenPackages = [
  {
    name: "Pipeline Starter",
    price: "$3,000",
    period: "/mo",
    description: "Launch your first robust inbound funnel and basic outbound outreach.",
    features: [
      "1 Active Sales Funnel",
      "Up to 1k Outbound Emails / mo",
      "Basic CRM Integration",
      "1 Custom Landing Page",
      "Monthly SLA Reviews"
    ],
    isPopular: false,
  },
  {
    name: "Growth Engine",
    price: "$5,500",
    period: "/mo",
    description: "Multi-funnel scaling with aggressive outbound volume for B2B ops.",
    features: [
      "2 Active Sales Funnels",
      "Up to 10k Outbound Emails / mo",
      "Advanced Email Nurture Sequences",
      "A/B Landing Page Testing",
      "Bi-Weekly Strategy Calls"
    ],
    isPopular: true,
  },
  {
    name: "Enterprise Domination",
    price: "$10,000+",
    period: "/mo",
    description: "For established teams needing massive appointment volume.",
    features: [
      "Unlimited Funnels Managed",
      "50k+ Outbound Volume / mo",
      "AI Appointment Setter Integration",
      "Dedicated Full-Time Inbox Manager",
      "Weekly SLA & Pipeline Huddles"
    ],
    isPopular: false,
  }
];

const leadGenArticles = [
  {
    category: "Case Study",
    date: "Oct 11, 2024",
    title: "How We Scaled a B2B SaaS from 20 to 150 Demos/Month",
    excerpt: "Breakdown of the omnichannel lead gen approach that fed their sales floor completely passively.",
    imageGrad: "linear-gradient(135deg, rgba(155,255,110,0.15) 0%, rgba(155,255,110,0.02) 100%)",
  },
  {
    category: "Conversion Rate",
    date: "Nov 04, 2024",
    title: "The Perfect VSL Structure for High-Ticket Offers",
    excerpt: "Stop making 40-minute webinars. Here is the 8-minute VSL script that actually generates qualified appointments.",
    imageGrad: "linear-gradient(135deg, rgba(110,231,255,0.15) 0%, rgba(110,231,255,0.02) 100%)",
  },
  {
    category: "Outbound",
    date: "Dec 01, 2024",
    title: "Cold Email is Not Dead: Our 45% Open Rate Framework",
    excerpt: "Why your outbound goes to spam, and the strict technical infrastructure required to ensure primary inbox delivery.",
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
          Strategic Lead <br />
          <span className="gradient-text">Generation</span>
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
          Stop relying on unpredictable referrals. We build highly efficient, predictable inbound funnels and outbound infrastructures to engineer qualified appointments at scale.
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

export default function LeadGenPageClient() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <HeroSection />
      
      {/* Wavy Marquee SVG */}
      <div style={{ width: "100%", overflow: "hidden", position: "relative", zIndex: 10, marginTop: "-40px", marginBottom: "40px" }}>
        <svg width="4000" height="140" viewBox="0 0 4000 140" style={{ display: "block" }}>
          <path id="wavy-path-static" d="M 0 70 Q 250 10 500 70 T 1000 70 T 1500 70 T 2000 70 T 2500 70 T 3000 70 T 3500 70 T 4000 70" fill="none" stroke="var(--accent)" strokeWidth="52" />
          <text fill="#060608" fontSize="20" fontWeight="900" letterSpacing="0.1em">
            <textPath href="#wavy-path-static" startOffset="0" textLength="6000" dominantBaseline="central">
              FILL YOUR PIPELINE TODAY ✦ PREDICTABLE APPOINTMENTS SCHEDULED ✦ GUARANTEED LEAD VOLUME ✦ FILL YOUR PIPELINE TODAY ✦ PREDICTABLE APPOINTMENTS SCHEDULED ✦ GUARANTEED LEAD VOLUME ✦ FILL YOUR PIPELINE TODAY ✦ PREDICTABLE APPOINTMENTS SCHEDULED ✦ GUARANTEED LEAD VOLUME ✦ FILL YOUR PIPELINE TODAY ✦ PREDICTABLE APPOINTMENTS SCHEDULED ✦ GUARANTEED LEAD VOLUME ✦ FILL YOUR PIPELINE TODAY ✦ PREDICTABLE APPOINTMENTS SCHEDULED ✦ GUARANTEED LEAD VOLUME ✦ 
              <animate attributeName="startOffset" from="0" to="-1000" dur="12s" repeatCount="indefinite" />
            </textPath>
          </text>
        </svg>
      </div>

      <ValueFocusSection 
        badge="Lead Generation Dominance"
        titleBase="Turn Traffic Into"
        titleHighlight="Pipeline"
        subtitle="Relying on hope is not a strategy. We engineer massive acquisition pipelines that seamlessly capture high-intent buyers and turn them into calendar bookings."
        customFeatures={[
          {
            title: "Magnetic Offers",
            description: "We design irresistible lead magnets and front-end offers that psychologically compel your exact target avatar to give you their contact data.",
            icon: <FaMagnet size={32} />
          },
          {
            title: "Frictionless Funnels",
            description: "We identify drop-off points and build custom, split-tested landing pages that maximize opt-in rates without relying on generic templates.",
            icon: <FaFilter size={32} />
          },
          {
            title: "Scalable Outbound",
            description: "We setup multi-domain architectures to run high-volume cold email that avoids spam filters and creates genuine conversations with decision makers.",
            icon: <FaEnvelopeOpenText size={32} />
          },
          {
            title: "Automated Nurturing",
            description: "Most leads don't buy immediately. We deploy behavioral email flows that educate and push leads down the funnel 24/7.",
            icon: <FaRobot size={32} />
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
              No vague promises. Here is exactly what is included when we take over your lead generation engine.
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
        titleBase="The High Cost of Empty"
        titleHighlight="Calendars"
        subtitle="Without a predictable mechanism for generating qualified appointments, you are constantly trading long-term growth for short-term survival."
        customAgitations={[
          {
            service: "Sales Funnels",
            title: "Paying For Dead Clicks",
            pain: "Running ads to your home page is financial suicide. Without a dedicated conversion funnel, you're paying thousands of dollars for clicks that instantly bounce and never return.",
            accent: "rgba(255, 80, 80, 0.2)",
            textAccent: "#ff5050"
          },
          {
            service: "Outbound Infrastructure",
            title: "Your Emails Hit Spam",
            pain: "You send hundreds of pitches but get zero replies because your domain reputation is destroyed. Without proper SPF/DKIM infrastructure, your message will never even be seen.",
            accent: "rgba(255, 120, 80, 0.2)",
            textAccent: "#ff7850"
          },
          {
            service: "Automated Nurture",
            title: "Leads Go Cold Instantly",
            pain: "If your sales team relies entirely on manual follow-up, leads fall through the cracks every single day. A lack of automation ensures your competitors will close them instead.",
            accent: "rgba(255, 179, 71, 0.2)",
            textAccent: "#ffb347"
          },
          {
            service: "Predictable Flow",
            title: "Feast or Famine Revenue",
            pain: "Relying purely on referrals creates chaotic revenue swings. One great month is followed by extreme panic the next because you have zero control over your acquisition flow.",
            accent: "rgba(255, 80, 120, 0.2)",
            textAccent: "#ff5078"
          }
        ]}
      />
      <PricingSection customPackages={leadGenPackages} />
      <BlogSection 
        badge="Proof of Concept"
        titleBase="See The Strategy"
        titleHighlight="In Action"
        subtitle="Read exactly how we deploy these lead generation strategies to funnel consistent sales to our partners."
        customPosts={leadGenArticles}
      />
    </main>
  );
}
