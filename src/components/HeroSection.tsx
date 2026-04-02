"use client";

import { useEffect, useRef } from "react";

/* Animated wave SVG path for the hero bottom */
function WaveChart() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        overflow: "hidden",
        height: "120px",
        pointerEvents: "none",
      }}
    >
      {/* Double-wide SVG so we can animate a continuous loop */}
      <div className="wave-left" style={{ display: "flex", width: "200%" }}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flex: "0 0 50%", height: "120px" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0 80 C80 30, 160 110, 240 70 S400 20, 480 60 S640 100, 720 50 S880 10, 960 55 S1120 95, 1200 45 S1360 15, 1440 60 L1440 120 L0 120 Z"
            fill="rgba(155,255,110,0.06)"
          />
          <path
            d="M0 80 C80 30, 160 110, 240 70 S400 20, 480 60 S640 100, 720 50 S880 10, 960 55 S1120 95, 1200 45 S1360 15, 1440 60"
            stroke="#9bff6e"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(155,255,110,0.8))" }}
          />
        </svg>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flex: "0 0 50%", height: "120px" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0 80 C80 30, 160 110, 240 70 S400 20, 480 60 S640 100, 720 50 S880 10, 960 55 S1120 95, 1200 45 S1360 15, 1440 60 L1440 120 L0 120 Z"
            fill="rgba(155,255,110,0.06)"
          />
          <path
            d="M0 80 C80 30, 160 110, 240 70 S400 20, 480 60 S640 100, 720 50 S880 10, 960 55 S1120 95, 1200 45 S1360 15, 1440 60"
            stroke="#9bff6e"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(155,255,110,0.8))" }}
          />
        </svg>
      </div>
    </div>
  );
}

/* Floating metric card */
function MetricCard({
  label,
  value,
  change,
  positive,
  style,
  className,
}: {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`glass-card ${className ?? ""}`}
      style={{
        padding: "16px 20px",
        minWidth: "180px",
        ...style,
      }}
    >
      <div style={{ fontSize: "0.72rem", color: "rgba(240,240,248,0.5)", marginBottom: "4px", fontWeight: 500 }}>
        {label}
      </div>
      <div style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "6px" }}>
        {value}
      </div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          padding: "3px 10px",
          borderRadius: "9999px",
          fontSize: "0.72rem",
          fontWeight: 700,
          background: positive ? "rgba(155,255,110,0.15)" : "rgba(255,80,80,0.15)",
          color: positive ? "#9bff6e" : "#ff6060",
        }}
      >
        {positive ? "↑" : "↓"} {change}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "100px",
        paddingBottom: "120px",
      }}
    >
      {/* Background blobs */}
      <div className="hero-blob-1" />
      <div className="hero-blob-2" />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(155,255,110,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(155,255,110,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
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
        {/* Tag */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}>
          <span className="tag-pill">
            <span className="glow-dot" />
            Digital Marketing Agency
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            marginBottom: "24px",
            color: "#f0f0f8",
          }}
        >
          We fix your{" "}
          <span className="gradient-text">digital presence.</span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "rgba(240,240,248,0.6)",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto 40px",
            fontWeight: 400,
          }}
        >
          We craft high-converting digital experiences through strategic marketing,
          bold creative, and data-driven execution that actually moves the needle.
        </p>

        {/* CTAs */}
        <div
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
              padding: "16px 36px",
              fontSize: "1rem",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Get a Free Audit →
          </a>
          <a
            href="#work"
            className="btn-outline"
            style={{
              padding: "16px 36px",
              fontSize: "1rem",
              display: "inline-block",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            See Our Work
          </a>
        </div>

        {/* Trust line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            marginTop: "56px",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "250+", label: "Clients Served" },
            { value: "4.9★", label: "Avg. Rating" },
            { value: "$18M+", label: "Revenue Generated" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#9bff6e",
                  letterSpacing: "-0.03em",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "0.78rem", color: "rgba(240,240,248,0.5)", fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating metric cards */}
      <div
        className="float-card"
        style={{
          position: "absolute",
          left: "4%",
          top: "35%",
          zIndex: 3,
          display: "block",
        }}
      >
        <MetricCard label="Organic Traffic" value="+317%" change="MoM" positive />
      </div>

      <div
        className="float-card-slow"
        style={{
          position: "absolute",
          right: "4%",
          top: "38%",
          zIndex: 3,
          display: "block",
        }}
      >
        <MetricCard label="Conversion Rate" value="8.4%" change="+2.1%" positive />
      </div>

      <div
        className="float-card"
        style={{
          position: "absolute",
          right: "6%",
          bottom: "28%",
          zIndex: 3,
          display: "block",
          animationDelay: "1s",
        }}
      >
        <MetricCard label="Ad ROAS" value="6.2×" change="+1.4×" positive />
      </div>

      {/* Wave at bottom */}
      <WaveChart />

      <style>{`
        @media (max-width: 900px) {
          .float-card, .float-card-slow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
