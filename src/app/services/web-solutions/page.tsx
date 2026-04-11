import type { Metadata } from "next";
import WebSolutionsPageClient from "@/components/WebSolutionsPageClient";

export const metadata: Metadata = {
  title: "Web Solutions: Design, Development & Maintenance — ablyart",
  description:
    "We engineer high-performance websites and digital experiences. From premium UI/UX design to robust full-stack architecture and maintenance, we build your brand's ultimate conversion vehicle.",
};

export default function WebSolutionsPage() {
  return <WebSolutionsPageClient />;
}
