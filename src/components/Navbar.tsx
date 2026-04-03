"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      const sections = ["services", "work", "about", "blog", "contact"];
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is currently active in viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: scrolled ? "16px" : 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: scrolled ? "calc(100% - 32px)" : "100%",
        maxWidth: scrolled ? "1100px" : "100%",
        zIndex: 100,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        background: scrolled
          ? "rgba(11, 11, 14, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        borderRadius: scrolled ? "24px" : "0px",
        boxShadow: scrolled ? "0 20px 40px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: scrolled ? "64px" : "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          transition: "height 0.4s ease"
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #9bff6e, #6ee7ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "16px", fontWeight: 900, color: "#060608" }}>A</span>
          </div>
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: 800,
              color: "#f0f0f8",
              letterSpacing: "-0.02em",
            }}
          >
            ablyart
          </span>
        </a>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
          className="desktop-nav"
        >
          {["Services", "Work", "About", "Blog", "Contact"].map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="nav-link"
                style={{ 
                  position: 'relative', 
                  color: isActive ? '#ffffff' : 'rgba(240,240,248,0.6)',
                  fontWeight: isActive ? 600 : 500,
                  transition: 'all 0.3s ease'
                }}
              >
                {item}
                {/* Active Indicator Dot */}
                <span 
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: '50%',
                    transform: isActive ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0)',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 0 8px var(--accent)',
                    opacity: isActive ? 1 : 0,
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)'
                  }}
                />
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href="#contact"
            className="btn-glow"
            style={{
              padding: "10px 22px",
              fontSize: "0.875rem",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Get a Free Audit
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              color: "#f0f0f8",
              padding: "4px",
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <div style={{ width: "22px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <span
                style={{
                  height: "2px",
                  background: "#f0f0f8",
                  borderRadius: "2px",
                  transition: "all 0.3s",
                  transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                }}
              />
              <span
                style={{
                  height: "2px",
                  background: "#f0f0f8",
                  borderRadius: "2px",
                  transition: "all 0.3s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  height: "2px",
                  background: "#f0f0f8",
                  borderRadius: "2px",
                  transition: "all 0.3s",
                  transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(6,6,8,0.97)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            borderRadius: scrolled ? "0 0 24px 24px" : "0",
          }}
        >
          {["Services", "Work", "About", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: "1rem" }}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
