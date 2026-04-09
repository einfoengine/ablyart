"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── FadeUp helper ─────────────────────────────────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      style={style}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Growth Strategy", "Paid Media", "SEO & Content", "Creative", "Email & SMS", "Analytics"];

const posts = [
  {
    id: 1,
    slug: "high-converting-marketing-funnel-2025",
    category: "Growth Strategy",
    date: "Apr 5, 2025",
    readTime: "7 min read",
    title: "How to Build a High-Converting Marketing Funnel in 2025",
    excerpt:
      "Discover the critical components of a modern, data-driven marketing funnel that consistently generates qualified leads — without burning your ad budget.",
    accent: "#9bff6e",
    rgb: "155,255,110",
    featured: true,
  },
  {
    id: 2,
    slug: "blended-roas-scaling-ad-spend",
    category: "Paid Media",
    date: "Mar 28, 2025",
    readTime: "9 min read",
    title: "The Death of Traditional ROAS: How We Scale Ad Spend Today",
    excerpt:
      "Why relying solely on platform ROAS is killing your ability to scale, and the blended attribution metrics you should be tracking instead.",
    accent: "#6ee7ff",
    rgb: "110,231,255",
    featured: false,
  },
  {
    id: 3,
    slug: "tiktok-creative-strategy-2025",
    category: "Creative",
    date: "Mar 20, 2025",
    readTime: "6 min read",
    title: "Anatomy of a Winning TikTok Creative: Hook, Story, Offer",
    excerpt:
      "Breaking down the exact hook structures, storytelling frameworks, and offer mechanics that stop the scroll and drive measurable revenue.",
    accent: "#ff6eb4",
    rgb: "255,110,180",
    featured: false,
  },
  {
    id: 4,
    slug: "seo-programmatic-content-scale",
    category: "SEO & Content",
    date: "Mar 12, 2025",
    readTime: "11 min read",
    title: "Programmatic SEO: How We Generated 300K Organic Visits in 90 Days",
    excerpt:
      "The exact playbook we used to build a programmatic content engine that went from zero to 300K monthly organic visits — without a huge team.",
    accent: "#ffb347",
    rgb: "255,179,71",
    featured: false,
  },
  {
    id: 5,
    slug: "email-revenue-machine",
    category: "Email & SMS",
    date: "Mar 4, 2025",
    readTime: "8 min read",
    title: "The Email Flows Generating 35% of Our Clients' Revenue",
    excerpt:
      "Most brands are leaving 30–40% of their revenue on the table. Here are the exact automated email flows we install for every client on day one.",
    accent: "#b09eff",
    rgb: "176,158,255",
    featured: false,
  },
  {
    id: 6,
    slug: "attribution-models-2025",
    category: "Analytics",
    date: "Feb 24, 2025",
    readTime: "10 min read",
    title: "Attribution in 2025: What Actually Works When iOS Broke Everything",
    excerpt:
      "Privacy updates gutted traditional tracking. Here's how we rebuild attribution from scratch for every client — and the tools we actually trust.",
    accent: "#6ee7ff",
    rgb: "110,231,255",
    featured: false,
  },
  {
    id: 7,
    slug: "retention-ltv-maximization",
    category: "Growth Strategy",
    date: "Feb 14, 2025",
    readTime: "8 min read",
    title: "LTV Over CAC: The Retention Playbook for Scaling Brands",
    excerpt:
      "Acquiring customers is expensive. Keeping them — and growing them — is where the real profit lives. Here's our full retention system.",
    accent: "#9bff6e",
    rgb: "155,255,110",
    featured: false,
  },
  {
    id: 8,
    slug: "google-ads-profitable-scale",
    category: "Paid Media",
    date: "Feb 5, 2025",
    readTime: "12 min read",
    title: "Google Ads Playbook: From Breakeven to 6× ROAS at Scale",
    excerpt:
      "The exact campaign structure, bidding strategy, and creative testing framework we use to profitably scale Google Ads accounts from $10K to $100K/mo.",
    accent: "#ff6eb4",
    rgb: "255,110,180",
    featured: false,
  },
];

// ─── Featured Post ─────────────────────────────────────────────────────────────

