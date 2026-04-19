"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "@/components/ui/Button";


import { FaFire, FaSearch, FaFilter, FaChartLine } from "react-icons/fa";

const services = [
  {
    category: "Dominate Social Media",
    title: "Become the Brand Everyone's Talking About.",
    description: "End-to-end social presence: compelling content creation, posting, community engagement, growth optimization. Result? A brand people recognize, trust, and buy from.",
    icon: <FaFire size={28} />
  },
  {
    category: "Own the Search Engines",
    title: "Be There When They're Ready to Buy.",
    description: "Full-stack SEO: technical audits, keyword strategy, content creation, link building. Result? Your business ranking where buyers are already searching — bringing in traffic without paying for every click.",
    icon: <FaSearch size={28} />
  },
  {
    category: "We Knock. They Answer.",
    title: "Precision Outreach. Real Conversations. Closed Deals.",
    description: "Precision outbound: Apollo prospecting, hyper-targeted lists, personalized cold email sequences at scale. Result? Real sales conversations with decision-makers who are ready to buy.",
    icon: <FaFilter size={28} />
  },
  {
    category: "Go Massive With Ads",
    title: "Multiply Your Revenue.",
    description: "Performance advertising across Meta, TikTok, and Google: strategy, creatives, targeting, optimization. Result? More revenue from every dollar spent — zero wasted on vanity metrics.",
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
            >
              <div 
                className="relative w-full h-full bg-white border border-gray-200 rounded-[2rem] p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left shadow-xl group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-[600ms]"
              >
                  <div className="flex-shrink-0 w-16 h-16 bg-[var(--accent)] text-[#060608] flex items-center justify-center rounded-[1rem] border-[3px] border-white shadow-[0_6px_0_rgba(0,0,0,0.15)] transform -rotate-[6deg] relative z-10 sm:mt-1 ml-1 group-hover:scale-105 group-hover:rotate-[3deg] transition-all duration-[600ms]">
                    {service.icon}
                  </div>
                  
                  <div className="flex flex-col flex-1 relative w-full pt-1">
                    {/* Sliding Content Container */}
                    <div className="grid w-full relative">
                      {/* CATEGORY & TITLE (Slides out up) */}
                      <div className="col-start-1 row-start-1 w-full flex flex-col transition-all duration-[600ms] transform translate-y-0 opacity-100 group-hover:-translate-y-4 group-hover:opacity-0 relative z-10 pointer-events-auto group-hover:pointer-events-none">
                        <h3 className="text-xl md:text-[1.4rem] font-bold text-gray-900 tracking-tight leading-snug mb-2 capitalize">
                          {service.category}
                        </h3>
                        <p className="font-semibold italic leading-snug text-gray-500 text-[1.1rem]">
                          "{service.title}"
                        </p>
                      </div>

                      {/* DESCRIPTION (Slides in up) */}
                      <div className="col-start-1 row-start-1 w-full transition-all duration-[600ms] transform translate-y-4 opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto relative z-20">
                        <p className="text-gray-600 font-medium text-[0.95rem] md:text-[1.05rem] leading-relaxed">
                          {service.description}
                        </p>
                      </div>
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
