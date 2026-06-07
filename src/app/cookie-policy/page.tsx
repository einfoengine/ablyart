import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy - AblyArt",
  description: "How AblyArt may use cookies and similar technologies on the website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Cookie Policy"
      updated="June 7, 2026"
      sections={[
        {
          heading: "What Cookies Do",
          body: "Cookies and similar technologies can help a website remember preferences, understand visitor behavior, improve performance, and measure marketing activity.",
        },
        {
          heading: "How AblyArt May Use Them",
          body: "AblyArt may use cookies or similar tools for basic website functionality, analytics, form performance, and marketing measurement when those tools are configured.",
        },
        {
          heading: "Your Choices",
          body: "You can control or block cookies through your browser settings. Blocking some cookies may affect how certain website features behave.",
        },
        {
          heading: "Contact",
          body: "Questions about cookie use can be sent to hello@ablyart.com.",
        },
      ]}
    />
  );
}
