import type { CaseStudyTemplateData } from "@/components/CaseStudyTemplate";

export type Category = "All" | "Social Media" | "Lead Generation" | "Funnel" | "SEO";

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  category: Category;
  tagline: string;
  description: string;
  services: string[];
  results: { label: string; value: string; delta?: string }[];
  color: string;
  rgb: string;
  duration: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "nova-ecom",
    client: "HBK",
    industry: "E-Commerce / Fashion",
    category: "Funnel",
    tagline: "From 1.2% to 4.8% conversion rate in 90 days.",
    description:
      "HBK was burning budget on ads but losing customers at checkout. We rebuilt their entire funnel, landing pages, checkout flow, email sequences, and deployed A/B tests weekly until the numbers moved.",
    services: ["Funnel Redesign", "CRO", "Email Automation", "Paid Ads"],
    results: [
      { label: "Conversion Rate", value: "4.8%", delta: "+300%" },
      { label: "Revenue MoM", value: "$240K", delta: "+188%" },
      { label: "Cart Abandonment", value: "31%", delta: "-44%" },
      { label: "ROAS", value: "6.2x", delta: "+210%" },
    ],
    color: "#9bff6e",
    rgb: "155,255,110",
    duration: "90 days",
    featured: true,
  },
  {
    id: "apex-saas",
    client: "An Naada",
    industry: "B2B / Software",
    category: "Lead Generation",
    tagline: "482 qualified demos booked in a single quarter.",
    description:
      "An Naada had a great product but zero inbound engine. We built a LinkedIn outbound system paired with SEO-driven content and a high-converting demo booking funnel that flooded their pipeline with decision-makers.",
    services: ["LinkedIn Outbound", "Content Marketing", "SEO", "Demo Funnels"],
    results: [
      { label: "Demos Booked", value: "482", delta: "+0 to 482" },
      { label: "Cost per Demo", value: "$38", delta: "-62% vs target" },
      { label: "MQL to SQL", value: "68%", delta: "+45 pts" },
      { label: "ARR Added", value: "$1.2M", delta: "Q1 impact" },
    ],
    color: "#6ee7ff",
    rgb: "110,231,255",
    duration: "1 quarter",
    featured: true,
  },
  {
    id: "bright-clinic",
    client: "Hayawear",
    industry: "Healthcare / Aesthetics",
    category: "Social Media",
    tagline: "0 to 84K followers and fully booked 6 weeks out.",
    description:
      "Hayawear had no social presence. We developed a content strategy, built a production system, and ran targeted awareness campaigns that built a loyal community and filled their appointment calendar.",
    services: ["Social Media Management", "Custom Web Design", "Paid Social", "Community"],
    results: [
      { label: "Followers Gained", value: "84K", delta: "from 0" },
      { label: "Avg. Reel Reach", value: "220K", delta: "/month" },
      { label: "Bookings Increase", value: "3.4x", delta: "MoM" },
      { label: "Waitlist", value: "6 wks", delta: "fully booked" },
    ],
    color: "#ff6eb4",
    rgb: "255,110,180",
    duration: "5 months",
  },
  {
    id: "zenith-legal",
    client: "Jadroo",
    industry: "Legal Services",
    category: "SEO",
    tagline: "Page 1 for 38 high-intent keywords in 4 months.",
    description:
      "Jadroo was invisible on Google. We performed a full technical SEO audit, rebuilt their content architecture, and launched a targeted link-building campaign that pushed them to the top for their most competitive terms.",
    services: ["Technical SEO", "Content Strategy", "Link Building", "Local SEO"],
    results: [
      { label: "Pg-1 Keywords", value: "38", delta: "from 3" },
      { label: "Organic Traffic", value: "+312%", delta: "in 4 months" },
      { label: "Avg. Position", value: "3.1", delta: "from 24.7" },
      { label: "Leads from SEO", value: "+190%", delta: "YoY" },
    ],
    color: "#ffb347",
    rgb: "255,179,71",
    duration: "4 months",
  },
  {
    id: "pulse-fitness",
    client: "Khas Food",
    industry: "Health & Wellness",
    category: "Social Media",
    tagline: "Viral campaign generated 2.1M organic impressions.",
    description:
      "Khas Food wanted a brand moment. We designed and executed a 30-day challenge campaign that went viral on TikTok and Instagram, dramatically growing their email list and driving a surge in memberships.",
    services: ["Campaign Strategy", "UGC Production", "Influencer Outreach", "Email List Growth"],
    results: [
      { label: "Organic Impressions", value: "2.1M", delta: "in 30 days" },
      { label: "Email Signups", value: "14,200", delta: "from campaign" },
      { label: "New Members", value: "+840", delta: "membership surge" },
      { label: "Media Coverage", value: "12", delta: "press mentions" },
    ],
    color: "#c4b5fd",
    rgb: "196,181,253",
    duration: "30 days",
  },
  {
    id: "vela-agency",
    client: "OS PPharma",
    industry: "Creative / B2B",
    category: "Lead Generation",
    tagline: "Cold email system bringing in 30+ discovery calls/month.",
    description:
      "OS PPharma struggled to grow beyond referrals. We built a data-enriched cold email infrastructure, wrote high-converting sequences, and set up a simple CRM workflow that now runs almost entirely on autopilot.",
    services: ["Cold Email Infrastructure", "Copywriting", "CRM Setup", "Automation"],
    results: [
      { label: "Discovery Calls/Mo", value: "30+", delta: "from 4" },
      { label: "Open Rate", value: "54%", delta: "industry avg: 24%" },
      { label: "Reply Rate", value: "11%", delta: "industry avg: 3%" },
      { label: "Pipeline Growth", value: "8x", delta: "in 60 days" },
    ],
    color: "#a3e635",
    rgb: "163,230,53",
    duration: "60 days",
  },
];

