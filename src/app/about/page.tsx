import type { Metadata } from "next";
import AboutPageClient from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "About AblyArt | Growth Services Team",
  description:
    "Learn about AblyArt, a startup focused on SEO, GEO & AEO, social media management, media buying, and lead generation.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
