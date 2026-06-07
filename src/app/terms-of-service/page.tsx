import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service - AblyArt",
  description: "Terms for using the AblyArt website and requesting AblyArt services.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      updated="June 7, 2026"
      sections={[
        {
          heading: "Website Use",
          body: "The AblyArt website is provided for informational purposes and to help prospective clients learn about our services, request audits, and book consultations.",
        },
        {
          heading: "Service Discussions",
          body: "Submitting a form or booking a call does not create a client relationship. Any paid engagement, scope, timeline, or deliverable must be confirmed in a separate written agreement.",
        },
        {
          heading: "Content",
          body: "Website content, case studies, articles, graphics, and brand assets belong to AblyArt unless otherwise stated. You may not copy or reuse them in a misleading or unauthorized way.",
        },
        {
          heading: "Contact",
          body: "Questions about these terms can be sent to hello@ablyart.com.",
        },
      ]}
    />
  );
}
