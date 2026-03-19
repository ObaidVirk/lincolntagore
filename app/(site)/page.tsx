"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesCombined,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
  Cpu,
  Database,
  Workflow,
  BriefcaseBusiness,
  HelpCircle,
  Target,
  Gauge,
  Handshake,
  Building2,
} from "lucide-react";
import { useTranslation } from "@/app/lib/translation-context";

const capabilities = [
  {
    title: "Fintech Product Engineering",
    text: "Digital account platforms, secure transaction rails, and modern customer-facing finance apps.",
    icon: ShieldCheck,
  },
  {
    title: "Intelligent Workflow Systems",
    text: "Automation-first internal systems that reduce process friction across finance, operations, and support.",
    icon: Layers,
  },
  {
    title: "Data-Led Growth Architecture",
    text: "Decision-ready analytics foundations that convert operational data into measurable business outcomes.",
    icon: ChartNoAxesCombined,
  },
];

const trustLogos = ["MERCURY BANK", "PULSEPAY", "ORBIT CAPITAL", "AURELIA GROUP", "VISTA HOLDINGS", "NEO CRED"];

const whyChoose = [
  {
    title: "Business-Aligned Delivery",
    text: "We structure roadmaps around operational outcomes, not just technical milestones.",
    icon: Target,
  },
  {
    title: "Performance With Governance",
    text: "Fast execution with enterprise-grade controls for quality, risk, and compliance.",
    icon: Gauge,
  },
  {
    title: "Long-Term Partnership Model",
    text: "Cross-functional teams that stay accountable from planning through scale operations.",
    icon: Handshake,
  },
];

const industriesServed = [
  "Banking & Financial Services",
  "Insurance & Risk",
  "Healthcare Operations",
  "Retail & Commerce",
  "Logistics & Supply Chain",
  "Public Sector Programs",
];

const metrics = [
  { label: "Projects Delivered", value: "320+" },
  { label: "Global Team Strength", value: "180+" },
  { label: "Client Satisfaction", value: "96%" },
  { label: "Avg. Program ROI Window", value: "< 6 months" },
];

const detailedFeatures = [
  {
    title: "Platform Architecture Design",
    text: "Future-ready technical blueprints with governance, observability, and integration resilience.",
    icon: Cpu,
  },
  {
    title: "Secure Data Foundations",
    text: "Operational data platforms engineered with compliance controls and dependable audit trails.",
    icon: Database,
  },
  {
    title: "Cross-Team Delivery Framework",
    text: "Shared delivery standards that keep business teams, engineering, and leadership in alignment.",
    icon: Workflow,
  },
  {
    title: "Program Value Realization",
    text: "KPI-led reporting frameworks to track adoption, efficiency, and operational return on investment.",
    icon: BriefcaseBusiness,
  },
];

const howItWorks = [
  {
    title: "Discover",
    text: "We map business goals, operational constraints, and stakeholder expectations into a delivery charter.",
  },
  {
    title: "Design",
    text: "Product, architecture, and governance tracks are designed in parallel for faster execution alignment.",
  },
  {
    title: "Deliver",
    text: "Cross-functional squads ship incremental releases with clear KPI tracking and quality assurance gates.",
  },
  {
    title: "Scale",
    text: "Post-launch optimization, platform hardening, and capability handover ensure sustainable growth.",
  },
];

const testimonials = [
  {
    quote:
      "Lincoln Tagore gave us an execution model that improved release confidence while reducing incident frequency.",
    name: "Chief Operations Officer",
    company: "Regional Digital Bank",
  },
  {
    quote:
      "Their fintech engineering team translated complex compliance rules into an elegant customer experience.",
    name: "Head of Product",
    company: "Global Payment Platform",
  },
  {
    quote:
      "From strategy to delivery, the engagement brought structure, speed, and measurable value across departments.",
    name: "Program Director",
    company: "Enterprise Services Group",
  },
];

const caseStudies = [
  {
    title: "Onboarding Journey Modernization",
    result: "41% faster verified onboarding completion",
    detail: "Redesigned digital onboarding with secure verification orchestration and streamlined internal approvals.",
  },
  {
    title: "Compliance Workflow Transformation",
    result: "32% reduction in manual review workload",
    detail: "Built rule-based compliance routing with reporting transparency for risk and operations leadership.",
  },
  {
    title: "Cross-Market Platform Scale-Up",
    result: "99.95% uptime while expanding to 3 regions",
    detail: "Strengthened architecture and release governance to support new market launches with low incident rates.",
  },
  {
    title: "Service Operations Intelligence",
    result: "28% improvement in service response efficiency",
    detail: "Unified fragmented operational data into one leadership-ready performance layer.",
  },
];

