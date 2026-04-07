"use client";
import React from "react";

export default function VslSection() {
  return (
    <section className="pt-10 pb-20 relative flex flex-col items-center justify-center z-10">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--accent)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-12 fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card-bg)] mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></div>
            <span className="text-sm font-semibold tracking-wider text-[var(--foreground)] uppercase font-mono">Watch The Breakdown</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Good Online Presens & Growth Optimization <span className="gradient-text italic">Attracts Leads & Conversions by 600%, rest 400% highly depends on outbound performance</span>
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
            This involves the digital foundation, topical authority, promotion, lead generation & management.
          </p>
        </div>

        {/* Thick Glass Container */}
        <div className="relative max-w-4xl mx-auto rounded-3xl p-4 md:p-6 xl:p-8 bg-white/[0.02] backdrop-blur-md border border-[rgba(255,255,255,0.08)] shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_60px_rgba(155,255,110,0.1)] transform transition-transform duration-700 hover:scale-[1.02] fade-in-up" style={{ animationDelay: "0.4s" }}>
          
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
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center w-full z-20 relative fade-in-up flex flex-col items-center" style={{ animationDelay: "0.6s" }}>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto mb-6">Its a holistic approach, ensure your unified visibility, build brand authority, generate leads, help conversion thus scale your business.</p>
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
            Audit your potential for free
          </a>
        </div>
      </div>
    </section>
  );
}
