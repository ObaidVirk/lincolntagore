'use client';

import { ArrowRight, Briefcase, Heart, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental wellness programs, and annual health checkups for all team members.',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Development',
    description: 'Annual training budget, conference attendance, mentorship programs, and clear career progression paths.',
  },
  {
    icon: Users,
    title: 'Work-Life Integration',
    description: 'Flexible working hours, remote work options, generous leave policies, and family support programs.',
  },
  {
    icon: Briefcase,
    title: 'Competitive Compensation',
    description: 'Market-competitive salaries, performance bonuses, stock options, and comprehensive retirement benefits.',
  },
];

const openPositions = [
  {
    title: 'Senior Full-Stack Engineer',
    level: 'Senior',
    location: 'Singapore',
    type: 'Full-time',
    description:
      'Lead architectural decisions and mentor junior engineers on large-scale platform projects. 5+ years of production experience with TypeScript/Node.js.',
  },
  {
    title: 'Product Designer',
    level: 'Mid',
    location: 'Singapore / Remote',
    type: 'Full-time',
    description:
      'Design premium user experiences for SaaS platforms. Portfolio with fintech or B2B experience preferred. Figma and prototyping expertise essential.',
  },
  {
    title: 'Infrastructure Engineer',
    level: 'Senior',
    location: 'Singapore',
    type: 'Full-time',
    description:
      'Build scalable cloud infrastructure on AWS/GCP. Kubernetes, IaC (Terraform), and observability platform experience. 4+ years in DevOps/SRE roles.',
  },
  {
    title: 'Solutions Architect',
    level: 'Senior',
    location: 'APAC Region',
    type: 'Full-time',
    description:
      'Partner with enterprise clients to design custom solutions. Pre-sales consulting and technical leadership. Financial services or enterprise software background required.',
  },
  {
    title: 'QA Engineer',
    level: 'Mid',
    location: 'Singapore / Remote',
    type: 'Full-time',
    description:
      'Build and maintain automated test frameworks. Experience with Cypress, Playwright, or similar. Python/TypeScript scripting and CI/CD integration.',
  },
  {
    title: 'Operations Manager',
    level: 'Mid',
    location: 'Singapore',
    type: 'Full-time',
    description:
      'Optimize internal operations and vendor management. Experience scaling teams from 20-100 people. Financial acumen and project management skills.',
  },
];

const culture = [
  {
    title: 'Ownership Mindset',
    text: 'We empower engineers to take end-to-end ownership of projects, from architecture through production support.',
  },
  {
    title: 'Continuous Learning',
    text: 'We invest in professional development through internal tech talks, external training, and cross-functional mentorship.',
  },
  {
    title: 'Quality First',
    text: 'We maintain high standards for code quality, design fidelity, and customer experience through collaborative review.',
  },
  {
    title: 'Inclusive Delivery',
    text: 'We celebrate diverse perspectives and backgrounds. Our strength comes from varied experiences and viewpoints.',
  },
];

const faqs = [
  {
    question: 'What is the typical interview process?',
    answer:
      'Most opportunities follow a 4-stage process: Initial phone screening (30 min) → Technical assessment or portfolio review → Team interviews (2-3 rounds) → Offer discussion. Timeline is typically 2-3 weeks.',
  },
  {
    question: 'Do you offer visa sponsorship?',
    answer:
      'Yes. For qualified candidates outside Singapore, we manage the entire visa sponsorship and relocation support process.',
  },
  {
    question: 'What is your remote work policy?',
    answer:
      'We offer flexible arrangements: fully remote, hybrid (2-3 days in office), or fully on-site depending on role and team needs.',
  },
  {
    question: 'How often are salaries reviewed?',
    answer:
      'Annual salary reviews happen in Q1 each year based on performance, market benchmarks, and role contributions.',
  },
];

export default function CareersPage() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-16">
        {/* Hero */}
        <div className="space-y-6 text-center lg:mx-auto lg:w-full lg:max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">Careers</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Build the future of digital transformation with us.</h1>
          <p className="text-lg text-[color:var(--muted)]">
            Join a team of 80+ innovators solving complex challenges across fintech, SaaS, and enterprise platforms.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {culture.map((item) => (
            <div key={item.title} className="card-soft space-y-3 p-6">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-[color:var(--muted)]">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold">Why Join Lincoln Tagore</h2>
            <p className="text-[color:var(--muted)]">Comprehensive support for your career growth and personal wellbeing</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-soft space-y-3 p-6">
                  <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[color:var(--brand)]/10">
                    <Icon className="size-5 text-[color:var(--brand)]" />
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-[color:var(--muted)]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Open Positions</h2>
            <p className="text-[color:var(--muted)]">Explore our current opportunities across engineering, design, and operations.</p>
          </div>
          <div className="space-y-4">
            {openPositions.map((job, idx) => (
              <div key={idx} className="card-soft group flex flex-col gap-4 p-6 transition-all hover:border-[color:var(--brand)] lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                <div className="min-w-0 flex-1 space-y-2">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-sm text-[color:var(--muted)]">{job.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="inline-block rounded-full bg-[color:var(--brand)]/10 px-3 py-1 text-xs font-medium text-[color:var(--brand)]">
                      {job.level}
                    </span>
                    <span className="inline-block rounded-full bg-[color:var(--surface-soft)] px-3 py-1 text-xs text-[color:var(--muted)]">
                      {job.location}
                    </span>
                    <span className="inline-block rounded-full bg-[color:var(--surface-soft)] px-3 py-1 text-xs text-[color:var(--muted)]">
                      {job.type}
                    </span>
                  </div>
                </div>
                <button className="btn-primary flex items-center gap-2 whitespace-nowrap">
                  Apply Now
                  <ArrowRight className="size-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { label: 'Team Members', value: '80+' },
            { label: 'Countries', value: '5' },
            { label: 'Avg. Tenure', value: '3.2 yrs' },
            { label: 'Women in Tech', value: '35%' },
            { label: 'Internal Promotions', value: '42%' },
          ].map((stat) => (
            <div key={stat.label} className="card-soft space-y-2 p-4 text-center">
              <p className="text-2xl font-semibold text-[color:var(--brand)]">{stat.value}</p>
              <p className="text-xs uppercase tracking-wide text-[color:var(--muted)]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
            <p className="text-[color:var(--muted)]">Common questions about joining our team</p>
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
            <h2 className="text-2xl font-semibold">Don&apos;t see your role?</h2>
            <p className="text-[color:var(--muted)]">Send us your resume and profile. We&apos;re always interested in exceptional talent.</p>
          </div>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Get in Touch
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
