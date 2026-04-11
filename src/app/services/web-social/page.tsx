import type { Metadata } from "next";
import WebSocialPageClient from "@/components/WebSocialPageClient";

export const metadata: Metadata = {
  title: "Web & Social Management — ablyart",
  description:
    "Focus on your core business. From building lightning-fast web pages to maintaining active, engaging social feeds, we handle your entire organic online presence from build to maintenance.",
};

export default function WebSocialPage() {
  return <WebSocialPageClient />;
}
