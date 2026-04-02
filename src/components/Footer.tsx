"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Services: ["SEO & Content", "Paid Ads", "Social Media", "Web Design", "Email Marketing"],
    Company: ["About Us", "Case Studies", "Careers", "Blog", "Press"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "80px 24px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse at bottom, rgba(155,255,110,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr repeat(3, auto)",
            gap: "48px",
            marginBottom: "64px",
            alignItems: "start",
          }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "9px",
                  background: "linear-gradient(135deg, #9bff6e, #6ee7ff)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "18px", fontWeight: 900, color: "#060608" }}>A</span>
              </div>
              <span
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#f0f0f8",
                  letterSpacing: "-0.02em",
                }}
              >
                ablyart
              </span>
            </a>

            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(240,240,248,0.5)",
                lineHeight: 1.8,
                maxWidth: "280px",
                marginBottom: "28px",
              }}
            >
              We fix your digital presence — from brand identity to paid performance,
              we make sure you're impossible to ignore online.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { label: "X", href: "#" },
                { label: "in", href: "#" },
                { label: "ig", href: "#" },
                { label: "yt", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(240,240,248,0.5)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.2s",
                    background: "rgba(255,255,255,0.03)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(155,255,110,0.4)";
                    el.style.color = "#9bff6e";
                    el.style.background = "rgba(155,255,110,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(240,240,248,0.5)";
                    el.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "rgba(240,240,248,0.35)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(240,240,248,0.55)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                        fontWeight: 400,
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#f0f0f8")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "rgba(240,240,248,0.55)")
                      }
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className="glass-card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            padding: "32px 40px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginBottom: "6px",
                letterSpacing: "-0.02em",
              }}
            >
              Get weekly growth insights
            </h3>
            <p style={{ fontSize: "0.85rem", color: "rgba(240,240,248,0.5)" }}>
              No fluff. Just proven tactics from our team.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "9999px",
                padding: "11px 20px",
                color: "#f0f0f8",
                fontSize: "0.875rem",
                outline: "none",
                width: "220px",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) =>
                ((e.target as HTMLInputElement).style.borderColor = "rgba(155,255,110,0.5)")
              }
              onBlur={(e) =>
                ((e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.1)")
              }
            />
            <button type="submit" className="btn-glow" style={{ padding: "11px 24px", fontSize: "0.875rem", cursor: "pointer", border: "none" }}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: "28px" }} />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "0.8rem", color: "rgba(240,240,248,0.35)" }}>
            © {currentYear} ablyart. All rights reserved.
          </span>
          <span style={{ fontSize: "0.8rem", color: "rgba(240,240,248,0.35)" }}>
            Made with{" "}
            <span style={{ color: "#9bff6e" }}>♥</span>
            {" "}for brands that want to grow.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
