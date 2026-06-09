import type { Metadata } from "next";
import SocialMediaPageClient from "@/components/SocialMediaPageClient";

export const metadata: Metadata = {
  title: "Media Buying - AblyArt",
  description:
    "Run paid campaigns that bring qualified traffic through AblyArt's media buying and performance marketing support.",
};

export default function MediaBuyingPage() {
  return <SocialMediaPageClient />;
}
