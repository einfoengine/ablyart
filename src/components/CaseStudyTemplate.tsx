"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { OFFICIAL_LINKS } from "@/constants/links";

type Metric = {
  label: string;
  value: string;
};

type SnapshotItem = {
  label: string;
  value: string;
};

type DiagnosisBlock = {
  title: string;
  wrong: string;
  impact: string;
  change: string;
};

type StrategyMove = {
  title: string;
  done: string;
  mattered: string;
  helped: string;
};

type TimelinePhase = {
  phase: string;
  title: string;
  description: string;
};

type ComparisonRow = {
  area: string;
  before: string;
  after: string;
};

type ResultItem = {
  result: string;
  businessValue: string;
};

type RelatedCaseStudy = {
  title: string;
  description: string;
  href: string;
};

export type CaseStudyTemplateData = {
  label: string;
  headline: string;
  subheadline: string;
  metrics: Metric[];
  trustPoints: string[];
  snapshot: SnapshotItem[];
  businessProblem: string[];
  diagnosis: DiagnosisBlock[];
  strategy: StrategyMove[];
  timeline: TimelinePhase[];
  beforeAfter: ComparisonRow[];
  results: ResultItem[];
  proofAssets: string[];
  clientQuote: {
    quote: string;
    name: string;
    role: string;
  };
  whyItWorked: string[];
  relatedCaseStudies: RelatedCaseStudy[];
};

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionBand({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative z-10 py-16 md:py-24 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function SmallLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full border border-white/10 bg-white/[0.02] text-gray-300 text-xs md:text-sm font-semibold tracking-wider uppercase font-mono shadow-sm">
      <span className="w-2 h-2 rounded-full animate-pulse bg-[var(--accent)]" />
      {children}
    </span>
  );
}

