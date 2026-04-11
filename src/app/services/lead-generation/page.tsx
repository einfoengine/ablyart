import type { Metadata } from "next";
import LeadGenPageClient from "@/components/LeadGenPageClient";

export const metadata: Metadata = {
  title: "Strategic Lead Generation — ablyart",
  description:
    "Stop relying on unpredictable referrals. We build highly efficient, predictable inbound funnels and outbound infrastructures to engineer qualified appointments at scale.",
};

export default function LeadGenPage() {
  return <LeadGenPageClient />;
}
