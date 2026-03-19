"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const plans = {
  monthly: [
    {
      name: "Basic",
      price: "$39",
      subtitle: "Small teams",
      cta: "Start Basic",
      includes: ["Core workspace", "Team permissions", "Weekly reporting", "Email support"],
    },
    {
      name: "Pro",
      price: "$89",
      subtitle: "Growing teams",
      cta: "Choose Pro",
      featured: true,
      includes: ["Advanced analytics", "Workflow automation", "Priority support", "Governance dashboard"],
    },
    {
      name: "Enterprise",
      price: "$249",
      subtitle: "Advanced governance",
      cta: "Talk to Sales",
      includes: ["Compliance reporting", "Dedicated success lead", "Audit-ready controls", "Integration advisory"],
    },
    {
      name: "Scale",
      price: "Custom",
      subtitle: "Global operations",
      cta: "Request Proposal",
      includes: ["Custom SLA", "Multi-region rollout", "Executive governance", "Strategic optimization"],
    },
  ],
  yearly: [
    {
      name: "Basic",
      price: "$390",
      subtitle: "Save 2 months",
      cta: "Start Basic",
      includes: ["Core workspace", "Team permissions", "Weekly reporting", "Email support"],
    },
    {
      name: "Pro",
      price: "$890",
      subtitle: "Save 2 months",
      cta: "Choose Pro",
      featured: true,
      includes: ["Advanced analytics", "Workflow automation", "Priority support", "Governance dashboard"],
    },
    {
      name: "Enterprise",
      price: "$2490",
      subtitle: "Save 2 months",
      cta: "Talk to Sales",
      includes: ["Compliance reporting", "Dedicated success lead", "Audit-ready controls", "Integration advisory"],
    },
    {
      name: "Scale",
      price: "Custom",
      subtitle: "Global operations",
      cta: "Request Proposal",
      includes: ["Custom SLA", "Multi-region rollout", "Executive governance", "Strategic optimization"],
    },
  ],
};

const comparison = [
  { feature: "Core Workspace", basic: true, pro: true, enterprise: true, scale: true },
  { feature: "Advanced Analytics", basic: false, pro: true, enterprise: true, scale: true },
  { feature: "Compliance Reporting", basic: false, pro: false, enterprise: true, scale: true },
  { feature: "Dedicated Success Manager", basic: false, pro: false, enterprise: true, scale: true },
  { feature: "Custom SLA", basic: false, pro: false, enterprise: false, scale: true },
];

const faqs = [
  {
    question: "Can we upgrade later as our team grows?",
    answer: "Yes. Plans can be upgraded at any stage without disrupting active workflows.",
  },
  {
    question: "Do you support enterprise procurement cycles?",
    answer: "Absolutely. Our team supports security reviews, legal workflows, and procurement documentation.",
  },
  {
    question: "Is onboarding included in every plan?",
    answer: "Every plan includes guided onboarding, with expanded support tiers in higher plans.",
  },
];

const onboarding = [
  {
    title: "Plan Selection",
    text: "Align features and governance requirements with your delivery scope.",
  },
  {
    title: "Workspace Setup",
    text: "Configure roles, integrations, and reporting preferences with guided onboarding.",
  },
  {
    title: "Launch Support",
    text: "Go live with usage coaching, KPI tracking, and adoption support.",
  },
  {
    title: "Scale Review",
    text: "Review performance and upgrade path as your operational needs evolve.",
  },
];

