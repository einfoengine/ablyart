"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaSearch, FaUsers, FaProjectDiagram, FaHandshake, FaMousePointer, FaEnvelopeOpenText, FaHeart, FaChartLine, FaSearchLocation, FaSyncAlt } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import PricingTable from "@/components/PricingSection";

type ServiceDetail = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

export type ServiceCategory = {
  title: string;
  focus: string;
  services: ServiceDetail[];
};

const defaultCategories: ServiceCategory[] = [
  {
    title: "Performance Marketing Services",
    focus: "Immediate ROI, high-intent acquisition, and \"pay-for-results\" scaling.",
    services: [
      {
        name: "Paid Search (SEM)",
        description: "Management of Google and Bing Ads to capture users actively searching for your solution.",
        icon: <FaSearch size={22} />
      },
      {
        name: "Paid Social Acquisition",
        description: "Data-driven ad campaigns on Meta, TikTok, and LinkedIn designed to stop the scroll and drive immediate conversions.",
        icon: <FaUsers size={22} />
      },
      {
        name: "Programmatic Advertising",
        description: "Automated ad buying across premium websites to reach your target audience at scale.",
        icon: <FaProjectDiagram size={22} />
      },
      {
        name: "Affiliate & Partner Marketing",
        description: "Building a network of third-party partners who promote your brand for a commission on every sale.",
        icon: <FaHandshake size={22} />
      },
      {
        name: "Landing Page Optimization",
        description: "Technical and creative tweaks to your \"entry pages\" to ensure paid traffic converts at the highest possible rate.",
        icon: <FaMousePointer size={22} />
      }
    ]
  },
  {
    title: "Growth Marketing Services",
    focus: "Long-term retention, customer lifetime value, and full-funnel health.",
    services: [
      {
        name: "Lifecycle & CRM Strategy",
        description: "Automated email and SMS flows that nurture leads and turn one-time buyers into repeat customers.",
        icon: <FaEnvelopeOpenText size={22} />
      },
      {
        name: "Organic Social & Community",
        description: "Building a brand presence and engagement strategy to foster loyalty and lower long-term acquisition costs.",
        icon: <FaHeart size={22} />
      },
      {
        name: "Conversion Rate Optimization (CRO)",
        description: "Constant experimentation across the entire user journey to remove friction and improve the customer experience.",
        icon: <FaChartLine size={22} />
      },
      {
        name: "SEO & Content Strategy",
        description: "Developing organic authority and high-value content to bring in consistent, \"free\" traffic over time.",
        icon: <FaSearchLocation size={22} />
      },
      {
        name: "Retention & Referral Programs",
        description: "Implementing loyalty rewards and \"invite-a-friend\" loops to turn your current users into your biggest growth engine.",
        icon: <FaSyncAlt size={22} />
      }
    ]
  }
];

export type ValueFocusSectionProps = {
  id?: string;
  badge?: string;
  titleBase?: string;
  titleHighlight?: string;
  subtitle?: string;
  categories?: ServiceCategory[];
  hideBottomSection?: boolean;
};