const stack = ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "GraphQL", "AWS", "Redis", "Docker"];

const faqs = [
  {
    question: "How do you start a new engagement?",
    answer:
      "We begin with a structured discovery sprint covering goals, constraints, governance expectations, and measurable outcomes.",
  },
  {
    question: "Can you work with existing internal engineering teams?",
    answer:
      "Yes. Our squads can embed into your existing operating model and collaborate directly with internal product and engineering leads.",
  },
  {
    question: "Do you support regulated industries?",
    answer:
      "Our delivery approach is built for regulated sectors, with quality controls, audit-readiness practices, and traceability across releases.",
  },
];

function SectionCta({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}) {
  return (
    <div className="container-shell pt-8">
      <div className="rounded-2xl border border-[color:var(--line)] bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
        <div className="max-w-2xl">
          <h3 className="text-2xl">{title}</h3>
          <p className="mt-2 text-sm text-[color:var(--muted)]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3 sm:mt-0">
          <Link href={primaryHref} className="btn-primary">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="btn-secondary">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <section className="section-gap pb-14">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-[color:var(--surface-soft)] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--brand-strong)]">
              Lincoln Tagore Pte. Ltd.
            </p>
            <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {t("hero.headline", "Enterprise software and fintech experiences built for confident scale.")}
            </h1>
            <p className="max-w-xl text-base text-[color:var(--muted)] sm:text-lg">
              {t(
                "hero.subheadline",
                "We partner with modern organizations to design, build, and optimize digital platforms that are secure, adaptable, and outcomes-driven."
              )}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="btn-primary">
                {t("hero.cta", "Explore Services")} <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start a Conversation
              </Link>
            </div>
          </div>

          <div className="card-soft card-hover overflow-hidden">
            <div
              className="h-80 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(140deg, rgba(12,53,58,0.8), rgba(15,118,110,0.55)), url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold">180+</p>
                <p className="text-sm text-[color:var(--muted)]">Delivery experts</p>
              </div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-[color:var(--muted)]">Operational visibility</p>
              </div>
              <div>
                <p className="text-3xl font-bold">99.95%</p>
                <p className="text-sm text-[color:var(--muted)]">Platform reliability target</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-shell">
          <div className="rounded-2xl border border-[color:var(--line)] bg-white p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">Trusted by operations-led organizations</p>
            <div className="mt-4 grid gap-3 text-center text-xs font-semibold uppercase tracking-wide text-[color:var(--muted)] sm:grid-cols-3 lg:grid-cols-6">
              {trustLogos.map((logo) => (
                <div key={logo} className="rounded-lg border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-2 py-3">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap pt-10">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {capabilities.map((item) => (
            <article key={item.title} className="card-soft card-hover p-6">
              <item.icon className="size-7 text-[color:var(--brand)]" />
              <h3 className="mt-4 text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-gap pt-2">
        <div className="container-shell space-y-6">
          <div className="max-w-2xl">
            <p className="section-kicker">Why Choose Lincoln Tagore</p>
            <h2 className="section-title">A partner built for outcomes, control, and long-term value.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {whyChoose.map((item) => (
              <article key={item.title} className="card-soft card-hover p-6">
                <item.icon className="size-6 text-[color:var(--brand)]" />
                <h3 className="mt-3 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCta
        title="Need a roadmap before committing to delivery?"
        description="Start with a focused planning session and receive a practical phased execution blueprint."
        primaryLabel="Book Discovery"
        primaryHref="/contact"
        secondaryLabel="View Solutions"
        secondaryHref="/solutions"
      />

      <section className="section-gap pt-2">
        <div className="container-shell space-y-6">
          <div className="max-w-2xl">
            <p className="section-kicker">Industries Served</p>
            <h2 className="section-title">Delivery models adapted to operational and regulatory realities.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industriesServed.map((industry) => (
              <article key={industry} className="card-soft card-hover flex items-center gap-3 p-5">
                <Building2 className="size-5 text-[color:var(--brand)]" />
                <p className="text-sm font-semibold">{industry}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCta
        title="Looking for sector-specific implementation guidance?"
        description="Share your context and we will propose architecture and governance patterns aligned to your domain."
        primaryLabel="Talk to a Specialist"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />

      <section className="section-gap pt-2">
        <div className="container-shell">
          <div className="card-soft p-7 sm:p-8">
            <p className="section-kicker">Performance Metrics</p>
            <h2 className="section-title">Track record built through measurable enterprise outcomes.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-xl border border-[color:var(--line)] bg-white p-5">
                  <p className="text-3xl font-bold text-[color:var(--brand-strong)]">{item.value}</p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-shell card-soft overflow-hidden">
          <div className="grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <p className="section-kicker">Delivery Approach</p>
              <h2 className="section-title">Rapid cycles with enterprise governance built in from day one.</h2>
            </div>
            <div className="grid gap-4 text-sm text-[color:var(--muted)] sm:grid-cols-2">
              <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">
                <Zap className="mb-2 size-5 text-[color:var(--accent)]" />
                Product squads aligned to business KPIs.
              </div>
              <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">
                Compliance-aware delivery controls for regulated workflows.
              </div>
              <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">
                End-to-end architecture ownership from design to support.
              </div>
              <div className="rounded-xl border border-[color:var(--line)] bg-white p-4">
                Transparent reporting through shared execution dashboards.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap pt-2">
        <div className="container-shell space-y-6">
          <div className="max-w-2xl">
            <p className="section-kicker">Detailed Features</p>
            <h2 className="section-title">Built for enterprise standards without enterprise friction.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {detailedFeatures.map((item) => (
              <article key={item.title} className="card-soft card-hover p-6">
                <item.icon className="size-6 text-[color:var(--brand)]" />
                <h3 className="mt-3 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap pt-2">
        <div className="container-shell space-y-8">
          <div className="max-w-2xl">
            <p className="section-kicker">Our Process</p>
            <h2 className="section-title">A delivery model engineered for speed and control.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {howItWorks.map((step, index) => (
              <article key={step.title} className="card-soft card-hover p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">Step {index + 1}</p>
                <h3 className="mt-2 text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap pt-2">
        <div className="container-shell space-y-8">
          <div className="max-w-2xl">
            <p className="section-kicker">Client Testimonials</p>
            <h2 className="section-title">Trusted by teams driving mission-critical programs.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveTestimonial(index)}
                className={`card-soft card-hover p-6 text-left ${
                  activeTestimonial === index ? "border-[color:var(--brand)] shadow-[0_18px_45px_rgba(15,118,110,0.18)]" : ""
                }`}
              >
                <Sparkles className="size-5 text-[color:var(--accent)]" />
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-[color:var(--muted)]">{item.company}</p>
              </button>
            ))}
          </div>
          <div className="card-soft gradient-panel p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">Highlighted Testimonial</p>
            <p className="mt-3 text-base text-[color:var(--text)]">&ldquo;{testimonials[activeTestimonial].quote}&rdquo;</p>
            <p className="mt-3 text-sm font-semibold">{testimonials[activeTestimonial].name}</p>
            <p className="text-xs text-[color:var(--muted)]">{testimonials[activeTestimonial].company}</p>
          </div>
        </div>
      </section>

      <section className="section-gap pt-2">
        <div className="container-shell space-y-8">
          <div className="max-w-2xl">
            <p className="section-kicker">Case Studies</p>
            <h2 className="section-title">Real delivery outcomes from complex enterprise programs.</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <article key={item.title} className="card-soft card-hover p-6">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-[color:var(--brand)]">{item.result}</p>
                <p className="mt-3 text-sm text-[color:var(--muted)]">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCta
        title="Want outcomes like these for your organization?"
        description="We can shape a success-focused implementation path based on your current systems and growth goals."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="Compare Plans"
        secondaryHref="/pricing"
      />

      <section className="section-gap pt-2">
        <div className="container-shell">
          <div className="card-soft p-7 sm:p-8">
            <p className="section-kicker">Technology Stack</p>
            <h2 className="section-title">Modern technologies selected for speed, security, and scale.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {stack.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-4 py-3 text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap pt-2">
        <div className="container-shell">
          <div className="max-w-2xl">
            <p className="section-kicker">Frequently Asked Questions</p>
            <h2 className="section-title">Answers before we start your engagement.</h2>
          </div>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <article key={item.question} className="card-soft p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 size-5 text-[color:var(--brand)]" />
                  <div>
                    <h3 className="text-lg">{item.question}</h3>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">{item.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-shell">
          <div className="card-soft overflow-hidden bg-[linear-gradient(120deg,#0f766e_0%,#0b4f4a_85%)] p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">Ready To Build</p>
              <h2 className="mt-2 text-3xl">Accelerate your next platform initiative with Lincoln Tagore.</h2>
              <p className="mt-3 text-sm text-white/80">Bring your roadmap and we will shape a practical, measurable delivery path.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
              <Link href="/contact" className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-strong)]">
                Talk to Our Team
              </Link>
              <Link href="/pricing" className="inline-flex items-center rounded-xl border border-white/35 px-5 py-3 text-sm font-semibold text-white">
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}