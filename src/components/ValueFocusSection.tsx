"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaMagnet, FaBolt, FaSyncAlt } from "react-icons/fa";

const features = [
  {
    title: "Dominate Market Awareness",
    description: "We amplify your brand's presence across every key platform. Break through the noise, capture peak attention, and establish your business as the undeniable industry authority.",
    icon: <FaBullseye size={32} />
  },
  {
    title: "Magnetize High-Intent Leads",
    description: "Stop wasting time on unqualified traffic. We engineer scalable, automated pipelines that consistently attract prospects who are actively looking to buy your exact solution.",
    icon: <FaMagnet size={32} />
  },
  {
    title: "Engineer Rapid Conversions",
    description: "Turn curious clicks into paying customers. We deploy high-converting funnels and irresistible messaging designed to maximize your profit and close deals seamlessly.",
    icon: <FaBolt size={32} />
  },
  {
    title: "Cultivate Lifetime Loyalty",
    description: "The real profit is in repeat business. We implement powerful backend strategies to maximize customer lifetime value, increase retention, and turn buyers into passionate advocates.",
    icon: <FaSyncAlt size={32} />
  }
];

export default function ValueFocusSection() {
  return (
    <div className="w-full z-10 relative flex flex-col items-center">
      {/* WHITE CARD AREA */}
      <div className="w-full px-4 md:px-[40px] pt-10 relative z-20">
        <section className="bg-white rounded-[40px] pt-24 pb-24 md:pt-32 relative flex flex-col items-center justify-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          
          {/* White background specific ambient glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* Section Header */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="text-center mb-20"
            >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6 shadow-sm">
                 <div className="w-2 h-2 rounded-full bg-[var(--accent-dim)] animate-pulse"></div>
                 <span className="text-sm font-semibold tracking-wider text-gray-900 uppercase font-mono">Proven Growth Method</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-black">
                 This Is How We Drive <span className="relative z-10 whitespace-nowrap"><span className="absolute inset-x-0 bottom-2 top-auto h-4 bg-[var(--accent)] -z-10 opacity-70"></span><span className="italic">Results</span></span>
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed inline-block font-medium">
                 We don't just run ads. We build a comprehensive growth ecosystem designed to scale your business predictably and profitably.
               </p>
            </motion.div>

            {/* 4 Boxes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  
                  className="bg-[#0b0b0e] rounded-3xl flex flex-col items-center text-center relative overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 border border-[rgba(255,255,255,0.05)] hover:border-[var(--accent)] shadow-[0_20px_40px_rgba(0,0,0,0.2)] p-8"
                >
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-[#060608] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[var(--accent)] mb-8 shadow-sm group-hover:bg-[var(--accent-subtle)] group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="mt-16 text-center relative z-10 flex flex-col items-center"
            >
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
            </motion.div>
          </div>
        </section>
      </div>

      {/* DARK BACKGROUND AREA (Continues under white box seamlessly) */}
      <div className="w-full relative flex flex-col items-center pt-24 pb-[120px] md:pb-[140px] z-10">
        {/* Client Logos */}
        <div className="w-full relative flex flex-col items-center">
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
                className="text-xl md:text-3xl font-black text-neutral-400 uppercase tracking-tighter hover:text-[var(--foreground)] hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{
                   opacity: idx % 3 === 0 ? 0.7 : 1,
                   fontSize: idx % 5 === 0 ? "1.5em" : "1em"
                }}
              >
                {logo}
              </span>
            ))}
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
      </div>
    </div>
  );
}
