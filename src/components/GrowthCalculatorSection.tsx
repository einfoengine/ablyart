"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { FaUsers, FaPercentage, FaShoppingCart, FaSync } from "react-icons/fa";

export default function GrowthCalculatorSection() {
  const [trafficGrowth, setTrafficGrowth] = useState(30);
  const [conversionGrowth, setConversionGrowth] = useState(25);
  const [aovGrowth, setAovGrowth] = useState(20);
  const [frequencyGrowth, setFrequencyGrowth] = useState(15);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculations
  const trafficMult = 1 + trafficGrowth / 100;
  const conversionMult = 1 + conversionGrowth / 100;
  const aovMult = 1 + aovGrowth / 100;
  const frequencyMult = 1 + frequencyGrowth / 100;
  
  const growthMultiplier = trafficMult * conversionMult * aovMult * frequencyMult;

  if (!mounted) return null;

  return (
    <section className="py-20 bg-[var(--background)] relative z-20 relative overflow-hidden border-b border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#6ee7ff]/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Measure Your Potential"
          titleBase="Here is how "
          titleHighlight="we plan the growth."
          subtitle="Growth = Traffic × Conversion Rate × Average Order Value × Purchase Frequency"
          alignment="center"
        />

        <div className="mt-12 bg-[#0a0a0c]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 text-white md:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Controls - Left Side */}
          <div className="flex-1 space-y-10">
            {/* Traffic Control */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  <FaUsers className="text-[var(--accent)]" /> Increase Traffic
                </label>
                <div className="text-xl font-bold bg-white/5 px-4 py-1 rounded-lg tabular-nums">
                  +{trafficGrowth}%
                </div>
              </div>
              <input 
                type="range" 
                min="0" 
                max="200" 
                step="5"
                value={trafficGrowth} 
                onChange={(e) => setTrafficGrowth(Number(e.target.value))}
                className="w-full accent-[var(--accent)] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>0%</span>
                <span>200%</span>
              </div>
            </div>

            {/* Conversion Rate Control */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  <FaPercentage className="text-[var(--accent)]" /> Improve Conversion Rate
                </label>
                <div className="text-xl font-bold bg-white/5 px-4 py-1 rounded-lg tabular-nums">
                  +{conversionGrowth}%
                </div>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="1"
                value={conversionGrowth} 
                onChange={(e) => setConversionGrowth(Number(e.target.value))}
                className="w-full accent-[var(--accent)] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>

            {/* AOV Control */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  <FaShoppingCart className="text-[var(--accent)]" /> Increase Average Order Value
                </label>
                <div className="text-xl font-bold bg-white/5 px-4 py-1 rounded-lg tabular-nums">
                  +{aovGrowth}%
                </div>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="1"
                value={aovGrowth} 
                onChange={(e) => setAovGrowth(Number(e.target.value))}
                className="w-full accent-[var(--accent)] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Purchase Frequency Control */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  <FaSync className="text-[var(--accent)]" /> Increase Purchase Frequency
                </label>
                <div className="text-xl font-bold bg-white/5 px-4 py-1 rounded-lg tabular-nums">
                  +{frequencyGrowth}%
                </div>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="1"
                value={frequencyGrowth} 
                onChange={(e) => setFrequencyGrowth(Number(e.target.value))}
                className="w-full accent-[var(--accent)] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>0%</span>
                <span>100%</span>
              </div>
            </div>

          </div>

          {/* Results - Right Side */}
          <div className="flex-[0.8] relative flex flex-col justify-center">
             <motion.div 
               initial={{ scale: 0.95, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.2 }}
               className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden"
             >
                {/* Floating Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent)]/20 blur-[60px] rounded-full mix-blend-screen" />
                
                <h4 className="text-gray-400 font-semibold mb-2 uppercase tracking-wide text-sm">Potential Business Growth</h4>
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6ee7ff] tabular-nums tracking-tighter mb-4">
                  {growthMultiplier.toFixed(2)}x
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Small, incremental improvements across multiple areas of your business create a <strong className="text-white">massive compounding effect</strong> on your total growth.
                </p>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm font-medium">Current State</span>
                    <span className="text-white font-semibold text-md">1.00x Base</span>
                  </div>
                  <div className="flex justify-between items-center text-[var(--accent)]">
                    <span className="text-[var(--accent)] text-sm font-bold">New Trajectory</span>
                    <span className="font-bold text-lg tabular-nums">+{((growthMultiplier - 1) * 100).toFixed(0)}% Growth</span>
                  </div>
                </div>

             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
