import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowRightLeft,
  Handshake,
  Landmark,
  ShieldEllipsis,
  Smartphone,
  Workflow,
  CheckCircle2,
} from "lucide-react";

type ServiceData = {
  title: string;
  subtitle: string;
  summary: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  benefits: string[];
  workflow: string[];
  screenshots: { title: string; text: string; image: string }[];
};

const serviceDetails: Record<string, ServiceData> = {
  "custom-software-engineering": {
    title: "Custom Software Engineering",
    subtitle: "Build resilient digital products for high-growth operations",
    summary:
      "We design and deliver tailored web platforms, internal tools, and cloud-native systems aligned with your business capabilities and release goals.",
    icon: Workflow,
    features: [
      "Domain-driven architecture planning",
      "Scalable front-end and API design",
      "Quality automation and release readiness",
      "Observability and performance tuning",
    ],
    benefits: [
      "Faster delivery cycles with clearer ownership",
      "Lower technical debt across release phases",
      "Improved maintainability for internal teams",
    ],
    workflow: [
      "Discovery and scope mapping",
      "Architecture and backlog definition",
      "Sprint-based implementation",
      "Launch hardening and optimization",
    ],
    screenshots: [
      {
        title: "Product Dashboard UI",
        text: "A modular interface concept for cross-functional operations tracking.",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Workflow Configuration UI",
        text: "Policy-aware workflow setup to support enterprise approval processes.",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  "fintech-platform-development": {
    title: "Fintech Platform Development",
    subtitle: "Secure financial systems built for scale and compliance",
    summary:
      "From onboarding journeys to transaction orchestration, we deliver fintech platforms that balance customer experience, controls, and operational resilience.",
    icon: Landmark,
    features: [
      "Digital onboarding and verification flow design",
      "Transaction routing and reconciliation architecture",
      "Compliance and audit trail enablement",
      "High-availability payment operations design",
    ],
    benefits: [
      "Reduced onboarding turnaround time",
      "More reliable transaction operations",
      "Stronger risk and compliance readiness",
    ],
    workflow: [
      "Fintech capability assessment",
      "Regulatory-aligned solution architecture",
      "Phased implementation and validation",
      "Post-launch controls optimization",
    ],
    screenshots: [
      {
        title: "Onboarding Journey UI",
        text: "Customer onboarding mockup with secure data capture and status transparency.",
        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Transaction Monitoring UI",
        text: "Operational console for transaction visibility and alert handling.",
        image:
          "https://images.unsplash.com/photo-1551281044-8e7ea0f8e6f4?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  "technology-consulting": {
    title: "Technology Consulting",
    subtitle: "Strategic architecture and execution guidance for transformation",
    summary:
      "We support leadership teams with practical roadmaps, target-state architecture decisions, and governance frameworks that enable predictable delivery.",
    icon: Handshake,
    features: [
      "Current-state technology assessment",
      "Modernization roadmap and sequencing",
      "Delivery governance and KPI framework",
      "Operating model and team structure advisory",
    ],
    benefits: [
      "Higher decision confidence at leadership level",
      "Reduced transformation execution risk",
      "Clear prioritization for investment planning",
    ],
    workflow: [
      "Stakeholder alignment workshops",
      "Architecture and portfolio analysis",
      "Roadmap and governance blueprint",
      "Execution advisory and quality checkpoints",
    ],
    screenshots: [
      {
        title: "Roadmap Planning UI",
        text: "Strategic roadmap board concept for initiative sequencing and ownership.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Executive KPI Panel UI",
        text: "Leadership dashboard concept for progress tracking and risk visibility.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  "mobile-product-delivery": {
    title: "Mobile Product Delivery",
    subtitle: "Mobile experiences engineered for reliability and adoption",
    summary:
      "We build mobile products for customer and field operations use-cases, with focus on speed, usability, and secure integration with core platforms.",
    icon: Smartphone,
    features: [
      "Cross-platform mobile architecture",
      "Offline-first UX for operational teams",
      "Secure API integration and sync",
      "Performance optimization and release quality",
    ],
    benefits: [
      "Improved mobile user satisfaction",
      "Faster release cadence across devices",
      "Better data consistency in distributed operations",
    ],
    workflow: [
      "User journey and task analysis",
      "Interaction and architecture design",
      "Iterative delivery and QA hardening",
      "App launch and continuous improvements",
    ],
    screenshots: [
      {
        title: "Mobile Operations UI",
        text: "Field-ready mobile interface concept for operational task tracking.",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Mobile Insights UI",
        text: "Compact analytics screen concept for real-time decision support.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  "security-compliance-enablement": {
    title: "Security & Compliance Enablement",
    subtitle: "Embed trust and governance across your digital lifecycle",
    summary:
      "Our teams establish security-by-design delivery practices, control frameworks, and audit readiness structures for regulated and growth-focused organizations.",
    icon: ShieldEllipsis,
    features: [
      "Control design and policy mapping",
      "Secure architecture and data handling standards",
      "Audit trail and evidence management support",
      "Release governance and risk checkpoints",
    ],
    benefits: [
      "Reduced compliance exposure",
      "Improved audit preparedness",
      "Higher confidence in production rollouts",
    ],
    workflow: [
      "Risk and control baseline review",
      "Security and compliance blueprint",
      "Implementation with integrated controls",
      "Continuous governance and refinement",
    ],
    screenshots: [
      {
        title: "Control Center UI",
        text: "Security control monitoring concept for audit and compliance teams.",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Compliance Reporting UI",
        text: "Regulatory reporting view concept with traceability and status indicators.",
        image:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  "system-integration-services": {
    title: "System Integration Services",
    subtitle: "Connect critical systems with resilient data and service flows",
    summary:
      "We design robust integration layers that connect enterprise systems, automate data movement, and improve reliability across business-critical workflows.",
    icon: ArrowRightLeft,
    features: [
      "API and event-driven integration design",
      "Data mapping and transformation architecture",
      "Monitoring and failure recovery patterns",
      "Legacy-to-modern integration pathways",
    ],
    benefits: [
      "Fewer manual handoffs across systems",
      "Improved data quality and consistency",
      "Higher reliability in operational workflows",
    ],
    workflow: [
      "Integration landscape assessment",
      "Interface and orchestration design",
      "Phased connector implementation",
      "Operational monitoring and optimization",
    ],
    screenshots: [
      {
        title: "Integration Flow UI",
        text: "Pipeline orchestration concept showing event and API connectivity.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Data Sync Status UI",
        text: "Operations panel concept for sync health and exception tracking.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug];

  if (!service) {
    notFound();
  }

  const ServiceIcon = service.icon;

  return (
    <section className="section-gap">
      <div className="container-shell space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="section-kicker">Service Detail</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">{service.title}</h1>
          <p className="text-lg text-[color:var(--brand-strong)]">{service.subtitle}</p>
          <p className="text-[color:var(--muted)] sm:text-lg">{service.summary}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="card-soft p-6 sm:p-8">
            <ServiceIcon className="size-7 text-[color:var(--brand)]" />
            <h2 className="mt-4 text-2xl">Core Features</h2>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 text-[color:var(--brand)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card-soft p-6 sm:p-8">
            <h2 className="text-2xl">Service Benefits</h2>
            <div className="mt-4 space-y-3">
              {service.benefits.map((benefit) => (
                <p key={benefit} className="rounded-xl border border-[color:var(--line)] bg-white p-4 text-sm text-[color:var(--muted)]">
                  {benefit}
                </p>
              ))}
            </div>
          </article>
        </div>

        <section className="card-soft p-6 sm:p-8">
          <p className="section-kicker">Workflow Diagram</p>
          <h2 className="section-title">How this service is delivered from planning to scale.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {service.workflow.map((step, index) => (
              <div key={step} className="relative rounded-xl border border-[color:var(--line)] bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">Step {index + 1}</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{step}</p>
                {index < service.workflow.length - 1 ? (
                  <ArrowRight className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 text-[color:var(--brand)] xl:block" />
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="max-w-2xl">
            <p className="section-kicker">UI Screens</p>
            <h2 className="section-title">Experience previews for planning discussions.</h2>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {service.screenshots.map((shot) => (
              <article key={shot.title} className="card-soft overflow-hidden">
                <div
                  className="h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(15,118,110,0.45), rgba(11,79,74,0.6)), url('${shot.image}')`,
                  }}
                />
                <div className="p-6">
                  <h3 className="text-xl">{shot.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{shot.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card-soft overflow-hidden bg-[linear-gradient(120deg,#0f766e_0%,#0b4f4a_85%)] p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Next Step</p>
            <h2 className="mt-2 text-3xl">Let us tailor this service to your delivery priorities.</h2>
            <p className="mt-3 text-sm text-white/80">Share your goals, timeline, and constraints to receive a practical engagement proposal.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
            <Link href="/contact" className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-strong)]">
              Discuss Your Project
            </Link>
            <Link href="/services" className="inline-flex items-center rounded-xl border border-white/35 px-5 py-3 text-sm font-semibold text-white">
              Back to Services
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
