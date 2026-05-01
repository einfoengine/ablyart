"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const services = [
  {
    label: "SEO, AEO & GEO",
    tagline: "Be Found Everywhere — Search, AI & Maps.",
    description:
      "We dominate every discovery layer: traditional search rankings, AI-powered answer engines, and local map packs — so your brand is the first answer, every time a buyer is looking.",
    icon: <FaSearch size={20} />,
  },
  {
    label: "Social Media Management",
    tagline: "Build an Audience That Buys.",
    description:
      "Consistent, on-brand content across every platform that transforms passive scrollers into engaged followers and loyal customers — without you lifting a finger.",
    icon: <FaBullhorn size={20} />,
  },
  {
    label: "Media Buying",
    tagline: "Put Your Budget Where the Revenue Is.",
    description:
      "Precision-targeted paid campaigns on Meta, Google, and TikTok engineered for maximum ROAS. Every dollar is tracked, every audience is tested, and every creative is optimised.",
    icon: <FaChartLine size={20} />,
  },
  {
    label: "Lead Generation",
    tagline: "Fill Your Pipeline with Ready-to-Buy Prospects.",
    description:
      "From cold outreach and lead magnets to retargeting sequences and CRM automation — we build the full system that turns strangers into warm, qualified leads on autopilot.",
    icon: <FaFilter size={20} />,
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
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isClicking = useRef(false);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  // Robust Scroll Spy for Accordion
  useEffect(() => {
    const handleScroll = () => {
      if (isClicking.current) return;

      const viewportCenter = window.innerHeight / 2;
      let closestIndex = activeIndex;
      let minDistance = Infinity;

      itemRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          // Calculate distance from the top of the accordion item to the viewport center
          const distance = Math.abs(rect.top + 60 - viewportCenter); 
          
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = idx;
          }
        }
      });

      // Only change if the closest item is reasonably close to the center
      if (closestIndex !== activeIndex && minDistance < window.innerHeight * 0.4) {
        setActiveIndex(closestIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  const handleItemClick = (idx: number) => {
    setActiveIndex(idx);
    isClicking.current = true;
    
    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    
    // Pause scroll-spy for 1 second to allow smooth open/close animation
    clickTimeout.current = setTimeout(() => {
      isClicking.current = false;
    }, 1000);
  };

  return (
    <section
      id={id}
      className="py-24 md:py-32 bg-[var(--background)] relative z-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          badge="Our Actionable Systems"
          titleBase="Attracting Your Leads From"
          titleHighlight="&nbsp; Interest to Conversion."
          subtitle="Watch how we turn your digital presence into a customer-generating machine."
          alignment="center"
        />

        {/* Accordion Container */}
        <div className="mt-20 max-w-4xl mx-auto flex flex-col gap-4">
          {services.map((service, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ease-[0.22, 1, 0.36, 1] ${
                  isOpen
                    ? "bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-transparent"
                    : "bg-white/[0.03] border border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => handleItemClick(idx)}
                  className="w-full text-left px-6 md:px-10 py-8 flex items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 ${
                        isOpen
                          ? "bg-[var(--accent)] text-black"
                          : "bg-white/5 text-white/40"
                      }`}
                    >
                      {service.icon}
                    </div>
                    
                    <h3
                      className={`text-xl md:text-3xl font-bold tracking-tight transition-all duration-500 ${
                        isOpen ? "text-gray-900" : "text-white/70"
                      }`}
                    >
                      {service.label}
                    </h3>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${
                      isOpen ? "bg-gray-100 text-gray-500" : "bg-white/5 text-white/40 group-hover:bg-white/10"
                    }`}
                  >
                    {isOpen ? <FaMinus size={16} /> : <FaPlus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 md:px-10 pb-10 pt-0 md:ml-[72px]">
                        <div className="max-w-2xl">
                          <p className="text-[11px] uppercase font-bold tracking-widest text-gray-500 mb-3">
                            {service.tagline}
                          </p>
                          <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Benefits Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 flex flex-wrap items-center justify-center gap-4 lg:gap-8 mb-16"
        >
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 rounded-3xl hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5 transition-all duration-500 group/benefit cursor-default"
            >
              <div className="w-10 h-10 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] group-hover/benefit:scale-110 transition-transform duration-300">
                {b.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white mb-0.5">
                  {b.label}
                </span>
                <span className="text-xs text-gray-400 font-medium tracking-tight whitespace-nowrap">
                  {b.detail}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className="flex justify-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 text-lg font-bold shadow-2xl"
            >
              Discuss for premium support →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
