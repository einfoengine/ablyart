"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Animation helpers ─────────────────────────────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: "250+", label: "Brands Scaled" },
  { value: "$18M+", label: "Client Revenue Generated" },
  { value: "4.9★", label: "Average Client Rating" },
  { value: "6.2×", label: "Average ROAS Delivered" },
];

const values = [
  {
    number: "01",
    title: "Results First",
    description:
      "We don't chase vanity metrics. Every strategy, campaign, and creative asset is engineered around one question: does this move the needle?",
    color: "#9bff6e",
    rgb: "155,255,110",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l4-8 4 5 3-3 5 6" stroke="#9bff6e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="4" r="2" fill="#9bff6e" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Radical Transparency",
    description:
      "You'll always know what we're doing and why. No black boxes. No fluff reports. Real data, plain language, and honest conversations.",
    color: "#6ee7ff",
    rgb: "110,231,255",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" fill="#6ee7ff" />
        <path d="M2 12C4.5 7 8 4 12 4s7.5 3 10 8c-2.5 5-6 8-10 8s-7.5-3-10-8z" stroke="#6ee7ff" strokeWidth="1.8" fill="none" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Full-Stack Thinking",
    description:
      "From brand awareness to closed deal — we see the entire customer journey and build systems that win at every touchpoint.",
    color: "#ffb347",
    rgb: "255,179,71",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="2" stroke="#ffb347" strokeWidth="1.8" />
        <rect x="13" y="3" width="8" height="8" rx="2" stroke="#ffb347" strokeWidth="1.8" />
        <rect x="3" y="13" width="8" height="8" rx="2" stroke="#ffb347" strokeWidth="1.8" />
        <rect x="13" y="13" width="8" height="8" rx="2" stroke="#ffb347" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Long-Term Partnership",
    description:
      "We're not a vendor. We embed into your business, understand your market deeply, and grow alongside you for the long run.",
    color: "#ff6eb4",
    rgb: "255,110,180",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 21C12 21 4 15.5 4 9.5A5 5 0 0 1 12 6a5 5 0 0 1 8 3.5C20 15.5 12 21 12 21z" stroke="#ff6eb4" strokeWidth="1.8" fill="none" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Shane Wazal Maruf",
    role: "Founder & Chief Growth Strategist",
    bio: "Serial builder with a decade in digital marketing. Obsessed with reverse-engineering what makes brands scale.",
    initials: "SW",
    accent: "#9bff6e",
  },
  {
    name: "Creative Lead",
    role: "Head of Content & Brand",
    bio: "Storyteller turned strategist. Makes brands impossible to ignore across every platform they touch.",
    initials: "CL",
    accent: "#6ee7ff",
  },
  {
    name: "Performance Lead",
    role: "Head of Paid Acquisition",
    bio: "Data-first media buyer who turns ad spend into predictable pipeline. Specialists in Meta, Google, and TikTok.",
    initials: "PL",
    accent: "#ffb347",
  },
  {
    name: "SEO & Funnel Lead",
    role: "Head of Organic Growth",
    bio: "Builds organic machines that compound over time — content, links, and technical SEO working in harmony.",
    initials: "SF",
    accent: "#ff6eb4",
  },
];

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description: "Founded with a single client and a bold belief: that small and mid-sized businesses deserve enterprise-grade marketing.",
  },
  {
    year: "2021",
    title: "First $1M Generated",
    description: "Hit our first major milestone — $1M in tracked client revenue. Proof that the system worked.",
  },
  {
    year: "2022",
    title: "Team Expands",
    description: "Grew from a solo operation to a full team of specialists across content, paid media, SEO, and strategy.",
  },
  {
    year: "2023",
    title: "100+ Brands",
    description: "Crossed 100 active and past clients. Refined our 4-pillar growth framework based on accumulated data.",
  },
  {
    year: "2024",
    title: "$18M+ Revenue",
    description: "Crossed $18M in client revenue generated. Average client ROAS hit an all-time high of 6.2×.",
  },
  {
    year: "2025→",
    title: "The Next Chapter",
    description: "Expanding into new verticals, new markets, and new partnerships. The goal: 10× everything.",
  },
];

