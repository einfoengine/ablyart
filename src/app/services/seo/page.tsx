import type { Metadata } from "next";
import SeoPageClient from "@/components/SeoPageClient";

export const metadata: Metadata = {
  title: "Search Engine Domination — ablyart",
  description:
    "Capture the highest-converting traffic on the internet. We deploy elite technical SEO, strategic content clustering, and high-authority link building to rank you #1 when your customers are ready to buy.",
};

export default function SeoPage() {
  return <SeoPageClient />;
}
