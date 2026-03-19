export type BlogCategory = "Web" | "Mobile" | "Fintech" | "SaaS";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  date: string;
  author: string;
  heroImage: string;
  tags: string[];
  sections: Array<{ heading: string; body: string }>;
};

export const categories: BlogCategory[] = ["Web", "Mobile", "Fintech", "SaaS"];

export const blogPosts: BlogPost[] = [
  {
    slug: "enterprise-web-platform-governance",
    title: "Enterprise Web Platform Governance That Actually Scales",
    excerpt:
      "A practical framework for balancing front-end velocity, architecture quality, and executive visibility in large web programs.",
    category: "Web",
    readTime: "7 min read",
    date: "Mar 2026",
    author: "Lincoln Tagore Editorial Team",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
    tags: ["Architecture", "Governance", "Frontend"],
    sections: [
      {
        heading: "Why Governance Breaks in Fast Web Teams",
        body:
          "Most governance models fail because they are introduced as approvals rather than decision accelerators. Effective governance for web delivery should reduce ambiguity, improve quality signals, and support faster release confidence.",
      },
      {
        heading: "Define Guardrails, Not Roadblocks",
        body:
          "Set non-negotiable standards for accessibility, observability, and performance budgets, then let teams execute autonomously within those guardrails. This keeps execution fast while preserving consistency across products.",
      },
      {
        heading: "Report Outcomes, Not Just Velocity",
        body:
          "Track adoption, defect escape rate, and release confidence alongside sprint metrics. Leaders gain better clarity when delivery dashboards map directly to business impact.",
      },
    ],
  },
  {
    slug: "mobile-experience-for-field-operations",
    title: "Designing Mobile Experiences for Field Operations",
    excerpt:
      "How product teams can build reliable mobile workflows for distributed operations where network and context constantly change.",
    category: "Mobile",
    readTime: "6 min read",
    date: "Mar 2026",
    author: "Product Experience Office",
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
    tags: ["Mobile UX", "Operations", "Product"],
    sections: [
      {
        heading: "Prioritize Task Completion Over Feature Depth",
        body:
          "Field users care about speed and clarity. Optimize for key actions with minimal taps and explicit status indicators, especially in time-sensitive workflows.",
      },
      {
        heading: "Design for Interrupted Journeys",
        body:
          "Mobile workflows are rarely linear in operations environments. Save progress, support offline states, and provide clear retry behavior for sync actions.",
      },
      {
        heading: "Instrument for Adoption Signals",
        body:
          "Capture usage patterns around drop-off points, completion rates, and repeated errors. These signals guide fast UX iteration that improves productivity.",
      },
    ],
  },
  {
    slug: "building-trust-in-fintech-workflows",
    title: "Building Trust in Fintech Workflow Design",
    excerpt:
      "A blueprint for translating compliance constraints into clear digital experiences across onboarding and transaction flows.",
    category: "Fintech",
    readTime: "8 min read",
    date: "Feb 2026",
    author: "Fintech Delivery Council",
    heroImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
    tags: ["Fintech", "Compliance", "Workflow"],
    sections: [
      {
        heading: "Trust Is an Interface Decision",
        body:
          "Users trust financial products when actions are transparent and system responses are predictable. Design patterns should communicate status, controls, and next steps clearly.",
      },
      {
        heading: "Embed Compliance Into Flow Logic",
        body:
          "Compliance checks should be orchestrated behind the scenes where possible, with user-friendly fallback handling when manual review is required.",
      },
      {
        heading: "Operational Visibility Is Product Quality",
        body:
          "Internal teams need clear observability into onboarding queues, exception cases, and decision pathways to maintain service quality at scale.",
      },
    ],
  },
  {
    slug: "saas-metrics-that-improve-decisions",
    title: "SaaS Metrics That Improve Product Decisions",
    excerpt:
      "Which product and operational indicators matter most when scaling a SaaS platform for enterprise teams.",
    category: "SaaS",
    readTime: "5 min read",
    date: "Feb 2026",
    author: "Platform Strategy Team",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    tags: ["SaaS", "Analytics", "Strategy"],
    sections: [
      {
        heading: "Adoption Quality Beats Raw Usage",
        body:
          "Measure meaningful feature adoption tied to customer outcomes, not just login counts or click volume.",
      },
      {
        heading: "Link Product Signals to Service Health",
        body:
          "Combine product telemetry with support, incident, and release data to understand total experience quality.",
      },
      {
        heading: "Use Metrics for Prioritization",
        body:
          "The best dashboard is one that helps teams decide what to build, fix, or retire in the next cycle.",
      },
    ],
  },
];
