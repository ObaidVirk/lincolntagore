import Link from "next/link";
import { ArrowRightLeft, Handshake, Landmark, ShieldEllipsis, Smartphone, Workflow } from "lucide-react";

const services = [
  {
    slug: "custom-software-engineering",
    title: "Custom Software Engineering",
    text: "Purpose-built web and cloud platforms designed for reliability, speed, and long-term product growth.",
    icon: Workflow,
  },
  {
    slug: "fintech-platform-development",
    title: "Fintech Platform Development",
    text: "Secure digital finance products including account systems, payment workflows, and transaction tooling.",
    icon: Landmark,
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    text: "Architecture strategy, modernization roadmaps, and execution oversight for transformation programs.",
    icon: Handshake,
  },
  {
    slug: "mobile-product-delivery",
    title: "Mobile Product Delivery",
    text: "Native and cross-platform mobile experiences tailored for enterprise users and regulated environments.",
    icon: Smartphone,
  },
  {
    slug: "security-compliance-enablement",
    title: "Security & Compliance Enablement",
    text: "Security-by-design practices, governance controls, and audit-ready implementation standards.",
    icon: ShieldEllipsis,
  },
  {
    slug: "system-integration-services",
    title: "System Integration Services",
    text: "Connect core systems with resilient APIs, event pipelines, and data orchestration workflows.",
    icon: ArrowRightLeft,
  },
];

const process = [
  "Business and technical discovery workshops",
  "Architecture and delivery planning",
  "Sprint-based execution with measurable milestones",
  "Quality assurance, release management, and optimization",
];

const benefits = [
  "Reduced delivery risk with phased governance",
  "Faster stakeholder alignment through transparent reporting",
  "Scalable engineering standards across teams and vendors",
  "Operational readiness from initial launch",
];

const industries = ["Financial Services", "Insurance", "Healthcare", "Retail", "Logistics", "Public Sector"];

const caseStudies = [
  {
    title: "Payment Operations Revamp",
    result: "37% faster incident resolution time",
    text: "Introduced clearer service boundaries and observability standards across critical payment workflows.",
  },
  {
    title: "Data Pipeline Modernization",
    result: "2.4x reporting speed improvement",
    text: "Restructured integration layers and analytics ingestion for high-volume enterprise reporting.",
  },
];

const faqs = [
  {
    question: "Do you offer fixed-scope delivery packages?",
    answer: "Yes, we can scope fixed deliverables or run adaptive programs based on your governance model.",
  },
  {
    question: "Can we begin with architecture advisory first?",
    answer: "Absolutely. Many clients start with architecture and delivery advisory before implementation.",
  },
];

export default function ServicesPage() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">Services</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">
            End-to-end expertise for high-performance digital programs.
          </h1>
          <p className="text-[color:var(--muted)] sm:text-lg">
            Our service portfolio combines strategic consulting with execution depth, helping organizations move from roadmaps to measurable delivery.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card-soft card-hover p-6">
              <service.icon className="size-6 text-[color:var(--brand)]" />
              <h2 className="mt-4 text-xl">{service.title}</h2>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{service.text}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-[color:var(--brand)] transition hover:text-[color:var(--brand-strong)]"
              >
                View service details
              </Link>
            </article>
          ))}
        </div>

        <section className="card-soft p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">Workflow</p>
          <h2 className="mt-2 text-3xl">From strategy to delivery in four practical stages.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {process.map((step, index) => (
              <div key={step} className="rounded-xl border border-[color:var(--line)] bg-white p-4 text-sm text-[color:var(--muted)]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">Step {index + 1}</p>
                <p className="mt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">Benefits</p>
            <h2 className="mt-2 text-3xl">Outcomes your teams can measure from quarter one.</h2>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <article key={benefit} className="card-soft p-6">
                <p className="text-sm text-[color:var(--muted)]">{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">Industries We Serve</p>
            <h2 className="section-title">Delivery patterns adapted to sector-specific realities.</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <div key={item} className="rounded-xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm font-semibold">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">Case Studies</p>
            <h2 className="section-title">Examples of measurable delivery outcomes.</h2>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {caseStudies.map((item) => (
              <article key={item.title} className="card-soft card-hover p-6">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-[color:var(--brand)]">{item.result}</p>
                <p className="mt-3 text-sm text-[color:var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">FAQs</p>
            <h2 className="section-title">Service engagement questions answered.</h2>
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
              <h2 className="mt-2 text-3xl">Need to compare delivery tracks in detail?</h2>
              <p className="mt-3 text-sm text-white/80">Explore each service mini-page and pick the operating model that best fits your roadmap.</p>
            </div>
            <div className="mt-6 flex gap-3 lg:mt-0">
              <Link href="/services/custom-software-engineering" className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-strong)]">
                Explore Tracks
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-xl border border-white/35 px-5 py-3 text-sm font-semibold text-white">
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}