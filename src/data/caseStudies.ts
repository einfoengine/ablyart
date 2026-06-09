import type { CaseStudyTemplateData } from "@/components/CaseStudyTemplate";

export type Category = "All" | "Media Buying" | "Lead Generation" | "SEO, GEO & AEO" | "Social Media Management";

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  category: Exclude<Category, "All">;
  tagline: string;
  description: string;
  services: string[];
  results: { label: string; value: string; delta?: string }[];
  color: string;
  rgb: string;
  duration: string;
  featured?: boolean;
  metaTitle: string;
  metaDescription: string;
}

type CaseStudyDetails = {
  businessProblem: string[];
  diagnosis: CaseStudyTemplateData["diagnosis"];
  strategy: CaseStudyTemplateData["strategy"];
  timeline: CaseStudyTemplateData["timeline"];
  beforeAfter: CaseStudyTemplateData["beforeAfter"];
  proofAssets: string[];
  founderSummary: string;
  whyItWorked: string[];
  relatedIds: string[];
  serviceLinks: CaseStudyTemplateData["serviceLinks"];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "meta-ads-800-leads-14-days",
    client: "800+ Leads in 14 Days",
    industry: "Founder-reported paid media campaign",
    category: "Media Buying",
    tagline: "800+ leads and $2,000+ revenue generated in a 14-day campaign window.",
    description:
      "A founder-reported previous campaign focused on fast lead flow and revenue through offer clarity, ad structure, audience targeting, creative testing, and lead capture.",
    services: ["Media Buying", "Lead Generation"],
    results: [
      { label: "Leads generated", value: "800+" },
      { label: "Revenue generated", value: "$2,000+" },
      { label: "Campaign window", value: "14 days" },
    ],
    color: "#6ee7ff",
    rgb: "110,231,255",
    duration: "14 days",
    featured: true,
    metaTitle: "800+ Leads Meta Ads Case Study | AblyArt",
    metaDescription:
      "Founder-backed Meta Ads case study showing 800+ leads and $2,000+ revenue generated in a 14-day campaign window.",
  },
  {
    id: "email-marketing-10k-sales",
    client: "$10K Sales From Email",
    industry: "Founder-reported email marketing result",
    category: "Lead Generation",
    tagline: "$10K in sales generated from email marketing for one client.",
    description:
      "A founder-reported previous email conversion project where the work focused on email strategy, offer positioning, copywriting, follow-up structure, and conversion-focused messaging.",
    services: ["Lead Generation", "Email Marketing"],
    results: [
      { label: "Sales generated", value: "$10K" },
      { label: "Revenue channel", value: "Email" },
      { label: "Claim basis", value: "Founder-reported result" },
    ],
    color: "#9bff6e",
    rgb: "155,255,110",
    duration: "Founder-reported client result",
    featured: true,
    metaTitle: "$10K Email Marketing Sales Case Study | AblyArt",
    metaDescription:
      "Founder-backed email marketing case study showing $10K in sales generated for one client through email conversion work.",
  },
  {
    id: "strategic-seo-40k-organic-visitors",
    client: "40K+ Organic Visitors",
    industry: "Founder-reported average from previous SEO work",
    category: "SEO, GEO & AEO",
    tagline: "Average 40K+ organic visitors generated through strategic SEO.",
    description:
      "A founder-reported average from previous SEO work focused on technical SEO, content structure, search intent, keyword mapping, internal linking, and conversion-focused landing pages.",
    services: ["SEO, GEO & AEO"],
    results: [
      { label: "Organic visitors", value: "40K+", delta: "Founder-reported average" },
      { label: "Growth channel", value: "SEO" },
      { label: "Focus", value: "Search visibility" },
    ],
    color: "#ffb347",
    rgb: "255,179,71",
    duration: "Previous SEO work",
    metaTitle: "40K+ Organic Visitors SEO Case Study | AblyArt",
    metaDescription:
      "Founder-backed SEO case study based on a reported average of 40K+ organic visitors generated through strategic SEO work.",
  },
  {
    id: "social-media-engagement-growth",
    client: "400% Social Engagement Growth",
    industry: "Founder-reported average from previous social work",
    category: "Social Media Management",
    tagline: "Average 400% social media engagement growth through content systems.",
    description:
      "A founder-reported average from previous social media work supported by content planning, creative direction, campaign production, publishing systems, and message consistency.",
    services: ["Social Media Management", "Content Systems"],
    results: [
      { label: "Engagement growth", value: "400%", delta: "Founder-reported average" },
      { label: "Video campaigns", value: "250+" },
      { label: "Static designs/posts", value: "100K+" },
    ],
    color: "#ff6eb4",
    rgb: "255,110,180",
    duration: "Previous content work",
    metaTitle: "400% Social Engagement Growth Case Study | AblyArt",
    metaDescription:
      "Founder-backed social media case study based on 400% average engagement growth, 250+ video campaigns, and 100K+ static designs/posts delivered.",
  },
  {
    id: "high-converting-websites-search-conversion",
    client: "20+ High-Converting Websites",
    industry: "Founder-backed website, SEO, and funnel experience",
    category: "SEO, GEO & AEO",
    tagline: "20+ international-level websites built for search visibility and conversion.",
    description:
      "Founder-backed website and funnel experience shaped by a CSE/software engineering background, technical architecture, buyer psychology, ranking, and conversion path planning.",
    services: ["SEO, GEO & AEO", "Lead Generation"],
    results: [
      { label: "Websites built", value: "20+" },
      { label: "Build focus", value: "Search + conversion" },
      { label: "Background", value: "CSE/software engineering" },
    ],
    color: "#b09eff",
    rgb: "176,158,255",
    duration: "Founder-backed previous work",
    metaTitle: "High-Converting Website Case Study | AblyArt",
    metaDescription:
      "Founder-backed website and technical SEO case study based on 20+ international-level websites built for search and conversion.",
  },
];

