"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function getNextWebinarDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  
  // Set to the 25th of every month
  const target = new Date(year, month, 25, 14, 0, 0); 
  if (now.getTime() > target.getTime()) {
    target.setMonth(month + 1);
  }
  return target;
}

export default function WebinarTicker() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const targetDate = getNextWebinarDate().getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1 }}
          className="fixed bottom-0 left-0 w-full z-[110] border-t border-[var(--border)] overflow-hidden"
          style={{ background: "rgba(6, 6, 8, 0.95)", backdropFilter: "blur(20px)" }}
        >
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9bff6e] to-transparent opacity-50"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-[60px] flex items-center justify-between text-sm">
            <div className="flex items-center gap-3 z-50">
              <span className="w-2 h-2 rounded-full bg-[#9bff6e] animate-pulse shrink-0"></span>
              <span className="text-[#f0f0f8] font-bold hidden md:inline tracking-tight">
                FREE MASTERCLASS:
              </span>
              <span className="text-[var(--muted)] font-medium truncate max-w-[180px] sm:max-w-none">
                Join our FB Group to enter the monthly webinar.
              </span>
            </div>

            <div className="flex items-center gap-4 md:gap-6 shrink-0">
              <div className="flex items-center gap-[4px] font-mono font-bold text-[#9bff6e] tracking-tight">
                <span>{String(timeLeft.days).padStart(2, '0')}d</span>
                <span className="opacity-50">:</span>
                <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
                <span className="opacity-50">:</span>
                <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
                <span className="opacity-50 hidden sm:inline">:</span>
                <span className="hidden sm:inline">{String(timeLeft.seconds).padStart(2, '0')}s</span>
              </div>
              
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#9bff6e] text-[#060608] px-5 py-2 rounded-full font-bold text-[0.75rem] uppercase tracking-wider hover:scale-105 transition-transform"
              >
                Join Now
              </a>

              <button 
                onClick={() => setVisible(false)}
                className="text-[var(--muted)] hover:text-white shrink-0 ml-1"
                aria-label="Dismiss"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
