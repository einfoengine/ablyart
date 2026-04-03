"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaFeatherAlt, FaChartLine } from "react-icons/fa";

const features = [
  {
    title: "In Front of Your Leads",
    description: "Position your brand exactly where your ideal customers are looking. We deliver hyper-targeted visibility that drives high-intent traffic directly to your offers.",
    icon: <FaBullseye size={32} />
  },
  {
    title: "Quality Content & Creative",
    description: "Engage and convert your audience with premium, strategically crafted content. We design bold creatives that tell your story and build lasting trust.",
    icon: <FaFeatherAlt size={32} />
  },
  {
    title: "Persistent Optimization",
    description: "Continuous monitoring, rigorous testing, and relentless scaling. We constantly refine your campaigns to ensure maximum performance and exceptional ROI.",
    icon: <FaChartLine size={32} />
  }
];

export default function ValueFocusSection() {
  return (
    <section className="py-24 md:py-32 relative flex flex-col items-center justify-center z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card-bg)] mb-6 shadow-sm">
             <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></div>
             <span className="text-sm font-semibold tracking-wider text-[var(--foreground)] uppercase font-mono">Growth Engine</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
             How We Drive <span className="gradient-text italic">Results</span>
           </h2>
           <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg leading-relaxed inline-block">
             We don't just run ads. We build a comprehensive growth ecosystem designed to scale your business predictably and profitably.
           </p>
        </div>

        {/* 3 Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              
              className="glass-card flex flex-col items-center text-center relative overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-[var(--card-border)] hover:border-[var(--accent)] shadow-lg hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(155,255,110,0.1)] p-4"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] mb-8 shadow-sm group-hover:bg-[var(--accent-subtle)] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)] tracking-tight">
                {feature.title}
              </h3>
              
              <p className="text-[var(--muted)] leading-relaxed text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center relative z-10 flex flex-col items-center">
          <a
            href="#discovery"
            className="btn-glow inline-flex items-center justify-center font-bold"
            style={{
              padding: "18px 40px",
              fontSize: "1.125rem",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Book a Discovery Call
          </a>
        </div>

        {/* Client Logos under Button */}
        <div className="mt-24 w-full relative flex flex-col items-center pb-12 z-10">
          <div className="text-center text-xs font-semibold text-[var(--muted)] uppercase tracking-[0.25em] mb-12 w-full">
            Trusted by 12+ Innovative Brands Worldwide
          </div>
          
          <div className="w-full max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-10 md:gap-x-16 gap-y-8 md:gap-y-10">
            {[
              "Acme Corp", "Quantum", "Sysco", "Vertex", 
              "Apex Edge", "Velocity", "Nimbus", "Starlight", 
              "Horizon", "Zenith", "Matrix Labs", "Innova", 
              "BlueShift", "Nova", "Orbital", "Pioneer"
            ].map((logo, idx) => (
              <span 
                key={idx} 
                className="text-xl md:text-3xl font-black text-white/10 uppercase tracking-tighter hover:text-white/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{
                   // Optional pseudo-masonry organic variations
                   opacity: idx % 3 === 0 ? 0.7 : 1,
                   fontSize: idx % 5 === 0 ? "1.5em" : "1em"
                }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Wavy Static Marquee Ribbon with Moving Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-[140px] flex translate-y-[60%] z-20 pointer-events-none drop-shadow-[0_0_20px_rgba(155,255,110,0.3)]">
        <div className="absolute left-1/2 -translate-x-1/2 w-[4000px] h-[140px] transform rotate-1 pointer-events-auto">
          <svg width="4000" height="140" viewBox="0 0 4000 140">
            <path
              id="wavy-path-static"
              d="M 0 70 Q 250 10 500 70 T 1000 70 T 1500 70 T 2000 70 T 2500 70 T 3000 70 T 3500 70 T 4000 70"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="52"
            />
            <text fill="#060608" fontSize="20" fontWeight="900" letterSpacing="0.1em">
              {/* textLength forces exactly perfectly spaced phrases so startOffset looping works identically */}
              <textPath href="#wavy-path-static" startOffset="0" textLength="6000" dominantBaseline="central">
                 {"FOCUS ON YOUR CORE BUSINESS ✦ LET US MANAGE YOUR ONLINE PRESENCE ✦ MONEY BACK GUARANTEE ✦ ".repeat(6)}
                 <animate 
                   attributeName="startOffset" 
                   from="0" 
                   to="-1000" 
                   dur="12s" 
                   repeatCount="indefinite" 
                 />
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
