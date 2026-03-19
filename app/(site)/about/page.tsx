import Link from "next/link";
import { Building2, Globe2, Lightbulb, Scale, Handshake, ShieldCheck, Timer, HelpCircle, CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Practical Innovation",
    text: "We balance forward-thinking technology with implementation discipline and clear business outcomes.",
    icon: Lightbulb,
  },
  {
    title: "Enterprise Trust",
    text: "Security, resilience, and transparency are engineered into every decision and every release.",
    icon: Scale,
  },
  {
    title: "Global Delivery Lens",
    text: "Cross-market product understanding helps us build solutions that scale beyond one geography.",
    icon: Globe2,
  },
  {
    title: "Long-Term Partnership",
    text: "We support strategic growth with durable architecture, dependable teams, and measurable value.",
    icon: Building2,
  },
];

const team = [
  {
    name: "Melissa Hart",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Daniel Tan",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Priya Nair",
    role: "Director, Product Strategy",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Owen Blake",
    role: "Delivery Excellence Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Company Foundation",
    detail: "Lincoln Tagore Pte. Ltd. was established to deliver enterprise-grade digital execution for growth-focused organizations.",
  },
  {
    year: "2020",
    title: "Fintech Delivery Expansion",
    detail: "Expanded from advisory projects into full platform implementation engagements for regulated financial workflows.",
  },
  {
    year: "2022",
    title: "Cross-Region Delivery Model",
    detail: "Introduced distributed delivery support across APAC and EMEA time zones for continuous program operations.",
  },
  {
    year: "2024",
    title: "Integrated Product and Governance Framework",
    detail: "Formalized a shared execution model combining product discovery, engineering quality, and executive reporting standards.",
  },
  {
    year: "2026",
    title: "Strategic Scale Focus",
    detail: "Strengthened long-term transformation partnerships with measurable KPI, resilience, and adoption objectives.",
  },
];

const valuePrinciples = [
  "Design for durability, not temporary technical fixes",
  "Keep execution transparent through measurable governance",
  "Align every milestone to practical business outcomes",
  "Build collaborative teams that transfer capability to clients",
];

const teamCapabilities = [
  "Program leadership with enterprise governance experience",
  "Architecture depth across fintech, SaaS, and operations platforms",
  "Product strategy integrated with engineering execution",
  "Release management and quality controls for scaled delivery",
];

const differentiators = [
  {
    title: "Outcome-Led Delivery",
    text: "Every roadmap is tied to measurable operational and product outcomes before execution starts.",
    icon: Timer,
  },
  {
    title: "Trusted Governance",
    text: "Our review gates and reporting structure support leadership visibility and low-risk release decisions.",
    icon: ShieldCheck,
  },
  {
    title: "Partnership Model",
    text: "We work as one team with your internal stakeholders from planning through post-launch optimization.",
    icon: Handshake,
  },
];

const process = [
  "Engagement framing with executive and operational stakeholders",
  "Capability mapping and technical architecture alignment",
  "Iterative implementation with quality and security controls",
  "Post-launch support, adoption acceleration, and KPI tracking",
];

const testimonials = [
  {
    quote: "Their team brought clarity to a complex transformation and helped us execute in a sustainable way.",
    role: "Chief Digital Officer, Enterprise Finance Group",
  },
  {
    quote: "We gained stronger release confidence, better stakeholder alignment, and measurable improvements in operational efficiency.",
    role: "Program Sponsor, Regional Services Organization",
  },
];

const faqs = [
  {
    question: "Do you support long-term transformation programs?",
    answer: "Yes. We support multi-phase initiatives from strategy framing through implementation and optimization.",
  },
  {
    question: "Can you collaborate with internal PMO and engineering teams?",
    answer: "Our operating model is designed for joint delivery with existing PMO, architecture, and engineering teams.",
  },
];

