"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_STEPS = 5;

export default function AuditPotentialModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setStep(1);
      setIsSubmitted(false);
      setIsOpen(true);
    };
    window.addEventListener("openAuditPotentialModal", handleOpen);
    return () => window.removeEventListener("openAuditPotentialModal", handleOpen);
  }, []);

  const nextStep = () => { if (step < TOTAL_STEPS) setStep(step + 1); };
  const prevStep = () => { if (step > 1) setStep(step - 1); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < TOTAL_STEPS) {
      nextStep();
      return;
    }
    
    setIsSubmitted(true);
    
    // Auto close after 4 seconds and reset
    setTimeout(() => {
      setIsOpen(false);
      setTimeout(() => setIsSubmitted(false), 500);
    }, 4000);
  };

  const StepProgress = () => (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
        <div 
          key={i} 
          className={`h-1.5 flex-1 rounded-full ${step > i ? 'bg-[var(--accent)]' : 'bg-white/10'} transition-all`}
        ></div>
      ))}
    </div>
  );

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
            className="relative w-full max-w-4xl bg-[#0b0b0e] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 my-8"
            style={{ maxHeight: '85vh' }}
          >
            {/* Header / Dismiss */}
            <div className="p-6 md:p-8 border-b border-white/5 flex justify-between items-start bg-white/[0.02]">
              <div>
                <h3 className="text-2xl font-bold text-[#f0f0f8]">
                  Audit Your <span className="text-[var(--accent)]">Growth Potential</span>
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Complete this diagnostic to uncover exactly what is throttling your scale.
                </p>
              </div>
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
                  <StepProgress />
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    
                    {step === 1 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-6">
                        <h4 className="text-xl font-bold text-white mb-2">Basic Information</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <label className="flex flex-col gap-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Company Name *</span>
                            <input type="text" required className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                          </label>
                          <label className="flex flex-col gap-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Website URL *</span>
                            <input type="url" required className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                          </label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <label className="flex flex-col gap-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">WhatsApp Number *</span>
                            <input type="tel" required className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                          </label>
                          <label className="flex flex-col gap-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Role</span>
                            <input type="text" className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                          </label>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-6">
                        <h4 className="text-xl font-bold text-white mb-2">Market & Product-Market Fit</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <label className="flex flex-col gap-2">
                            <span className="text-[13px] font-semibold text-gray-400 tracking-wider">Total Addressable Market (TAM)</span>
                            <select className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] appearance-none cursor-pointer">
                              <option value="Local">Local</option>
                              <option value="National">National</option>
                              <option value="Global">Global</option>
                            </select>
                          </label>
                          <label className="flex flex-col gap-2">
                            <span className="text-[13px] font-semibold text-gray-400 tracking-wider">Problem Urgency (1-10)</span>
                            <input type="number" min="1" max="10" placeholder="e.g. 8" className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                          </label>
                        </div>

                        <label className="flex flex-col gap-2">
                          <span className="text-[13px] font-semibold text-gray-400 tracking-wider">Top 3 Competitors & Your Unfair Advantage</span>
                          <textarea rows={3} className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all"></textarea>
                        </label>
                        
                        <label className="flex flex-col gap-2">
                          <span className="text-[13px] font-semibold text-gray-400 tracking-wider">How many "ideal" customers exist who haven't heard of you yet?</span>
                          <input type="text" placeholder="Estimated unused market size" className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                        </label>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-6">
                        <h4 className="text-xl font-bold text-white mb-2">Revenue & Economics</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <label className="flex flex-col gap-2">
                            <span className="text-[13px] font-semibold text-gray-400 tracking-wider">Current Monthly Revenue</span>
                            <input type="text" placeholder="e.g. $50k" className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                          </label>
                          <label className="flex flex-col gap-2">
                            <span className="text-[13px] font-semibold text-gray-400 tracking-wider">Scaling Target</span>
                            <input type="text" placeholder="e.g. 3x in 12 months" className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                          </label>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <label className="flex flex-col gap-2">
                            <span className="text-[13px] font-semibold text-gray-400 tracking-wider">Estimated CAC vs LTV</span>
                            <input type="text" placeholder="e.g. $200 CAC to $5000 LTV" className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                          </label>
                          <label className="flex flex-col gap-2">
                            <span className="text-[13px] font-semibold text-gray-400 tracking-wider">Monthly Churn (%)</span>
                            <input type="text" placeholder="e.g. 5%" className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                          </label>
                        </div>

                        <label className="flex flex-col gap-2">
                          <span className="text-[13px] font-semibold text-gray-400 tracking-wider">If you doubled customers tomorrow, your profit margins would:</span>
                          <select className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] appearance-none cursor-pointer">
                            <option value="Increase (Economies of Scale)">Increase (Economies of Scale)</option>
                            <option value="Decrease (Resource Overload)">Decrease (Heavy Fulfillment Costs)</option>
                            <option value="Stay the Same">Stay the Same</option>
                          </select>
                        </label>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-6">
                        <h4 className="text-xl font-bold text-white mb-2">Scalability & Bottlenecks</h4>
                        
                        <div className="grid grid-cols-1 gap-5">
                          <label className="flex flex-col gap-2">
                            <span className="text-[13px] font-semibold text-gray-400 tracking-wider">If the CEO took a 30-day vacation without a phone, the business would:</span>
                            <select className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] appearance-none cursor-pointer">
                              <option value="Grow">Grow (Team autonomous)</option>
                              <option value="Stall">Stall (Treading water)</option>
                              <option value="Collapse">Collapse (Fires everywhere)</option>
                            </select>
                          </label>
                          
                          <label className="flex flex-col gap-2">
                            <span className="text-[13px] font-semibold text-gray-400 tracking-wider">Which parts of your fulfillment are still 100% manual?</span>
                            <input type="text" className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                          </label>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <label className="flex flex-col gap-2">
                              <span className="text-[13px] font-semibold text-gray-400 tracking-wider">Ramp-up Time for New Hires?</span>
                              <input type="text" placeholder="e.g. 3 Months" className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                            </label>
                            <label className="flex flex-col gap-2">
                              <span className="text-[13px] font-semibold text-gray-400 tracking-wider">Any "Single Point of Failure" Employees?</span>
                              <input type="text" placeholder="e.g. Lead Dev or CEO" className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                            </label>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 5 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-6">
                        <h4 className="text-xl font-bold text-white mb-2">Sales, Marketing & Resilience</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <label className="flex flex-col gap-2">
                            <span className="text-[13px] font-semibold text-gray-400 tracking-wider">Marketing Budget (Next 6 Mo)</span>
                            <input type="text" placeholder="$" className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all" />
                          </label>
                          <label className="flex flex-col gap-2">
                            <span className="text-[13px] font-semibold text-gray-400 tracking-wider">Primary Lead Source</span>
                            <select className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] appearance-none cursor-pointer">
                              <option value="Predictable">Predictable (Ads, SEO, Cold Outbound)</option>
                              <option value="Unpredictable">Unpredictable (Referrals, Luck)</option>
                            </select>
                          </label>
                        </div>
                        
                        <label className="flex flex-col gap-2">
                          <span className="text-[13px] font-semibold text-gray-400 tracking-wider">If your primary marketing channel vanished, how would you get customers?</span>
                          <textarea rows={2} className="w-full bg-[#13131a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent)] transition-all"></textarea>
                        </label>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <label className="flex items-center gap-3 bg-[#13131a] border border-white/10 rounded-xl p-4">
                            <input type="checkbox" className="w-5 h-5 accent-[var(--accent)]" />
                            <span className="text-sm text-gray-300">Are 90% of core SOPs documented?</span>
                          </label>
                          <label className="flex items-center gap-3 bg-[#13131a] border border-white/10 rounded-xl p-4">
                            <input type="checkbox" className="w-5 h-5 accent-[var(--accent)]" />
                            <span className="text-sm text-gray-300">Is data "Clean" (Single truth source)?</span>
                          </label>
                        </div>

                      </motion.div>
                    )}

                    <div className="flex gap-4 mt-6 pt-6 border-t border-white/10">
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={prevStep}
                          className="bg-white/5 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-all cursor-pointer"
                        >
                          Back
                        </button>
                      )}
                      <button
                        type="submit"
                        className="flex-1 bg-[var(--accent)] text-black font-bold py-4 px-8 rounded-xl hover:bg-[#86ea5c] shadow-[0_0_20px_rgba(155,255,110,0.2)] transition-all tracking-wide text-[1.1rem]"
                      >
                        {step === TOTAL_STEPS ? "Submit Comprehensive Audit" : "Continue to Next Section"}
                      </button>
                    </div>
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
                  <h3 className="text-3xl font-bold text-white mb-4">Audit Data Received!</h3>
                  <p className="text-gray-300 text-lg max-w-[500px]">
                    Thank you. Based on these critical metrics, our directors are putting together a custom scalability gap analysis. We will reach out to you shortly.
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