function FeaturedPost({ post }: { post: (typeof posts)[0] }) {
  return (
    <FadeUp delay={0.1}>
      <a
        href={`/blog/${post.slug}`}
        style={{ textDecoration: "none", display: "block" }}
      >
        <div
          className="glass-card"
          style={{
            padding: "0",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "340px",
            cursor: "pointer",
            transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = `rgba(${post.rgb},0.3)`;
            el.style.transform = "translateY(-3px)";
            el.style.boxShadow = `0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(${post.rgb},0.07)`;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "rgba(255,255,255,0.08)";
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "";
          }}
        >
          {/* Left: gradient visual */}
          <div
            style={{
              background: `linear-gradient(135deg, rgba(${post.rgb},0.18) 0%, rgba(${post.rgb},0.04) 50%, transparent 100%)`,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "260px",
              overflow: "hidden",
            }}
          >
            {/* Dot grid */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(${post.rgb},0.25) 1.5px, transparent 0)`,
                backgroundSize: "20px 20px",
                opacity: 0.4,
              }}
            />
            {/* Big number watermark */}
            <div
              style={{
                fontSize: "10rem",
                fontWeight: 900,
                color: `rgba(${post.rgb},0.06)`,
                letterSpacing: "-0.06em",
                userSelect: "none",
                position: "absolute",
              }}
            >
              01
            </div>
            {/* Featured badge */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 12px",
                borderRadius: "9999px",
                background: `rgba(${post.rgb},0.15)`,
                border: `1px solid rgba(${post.rgb},0.35)`,
                fontSize: "0.65rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: post.accent,
              }}
            >
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: post.accent, boxShadow: `0 0 6px ${post.accent}`, display: "inline-block" }} />
              Featured
            </div>
          </div>

          {/* Right: content */}
          <div
            style={{
              padding: "40px 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderLeft: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: post.accent,
                }}
              >
                {post.category}
              </span>
              <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "inline-block" }} />
              <span style={{ fontSize: "0.75rem", color: "rgba(240,240,248,0.4)", fontWeight: 500 }}>{post.date}</span>
              <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "inline-block" }} />
              <span style={{ fontSize: "0.75rem", color: "rgba(240,240,248,0.4)", fontWeight: 500 }}>{post.readTime}</span>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 800,
                color: "#f0f0f8",
                letterSpacing: "-0.03em",
                lineHeight: 1.25,
                marginBottom: "18px",
              }}
            >
              {post.title}
            </h2>

            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(240,240,248,0.5)",
                lineHeight: 1.75,
                marginBottom: "32px",
              }}
            >
              {post.excerpt}
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: post.accent,
              }}
            >
              Read Article
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </FadeUp>
  );
}

// ─── Post Card ─────────────────────────────────────────────────────────────────

function PostCard({ post, index }: { post: (typeof posts)[0]; index: number }) {
  return (
    <FadeUp delay={index * 0.08} style={{ height: "100%" }}>
      <a
        href={`/blog/${post.slug}`}
        style={{ textDecoration: "none", display: "block", height: "100%" }}
      >
        <div
          className="glass-card"
          style={{
            padding: "0",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            cursor: "pointer",
            transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = `rgba(${post.rgb},0.3)`;
            el.style.transform = "translateY(-4px)";
            el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(${post.rgb},0.06)`;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "rgba(255,255,255,0.08)";
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "";
          }}
        >
          {/* Thumbnail */}
          <div
            style={{
              height: "160px",
              background: `linear-gradient(135deg, rgba(${post.rgb},0.16) 0%, rgba(${post.rgb},0.03) 70%, transparent 100%)`,
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(${post.rgb},0.2) 1.5px, transparent 0)`,
                backgroundSize: "18px 18px",
                opacity: 0.45,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                fontSize: "6rem",
                fontWeight: 900,
                color: `rgba(${post.rgb},0.07)`,
                letterSpacing: "-0.06em",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {String(post.id).padStart(2, "0")}
            </div>
            {/* Category badge */}
            <div
              style={{
                position: "absolute",
                top: "14px",
                left: "16px",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "4px 10px",
                borderRadius: "9999px",
                background: `rgba(${post.rgb},0.12)`,
                border: `1px solid rgba(${post.rgb},0.3)`,
                fontSize: "0.6rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: post.accent,
              }}
            >
              {post.category}
            </div>
          </div>

          {/* Body */}
          <div
            style={{
              padding: "24px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <span style={{ fontSize: "0.72rem", color: "rgba(240,240,248,0.4)", fontWeight: 500 }}>
                {post.date}
              </span>
              <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "inline-block" }} />
              <span style={{ fontSize: "0.72rem", color: "rgba(240,240,248,0.4)", fontWeight: 500 }}>
                {post.readTime}
              </span>
            </div>

            <h3
              style={{
                fontSize: "1.05rem",
                fontWeight: 800,
                color: "#f0f0f8",
                letterSpacing: "-0.025em",
                lineHeight: 1.35,
                marginBottom: "12px",
                transition: "color 0.2s",
              }}
            >
              {post.title}
            </h3>

            <p
              style={{
                fontSize: "0.82rem",
                color: "rgba(240,240,248,0.45)",
                lineHeight: 1.7,
                flex: 1,
                marginBottom: "20px",
              }}
            >
              {post.excerpt}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: post.accent,
              }}
            >
              Read Article
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </FadeUp>
  );
}

// ─── Newsletter ────────────────────────────────────────────────────────────────

function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <FadeUp delay={0}>
      <div
        className="glass-card"
        style={{
          padding: "56px 48px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          maxWidth: "680px",
          margin: "0 auto",
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
            background: "linear-gradient(90deg, transparent, rgba(155,255,110,0.8), transparent)",
          }}
        />
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "400px",
            height: "200px",
            background: "radial-gradient(ellipse, rgba(155,255,110,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
            <span className="tag-pill">
              <span className="glow-dot" />
              Weekly Digest
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
              fontWeight: 900,
              letterSpacing: "-0.035em",
              marginBottom: "14px",
              lineHeight: 1.15,
            }}
          >
            Get Growth Insights
            <br />
            <span className="gradient-text">Delivered Weekly</span>
          </h2>

          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(240,240,248,0.5)",
              lineHeight: 1.75,
              maxWidth: "460px",
              margin: "0 auto 32px",
            }}
          >
            No fluff. Every Friday: one actionable marketing strategy, one data insight, and one tool we&apos;re actually using with clients.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  borderRadius: "9999px",
                  background: "rgba(155,255,110,0.1)",
                  border: "1px solid rgba(155,255,110,0.35)",
                  color: "var(--accent)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                You&apos;re in — check your inbox!
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  gap: "10px",
                  maxWidth: "420px",
                  margin: "0 auto",
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "12px 18px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#f0f0f8",
                    fontSize: "0.88rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(155,255,110,0.4)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                />
                <button
                  type="submit"
                  className="btn-glow"
                  style={{
                    padding: "12px 24px",
                    fontSize: "0.88rem",
                    cursor: "pointer",
                    border: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Subscribe →
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <p
            style={{
              fontSize: "0.72rem",
              color: "rgba(240,240,248,0.3)",
              marginTop: "14px",
            }}
          >
            Join 2,400+ marketers. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </FadeUp>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = posts.find((p) => p.featured)!;
  const filtered =
    activeCategory === "All"
      ? posts.filter((p) => !p.featured)
      : posts.filter((p) => p.category === activeCategory && !p.featured);

  return (
    <main style={{ minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          paddingTop: "140px",
          paddingBottom: "72px",
          overflow: "hidden",
        }}
      >
        <div className="hero-blob-1" style={{ opacity: 0.5 }} />
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
              <span className="tag-pill">
                <span className="glow-dot" />
                Insights & Strategy
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              marginBottom: "22px",
            }}
          >
            The Growth{" "}
            <span className="gradient-text">Playbook</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              color: "rgba(240,240,248,0.5)",
              lineHeight: 1.75,
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Actionable strategies, frameworks, and data-driven insights straight from the campaigns we run every day. No theory — just what actually works.
          </motion.p>
        </div>
      </section>

      {/* ── Featured post ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 64px" }}>
        <FeaturedPost post={featured} />
      </section>

      {/* ── Category Filters ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 40px" }}>
        <FadeUp delay={0}>
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "9999px",
                    border: isActive ? "1px solid rgba(155,255,110,0.4)" : "1px solid rgba(255,255,255,0.08)",
                    background: isActive ? "rgba(155,255,110,0.1)" : "rgba(255,255,255,0.03)",
                    color: isActive ? "var(--accent)" : "rgba(240,240,248,0.5)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    letterSpacing: "0.02em",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </FadeUp>
      </section>

      {/* ── Posts Grid ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 80px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              alignItems: "start",
            }}
          >
            {filtered.length > 0 ? (
              filtered.map((post, i) => (
                <PostCard key={post.id} post={post} index={i} />
              ))
            ) : (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "80px 0",
                  color: "rgba(240,240,248,0.3)",
                  fontSize: "0.9rem",
                }}
              >
                No posts in this category yet — check back soon.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── Newsletter ── */}
      <section
        style={{
          padding: "60px 24px 100px",
          background: "rgba(255,255,255,0.01)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Newsletter />
      </section>

      <style>{`
        @media (max-width: 900px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .posts-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .posts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
