import type { Metadata } from "next";
import SocialMediaPageClient from "@/components/SocialMediaPageClient";

export const metadata: Metadata = {
  title: "Social Media & Media Buying — ablyart",
  description:
    "Stop posting into the void. From aggressive performance media buying to creating highly engaging viral organic content, we build your brand's digital megaphone.",
};

export default function SocialMediaPage() {
  return <SocialMediaPageClient />;
}
