import type { Metadata } from "next";
import FunnelOptimizationPageClient from "@/components/FunnelOptimizationPageClient";

export const metadata: Metadata = {
  title: "Conversion Funnel Optimization — ablyart",
  description:
    "Stop paying for traffic that doesn't convert. We isolate the leaks in your customer journey and deploy data-driven design changes that dramatically increase your conversion rates.",
};

export default function FunnelOptimizationPage() {
  return <FunnelOptimizationPageClient />;
}
