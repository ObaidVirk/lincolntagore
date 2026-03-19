import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const sections = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/services", label: "What We Do" },
      { href: "/solutions", label: "Industries" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Consulting" },
      { href: "/services", label: "Software Delivery" },
      { href: "/solutions", label: "Fintech Platforms" },
      { href: "/pricing", label: "Program Plans" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/resources", label: "Learning Hub" },
      { href: "/blog", label: "Blog & Insights" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/partners", label: "Partners" },
      { href: "/dashboard", label: "Client Workspace" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Notice" },
      { href: "/terms-of-use", label: "Terms of Use" },
      { href: "/cookie-policy", label: "Cookie Policy" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "mailto:hello@lincolntagore.com", label: "hello@lincolntagore.com" },
      { href: "tel:+6560001200", label: "+65 6000 1200" },
      { href: "#", label: "12 Marina View, Singapore 018961" },
    ],
  },
];

const socialLinks = [
  { href: "#", label: "LinkedIn", icon: Linkedin },
  { href: "#", label: "Twitter", icon: Twitter },
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "Facebook", icon: Facebook },
  { href: "#", label: "YouTube", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--line)] bg-white/95">
      <div className="container-shell py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 rounded-3xl border border-[color:var(--line)] bg-[color:var(--surface-elevated)] p-6 sm:p-8 lg:grid-cols-[1.15fr_1.85fr] lg:gap-14 lg:p-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-[color:var(--line)]">
                <Image
                  src="/LINCOLNTAGORE.jpg"
                  alt="Lincoln Tagore logo"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">Lincoln Tagore Pte. Ltd.</p>
                <p className="text-sm text-[color:var(--muted)]">
                  Building dependable software systems for modern enterprises.
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[color:var(--muted)]">
              We combine technology, delivery governance, and product thinking to help organizations modernize mission-critical workflows.
            </p>

            <div className="space-y-3 rounded-2xl border border-[color:var(--line)] bg-white p-4">
              <p className="text-sm font-semibold">Subscribe to insights</p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input type="email" placeholder="Work email" className="input-premium" />
                <button type="button" className="btn-primary px-5 py-3">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="rounded-lg border border-[color:var(--line)] bg-white p-2 text-[color:var(--muted)] transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
                >
                  <item.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {sections.map((section) => (
              <div key={section.title}>
                <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--text)]">{section.title}</p>
                <div className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`block text-sm text-[color:var(--muted)] transition hover:text-[color:var(--text)] ${
                        section.title === "Contact" ? "break-words" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[color:var(--line)] pt-6 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Registered in Singapore, serving global clients across APAC and EMEA.</p>
          <p>© 2026 All rights reserved by Lincoln Tagore Pte. Ltd.</p>
        </div>
      </div>
    </footer>
  );
}