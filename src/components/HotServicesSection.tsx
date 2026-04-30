"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  FaSearch,
  FaBullhorn,
  FaChartLine,
  FaFilter,
  FaArrowUp,
  FaMousePointer,
  FaRedoAlt,
} from "react-icons/fa";

const services = [
  {
    number: "01",
    label: "SEO, AEO & GEO",
    tagline: "Be Found Everywhere — Search, AI & Maps.",
    description:
      "We dominate every discovery layer: traditional search rankings, AI-powered answer engines, and local map packs — so your brand is the first answer, every time a buyer is looking.",
    icon: <FaSearch size={26} />,
  },
  {
    number: "02",
    label: "Social Media Management",
    tagline: "Build an Audience That Buys.",
    description:
      "Consistent, on-brand content across every platform that transforms passive scrollers into engaged followers and loyal customers — without you lifting a finger.",
    icon: <FaBullhorn size={26} />,
  },
  {
    number: "03",
    label: "Media Buying",
    tagline: "Put Your Budget Where the Revenue Is.",
    description:
      "Precision-targeted paid campaigns on Meta, Google, and TikTok engineered for maximum ROAS. Every dollar is tracked, every audience is tested, and every creative is optimised.",
    icon: <FaChartLine size={26} />,
  },
  {
    number: "04",
    label: "Lead Generation",
    tagline: "Fill Your Pipeline with Ready-to-Buy Prospects.",
    description:
      "From cold outreach and lead magnets to retargeting sequences and CRM automation — we build the full system that turns strangers into warm, qualified leads on autopilot.",
    icon: <FaFilter size={26} />,
  },
];

const benefits = [
  {
    icon: <FaArrowUp size={14} />,
    label: "Increase Traffic",
    detail: "More qualified visitors from every channel.",
  },
  {
    icon: <FaMousePointer size={14} />,
    label: "Boost Conversions",
    detail: "Turn more visitors into paying customers.",
  },
  {
    icon: <FaRedoAlt size={14} />,
    label: "Purchase Frequency",
    detail: "Keep buyers coming back for more.",
  },
];

export default function HotServicesSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="py-20 md:py-28 bg-[var(--background)] relative z-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <SectionHeader
          badge="This is how we help you"
          titleBase="Attracting Your Leads From"
          titleHighlight="&nbsp; Interest to Conversion."
          subtitle="Four actionable systems. One clear outcome: Predictable Growth."
          alignment="center"
        />

        {/* Full-width gapless bordered service boxes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="w-full border border-white/10 rounded-2xl overflow-hidden mb-10"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, x: -24 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className={`group relative flex flex-col sm:flex-row items-start gap-6 px-8 py-8 md:px-12 md:py-10 bg-transparent hover:bg-white/[0.03] transition-colors duration-300 cursor-default${
                idx < services.length - 1 ? " border-b border-white/10" : ""
              }`}
            >
              {/* Number */}
              <span className="shrink-0 text-[0.7rem] font-mono font-bold text-[var(--accent)] tracking-widest opacity-60 pt-1 w-6">
                {service.number}
              </span>

              {/* Icon bubble */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/20 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-white tracking-tight mb-1">
                  {service.label}
                </h3>
                <p className="text-[var(--accent)] font-semibold text-sm mb-3 italic">
                  {service.tagline}
                </p>
                <p className="text-gray-400 text-sm md:text-[0.95rem] leading-relaxed max-w-2xl">
                  {service.description}
                </p>
              </div>

              {/* Hover right arrow */}
              <div className="shrink-0 self-center ml-auto pl-4 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[var(--accent)]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10h12M12 6l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefit bullets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mb-14"
        >
          {benefits.map((b, idx) => (
            <div key={idx} className="flex items-center gap-0">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/[0.03] border border-white/10 rounded-full hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5 transition-all duration-300 group/benefit">
                <span className="w-6 h-6 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/30 flex items-center justify-center text-[var(--accent)] group-hover/benefit:bg-[var(--accent)]/25 transition-colors duration-300">
                  {b.icon}
                </span>
                <span className="text-sm font-bold text-white">{b.label}</span>
                <span className="hidden md:inline text-xs text-gray-500 font-medium">
                  — {b.detail}
                </span>
              </div>
              {idx < benefits.length - 1 && (
                <span className="hidden sm:block w-8 h-px bg-white/10 mx-1" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss for premium support →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
