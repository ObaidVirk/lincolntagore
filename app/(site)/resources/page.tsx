'use client';

import { ArrowRight, BookOpen, Download, Headphones, Play, Users } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';

const resources = [
  {
    type: 'Whitepaper',
    title: 'Enterprise Platform Architecture Patterns',
    description: 'Best practices for designing scalable, maintainable systems in financial services and B2B SaaS.',
    category: 'Architecture',
    date: 'Mar 2026',
    author: 'Lincoln Tagore',
    downloadSize: '2.4 MB',
  },
  {
    type: 'Guide',
    title: 'API Security Hardening Checklist',
    description: 'Complete security protocol for protecting REST, GraphQL, and WebSocket APIs against common vulnerabilities.',
    category: 'Security',
    date: 'Feb 2026',
    author: 'Security Team',
    downloadSize: '1.2 MB',
  },
  {
    type: 'Case Study',
    title: 'FinTech Platform Migration: 10x Performance Gains',
    description: 'How a legacy monolith was refactored into microservices, reducing latency by 87% and improving throughput.',
    category: 'Fintech',
    date: 'Jan 2026',
    author: 'Delivery Team',
    downloadSize: '3.1 MB',
  },
  {
    type: 'Template',
    title: 'SaaS Pricing Model Calculator',
    description: 'Excel model for building tiered pricing models, calculating unit economics, and scenario planning.',
    category: 'Business',
    date: 'Jan 2026',
    author: 'Product Team',
    downloadSize: '415 KB',
  },
  {
    type: 'Webinar Recording',
    title: 'Zero-Downtime Deployment Strategies',
    description: 'Recorded session covering blue-green deployments, canary releases, and feature flag orchestration.',
    category: 'DevOps',
    date: 'Dec 2025',
    author: 'Infrastructure Team',
    downloadSize: '156 MB',
  },
  {
    type: 'Whitepaper',
    title: 'Compliance Maturity for Early-Stage Startups',
    description: 'Pragmatic guidance on SOC 2, GDPR, and data residency requirements without over-engineering.',
    category: 'Compliance',
    date: 'Dec 2025',
    author: 'Lincoln Tagore',
    downloadSize: '1.8 MB',
  },
];

const categories = ['All', 'Architecture', 'Security', 'Fintech', 'Business', 'DevOps', 'Compliance'];

const tools = [
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Schedule a 1-hour architecture review with our senior engineers to validate your approach.',
  },
  {
    icon: Headphones,
    title: 'Office Hours',
    description: 'Weekly open sessions where customers can ask technical questions and share implementation patterns.',
  },
  {
    icon: Users,
    title: 'Community Forum',
    description: 'Connect with other customers implementing similar challenges. Share solutions and best practices.',
  },
  {
    icon: Play,
    title: 'Video Tutorials',
    description: 'Step-by-step guides for common deployment, integration, and operations workflows.',
  },
];

const faqs = [
  {
    question: 'How often are new resources published?',
    answer:
      'We release new whitepapers and guides monthly, webinar recordings bi-weekly, and templates as needed based on customer requests.',
  },
  {
    question: 'Can I request specific content?',
    answer:
      'Yes. Contact our content team to suggest topics. High-demand topics are prioritized for our resource calendar.',
  },
  {
    question: 'Are these resources available to non-customers?',
    answer:
      'Core content is public. Advanced whitepapers and recordings require registration or a support contract.',
  },
  {
    question: 'Can I share resources with my team?',
    answer:
      'Yes. Most resources are provided under a team license. You can distribute internally and use in training programs.',
  },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredResources = useMemo(() => {
    if (activeCategory === 'All') return resources;
    return resources.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section-gap">
      <div className="container-shell space-y-16">
        {/* Hero */}
        <div className="space-y-6 text-center lg:mx-auto lg:w-full lg:max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--brand)]">Resources</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Learn from our expertise and experience.</h1>
          <p className="text-lg text-[color:var(--muted)]">
            Access whitepapers, guides, webinar recordings, and tools to accelerate your digital transformation journey.
          </p>
        </div>

        {/* Featured Tools */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.title} className="card-soft space-y-3 p-6">
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[color:var(--brand)]/10">
                  <Icon className="size-5 text-[color:var(--brand)]" />
                </div>
                <h3 className="font-semibold">{tool.title}</h3>
                <p className="text-sm text-[color:var(--muted)]">{tool.description}</p>
              </div>
            );
          })}
        </div>

        {/* Resources Library */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold">Resources Library</h2>
              <p className="text-[color:var(--muted)]">Curated collection of guides, case studies, and whitepapers</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-[color:var(--brand)] text-white'
                      : 'bg-[color:var(--surface-soft)] text-[color:var(--muted)] hover:border-[color:var(--brand)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource, idx) => (
              <div key={idx} className="card-soft group flex flex-col justify-between space-y-4 p-6 transition-all hover:border-[color:var(--brand)]">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-[color:var(--brand)]/10 px-3 py-1 text-xs font-medium text-[color:var(--brand)]">
                      {resource.type}
                    </span>
                    <span className="text-xs text-[color:var(--muted)]">{resource.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{resource.title}</h3>
                  <p className="text-sm text-[color:var(--muted)]">{resource.description}</p>
                </div>
                <div className="space-y-3 border-t border-[color:var(--line)] pt-4">
                  <div className="flex items-center justify-between text-xs text-[color:var(--muted)]">
                    <span>{resource.author}</span>
                    <span>{resource.downloadSize}</span>
                  </div>
                  <button className="btn-outline flex w-full items-center justify-center gap-2">
                    <Download className="size-4" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Webinars Section */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold">Upcoming Webinars</h2>
            <p className="text-[color:var(--muted)]">Live sessions with Q&A from our engineering and architecture teams</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                date: 'Mar 28, 2026',
                time: '10:00 AM SGT',
                title: 'Scaling Global SaaS Platforms',
                speakers: ['Sarah Chen', 'Marcus Rodriguez'],
              },
              {
                date: 'Apr 11, 2026',
                time: '3:00 PM SGT',
                title: 'Multi-Tenant Architecture Deep Dive',
                speakers: ['James Wu', 'Priya Sharma'],
              },
              {
                date: 'Apr 25, 2026',
                time: '10:00 AM SGT',
                title: 'Observability for Microservices',
                speakers: ['David Kim', 'Elena Petrov'],
              },
            ].map((webinar, idx) => (
              <div key={idx} className="card-soft group space-y-4 p-6 transition-all hover:border-[color:var(--brand)]">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs text-[color:var(--brand)]">
                    <Play className="size-3" />
                    Webinar
                  </div>
                  <h3 className="text-lg font-semibold">{webinar.title}</h3>
                  <p className="text-sm text-[color:var(--muted)]">
                    {webinar.date} at {webinar.time}
                  </p>
                </div>
                <div className="space-y-3 border-t border-[color:var(--line)] pt-4">
                  <p className="text-xs text-[color:var(--muted)]">
                    Speakers: {webinar.speakers.join(', ')}
                  </p>
                  <button className="btn-primary flex w-full items-center justify-center gap-2">
                    Register
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
            <p className="text-[color:var(--muted)]">Information about our resources and learning programs</p>
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
            <h2 className="text-2xl font-semibold">Ready to transform your platform?</h2>
            <p className="text-[color:var(--muted)]">Start with expert guidance tailored to your architecture and business goals.</p>
          </div>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Schedule a Consultation
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
