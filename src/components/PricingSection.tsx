"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pricingData = {
  "web-social": {
    label: "Web & Social",
    packages: [
      {
        name: "Starter",
        price: "$1,500",
        period: "/mo",
        description: "Perfect for emerging brands looking to establish a professional baseline.",
        features: [
          "2 Platforms Managed (e.g. IG, TikTok)",
          "12 Custom Posts per Month",
          "Website Maintenance (Up to 5hrs)",
          "Basic Community Management",
          "Monthly Performance Report"
        ],
        isPopular: false,
      },
      {
        name: "Growth",
        price: "$3,200",
        period: "/mo",
        description: "Our most chosen tier for businesses ready to aggressively expand.",
        features: [
          "4 Platforms Managed",
          "20 Custom Posts (Static + Reels)",
          "Proactive Outbound Engagement",
          "Landing Page Optimization",
          "Bi-Weekly Strategy Calls",
          "Dedicated Account Manager"
        ],
        isPopular: true,
      },
      {
        name: "Scale",
        price: "$5,500+",
        period: "/mo",
        description: "Full-scale content machinery for enterprise or high-volume DTC.",
        features: [
          "Omnichannel Presence",
          "Unlimited Graphic Design",
          "Custom Web Development Requests",
          "Influencer Outreach Management",
          "24/7 Priority Support",
          "Custom Dashboard Analytics"
        ],
        isPopular: false,
      }
    ]
  },
  "seo": {
    label: "SEO",
    packages: [
      {
        name: "Local Authority",
        price: "$1,800",
        period: "/mo",
        description: "Dominate local search results and capture high-intent geographic traffic.",
        features: [
          "Google Business Profile Optimization",
          "Local Citation Building",
          "2 Optimized Blog Posts/mo",
          "Basic Technical SEO Audit",
          "Keyword Tracking (Up to 50)"
        ],
        isPopular: false,
      },
      {
        name: "National Ascend",
        price: "$3,500",
        period: "/mo",
        description: "Aggressive organic growth targeting highly competitive national keywords.",
        features: [
          "Comprehensive Technical SEO",
          "4 Long-form Pillar Posts/mo",
          "High-Quality Backlink Building",
          "Content Gap Analysis",
          "Advanced Schema Markup",
          "Monthly Strategy Deep-Dive"
        ],
        isPopular: true,
      },
      {
        name: "Enterprise Dominance",
        price: "$7,000+",
        period: "/mo",
        description: "Massive scale SEO for massive websites with thousands of pages.",
        features: [
          "Programmatic SEO Strategy",
          "High-Volume Content Production",
          "Digital PR & Link Acquisition",
          "Log File & Crawl Analysis",
          "Competitor Traffic Interception",
          "Custom ROI Reporting"
        ],
        isPopular: false,
      }
    ]
  },
  "video": {
    label: "Video Marketing",
    packages: [
      {
        name: "Short-Form Core",
        price: "$2,200",
        period: "/mo",
        description: "Consistent TikTok, Reels, and Shorts designed to go viral and capture eyes.",
        features: [
          "8 Short-Form Videos/mo",
          "Scripting & Hook Engineering",
          "Professional Editing & Grading",
          "Trending Audio Sourcing",
          "Platform Publishing"
        ],
        isPopular: false,
      },
      {
        name: "Brand Storyteller",
        price: "$4,500",
        period: "/mo",
        description: "A hybrid approach mixing short-form viral hits with long-form authority.",
        features: [
          "15 Short-Form Videos/mo",
          "2 Long-Form YouTube Videos/mo",
          "Custom Thumbnail Design",
          "A/B Testing Hooks",
          "SEO-Optimized Video Titles",
          "Monthly Audience Retention Analysis"
        ],
        isPopular: true,
      },
      {
        name: "Studio Production",
        price: "$8,500+",
        period: "/project",
        description: "High-end cinematic commercials, VSLs, and full documentary-style content.",
        features: [
          "On-Location Film Crew",
          "Director & Lighting Setup",
          "Actors / UGC Sourcing",
          "Advanced VFX & 3D Motion",
          "Cinematic Color Grading",
          "Formats Cut for Every Platform"
        ],
        isPopular: false,
      }
    ]
  },
  "lead-gen": {
    label: "Lead Gen",
    packages: [
      {
        name: "Funnel Kickstart",
        price: "$2,000",
        period: "/mo",
        description: "Stop relying on referrals and start generating predictable pipeline.",
        features: [
          "1 Custom Landing Page",
          "Ad Account Setup & Tracking",
          "Basic Meta/Google Ads Run",
          "Simple Email Nurture Sequence",
          "Lead Webhook Integration"
        ],
        isPopular: false,
      },
      {
        name: "Conversion Engine",
        price: "$4,500",
        period: "/mo",
        description: "Our complete suite for aggressively lowering your Customer Acquisition Cost.",
        features: [
          "Multi-Step Funnel Engineering",
          "Advanced CRO & A/B Testing",
          "Omnichannel Retargeting Ads",
          "Complex Email/SMS Automations",
          "UTM & Offline Conversion Tracking",
          "Weekly Lead Quality Review"
        ],
        isPopular: true,
      },
      {
        name: "Scale & Dominate",
        price: "$9,000+",
        period: "/mo",
        description: "For agencies/B2B operators who need 100+ highly qualified calls booked per month.",
        features: [
          "Custom Outbound & Inbound Systems",
          "Cold Email Infrastructure (10+ domains)",
          "Bespoke Lead Scraping & Enrichment",
          "AI Appointment Setter Integration",
          "Sales Team Handoff Protocols",
          "Guaranteed Lead Volumes"
        ],
        isPopular: false,
      }
    ]
  }
};

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof pricingData>("web-social");

  return (
    <section className="py-16 md:py-24 relative flex flex-col items-center justify-center bg-[var(--background)] z-20 overflow-hidden">
      
      {/* Background glow behind pricing */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.04] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#f0f0f8]">
            Transparent <span className="gradient-text italic">Pricing</span>
          </h2>
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
            No hidden fees. No bloated agency retainers. Just clear, ROI-focused packages designed to scale exactly as fast as you do.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 p-1.5 bg-white/5 border border-white/10 rounded-2xl md:rounded-full mx-auto max-w-fit shadow-xl backdrop-blur-md">
          {(Object.keys(pricingData) as Array<keyof typeof pricingData>).map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative px-6 py-3 rounded-xl md:rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive ? "text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[var(--accent)] rounded-xl md:rounded-full z-0 shadow-[0_0_20px_rgba(155,255,110,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{pricingData[key].label}</span>
              </button>
            );
          })}
        </div>

        {/* Pricing Cards */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
            >
              {pricingData[activeTab].packages.map((pkg, idx) => (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col bg-[#0b0b0e] p-8 rounded-3xl border transition-all duration-300 ${
                    pkg.isPopular 
                      ? "border-[var(--accent)] shadow-[0_0_40px_rgba(155,255,110,0.1)] md:-translate-y-4" 
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-black font-bold text-xs uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
                      Most Selected
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-[#f0f0f8] mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-6 min-h-[40px] leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mb-8 border-b border-white/10 pb-8">
                    <span className="text-4xl font-black text-white">{pkg.price}</span>
                    <span className="text-gray-500 font-medium">{pkg.period}</span>
                  </div>

                  <ul className="flex flex-col gap-4 mb-10 flex-1">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[0.95rem] text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-auto text-center font-bold py-4 px-6 rounded-xl transition-all duration-300 ${
                      pkg.isPopular 
                        ? "bg-[var(--accent)] text-black hover:bg-[#86ea5c] shadow-[0_0_20px_rgba(155,255,110,0.3)]" 
                        : "bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    Choose {pkg.name}
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom text */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          Want a custom hybrid plan combining multiple services? <a href="#contact" className="text-[var(--accent)] underline underline-offset-4 hover:text-[#86ea5c]">Let's talk.</a>
        </div>

      </div>
    </section>
  );
}
