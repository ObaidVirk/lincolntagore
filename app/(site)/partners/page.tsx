'use client';

import { ArrowRight, Cloud, Database, Lock, Zap } from 'lucide-react';
import Link from 'next/link';

const partners = [
  {
    name: 'AWS',
    category: 'Cloud Infrastructure',
    description: 'End-to-end architecture and migration support for EC2, RDS, Lambda, and managed services.',
  },
  {
    name: 'Google Cloud',
    category: 'Cloud Infrastructure',
    description: 'BigQuery analytics, Firestore data platforms, and GKE Kubernetes orchestration.',
  },
  {
    name: 'Datadog',
    category: 'Observability',
    description: 'Full-stack monitoring, APM integration, and real-time alerting for production systems.',
  },
  {
    name: 'Stripe',
    category: 'Payment Processing',
    description: 'PCI-compliant payment infrastructure and recurring billing for SaaS platforms.',
  },
  {
    name: 'Auth0',
    category: 'Identity & Access',
    description: 'Passwordless authentication, role-based access control, and compliance reporting.',
  },
  {
    name: 'Twilio',
    category: 'Communications',
    description: 'SMS, voice, and video APIs for customer engagement and operational workflows.',
  },
  {
    name: 'Kubernetes',
    category: 'Container Orchestration',
    description: 'Microservices deployment, scaling, and self-healing infrastructure management.',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    description: 'Enterprise-grade relational database with advanced indexing and ACID compliance.',
  },
];

const partnerCategories = [
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Global cloud platforms and infrastructure services for scalable deployments.',
    count: '3+ Partners',
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    description: 'Identity management, encryption, and regulatory compliance solutions.',
    count: '2+ Partners',
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    description: 'Data warehouses, business intelligence, and real-time analytics platforms.',
    count: '3+ Partners',
  },
  {
    icon: Zap,
    title: 'Developer Tools',
    description: 'APIs, SDKs, and utilities that accelerate development velocity.',
    count: '4+ Partners',
  },
];

const integrationBenefits = [
  {
    title: 'Proven Reliability',
    text: 'Pre-integrated with market-leading platforms we trust for production workloads.',
  },
  {
    title: 'Expert Support',
    text: 'Access to partner engineers and implementation specialists through our relationship.',
  },
  {
    title: 'Cost Optimization',
    text: 'Negotiated terms and best practices ensure optimal pricing and resource utilization.',
  },
  {
    title: 'Compliance Ready',
    text: 'Aligned solutions that meet SOC 2, ISO 27001, and industry-specific regulations.',
  },
];

const faqs = [
  {
    question: 'Can I bring my own preferred tools and platforms?',
    answer:
      'Yes. Our technology-agnostic approach supports custom stacks. We have expertise across most major platforms and can advise on compatibility.',
  },
  {
    question: 'How do you ensure integration quality?',
    answer:
      'Each integration is validated in staging with extended testing for security, performance, and data consistency before production deployment.',
  },
  {
    question: 'Do you handle multi-vendor integrations?',
    answer:
      'Yes. We manage complex multi-system orchestrations, including API layering, data synchronization, and conflict resolution across platforms.',
  },
  {
    question: 'What happens if a partner service goes down?',
    answer:
      'We implement resilience patterns: fallback mechanisms, queue buffering, and graceful degradation to maintain service continuity.',
  },
];

export default function PartnersPage() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-16">
        {/* Hero */}
        <div className="space-y-6 text-center lg:mx-auto lg:w-full lg:max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">Partnerships</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Built on trusted, proven technologies.</h1>
          <p className="text-lg text-[color:var(--muted)]">
            We integrate with industry-leading platforms to deliver scalable, secure, and compliant solutions.
          </p>
        </div>

        {/* Integration Benefits */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {integrationBenefits.map((item) => (
            <div key={item.title} className="card-soft space-y-3 p-6">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-[color:var(--muted)]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Partner Categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partnerCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.title} className="card-soft space-y-4 p-6">
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[color:var(--brand)]/10">
                  <Icon className="size-5 text-[color:var(--brand)]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">{cat.title}</h3>
                  <p className="text-sm text-[color:var(--muted)]">{cat.description}</p>
                </div>
                <p className="text-xs font-medium uppercase tracking-wide text-[color:var(--brand)]">{cat.count}</p>
              </div>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Technology Partners</h2>
            <p className="text-[color:var(--muted)]">Strategic integrations across infrastructure, security, and developer tools.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner, idx) => (
              <div key={idx} className="card-soft group space-y-3 p-6 transition-all hover:border-[color:var(--brand)]">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{partner.name}</h3>
                    <p className="text-xs uppercase tracking-wide text-[color:var(--brand)]">{partner.category}</p>
                  </div>
                  <ArrowRight className="size-4 text-[color:var(--brand)] opacity-0 transition-all group-hover:opacity-100" />
                </div>
                <p className="text-sm text-[color:var(--muted)]">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Models */}
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold">How We Collaborate</h2>
            <p className="text-[color:var(--muted)]">Multiple engagement models to support your partnership goals</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 lg:max-w-3xl lg:mx-auto">
            {[
              {
                title: 'Co-Deliver',
                text: 'Joint delivery engagements where our teams and partner specialists work side-by-side on customer solutions.',
              },
              {
                title: 'Resell',
                text: 'Channels where partner solutions are packaged and offered as part of our managed service offerings.',
              },
              {
                title: 'Integrate',
                text: 'Technical integrations embedded in our platform to create unified customer experiences.',
              },
            ].map((model) => (
              <div key={model.title} className="card-soft space-y-3 p-6">
                <h3 className="font-semibold">{model.title}</h3>
                <p className="text-sm text-[color:var(--muted)]">{model.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
            <p className="text-[color:var(--muted)]">Information about our partnerships and integrations</p>
          </div>
          <div className="space-y-4 lg:max-w-3xl lg:mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="card-soft space-y-3 p-6">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="text-sm text-[color:var(--muted)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card-soft space-y-6 p-8 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Are you a technology vendor?</h2>
            <p className="text-[color:var(--muted)]">Explore partnership opportunities to expand your customer reach and market presence.</p>
          </div>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Partner With Us
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
