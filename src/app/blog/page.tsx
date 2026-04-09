import type { Metadata } from "next";
import BlogPageClient from "@/components/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog — ablyart",
  description:
    "Actionable growth strategies, paid media frameworks, SEO playbooks, and marketing insights from the ablyart team. Real tactics from real campaigns.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
