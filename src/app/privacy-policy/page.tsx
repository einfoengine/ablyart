import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy - AblyArt",
  description: "How AblyArt collects, uses, and protects website and contact form information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      updated="June 7, 2026"
      sections={[
        {
          heading: "Information We Collect",
          body: "When you submit a form, book a call, or contact AblyArt, we may collect your name, email address, phone number, company details, website URL, goals, and any message you choose to share.",
        },
        {
          heading: "How We Use Information",
          body: "We use submitted information to respond to inquiries, prepare audits, deliver requested resources, improve our services, and communicate with you about AblyArt services relevant to your request.",
        },
        {
          heading: "Data Sharing",
          body: "We do not sell personal information. We may use trusted service providers for form delivery, scheduling, analytics, and website operations, only as needed to run the website and respond to requests.",
        },
        {
          heading: "Contact",
          body: "For privacy questions or requests, email hello@ablyart.com or call +880 1790-508929.",
        },
      ]}
    />
  );
}
