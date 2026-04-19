"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "@/components/ui/Button";


import { FaFire, FaSearch, FaFilter, FaChartLine } from "react-icons/fa";

const services = [
  {
    category: "Dominate social media",
    title: "Become the Brand Everyone's Talking About.",
    description: "Dominating organic reach. We architect viral content and hyper-engaged communities across every native platform.",
    icon: <FaFire size={28} />
  },
  {
    category: "Own the search engines",
    title: "Be There When They're Ready to Buy.",
    description: "Building content monopolies. We leverage deep technical SEO and search intent to attract high-value leads entirely on autopilot.",
    icon: <FaSearch size={28} />
  },
  {
    category: "Knock at your leads door",
    title: "Convert them to buyers.",
    description: "High-volume, hyper-qualified B2B & B2C lead systems. We combine tailored funnels with systemic nurturing to transform traffic into closed deals.",
    icon: <FaFilter size={28} />
  },
  {
    category: "Go Massive With Ads.",
    title: "Multiply Your Growth.",
    description: "Ruthless algorithmic ROI scaling. We stop funding vanity metrics and maximize closed conversions via Meta, TikTok, and Google APIs.",
    icon: <FaChartLine size={28} />
  }
];


export default function HotServicesSection() {
  return (
    <section className="py-20 md:py-24 bg-[var(--background)] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <SectionHeader
          badge="Our Hot Services"
          titleBase="Designed For"
          titleHighlight="Sustainable Growth."
          subtitle="Four Systems. One Goal — Your Market Dominance."
          alignment="center"
        />

        {/* 2-Column Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group h-full"
              style={{ perspective: "1500px" }}
            >
              <div 
                className="relative w-full h-full rounded-[2rem] transition-transform duration-[700ms] shadow-xl group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d", display: "grid" }}
              >
                {/* FRONT FACE */}
                <div 
                  className="w-full h-full bg-white border border-gray-200 rounded-[2rem] p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left z-10"
                  style={{ gridArea: "1 / 1", backfaceVisibility: "hidden" }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-[var(--accent)] text-[#060608] flex items-center justify-center rounded-[1rem] border-[3px] border-white shadow-[0_6px_0_rgba(0,0,0,0.15)] transform -rotate-[6deg] relative z-10 sm:mt-1 ml-1 group-hover:scale-105 transition-all duration-300">
                    {service.icon}
                  </div>
                  
                  <div className="flex flex-col flex-1 relative w-full pt-1">
                    <h3 className="text-xl md:text-[1.4rem] font-bold text-gray-900 tracking-tight leading-snug mb-1.5 capitalize">
                      {service.category}
                    </h3>
                    <p className="font-semibold italic leading-snug text-gray-500 text-[1.1rem]">
                      "{service.title}"
                    </p>
                  </div>
                </div>

                {/* BACK FACE */}
                <div 
                  className="w-full h-full bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
                  style={{ 
                    gridArea: "1 / 1", 
                    backfaceVisibility: "hidden", 
                    transform: "rotateY(180deg)" 
                  }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-[#060608] text-[var(--accent)] flex items-center justify-center rounded-[1rem] border-[3px] border-gray-50 shadow-[0_4px_0_rgba(0,0,0,0.1)] transform -rotate-[3deg] sm:mt-1 ml-1">
                    {service.icon}
                  </div>
                  
                  <div className="flex flex-col flex-1 relative w-full pt-1">
                    <p className="text-gray-600 font-medium text-[0.95rem] md:text-[1.05rem] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
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
