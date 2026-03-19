import { Mail, MapPin, Phone } from "lucide-react";

const process = [
  "Initial discovery call to align priorities and timeline",
  "Solution framing with scope, team structure, and milestones",
  "Delivery kickoff with transparent reporting cadence",
];

const industries = ["Banking", "Insurance", "Healthcare", "Retail", "Logistics", "Public Sector"];

const quickStats = [
  { label: "Initial response", value: "< 1 business day" },
  { label: "Discovery scheduling", value: "Within 2 business days" },
  { label: "Regions supported", value: "APAC + EMEA" },
];

const engagementTracks = [
  {
    title: "Advisory Track",
    text: "Strategy, architecture, and delivery planning support for internal teams and PMO functions.",
  },
  {
    title: "Build Track",
    text: "End-to-end squad delivery for platform development, launch readiness, and iterative improvements.",
  },
  {
    title: "Managed Track",
    text: "Ongoing optimization, governance reporting, and operational scale support after launch.",
  },
];

const preparationChecklist = [
  "Current business goals and expected outcomes",
  "Key system constraints and integration dependencies",
  "Target timeline and delivery expectations",
  "Stakeholders involved in decision making",
];

const offices = [
  {
    city: "Singapore (HQ)",
    detail: "12 Marina View, Singapore 018961",
  },
  {
    city: "APAC Delivery Coverage",
    detail: "Distributed support for Singapore, Malaysia, Indonesia, and Australia time zones",
  },
  {
    city: "EMEA Collaboration Window",
    detail: "Aligned communication windows for cross-region program execution",
  },
];

const faqs = [
  {
    question: "How quickly can we schedule a discovery call?",
    answer: "Most discovery calls can be arranged within two business days depending on region and team availability.",
  },
  {
    question: "Can you support multi-country programs?",
    answer: "Yes. Our teams support cross-timezone collaboration and region-aware delivery planning.",
  },
  {
    question: "Do you work with internal engineering and vendor teams?",
    answer: "Yes. We commonly collaborate with internal product, engineering, PMO, and partner vendor teams.",
  },
];

export default function ContactPage() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">Contact</p>
              <h1 className="mt-2 text-4xl leading-tight sm:text-5xl">Let us plan your next digital milestone.</h1>
              <p className="mt-3 text-[color:var(--muted)]">
                Share your goals and timelines. Our team will respond with a structured engagement proposal.
              </p>
            </div>

            <div className="space-y-3 text-sm text-[color:var(--muted)]">
              <p className="flex items-center gap-2">
                <Mail className="size-4 text-[color:var(--brand)]" /> hello@lincolntagore.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4 text-[color:var(--brand)]" /> +65 6000 1200
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="size-4 text-[color:var(--brand)]" /> 12 Marina View, Singapore 018961
              </p>
            </div>

            <div className="card-soft p-6">
              <h2 className="text-xl">Regional Presence</h2>
              <p className="mt-2 text-sm text-[color:var(--muted)]">Singapore HQ with distributed delivery support across APAC and EMEA time zones.</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {quickStats.map((item) => (
                <article key={item.label} className="card-soft p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold">{item.value}</p>
                </article>
              ))}
            </div>
          </div>

          <form className="card-soft space-y-4 p-6 sm:p-8">
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Full Name</span>
              <input
                type="text"
                className="input-premium"
                placeholder="Enter your full name"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Work Email</span>
              <input
                type="email"
                className="input-premium"
                placeholder="Enter your work email"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Company Name</span>
              <input
                type="text"
                className="input-premium"
                placeholder="Your organization"
              />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Service Interest</span>
                <select className="input-premium">
                  <option>Custom Software Engineering</option>
                  <option>Fintech Platform Development</option>
                  <option>Technology Consulting</option>
                  <option>Mobile Product Delivery</option>
                  <option>Security and Compliance</option>
                  <option>System Integration</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Project Timeline</span>
                <select className="input-premium">
                  <option>0-3 months</option>
                  <option>3-6 months</option>
                  <option>6-12 months</option>
                  <option>12+ months</option>
                </select>
              </label>
            </div>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Estimated Budget Range</span>
              <select className="input-premium">
                <option>USD 25k - 75k</option>
                <option>USD 75k - 150k</option>
                <option>USD 150k - 300k</option>
                <option>USD 300k+</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium">Message</span>
              <textarea
                rows={5}
                className="input-premium"
                placeholder="Describe your business goals"
              />
            </label>
            <label className="flex items-start gap-2 text-sm text-[color:var(--muted)]">
              <input type="checkbox" className="mt-1" />
              I agree to be contacted by Lincoln Tagore Pte. Ltd. regarding this inquiry.
            </label>
            <button type="button" className="btn-primary w-full">
              Send Inquiry
            </button>
          </form>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="card-soft overflow-hidden">
            <div className="border-b border-[color:var(--line)] p-5 sm:p-6">
              <h2 className="text-2xl">Location Map</h2>
              <p className="mt-1 text-sm text-[color:var(--muted)]">Placeholder map section for office location context.</p>
            </div>
            <div
              className="h-72 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(130deg, rgba(15,118,110,0.45), rgba(11,79,74,0.7)), url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
          </article>

          <article className="card-soft p-6">
            <h2 className="text-2xl">Additional Information</h2>
            <div className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
              <p className="rounded-xl border border-[color:var(--line)] bg-white p-4">Business hours: Monday to Friday, 09:00 to 18:00 (SGT).</p>
              <p className="rounded-xl border border-[color:var(--line)] bg-white p-4">Response commitment: Initial response within one business day.</p>
              <p className="rounded-xl border border-[color:var(--line)] bg-white p-4">Support channels: Email, scheduled consultations, and project discovery workshops.</p>
            </div>
          </article>
        </div>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">Office and Coverage</p>
            <h2 className="section-title">Where we coordinate delivery and collaboration.</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {offices.map((office) => (
              <article key={office.city} className="card-soft p-5">
                <p className="text-sm font-semibold">{office.city}</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{office.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">Our Process</p>
            <h2 className="section-title">What happens after you contact us.</h2>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {process.map((item, index) => (
              <article key={item} className="card-soft p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">Step {index + 1}</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">Industries We Serve</p>
            <h2 className="section-title">Sector experience that accelerates alignment.</h2>
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
            <p className="section-kicker">Engagement Tracks</p>
            <h2 className="section-title">Choose a collaboration model that fits your operating needs.</h2>
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {engagementTracks.map((track) => (
              <article key={track.title} className="card-soft card-hover p-6">
                <h3 className="text-xl">{track.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{track.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">Prepare for the Call</p>
            <h2 className="section-title">A quick checklist for a productive discovery session.</h2>
          </div>
          <div className="mt-6 card-soft p-6 sm:p-8">
            <ul className="space-y-3 text-sm text-[color:var(--muted)]">
              {preparationChecklist.map((item) => (
                <li key={item} className="rounded-xl border border-[color:var(--line)] bg-white p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-divider pt-12">
          <div className="max-w-2xl">
            <p className="section-kicker">FAQs</p>
            <h2 className="section-title">Before we start, here are common answers.</h2>
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
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Ready to Start</p>
              <h2 className="mt-2 text-3xl">Share your goals and we will shape a practical execution path.</h2>
              <p className="mt-3 text-sm text-white/80">Our team will align scope, milestones, and governance expectations from day one.</p>
            </div>
            <button type="button" className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-strong)] lg:mt-0">
              Request Discovery Session
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}