export const CATEGORIES: Category[] = ["All", "Social Media", "Lead Generation", "Funnel", "SEO"];

export function getCaseStudyById(id: string) {
  return caseStudies.find((study) => study.id === id);
}

function serviceHeadline(study: CaseStudy) {
  if (study.category === "SEO") {
    return `How AblyArt Helped ${study.client} Turn Poor Search Visibility Into Qualified Leads`;
  }
  if (study.category === "Lead Generation") {
    return `How AblyArt Helped ${study.client} Turn Weak Pipeline Into More Qualified Calls`;
  }
  if (study.category === "Social Media") {
    return `How AblyArt Helped ${study.client} Turn Low Trust Into Stronger Demand`;
  }
  return `How AblyArt Helped ${study.client} Turn Leaky Traffic Into More Revenue`;
}

function trustPoints(study: CaseStudy) {
  const base = ["Strategy first, tasks second", "Reporting tied to business outcomes"];
  if (study.category === "SEO") {
    return ["Search visibility built around buyer intent", "Technical SEO and content under one plan", ...base];
  }
  if (study.category === "Lead Generation") {
    return ["Built for qualified sales conversations", "Outbound, offers, CRM, and follow-up under one plan", ...base];
  }
  if (study.category === "Social Media") {
    return ["Built for trust and demand creation", "Content, community, and paid awareness under one plan", ...base];
  }
  return ["Built for conversion and revenue clarity", "Funnel, ads, email, and testing under one plan", ...base];
}

