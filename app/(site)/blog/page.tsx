"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { blogPosts, categories, type BlogCategory } from "./blog-data";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return blogPosts;
    }

    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section-gap">
      <div className="container-shell space-y-10">
        <header className="max-w-3xl space-y-4">
          <p className="section-kicker">Insights</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">Blog and perspectives from Lincoln Tagore teams.</h1>
          <p className="text-[color:var(--muted)] sm:text-lg">
            Explore practical guidance on web architecture, mobile product delivery, fintech workflows, and SaaS
            operating models.
          </p>
        </header>

        <section className="card-soft p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                activeCategory === "All"
                  ? "bg-[color:var(--brand)] text-white"
                  : "border border-[color:var(--line)] bg-white text-[color:var(--muted)]"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-[color:var(--brand)] text-white"
                    : "border border-[color:var(--line)] bg-white text-[color:var(--muted)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="card-soft card-hover overflow-hidden">
              <div
                className="h-52 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(130deg, rgba(15,118,110,0.45), rgba(11,79,74,0.62)), url('${post.heroImage}')`,
                }}
              />
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--brand)]">
                  <span>{post.category}</span>
                  <span className="text-[color:var(--line)]">|</span>
                  <span>{post.readTime}</span>
                  <span className="text-[color:var(--line)]">|</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="mt-3 text-2xl leading-tight">{post.title}</h2>
                <p className="mt-3 text-sm text-[color:var(--muted)]">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-3 py-1 text-xs font-semibold text-[color:var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[color:var(--brand)] transition hover:text-[color:var(--brand-strong)]"
                >
                  Read article <ArrowRight className="ml-2 size-4" />
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="card-soft overflow-hidden bg-[linear-gradient(120deg,#0f766e_0%,#0b4f4a_85%)] p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Newsletter</p>
            <h2 className="mt-2 text-3xl">Get monthly insights on digital delivery and product scale.</h2>
            <p className="mt-3 text-sm text-white/80">Receive practical articles from our strategy and engineering teams.</p>
          </div>
          <div className="mt-6 w-full max-w-md space-y-3 lg:mt-0">
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-sm text-[color:var(--text)] outline-none"
            />
            <button type="button" className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[color:var(--brand-strong)]">
              Subscribe to Insights
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