export const CATEGORIES: Category[] = ["All", "Media Buying", "Lead Generation", "SEO, GEO & AEO", "Social Media Management"];

export function getCaseStudyById(id: string) {
  return caseStudies.find((study) => study.id === id);
}

const caseStudyDetails: Record<string, CaseStudyDetails> = {
  "meta-ads-800-leads-14-days": {
    businessProblem: [
      "The client needed fast lead flow and revenue from a focused campaign, without a long ramp-up period.",
      "The work centered on connecting the offer, paid campaign structure, audience targeting, creative testing, and lead capture into one focused path.",
      "This result is presented as a founder-reported campaign result. No CPL, ROAS, ad spend, conversion rate, or client name is claimed.",
    ],
    diagnosis: [
      {
        title: "Offer clarity",
        wrong: "The campaign needed a clearer reason for prospects to respond quickly.",
        impact: "Weak offer clarity can create clicks without enough useful lead intent.",
        change: "The offer needed to make the next step simple, specific, and easy to understand.",
      },
      {
        title: "Audience and creative match",
        wrong: "The campaign needed tighter alignment between target audience, ad angle, and creative message.",
        impact: "When targeting and creative do not match, paid traffic can become expensive noise.",
        change: "The campaign needed audience targeting and creative tests built around the same growth goal.",
      },
      {
        title: "Lead capture path",
        wrong: "The lead path needed to reduce friction between ad interest and form submission.",
        impact: "Even strong ads lose value when the capture path is unclear or slow.",
        change: "The lead path needed a direct flow from attention to action.",
      },
    ],
    strategy: [
      {
        title: "Clarified the offer",
        done: "The campaign message was shaped around a simple, direct reason to take action.",
        mattered: "A clear offer gives paid traffic a stronger reason to become a lead.",
        helped: "The campaign could focus attention on one conversion path instead of scattered actions.",
      },
      {
        title: "Structured paid media around lead flow",
        done: "Audience targeting, ad setup, and creative testing were organized around generating qualified lead volume.",
        mattered: "Media buying works best when campaign structure supports the business objective.",
        helped: "The work kept traffic, creative, and lead capture pointed at the same goal.",
      },
      {
        title: "Improved the lead capture path",
        done: "The lead path was kept focused so prospects could move from ad interest to submission quickly.",
        mattered: "Reducing friction protects campaign momentum during a short campaign window.",
        helped: "The 14-day campaign window could be used more efficiently.",
      },
    ],
    timeline: [
      { phase: "Phase 1", title: "Offer and audience review", description: "Clarified the campaign offer, audience assumptions, and lead capture goal." },
      { phase: "Phase 2", title: "Campaign setup", description: "Structured the Meta Ads campaign around fast lead flow and focused creative angles." },
      { phase: "Phase 3", title: "Creative testing", description: "Tested ad angles and message variations while keeping the conversion path consistent." },
      { phase: "Phase 4", title: "14-day performance review", description: "Reviewed the founder-reported outcome: 800+ leads and $2,000+ revenue generated." },
    ],
    beforeAfter: [
      { area: "Lead flow", before: "The client needed faster lead volume.", after: "Founder-reported result: 800+ leads generated." },
      { area: "Revenue signal", before: "The campaign needed to create measurable sales activity.", after: "Founder-reported result: $2,000+ revenue generated." },
      { area: "Timeline", before: "The campaign needed short-window traction.", after: "The reported campaign window was 14 days." },
      { area: "Campaign focus", before: "Offer, audience, creative, and lead path needed to work together.", after: "The campaign was organized around one lead generation path." },
    ],
    proofAssets: [
      "Recommended proof asset to add: Campaign dashboard screenshot.",
      "Recommended proof asset to add: Lead tracking screenshot.",
      "Recommended proof asset to add: Revenue or order tracking screenshot.",
    ],
    founderSummary:
      "This project showed that a short paid campaign can work when the offer, targeting, creative angle, and lead path are connected under one growth system.",
    whyItWorked: [
      "The campaign focused on one clear business goal: lead generation.",
      "The offer and lead capture path were aligned before scaling the message.",
      "Creative testing supported the targeting instead of operating as a separate task.",
      "The result is limited to the founder-reported numbers provided: 800+ leads, $2,000+ revenue, and 14 days.",
    ],
    relatedIds: ["email-marketing-10k-sales", "social-media-engagement-growth"],
    serviceLinks: [
      { title: "Media Buying", description: "Run paid campaigns that bring qualified traffic.", href: "/services/media-buying" },
      { title: "Lead Generation", description: "Turn interest into calls and pipeline.", href: "/services/lead-generation" },
    ],
  },
  "email-marketing-10k-sales": {
    businessProblem: [
      "The client had an audience or lead list, but email was not producing enough sales.",
      "The work focused on email strategy, offer positioning, copywriting, follow-up structure, and conversion-focused messaging.",
      "This is a founder-reported result for one client. No open rate, click rate, list size, email count, conversion rate, or revenue period is claimed.",
    ],
    diagnosis: [
      {
        title: "Email conversion path",
        wrong: "The list was not being guided toward a clear purchase decision.",
        impact: "An audience can exist without producing revenue if the follow-up path is weak.",
        change: "The email flow needed a clearer offer, stronger copy, and a better reason to act.",
      },
      {
        title: "Offer positioning",
        wrong: "The sales message needed to connect the offer to the audience's buying motivation.",
        impact: "Weak positioning can make even interested subscribers delay or ignore action.",
        change: "The message needed to make value, urgency, and next step easier to understand.",
      },
      {
        title: "Follow-up structure",
        wrong: "The sequence needed a more deliberate progression from interest to purchase.",
        impact: "Without structured follow-up, email revenue becomes inconsistent.",
        change: "The email path needed to build confidence before asking for the sale.",
      },
    ],
    strategy: [
      {
        title: "Reframed the offer",
        done: "The offer was positioned around the buyer's reason to act.",
        mattered: "Clear positioning helps email readers understand why the offer is relevant now.",
        helped: "The campaign could connect attention with purchase intent.",
      },
      {
        title: "Built conversion-focused messaging",
        done: "Email copy and follow-up were shaped around trust, clarity, and action.",
        mattered: "Email revenue depends on making the next step feel useful and low-friction.",
        helped: "The reported result was $10K in sales from email marketing for one client.",
      },
      {
        title: "Strengthened the follow-up path",
        done: "The sequence created a more intentional path from audience interest to sales action.",
        mattered: "Follow-up turns a passive list into an active revenue channel.",
        helped: "Email became a clearer conversion channel in the founder-reported project.",
      },
    ],
    timeline: [
      { phase: "Phase 1", title: "Audience and offer review", description: "Reviewed the audience context and the offer being sent to the list." },
      { phase: "Phase 2", title: "Message strategy", description: "Clarified the email angle, purchase motivation, and follow-up sequence." },
      { phase: "Phase 3", title: "Email copy and launch", description: "Created conversion-focused messaging and supported the sales path through email." },
      { phase: "Phase 4", title: "Result review", description: "Recorded the founder-reported result: $10K in sales generated from email marketing for one client." },
    ],
    beforeAfter: [
      { area: "Email revenue", before: "Email was not producing enough sales.", after: "Founder-reported result: $10K sales generated." },
      { area: "Offer clarity", before: "The purchase reason needed clearer positioning.", after: "The email message connected the offer to buyer motivation." },
      { area: "Follow-up", before: "The list needed a stronger conversion path.", after: "Follow-up was structured around trust and action." },
      { area: "Claim scope", before: "No verified public metrics were available.", after: "The page only states the founder-reported result provided." },
    ],
    proofAssets: [
      "Recommended proof asset to add: Email sales screenshot.",
      "Recommended proof asset to add: Email platform campaign screenshot.",
      "Recommended proof asset to add: Revenue attribution screenshot.",
    ],
    founderSummary:
      "This project showed that email can become a meaningful revenue channel when the offer, copy, and follow-up sequence are built around the buyer's decision path.",
    whyItWorked: [
      "The work focused on sales conversion, not just sending more emails.",
      "The offer was clarified before the email copy was written.",
      "Follow-up supported the buyer journey instead of relying on one message.",
      "The claim is limited to the founder-reported result: $10K in sales for one client.",
    ],
    relatedIds: ["meta-ads-800-leads-14-days", "strategic-seo-40k-organic-visitors"],
    serviceLinks: [
      { title: "Lead Generation", description: "Build follow-up paths that turn interest into conversations and sales.", href: "/services/lead-generation" },
    ],
  },
  "strategic-seo-40k-organic-visitors": {
    businessProblem: [
      "The client needed more qualified visibility from search and a clearer path from search traffic to business action.",
      "The work focused on technical SEO, content structure, search intent, keyword mapping, internal linking, and conversion-focused landing pages.",
      "The 40K+ organic visitors figure is a founder-reported average from previous SEO work, not an independently audited claim for a named client.",
    ],
    diagnosis: [
      {
        title: "Technical SEO foundation",
        wrong: "The site needed stronger technical structure to support discoverability.",
        impact: "Weak technical foundations can limit how much search visibility content can earn.",
        change: "The site needed cleaner architecture, technical fixes, and clearer page hierarchy.",
      },
      {
        title: "Search intent mapping",
        wrong: "Content needed to match what qualified buyers were actually searching for.",
        impact: "Traffic can grow without business value when pages miss search intent.",
        change: "Keyword mapping and content structure needed to support buyer questions.",
      },
      {
        title: "Conversion-focused pages",
        wrong: "Search pages needed a stronger next step after the visitor arrived.",
        impact: "Visibility alone does not create growth without a path to action.",
        change: "Landing pages needed internal links, trust signals, and clearer CTAs.",
      },
    ],
    strategy: [
      {
        title: "Built around search intent",
        done: "Mapped content and pages around the questions and intent behind qualified searches.",
        mattered: "SEO brings better value when visibility is tied to buyer relevance.",
        helped: "The work supported the founder-reported average of 40K+ organic visitors through strategic SEO.",
      },
      {
        title: "Strengthened technical structure",
        done: "Focused on architecture, internal linking, and crawl-friendly page organization.",
        mattered: "Technical clarity helps content and service pages perform more consistently.",
        helped: "The site path became easier for users and search systems to understand.",
      },
      {
        title: "Connected SEO to conversion",
        done: "Landing pages were shaped to guide visitors toward service understanding and lead action.",
        mattered: "Organic growth matters more when visitors know what to do next.",
        helped: "Visibility work became more connected to lead generation.",
      },
    ],
    timeline: [
      { phase: "Phase 1", title: "SEO diagnosis", description: "Reviewed technical structure, content gaps, search intent, and internal linking." },
      { phase: "Phase 2", title: "Keyword and content mapping", description: "Mapped pages around search intent and buyer-stage questions." },
      { phase: "Phase 3", title: "Page and structure improvements", description: "Improved page hierarchy, internal links, and conversion-focused landing paths." },
      { phase: "Phase 4", title: "Visibility review", description: "Recorded the founder-reported average from previous SEO work: 40K+ organic visitors." },
    ],
    beforeAfter: [
      { area: "Organic visibility", before: "The client needed stronger search discovery.", after: "Founder-reported average: 40K+ organic visitors generated through strategic SEO." },
      { area: "Technical structure", before: "The site needed stronger architecture.", after: "Technical SEO and page hierarchy supported discovery." },
      { area: "Content intent", before: "Pages were not fully mapped to buyer questions.", after: "Content structure better matched search intent." },
      { area: "Conversion path", before: "Visitors needed a clearer next step.", after: "Landing pages were shaped around trust and action." },
    ],
    proofAssets: [
      "Recommended proof asset to add: Google Search Console screenshot.",
      "Recommended proof asset to add: Organic traffic analytics screenshot.",
      "Recommended proof asset to add: Keyword mapping or content structure screenshot.",
    ],
    founderSummary:
      "This SEO work showed that organic visibility improves when technical structure, search intent, internal linking, and conversion-focused pages are planned together.",
    whyItWorked: [
      "SEO was treated as a full visibility system, not isolated blog publishing.",
      "Technical structure supported content discovery.",
      "Content mapping focused on buyer questions and intent.",
      "The claim is clearly scoped as a founder-reported average from previous SEO work.",
    ],
    relatedIds: ["high-converting-websites-search-conversion", "social-media-engagement-growth"],
    serviceLinks: [
      { title: "SEO, GEO & AEO", description: "Get found on Google, AI search, and answer engines.", href: "/services/seo-geo-aeo" },
    ],
  },
  "social-media-engagement-growth": {
    businessProblem: [
      "The client needed stronger social trust, content consistency, and engagement.",
      "The work focused on content planning, creative direction, campaign production, publishing systems, and message consistency.",
      "The engagement growth and production numbers are founder-reported proof points from previous client work and broader execution experience.",
    ],
    diagnosis: [
      {
        title: "Content consistency",
        wrong: "The brand needed a more reliable publishing and campaign system.",
        impact: "Inconsistent content makes trust harder to build and engagement harder to repeat.",
        change: "The brand needed a planned content system with repeatable production.",
      },
      {
        title: "Creative direction",
        wrong: "Content needed clearer themes, stronger hooks, and more consistent message quality.",
        impact: "Engagement can stay weak when creative output is disconnected from audience interest.",
        change: "Creative needed to be planned around audience trust, not random posting.",
      },
      {
        title: "Operational scale",
        wrong: "The content operation needed enough production capacity to support consistent growth.",
        impact: "Teams often stall because they cannot produce enough usable creative.",
        change: "Campaign production and publishing systems needed to support repeated execution.",
      },
    ],
    strategy: [
      {
        title: "Built a content system",
        done: "Created a more structured approach to planning, production, and publishing.",
        mattered: "Social trust compounds when content is consistent and strategically connected.",
        helped: "The work supported the founder-reported average of 400% engagement growth.",
      },
      {
        title: "Directed campaign creative",
        done: "Creative direction focused on hooks, message clarity, and audience relevance.",
        mattered: "Content needs a reason to earn attention before it can build trust.",
        helped: "The broader experience includes 250+ video campaigns and animations delivered.",
      },
      {
        title: "Scaled static and motion output",
        done: "Production systems supported a high volume of static designs, posts, videos, and animations.",
        mattered: "Consistent output depends on repeatable production capacity.",
        helped: "The founder-reported proof points include 100K+ static designs and posts delivered.",
      },
    ],
    timeline: [
      { phase: "Phase 1", title: "Content audit", description: "Reviewed message consistency, audience fit, creative quality, and publishing gaps." },
      { phase: "Phase 2", title: "Content planning", description: "Built a content structure around trust, engagement, and repeatable topics." },
      { phase: "Phase 3", title: "Campaign production", description: "Produced static, motion, and campaign creative through a repeatable system." },
      { phase: "Phase 4", title: "Engagement review", description: "Recorded founder-reported averages and production proof points from previous work." },
    ],
    beforeAfter: [
      { area: "Engagement", before: "The brand needed stronger audience response.", after: "Founder-reported average: 400% social engagement growth." },
      { area: "Video campaigns", before: "Campaign production needed structure.", after: "Founder-reported proof point: 250+ video campaigns and animations delivered." },
      { area: "Static content", before: "Publishing needed consistent creative output.", after: "Founder-reported proof point: 100K+ static designs and posts delivered." },
      { area: "Message consistency", before: "Content themes were not always connected.", after: "Creative direction and planning created a clearer content system." },
    ],
    proofAssets: [
      "Recommended proof asset to add: Social analytics screenshot.",
      "Recommended proof asset to add: Content calendar screenshot.",
      "Recommended proof asset to add: Campaign production sample screenshot.",
    ],
    founderSummary:
      "This work showed that social engagement improves when content planning, creative direction, production capacity, and publishing consistency operate as one system.",
    whyItWorked: [
      "The content system gave the brand a repeatable way to show up.",
      "Creative direction focused on audience relevance and message consistency.",
      "Production capacity supported consistent execution across static and video formats.",
      "The claims are limited to founder-reported averages and production proof points.",
    ],
    relatedIds: ["meta-ads-800-leads-14-days", "strategic-seo-40k-organic-visitors"],
    serviceLinks: [
      { title: "Social Media Management", description: "Build trust with planned, consistent social content.", href: "/services/social-media-management" },
    ],
  },
  "high-converting-websites-search-conversion": {
    businessProblem: [
      "The client needed a website that did more than look good. It needed search structure, technical clarity, trust-building sections, and a conversion path.",
      "The work focused on technical structure, page hierarchy, SEO setup, CTA flow, buyer psychology, and conversion-focused pages.",
      "The 20+ websites figure is a founder-backed proof point tied to previous international-level website work and a CSE/software engineering background.",
    ],
    diagnosis: [
      {
        title: "Technical architecture",
        wrong: "The website needed stronger structure for both users and search systems.",
        impact: "A weak structure can make even good design harder to rank, understand, or convert from.",
        change: "The site needed technical architecture built around clarity and intent.",
      },
      {
        title: "Buyer psychology",
        wrong: "The page flow needed to answer buyer questions in the right order.",
        impact: "Visitors leave when a website looks polished but does not reduce uncertainty.",
        change: "Sections needed to build trust, explain the offer, and guide action.",
      },
      {
        title: "Conversion path",
        wrong: "CTAs and trust sections needed a more deliberate relationship.",
        impact: "Without a clear path, traffic can fail to become leads.",
        change: "The site needed CTA flow and service messaging tied to lead generation.",
      },
    ],
    strategy: [
      {
        title: "Planned the technical structure",
        done: "The website structure was shaped around page hierarchy, SEO setup, and technical clarity.",
        mattered: "Good architecture helps both visibility and user understanding.",
        helped: "The approach reflects founder-backed experience building 20+ international-level websites.",
      },
      {
        title: "Built around buyer psychology",
        done: "Page sections were organized to answer objections, build trust, and make the next step clear.",
        mattered: "A website converts better when it reduces uncertainty before asking for action.",
        helped: "The site became more than a visual asset; it became part of the growth path.",
      },
      {
        title: "Connected SEO and lead generation",
        done: "SEO setup, page hierarchy, CTA flow, and trust sections were planned together.",
        mattered: "Search visibility needs a conversion path to create business value.",
        helped: "The website supported both discovery and lead generation goals.",
      },
    ],
    timeline: [
      { phase: "Phase 1", title: "Technical and conversion audit", description: "Reviewed structure, page hierarchy, SEO setup, CTA flow, and trust gaps." },
      { phase: "Phase 2", title: "Architecture planning", description: "Planned the site around ranking, technical clarity, buyer psychology, and conversion." },
      { phase: "Phase 3", title: "Website build direction", description: "Built pages and sections around service understanding, trust, and action." },
      { phase: "Phase 4", title: "Founder experience review", description: "Grounded the case study in the founder-backed proof point: 20+ international-level websites built." },
    ],
    beforeAfter: [
      { area: "Website role", before: "The website needed to do more than look good.", after: "The site was treated as a search and conversion asset." },
      { area: "Technical foundation", before: "Page structure and technical clarity needed improvement.", after: "Architecture supported ranking and user understanding." },
      { area: "Buyer path", before: "The page flow did not fully reduce uncertainty.", after: "Sections were planned around trust, proof, and action." },
      { area: "Founder proof point", before: "No fake conversion or revenue metric is claimed.", after: "Only the provided proof point is used: 20+ international-level websites built." },
    ],
    proofAssets: [
      "Recommended proof asset to add: Website architecture screenshot.",
      "Recommended proof asset to add: Landing page before/after screenshot.",
      "Recommended proof asset to add: SEO setup or technical audit screenshot.",
    ],
    founderSummary:
      "This website work showed that high-performing pages need technical structure, buyer psychology, search readiness, and CTA flow working together.",
    whyItWorked: [
      "The website was planned as a growth system, not just a design surface.",
      "Technical architecture supported search visibility.",
      "Buyer psychology shaped the page hierarchy and trust sections.",
      "The claim is limited to the founder-backed proof point: 20+ international-level websites built.",
    ],
    relatedIds: ["strategic-seo-40k-organic-visitors", "meta-ads-800-leads-14-days"],
    serviceLinks: [
      { title: "SEO, GEO & AEO", description: "Build visibility across search and answer engines.", href: "/services/seo-geo-aeo" },
      { title: "Lead Generation", description: "Turn website interest into qualified calls.", href: "/services/lead-generation" },
    ],
  },
};

