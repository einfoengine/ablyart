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
      </div>

      {/* Moving Marquee Ribbon */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex translate-y-1/2 z-20 pointer-events-auto">
        <div className="w-[110%] -ml-[5%] py-4 md:py-5 flex transform rotate-2 bg-[var(--accent)] text-[#060608] shadow-[0_0_40px_rgba(155,255,110,0.3)] border-y border-black/10">
          <div className="flex whitespace-nowrap marquee-track font-black text-sm md:text-lg tracking-widest uppercase items-center opacity-90">
            {[...Array(10)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="mx-6 md:mx-10 whitespace-nowrap">Focus on your core business</span>
                <span className="mx-2 md:mx-4 opacity-40 text-xs text-black">✦</span>
                <span className="mx-6 md:mx-10 whitespace-nowrap">Let us manage your online presence</span>
                <span className="mx-2 md:mx-4 opacity-40 text-xs text-black">✦</span>
                <span className="mx-6 md:mx-10 whitespace-nowrap">Money back guarantee</span>
                <span className="mx-2 md:mx-4 opacity-40 text-xs text-black">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
