"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

export type DetailedDeliverable = {
  title: string;
  quality: string;
  time: string;
  quantity: string;
};

export type PricingPackage = {
  name: string;
  price: string | number;
  originalPrice?: string;
  discountPercentage?: number;
  monthlyDiscountPercentage?: number;
  period: string;
  description: string;
  features: Array<string | { text: React.ReactNode; included: boolean }>;
  detailedDeliverables?: DetailedDeliverable[];
  isPopular: boolean;
};

const pricingData: Record<string, { label: string; packages: PricingPackage[] }> = {
  "growth-marketing": {
    label: "Growth Marketing",
    packages: [
  {
    name: "Starter",
    price: 1500,
    discountPercentage: 40,
    monthlyDiscountPercentage: 0,
    period: "/mo",
    description: "For startups planting their first flag.",
    features: [
      { text: <><span className="text-[#eab308] font-bold">500</span> cold outreach emails/mo (Apollo)</>, included: true },
      { text: <><span className="text-[#eab308] font-bold">2</span> social platform — <span className="text-[#eab308] font-bold">12</span> posts/mo</>, included: true },
      { text: <><span className="text-[#eab308] font-bold">1</span> SEO topic clusters + <span className="text-[#eab308] font-bold">2</span> blogs/mo</>, included: true },
      { text: "Technical SEO fixes", included: true },
      { text: "Landing page build", included: false },
      { text: <>Paid ads up to <span className="text-[#eab308] font-bold">$2,000</span> spend — Meta, TikTok & Google</>, included: true },
      { text: "Custom web development support", included: false },
      { text: "Monthly performance report", included: true },
    ],
    detailedDeliverables: [],
    isPopular: false,
  },
  {
    name: "Growth Engine",
    price: 3000,
    discountPercentage: 50,
    monthlyDiscountPercentage: 20,
    period: "/mo",
    description: "For startups ready to build real pipeline.",
    features: [
      { text: <><span className="text-white font-bold">2,000</span> cold outreach emails/mo (Apollo)</>, included: true },
      { text: <><span className="text-white font-bold">3</span> social platforms — <span className="text-white font-bold">20</span> posts/mo each</>, included: true },
      { text: <><span className="text-white font-bold">4</span> SEO topic clusters + <span className="text-white font-bold">4</span> blogs/mo</>, included: true },
      { text: "On-page & technical SEO fixes", included: true },
      { text: "1 landing page build or optimization + 1 funnel optimization", included: true },
      { text: <>Paid ads up to <span className="text-white font-bold">$10,000</span> spend — Meta, TikTok & Google</>, included: true },
      { text: <><span className="text-white font-bold">2</span> custom landing pages or web components/mo</>, included: true },
      { text: "Monthly audit & attribution report", included: true },
    ],
    detailedDeliverables: [],
    isPopular: true,
  },
  {
    name: "Market Domination",
    price: 5000,
    discountPercentage: 60,
    monthlyDiscountPercentage: 30,
    period: "/mo",
    description: "For startups ready to dominate their market.",
    features: [
      { text: <><span className="text-white font-bold">5,000</span> cold outreach emails/mo (Apollo)</>, included: true },
      { text: <><span className="text-white font-bold">4</span> social platforms — <span className="text-white font-bold">30</span> posts/mo each</>, included: true },
      { text: <><span className="text-white font-bold">8</span> SEO topic clusters + <span className="text-white font-bold">8</span> blogs/mo + link building</>, included: true },
      { text: "Full technical SEO + Core Web Vitals", included: true },
      { text: "Custom landing page + funnel build", included: true },
      { text: <>Paid ads up to <span className="text-white font-bold">$20,000</span> spend — Meta, TikTok & Google</>, included: true },
      { text: <><span className="text-white font-bold">Dedicated</span> web developer support</>, included: true },
      { text: "Weekly performance dashboard", included: true },
    ],
    detailedDeliverables: [],
    isPopular: false,
  },
]
  },
  "performance-marketing": {
    label: "Performance Marketing",
    packages: [
      {
        name: "Scale Starter",
        price: "$2,800",
        originalPrice: "$3,500",
        discountPercentage: 20,
        period: "/mo + 10% Ad Spend",
        description: "Perfect for validating a new product and establishing profitable unit economics.",
        features: [
          "1 Platform (e.g., Google or Meta)",
          "4 Static + 2 Web Banners/mo",
          "Standard Tracking Setup",
          "Weekly Bid Adjustments",
          "Monthly ROI Report"
        ],
        detailedDeliverables: [
          {
            title: "Channel Deployment",
            quantity: "1 Primary Platform",
            quality: "Deep intent targeting on Google or Meta",
            time: "Always-on deployment"
          },
          {
            title: "Creative Laboratory",
            quantity: "4 Static + 2 Web Banners",
            quality: "Direct-response ad copy and scroll-stopping visuals",
            time: "New creatives introduced monthly"
          },
          {
            title: "Technical Foundation",
            quantity: "Tracking & Conversion Pixels",
            quality: "Standard tracking implementation for accurate attribution",
            time: "Built during onboarding"
          },
          {
            title: "Campaign Management",
            quantity: "Weekly Optimization Cycle",
            quality: "Bid-cap adjustments, audience pruning, and scaling",
            time: "Weekly tuning + Monthly Reporting"
          }
        ],
        isPopular: false,
      },
      {
        name: "Market Dominator",
        price: "$4,550",
        originalPrice: "$6,500",
        discountPercentage: 30,
        period: "/mo + 15% Ad Spend",
        description: "Built for aggressive growth, B2B SaaS, and e-commerce scaling.",
        features: [
          "2-3 Platforms (Omnichannel)",
          "8 Static + 4 Animated Banners/mo",
          "Server-side Tagging (CAPI)",
          "Daily Testing & CRO",
          "Bi-Weekly Strategy Syncs"
        ],
        detailedDeliverables: [
          {
            title: "Omnichannel Funnel",
            quantity: "2-3 Platforms Running Synchronously",
            quality: "Cross-platform retargeting capturing leaky traffic",
            time: "Always-on deployment"
          },
          {
            title: "Scaled Creative Output",
            quantity: "8 Static + 4 Animated Banners",
            quality: "High-volume hook variations and strict A/B formats",
            time: "Delivered consistently over exactly 30 days"
          },
          {
            title: "Advanced Data Layer",
            quantity: "Server-side Tagging (Meta CAPI)",
            quality: "Bypassing iOS14 restrictions for precise event capturing",
            time: "Maintained 24/7"
          },
          {
            title: "Iterative Optimization",
            quantity: "Daily Ad Tuning + CRO",
            quality: "Granular pause/scale rules applied strictly to roas metrics",
            time: "Daily checks + Bi-weekly Syncs"
          }
        ],
        isPopular: true,
      },
      {
        name: "Enterprise Performance",
        price: "$7,200+",
        originalPrice: "$12,000+",
        discountPercentage: 40,
        period: "/mo + 20% Ad Spend",
        description: "Total category leadership for massive ad budgets and intricate custom attribution models.",
        features: [
          "Unlimited Platforms + Native Ads",
          "Unlimited Creative Testing",
          "Full Data Attribution Modeling",
          "24/7 Algorithmic Monitoring",
          "Real-time Dashboard + Weekly Syncs"
        ],
        detailedDeliverables: [
          {
            title: "Total Market Coverage",
            quantity: "Unlimited Platform Strategy",
            quality: "Meta, Google, LinkedIn, TikTok, Native, DSPs",
            time: "24/7 active management"
          },
          {
            title: "Infinite Creative Engine",
            quantity: "Unlimited Testing Limits",
            quality: "Mass scale dynamic creative optimization (DCO)",
            time: "Continuous iteration"
          },
          {
            title: "Data Science & Attribution",
            quantity: "Custom Attribution Modeling",
            quality: "Multi-touch, fractional mapping—no more 'black box' data",
            time: "Real-time dashboard updates"
          },
          {
            title: "Algorithmic Precision",
            quantity: "Dedicated Elite Team",
            quality: "Machine learning augmented bidding strategies",
            time: "24/7 Monitoring + Weekly Executive Syncs"
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
        price: "$840",
        originalPrice: "$1,200",
        discountPercentage: 30,
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
        price: "$1,680",
        originalPrice: "$2,800",
        discountPercentage: 40,
        period: "/mo",
        description: "Our most chosen tier to rapidly expand and capture audience attention.",
        features: [
          "4 Platforms Managed",
          "24 Custom Posts (Static + Motion Graphics)",
          "Proactive Outbound Engagement",
          "Graphic Design Support",
          "Bi-Weekly Strategy Calls",
          "Dedicated Account Manager"
        ],
        detailedDeliverables: [
          {
            title: "Full Coverage Content",
            quantity: "24 Custom Posts",
            quality: "Mix of high-end graphics and motion design",
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
        price: "$2,000+",
        originalPrice: "$5,000+",
        discountPercentage: 60,
        period: "/mo",
        description: "A complete outsourced content team for high-volume brands.",
        features: [
          "Omnichannel Presence",
          "Unlimited Daily Posts",
          "Influencer Outreach Management",
          "Dedicated UI/UX Designer",
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
        price: "$1,080",
        originalPrice: "$1,800",
        discountPercentage: 40,
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
        price: "$2,100",
        originalPrice: "$3,500",
        discountPercentage: 40,
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
        price: "$2,800+",
        originalPrice: "$7,000+",
        discountPercentage: 60,
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
  "web-design": {
    label: "Web Design & Development",
    packages: [
      {
        name: "Landing Page Core",
        price: "$1,500",
        originalPrice: "$2,500",
        discountPercentage: 40,
        period: "/project",
        description: "High-converting landing pages designed to turn traffic into qualified leads.",
        features: [
          "1 Custom Landing Page",
          "Conversion-Optimized Copywriting",
          "Mobile Responsive Design",
          "Basic SEO Setup",
          "Fast Turnaround"
        ],
        detailedDeliverables: [
          {
            title: "Custom Design",
            quantity: "1 Landing Page",
            quality: "Modern UI/UX with smooth animations",
            time: "1-2 Weeks"
          },
          {
            title: "Copywriting",
            quantity: "Full Page Copy",
            quality: "Psychologically driven hooks that guarantee conversions",
            time: "Included in timeline"
          },
          {
            title: "Development",
            quantity: "Next.js / React Build",
            quality: "Lightning fast loading speeds",
            time: "Included in timeline"
          }
        ],
        isPopular: false,
      },
      {
        name: "Corporate Website",
        price: "$3,500",
        originalPrice: "$6,000",
        discountPercentage: 40,
        period: "/project",
        description: "A complete professional website to establish authority and trust in your industry.",
        features: [
          "Up to 5 Pages (Home, About, Services, etc.)",
          "Custom UI/UX Design",
          "CMS Integration",
          "Advanced SEO & Analytics Setup",
          "Premium Animations & Interactions"
        ],
        detailedDeliverables: [
          {
            title: "Full Website Build",
            quantity: "5 Core Pages",
            quality: "Pixel-perfect development tailored to your brand",
            time: "3-4 Weeks"
          },
          {
            title: "Content Management",
            quantity: "CMS Integration",
            quality: "Easily edit and add content without coding",
            time: "Included in timeline"
          },
          {
            title: "Performance & SEO",
            quantity: "Technical Foundation",
            quality: "Core Web Vitals optimized, semantic HTML",
            time: "Post-launch setup"
          }
        ],
        isPopular: true,
      },
      {
        name: "Custom Web Application",
        price: "$8,000+",
        originalPrice: "$12,000+",
        discountPercentage: 30,
        period: "/project",
        description: "Complex scalable applications, E-commerce platforms, and custom SaaS MVPs.",
        features: [
          "Unlimited Pages / Custom Features",
          "Full Stack Development",
          "Database Architecture & API Integrations",
          "User Authentication & Roles",
          "E-commerce / Payment Gateway Setup"
        ],
        detailedDeliverables: [
          {
            title: "Architecture & Design",
            quantity: "Complete System Design",
            quality: "Scalable databases, highly secure infrastructure",
            time: "2-4 Weeks (Phase 1)"
          },
          {
            title: "Full Stack Development",
            quantity: "Custom Features",
            quality: "React, Node.js, Next.js, specialized tools",
            time: "8-12 Weeks"
          },
          {
            title: "Testing & Launch",
            quantity: "QA & Deployment",
            quality: "Rigorous testing across devices, CI/CD pipeline",
            time: "Final 2 Weeks"
          }
        ],
        isPopular: false,
      }
    ]
  }
};

export type PricingTableProps = {
  id?: string;
  customPackages?: PricingPackage[];
};

export default function PricingTable({ id, customPackages }: PricingTableProps = {}) {
  const [activeTab, setActiveTab] = useState<keyof typeof pricingData>("growth-marketing");
  const [selectedPackage, setSelectedPackage] = useState<PricingPackage | null>(null);
  const [packageTerms, setPackageTerms] = useState<Record<string, boolean>>({});
  
  const isFourMonthForPkg = (name: string) => packageTerms[name] !== false;
  
  const displayPackages = customPackages || pricingData[activeTab].packages;

  return (
    <div id={id || "pricing-table"} className="w-full relative flex flex-col items-center justify-center z-20 overflow-visible mb-24">
      
      {/* Background glow behind pricing */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.04] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative w-full">
        
        {/* Header */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 font-black text-sm uppercase tracking-widest px-5 py-2 rounded-full">
            <span className="inline-block w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            Limited-Time: Up to 60% OFF All Packages
            <span className="inline-block w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
          </div>
        </div>
        <SectionHeader
          badge="ROI-Focused Capital Allocation"
          titleBase="Strategic Growth"
          titleHighlight="Investments"
          subtitle="Stop buying isolated services. Start deploying capital into high-yield growth engines. No bloated retainers—just completely quantified packages designed to compound your revenue."
          alignment="center"
        />

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
                  {!pkg.isPopular && pkg.discountPercentage && pkg.discountPercentage > 0 && (
                    <div className="absolute -top-3.5 right-4 bg-red-500 text-white font-black text-[10px] uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
                      {pkg.discountPercentage}% OFF
                    </div>
                  )}
                  {pkg.isPopular && pkg.discountPercentage && pkg.discountPercentage > 0 && (
                    <div className="absolute -top-3.5 right-4 bg-red-500 text-white font-black text-[10px] uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
                      {pkg.discountPercentage}% OFF
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-[#f0f0f8]">{pkg.name}</h3>
                    {typeof pkg.price === 'number' && (
                      <div className="flex items-center bg-[#111115] p-0.5 rounded-full border border-white/5 shrink-0">
                        <button 
                          onClick={() => setPackageTerms(p => ({...p, [pkg.name]: false}))}
                          className={`text-[9px] font-bold px-2 py-1 flex items-center rounded-full transition-all duration-300 ${!isFourMonthForPkg(pkg.name) ? 'bg-white/10 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                          1-Mo
                        </button>
                        <button 
                          onClick={() => setPackageTerms(p => ({...p, [pkg.name]: true}))}
                          className={`text-[9px] font-bold px-2 py-1 flex items-center rounded-full transition-all duration-300 ${isFourMonthForPkg(pkg.name) ? 'bg-[var(--accent)] text-black shadow-[0_0_10px_rgba(155,255,110,0.2)]' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                          4-Mo
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-6 min-h-[40px] leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="mb-4 border-b border-white/10 pb-8 flex flex-col gap-1">

                    <div className="flex items-baseline gap-2">
                    {typeof pkg.price === 'number' ? (
                      (() => {
                        const discount = isFourMonthForPkg(pkg.name) ? (pkg.discountPercentage||0) : (pkg.monthlyDiscountPercentage||0);
                        return discount > 0 ? (
                          <>
                            <span className="text-xl font-medium text-gray-500/70 line-through">${pkg.price.toLocaleString()}</span>
                            <span className="text-4xl font-black text-white">${(pkg.price * (1 - discount / 100)).toLocaleString()}</span>
                          </>
                        ) : (
                           <span className="text-4xl font-black text-white">${pkg.price.toLocaleString()}</span>
                        );
                      })()
                    ) : (
                      <>
                        {pkg.originalPrice && <span className="text-xl font-medium text-gray-500/70 line-through">{pkg.originalPrice}</span>}
                        <span className="text-4xl font-black text-white">{pkg.price}</span>
                      </>
                    )}
                    <span className="text-gray-500 font-medium">{pkg.period}</span>
                    </div>
                    {typeof pkg.price === 'number' && (
                      <span className={`text-xs font-medium tracking-wide transition-colors ${isFourMonthForPkg(pkg.name) ? 'text-[var(--accent)]/90' : 'text-red-500'}`}>Requires 4-month commitment for max results</span>
                    )}
                  </div>

                  <ul className="flex flex-col gap-4 mb-10 flex-1">
                    {pkg.features.map((feature, fIdx) => {
                      const isObj = typeof feature === 'object' && feature !== null && 'included' in feature;
                      const isIncluded = isObj ? (feature as any).included : true;
                      const content = isObj ? (feature as any).text : feature;

                      return (
                        <li key={fIdx} className={`flex items-start gap-3 ${!isIncluded ? 'opacity-50' : ''}`}>
                          <svg className={`w-5 h-5 shrink-0 mt-0.5 ${isIncluded ? 'text-[var(--accent)]' : 'text-gray-600'}`} fill="none" viewBox="0 0 24 24">
                            {isIncluded ? (
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            ) : (
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            )}
                          </svg>
                          <span className={`text-[0.95rem] ${isIncluded ? 'text-gray-300' : 'text-gray-500 line-through'}`}>{content}</span>
                        </li>
                      );
                    })}
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
                    {typeof selectedPackage.price === 'number' && (
                      <div className="flex items-center bg-[#111115] p-0.5 rounded-full border border-white/5 ml-auto">
                        <button 
                          onClick={() => setPackageTerms(p => ({...p, [selectedPackage.name]: false}))}
                          className={`text-[10px] font-bold px-3 py-1 rounded-full transition-all duration-300 ${!isFourMonthForPkg(selectedPackage.name) ? 'bg-white/10 text-white shadow-sm' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                          1-Mo
                        </button>
                        <button 
                          onClick={() => setPackageTerms(p => ({...p, [selectedPackage.name]: true}))}
                          className={`text-[10px] font-bold px-3 py-1 rounded-full transition-all duration-300 ${isFourMonthForPkg(selectedPackage.name) ? 'bg-[var(--accent)] text-black shadow-[0_0_10px_rgba(155,255,110,0.2)]' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                          4-Mo
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline gap-2 mt-1">
                    {typeof selectedPackage.price === 'number' ? (
                      (() => {
                        const discount = isFourMonthForPkg(selectedPackage.name) ? (selectedPackage.discountPercentage||0) : (selectedPackage.monthlyDiscountPercentage||0);
                        return discount > 0 ? (
                          <>
                            <span className="text-xl font-medium text-gray-500/70 line-through">${selectedPackage.price.toLocaleString()}</span>
                            <span className="text-3xl font-black text-white">${(selectedPackage.price * (1 - discount / 100)).toLocaleString()}</span>
                          </>
                        ) : (
                           <span className="text-3xl font-black text-white">${selectedPackage.price.toLocaleString()}</span>
                        );
                      })()
                    ) : (
                      <>
                        {selectedPackage.originalPrice && <span className="text-xl font-medium text-gray-500/70 line-through">{selectedPackage.originalPrice}</span>}
                        <span className="text-3xl font-black text-white">{selectedPackage.price}</span>
                      </>
                    )}
                    <span className="text-gray-500 font-medium">{selectedPackage.period}</span>
                    </div>
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
                        {selectedPackage.features.map((feat, i) => {
                          const isObj = typeof feat === 'object' && feat !== null && 'included' in feat;
                          const isIncluded = isObj ? (feat as any).included : true;
                          const content = isObj ? (feat as any).text : feat;
                          return (
                            <li key={i} className={`flex gap-2 text-sm items-start ${!isIncluded ? 'opacity-50 text-gray-500 line-through' : 'text-gray-300'}`}>
                              <span className={isIncluded ? 'text-[var(--accent)]' : 'text-gray-600'}>
                                {isIncluded ? '✦' : '✕'}
                              </span> 
                              <span>{content}</span>
                            </li>
                          );
                        })}
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
    </div>
  );
}
