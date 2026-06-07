export type BlogPostData = {
  id: number;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  accent: string;
  rgb: string;
  featured?: boolean;
  intro: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  checklist: string[];
  relatedServices: Array<{
    label: string;
    href: string;
  }>;
};

export const blogPosts: BlogPostData[] = [
  {
    id: 1,
    slug: "high-converting-marketing-funnel-2025",
    category: "Growth Strategy",
    date: "Apr 5, 2025",
    readTime: "7 min read",
    title: "How to Build a High-Converting Marketing Funnel in 2025",
    excerpt:
      "Discover the critical components of a modern, data-driven marketing funnel that consistently generates qualified leads without burning your ad budget.",
    accent: "#9bff6e",
    rgb: "155,255,110",
    featured: true,
    intro:
      "A high-converting funnel is not a stack of landing pages. It is a controlled path from first touch to qualified conversation, with each step proving intent before the next ask.",
    sections: [
      {
        heading: "Start With The Buyer Moment",
        body: [
          "The strongest funnels begin with a clear diagnosis of what the buyer already knows, what they still need to believe, and what proof would make action feel safe.",
          "For AblyArt clients, that usually means separating awareness content, comparison content, and conversion assets instead of forcing every visitor into the same sales page.",
        ],
      },
      {
        heading: "Make Every Step Earn The Next Click",
        body: [
          "Each page, ad, email, and retargeting touchpoint should have one job. If the visitor is cold, the job may be education. If they are comparing vendors, the job may be proof. If they are ready, the job is booking the call.",
          "This keeps messaging sharp and prevents the funnel from feeling like a generic pitch deck.",
        ],
      },
      {
        heading: "Measure Pipeline, Not Just Page Metrics",
        body: [
          "Clicks and form fills matter, but the real scoreboard is qualified meetings, sales velocity, and close rate.",
          "A funnel that sends fewer but better leads to sales will often outperform a funnel that celebrates cheap volume.",
        ],
      },
    ],
    checklist: [
      "Define one primary action for every funnel step.",
      "Map awareness, consideration, and decision-stage proof separately.",
      "Track lead quality and call outcomes, not only cost per lead.",
      "Use retargeting to answer objections instead of repeating the same ad.",
    ],
    relatedServices: [
      { label: "Lead Generation", href: "/services/lead-generation" },
      { label: "Media Buying", href: "/services/media-buying" },
    ],
  },
  {
    id: 2,
    slug: "blended-roas-scaling-ad-spend",
    category: "Paid Media",
    date: "Mar 28, 2025",
    readTime: "9 min read",
    title: "The Death of Traditional ROAS: How We Scale Ad Spend Today",
    excerpt:
      "Why relying solely on platform ROAS is killing your ability to scale, and the blended attribution metrics you should be tracking instead.",
    accent: "#6ee7ff",
    rgb: "110,231,255",
    intro:
      "Platform ROAS is useful, but it is not the business. Scaling paid media requires a wider view of demand creation, repeat buyers, sales quality, and blended acquisition cost.",
    sections: [
      {
        heading: "Why Platform ROAS Gets Noisy",
        body: [
          "Ad platforms claim credit based on their own attribution windows, which means Meta, Google, and TikTok can all overstate their role in the same sale.",
          "When teams optimize only for in-platform ROAS, they often cut the campaigns that create demand and overfund the campaigns that merely capture it.",
        ],
      },
      {
        heading: "Build A Blended Scorecard",
        body: [
          "A healthier scorecard includes total spend, total revenue, qualified lead rate, sales conversion rate, payback period, and customer quality.",
          "This lets the media buyer make decisions that match the business model instead of chasing the cleanest dashboard number.",
        ],
      },
      {
        heading: "Scale With Guardrails",
        body: [
          "Budget increases should be tied to creative fatigue, audience saturation, conversion rate, and sales capacity.",
          "The goal is not simply to spend more. The goal is to spend into a system that can absorb the demand profitably.",
        ],
      },
    ],
    checklist: [
      "Compare platform ROAS against blended CAC every week.",
      "Track lead-to-call and call-to-sale rates by campaign.",
      "Separate prospecting, retargeting, and brand search decisions.",
      "Review creative fatigue before increasing budget.",
    ],
    relatedServices: [
      { label: "Media Buying", href: "/services/media-buying" },
      { label: "Lead Generation", href: "/services/lead-generation" },
    ],
  },
  {
    id: 3,
    slug: "tiktok-creative-strategy-2025",
    category: "Creative",
    date: "Mar 20, 2025",
    readTime: "6 min read",
    title: "Anatomy of a Winning TikTok Creative: Hook, Story, Offer",
    excerpt:
      "Breaking down the exact hook structures, storytelling frameworks, and offer mechanics that stop the scroll and drive measurable revenue.",
    accent: "#ff6eb4",
    rgb: "255,110,180",
    intro:
      "Short-form creative wins when it respects attention. The first seconds create relevance, the story builds belief, and the offer gives the viewer a reason to act now.",
    sections: [
      {
        heading: "Lead With A Recognizable Problem",
        body: [
          "The hook should sound like the buyer's internal monologue. Broad claims are easy to ignore, but specific frustrations stop the scroll because they feel personal.",
          "For service brands, this often means leading with the cost of the current problem rather than the promise of the solution.",
        ],
      },
      {
        heading: "Make The Story Useful",
        body: [
          "A strong creative gives the viewer a tiny win before asking for anything. That might be a diagnosis, a comparison, a quick mistake to avoid, or a visible before-and-after.",
          "When the content is useful, the offer feels like a logical next step instead of an interruption.",
        ],
      },
      {
        heading: "Tie The Offer To Intent",
        body: [
          "Cold viewers need a low-friction next step. Warm viewers can handle a direct booking ask.",
          "Matching the CTA to the audience stage protects conversion rates and keeps media spend efficient.",
        ],
      },
    ],
    checklist: [
      "Write hooks from real customer objections.",
      "Show proof before making a direct offer.",
      "Test multiple openings with the same core message.",
      "Match CTA strength to audience warmth.",
    ],
    relatedServices: [
      { label: "Social Media Management", href: "/services/social-media-management" },
      { label: "Media Buying", href: "/services/media-buying" },
    ],
  },
  {
    id: 4,
    slug: "seo-programmatic-content-scale",
    category: "SEO & Content",
    date: "Mar 12, 2025",
    readTime: "11 min read",
    title: "Programmatic SEO: How We Generated 300K Organic Visits in 90 Days",
    excerpt:
      "The exact playbook we used to build a programmatic content engine that went from zero to 300K monthly organic visits without a huge team.",
    accent: "#ffb347",
    rgb: "255,179,71",
    intro:
      "Programmatic SEO works when scale is paired with usefulness. The goal is not thousands of thin pages. The goal is repeatable search intent served with structured, genuinely helpful content.",
    sections: [
      {
        heading: "Find Repeatable Intent",
        body: [
          "The best programmatic opportunities have a pattern: locations, industries, comparisons, templates, tools, or use cases that buyers search repeatedly.",
          "Before building pages, validate that the pattern has commercial value and that each page can answer a specific question better than a generic article.",
        ],
      },
      {
        heading: "Create A Strong Page System",
        body: [
          "Templates should include unique data, helpful explanations, internal links, proof points, and next-step CTAs.",
          "A good template gives every page enough structure to scale while still letting the content feel specific.",
        ],
      },
      {
        heading: "Connect SEO To Revenue",
        body: [
          "Traffic alone is not the win. The page system should route visitors into service pages, lead magnets, demo requests, or sales conversations based on intent.",
          "That is where programmatic SEO becomes a growth channel instead of a content vanity project.",
        ],
      },
    ],
    checklist: [
      "Validate repeatable keyword patterns before building.",
      "Use unique data or examples on every scaled page.",
      "Add internal links to relevant service and conversion pages.",
      "Monitor indexation, engagement, and assisted pipeline.",
    ],
    relatedServices: [
      { label: "SEO, GEO & AEO", href: "/services/seo-geo-aeo" },
      { label: "Lead Generation", href: "/services/lead-generation" },
    ],
  },
  {
    id: 5,
    slug: "email-revenue-machine",
    category: "Email & SMS",
    date: "Mar 4, 2025",
    readTime: "8 min read",
    title: "The Email Flows Generating 35% of Our Clients' Revenue",
    excerpt:
      "Most brands are leaving 30-40% of their revenue on the table. Here are the automated email flows we install for every client on day one.",
    accent: "#b09eff",
    rgb: "176,158,255",
    intro:
      "Email revenue grows when the right message is triggered by the right behavior. The most profitable flows are simple, timely, and tied to buyer intent.",
    sections: [
      {
        heading: "Start With The Highest-Intent Moments",
        body: [
          "Welcome, abandoned cart, lead follow-up, reactivation, and post-purchase flows usually create the fastest lift.",
          "These flows work because they respond to behavior the customer already showed, rather than blasting everyone with the same promotion.",
        ],
      },
      {
        heading: "Write For Decision Progress",
        body: [
          "Every email should move the reader one step closer to confidence. That might mean answering objections, showing proof, explaining the offer, or making the next action easier.",
          "Strong lifecycle marketing feels useful first and promotional second.",
        ],
      },
      {
        heading: "Protect Deliverability",
        body: [
          "Revenue depends on inbox placement. Segment inactive contacts, monitor engagement, and avoid over-sending to people who are no longer showing intent.",
          "Healthy lists compound. Tired lists quietly tax every campaign.",
        ],
      },
    ],
    checklist: [
      "Build behavior-triggered flows before broad campaigns.",
      "Segment by intent, purchase stage, and engagement.",
      "Use proof and objections inside nurture sequences.",
      "Review deliverability and unsubscribe trends monthly.",
    ],
    relatedServices: [
      { label: "Lead Generation", href: "/services/lead-generation" },
      { label: "Social Media Management", href: "/services/social-media-management" },
    ],
  },
  {
    id: 6,
    slug: "attribution-models-2025",
    category: "Analytics",
    date: "Feb 24, 2025",
    readTime: "10 min read",
    title: "Attribution in 2025: What Actually Works When iOS Broke Everything",
    excerpt:
      "Privacy updates gutted traditional tracking. Here's how we rebuild attribution from scratch for every client and the tools we actually trust.",
    accent: "#6ee7ff",
    rgb: "110,231,255",
    intro:
      "Attribution is no longer about finding one perfect source of truth. It is about combining imperfect signals into decisions that are consistent enough to scale.",
    sections: [
      {
        heading: "Use Multiple Signals",
        body: [
          "Platform data, CRM data, analytics events, call quality, surveys, and blended revenue all tell part of the story.",
          "When those sources are reviewed together, teams can spot patterns that a single dashboard would hide.",
        ],
      },
      {
        heading: "Track The Sales Journey",
        body: [
          "Lead source is only useful if it connects to downstream quality. A campaign that creates cheap leads but weak calls should not be treated as a winner.",
          "Tie campaigns to booked calls, show rates, close rates, and revenue wherever possible.",
        ],
      },
      {
        heading: "Make Decisions On Trends",
        body: [
          "Daily attribution swings can be noisy. Weekly and monthly trend reviews usually produce better budget decisions.",
          "The aim is directional confidence, not false precision.",
        ],
      },
    ],
    checklist: [
      "Connect ad platforms with CRM outcomes.",
      "Review blended CAC and pipeline value together.",
      "Use post-conversion surveys to catch dark social.",
      "Avoid reacting to one-day attribution swings.",
    ],
    relatedServices: [
      { label: "Media Buying", href: "/services/media-buying" },
      { label: "SEO, GEO & AEO", href: "/services/seo-geo-aeo" },
    ],
  },
  {
    id: 7,
    slug: "retention-ltv-maximization",
    category: "Growth Strategy",
    date: "Feb 14, 2025",
    readTime: "8 min read",
    title: "LTV Over CAC: The Retention Playbook for Scaling Brands",
    excerpt:
      "Acquiring customers is expensive. Keeping them and growing them is where the real profit lives. Here's our full retention system.",
    accent: "#9bff6e",
    rgb: "155,255,110",
    intro:
      "Retention gives growth more room to breathe. When lifetime value improves, businesses can afford better acquisition, better service, and stronger follow-up.",
    sections: [
      {
        heading: "Improve The First Experience",
        body: [
          "Retention starts immediately after conversion. Clear onboarding, expectation-setting, and fast value delivery reduce buyer's remorse and increase repeat action.",
          "For service businesses, this may be as simple as a sharper confirmation flow and a better first call experience.",
        ],
      },
      {
        heading: "Create Reasons To Return",
        body: [
          "Repeat engagement should be designed, not hoped for. Education, reminders, loyalty offers, community content, and timely check-ins keep the relationship active.",
          "The best retention programs feel like support, not pressure.",
        ],
      },
      {
        heading: "Use LTV To Guide Acquisition",
        body: [
          "Once you know which customers stay longer and buy more, you can target acquisition toward similar profiles.",
          "That is how retention insights improve lead generation and paid media performance.",
        ],
      },
    ],
    checklist: [
      "Audit the first 30 days after conversion.",
      "Segment customers by repeat value and source.",
      "Build follow-up around helpful moments, not random promos.",
      "Feed retention insights back into acquisition targeting.",
    ],
    relatedServices: [
      { label: "Lead Generation", href: "/services/lead-generation" },
      { label: "Social Media Management", href: "/services/social-media-management" },
    ],
  },
  {
    id: 8,
    slug: "google-ads-profitable-scale",
    category: "Paid Media",
    date: "Feb 5, 2025",
    readTime: "12 min read",
    title: "Google Ads Playbook: From Breakeven to 6x ROAS at Scale",
    excerpt:
      "The campaign structure, bidding strategy, and creative testing framework we use to profitably scale Google Ads accounts from $10K to $100K per month.",
    accent: "#ff6eb4",
    rgb: "255,110,180",
    intro:
      "Profitable Google Ads scale comes from structure. You need clean intent groups, accurate conversion signals, disciplined budget moves, and landing pages that match the searcher's urgency.",
    sections: [
      {
        heading: "Separate Capture From Creation",
        body: [
          "Brand and high-intent search campaigns capture demand that already exists. Broader search, YouTube, and Performance Max often help create or shape demand.",
          "Treating every campaign as the same kind of revenue source leads to bad budget decisions.",
        ],
      },
      {
        heading: "Fix Conversion Signals First",
        body: [
          "Smart bidding depends on the quality of the events you feed it. Qualified leads, booked calls, and closed revenue are more useful than shallow form fills.",
          "Offline conversion imports can dramatically improve campaign learning for service and B2B companies.",
        ],
      },
      {
        heading: "Scale In Controlled Steps",
        body: [
          "Winning accounts scale through budget pacing, search term control, landing page improvements, and offer tests.",
          "When you change everything at once, you lose the ability to know what actually improved performance.",
        ],
      },
    ],
    checklist: [
      "Group campaigns by intent and funnel role.",
      "Import qualified lead and sales events where possible.",
      "Review search terms before scaling spend.",
      "Improve landing page match for high-cost keywords.",
    ],
    relatedServices: [
      { label: "Media Buying", href: "/services/media-buying" },
      { label: "SEO, GEO & AEO", href: "/services/seo-geo-aeo" },
    ],
  },
  {
    id: 9,
    slug: "high-converting-landing-page",
    category: "Growth Strategy",
    date: "Jul 30, 2024",
    readTime: "7 min read",
    title: "Anatomy of a High-Converting Landing Page",
    excerpt:
      "Breaking down the UI, copy, and offer structures that keep visitors engaged and drive action on your website.",
    accent: "#b09eff",
    rgb: "176,158,255",
    intro:
      "A strong landing page reduces uncertainty. It tells the right visitor they are in the right place, proves the offer is credible, and makes the next step obvious.",
    sections: [
      {
        heading: "Match The Promise Above The Fold",
        body: [
          "The hero section should echo the ad, search query, or social post that brought the visitor there.",
          "When the promise matches the source, visitors do not have to re-orient themselves before deciding whether to continue.",
        ],
      },
      {
        heading: "Use Proof Near The Ask",
        body: [
          "Testimonials, case study snippets, process details, and numbers are most useful when they sit close to moments of decision.",
          "Proof should answer the doubts that appear right before someone books, buys, or submits a form.",
        ],
      },
      {
        heading: "Remove Competing Actions",
        body: [
          "Landing pages perform best when the main action is obvious. Extra links, vague CTAs, and broad navigation can dilute intent.",
          "That does not mean the page should be thin. It means every section should support the same conversion goal.",
        ],
      },
    ],
    checklist: [
      "Repeat the traffic source promise in the hero.",
      "Place proof near CTAs and objection-heavy sections.",
      "Use one primary conversion action.",
      "Measure form quality after improving conversion rate.",
    ],
    relatedServices: [
      { label: "Lead Generation", href: "/services/lead-generation" },
      { label: "Media Buying", href: "/services/media-buying" },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 3) {
  const currentPost = getBlogPost(slug);
  const related = blogPosts.filter((post) => post.slug !== slug && post.category === currentPost?.category);
  const fallback = blogPosts.filter((post) => post.slug !== slug && post.category !== currentPost?.category);

  return [...related, ...fallback].slice(0, limit);
}
