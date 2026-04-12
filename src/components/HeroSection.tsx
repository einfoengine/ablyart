"use client";

import { useEffect, useRef } from "react";
import { FlipWords } from "./FlipWords";

/* Canvas-based upward trending scrolling wave */
function TrendingWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.parentElement?.offsetWidth ?? window.innerWidth;
      canvas.height = 160;
    };
    resize();
    window.addEventListener("resize", resize);

    const getY = (x: number, W: number, H: number, t: number) => {
      const p = x / W; // 0 = left (old/low), 1 = right (new/high)
      // Trend: right side near top (high value), left near bottom (low value)
      const baseline = H * 0.78 - p * H * 0.58;
      // Layered waves that scroll left as t increases
      const w1 = Math.sin(p * 16 + t * 2.2) * H * 0.07;
      const w2 = Math.sin(p * 7  - t * 1.1) * H * 0.045;
      const w3 = Math.sin(p * 28 + t * 3.8) * H * 0.018;
      return Math.max(6, Math.min(H - 4, baseline + w1 + w2 + w3));
    };

    const draw = () => {
      tRef.current += 0.016;
      const t = tRef.current;
      const W = canvas.width;
      const H = canvas.height;
      const steps = 280;

      ctx.clearRect(0, 0, W, H);

      // ── Gradient fill under the wave ──
      const fillGrad = ctx.createLinearGradient(0, 0, 0, H);
      fillGrad.addColorStop(0, "rgba(155,255,110,0.18)");
      fillGrad.addColorStop(0.55, "rgba(155,255,110,0.06)");
      fillGrad.addColorStop(1, "rgba(155,255,110,0)");

      ctx.beginPath();
      ctx.moveTo(0, H);
      for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * W;
        ctx.lineTo(x, getY(x, W, H, t));
      }
      ctx.lineTo(W, H);
      ctx.closePath();
      ctx.fillStyle = fillGrad;
      ctx.fill();

      // ── Outer glow pass (thick, soft) ──
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * W;
        const y = getY(x, W, H, t);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.shadowColor = "#9bff6e";
      ctx.shadowBlur = 20;
      ctx.strokeStyle = "rgba(155,255,110,0.35)";
      ctx.lineWidth = 6;
      ctx.lineJoin = "round";
      ctx.stroke();

      // ── Sharp neon line on top ──
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * W;
        const y = getY(x, W, H, t);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.shadowColor = "#9bff6e";
      ctx.shadowBlur = 10;
      ctx.strokeStyle = "#9bff6e";
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // ── Bright tip dot at the right edge ──
      const tipY = getY(W, W, H, t);
      ctx.beginPath();
      ctx.arc(W - 2, tipY, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#9bff6e";
      ctx.shadowColor = "#9bff6e";
      ctx.shadowBlur = 14;
      ctx.fill();
      ctx.shadowBlur = 0;

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "160px",
        pointerEvents: "none",
        display: "block",
      }}
    />
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
        paddingTop: "140px",
        paddingBottom: "120px",
        overflow: "hidden",
      }}
    >
      {/* Background blobs — same opacity as inner pages */}
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
        {/* <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}>
          <span className="tag-pill">
            <span className="glow-dot" />
            A holistic approach
          </span>
        </div> */}

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
          <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
            <span style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              fontStyle: "italic",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              color: "var(--accent)",
              border: "1px solid rgba(155,255,110,0.25)",
              padding: "6px 24px",
              borderRadius: "50px",
              background: "rgba(155,255,110,0.05)",
              letterSpacing: "0.02em",
              transform: "rotate(-2deg)",
              boxShadow: "0 10px 20px rgba(155,255,110,0.05)"
            }}>
              Predictable
            </span>
          </div>
          10X Growth{" "}
          <span className="gradient-text break-words">for Scalable Startups</span>
        </h1>

        {/* Subheadline */}
        <div
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "rgba(240,240,248,0.6)",
            lineHeight: 1.7,
            maxWidth: "700px",
            margin: "0 auto 40px",
            fontWeight: 400,
            minHeight: "80px",
          }}
        >
          We are helping in every possible way: <br />
          <FlipWords 
            words={[
              "Optimizing the strategy",
              "Building high quality contents (copy, visuals, videos, etc)",
              "Running ads",
              "Generating leads",
              "Increasing search visibility"
            ]} 
            className="font-semibold text-[var(--accent)]" 
          />
        </div>

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
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow"
            style={{
              padding: "16px 36px",
              fontSize: "1rem",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Book a Discovery Call →
          </a>
          <a
            href="/work"
            className="btn-outline"
            style={{
              padding: "16px 36px",
              fontSize: "1rem",
              display: "inline-block",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Know Success Stories
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

      {/* Upward trending wave at bottom */}
      <TrendingWave />

      <style>{`
        @media (max-width: 900px) {
          .float-card, .float-card-slow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