function getCaseStudyDetails(id: string) {
  return caseStudyDetails[id];
}

function trustPoints(study: CaseStudy) {
  return [
    "Founder-backed previous work",
    "Claims limited to provided proof points",
    `${study.services.join(" + ")} execution experience`,
    "No invented client names or screenshots",
  ];
}

function relatedStudies(study: CaseStudy, details: CaseStudyDetails): CaseStudyTemplateData["relatedCaseStudies"] {
  return details.relatedIds
    .map((id) => getCaseStudyById(id))
    .filter((item): item is CaseStudy => Boolean(item))
    .map((item) => ({
      title: item.client,
      description: item.tagline,
      href: `/case-studies/${item.id}`,
    }));
}

export function buildCaseStudyTemplateData(study: CaseStudy): CaseStudyTemplateData {
  const details = getCaseStudyDetails(study.id);

  return {
    label: "Founder-Backed Case Study",
    headline: study.client,
    subheadline: study.description,
    metrics: study.results.slice(0, 3).map((result) => ({
      value: `${result.value}${result.delta ? ` (${result.delta})` : ""}`,
      label: result.label,
    })),
    trustPoints: trustPoints(study),
    snapshot: [
      { label: "Case Study Type", value: study.industry },
      { label: "Primary Service", value: study.category },
      { label: "Services Used", value: study.services.join(", ") },
      { label: "Claim Basis", value: "Founder-reported previous work" },
      { label: "Timeline", value: study.duration },
      { label: "Public Client Name", value: "Not disclosed" },
    ],
    businessProblem: details.businessProblem,
    diagnosis: details.diagnosis,
    strategy: details.strategy,
    timeline: details.timeline,
    beforeAfter: details.beforeAfter,
    results: study.results.slice(0, 3).map((result) => ({
      result: `${result.label}: ${result.value}${result.delta ? ` (${result.delta})` : ""}`,
      businessValue: `Claim basis: ${study.industry}. No additional revenue, traffic, CPL, ROAS, ranking, or client-name claims are made beyond the provided proof point.`,
    })),
    proofAssets: details.proofAssets,
    founderSummary: {
      summary: details.founderSummary,
      name: "Founder-backed summary",
      role: "Previous execution experience behind AblyArt",
    },
    whyItWorked: details.whyItWorked,
    serviceLinks: details.serviceLinks,
    relatedCaseStudies: relatedStudies(study, details),
  };
}
