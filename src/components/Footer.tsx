"use client";

import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      setTime(new Date().toLocaleTimeString('en-US', { 
        timeZone: 'America/New_York', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }) + " EST");
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const links = {
    Services: [
      { name: "Lead Generation", href: "/services/lead-generation" },
      { name: "SEO & Content", href: "#" },
      { name: "Paid Ads", href: "#" },
      { name: "Social Media", href: "#" },
      { name: "Web Design", href: "#" },
      { name: "Email Marketing", href: "#" }
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" }
    ],
  };

  return (
    <footer className="w-full px-4 md:px-6 pb-4 md:pb-6 relative z-30 mt-12 md:mt-24">
      {/* Semi-transparent Backdrop Container */}
      <div className="bg-[#0b0b0e]/80 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-16 lg:p-20 relative overflow-hidden flex flex-col group shadow-2xl">
        
        {/* Decorative ambient elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.05] blur-[120px] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6ee7ff] opacity-[0.03] blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        {/* Live Status Bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-10 relative z-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/5 backdrop-blur-md shadow-[0_0_20px_rgba(155,255,110,0.05)]">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_10px_rgba(155,255,110,0.8)]"></div>
            <span className="text-xs md:text-sm font-semibold tracking-wider text-[var(--accent)] uppercase font-mono">
              Accepting New Partners
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md">
            <span className="text-xs md:text-sm font-semibold tracking-wider text-gray-400 uppercase font-mono w-[110px] text-center">
              {time || "SYNCING..."}
            </span>
          </div>
        </motion.div>

        {/* Top Block: CTA & Newsletter */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-12 mb-20 relative z-10 pb-4">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1"
          >
            <h2 className="text-5xl md:text-7xl lg:text-[7vw] leading-[0.9] font-black tracking-tighter text-white mb-6">
              Ready to <span className="gradient-text drop-shadow-[0_0_20px_rgba(155,255,110,0.2)]">grow?</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-400 font-medium tracking-tight max-w-xl">
              Stop losing traffic to competitors. Let's build a predictable revenue engine for your brand.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full xl:w-auto xl:min-w-[480px]"
          >
            {/* Newsletter */}
            <div className="w-full bg-white/[0.01] border border-white/5 hover:border-white/10 rounded-[2rem] p-8 backdrop-blur-md transition-colors relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] opacity-[0.08] blur-[50px] pointer-events-none"></div>
              
              <h3 className="text-white font-extrabold mb-1 tracking-tight text-lg relative z-10">Weekly Growth Insights</h3>
              <p className="text-[0.95rem] text-gray-400 mb-6 font-medium relative z-10">No fluff. Just proven scaling tactics delivered straight to your inbox.</p>
              
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 relative z-10">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-[#060608]/80 border border-white/10 rounded-xl px-4 py-4 text-[0.95rem] outline-none focus:border-[var(--accent)] transition-colors font-semibold text-white placeholder:text-gray-600 shadow-inner"
                />
                <button type="submit" className="bg-white hover:bg-[var(--accent)] text-black px-8 py-4 rounded-xl text-[0.95rem] font-bold shadow-lg transition-all whitespace-nowrap hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50">
                  <span>Join</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Middle Block: Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-16 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col items-start pr-0 md:pr-8"
          >
            <p className="text-gray-400 font-medium leading-relaxed max-w-sm text-[1rem]">
              We execute data-driven digital strategies. From absolute brand identity to surgical paid tracking, we guarantee you dominate the modern digital ecosystem.
            </p>
          </motion.div>

          {/* Core Footer Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-4 w-full"
          >
            {Object.entries(links).map(([title, items]) => (
              <div key={title} className="flex flex-col">
                <h3 className="text-gray-300 font-black uppercase tracking-[0.15em] text-xs mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_rgba(155,255,110,0.5)]"></span>
                  {title}
                </h3>
                <ul className="flex flex-col gap-5">
                  {items.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-400 hover:text-white font-semibold text-[0.95rem] transition-colors relative group inline-flex items-center gap-1">
                        {item.name}
                        <svg className="w-3.5 h-3.5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Big Brand Logo Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center items-center py-10 md:py-16 relative z-10"
        >
          <a href="#" className="flex items-center gap-4 md:gap-6 no-underline group/logo">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 flex items-center justify-center transition-all duration-500 group-hover/logo:scale-105">
              <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <circle cx="49.5" cy="60" r="28" stroke="#2FD27A" strokeWidth="14" fill="none" />
                <rect x="91.5" y="25" width="14" height="70" fill="#2FD27A" />
              </svg>
            </div>
            <span className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-white leading-none transition-colors duration-500">
              Ably<em style={{ fontStyle: "normal", color: "rgba(255,255,255,0.5)" }}>Art</em>
            </span>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col xl:flex-row items-center justify-between gap-6 relative z-10 w-full pt-8"
        >
          <p className="text-gray-500 font-bold text-sm tracking-tight order-3 xl:order-1">
            © {currentYear} ablyart agency. All rights reserved.
          </p>
          
          {/* Socials */}
          <div className="flex items-center gap-4 order-2">
            {[ 
              { name: "X (Twitter)", icon: <FaXTwitter size={18} />, bg: "hover:bg-white hover:text-black" },
              { name: "LinkedIn", icon: <FaLinkedin size={18} />, bg: "hover:bg-[#0A66C2] hover:text-[#fff] hover:border-[#0A66C2]" },
              { name: "Instagram", icon: <FaInstagram size={18} />, bg: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white hover:border-transparent" },
            ].map((social, i) => (
              <a 
                key={i} 
                href="#" 
                aria-label={social.name}
                className={`w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center text-white border border-white/10 transition-all duration-300 ${social.bg} hover:-translate-y-1.5 shadow-lg relative group/btn overflow-hidden`}
              >
                <div className="relative z-10">{social.icon}</div>
              </a>
            ))}
          </div>

          <p className="text-gray-500 font-bold text-sm tracking-tight flex items-center gap-2 order-1 xl:order-3">
            Engineered with <span className="text-[var(--accent)] text-lg animate-pulse drop-shadow-md">♥</span> for scale.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
