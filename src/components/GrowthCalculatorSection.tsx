"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { FaUsers, FaPercentage, FaShoppingCart, FaSync } from "react-icons/fa";

export default function GrowthCalculatorSection() {
  const [traffic, setTraffic] = useState(10000);
  const [conversionRate, setConversionRate] = useState(2.0);
  const [aov, setAov] = useState(50);
  const [frequency, setFrequency] = useState(1.5);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculations
  const annualTraffic = traffic * 12;
  const annualCustomers = annualTraffic * (conversionRate / 100);
  const annualOrders = annualCustomers * frequency;
  const annualRevenue = annualOrders * aov;

  // Formatting helpers
  const formatNumber = (num: number) => Math.round(num).toLocaleString();
  const formatCurrency = (num: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-[var(--background)] relative z-20 relative overflow-hidden border-b border-white/5">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#6ee7ff]/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Measure Your Potential"
          titleBase="Calculate Your "
          titleHighlight="Growth Potential."
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
                  <FaUsers className="text-[var(--accent)]" /> Monthly Traffic
                </label>
                <div className="text-xl font-bold bg-white/5 px-4 py-1 rounded-lg tabular-nums">
                  {formatNumber(traffic)}
                </div>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="500000" 
                step="1000"
                value={traffic} 
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full accent-[var(--accent)] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>1K</span>
                <span>500K+</span>
              </div>
            </div>

            {/* Conversion Rate Control */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  <FaPercentage className="text-[var(--accent)]" /> Conversion Rate
                </label>
                <div className="text-xl font-bold bg-white/5 px-4 py-1 rounded-lg tabular-nums">
                  {conversionRate.toFixed(1)}%
                </div>
              </div>
              <input 
                type="range" 
                min="0.1" 
                max="10" 
                step="0.1"
                value={conversionRate} 
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full accent-[var(--accent)] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>0.1%</span>
                <span>10%</span>
              </div>
            </div>

            {/* AOV Control */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  <FaShoppingCart className="text-[var(--accent)]" /> Average Order Value
                </label>
                <div className="text-xl font-bold bg-white/5 px-4 py-1 rounded-lg tabular-nums">
                  ${formatNumber(aov)}
                </div>
              </div>
              <input 
                type="range" 
                min="10" 
                max="2000" 
                step="10"
                value={aov} 
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full accent-[var(--accent)] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>$10</span>
                <span>$2,000+</span>
              </div>
            </div>

            {/* Purchase Frequency Control */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  <FaSync className="text-[var(--accent)]" /> Purchase Frequency
                </label>
                <div className="text-xl font-bold bg-white/5 px-4 py-1 rounded-lg tabular-nums">
                  {frequency.toFixed(1)} <span className="text-sm font-medium text-gray-400">x / year</span>
                </div>
              </div>
              <input 
                type="range" 
                min="1" 
                max="12" 
                step="0.25"
                value={frequency} 
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-full accent-[var(--accent)] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>1x</span>
                <span>12x</span>
              </div>
            </div>

          </div>

          {/* Results - Right Side */}
          <div className="flex-[0.8] relative flex flex-col justify-center">
             <motion.div 
               key={annualRevenue}
               initial={{ scale: 0.95, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.3 }}
               className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden"
             >
                {/* Floating Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent)]/20 blur-[60px] rounded-full mix-blend-screen" />
                
                <h4 className="text-gray-400 font-semibold mb-2 uppercase tracking-wide text-sm">Potential Annual Revenue</h4>
                <div className="text-5xl md:text-6xl font-black text-white tabular-nums tracking-tighter mb-8">
                  {formatCurrency(annualRevenue)}
                </div>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-end">
                    <span className="text-gray-400 text-sm font-medium">Annual Traffic</span>
                    <span className="text-white font-bold text-lg tabular-nums">{formatNumber(annualTraffic)}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-gray-400 text-sm font-medium">Annual Customers</span>
                    <span className="text-white font-bold text-lg tabular-nums">{formatNumber(annualCustomers)}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-gray-400 text-sm font-medium">Annual Orders</span>
                    <span className="text-white font-bold text-lg tabular-nums">{formatNumber(annualOrders)}</span>
                  </div>
                </div>

             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