export default function AboutPage() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">About Us</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">
            We build digital systems that make complex businesses easier to run.
          </h1>
          <p className="text-[color:var(--muted)] sm:text-lg">
            Lincoln Tagore Pte. Ltd. is a technology partner for organizations modernizing software portfolios, financial workflows, and customer platforms. Our teams combine product strategy, engineering depth, and operational rigor to deliver solutions that stay reliable under growth.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {values.map((item) => (
            <article key={item.title} className="card-soft p-6">
              <item.icon className="size-6 text-[color:var(--brand)]" />
              <h2 className="mt-3 text-xl">{item.title}</h2>
              <p className="mt-2 text-sm text-[color:var(--muted)]">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="card-soft p-8 sm:p-10">
          <h2 className="text-2xl">What makes us different</h2>
          <div className="mt-5 grid gap-4 text-sm text-[color:var(--muted)] md:grid-cols-2">
            <p>Our teams are structured around business capabilities instead of isolated technical tasks.</p>
            <p>We prioritize architecture decisions that support scalability, observability, and cost clarity.</p>
            <p>Each engagement includes executive-level visibility through outcomes-focused governance.</p>
            <p>We design for long-term maintainability so internal teams can scale with confidence.</p>
          </div>
        </div>

        <div className="card-soft p-8 sm:p-10">
          <h2 className="text-2xl">Our Story</h2>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
            Lincoln Tagore Pte. Ltd. was formed with a simple goal: bring enterprise-level engineering quality and strategic clarity to organizations navigating rapid digital change. Over the years, we have expanded from delivery consulting into full lifecycle product partnerships, supporting clients from concept shaping to production optimization.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
            Today, our teams operate across software, fintech, and operational transformation initiatives, helping leaders make confident technology decisions with measurable impact.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="card-soft p-8">
            <h2 className="text-2xl">Mission</h2>
            <p className="mt-3 text-sm text-[color:var(--muted)] sm:text-base">
              Deliver resilient digital systems that improve how enterprises operate, serve customers, and adapt to evolving market demands.
            </p>
          </article>
          <article className="card-soft p-8">
            <h2 className="text-2xl">Vision</h2>
            <p className="mt-3 text-sm text-[color:var(--muted)] sm:text-base">
              Become the most trusted execution partner for organizations building next-generation digital capabilities in regulated and high-growth sectors.
            </p>
          </article>
        </div>

        <section className="card-soft p-8 sm:p-10">
          <p className="section-kicker">Values Charter</p>
          <h2 className="section-title">How our principles shape every engagement outcome.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {valuePrinciples.map((principle) => (
              <article key={principle} className="rounded-xl border border-[color:var(--line)] bg-white p-4 text-sm text-[color:var(--muted)]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 text-[color:var(--brand)]" />
                  <p>{principle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card-soft p-8 sm:p-10">
          <div className="max-w-2xl">
            <p className="section-kicker">Company Milestones</p>
            <h2 className="section-title">Key moments that shaped our delivery model.</h2>
          </div>
          <div className="mt-8 space-y-5">
            {milestones.map((item) => (
              <article key={item.year} className="rounded-2xl border border-[color:var(--line)] bg-white p-5 sm:flex sm:items-start sm:gap-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--brand)] sm:pt-1">{item.year}</p>
                <div className="mt-2 sm:mt-0">
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">Leadership Team</p>
            <h2 className="mt-2 text-3xl">Experienced operators with deep delivery expertise.</h2>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="card-soft overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(120deg, rgba(11,79,74,0.55), rgba(15,118,110,0.18)), url('${member.image}')`,
                  }}
                />
                <div className="p-5">
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-[color:var(--muted)]">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <section className="card-soft p-8 sm:p-10">
          <p className="section-kicker">Team Strengths</p>
          <h2 className="section-title">What our leadership and delivery teams bring to programs.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {teamCapabilities.map((capability) => (
              <article key={capability} className="rounded-xl border border-[color:var(--line)] bg-white p-4 text-sm text-[color:var(--muted)]">
                {capability}
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">Why Choose Us</p>
            <h2 className="section-title">A practical partner for high-stakes digital execution.</h2>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {differentiators.map((item) => (
              <article key={item.title} className="card-soft card-hover p-6">
                <item.icon className="size-6 text-[color:var(--brand)]" />
                <h3 className="mt-3 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">Our Process</p>
            <h2 className="section-title">How we guide programs from concept to reliable scale.</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {process.map((step, index) => (
              <article key={step} className="card-soft p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">Stage {index + 1}</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">Client Testimonials</p>
            <h2 className="section-title">What leaders say about working with Lincoln Tagore.</h2>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {testimonials.map((item) => (
              <article key={item.role} className="card-soft p-6">
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold">{item.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">FAQs</p>
            <h2 className="section-title">Common questions from new partners.</h2>
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
        </section>

        <section className="section-divider pt-12">
          <div className="card-soft overflow-hidden bg-[linear-gradient(120deg,#0f766e_0%,#0b4f4a_85%)] p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">About Lincoln Tagore</p>
              <h2 className="mt-2 text-3xl">Looking for a long-term technology execution partner?</h2>
              <p className="mt-3 text-sm text-white/80">Let us align strategy, architecture, and delivery governance around your growth priorities.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
              <Link href="/contact" className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-strong)]">
                Talk to Our Team
              </Link>
              <Link href="/services" className="inline-flex items-center rounded-xl border border-white/35 px-5 py-3 text-sm font-semibold text-white">
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}