function diagnosis(study: CaseStudy): CaseStudyTemplateData["diagnosis"] {
  if (study.category === "SEO") {
    return [
      {
        title: "Search visibility",
        wrong: "The brand was not visible enough for high-intent searches tied to its core services.",
        impact: "Buyers who were already searching for help were finding competitors first.",
        change: "The site needed stronger technical signals, clearer content structure, and pages mapped to buyer intent.",
      },
      {
        title: "Local map visibility",
        wrong: "Local trust signals and service-area relevance were not strong enough.",
        impact: "The business missed nearby prospects who were ready to compare options.",
        change: "Local signals, content, and credibility markers needed to support discovery.",
      },
      {
        title: "Content and messaging",
        wrong: "The content did not answer the practical questions buyers had before reaching out.",
        impact: "Visitors had less reason to trust the offer or take the next step.",
        change: "The message needed to connect expertise with the business outcome buyers wanted.",
      },
    ];
  }
  if (study.category === "Lead Generation") {
    return [
      {
        title: "Lead generation",
        wrong: "The pipeline relied too heavily on inconsistent sources and weak outbound structure.",
        impact: "Growth depended on luck instead of a repeatable path to qualified conversations.",
        change: "The business needed a targeted offer, clean data, better sequences, and a clear booking path.",
      },
      {
        title: "Content and messaging",
        wrong: "The outreach message did not make the business problem clear fast enough.",
        impact: "Good prospects had too little reason to reply or book a call.",
        change: "The message needed to lead with pain, relevance, and a simple next step.",
      },
      {
        title: "Tracking and reporting",
        wrong: "The team could not clearly see which sources and messages created useful conversations.",
        impact: "It was harder to improve lead quality or scale what worked.",
        change: "Reporting needed to connect source, reply quality, booked calls, and pipeline.",
      },
    ];
  }
  if (study.category === "Social Media") {
    return [
      {
        title: "Social media",
        wrong: "The brand did not have a consistent content system that built trust over time.",
        impact: "Potential buyers saw activity gaps and had less confidence before taking action.",
        change: "The brand needed a repeatable content plan built around buyer questions and proof.",
      },
      {
        title: "Content and messaging",
        wrong: "Content was not tied clearly enough to the offer or next step.",
        impact: "Attention did not reliably become inquiries, bookings, or owned audience growth.",
        change: "Content needed to create trust, explain the value, and point people toward action.",
      },
      {
        title: "Paid ads",
        wrong: "Awareness and retargeting were not organized around lead quality.",
        impact: "Reach could grow without creating enough sales-ready interest.",
        change: "Paid promotion needed to support the organic message and reinforce the buyer journey.",
      },
    ];
  }
  return [
    {
      title: "Funnel and conversion",
      wrong: "Traffic was reaching the brand, but too many visitors dropped before buying or inquiring.",
      impact: "Ad spend and traffic were not turning into enough measurable revenue.",
      change: "The offer, page flow, and conversion path needed to be simplified and tested.",
    },
    {
      title: "Paid ads",
      wrong: "Campaign traffic was not aligned tightly enough with the conversion path.",
      impact: "Budget was spent on visitors who were not ready or were not guided clearly.",
      change: "Ad targeting, landing message, and follow-up needed to work as one system.",
    },
    {
      title: "Tracking and reporting",
      wrong: "The business could not see enough detail about where the funnel leaked.",
      impact: "Decisions were slower because the team did not know which friction points mattered most.",
      change: "Reporting needed to focus on conversion quality, not just traffic activity.",
    },
  ];
}

function proofAssets(study: CaseStudy) {
  if (study.category === "SEO") {
    return [
      "Proof asset placeholder: Add Google Search Console screenshot here.",
      "Proof asset placeholder: Add ranking screenshot here.",
      "Proof asset placeholder: Add Google Analytics screenshot here.",
      "Proof asset placeholder: Add lead tracking screenshot here.",
    ];
  }
  if (study.category === "Lead Generation") {
    return [
      "Proof asset placeholder: Add CRM screenshot here.",
      "Proof asset placeholder: Add call booking screenshot here.",
      "Proof asset placeholder: Add lead tracking screenshot here.",
      "Proof asset placeholder: Add outbound campaign dashboard screenshot here.",
    ];
  }
  if (study.category === "Social Media") {
    return [
      "Proof asset placeholder: Add social growth screenshot here.",
      "Proof asset placeholder: Add content reach screenshot here.",
      "Proof asset placeholder: Add lead tracking screenshot here.",
      "Proof asset placeholder: Add client testimonial here.",
    ];
  }
  return [
    "Proof asset placeholder: Add Google Analytics screenshot here.",
    "Proof asset placeholder: Add conversion tracking screenshot here.",
    "Proof asset placeholder: Add ad dashboard screenshot here.",
    "Proof asset placeholder: Add revenue or booking screenshot here.",
  ];
}

function relatedStudies(study: CaseStudy): CaseStudyTemplateData["relatedCaseStudies"] {
  return caseStudies
    .filter((item) => item.id !== study.id)
    .slice(0, 3)
    .map((item) => ({
      title: `${item.client} Case Study`,
      description: item.tagline,
      href: `/case-studies/${item.id}`,
    }));
}