export default function ValueFocusSection({
  id,
  badge = "So, we battle in two grounds",
  titleBase = "Batteling one ground",
  titleHighlight = "is a dumb way to die",
  subtitle = "Over-indexing on paid ads burns cash without building loyalty, while pure organic growth starves you of immediate revenue. To truly scale, you must attack both fronts simultaneously.",
  categories = defaultCategories,
  hideBottomSection = false,
}: ValueFocusSectionProps) {
  return (
    <div id={id} className="w-full z-10 relative flex flex-col items-center">
      {/* WHITE CARD AREA */}
      <div className="w-full px-4 md:px-[40px] pt-10 relative z-20">
        <section className="bg-white rounded-[40px] pt-24 pb-24 md:pt-32 relative flex flex-col items-center justify-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          
          {/* White background specific ambient glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            {/* Section Header */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="text-center mb-16"
            >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6 shadow-sm">
                 <div className="w-2 h-2 rounded-full bg-[var(--accent-dim)] animate-pulse"></div>
                 <span className="text-sm font-semibold tracking-wider text-gray-900 uppercase font-mono">{badge}</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-black">
                 {titleBase} <span className="relative z-10 whitespace-nowrap"><span className="absolute inset-x-0 bottom-2 top-auto h-4 bg-[var(--accent)] -z-10 opacity-70"></span><span className="italic">{titleHighlight}</span></span>
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed inline-block font-medium">
                 {subtitle}
               </p>
            </motion.div>

            {/* 2 Column Categories Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {categories.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="bg-[#0b0b0e] rounded-3xl p-8 md:p-12 border border-[rgba(255,255,255,0.05)] shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex flex-col relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none" />

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    {category.title}
                  </h3>
                  <div className="inline-block px-4 py-2 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 mb-10">
                    <p className="text-[var(--accent)] font-semibold text-sm leading-relaxed">
                      Focus: {category.focus}
                    </p>
                  </div>

                  <div className="space-y-8 flex-1">
                    {category.services.map((service, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-5">
                        <div className="w-12 h-12 shrink-0 bg-white/5 flex items-center justify-center rounded-xl text-gray-300 border border-white/10 shadow-sm">
                          {service.icon}
                        </div>
                        <div className="flex flex-col pt-1">
                          <h4 className="text-lg font-bold text-white mb-2 leading-tight">{service.name}</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="mt-16 text-center relative z-10 flex flex-col items-center"
            >
              <Button
                href="#discovery"
                variant="primary"
                size="lg"
                className="uppercase tracking-[0.05em] font-bold"
              >
                Start it for free →
              </Button>
            </motion.div>
          </div>
        </section>
      </div>

      {/* DARK BACKGROUND AREA (Continues under white box seamlessly) */}
      {!hideBottomSection && (
        <div className="w-full relative flex flex-col items-center pt-24 pb-[120px] md:pb-[140px] z-10">
          {/* Client Logos */}
          <div className="w-full relative flex flex-col items-center">
          <div className="text-center text-xs font-semibold text-[var(--muted)] uppercase tracking-[0.25em] mb-12 w-full">
            Trusted by many Innovative Brands Worldwide
          </div>
          
          <div className="w-full max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-10 md:gap-x-16 gap-y-8 md:gap-y-10">
            {[
              { name: "HBK", src: "/client-HBK.png" },
              { name: "An Naada", src: "/client-an-naada.png" },
              { name: "Hayawear", src: "/client-hayawear.png" },
              { name: "Jadroo", src: "/client-jadroo.png" },
              { name: "Khas Food", src: "/client-khas-food.png" },
              { name: "OS PPharma", src: "/client-os-ppharma.png" },
              { name: "Ultima", src: "/client-ultima.png" },
              { name: "Zaag", src: "/client-zaag.png" },
              { name: "Zaag XD", src: "/client-zaag-xd.png" }
            ].map((logo, idx) => (
              <div 
                key={idx} 
                className="opacity-40 hover:opacity-100 transition-all duration-300 hover:-translate-y-1"
              >
                <Image 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  width={140} 
                  height={60} 
                  className="object-contain h-10 w-auto md:h-12 brightness-0 invert"
                />
              </div>
            ))}
          </div>

          {/* Pricing Table Component rendered beneath the logos */}
          <div className="w-full mt-24 relative z-30">
             <PricingTable />
          </div>
        </div>

        {/* Wavy Static Marquee Ribbon with Moving Text */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden h-[140px] flex translate-y-[60%] z-20 pointer-events-none drop-shadow-[0_0_20px_rgba(155,255,110,0.3)]">
          <div className="absolute left-1/2 -translate-x-1/2 w-[4000px] h-[140px] transform rotate-1 pointer-events-auto">
            <svg width="4000" height="140" viewBox="0 0 4000 140">
              <path
                id="wavy-path-static"
                d="M 0 70 Q 250 10 500 70 T 1000 70 T 1500 70 T 2000 70 T 2500 70 T 3000 70 T 3500 70 T 4000 70"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="52"
              />
              <text fill="#060608" fontSize="20" fontWeight="900" letterSpacing="0.1em">
                <textPath href="#wavy-path-static" startOffset="0" textLength="6000" dominantBaseline="central">
                   {"FOCUS ON YOUR CORE BUSINESS ✦ LET US MANAGE YOUR ONLINE PRESENCE ✦ MONEY BACK GUARANTEE ✦ ".repeat(6)}
                   <animate 
                     attributeName="startOffset" 
                     from="0" 
                     to="-1000" 
                     dur="12s" 
                     repeatCount="indefinite" 
                   />
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
