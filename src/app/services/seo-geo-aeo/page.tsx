import type { Metadata } from "next";
import SeoPageClient from "@/components/SeoPageClient";

export const metadata: Metadata = {
  title: "SEO, GEO & AEO - AblyArt",
  description:
    "Improve visibility across Google, AI search, and answer engines with AblyArt's SEO, GEO, and AEO strategy.",
};

export default function SeoGeoAeoPage() {
  return <SeoPageClient />;
}