const procurementSupport = [
  "Security documentation and architecture overviews",
  "Legal and procurement cycle support",
  "Budgetary and formal proposal alignment",
  "Implementation planning with milestone estimates",
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleCheckout = async (plan: string) => {
    setLoadingPlan(plan);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan, billing }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const data = (await response.json()) as { url?: string; error?: string };
      if (!data.url) {
        throw new Error(data.error ?? "Missing checkout session URL");
      }

      window.location.href = data.url;
    } catch {
      alert("Unable to start checkout. Please try again.");
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <section className="section-gap">
      <div className="container-shell space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">Pricing</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Flexible plans for teams at every growth stage.</h1>
          <p className="text-[color:var(--muted)] sm:text-lg">
            Clear packages with transparent feature coverage so you can align technology spend with measurable outcomes.
          </p>
        </div>

        <div className="inline-flex rounded-xl border border-[color:var(--line)] bg-white p-1">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${billing === "monthly" ? "bg-[color:var(--brand)] text-white" : "text-[color:var(--muted)]"}`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBilling("yearly")}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${billing === "yearly" ? "bg-[color:var(--brand)] text-white" : "text-[color:var(--muted)]"}`}
          >
            Yearly
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans[billing].map((plan) => (
            <article
              key={plan.name}
              className={`card-soft relative p-6 ${plan.featured ? "border-[color:var(--brand)] ring-2 ring-[color:var(--brand)]/20 shadow-[0_18px_48px_rgba(15,118,110,0.18)]" : ""}`}
            >
              {plan.featured ? (
                <p className="absolute -top-3 right-4 rounded-full bg-[color:var(--brand)] px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </p>
              ) : null}
              <p className="text-sm font-semibold text-[color:var(--brand)]">{plan.name}</p>
              <p className="mt-3 text-4xl font-bold">{plan.price}</p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">{plan.subtitle}</p>

              <ul className="mt-5 space-y-2 text-sm text-[color:var(--muted)]">
                {plan.includes.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="size-4 text-[color:var(--brand)]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => handleCheckout(plan.name)}
                disabled={loadingPlan === plan.name}
                className={`mt-6 w-full ${plan.featured ? "btn-primary" : "btn-secondary"} disabled:opacity-70`}
              >
                {loadingPlan === plan.name ? "Redirecting..." : `Subscribe ${plan.name === "Scale" ? "Now" : "Now"}`}
              </button>
            </article>
          ))}
        </div>

        <section className="card-soft overflow-hidden">
          <div className="border-b border-[color:var(--line)] p-6 sm:p-8">
            <h2 className="text-2xl">Feature Comparison</h2>
            <p className="mt-1 text-sm text-[color:var(--muted)]">A quick look at capabilities across plans.</p>
          </div>
          <div className="overflow-x-auto p-4 sm:p-6">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[color:var(--line)] text-[color:var(--muted)]">
                  <th className="px-3 py-3 font-medium">Feature</th>
                  <th className="px-3 py-3 font-medium">Basic</th>
                  <th className="px-3 py-3 font-medium">Pro</th>
                  <th className="px-3 py-3 font-medium">Enterprise</th>
                  <th className="px-3 py-3 font-medium">Scale</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={row.feature} className={`border-b border-[color:var(--line)]/60 transition hover:bg-[color:var(--surface-soft)] ${index % 2 === 0 ? "bg-white" : "bg-[color:var(--surface-elevated)]"}`}>
                    <td className="px-3 py-3 font-medium">{row.feature}</td>
                    <td className="px-3 py-3">{row.basic ? "Yes" : "-"}</td>
                    <td className="px-3 py-3">{row.pro ? "Yes" : "-"}</td>
                    <td className="px-3 py-3">{row.enterprise ? "Yes" : "-"}</td>
                    <td className="px-3 py-3">{row.scale ? "Yes" : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">Onboarding Timeline</p>
            <h2 className="section-title">How teams typically get value from week one.</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {onboarding.map((step, index) => (
              <article key={step.title} className="card-soft p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">Stage {index + 1}</p>
                <h3 className="mt-2 text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">Enterprise Procurement</p>
            <h2 className="section-title">Support for security, legal, and procurement workflows.</h2>
          </div>
          <div className="mt-6 card-soft p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {procurementSupport.map((item) => (
                <article key={item} className="rounded-xl border border-[color:var(--line)] bg-white p-4 text-sm text-[color:var(--muted)]">
                  {item}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">FAQ</p>
            <h2 className="mt-2 text-3xl">Answers to common pricing questions.</h2>
          </div>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="card-soft p-6">
                <h3 className="text-lg">{faq.question}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="card-soft overflow-hidden bg-[linear-gradient(120deg,#0f766e_0%,#0b4f4a_85%)] p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Need a custom plan?</p>
              <h2 className="mt-2 text-3xl">We can tailor pricing for complex operating requirements.</h2>
              <p className="mt-3 text-sm text-white/80">Engage our team for procurement-ready proposals and enterprise support tiers.</p>
            </div>
            <Link href="/contact" className="mt-6 inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-strong)] lg:mt-0">
              Speak to Sales
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
