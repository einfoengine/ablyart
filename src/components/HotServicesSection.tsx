"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Social Media Marketing",
    description: "Dominating organic reach. We architect viral content and hyper-engaged communities across every native platform.",
    color: "#b09eff", // Purple
    icon: (
     <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
     </svg>
    )
  },
  {
    title: "Inbound Web Marketing",
    description: "Building content monopolies. We leverage deep technical SEO and search intent to attract high-value leads entirely on autopilot.",
    color: "#50d5ff", // Blue
    icon: (
     <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
     </svg>
    )
  },
  {
    title: "Paid Performance Marketing",
    description: "Ruthless algorithmic ROI scaling. We stop funding vanity metrics and maximize closed conversions via Meta, TikTok, and Google APIs.",
    color: "#9bff6e", // Lime
    icon: (
     <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
     </svg>
    )
  }
];

import { Button } from "@/components/ui/Button";

// ...

export default function HotServicesSection() {
  return (
    <section className="py-20 md:py-24 bg-[var(--background)] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></div>
            <span className="text-xs md:text-sm font-semibold tracking-wider text-gray-300 uppercase font-mono">Our Hot Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white">
            Specialized For <span className="gradient-text italic">Sustainable Growth.</span>
          </h2>
        </div>

        {/* 3-Column Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#0b0b0e]/80 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[#111115] hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
            >
              {/* Radial Hover Glow (Very Subtle) */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none"
                style={{ backgroundColor: service.color }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div 
                    className="mb-6 inline-flex p-4 rounded-2xl bg-white/[0.03] border border-white/5 shadow-inner transition-colors duration-300 group-hover:bg-white/[0.05]"
                    style={{ color: service.color }}
                  >
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-[1.05rem]">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="primary" size="lg" href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
              Discuss for premium support →
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
