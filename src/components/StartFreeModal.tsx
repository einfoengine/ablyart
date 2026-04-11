"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StartFreeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openStartFreeModal", handleOpen);
    return () => window.removeEventListener("openStartFreeModal", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Auto close after 4 seconds and reset
    setTimeout(() => {
      setIsOpen(false);
      setTimeout(() => setIsSubmitted(false), 500); // reset after exit animation
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto w-full min-h-screen" style={{ pointerEvents: 'auto' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#060608]/90 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0b0b0e] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 my-8"
            style={{ maxHeight: '85vh' }}
          >
            {/* Header / Dismiss */}
            <div className="p-6 border-b border-white/5 flex justify-between items-start bg-white/[0.02]">
              <h3 className="text-2xl font-bold text-[#f0f0f8]">
                Start It <span className="text-[var(--accent)]">For Free</span>
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors border border-white/5"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scrollbar">
              
              {!isSubmitted ? (
                <>
                  <div className="bg-[var(--accent)]/5 border border-[var(--accent)]/20 p-5 rounded-2xl mb-8">
                    <p className="text-[0.95rem] text-gray-300 leading-relaxed">
                      <strong>Disclaimer:</strong> We do a free primary audit to check your growth potential and your online presence. We give you a free report, describing what you need to do. We only let potential and scalable startups get in our private groups, where we give various support, tips and a bunch of free supports.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Facebook / Social Links *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="https://facebook.com/yourbrand"
                        className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Website URL</label>
                      <input 
                        type="url" 
                        placeholder="https://yourwebsite.com"
                        className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Monthly Revenue Range</label>
                        <select className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all appearance-none cursor-pointer">
                          <option value="" disabled selected>Select an option</option>
                          <option value="Pre-revenue">Pre-revenue</option>
                          <option value="$0 - $10k">$0 - $10,000</option>
                          <option value="$10k - $50k">$10,000 - $50,000</option>
                          <option value="$50k - $200k">$50,000 - $200,000</option>
                          <option value="$200k+">$200,000+</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Marketing Budget (Next 6 Mo)</label>
                        <input 
                          type="text" 
                          placeholder="e.g. $10,000"
                          className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">How many times do you want to scale?</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 5x in 12 months"
                        className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-4 w-full bg-[var(--accent)] text-black font-bold py-4 px-8 rounded-xl hover:bg-[#86ea5c] shadow-[0_0_20px_rgba(155,255,110,0.2)] transition-all tracking-wide text-[1.1rem]"
                    >
                      Request Free Audit
                    </button>
                  </form>
                </>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <div className="w-20 h-20 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full flex items-center justify-center mb-6 border border-[var(--accent)]/30 shadow-[0_0_30px_rgba(155,255,110,0.2)]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Request Received!</h3>
                  <p className="text-gray-300 text-lg max-w-[400px]">
                    Thank you! In a short time you are gonna get a report and roadmap from us directly to your WhatsApp.
                  </p>
                </motion.div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