export default function CaseStudyTemplate({ data }: { data: CaseStudyTemplateData }) {
  return (
    <main style={{ background: "var(--background)", minHeight: "100vh" }}>
      <section className="relative pt-[140px] pb-20 md:pb-28 overflow-hidden">
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

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-8"
          >
            <SmallLabel>{data.label}</SmallLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-[clamp(2.6rem,7vw,5.5rem)] font-black tracking-[-0.04em] leading-[1.05] text-[#f0f0f8] mb-7">
              {data.headline}
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.2rem)] text-[rgba(240,240,248,0.55)] leading-[1.75] max-w-3xl mx-auto mb-10">
              {data.subheadline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href={OFFICIAL_LINKS.calendly} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
                Book a Discovery Call
              </Button>
              <a href="#strategy" className="btn-outline inline-flex items-center justify-center px-10 py-4 text-[1.1rem] font-semibold rounded-full no-underline">
                See the Strategy
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-14 bg-white/5 p-[2px] rounded-3xl overflow-hidden max-w-4xl mx-auto"
          >
            {data.metrics.map((metric) => (
              <div key={metric.label} className="bg-[#0b0b0e]/90 border border-white/5 p-6 text-center">
                <div className="text-2xl md:text-3xl font-black gradient-text tracking-tight mb-2">{metric.value}</div>
                <div className="text-sm text-gray-400 font-semibold leading-relaxed">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 border-y border-white/5 bg-white/[0.015] px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {data.trustPoints.map((point) => (
            <div key={point} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm text-gray-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              {point}
            </div>
          ))}
        </div>
      </section>

      <SectionBand>
        <SectionHeader
          badge="Client Snapshot"
          titleBase="The Starting"
          titleHighlight="Point"
          subtitle="This demo template keeps the business context clear before explaining any tactics."
        />
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.snapshot.map((item) => (
              <div key={item.label} className="glass-card p-6">
                <div className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--accent)] mb-2">{item.label}</div>
                <div className="text-white font-bold leading-relaxed">{item.value}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </SectionBand>

      <SectionBand className="bg-white/[0.01]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          <FadeUp>
            <SmallLabel>Business Problem</SmallLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight">
              Activity was happening. Qualified calls were not.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="glass-card p-8 md:p-10">
            <div className="flex flex-col gap-5">
              {data.businessProblem.map((paragraph) => (
                <p key={paragraph} className="text-gray-400 text-[1.02rem] leading-relaxed font-medium">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeUp>
        </div>
      </SectionBand>

      <SectionBand>
        <SectionHeader
          badge="Diagnosis"
          titleBase="What Was"
          titleHighlight="Holding Growth Back"
          subtitle="Each diagnosis connects the marketing issue to the business cost."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.diagnosis.map((block, index) => (
            <FadeUp key={block.title} delay={index * 0.06}>
              <div className="glass-card p-7 h-full">
                <h3 className="text-xl font-bold text-white mb-5">{block.title}</h3>
                <div className="flex flex-col gap-4 text-sm leading-relaxed">
                  <p className="text-gray-400"><span className="text-[var(--accent)] font-bold">What was wrong: </span>{block.wrong}</p>
                  <p className="text-gray-400"><span className="text-[var(--accent)] font-bold">Why it hurt: </span>{block.impact}</p>
                  <p className="text-gray-400"><span className="text-[var(--accent)] font-bold">What needed to change: </span>{block.change}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </SectionBand>

      <SectionBand id="strategy" className="bg-white/[0.01]">
        <SectionHeader
          badge="Strategy"
          titleBase="The Moves That"
          titleHighlight="Changed The Path"
          subtitle="No random tasks. Each move was tied to lead quality, trust, or booked calls."
        />
        <div className="grid grid-cols-1 gap-4">
          {data.strategy.map((move, index) => (
            <FadeUp key={move.title} delay={index * 0.05}>
              <div className="glass-card p-6 md:p-8 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
                <div>
                  <div className="text-[0.65rem] text-[var(--accent)] font-black tracking-[0.16em] mb-3">0{index + 1}</div>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{move.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm leading-relaxed">
                  <p className="text-gray-400"><span className="text-white font-bold block mb-1">What was done</span>{move.done}</p>
                  <p className="text-gray-400"><span className="text-white font-bold block mb-1">Why it mattered</span>{move.mattered}</p>
                  <p className="text-gray-400"><span className="text-white font-bold block mb-1">How it helped</span>{move.helped}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </SectionBand>

      <SectionBand>
        <SectionHeader
          badge="Execution Timeline"
          titleBase="From Audit"
          titleHighlight="To Lead Quality"
          subtitle="A simple phase plan keeps business owners clear on what changed and when."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.timeline.map((phase, index) => (
            <FadeUp key={phase.phase} delay={index * 0.05}>
              <div className="glass-card p-6 h-full">
                <div className="text-[0.68rem] text-[var(--accent)] font-black uppercase tracking-[0.16em] mb-4">{phase.phase}</div>
                <h3 className="text-lg font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{phase.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </SectionBand>

      <SectionBand className="bg-white/[0.01]">
        <SectionHeader
          badge="Before vs After"
          titleBase="What Changed"
          titleHighlight="For The Business"
        />
        <FadeUp>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0e]/80">
            <div className="grid grid-cols-[0.7fr_1fr_1fr] bg-white/[0.04] text-xs md:text-sm font-black uppercase tracking-wider text-gray-400">
              <div className="p-4 md:p-5">Area</div>
              <div className="p-4 md:p-5 border-l border-white/10">Before</div>
              <div className="p-4 md:p-5 border-l border-white/10">After</div>
            </div>
            {data.beforeAfter.map((row) => (
              <div key={row.area} className="grid grid-cols-[0.7fr_1fr_1fr] border-t border-white/10 text-sm md:text-base">
                <div className="p-4 md:p-5 text-white font-bold">{row.area}</div>
                <div className="p-4 md:p-5 border-l border-white/10 text-gray-500 leading-relaxed">{row.before}</div>
                <div className="p-4 md:p-5 border-l border-white/10 text-gray-300 leading-relaxed">{row.after}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </SectionBand>

      <SectionBand>
        <SectionHeader
          badge="Results"
          titleBase="Demo Placeholder"
          titleHighlight="Outcomes"
          subtitle="These metrics are sample placeholders and must be replaced with verified client data before publishing a real case study."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.results.map((item, index) => (
            <FadeUp key={item.result} delay={index * 0.05}>
              <div className="glass-card p-7 h-full">
                <h3 className="text-xl font-black text-white mb-4">{item.result}</h3>
                <p className="text-gray-400 leading-relaxed">{item.businessValue}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </SectionBand>

      <SectionBand className="bg-white/[0.01]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <FadeUp>
            <SmallLabel>Proof Assets</SmallLabel>
            <h2 className="mt-6 text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight">
              Add proof before this becomes a live client claim.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-1 gap-3">
              {data.proofAssets.map((asset) => (
                <div key={asset} className="glass-card p-5 text-gray-400 font-semibold leading-relaxed">
                  {asset}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </SectionBand>

      <SectionBand>
        <FadeUp>
          <div className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto">
            <div className="text-[var(--accent)] font-black uppercase tracking-[0.16em] text-xs mb-6">Demo Placeholder Client Quote</div>
            <blockquote className="text-2xl md:text-4xl text-white font-black tracking-tight leading-tight mb-8">
              &quot;{data.clientQuote.quote}&quot;
            </blockquote>
            <div className="text-gray-400 font-semibold">{data.clientQuote.name}</div>
            <div className="text-gray-600 text-sm mt-1">{data.clientQuote.role}</div>
          </div>
        </FadeUp>
      </SectionBand>

      <SectionBand className="bg-white/[0.01]">
        <SectionHeader
          badge="Why It Worked"
          titleBase="Better Thinking,"
          titleHighlight="Not More Noise"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.whyItWorked.map((point, index) => (
            <FadeUp key={point} delay={index * 0.05}>
              <div className="glass-card p-6 flex gap-4 h-full">
                <span className="w-7 h-7 rounded-full bg-[var(--accent)] text-black flex items-center justify-center font-black text-sm shrink-0">
                  {index + 1}
                </span>
                <p className="text-gray-400 leading-relaxed font-medium">{point}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </SectionBand>

      <SectionBand>
        <FadeUp>
          <div className="rounded-[32px] border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-x-10 top-1/2 -translate-y-1/2 h-1/2 bg-[var(--accent)] opacity-[0.04] blur-2xl rounded-full" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-5">
                Getting activity, but not enough qualified calls?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                If your business is getting views, clicks, or activity but not enough qualified calls, AblyArt can help find the gap.
              </p>
              <Button href={OFFICIAL_LINKS.calendly} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </FadeUp>
      </SectionBand>

      <SectionBand className="bg-white/[0.01]">
        <SectionHeader
          badge="Related Case Studies"
          titleBase="Explore More"
          titleHighlight="Growth Paths"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.relatedCaseStudies.map((study, index) => (
            <FadeUp key={study.title} delay={index * 0.05}>
              <Link href={study.href} className="glass-card p-7 h-full block no-underline group">
                <h3 className="text-xl font-black text-white mb-3 group-hover:text-[var(--accent)] transition-colors">{study.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{study.description}</p>
                <span className="text-[var(--accent)] text-sm font-black uppercase tracking-wider">View Case Study</span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </SectionBand>

      <SectionBand>
        <FadeUp>
          <div className="glass-card p-8 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Your traffic should create real conversations, not just reports.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              If your website, ads, social content, or outreach are not turning into enough qualified calls, AblyArt can help you find the gap and build a clearer growth path.
            </p>
            <Button href={OFFICIAL_LINKS.calendly} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
              Book a Discovery Call
            </Button>
          </div>
        </FadeUp>
      </SectionBand>
    </main>
  );
}
