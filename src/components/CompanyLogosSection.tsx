"use client";

import { motion } from "framer-motion";

const placeholderLogos = [
  // Using simple tech-sounding names as typography logos for now
  { name: "Quantum", weight: "font-black tracking-tighter" },
  { name: "NEXUS", weight: "font-bold tracking-widest uppercase" },
  { name: "AeroStack", weight: "font-medium italic" },
  { name: "Vertex", weight: "font-extrabold tracking-tight" },
  { name: "Omni.ai", weight: "font-mono font-bold" },
  { name: "Synapse", weight: "font-bold" },
  { name: "Hyperion", weight: "font-light tracking-widest uppercase" }
];

export default function CompanyLogosSection({ id }: { id?: string }) {
  // Duplicate array to achieve seamless infinite scroll
  const duplicatedLogos = [...placeholderLogos, ...placeholderLogos];

  return (
    <section id={id} className="py-20 md:py-24 bg-[var(--background)] relative overflow-hidden border-y border-white/5">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[var(--accent)] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <p className="text-sm md:text-base font-semibold tracking-widest text-gray-500 uppercase">
          Trusted by high-growth SaaS, E-Com, and B2B leaders
        </p>
      </div>

      {/* Infinite Scroll Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Wrapper */}
        <div 
          className="flex w-fit items-center"
          style={{
            animation: "marquee 40s linear infinite",
          }}
        >
          {/* We define the marquee keyframes dynamically in a style tag for portability */}
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .hover-pause:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="flex items-center hover-pause">
            {duplicatedLogos.map((logo, idx) => (
              <div 
                key={idx} 
                className="px-10 md:px-16 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer grayscale hover:grayscale-0"
              >
                {/* Fallback to styled text acting as a modern monochrome logo */}
                <span className={`text-2xl md:text-3xl text-white ${logo.weight}`}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
