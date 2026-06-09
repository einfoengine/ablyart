import type { Metadata } from "next";
import WorkPageClient from "@/components/WorkPageClient";

export const metadata: Metadata = {
  title: "Founder-Backed Case Studies | AblyArt",
  description:
    "Explore founder-backed AblyArt case studies across media buying, lead generation, SEO, social media, and conversion-focused websites.",
};

export default function CaseStudiesPage() {
  return <WorkPageClient />;
}
