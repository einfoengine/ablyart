"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonialsRow1 = [
  {
    quote: "Our lead volume literally tripled within the first 60 days. They completely rebuilt our funnel, and the ROI has been nothing short of staggering.",
    name: "Sarah Jenkins",
    role: "CMO, Vertex Tech",
    imgGrad: "linear-gradient(135deg, #ff7a59, #ff5050)"
  },
  {
    quote: "The video marketing team is on another level. The short-form content they produced for us went viral three times this month alone.",
    name: "Marcus Cole",
    role: "Founder, Zenith Apparel",
    imgGrad: "linear-gradient(135deg, #00A1E0, #0055FF)"
  },
  {
    quote: "Finally, an agency that doesn't just send spreadsheets. They actually care about our bottom line. Our SEO traffic is up 400% YoY.",
    name: "Elena Rodriguez",
    role: "Head of Growth, Nova AI",
    imgGrad: "linear-gradient(135deg, #9bff6e, #339933)"
  },
  {
    quote: "We were burning cash on Facebook ads before they stepped in. They restructured our entire ad account and slashed our CAC by 65%.",
    name: "David Kim",
    role: "CEO, Quantum Scale",
    imgGrad: "linear-gradient(135deg, #b09eff, #F24E1E)"
  }
];

const testimonialsRow2 = [
  {
    quote: "Their web development team is insanely fast and incredibly detail-oriented. Our new landing page converts at 14%—unheard of in our industry.",
    name: "Amanda Chen",
    role: "VP Marketing, Apex Edge",
    imgGrad: "linear-gradient(135deg, #06B6D4, #3178C6)"
  },
  {
    quote: "They act as a true extension of our internal team. The communication is flawless, and the creative strategy gave us an unfair advantage.",
    name: "James Thorne",
    role: "Director, Velocity Brands",
    imgGrad: "linear-gradient(135deg, #FFFC00, #FFE01B)"
  },
  {
    quote: "It's rare to find an agency that excels at both the highly technical SEO side and the high-level creative video production. Absolutely elite.",
    name: "Priya Patel",
    role: "Founder, Starlight Ed.",
    imgGrad: "linear-gradient(135deg, #FF0000, #BD081C)"
  },
  {
    quote: "If you want to scale aggressively, hire them. We jumped from $1M to $4M ARR this year, and their demand gen strategy is the exact reason why.",
    name: "Tom Harrison",
    role: "CEO, Matrix Labs",
    imgGrad: "linear-gradient(135deg, #6ee7ff, #00A1E0)"
  }
];

// Combine the arrays and duplicate to create a seamless infinite loop illusion
const allTestimonials = [...testimonialsRow1, ...testimonialsRow2];
const marqueeRow = [...allTestimonials, ...allTestimonials];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 relative flex flex-col items-center justify-center bg-[var(--background)] overflow-hidden z-20">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card-bg)] mb-6 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-[var(--accent)]"></div>
          <span className="text-sm font-semibold tracking-wider text-[var(--foreground)] uppercase font-mono">Client Success</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#f0f0f8]">
          Don't Just Take <span className="gradient-text italic">Our Word For It.</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex flex-col gap-6 overflow-hidden">
        
        {/* Left Fade Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none"></div>
        {/* Right Fade Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none"></div>

        {/* Single Row (Scrolls Left) */}
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          {marqueeRow.map((test, index) => (
            <TestimonialCard key={`r1-${index}`} data={test} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ data }: { data: any }) {
  return (
    <div className="w-[340px] md:w-[420px] mx-3 flex-shrink-0 bg-[#0b0b0e] border border-white/5 p-8 rounded-3xl shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:border-white/10 group">
      {/* Stars */}
      <div className="flex gap-1 mb-6 text-[var(--accent)]">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[#f0f0f8] text-lg font-medium leading-relaxed mb-8">
        "{data.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 mt-auto">
        <div 
          className="w-12 h-12 rounded-full border-2 border-[var(--background)] shadow-xl shrink-0" 
          style={{ background: data.imgGrad }} 
        />
        <div>
          <div className="text-white font-bold text-sm tracking-wide">{data.name}</div>
          <div className="text-gray-500 text-xs mt-0.5">{data.role}</div>
        </div>
      </div>
    </div>
  );
}
