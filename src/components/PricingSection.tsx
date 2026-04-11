"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type DetailedDeliverable = {
  title: string;
  quality: string;
  time: string;
  quantity: string;
};

export type PricingPackage = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  detailedDeliverables?: DetailedDeliverable[];
  isPopular: boolean;
};

const pricingData: Record<string, { label: string; packages: PricingPackage[] }> = {
  "holistic-marketing": {
    label: "Holistic Marketing",
    packages: [
      {
        name: "Growth Engine",
        price: "$5,000",
        period: "/mo",
        description: "Perfect for taking an established business and digitizing their entire marketing flow.",
        features: [
          "Complete Web Redesign",
          "Basic SEO & Citations",
          "3 Social Platforms Managed",
          "Introductory Media Buying",
          "Bi-Weekly Reporting"
        ],
        detailedDeliverables: [
          {
            title: "Complete Web Redesign",
            quantity: "1 Home + 4 Core Pages",
            quality: "Custom UI/UX, Next.js Architecture, Mobile Perfect",
            time: "Initial Launch in 30 Days"
          },
          {
            title: "Search & Local SEO",
            quantity: "50 Citations + Tech Audit",
            quality: "White-hat Google compliant, Hand-written code fixes",
            time: "Continuous Monthly Tuning"
          },
          {
            title: "Social Platforms Managed",
            quantity: "3 Platforms (IG, TikTok, FB), 12 Posts",
            quality: "High-end Graphic Design & Value-driven Copy",
            time: "3 Posts Minimum Per Week"
          },
          {
            title: "Introductory Media Buying",
            quantity: "Up to $3,000 Monthly Ad Spend",
            quality: "Meta Ads Manager precise targeting & A/B testing",
            time: "Daily Campaign Monitoring"
          }
        ],
        isPopular: false,
      },
      {
        name: "Market Domination",
        price: "$8,500",
        period: "/mo",
        description: "Our core offering. We run your entire digital department end-to-end.",
        features: [
          "Custom Web App Development",
          "Advanced Topical SEO Architecture",
          "Omnichannel Social (4 Platforms)",
          "Aggressive Ad Scale (Up to $50k spend)",
          "Weekly Strategy & Growth Syncs",
          "Full Funnel Optimization"
        ],
        detailedDeliverables: [
          {
            title: "Custom Web App / E-Commerce Built",
            quantity: "Uncapped Core Pages + CMS integration",
            quality: "Headless architecture, zero-latency load times",
            time: "Ongoing dedicated development hours"
          },
          {
            title: "Topical SEO Authority",
            quantity: "4 Long-Form Pillar Articles + Link Building",
            quality: "Expert-written, fully Schema marked, deep research",
            time: "4 Published Articles Monthly"
          },
          {
            title: "Omnichannel Social Play",
            quantity: "4 Platforms, 24 Posts (Static + Reels)",
            quality: "Viral hooks matching strict brand identity",
            time: "6x Posts per week + Active Community Mgmt"
          },
          {
            title: "Aggressive Ad Scaling",
            quantity: "Up to $50,000 Monthly Ad Spend",
            quality: "Full retargeting funnels, Lookalike mapping",
            time: "Daily Optimization & Hourly Budget Adjustments"
          }
        ],
        isPopular: true,
      },
      {
        name: "Enterprise Scaling",
        price: "$15,000+",
        period: "/mo",
        description: "Designed for massive scale, aggressive content production, and enterprise traffic.",
        features: [
          "Headless E-Commerce/Web Support",
          "In-House Quality Video Production",
          "Digital PR & Link Building",
          "Unlimited Lead Gen Flows",
          "Dedicated Team of 4 Experts",
          "24/7 Priority Support"
        ],
        detailedDeliverables: [
          {
            title: "Enterprise Web Support",
            quantity: "Full Dedicated Stack Control",
            quality: "Bank-level security, instant server-side rendering",
            time: "24/7 Uptime & Instant Bug Fixes"
          },
          {
            title: "In-House Video Production",
            quantity: "15 Shorts + 2 Cinematic Long-forms",
            quality: "4k Camera Equipment, Pro Grading & Editing",
            time: "Monthly filming days"
          },
          {
            title: "Digital PR Machinery",
            quantity: "High-Domain Authority Placements",
            quality: "Real news outlets, DO-FOLLOW context links",
            time: "3-5 Premium Placements Monthly"
          },
          {
            title: "Unlimited Dedicated Account Support",
            quantity: "1 Dedicated Director + 3 Specialists",
            quality: "Direct Slack channel, zero wait times",
            time: "Responses under 15 minutes, 24/7 emergencies"
          }
        ],
        isPopular: false,
      }
    ]
  },
  "web-solutions": {
    label: "Web Solutions",
    packages: [
      {
        name: "Landing Pages",
        price: "$2,500+",
        period: "/project",
        description: "Perfect for a high-converting single page or short funnel.",
        features: [
          "Custom UI/UX Design",
          "Next.js / React Architecture",
          "Mobile & Speed Optimized",
          "Basic SEO Setup",
          "Analytics Integration"
        ],
        detailedDeliverables: [
          {
            title: "Custom UI/UX Design",
            quantity: "1 Long-Form Landing Page",
            quality: "Premium Figma wireframing & prototyping",
            time: "Delivered in 10-14 days"
          },
          {
            title: "Frontend Engineering",
            quantity: "Full Next.js Codebase",
            quality: "Zero-latency rendering, clean architecture",
            time: "Built within 7 days of design approval"
          },
          {
            title: "Performance & Tracking",
            quantity: "Speed Optimization + Tags Setup",
            quality: "Google Tag Manager, Meta Pixel, 95+ PageSpeed",
            time: "Pre-launch integration"
          }
        ],
        isPopular: false,
      },
      {
        name: "Corporate Build",
        price: "$6,500+",
        period: "/project",
        description: "Full multi-page site for established growing businesses.",
        features: [
          "Full Brand Identity Integration",
          "CMS Setup (Sanity)",
          "Dynamic Routing & SEO",
          "Advanced Analytics",
          "2 Weeks Post-Launch Support",
          "Dedicated Account Manager"
        ],
        detailedDeliverables: [
          {
            title: "Full Brand Site",
            quantity: "Up to 10 Custom Pages",
            quality: "Pixel-perfect multi-viewport responsive design",
            time: "4-6 Weeks Timeline"
          },
          {
            title: "Headless CMS Setup",
            quantity: "Sanity.io Integration",
            quality: "Easy drag-and-drop client dashboard",
            time: "Delivered at launch"
          },
          {
            title: "Technical SEO & Structure",
            quantity: "Dynamic Routing for scale",
            quality: "Schema markup, dynamic sitemaps",
            time: "Built-in"
          },
          {
            title: "Maintenance",
            quantity: "2 Weeks Post-Launch Support",
            quality: "Priority bug-fixing and fine-tuning",
            time: "First 14 days after go-live"
          }
        ],
        isPopular: true,
      },
      {
        name: "Enterprise Systems",
        price: "$15,000+",
        period: "/project",
        description: "Complex logic, user portals, or full headless commerce.",
        features: [
          "Custom Database Architecture",
          "Headless E-Commerce Setup",
          "Third-Party API Integrations",
          "Rigorous Security & QA",
          "Priority 24/7 Support",
          "Continuous Delivery Pipeline"
        ],
        detailedDeliverables: [
          {
            title: "Database Architecture",
            quantity: "Custom Backend & PostgreSQL/NoSQL",
            quality: "Scalable schema, zero failover risk",
            time: "Scoped per project sprint"
          },
          {
            title: "E-Commerce / Portals",
            quantity: "Full Headless Shopify/Stripe integration",
            quality: "PCI-compliant, seamless user portals",
            time: "8-12 Weeks Timeline"
          },
          {
            title: "API & Infrastructure",
            quantity: "Unlimited Third Party Integrations",
            quality: "Enterprise-level CI/CD & Vercel hosting",
            time: "Managed lifecycle"
          },
          {
            title: "Ongoing Maintenance",
            quantity: "Dedicated SLA",
            quality: "24/7 priority support, automated patching",
            time: "Continuous Retainer"
          }
        ],
        isPopular: false,
      }
    ]
  },
  "social-media": {
    label: "Social Media",
    packages: [
      {
        name: "Baseline Organic",
        price: "$1,200",
        period: "/mo",
        description: "Consistent branding to ensure your digital footprint looks alive.",
        features: [
          "2 Platforms Managed",
          "12 Custom Posts per Month",
          "Basic Community Management",
          "Monthly Content Calendar",
          "Analytics Overview"
        ],
        detailedDeliverables: [
          {
            title: "2 Platforms Managed",
            quantity: "Any 2 (e.g. IG + LinkedIn)",
            quality: "Fully optimized bios and highlight covers",
            time: "Daily monitoring"
          },
          {
            title: "Custom Posts",
            quantity: "12 High-Quality Graphics/Carousels",
            quality: "Brand-aligned, no generic stock photos",
            time: "3 Posts per week"
          },
          {
            title: "Community Management",
            quantity: "Basic Inbox & Comment Replies",
            quality: "Professional tone, spam filtering",
            time: "Handled within 24 hours"
          }
        ],
        isPopular: false,
      },
      {
        name: "Aggressive Growth",
        price: "$2,800",
        period: "/mo",
        description: "Our most chosen tier to rapidly expand and capture audience attention.",
        features: [
          "4 Platforms Managed",
          "24 Custom Posts (Static + Video)",
          "Proactive Outbound Engagement",
          "Graphic Design Support",
          "Bi-Weekly Strategy Calls",
          "Dedicated Account Manager"
        ],
        detailedDeliverables: [
          {
            title: "Full Coverage Content",
            quantity: "24 Custom Posts",
            quality: "Mix of high-end graphics and short-form video edit",
            time: "Every other day posting"
          },
          {
            title: "Outbound Engagement",
            quantity: "50+ Target Accounts Engaged",
            quality: "Meaningful, non-bot authentic comments to pull traffic",
            time: "Daily outbound ops"
          },
          {
            title: "Strategy & Support",
            quantity: "Bi-Weekly Calls",
            quality: "Data-driven pivots on hooks and engagement rate",
            time: "2 check-ins per month"
          }
        ],
        isPopular: true,
      },
      {
        name: "Viral Machinery",
        price: "$5,000+",
        period: "/mo",
        description: "A complete outsourced content team for high-volume brands.",
        features: [
          "Omnichannel Presence",
          "Unlimited Daily Posts",
          "Influencer Outreach Management",
          "Dedicated Video Editor",
          "Priority 24/7 Community Handling",
          "Custom Dashboard Analytics"
        ],
        detailedDeliverables: [
          {
            title: "Mass Scale Posting",
            quantity: "Unlimited Platform Management",
            quality: "Volume-optimized tailored formats for every feed",
            time: "Up to 2-3 times daily"
          },
          {
            title: "Influencer Management",
            quantity: "Up to 10 Micro-Influencer Campaigns/mo",
            quality: "Vetting, negotiating, and shipping coordination",
            time: "Ongoing dedicated outreach"
          },
          {
            title: "Priority Community",
            quantity: "24/7 Dedicated Brand Voice",
            quality: "Converting DMs directly into sales pipeline",
            time: "Responses under 1 hour"
          }
        ],
        isPopular: false,
      }
    ]
  },
  "seo": {
    label: "SEO & PPC",
    packages: [
      {
        name: "Local Authority",
        price: "$1,800",
        period: "/mo",
        description: "Dominate local search results and capture high-intent geographic traffic.",
        features: [
          "Google Business Profile Optimization",
          "Local Citation Building",
          "Basic Google Search Ads Setup",
          "Basic Technical SEO Audit",
          "Keyword Tracking (Up to 50)"
        ],
        detailedDeliverables: [
          {
            title: "Local SEO Setup",
            quantity: "1 Location + 50 Citations",
            quality: "Fully filled maps, 100% NAP consistency",
            time: "Spread out over first 3 months"
          },
          {
            title: "Paid Search (PPC)",
            quantity: "Google Search Ads Launch",
            quality: "High-intent local keywords targeting, strict budget control",
            time: "Daily ad monitoring"
          },
          {
            title: "Content Optimization",
            quantity: "2 Target SEO Blogs/mo",
            quality: "SurferSEO optimized (Score 80+), human written",
            time: "Bi-weekly publishing"
          }
        ],
        isPopular: false,
      },
      {
        name: "National Ascend",
        price: "$3,500",
        period: "/mo",
        description: "Aggressive organic & paid growth targeting highly competitive national keywords.",
        features: [
          "Comprehensive Technical SEO",
          "Advanced PPC Management ($10k Spend)",
          "High-Quality Backlink Building",
          "Paid Retargeting Interception",
          "Advanced Schema Markup",
          "Monthly Strategy Deep-Dive"
        ],
        detailedDeliverables: [
          {
            title: "PPC Engine & Retargeting",
            quantity: "Google Ads + Performance Max",
            quality: "Split-tested ad copy, deep conversion API tracking",
            time: "Daily optimization & Hourly checks"
          },
          {
            title: "Technical Foundation",
            quantity: "Full Site Architecture Fix",
            quality: "Zero broken links, lightning fast load, canonicals fixed",
            time: "First 45 Days"
          },
          {
            title: "Pillar Content & Backlinks",
            quantity: "4 Indepth Articles + 3-5 DR 40+ Links",
            quality: "Industry-expert level research, genuine outreach",
            time: "Weekly alignment"
          }
        ],
        isPopular: true,
      },
      {
        name: "Enterprise Dominance",
        price: "$7,000+",
        period: "/mo",
        description: "Massive scale SEO & aggressive ad buys for massive websites.",
        features: [
          "Programmatic SEO Strategy",
          "Enterprise PPC Scale ($50k+ Spend)",
          "Google Shopping / PMax Ads",
          "Digital PR & Link Acquisition",
          "Log File & Crawl Analysis",
          "Custom ROI Reporting"
        ],
        detailedDeliverables: [
          {
            title: "Mass Scale Ads (PPC)",
            quantity: "Unlimited Campaigns & Spend Mgmt",
            quality: "Automated bidding rules, rigorous negative keywords",
            time: "Always-on dedicated monitoring"
          },
          {
            title: "Programmatic Scale",
            quantity: "Thousands of Generated Pages",
            quality: "High-quality dynamic data combining without cannibalization",
            time: "3-6 Month deployment cycle"
          },
          {
            title: "Competitor Interception",
            quantity: "Deep Gap Analysis & Ad Bidding",
            quality: "Stealing traffic directly from competitor branded terms",
            time: "Monthly sprint planning"
          }
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
        detailedDeliverables: [
          {
            title: "Short-Form Production",
            quantity: "8 Fully Edited Vertical Videos (<60s)",
            quality: "Dynamic captions, sound design, engaging b-roll",
            time: "2 Delivered per week"
          },
          {
            title: "Scripting & Hooks",
            quantity: "8 Custom Scripts",
            quality: "Psychologically driven hooks that guarantee retention",
            time: "Provided bi-weekly for your review"
          },
          {
            title: "Audio & Sourcing",
            quantity: "Trend Surveillance",
            quality: "Only using high-momentum, rapidly rising audios",
            time: "Daily trend monitoring"
          }
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
        detailedDeliverables: [
          {
            title: "Hybrid Volume",
            quantity: "15 Shorts + 2 Long-forms (10m+)",
            quality: "Broadcast-level editing and color matching",
            time: "Consistent weekly flow"
          },
          {
            title: "Thumbnail Strategy",
            quantity: "3 Varsity Templates per video",
            quality: "High CTR guarantee with A/B testing in native UI",
            time: "Tested 24hrs post-launch"
          },
          {
            title: "Retention Analytics",
            quantity: "Deep dive metrics",
            quality: "Pinpointing the exact millisecond viewers drop off",
            time: "Monthly Data Report"
          }
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
        detailedDeliverables: [
          {
            title: "Full Set Production",
            quantity: "1-3 Day Shoots",
            quality: "Red/Arri Cinema Cameras, Full Gaffer & Grip crew",
            time: "Pre-production 2-3 weeks, Shoot 1-3 Days"
          },
          {
            title: "Advanced Post-Production",
            quantity: "1 Hero Asset + Infinite micro-clips",
            quality: "Full VFX, sound mixing, multi-platform render passes",
            time: "3-4 Weeks Post-Production"
          },
          {
            title: "Casting & Sourcing",
            quantity: "Hand-picked talent",
            quality: "Authentic UGC creators or professional SAG actors",
            time: "Handled entirely during pre-pro"
          }
        ],
        isPopular: false,
      }
    ]
  }
};

export type PricingSectionProps = {
  customPackages?: PricingPackage[];
};

export default function PricingSection({ customPackages }: PricingSectionProps = {}) {
  const [activeTab, setActiveTab] = useState<keyof typeof pricingData>("holistic-marketing");
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(null);
  
  const displayPackages = customPackages || pricingData[activeTab].packages;

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

        {/* Custom Tabs (hidden if custom packages provided) */}
        {!customPackages && (
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
        )}

        {/* Pricing Cards */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={customPackages ? "custom" : activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className={`grid grid-cols-1 md:grid-cols-${Math.min(displayPackages.length, 3)} gap-8 items-stretch justify-center`}
            >
              {displayPackages.map((pkg, idx) => (
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

                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className={`mt-auto text-center font-bold py-4 px-6 rounded-xl transition-all duration-300 w-full ${
                      pkg.isPopular 
                        ? "bg-[var(--accent)] text-black hover:bg-[#86ea5c] shadow-[0_0_20px_rgba(155,255,110,0.3)]" 
                        : "bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    View Package Details
                  </button>
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

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6" style={{ pointerEvents: 'auto' }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#060608]/90 backdrop-blur-md"
              onClick={() => setSelectedPackage(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0b0b0e] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
              style={{ maxHeight: '85vh', margin: '2rem 0' }}
            >
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-white/5 flex justify-between items-start bg-white/[0.02]">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-[#f0f0f8]">{selectedPackage.name}</h3>
                    {selectedPackage.isPopular && (
                      <span className="bg-[var(--accent)] text-black font-bold text-[10px] uppercase tracking-wider py-1 px-3 rounded-full">
                        Most Selected
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white">{selectedPackage.price}</span>
                    <span className="text-gray-500 font-medium">{selectedPackage.period}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scrollbar">
                <p className="text-gray-300 mb-8 text-lg">{selectedPackage.description}</p>
                
                <h4 className="text-[var(--accent)] font-bold text-sm tracking-widest uppercase mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-[var(--accent)]/50"></span>
                  Clarified Deliverables
                  <span className="flex-1 h-px bg-[var(--accent)]/10"></span>
                </h4>
                
                <div className="flex flex-col gap-4">
                  {selectedPackage.detailedDeliverables && selectedPackage.detailedDeliverables.length > 0 ? (
                    selectedPackage.detailedDeliverables.map((item, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:border-[var(--accent)]/30 transition-colors">
                        <h5 className="font-bold text-lg text-white mb-4">{item.title}</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Quantity</span>
                            <span className="text-sm text-gray-300">{item.quantity}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Quality Expectation</span>
                            <span className="text-sm text-gray-300">{item.quality}</span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Time / Frequency</span>
                            <span className="text-sm text-gray-300">{item.time}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center text-gray-400">
                      Standard deliverables apply. Please contact us for a detailed breakdown or view the basic features below.
                      <ul className="mt-4 text-left flex flex-col gap-2 max-w-md mx-auto">
                        {selectedPackage.features.map((feat, i) => (
                          <li key={i} className="flex gap-2 text-sm text-gray-300 items-start">
                            <span className="text-[var(--accent)]">✦</span> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 md:p-8 border-t border-white/5 bg-black/20 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-gray-500 flex-1">
                  100% transparency. By proceeding, you will be connected with our directors to instantly begin onboarding for these exact deliverables.
                </p>
                <a
                  href="/contact"
                  className="bg-[var(--accent)] text-black font-bold py-4 px-8 rounded-xl hover:bg-[#86ea5c] shadow-[0_0_20px_rgba(155,255,110,0.2)] transition-all whitespace-nowrap"
                >
                  Confirm & Start Onboarding
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.2);
        }
      `}} />
    </section>
  );
}
