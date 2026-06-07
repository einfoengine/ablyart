import type { Metadata } from "next";
import SocialMediaPageClient from "@/components/SocialMediaPageClient";

export const metadata: Metadata = {
  title: "Social Media Management - AblyArt",
  description:
    "Build trust with planned, consistent social media content and audience growth support from AblyArt.",
};

export default function SocialMediaManagementPage() {
  return <SocialMediaPageClient />;
}
