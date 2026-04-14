"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Engineers, Not Just Marketers",
    description: "We don't just run ads. We build zero-latency landing pages, custom interactive web apps, and headless e-com architectures to guarantee conversion.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    span: "md:col-span-2",
    color: "#b09eff", // Purple
  },
  {
    title: "True Omnichannel Sync",
    description: "While others isolate Google and Meta, our server-side API tagging seamlessly unifies your audience across every digital network.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    span: "md:col-span-1",
    color: "#86ea5c", // Primary lime/green
  },
  {
    title: "Transparent Data Logic",
    description: "No black-box reporting spreadsheets. We build custom multi-touch dashboards to map exactly where your ad dollars are landing.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    span: "md:col-span-1",
    color: "#ff8450", // Orange
  },
  {
    title: "Ruthless A/B Iteration",
    description: "We constantly engineer viral hooks, rewrite scripts, and run dynamic creative optimizations to beat ad fatigue daily.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    span: "md:col-span-2",
    color: "#50d5ff", // Blue
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[var(--background)]">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 -left-[10%] w-[500px] h-[500px] bg-[#86ea5c] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 -right-[10%] w-[500px] h-[500px] bg-[#b09eff] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <div className="inline-flex mb-6">
            <span className="tag-pill">Why Choose Ablyart</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter leading-[1.05] mb-6 text-[#f0f0f8]">
            We operate like a <span className="gradient-text italic">tech company.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Most agencies guess with templates. We leverage hard engineering, behavioral science, and unyielding data attribution to dominate markets.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#0b0b0e]/80 backdrop-blur-sm p-8 md:p-12 transition-all hover:bg-[#111116] hover:border-white/10 ${reason.span}`}
            >
              {/* Card Glow FX */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-10 transition-opacity duration-500 group-hover:opacity-30 pointer-events-none"
                style={{ backgroundColor: reason.color }}
              />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div 
                    className="mb-8 inline-flex p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                    style={{ color: reason.color }}
                  >
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-[1.05rem] text-gray-400 leading-relaxed font-medium">
                    {reason.description}
                  </p>
                </div>

                {/* Subtle decorative bottom border */}
                <div 
                  className="absolute bottom-0 left-0 h-1 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-[2rem]"
                  style={{ background: `linear-gradient(90deg, transparent, ${reason.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
