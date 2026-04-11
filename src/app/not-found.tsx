"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background styling elements */}
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

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}>
            <span className="tag-pill">
              <span className="glow-dot" style={{ backgroundColor: "#ff5050", boxShadow: "0 0 10px #ff5050" }} />
              Error 404
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(6rem, 15vw, 12rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: "16px",
            color: "#f0f0f8",
          }}
        >
          4<span className="gradient-text">0</span>4
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginBottom: "20px",
            color: "#f0f0f8",
          }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            color: "rgba(240,240,248,0.5)",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            maxWidth: "500px",
            margin: "0 auto 48px",
            lineHeight: 1.75,
          }}
        >
          Looks like you wandered into empty space. The page you are looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/"
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
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11 12l-4-4 4-4M3 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" transform="translate(1,0)" />
            </svg>
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
