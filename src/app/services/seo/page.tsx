import type { Metadata } from "next";
import SeoPageClient from "@/components/SeoPageClient";

export const metadata: Metadata = {
  title: "SEO & PPC Domination — ablyart",
  description:
    "Capture high-intent traffic instantly and organically. We deploy elite technical SEO, strategic content clustering, and aggressive paid media (Google Ads) to monopolize your industry's search volume.",
};

export default function SeoPage() {
  return <SeoPageClient />;
}
