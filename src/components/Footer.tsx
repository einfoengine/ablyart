"use client";

import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Services: ["SEO & Content", "Paid Ads", "Social Media", "Web Design", "Email Marketing"],
    Company: ["About Us", "Case Studies", "Careers", "Blog", "Press"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="w-full px-4 md:px-6 pb-4 md:pb-6 relative z-30 mt-12 md:mt-24">
      <div className="bg-[#0b0b0e] border border-white/10 rounded-[40px] p-10 md:p-16 lg:p-24 relative overflow-hidden flex flex-col">
        
        {/* Decorative ambient elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6ee7ff] opacity-[0.02] blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

        {/* Massive Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative z-10"
        >
          <h2 className="text-5xl md:text-7xl lg:text-[8vw] leading-[0.9] font-black tracking-tighter text-white mb-6">
            Ready to <span className="gradient-text drop-shadow-[0_0_20px_rgba(155,255,110,0.2)]">grow?</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-medium tracking-tight">
            Stop losing traffic to competitors. Let's build a predictable revenue engine for your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20 relative z-10 w-full">
          {/* Brand Info & Newsletter */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-start pr-0 md:pr-8"
          >
            <a href="#" className="flex items-center gap-3 mb-6 no-underline bg-white/[0.02] border border-white/5 pr-5 py-1 rounded-2xl hover:bg-white/[0.05] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#111116] border border-white/10 flex items-center justify-center shadow-lg">
                <span className="text-xl font-black text-[var(--accent)]">A</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">ablyart.</span>
            </a>
            
            <p className="text-gray-400 font-medium leading-relaxed max-w-sm mb-10 text-[1rem]">
              We execute data-driven digital strategies. From brand identity to paid tracking, we guarantee you dominate the digital ecosystem.
            </p>
            
            {/* Newsletter */}
            <div className="w-full max-w-md bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-md">
              <h3 className="text-white font-extrabold mb-1 tracking-tight text-lg">Weekly Growth Insights</h3>
              <p className="text-sm text-gray-400 mb-6 font-medium">No fluff. Just proven scaling tactics.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-[#060608] border border-white/10 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[var(--accent)] transition-colors font-semibold text-white placeholder:text-gray-600 shadow-inner"
                />
                <button type="submit" className="bg-[var(--accent)] hover:bg-[#86ea5c] text-black px-6 py-3.5 rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(155,255,110,0.2)] transition-all whitespace-nowrap hover:scale-[1.02]">
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>

          {/* Core Footer Links */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-4 mt-4 lg:mt-0 lg:ml-auto w-full"
          >
            {Object.entries(links).map(([title, items]) => (
              <div key={title} className="flex flex-col">
                <h3 className="text-gray-300 font-black uppercase tracking-[0.15em] text-xs mb-8 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_10px_rgba(155,255,110,0.5)]"></span>
                  {title}
                </h3>
                <ul className="flex flex-col gap-6">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white font-semibold text-[0.95rem] transition-colors relative group inline-flex items-center gap-1">
                        {item}
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

        {/* Thick Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* Bottom Metadata Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 w-full"
        >
          <p className="text-gray-500 font-bold text-sm tracking-tight order-3 md:order-1">
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
                className={`w-12 h-12 rounded-full bg-white/[0.03] flex items-center justify-center text-white border border-white/10 transition-all duration-300 ${social.bg} hover:-translate-y-1.5 shadow-lg`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-gray-500 font-bold text-sm tracking-tight flex items-center gap-2 order-1 md:order-3">
            Engineered with <span className="text-[var(--accent)] text-lg animate-pulse drop-shadow-md">♥</span> for scale.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
