import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="section-gap">
      <div className="container-shell space-y-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)] transition hover:text-[color:var(--brand-strong)]"
        >
          <ArrowLeft className="size-4" />
          Back to Blog
        </Link>

        <header className="max-w-4xl space-y-4">
          <p className="section-kicker">{post.category}</p>
          <h1 className="text-4xl leading-tight sm:text-5xl">{post.title}</h1>
          <div className="flex flex-wrap gap-3 text-sm text-[color:var(--muted)]">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <article className="card-soft overflow-hidden">
          <div
            className="h-64 bg-cover bg-center sm:h-80"
            style={{
              backgroundImage: `linear-gradient(130deg, rgba(15,118,110,0.45), rgba(11,79,74,0.62)), url('${post.heroImage}')`,
            }}
          />
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-base leading-relaxed text-[color:var(--muted)] sm:text-lg">{post.excerpt}</p>

            <div className="mt-8 space-y-7">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl">{section.heading}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </article>

        <section className="card-soft p-6 sm:p-8">
          <h2 className="text-2xl">Continue Exploring</h2>
          <p className="mt-2 text-sm text-[color:var(--muted)]">Read more insights across web, mobile, fintech, and SaaS delivery practices.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface-elevated)] px-3 py-1 text-xs font-semibold text-[color:var(--muted)]">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
