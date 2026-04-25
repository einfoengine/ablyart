"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "@/components/ui/Button";


import { FaFire, FaSearch, FaFilter, FaChartLine } from "react-icons/fa";

const services = [
  {
    category: "Drive Potential Traffic",
    title: "Bring the Right Audience to Your Platforms.",
    description: "We utilize smart, multi-channel targeting to bring high-quality, product-aware visitors straight to your website and social media platforms, ensuring you reach people ready to engage.",
    icon: <FaFire size={28} />
  },
  {
    category: "Optimize Conversion Rates",
    title: "Turn Casual Visitors into Confident Buyers.",
    description: "Traffic is useless without action. We re-engineer your user experience, refine your messaging, and optimize your sales funnels to significantly increase the percentage of visitors who complete a purchase.",
    icon: <FaFilter size={28} />
  },
  {
    category: "Increase Purchase Frequency",
    title: "Drive Repeat Sales via Precision Paid Ads.",
    description: "We deploy highly optimized remarketing campaigns across ad platforms to keep your brand top-of-mind, encouraging past buyers to return and purchase from you more frequently.",
    icon: <FaChartLine size={28} />
  },
  {
    category: "Full Audit & Digital Strategy",
    title: "Your Blueprint for Scalable Ecosystem Growth.",
    description: "We perform a deep-dive audit of your digital presence to find bottlenecks and leaks. Then, we provide a customized, step-by-step marketing strategy mathematically built to scale.",
    icon: <FaSearch size={28} />
  }
];


export default function HotServicesSection() {
  return (
    <section className="py-20 md:py-24 bg-[var(--background)] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <SectionHeader
          badge="What are we doing?"
          titleBase="Influencing Your Leads - "
          titleHighlight="&nbsp;& Nurturing Interest to Conversion."
          subtitle="Four actionable systems. One clear outcome: Predictable Growth."
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
