import type { Metadata } from "next";
import CaseStudyTemplate, { type CaseStudyTemplateData } from "@/components/CaseStudyTemplate";

export const metadata: Metadata = {
  title: "Demo Growth Case Study — ablyart",
  description:
    "A reusable AblyArt case study page template with clearly labeled demo placeholder results and a discovery call CTA.",
};

const demoCaseStudy: CaseStudyTemplateData = {
  label: "Case Study",
  headline: "How AblyArt Helped a Local Service Business Turn Poor Visibility Into More Qualified Calls",
  subheadline:
    "The client had traffic, ads, and social activity, but the system was not producing enough booked calls. We fixed the visibility gaps, tightened the message, and improved the path from visitor to inquiry.",
  metrics: [
    { value: "Demo placeholder: +48%", label: "qualified inquiries" },
    { value: "Demo placeholder: 32%", label: "lower cost per lead" },
    { value: "Demo placeholder: 2.4x", label: "more discovery calls" },
  ],
  trustPoints: [
    "Built for service-based businesses",
    "Search, social, paid media, and lead generation under one plan",
    "Clear reporting tied to calls and inquiries",
    "Strategy first, tasks second",
    "Designed for long-term lead flow",
  ],
  snapshot: [
    { label: "Client Type", value: "Demo placeholder: local home service business" },
    { label: "Market", value: "Demo placeholder: competitive local service market" },
    { label: "Main Problem", value: "Demo placeholder: activity was not turning into enough qualified booked calls" },
    { label: "Services Used", value: "SEO, GEO & AEO, Social Media Management, Media Buying, Lead Generation" },
    { label: "Timeline", value: "Demo placeholder: 90-day implementation window" },
    { label: "Goal", value: "Demo placeholder: improve qualified inquiries and reduce wasted lead spend" },
  ],
  businessProblem: [
    "The business was visible in pieces, but the pieces were not working together. People could find the brand in some places, but the message was unclear and the next step was not obvious.",
    "That created a real business cost. Leads were missed, ad spend worked harder than it needed to, and sales conversations often started with low trust or poor fit.",
    "The issue was not simply poor SEO, low engagement, or weak ads. The larger issue was a broken path from visibility to inquiry, with unclear tracking and no consistent follow-up signal.",
  ],
  diagnosis: [
    {
      title: "Search visibility",
      wrong: "Demo placeholder: key service pages were not clearly structured around buyer intent.",
      impact: "Prospects searching for help did not consistently find a page that matched their problem.",
      change: "The search structure needed clearer service signals, stronger local relevance, and pages built around real buyer questions.",
    },
    {
      title: "AI and answer engine visibility",
      wrong: "Demo placeholder: the site did not explain the offer in a way answer engines could easily summarize.",
      impact: "The business risked being left out when buyers used AI search or answer-based discovery.",
      change: "The offer, proof points, and service explanations needed to become clearer and more specific.",
    },
    {
      title: "Funnel and conversion",
      wrong: "Demo placeholder: the visitor path from page view to inquiry had too much friction.",
      impact: "Interested visitors left before booking because the next step did not feel direct enough.",
      change: "The discovery call path needed a clearer CTA, stronger message, and fewer distractions.",
    },
    {
      title: "Paid ads and lead tracking",
      wrong: "Demo placeholder: campaigns were judged by surface metrics instead of qualified inquiry quality.",
      impact: "Budget could be spent on clicks that did not become useful sales conversations.",
      change: "Reporting needed to connect spend, source, message, and booked calls.",
    },
  ],
  strategy: [
    {
      title: "Rebuilt the offer message around buyer pain",
      done: "We clarified the main problem the business solved and connected the copy to urgent customer needs.",
      mattered: "Buyers needed to understand the offer quickly before they trusted the next step.",
      helped: "The website and ad message became easier to act on, which supported stronger inquiries.",
    },
    {
      title: "Cleaned up search and AI visibility signals",
      done: "We mapped key services, questions, locations, and proof points into clearer page structure.",
      mattered: "Search visibility works best when Google, AI tools, and buyers can understand the same message.",
      helped: "The business had a stronger foundation for long-term discovery across search and answer engines.",
    },
    {
      title: "Improved the discovery call path",
      done: "We made the call booking action more direct and tied it to the visitor's business problem.",
      mattered: "The faster a qualified buyer understands the next step, the less likely they are to leave.",
      helped: "More interested prospects had a clear route from intent to conversation.",
    },
    {
      title: "Reworked paid campaign targeting",
      done: "We focused budget on higher-intent segments and removed messaging that attracted poor-fit clicks.",
      mattered: "Ad spend should create qualified conversations, not just traffic volume.",
      helped: "The campaign path became more aligned with lead quality and sales readiness.",
    },
    {
      title: "Added lead tracking and reporting clarity",
      done: "We connected inquiry sources to call quality so the business could see what was actually working.",
      mattered: "Better reporting helps owners stop guessing and make decisions from lead value.",
      helped: "The team could judge channels by conversations and opportunities instead of vanity metrics.",
    },
  ],
  timeline: [
    {
      phase: "Phase 1",
      title: "Audit and diagnosis",
      description: "We reviewed visibility, messaging, paid traffic, call paths, and tracking gaps to identify where qualified leads were being lost.",
    },
    {
      phase: "Phase 2",
      title: "Message and funnel correction",
      description: "We tightened the offer, clarified CTAs, and improved the journey from visitor interest to discovery call.",
    },
    {
      phase: "Phase 3",
      title: "Search, social, and paid execution",
      description: "We aligned search visibility, social trust, and paid traffic around the same business outcome: better qualified inquiries.",
    },
    {
      phase: "Phase 4",
      title: "Tracking and lead quality review",
      description: "We reviewed lead sources, call quality, and reporting so the business could invest more confidently.",
    },
  ],
  beforeAfter: [
    { area: "Visibility", before: "Scattered visibility with unclear service signals.", after: "Clearer search, local, and answer-engine signals around buyer intent." },
    { area: "Lead quality", before: "Inquiries included too many poor-fit prospects.", after: "Messaging filtered for more relevant, higher-intent prospects." },
    { area: "Website message", before: "The offer was broad and hard to understand quickly.", after: "The core promise became specific, direct, and tied to buyer pain." },
    { area: "Paid traffic", before: "Ad spend was judged mostly by clicks and surface activity.", after: "Campaigns were reviewed against qualified inquiries and calls." },
    { area: "Social trust", before: "Social activity existed but did not strongly support the sales path.", after: "Content supported trust, service clarity, and follow-up intent." },
    { area: "Tracking", before: "Lead source and lead quality were not clearly connected.", after: "Reporting connected visibility, inquiries, and booked conversations." },
    { area: "Discovery calls", before: "Interested visitors did not always know the next step.", after: "The call path was easier to find and easier to act on." },
  ],
  results: [
    {
      result: "Demo placeholder result: Qualified inquiries increased by 48%",
      businessValue: "The client had more sales conversations with people who already understood the offer.",
    },
    {
      result: "Demo placeholder metric: 32% lower cost per lead",
      businessValue: "The budget had less waste because paid traffic was better aligned with buyer intent.",
    },
    {
      result: "Demo placeholder result: 2.4x more discovery calls",
      businessValue: "The business created more opportunities without relying only on more traffic.",
    },
  ],
  proofAssets: [
    "Proof asset placeholder: Add Google Search Console screenshot here.",
    "Proof asset placeholder: Add Google Business Profile screenshot here.",
    "Proof asset placeholder: Add ad dashboard screenshot here.",
    "Proof asset placeholder: Add lead tracking screenshot here.",
    "Proof asset placeholder: Add call booking screenshot here.",
    "Proof asset placeholder: Add client testimonial here.",
  ],
  clientQuote: {
    quote:
      "Demo placeholder testimonial: AblyArt helped us see where interest was getting stuck. The plan was clear, and the work made it easier for the right customers to book a call.",
    name: "Demo placeholder client",
    role: "Owner, local service business",
  },
  whyItWorked: [
    "The offer became clearer, so buyers understood the value faster.",
    "Traffic matched buyer intent instead of chasing broad activity.",
    "CTAs became easier to act on, especially for visitors ready to talk.",
    "Reporting focused on leads and booked calls, not vanity metrics.",
    "The strategy connected visibility with conversion instead of treating each channel separately.",
  ],
  relatedCaseStudies: [
    {
      title: "SEO, GEO & AEO Case Study",
      description: "How a service brand improved visibility across Google, AI search, and local discovery.",
      href: "/case-studies/demo-growth-case-study",
    },
    {
      title: "Lead Generation Case Study",
      description: "How a B2B offer was cleaned up and turned into a stronger outbound lead system.",
      href: "/case-studies/demo-growth-case-study",
    },
    {
      title: "Media Buying Case Study",
      description: "How ad spend was restructured to reduce wasted clicks and improve lead quality.",
      href: "/case-studies/demo-growth-case-study",
    },
  ],
};

export default function DemoGrowthCaseStudyPage() {
  return <CaseStudyTemplate data={demoCaseStudy} />;
}
