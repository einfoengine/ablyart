"use client";

// px from viewport top where the first card sticks (≥ navbar height ~70px)
const STICKY_BASE = 82;
// How much of each card header remains visible when the next card overlaps it
// = card paddingTop (44) + icon row (50) + row paddingBottom (32) + border (1) + buffer (15)
const CARD_STEP = 142;

const services = [
  {
    id: "social-media",
    number: "01",
    title: "Social Media",
    tagline: "Content that converts scrollers into buyers.",
    description:
      "We build and manage high-performing social presences across Instagram, TikTok, LinkedIn, Facebook, and X. From strategy and creative production to community management and paid social — we turn followers into revenue.",
    bullets: [
      "Platform strategy & audience research",
      "Content creation & short-form video",
      "Paid social campaigns (Meta, TikTok)",
      "Community management & growth",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="7" cy="14" r="3" fill="#9bff6e" />
        <circle cx="21" cy="7" r="3" fill="#9bff6e" />
        <circle cx="21" cy="21" r="3" fill="#9bff6e" />
        <line x1="9.6" y1="12.6" x2="18.4" y2="8.4" stroke="#9bff6e" strokeWidth="1.5" />
        <line x1="9.6" y1="15.4" x2="18.4" y2="19.6" stroke="#9bff6e" strokeWidth="1.5" />
      </svg>
    ),
    color: "#9bff6e",
    platforms: ["Instagram", "TikTok", "LinkedIn", "Facebook", "X"],
  },
  {
    id: "search-engines",
    number: "02",
    title: "Search Engines",
    tagline: "Rank higher. Get found. Drive intent traffic.",
    description:
      "We combine technical SEO, content strategy, and Google Ads to make sure your brand appears exactly when people are searching for what you offer. More visibility, more qualified clicks, more growth.",
    bullets: [
      "Technical SEO & site audits",
      "Keyword research & content strategy",
      "Google Ads & PPC management",
      "Local SEO & maps optimization",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="12" cy="12" r="7" stroke="#6ee7ff" strokeWidth="1.8" fill="none" />
        <line x1="17.5" y1="17.5" x2="24" y2="24" stroke="#6ee7ff" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="12" x2="15" y2="12" stroke="#6ee7ff" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="9" x2="12" y2="15" stroke="#6ee7ff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "#6ee7ff",
    platforms: ["Google", "Bing", "YouTube", "Maps", "Shopping"],
  },
  {
    id: "web-development",
    number: "03",
    title: "Web Development",
    tagline: "Sites that look great and perform even better.",
    description:
      "We design and develop fast, conversion-optimised websites and landing pages built on modern tech stacks. From brand-new builds to full redesigns — every pixel is purpose-built to turn visitors into customers.",
    bullets: [
      "Custom website & landing page design",
      "Next.js, React & Webflow builds",
      "CRO-optimised UX & UI",
      "Speed, SEO & accessibility audits",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="16" rx="2" stroke="#b09eff" strokeWidth="1.8" fill="none" />
        <line x1="3" y1="10" x2="25" y2="10" stroke="#b09eff" strokeWidth="1.5" />
        <line x1="14" y1="21" x2="14" y2="25" stroke="#b09eff" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="25" x2="19" y2="25" stroke="#b09eff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 15 L12 18 L9 21" stroke="#b09eff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="14" y1="21" x2="19" y2="21" stroke="#b09eff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "#b09eff",
    platforms: ["Next.js", "React", "Webflow", "Shopify", "WordPress"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        // Generous bottom padding so the stacked cards have room to travel
        padding: "100px 24px 220px",
        position: "relative",
        // ⚠️ NO overflow:hidden — that would break position:sticky on children
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "700px",
          background: "radial-gradient(ellipse at center, rgba(155,255,110,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>

        {/* Section header — scrolls normally */}
        <div style={{ marginBottom: "64px" }}>
          <div style={{ display: "inline-flex", marginBottom: "20px" }}>
            <span className="tag-pill">What we do</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                maxWidth: "560px",
              }}
            >
              Three channels.{" "}
              <span className="gradient-text">One strategy.</span>
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(240,240,248,0.5)",
                maxWidth: "340px",
                lineHeight: 1.8,
              }}
            >
              We don&apos;t do everything — we do three things exceptionally well,
              and we make them work together.
            </p>
          </div>
        </div>

        {/* ── Stacking cards ── */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} total={services.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  total,
}: {
  service: (typeof services)[number];
  index: number;
  total: number;
}) {
  const rgb =
    service.color === "#9bff6e"
      ? "155,255,110"
      : service.color === "#6ee7ff"
      ? "110,231,255"
      : "176,158,255";

  // Each card sticks progressively lower so the header of the card beneath stays visible
  const stickyTop = STICKY_BASE + index * CARD_STEP;

  // Progressively slightly lighter background so stacking depth is readable
  const bgLightness = 12 + index * 4; // 12 → 16 → 20
  const bg = `rgb(${bgLightness}, ${bgLightness}, ${bgLightness + 2})`;

  const isLast = index === total - 1;

  return (
    <div
      style={{
        position: "sticky",
        top: `${stickyTop}px`,
        zIndex: index + 1,
        // Slight margin only between cards in normal flow (not last)
        marginBottom: isLast ? 0 : 8,
        background: bg,
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "44px 52px",
        // Depth shadow — more pronounced on higher stacked cards
        boxShadow:
          index > 0
            ? `0 -12px 48px -4px rgba(0,0,0,${0.45 + index * 0.12}), 0 0 0 1px rgba(255,255,255,0.04)`
            : "none",
      }}
    >
      {/* ── Header row: number | divider | icon | title + tagline ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "36px",
          paddingBottom: "32px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "rgba(240,240,248,0.22)",
            letterSpacing: "0.12em",
            flexShrink: 0,
          }}
        >
          {service.number}
        </span>

        <div style={{ width: "1px", height: "22px", background: "rgba(255,255,255,0.1)", flexShrink: 0 }} />

        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "13px",
            background: `rgba(${rgb},0.1)`,
            border: `1px solid rgba(${rgb},0.22)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {service.icon}
        </div>

        <div>
          <h3
            style={{
              fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "5px",
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontSize: "0.875rem",
              color: service.color,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            {service.tagline}
          </p>
        </div>
      </div>

      {/* ── Body: 2-column grid ── */}
      <div
        className="service-body"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "52px",
          alignItems: "start",
        }}
      >
        {/* Left: description + CTA */}
        <div>
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(240,240,248,0.55)",
              lineHeight: 1.85,
              marginBottom: "28px",
            }}
          >
            {service.description}
          </p>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.875rem",
              fontWeight: 700,
              color: service.color,
              textDecoration: "none",
              transition: "gap 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.gap = "14px"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.gap = "8px"; }}
          >
            Start a project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Right: bullets + platforms */}
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
            {service.bullets.map((bullet) => (
              <div
                key={bullet}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  fontSize: "0.875rem",
                  color: "rgba(240,240,248,0.75)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: `rgba(${rgb},0.12)`,
                    border: `1px solid rgba(${rgb},0.4)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 4.5l2 2 4-4" stroke={service.color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {bullet}
              </div>
            ))}
          </div>

          <div>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "rgba(240,240,248,0.28)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              Platforms &amp; tools
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {service.platforms.map((p) => (
                <span
                  key={p}
                  style={{
                    padding: "5px 13px",
                    borderRadius: "9999px",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "rgba(240,240,248,0.6)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .service-body {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </div>
  );
}
