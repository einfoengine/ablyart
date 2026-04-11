import type { Metadata } from "next";
import RetentionPageClient from "@/components/RetentionPageClient";

export const metadata: Metadata = {
  title: "Retention & Value Maximization — ablyart",
  description:
    "Acquiring customers is expensive. Making them buy again shouldn't be. We build powerful, automated backend systems using Email and SMS to multiply the lifetime value of every customer you win.",
};

export default function RetentionPage() {
  return <RetentionPageClient />;
}
