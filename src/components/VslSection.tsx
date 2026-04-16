"use client";
import React from "react";
import { motion } from "framer-motion";

export default function VslSection() {
  return (
    <section className="py-16 md:py-20 relative flex flex-col items-center justify-center z-10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--accent)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card-bg)] mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></div>
            <span className="text-sm font-semibold tracking-wider text-[var(--foreground)] uppercase font-mono">Your Growth Breakdown</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            The Growth Split: <span className="gradient-text italic">60% Digital Foundation, 40% Outbound Marketing&nbsp;</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 lg:gap-4 max-w-5xl mx-auto mt-10 w-full px-2">
            {[
              "Digital Foundation",
              "Topical Authority",
              "Promotion",
              "Lead Gen",
              "Management"
            ].map((item, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="flex flex-row items-center gap-2 lg:gap-3 group cursor-default">
                  <span className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/10 bg-[#0b0b0e]/80 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 font-mono group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] group-hover:shadow-[0_0_15px_rgba(155,255,110,0.15)] transition-all duration-300 shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="text-sm lg:text-[15px] font-semibold text-gray-400 whitespace-nowrap group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
                
                {/* Desktop Right Arrow */}
                {idx !== arr.length - 1 && (
                  <div className="hidden md:flex items-center text-white/20 shrink-0">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                
                {/* Mobile Down Arrow */}
                {idx !== arr.length - 1 && (
                  <div className="md:hidden flex items-center text-white/20 py-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Thick Glass Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative max-w-4xl mx-auto rounded-3xl p-4 md:p-6 xl:p-8 bg-white/[0.02] backdrop-blur-md border border-[rgba(255,255,255,0.08)] shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_60px_rgba(155,255,110,0.1)] hover:scale-[1.02] transform transition-transform duration-700"
        >
          
          <div className="rounded-xl overflow-hidden relative shadow-2xl border border-[rgba(255,255,255,0.05)] bg-[#060608]">
            {/* macOS Style Browser Header */}
            <div className="w-full h-10 bg-[rgba(255,255,255,0.04)] border-b border-[rgba(255,255,255,0.05)] flex items-center px-4 z-20 pointer-events-none">
              <div className="flex gap-[6px]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50"></div>
              </div>
              
              {/* Fake URL Bar */}
              <div className="absolute left-1/2 -translate-x-1/2 bg-black/40 rounded-md px-4 py-[3px] flex items-center justify-center border border-white/5 opacity-80">
                <span className="text-[0.65rem] font-mono text-[var(--muted)] tracking-wider">ablyart.com/breakdown</span>
              </div>
            </div>

            {/* The Video embed */}
            <div className="w-full aspect-video relative bg-black">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/L2c9LGyxkeI?rel=0&modestbranding=1" 
                title="Ablyart Video Sales Letter" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center w-full z-20 relative flex flex-col items-center"
        >
          <div className="max-w-4xl mx-auto mb-10 w-full relative">
            <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 h-1/2 bg-[var(--accent)] opacity-[0.03] blur-2xl rounded-full"></div>
            <p className="text-xl md:text-[22px] font-medium leading-relaxed text-gray-400 text-center tracking-tight relative z-10">
              It's a <span className="text-white font-bold px-1">holistic approach.</span> We ensure your 
              <span className="text-[var(--accent)] font-semibold mx-1">unified visibility</span>, build 
              <span className="text-white font-semibold mx-1">brand authority</span>, generate 
              <span className="text-white font-semibold mx-1">leads</span>, help 
              <span className="text-white font-semibold mx-1">conversion</span> 
              thus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9bff6e] to-[#6ee7ff] font-black tracking-normal ml-1">scale your business by 1000%</span>
            </p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new Event("openAuditPotentialModal"))}
            className="btn-glow inline-flex items-center justify-center font-bold"
            style={{
              padding: "18px 40px",
              fontSize: "1.125rem",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Know how it works →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
