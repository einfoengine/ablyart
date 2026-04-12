"use client";

import React from "react";
import { 
  FaReact, FaNodeJs, FaFigma, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaMailchimp, FaHubspot, FaSalesforce
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss, SiVercel, SiTypescript, SiFramer, SiGoogleads, SiZapier } from "react-icons/si";

const ecosystemItems = [
  { name: "React", icon: <FaReact size={32} /> },
  { name: "Facebook", icon: <FaFacebook size={32} /> },
  { name: "Next.js", icon: <SiNextdotjs size={32} /> },
  { name: "Instagram", icon: <FaInstagram size={32} /> },
  { name: "TypeScript", icon: <SiTypescript size={32} /> },
  { name: "TikTok", icon: <FaTiktok size={32} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
  { name: "LinkedIn", icon: <FaLinkedin size={32} /> },
  { name: "Node.js", icon: <FaNodeJs size={32} /> },
  { name: "X (Twitter)", icon: <FaXTwitter size={32} /> },
  { name: "Figma", icon: <FaFigma size={32} /> },
  { name: "Google Ads", icon: <SiGoogleads size={32} /> },
  { name: "HubSpot", icon: <FaHubspot size={32} /> },
  { name: "Salesforce", icon: <FaSalesforce size={32} /> },
  { name: "Zapier", icon: <SiZapier size={32} /> },
];

export default function TechAndSocial() {
  const marqueeItems = [...ecosystemItems, ...ecosystemItems]; // Duplicate for seamless loop

  return (
    <section className="py-12 overflow-hidden bg-transparent">
      <div className="w-full flex animate-marquee-left items-center opacity-[0.55] hover:opacity-100 transition-opacity duration-300">
        {marqueeItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 mx-8 text-[var(--muted)] hover:text-[#f0f0f8]">
            {item.icon}
            <span className="text-xl font-bold tracking-tight whitespace-nowrap hidden md:block">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
