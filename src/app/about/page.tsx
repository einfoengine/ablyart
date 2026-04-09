import type { Metadata } from "next";
import AboutPageClient from "@/components/AboutPageClient";

export const metadata: Metadata = {
  title: "About Us — ablyart",
  description:
    "Learn about ablyart — a 360° digital marketing agency built for scalable brands. Meet the team, discover our values, and see the journey behind $18M+ in client revenue.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
