"use client";

import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    category: "Growth Strategy",
    date: "Aug 24, 2024",
    title: "How to Build a High-Converting Marketing Funnel in 2024",
    excerpt: "Discover the critical components of a modern, data-driven marketing funnel that consistently generates qualified leads.",
    imageGrad: "linear-gradient(135deg, rgba(155,255,110,0.15) 0%, rgba(155,255,110,0.02) 100%)",
  },
  {
    category: "Paid Media",
    date: "Aug 12, 2024",
    title: "The Death of Traditional ROAS: Scaling Ad Spend Today",
    excerpt: "Why relying solely on platform ROAS is killing your scale, and the blended metrics you should be tracking instead.",
    imageGrad: "linear-gradient(135deg, rgba(110,231,255,0.15) 0%, rgba(110,231,255,0.02) 100%)",
  },
  {
    category: "Creative Content",
    date: "Jul 30, 2024",
    title: "Anatomy of a Winning TikTok Creative Strategy",
    excerpt: "Breaking down the hook, story, and offer structures that actually stop the scroll and drive action on short-form video.",
    imageGrad: "linear-gradient(135deg, rgba(176,158,255,0.15) 0%, rgba(176,158,255,0.02) 100%)",
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 relative flex flex-col items-center justify-center z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--card-bg)] mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></div>
            <span className="text-sm font-semibold tracking-wider text-[var(--foreground)] uppercase font-mono">Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Our Latest <span className="gradient-text italic">Thoughts</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto text-lg leading-relaxed inline-block font-medium">
            Actionable strategies, growth frameworks, and industry trends straight from our experts.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#0b0b0e] rounded-3xl overflow-hidden group transition-all duration-500 hover:scale-[1.02] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.15)] shadow-lg flex flex-col cursor-pointer"
            >
              {/* Image Placeholder */}
              <div 
                className="w-full h-48 sm:h-56 relative overflow-hidden"
                style={{ background: post.imageGrad }}
              >
                {/* Visual texture for the placeholder */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500" 
                     style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '16px 16px' }}>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                    {post.category}
                  </span>
                  <span className="text-xs font-medium text-gray-500">
                    {post.date}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#f0f0f8] tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#f0f0f8] group-hover:gap-4 transition-all duration-300">
                    Read Article 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[var(--accent)]">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <a
            href="#blog"
            className="btn-outline inline-flex items-center justify-center font-bold"
            style={{
              padding: "16px 36px",
              fontSize: "1rem",
              textDecoration: "none",
            }}
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
