"use client";

import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Services: ["SEO & Content", "Paid Ads", "Social Media", "Web Design", "Email Marketing"],
    Company: ["About Us", "Case Studies", "Careers", "Blog", "Press"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="w-full px-4 md:px-6 pb-4 md:pb-6 relative z-30 mt-12 md:mt-24">
      <div className="bg-white rounded-[40px] p-10 md:p-16 lg:p-24 relative overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)] flex flex-col">
        
        {/* Decorative ambient elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#9bff6e] to-[#6ee7ff] opacity-[0.15] blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        {/* Massive Call to Action */}
        <div className="mb-20 relative z-10">
          <h2 className="text-5xl md:text-7xl lg:text-[8vw] leading-[0.9] font-black tracking-tighter text-black mb-6">
            Ready to <span className="text-[#9bff6e] drop-shadow-md">grow?</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-500 max-w-2xl font-medium tracking-tight">
            Stop losing traffic to competitors. Let's build a predictable revenue engine for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20 relative z-10 w-full">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 md:pr-8">
            <a href="#" className="flex items-center gap-3 mb-6 no-underline bg-gray-50 pr-4 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center shadow-md">
                <span className="text-xl font-black text-[#9bff6e]">A</span>
              </div>
              <span className="text-2xl font-black text-black tracking-tight">ablyart.</span>
            </a>
            
            <p className="text-gray-500 font-medium leading-relaxed max-w-sm mb-10 text-[0.95rem]">
              We execute data-driven digital strategies — from brand identity to paid tracking, we guarantee you dominate the digital ecosystem.
            </p>
            
            {/* Newsletter */}
            <div className="w-full max-w-md bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <h4 className="text-black font-extrabold mb-1 tracking-tight">Weekly Growth Insights</h4>
              <p className="text-sm text-gray-500 mb-5 font-medium">No fluff. Just proven scaling tactics.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#000] transition-colors font-semibold text-black placeholder:text-gray-400"
                />
                <button type="submit" className="bg-black hover:bg-[#9bff6e] hover:text-black text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Core Footer Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-4 mt-4 lg:mt-0 lg:ml-auto w-full">
            {Object.entries(links).map(([title, items]) => (
              <div key={title} className="flex flex-col">
                <h4 className="text-black font-black uppercase tracking-[0.15em] text-xs mb-8 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9bff6e]"></span>
                  {title}
                </h4>
                <ul className="flex flex-col gap-5">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-500 hover:text-black font-semibold text-[0.95rem] transition-colors relative group inline-flex items-center gap-1">
                        {item}
                        <svg className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#9bff6e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Thick Divider */}
        <div className="h-[2px] w-full bg-gray-100 mb-8" />

        {/* Bottom Metadata Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 w-full">
          <p className="text-gray-500 font-bold text-sm tracking-tight">
            © {currentYear} ablyart agency. All rights reserved.
          </p>
          
          {/* Socials */}
          <div className="flex items-center gap-3">
            {[ 
              { icon: <FaXTwitter size={18} />, bg: "hover:bg-black hover:text-white" },
              { icon: <FaLinkedin size={18} />, bg: "hover:bg-[#0A66C2] hover:text-[#fff]" },
              { icon: <FaInstagram size={18} />, bg: "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white border-transparent" },
            ].map((social, i) => (
              <a 
                key={i} 
                href="#" 
                className={`w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-black border border-gray-200 transition-all duration-300 ${social.bg} hover:border-transparent hover:-translate-y-1 shadow-sm`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-gray-400 font-bold text-sm tracking-tight flex items-center gap-1.5">
            Engineered with <span className="text-[#9bff6e] text-lg">♥</span> for scale.
          </p>
        </div>

      </div>
    </footer>
  );
}
