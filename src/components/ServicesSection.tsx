"use client";

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
        <circle cx="12" cy="12" r="7" stroke="#9bff6e" strokeWidth="1.8" fill="none" />
        <line x1="17.5" y1="17.5" x2="24" y2="24" stroke="#9bff6e" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="12" x2="15" y2="12" stroke="#9bff6e" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="9" x2="12" y2="15" stroke="#9bff6e" strokeWidth="1.5" strokeLinecap="round" />
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
        <rect x="3" y="5" width="22" height="16" rx="2" stroke="#9bff6e" strokeWidth="1.8" fill="none" />
        <line x1="3" y1="10" x2="25" y2="10" stroke="#9bff6e" strokeWidth="1.5" />
        <line x1="14" y1="21" x2="14" y2="25" stroke="#9bff6e" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="25" x2="19" y2="25" stroke="#9bff6e" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 15 L12 18 L9 21" stroke="#9bff6e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="14" y1="21" x2="19" y2="21" stroke="#9bff6e" strokeWidth="1.5" strokeLinecap="round" />
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
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(155,255,110,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>

        {/* Section header */}
        <div style={{ marginBottom: "80px" }}>
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
              We don't do everything — we do three things exceptionally well,
              and we make them work together.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  return (
    <div
      className="service-card"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "20px",
        padding: "48px 52px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "64px",
        alignItems: "center",
        cursor: "default",
      }}
    >
      {/* Left column */}
      <div>
        {/* Number + icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "rgba(240,240,248,0.25)",
              letterSpacing: "0.1em",
            }}
          >
            {service.number}
          </span>
          <div
            style={{
              width: "1px",
              height: "20px",
              background: "rgba(255,255,255,0.1)",
            }}
          />
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: `rgba(${service.color === "#9bff6e" ? "155,255,110" : service.color === "#6ee7ff" ? "110,231,255" : "176,158,255"},0.1)`,
              border: `1px solid rgba(${service.color === "#9bff6e" ? "155,255,110" : service.color === "#6ee7ff" ? "110,231,255" : "176,158,255"},0.2)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {service.icon}
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "10px",
            lineHeight: 1.1,
          }}
        >
          {service.title}
        </h3>

        {/* Tagline */}
        <p
          style={{
            fontSize: "1rem",
            color: service.color,
            fontWeight: 600,
            marginBottom: "20px",
            letterSpacing: "-0.01em",
          }}
        >
          {service.tagline}
        </p>

        {/* Description */}
        <p
          style={{
            fontSize: "0.9rem",
            color: "rgba(240,240,248,0.55)",
            lineHeight: 1.8,
            marginBottom: "32px",
          }}
        >
          {service.description}
        </p>

        {/* CTA */}
        <a
          href={`#contact`}
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
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.gap = "14px";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.gap = "8px";
          }}
        >
          Start a project
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Right column */}
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        {/* Bullet points */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {service.bullets.map((bullet) => (
            <div
              key={bullet}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                fontSize: "0.9rem",
                color: "rgba(240,240,248,0.75)",
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: `rgba(${service.color === "#9bff6e" ? "155,255,110" : service.color === "#6ee7ff" ? "110,231,255" : "176,158,255"},0.12)`,
                  border: `1px solid rgba(${service.color === "#9bff6e" ? "155,255,110" : service.color === "#6ee7ff" ? "110,231,255" : "176,158,255"},0.4)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              >
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path
                    d="M1.5 4.5l2 2 4-4"
                    stroke={service.color}
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {bullet}
            </div>
          ))}
        </div>

        {/* Platform tags */}
        <div>
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "rgba(240,240,248,0.3)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Platforms & tools
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {service.platforms.map((p) => (
              <span
                key={p}
                style={{
                  padding: "5px 14px",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(240,240,248,0.6)",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .service-card {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 36px 28px !important;
          }
        }
      `}</style>
    </div>
  );
}