// ─── Section components ────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "140px",
        paddingBottom: "100px",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div className="hero-blob-1" style={{ opacity: 0.6 }} />
      <div className="hero-blob-2" style={{ opacity: 0.5 }} />

      {/* Grid overlay */}
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

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}>
            <span className="tag-pill">
              <span className="glow-dot" />
              Our Story
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
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            marginBottom: "28px",
            color: "#f0f0f8",
          }}
        >
          We Exist to{" "}
          <span className="gradient-text">Scale Brands</span>
          <br />
          That Actually{" "}
          <span
            style={{
              fontStyle: "italic",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              color: "var(--accent)",
            }}
          >
            Deserve to Win
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "rgba(240,240,248,0.55)",
            lineHeight: 1.75,
            maxWidth: "680px",
            margin: "0 auto 48px",
          }}
        >
          ablyart is a 360° digital marketing agency built for scalable brands.
          We combine strategic marketing, bold creative, and relentless data to
          drive measurable growth across every channel that matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            className="btn-glow"
            style={{
              padding: "14px 32px",
              fontSize: "0.95rem",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Work With Us →
          </a>
          {/* <a
            href="/work"
            className="btn-outline"
            style={{
              padding: "14px 32px",
              fontSize: "0.95rem",
              display: "inline-block",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Know Success Stories
          </a> */}
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          margin: "72px auto 0",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        className="about-stats-grid"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "28px 24px",
              textAlign: "center",
              background: "rgba(255,255,255,0.02)",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}
          >
            <div
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2rem)",
                fontWeight: 900,
                color: "#9bff6e",
                letterSpacing: "-0.04em",
                marginBottom: "4px",
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: "0.75rem", color: "rgba(240,240,248,0.45)", fontWeight: 500 }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function MissionSection() {
  return (
    <section style={{ padding: "100px 24px", maxWidth: "1100px", margin: "0 auto" }}>
      <div
        className="about-mission-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Left: Mission */}
        <FadeUp delay={0}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <span className="glow-dot" />
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                Our Mission
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: "20px",
                color: "#f0f0f8",
              }}
            >
              Make Growth
              <br />
              <span className="gradient-text">Predictable.</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(240,240,248,0.55)",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              Too many great businesses are invisible because they can't afford to play the traditional
              marketing game. We built ablyart to change that — giving ambitious brands access to
              full-stack growth systems that compound over time.
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(240,240,248,0.55)", lineHeight: 1.8 }}>
              Our mission is simple: build sustainable, scalable growth engines for brands that
              deserve to win their market — without the guesswork, without the waste.
            </p>
          </div>
        </FadeUp>

        {/* Right: Vision card */}
        <FadeUp delay={0.15}>
          <div
            className="glass-card"
            style={{
              padding: "36px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, rgba(155,255,110,0.7), transparent)",
              }}
            />

            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "14px",
                background: "rgba(155,255,110,0.1)",
                border: "1px solid rgba(155,255,110,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15 9H22L16.5 13L18.5 20L12 16L5.5 20L7.5 13L2 9H9L12 2Z" fill="rgba(155,255,110,0.8)" />
              </svg>
            </div>

            <h3
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "12px",
              }}
            >
              Our Vision
            </h3>
            <p
              style={{
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "#f0f0f8",
                lineHeight: 1.45,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
              }}
            >
              "To be the growth partner that 10,000 ambitious brands trust to build their digital empire."
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "No-fluff, results-first marketing",
                "Systems built to scale, not just spike",
                "Every touchpoint optimised for revenue",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "rgba(155,255,110,0.15)",
                      border: "1px solid rgba(155,255,110,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="#9bff6e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "rgba(240,240,248,0.7)", fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-mission-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function ValuesSection() {
  return (
    <section style={{ padding: "80px 24px 100px", background: "rgba(255,255,255,0.01)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <span className="tag-pill">
                <span className="glow-dot" />
                What We Stand For
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "16px",
              }}
            >
              Values That Drive
              <span className="gradient-text"> Every Decision</span>
            </h2>
            <p style={{ color: "rgba(240,240,248,0.5)", fontSize: "1rem", maxWidth: "540px", margin: "0 auto", lineHeight: 1.7 }}>
              These aren't wall-art mantras. They're the operating principles that shape how we work, who we hire, and what we build.
            </p>
          </div>
        </FadeUp>

        <div
          className="about-values-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {values.map((v, i) => (
            <FadeUp key={v.number} delay={i * 0.1}>
              <div
                className="glass-card service-card"
                style={{
                  padding: "32px",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, rgba(${v.rgb},0.7), transparent)`,
                  }}
                />

                {/* Background glow */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-40px",
                    right: "-40px",
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, rgba(${v.rgb},0.08) 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: `rgba(${v.rgb},0.1)`,
                      border: `1px solid rgba(${v.rgb},0.25)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <span
                        style={{
                          fontSize: "0.58rem",
                          fontWeight: 800,
                          letterSpacing: "0.16em",
                          color: `rgba(${v.rgb},0.8)`,
                        }}
                      >
                        {v.number}
                      </span>
                      <h3
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 800,
                          color: "#f0f0f8",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {v.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: "0.87rem", color: "rgba(240,240,248,0.5)", lineHeight: 1.7 }}>
                      {v.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <span className="tag-pill">
                <span className="glow-dot" />
                The Team
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "16px",
              }}
            >
              The People Behind
              <span className="gradient-text"> Your Growth</span>
            </h2>
            <p style={{ color: "rgba(240,240,248,0.5)", fontSize: "1rem", maxWidth: "540px", margin: "0 auto", lineHeight: 1.7 }}>
              A tight-knit team of specialists. No junior handoffs, no account managers in the middle — you work with the experts directly.
            </p>
          </div>
        </FadeUp>

        <div
          className="about-team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {team.map((member, i) => (
            <FadeUp key={member.name} delay={i * 0.1}>
              <div
                className="glass-card service-card"
                style={{ padding: "28px 24px", textAlign: "center", height: "100%" }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: `radial-gradient(135deg, rgba(${member.accent === "#9bff6e" ? "155,255,110" : member.accent === "#6ee7ff" ? "110,231,255" : member.accent === "#ffb347" ? "255,179,71" : "255,110,180"},0.2) 0%, rgba(255,255,255,0.04) 100%)`,
                    border: `2px solid ${member.accent}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    color: member.accent,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {member.initials}
                </div>

                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "#f0f0f8",
                    marginBottom: "4px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: member.accent,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    marginBottom: "14px",
                    textTransform: "uppercase",
                  }}
                >
                  {member.role}
                </p>
                <p style={{ fontSize: "0.82rem", color: "rgba(240,240,248,0.5)", lineHeight: 1.65 }}>
                  {member.bio}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Hiring note */}
        <FadeUp delay={0.3}>
          <div
            className="glass-card"
            style={{
              marginTop: "28px",
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "4px" }}>
                We&apos;re always looking for exceptional talent.
              </div>
              <div style={{ color: "rgba(240,240,248,0.5)", fontSize: "0.85rem" }}>
                If you&apos;re obsessed with results and hate mediocrity, let&apos;s talk.
              </div>
            </div>
            <a
              href="mailto:hello@ablyart.com"
              className="btn-outline"
              style={{
                padding: "10px 24px",
                fontSize: "0.85rem",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-block",
                whiteSpace: "nowrap",
              }}
            >
              Say Hello →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section style={{ padding: "80px 24px 100px", background: "rgba(255,255,255,0.01)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <span className="tag-pill">
                <span className="glow-dot" />
                Our Journey
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "16px",
              }}
            >
              From Idea to
              <span className="gradient-text"> $18M+ Generated</span>
            </h2>
          </div>
        </FadeUp>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "80px",
              top: "8px",
              bottom: "8px",
              width: "1px",
              background: "linear-gradient(to bottom, transparent, rgba(155,255,110,0.3) 10%, rgba(155,255,110,0.3) 90%, transparent)",
            }}
          />

          {timeline.map((item, i) => (
            <FadeUp key={item.year} delay={i * 0.08}>
              <div
                style={{
                  display: "flex",
                  gap: "32px",
                  marginBottom: "44px",
                  alignItems: "flex-start",
                }}
              >
                {/* Year */}
                <div style={{ width: "80px", flexShrink: 0, textAlign: "right", paddingRight: "4px" }}>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 800,
                      color: i === timeline.length - 1 ? "var(--accent)" : "rgba(240,240,248,0.35)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                {/* Dot */}
                <div style={{ flexShrink: 0, paddingTop: "3px" }}>
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: i === timeline.length - 1 ? "var(--accent)" : "rgba(155,255,110,0.4)",
                      boxShadow: i === timeline.length - 1 ? "0 0 12px var(--accent)" : "none",
                      marginLeft: "-4.5px",
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingBottom: "4px" }}>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 800,
                      color: "#f0f0f8",
                      marginBottom: "6px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(240,240,248,0.5)", lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section style={{ padding: "80px 24px 120px" }}>
      <FadeUp>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          {/* Glow bg */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              height: "300px",
              background: "radial-gradient(ellipse, rgba(155,255,110,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            className="glass-card"
            style={{
              padding: "64px 48px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, rgba(155,255,110,0.8), transparent)",
              }}
            />

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
              <span className="tag-pill">
                <span className="glow-dot" />
                Let&apos;s Build Together
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                marginBottom: "20px",
                color: "#f0f0f8",
                lineHeight: 1.1,
              }}
            >
              Ready to Scale?
              <br />
              <span className="gradient-text">We&apos;re Ready Too.</span>
            </h2>

            <p
              style={{
                color: "rgba(240,240,248,0.5)",
                fontSize: "1rem",
                lineHeight: 1.75,
                maxWidth: "500px",
                margin: "0 auto 36px",
              }}
            >
              Book a free 30-minute growth audit. We&apos;ll audit your current marketing, identify your biggest levers, and map out a 90-day roadmap — no strings attached.
            </p>

            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="#contact"
                className="btn-glow"
                style={{
                  padding: "16px 40px",
                  fontSize: "1rem",
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                Get a Free Audit →
              </a>
              <a
                href="/work"
                className="btn-outline"
                style={{
                  padding: "16px 32px",
                  fontSize: "1rem",
                  display: "inline-block",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                See Our Results
              </a>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPageClient() {
  return (
    <main style={{ minHeight: "100vh", paddingTop: "0" }}>
      <HeroSection />
      <div className="divider" style={{ maxWidth: "1100px", margin: "0 auto" }} />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
      <CtaSection />
    </main>
  );
}
