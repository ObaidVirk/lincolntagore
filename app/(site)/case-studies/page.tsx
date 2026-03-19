"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type CaseStudy = {
  title: string;
  segment: "Fintech" | "SaaS" | "Operations" | "Enterprise";
  metric: string;
  metricLabel: string;
  problem: string;
  solution: string;
  outcome: string;
};

const studies: CaseStudy[] = [
  {
    title: "Digital Onboarding Transformation",
    segment: "Fintech",
    metric: "41%",
    metricLabel: "faster onboarding completion",
    problem: "Manual checks and fragmented systems were delaying onboarding decisions.",
    solution: "Implemented orchestration workflows with verification checkpoints and clear exception routing.",
    outcome: "Onboarding turnaround improved while maintaining compliance and traceability.",
  },
  {
    title: "Service Desk Modernization Program",
    segment: "Operations",
    metric: "33%",
    metricLabel: "faster incident response",
    problem: "Critical support workflows relied on disconnected tools and inconsistent handoffs.",
    solution: "Introduced a unified operations dashboard with SLA visibility and ownership rules.",
    outcome: "Response time and escalation control improved across regional support teams.",
  },
  {
    title: "SaaS Feature Adoption Acceleration",
    segment: "SaaS",
    metric: "27%",
    metricLabel: "increase in feature adoption",
    problem: "Users were not discovering high-value capabilities after initial onboarding.",
    solution: "Redesigned in-product guidance and role-based dashboard journeys.",
    outcome: "Activation quality improved and product value realization happened earlier.",
  },
  {
    title: "Cross-Border Payment Reliability Upgrade",
    segment: "Fintech",
    metric: "99.95%",
    metricLabel: "transaction service uptime",
    problem: "Regional growth increased transaction complexity and error handling pressure.",
    solution: "Strengthened platform architecture with resilient routing and monitoring controls.",
    outcome: "Payment reliability stayed stable through multi-market expansion.",
  },
  {
    title: "Enterprise Analytics Consolidation",
    segment: "Enterprise",
    metric: "2.4x",
    metricLabel: "faster executive reporting",
    problem: "Leadership reporting required manual data assembly across disconnected systems.",
    solution: "Built a governed analytics layer with standardized KPI definitions.",
    outcome: "Decision-makers gained near real-time visibility into operational performance.",
  },
];

const filters = ["All", "Fintech", "SaaS", "Operations", "Enterprise"] as const;

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredStudies = useMemo(() => {
    if (activeFilter === "All") {
      return studies;
    }

    return studies.filter((study) => study.segment === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section-gap">
      <div className="container-shell space-y-10">
        <header className="max-w-3xl space-y-4">
          <p className="section-kicker">Case Studies</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Outcomes delivered across complex digital programs.</h1>
          <p className="text-[color:var(--muted)] sm:text-lg">
            Explore selected engagements showing how Lincoln Tagore teams solve operational challenges with
            structured delivery and measurable business impact.
          </p>
        </header>

        <section className="card-soft p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? "bg-[color:var(--brand)] text-white"
                    : "border border-[color:var(--line)] bg-white text-[color:var(--muted)]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          {filteredStudies.map((study) => (
            <article key={study.title} className="card-soft card-hover p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="rounded-full bg-[color:var(--surface-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--brand-strong)]">
                  {study.segment}
                </p>
                <p className="text-right text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">
                  {study.metric} {study.metricLabel}
                </p>
              </div>
              <h2 className="mt-4 text-2xl leading-tight">{study.title}</h2>

              <div className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
                <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">Problem</p>
                  <p className="mt-2">{study.problem}</p>
                </div>
                <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">Solution</p>
                  <p className="mt-2">{study.solution}</p>
                </div>
                <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">Outcome</p>
                  <p className="mt-2">{study.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="card-soft overflow-hidden bg-[linear-gradient(120deg,#0f766e_0%,#0b4f4a_85%)] p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Engagement Planning</p>
            <h2 className="mt-2 text-3xl">Want a case-study style roadmap for your business context?</h2>
            <p className="mt-3 text-sm text-white/80">Share your operating constraints and we will propose practical milestones with measurable targets.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            <Link href="/contact" className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-strong)]">
              Start a Discussion
            </Link>
            <Link href="/services" className="inline-flex items-center rounded-xl border border-white/35 px-5 py-3 text-sm font-semibold text-white">
              Explore Services
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