export function buildCaseStudyTemplateData(study: CaseStudy): CaseStudyTemplateData {
  return {
    label: "Case Study",
    headline: serviceHeadline(study),
    subheadline: study.description,
    metrics: study.results.slice(0, 3).map((result) => ({
      value: `${result.value}${result.delta ? ` (${result.delta})` : ""}`,
      label: result.label,
    })),
    trustPoints: trustPoints(study),
    snapshot: [
      { label: "Client Type", value: study.client },
      { label: "Market", value: study.industry },
      { label: "Main Problem", value: study.tagline },
      { label: "Services Used", value: study.services.join(", ") },
      { label: "Timeline", value: study.duration },
      { label: "Goal", value: "Turn marketing activity into clearer, more qualified growth opportunities." },
    ],
    businessProblem: [
      study.description,
      "The deeper issue was not one isolated marketing task. The business needed a clearer path from visibility to trust, then from trust to action.",
      "AblyArt focused the work on business outcomes: better lead quality, clearer buyer intent, cleaner tracking, and a stronger reason to book a call or take the next step.",
    ],
    diagnosis: diagnosis(study),
    strategy: [
      {
        title: "Clarified the growth bottleneck",
        done: "We identified which part of the customer journey was blocking progress.",
        mattered: "A business cannot scale confidently when the team is guessing where leads are being lost.",
        helped: "The work focused on the points most likely to improve qualified conversations and revenue.",
      },
      {
        title: "Rebuilt the message around buyer intent",
        done: "We tightened the offer, proof points, and next-step language around what buyers needed to understand.",
        mattered: "Clearer messaging reduces friction and helps the right prospects self-identify faster.",
        helped: "The brand became easier to trust and easier to act on.",
      },
      {
        title: "Connected channels into one path",
        done: `We aligned ${study.services.join(", ")} so each activity supported the same business goal.`,
        mattered: "Disconnected marketing creates activity without momentum.",
        helped: "Search, content, outreach, ads, and conversion points worked together instead of competing for attention.",
      },
      {
        title: "Measured what mattered",
        done: "We tied reporting back to lead quality, booked calls, and the business outcome behind the campaign.",
        mattered: "Owners need to know what is creating real opportunities, not just what is getting clicks.",
        helped: "The team could make clearer decisions about where to invest next.",
      },
    ],
    timeline: [
      {
        phase: "Phase 1",
        title: "Audit and diagnosis",
        description: "We reviewed the current visibility, message, traffic sources, conversion path, and tracking gaps.",
      },
      {
        phase: "Phase 2",
        title: "Message and path correction",
        description: "We clarified the offer and improved the path from interest to action.",
      },
      {
        phase: "Phase 3",
        title: "Channel execution",
        description: `We executed the core service mix: ${study.services.join(", ")}.`,
      },
      {
        phase: "Phase 4",
        title: "Reporting and quality review",
        description: "We reviewed performance through the lens of lead quality, calls, and business value.",
      },
    ],
    beforeAfter: [
      { area: "Visibility", before: "The brand had gaps in the places buyers were looking.", after: "Visibility became more connected to buyer intent and service relevance." },
      { area: "Lead quality", before: "The business had too much uncertainty around which inquiries were valuable.", after: "The growth path focused more directly on qualified prospects." },
      { area: "Website message", before: "The offer was not always clear enough for quick decisions.", after: "The message tied services to the buyer's business problem." },
      { area: "Tracking", before: "Reporting did not fully explain what created real opportunities.", after: "Performance was reviewed around outcomes, not vanity metrics." },
      { area: "Discovery calls", before: "The next step was not always supported by the full journey.", after: "The path to a useful sales conversation became clearer." },
    ],
    results: study.results.slice(0, 3).map((result) => ({
      result: `${result.label}: ${result.value}${result.delta ? ` (${result.delta})` : ""}`,
      businessValue: `Business value: ${study.client} had a clearer path to judge growth by business outcomes, not disconnected activity.`,
    })),
    proofAssets: proofAssets(study),
    clientQuote: {
      quote:
        "Demo placeholder testimonial: AblyArt helped us see where growth was getting stuck and gave us a clearer path from activity to qualified conversations.",
      name: "Demo placeholder client",
      role: `${study.client}, ${study.industry}`,
    },
    whyItWorked: [
      "The offer became clearer, so buyers understood the value faster.",
      "Traffic and outreach were aligned with buyer intent.",
      "CTAs became easier to act on because the message was more direct.",
      "Reporting focused on leads, conversations, and revenue signals instead of vanity metrics.",
      "The strategy connected visibility with conversion instead of treating channels as separate tasks.",
    ],
    relatedCaseStudies: relatedStudies(study),
  };
}
