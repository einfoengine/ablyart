import type { Metadata } from "next";
import OmnichannelPageClient from "@/components/OmnichannelPageClient";

export const metadata: Metadata = {
  title: "Omnichannel Traffic & Awareness — ablyart",
  description:
    "Get seen everywhere your customers spend time. We combine Social Media, Web Design, and SEO to build an omnipresent brand.",
};

export default function OmnichannelPage() {
  return <OmnichannelPageClient />;
}
