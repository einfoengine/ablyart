"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export type AgitationCardProps = {
  service: string;
  title: string;
  pain: string;
  accent: string;
  textAccent: string;
};

const defaultAgitations: AgitationCardProps[] = [
  {
    service: "Web & Social Media Management",
    title: "Bleeding Credibility",
    pain: "Every day your website looks outdated and your social feeds remain completely silent, you are instantly losing trust. Modern buyers audit your digital footprint before they ever reach out. If you look dead online, they assume your business is too.",
    accent: "rgba(255, 80, 80, 0.2)",
    textAccent: "#ff5050"
  },
  {
    service: "Search Engine Optimization",
    title: "Invisible When It Matters",
    pain: "Your ideal customers are actively typing their problems into Google right now. If you aren't on page one, you simply don't exist. You are literally handing high-intent buyers directly to your competitors — along with every dollar they were about to spend with you.",
    accent: "rgba(255, 120, 80, 0.2)",
    textAccent: "#ff7850"
  },
  {
    service: "Web Design & Development",
    title: "Drowning in Poor UX",
    pain: "A generic template simply doesn't convert anymore. While your competitors are capturing leads with custom, highly optimized web experiences, your visitors are bouncing in milliseconds due to poor UX and slow load times. Trust is currency — and right now, you're losing it.",
    accent: "rgba(255, 179, 71, 0.2)",
    textAccent: "#ffb347"
  },
  {
    service: "Lead Generation",
    title: "Burning Your Ad Budget",
    pain: "Driving traffic without a conversion system is pouring water into a broken bucket. Every unqualified click is a real dollar wasted. Without a lead capture system, your ad budget isn't marketing — it's a donation to Meta and Google.",
    accent: "rgba(255, 80, 120, 0.2)",
    textAccent: "#ff5078"
  }
];

export type AgitationSectionProps = {
  id?: string;
  badge?: string;
  titleBase?: string;
  titleHighlight?: string;
  subtitle?: string;
  customAgitations?: AgitationCardProps[];
};

export default function AgitationSection({
  id,
  badge = "The Cost of Inaction",
  titleBase = "What You Lose When You",
  titleHighlight = "Stand Still",
  subtitle = "Every day you delay optimizing your online presence is measurable lost revenue. Here is exactly what is happening to your bottom line right now.",
  customAgitations = defaultAgitations
}: AgitationSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 relative flex flex-col items-center justify-center bg-[var(--background)] overflow-hidden">
      {/* Background warning ambients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Section Header */}
        <SectionHeader
          badge={badge}
          titleBase={titleBase}
          titleHighlight={titleHighlight}
          subtitle={subtitle}
          alignment="center"
          colorScheme="danger"
        />

        {/* Agitation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {customAgitations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0e0e11] rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden group hover:border-red-500/30 transition-colors duration-500"
            >
              {/* Subtle warning glow */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundColor: item.textAccent }}
              />

              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-[0.15em] mb-3 block" style={{ color: item.textAccent }}>
                  Without {item.service}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-black mb-5 text-[#f0f0f8] tracking-tight">
                  {item.title}
                </h3>
                
                <div style={{ height: "1px", background: `linear-gradient(90deg, ${item.accent}, transparent)`, width: "100%", marginBottom: "20px" }}></div>
                
                <p className="text-gray-400 leading-relaxed text-[0.95rem] md:text-base font-medium">
                  {item.pain}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
