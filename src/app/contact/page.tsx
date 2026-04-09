import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us — ablyart",
  description:
    "Get in touch with the ablyart team. Book a free 30-minute growth audit and receive a personalised 90-day marketing roadmap — no strings attached.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
