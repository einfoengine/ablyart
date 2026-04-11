import type { Metadata } from "next";
import HolisticMarketingPageClient from "@/components/HolisticMarketingPageClient";

export const metadata: Metadata = {
  title: "Holistic Digital Marketing — ablyart",
  description:
    "Stop juggling multiple agencies. We become your fully outsourced digital department, seamlessly harmonizing web design, SEO, social media, and paid ads to architect exponential expansion.",
};

export default function HolisticMarketingPage() {
  return <HolisticMarketingPageClient />;
}
