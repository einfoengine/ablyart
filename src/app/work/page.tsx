import type { Metadata } from "next";
import WorkPageClient from "@/components/WorkPageClient";

export const metadata: Metadata = {
  title: "Our Work — ablyart",
  description:
    "Explore ablyart's portfolio of case studies — real results, real brands. See how we drive measurable growth through strategic marketing and bold creative.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
