"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const reasons = [
  {
    title: "Built to Convert",
    description: "Traffic is useless without sales. We optimize your entire funnel—from the first ad click straight to checkout.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "#b09eff",
  },
  {
    title: "Data Over Guesses",
    description: "Every decision is backed by hard data. We scale what works and cut what doesn't, instantly and ruthlessly.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "#86ea5c",
  },
  {
    title: "Engineered for Scaling",
    description: "We build robust technical architectures that handle hyper-growth smoothly without breaking under pressure.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "#50d5ff",
  },
  {
    title: "Absolute Transparency",
    description: "No vanity metrics. You see exactly where every dollar is spent and the precise revenue it generates for you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: "#ff8450",
  }
];

export default function WhyChooseUsSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 md:py-24 relative overflow-hidden bg-[var(--background)]">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--accent)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <SectionHeader
          badge="The Ablyart Advantage"
          titleBase="Why partner with"
          titleHighlight="Ablyart?"
          subtitle="We don't just run ads—we build complete growth engines. Here is what makes our approach fundamentally different."
          alignment="center"
        />

        {/* Vertical List */}
        <div className="flex flex-col gap-4 mt-16 max-w-4xl mx-auto">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b0b0e]/80 backdrop-blur-sm p-6 md:p-8 transition-all hover:bg-[#111116] hover:border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8"
            >
              {/* Card Glow FX */}
              <div 
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[80px] opacity-10 transition-opacity duration-500 group-hover:opacity-30 pointer-events-none"
                style={{ backgroundColor: reason.color }}
              />

              <div 
                className="shrink-0 inline-flex p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                style={{ color: reason.color }}
              >
                {reason.icon}
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-[15px] md:text-base text-gray-400 leading-relaxed font-medium max-w-2xl">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex justify-center relative z-10"
        >
          <Button variant="primary" size="lg" href="https://calendly.com/" target="_blank" rel="noopener noreferrer">
            Let's talk: How may we help you?
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
