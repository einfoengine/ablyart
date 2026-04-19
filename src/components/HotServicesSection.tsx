"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";


const services = [
  {
    title: "Social Media Marketing",
    description: "Dominating organic reach. We architect viral content and hyper-engaged communities across every native platform.",
    color: "#b09eff", // Purple
    iconColor: "#6d28d9", // violet-700
    iconBg: "#ede9fe", // violet-100
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
    iconColor: "#0284c7", // sky-600
    iconBg: "#e0f2fe", // sky-100
    icon: (
     <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
     </svg>
    )
  },
  {
    title: "Lead Generation Engine",
    description: "High-volume, hyper-qualified B2B & B2C lead systems. We combine tailored funnels with systemic nurturing to transform traffic into closed deals.",
    color: "#9bff6e", // Lime
    iconColor: "#15803d", // green-700
    iconBg: "#dcfce7", // green-100
    icon: (
     <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
     </svg>
    )
  },
  {
    title: "Paid Performance Marketing",
    description: "Ruthless algorithmic ROI scaling. We stop funding vanity metrics and maximize closed conversions via Meta, TikTok, and Google APIs.",
    color: "#ff5078", // Pink
    iconColor: "#e11d48", // rose-600
    iconBg: "#ffe4e6", // rose-100
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
        <SectionHeader
          badge="Our Hot Services"
          titleBase="Designed For"
          titleHighlight="Sustainable Growth."
          alignment="center"
        />

        {/* 2-Column Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Radial Hover Glow (Very Subtle) */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-[0.15] pointer-events-none"
                style={{ backgroundColor: service.color }}
              />

              <div className="relative z-10 flex flex-col sm:flex-row gap-6 h-full items-start">
                <div 
                  className="flex-shrink-0 inline-flex p-4 rounded-2xl shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
                  style={{ color: service.iconColor, backgroundColor: service.iconBg }}
                >
                  {service.icon}
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-[1.05rem] font-medium">
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
