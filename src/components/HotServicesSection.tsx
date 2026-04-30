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

        {/* Connected flex cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="w-full flex flex-col lg:flex-row mb-10"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative flex flex-col gap-5 p-7 border border-gray-200 bg-white text-gray-900 transition-colors duration-300 cursor-default w-full lg:flex-1 lg:-ml-px first:lg:ml-0 first:rounded-t-2xl first:lg:rounded-l-2xl first:lg:rounded-tr-none last:rounded-b-2xl last:lg:rounded-r-2xl last:lg:rounded-bl-none hover:bg-gray-50 shadow-sm"
            >
              {/* Number — subtle label top-right */}
              <div className="flex items-start justify-between w-full">
                {/* Icon — dark, left-aligned */}
                <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-700 transition-all duration-300">
                  {service.icon}
                </div>
                <span className="text-[10px] font-mono font-medium text-gray-300 tracking-[0.2em] uppercase select-none">
                  {service.number}
                </span>
              </div>

              {/* Text */}
              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-base md:text-[1.05rem] font-extrabold text-gray-900 tracking-tight mb-1.5 leading-snug">
                  {service.label}
                </h3>
                <p className="text-gray-500 font-medium text-xs mb-3 italic">
                  {service.tagline}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gray-800 transition-all duration-500" />
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
