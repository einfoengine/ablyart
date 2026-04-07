"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaFigma, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTiktok, 
  FaPinterest, 
  FaSnapchat, 
  FaYoutube,
  FaMailchimp,
  FaHubspot,
  FaSalesforce
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiVercel, 
  SiTypescript, 
  SiFramer,
  SiGoogleads,
  SiZapier
} from "react-icons/si";

const ecosystemItems = [
  { name: "React", icon: <FaReact size={28} />, color: "group-hover:text-[#61DAFB]" },
  { name: "Facebook", icon: <FaFacebook size={28} />, color: "group-hover:text-[#1877F2]" },
  { name: "Next.js", icon: <SiNextdotjs size={28} />, color: "group-hover:text-white" },
  { name: "Instagram", icon: <FaInstagram size={28} />, color: "group-hover:text-[#E4405F]" },
  { name: "TypeScript", icon: <SiTypescript size={28} />, color: "group-hover:text-[#3178C6]" },
  { name: "TikTok", icon: <FaTiktok size={28} />, color: "group-hover:text-white" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} />, color: "group-hover:text-[#06B6D4]" },
  { name: "LinkedIn", icon: <FaLinkedin size={28} />, color: "group-hover:text-[#0A66C2]" },
  { name: "Node.js", icon: <FaNodeJs size={28} />, color: "group-hover:text-[#339933]" },
  { name: "X (Twitter)", icon: <FaXTwitter size={28} />, color: "group-hover:text-white" },
  { name: "Figma", icon: <FaFigma size={28} />, color: "group-hover:text-[#F24E1E]" },
  { name: "Pinterest", icon: <FaPinterest size={28} />, color: "group-hover:text-[#BD081C]" },
  { name: "Framer", icon: <SiFramer size={28} />, color: "group-hover:text-[#0055FF]" },
  { name: "Snapchat", icon: <FaSnapchat size={28} />, color: "group-hover:text-[#FFFC00]" },
  { name: "Vercel", icon: <SiVercel size={28} />, color: "group-hover:text-white" },
  { name: "YouTube", icon: <FaYoutube size={28} />, color: "group-hover:text-[#FF0000]" },
  { name: "Google Ads", icon: <SiGoogleads size={28} />, color: "group-hover:text-[#4285F4]" },
  { name: "Mailchimp", icon: <FaMailchimp size={28} />, color: "group-hover:text-[#FFE01B]" },
  { name: "HubSpot", icon: <FaHubspot size={28} />, color: "group-hover:text-[#FF7A59]" },
  { name: "Salesforce", icon: <FaSalesforce size={28} />, color: "group-hover:text-[#00A1E0]" },
  { name: "Zapier", icon: <SiZapier size={28} />, color: "group-hover:text-[#FF4A00]" },
];

export default function TechAndSocial() {
  return (
    <section className="py-24 md:py-32 relative flex flex-col items-center justify-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[var(--accent)] opacity-[0.03] blur-[120px] rounded-[100%] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 mb-16 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card-bg)] mb-6 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></div>
          <span className="text-sm font-semibold tracking-wider text-[var(--foreground)] uppercase font-mono">Our Ecosystem</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
          Stack & Networks <br />
          <span className="gradient-text italic">We Master</span>
        </h2>
        <p className="text-[var(--muted)] max-w-xl mx-auto text-lg leading-relaxed">
          From cutting-edge engineering tools to the most powerful digital media platforms, we run data-driven solutions where it matters most.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10 mt-4 pb-12">
        {/* The centralized mixed cloud grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {ecosystemItems.map((item, index) => {
            // Generating pseudo-random values based on index to avoid hydration mismatch 
            // and keep it consistent on client side.
            const delay = (index % 5) * 0.3;
            const duration = 3 + (index % 3);
            
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.95, 1.05, 0.95],
                  y: 0,
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: delay,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.15, opacity: 1, zIndex: 10 }}
                className="group relative flex items-center justify-center p-4 md:p-5 rounded-2xl glass-card border border-[var(--border)] bg-white/5 backdrop-blur-xl cursor-pointer hover:border-[var(--accent)] hover:bg-[var(--card-bg)] transition-all duration-300 shadow-lg"
              >
                {/* Tooltip / Label */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mb-2 px-3 py-1 bg-black/80 border border-white/10 rounded-lg text-xs font-medium text-white whitespace-nowrap shadow-xl">
                  {item.name}
                  {/* Small arrow */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-black/80"></div>
                </div>

                <div className={`text-[var(--muted)] transition-colors duration-300 ${item.color}`}>
                  {item.icon}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center relative z-10 flex flex-col items-center w-full">
          <a
            href="#position"
            className="btn-glow inline-flex items-center justify-center font-bold"
            style={{
              padding: "18px 40px",
              fontSize: "1.125rem",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Check Your Position
          </a>
        </div>
      </div>
    </section>
  );
}
