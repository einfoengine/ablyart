"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { OFFICIAL_LINKS } from "@/constants/links";
import { CATEGORIES, caseStudies, type CaseStudy, type Category } from "@/data/caseStudies";

const cardVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

function StudyCard({ study, featured = false }: { study: CaseStudy; featured?: boolean }) {
  return (
    <motion.article
      variants={cardVariants}
      className={`relative overflow-hidden border border-white/[0.07] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1.5 ${
        featured ? "rounded-[28px] p-8 md:p-12" : "rounded-3xl p-7 md:p-9"
      }`}
      style={{
        boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
      }}
    >
      <div
        className="absolute top-0 right-0 w-[320px] h-[220px] pointer-events-none opacity-70"
        style={{ background: `radial-gradient(ellipse at top right, rgba(${study.rgb},0.12) 0%, transparent 70%)` }}
      />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {featured && (
            <span
              className="px-3 py-1 rounded-full text-[0.7rem] font-black tracking-[0.12em] uppercase border"
              style={{
                color: study.color,
                background: `rgba(${study.rgb},0.12)`,
                borderColor: `rgba(${study.rgb},0.3)`,
              }}
            >
              Featured Case Study
            </span>
          )}
          <span className="text-[0.76rem] text-[rgba(240,240,248,0.42)] font-bold uppercase tracking-[0.08em]">
            {study.category} · {study.duration}
          </span>
        </div>

        <div
          className={`${featured ? "h-[280px]" : "h-[180px]"} rounded-2xl border border-dashed border-white/10 bg-white/[0.02] flex items-center justify-center mb-7`}
        >
          <span className="text-[rgba(255,255,255,0.22)] text-xs md:text-sm font-bold tracking-[0.16em] uppercase">
            Recommended Proof Asset
          </span>
        </div>

        <div className={featured ? "grid lg:grid-cols-[1fr_0.9fr] gap-10" : "flex flex-col h-full"}>
          <div>
            <h3 className={`${featured ? "text-3xl md:text-4xl" : "text-2xl"} font-black tracking-[-0.04em] leading-tight text-white mb-4`}>
              {study.client}
            </h3>
            <p className="font-bold leading-relaxed mb-5" style={{ color: study.color }}>
              {study.tagline}
            </p>
            <p className="text-[rgba(240,240,248,0.52)] text-sm md:text-[0.95rem] leading-[1.8] mb-7">
              {study.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {study.services.map((service) => (
                <span key={service} className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[rgba(240,240,248,0.58)] text-xs font-bold">
                  {service}
                </span>
              ))}
            </div>
            <Link
              href={`/case-studies/${study.id}`}
              className="btn-outline inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full no-underline text-sm font-bold"
            >
              View Case Study
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className={`grid ${featured ? "grid-cols-1 sm:grid-cols-3 lg:grid-cols-1" : "grid-cols-1"} gap-3 mt-7 ${featured ? "lg:mt-0" : ""}`}>
            {study.results.map((result) => (
              <div
                key={result.label}
                className="rounded-2xl border p-5"
                style={{
                  background: `rgba(${study.rgb},0.06)`,
                  borderColor: `rgba(${study.rgb},0.15)`,
                }}
              >
                <div className="text-2xl md:text-3xl font-black tracking-[-0.03em] leading-none mb-2" style={{ color: study.color }}>
                  {result.value}
                </div>
                {result.delta && <div className="text-[0.7rem] font-bold mb-2" style={{ color: study.color }}>{result.delta}</div>}
                <div className="text-xs text-[rgba(240,240,248,0.45)] font-semibold">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function WorkPageClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const visibleStudies = activeCategory === "All" ? caseStudies : caseStudies.filter((study) => study.category === activeCategory);
  const featuredStudies = visibleStudies.filter((study) => study.featured);
  const regularStudies = visibleStudies.filter((study) => !study.featured);

  const stats = [
    { value: "Search", label: "SEO, GEO & AEO proof work" },
    { value: "Social", label: "Content and trust-building examples" },
    { value: "Media", label: "Paid traffic and campaign planning" },
    { value: "Leads", label: "Lead path and prospecting systems" },
  ];

  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <section className="relative overflow-hidden pt-[140px] pb-24 px-6">
        <div className="hero-blob-1" style={{ opacity: 0.55 }} />
        <div className="hero-blob-2" style={{ opacity: 0.4 }} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(155,255,110,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(155,255,110,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-[900px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex justify-center mb-7">
              <span className="tag-pill">
                <span className="glow-dot" />
                Founder-Backed Work
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-black tracking-[-0.04em] leading-[1.05] text-[#f0f0f8] mb-7"
          >
            Previous Work. <span className="gradient-text">Clear Proof Points.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(1rem,2.5vw,1.2rem)] text-[rgba(240,240,248,0.52)] leading-[1.75] max-w-[700px] mx-auto mb-12"
          >
            These case studies are based on founder-reported previous work and execution experience behind AblyArt, with no invented client names, screenshots, or unprovided performance metrics.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] max-w-[760px] mx-auto bg-white/[0.05] border border-white/[0.07] rounded-[22px] overflow-hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-[#060608]/60 text-center px-4 py-6">
                <div className="text-2xl font-black tracking-[-0.03em] text-[var(--accent)] mb-2">{stat.value}</div>
                <div className="text-[0.68rem] text-[rgba(240,240,248,0.42)] font-bold uppercase tracking-[0.08em] leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="rounded-full px-5 py-2.5 text-sm font-bold tracking-[0.02em] transition-all"
                style={{
                  border: isActive ? "1px solid rgba(155,255,110,0.5)" : "1px solid rgba(255,255,255,0.08)",
                  background: isActive ? "rgba(155,255,110,0.12)" : "rgba(255,255,255,0.03)",
                  color: isActive ? "var(--accent)" : "rgba(240,240,248,0.55)",
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial="hidden" animate="show" exit={{ opacity: 0, transition: { duration: 0.2 } }} className="space-y-5">
            {featuredStudies.map((study) => (
              <StudyCard key={study.id} study={study} featured />
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {regularStudies.map((study) => (
                <StudyCard key={study.id} study={study} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <div className="divider" />
      </div>

      <section className="w-full px-4 md:px-10 pb-32 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto relative rounded-[40px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(155,255,110,0.12) 0%, rgba(110,231,255,0.08) 100%)",
            border: "1px solid rgba(155,255,110,0.2)",
            padding: "80px 48px",
          }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(155,255,110,0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div className="relative z-10 text-center">
            <span className="tag-pill mb-6 inline-flex">Ready to clarify your growth path?</span>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-black tracking-[-0.04em] leading-[1.1] mb-5">
              Let&apos;s Find Your <span className="gradient-text">Growth Bottleneck</span>
            </h2>
            <p className="text-[rgba(240,240,248,0.55)] text-[1.05rem] max-w-[520px] mx-auto mb-10 leading-[1.75]">
              Book a discovery call and we&apos;ll review where search, social, media buying, or lead generation can create the clearest next move.
            </p>
            <a
              href={OFFICIAL_LINKS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 no-underline px-9 py-4 text-base font-bold"
            >
              Book a Discovery Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
