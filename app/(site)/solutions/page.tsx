import { BriefcaseBusiness, HeartPulse, Landmark, ShoppingBag, Truck, University } from "lucide-react";
import Link from "next/link";

const industries = [
  {
    title: "Banking & Financial Services",
    text: "Digital onboarding, transaction systems, and customer platform modernization for finance teams.",
    icon: Landmark,
  },
  {
    title: "Insurance & Risk",
    text: "Workflow automation and policy lifecycle platforms with secure data architecture at the core.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Healthcare Operations",
    text: "Data-first software solutions for compliant service delivery, reporting, and patient administration.",
    icon: HeartPulse,
  },
  {
    title: "Retail & Commerce",
    text: "Scalable digital systems connecting channels, customer experiences, and payment operations.",
    icon: ShoppingBag,
  },
  {
    title: "Logistics & Supply Chain",
    text: "Real-time operational visibility platforms for tracking, scheduling, and fulfillment orchestration.",
    icon: Truck,
  },
  {
    title: "Public Sector Programs",
    text: "Robust digital service delivery systems for citizen-facing and internal government workflows.",
    icon: University,
  },
];

const useCases = [
  {
    title: "Digital Onboarding Acceleration",
    detail: "Reduce onboarding turnaround with verification orchestration and workflow automation.",
  },
  {
    title: "Real-Time Operations Monitoring",
    detail: "Unify operational metrics from fragmented systems into one actionable command center.",
  },
  {
    title: "Legacy Modernization Programs",
    detail: "Incrementally replace brittle legacy services without disrupting day-to-day operations.",
  },
  {
    title: "Decision Support Analytics",
    detail: "Build analytics pipelines that provide leadership with reliable, near real-time visibility.",
  },
];

const process = [
  "Assess current-state architecture and operational bottlenecks",
  "Design industry-specific solution blueprint and governance controls",
  "Deliver in phased releases with stakeholder checkpoints",
  "Optimize and scale with KPI-driven iteration cycles",
];

const stack = ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "AWS", "Redis", "Kubernetes", "Grafana"];

const faqs = [
  {
    question: "Can one solution blueprint span multiple business units?",
    answer: "Yes. We design modular blueprints that can be adapted across departments and operating models.",
  },
  {
    question: "How do you manage migration risk from legacy systems?",
    answer: "We use phased rollout strategies, dual-run validation, and observable migration checkpoints.",
  },
];

export default function SolutionsPage() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">Solutions & Industries</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">
            Solution blueprints tailored to operational realities in each sector.
          </h1>
          <p className="text-[color:var(--muted)] sm:text-lg">
            We adapt proven engineering patterns to the regulatory and operational demands of different industries, reducing risk while accelerating delivery.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry.title} className="card-soft p-6">
              <industry.icon className="size-6 text-[color:var(--brand)]" />
              <h2 className="mt-4 text-xl">{industry.title}</h2>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{industry.text}</p>
            </article>
          ))}
        </div>

        <section className="card-soft p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">Common Use Cases</p>
          <h2 className="mt-2 text-3xl">Practical solution patterns applied across industries.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <article key={item.title} className="rounded-xl border border-[color:var(--line)] bg-white p-5">
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">Implementation Tracks</p>
            <h2 className="mt-2 text-3xl">Choose the path that aligns with your operating model.</h2>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <article className="card-soft p-6">
              <h3 className="text-xl">Advisory Track</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Architecture, governance, and roadmap support for internal delivery teams.</p>
            </article>
            <article className="card-soft p-6">
              <h3 className="text-xl">Build Track</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Dedicated squads that execute end-to-end implementation and release cycles.</p>
            </article>
            <article className="card-soft p-6">
              <h3 className="text-xl">Managed Track</h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Continuous optimization and platform support for ongoing operational growth.</p>
            </article>
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">Our Process</p>
            <h2 className="section-title">A structured approach for complex solution delivery.</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {process.map((item, index) => (
              <article key={item} className="card-soft p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">Stage {index + 1}</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">Technology Stack</p>
            <h2 className="section-title">Proven technologies behind our solution architecture.</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((item) => (
              <div key={item} className="rounded-xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm font-semibold">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">FAQs</p>
            <h2 className="section-title">Questions about implementing solutions at scale.</h2>
          </div>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <article key={item.question} className="card-soft p-6">
                <h3 className="text-lg">{item.question}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="card-soft overflow-hidden bg-[linear-gradient(120deg,#0f766e_0%,#0b4f4a_85%)] p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Call To Action</p>
              <h2 className="mt-2 text-3xl">Need a solution blueprint tailored to your sector constraints?</h2>
              <p className="mt-3 text-sm text-white/80">Our team can map architecture, governance, and rollout milestones for your program.</p>
            </div>
            <Link href="/contact" className="mt-6 inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-strong)] lg:mt-0">
              Talk to a Specialist
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}