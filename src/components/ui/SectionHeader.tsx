"use client";

import React from 'react';
import { motion } from 'framer-motion';

export interface SectionHeaderProps {
  badge?: string;
  titleBase?: string;
  titleHighlight?: string;
  subtitle?: React.ReactNode;
  alignment?: 'center' | 'left' | 'split';
  className?: string;
  colorScheme?: 'default' | 'danger';
}

export function SectionHeader({
  badge,
  titleBase,
  titleHighlight,
  subtitle,
  alignment = 'center',
  className = '',
  colorScheme = 'default',
}: SectionHeaderProps) {
  
  const isDanger = colorScheme === 'danger';
  const pulseDotClass = isDanger ? 'bg-red-500' : 'bg-[var(--accent)]';
  const badgeWrapClass = isDanger 
    ? 'border-red-500/20 bg-red-500/5 text-red-400' 
    : 'border-white/10 bg-white/[0.02] text-gray-300';
  const highlightClass = isDanger ? 'text-red-500 italic flex-shrink-0' : 'gradient-text italic';

  if (alignment === 'split') {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: "1200px", margin: "0 auto", marginBottom: "40px" }}
        className={`flex flex-col w-full ${className}`}
      >
        {badge && (
          <div style={{ display: "inline-flex", marginBottom: "20px" }}>
            <span className={`inline-flex items-center gap-2 px-4 py-[6px] rounded-full border shadow-sm text-xs md:text-sm font-semibold tracking-wider uppercase font-mono ${badgeWrapClass}`}>
              <div className={`w-2 h-2 rounded-full animate-pulse ${pulseDotClass}`}></div>
              {badge}
            </span>
          </div>
        )}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
          <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1}} className="text-white max-w-xl">
            {titleBase} {titleHighlight && <span className={highlightClass}>{titleHighlight}</span>}
          </h2>
          {subtitle && (
            <p style={{ fontSize: "0.95rem", color: "rgba(240,240,248,0.5)", maxWidth: "340px", lineHeight: 1.8 }}>
              {subtitle}
            </p>
          )}
        </div>
      </motion.div>
    );
  }

  const alignClass = alignment === 'center' ? 'text-center flex flex-col items-center' : 'text-left flex flex-col items-start';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${alignClass} w-full ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-[6px] rounded-full border mb-6 shadow-sm ${badgeWrapClass}`}>
          <div className={`w-2 h-2 rounded-full animate-pulse ${pulseDotClass}`}></div>
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase font-mono">
            {badge}
          </span>
        </div>
      )}
      {(titleBase || titleHighlight) && (
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white s">
          {titleBase} {titleHighlight && <span className={highlightClass}>{titleHighlight}</span>}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-gray-400 leading-relaxed text-[1.05rem] max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
