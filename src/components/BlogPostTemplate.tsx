import Link from "next/link";
import { OFFICIAL_LINKS } from "@/constants/links";
import type { BlogPostData } from "@/data/blogPosts";
import { getRelatedBlogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/Button";

export default function BlogPostTemplate({ post }: { post: BlogPostData }) {
  const relatedPosts = getRelatedBlogPosts(post.slug);

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden pt-[140px] pb-20">
        <div className="hero-blob-1 opacity-50" />
        <div className="hero-blob-2 opacity-40" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(${post.rgb},0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(${post.rgb},0.025) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <span className="tag-pill">
              <span className="glow-dot" />
              {post.category}
            </span>
          </div>
          <h1 className="text-[clamp(2.4rem,6vw,4.8rem)] font-black tracking-[-0.04em] leading-[1.05] mb-6">
            {post.title}
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.15rem)] text-[rgba(240,240,248,0.55)] leading-[1.75] max-w-2xl mx-auto">
            {post.excerpt}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-[rgba(240,240,248,0.45)]">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 pb-20">
        <div className="glass-card p-7 md:p-10 mb-10">
          <p className="text-lg text-[rgba(240,240,248,0.72)] leading-[1.85]">{post.intro}</p>
        </div>

        <div className="space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] mb-5">{section.heading}</h2>
              <div className="space-y-5">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-[rgba(240,240,248,0.58)] leading-[1.85]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="glass-card p-7 md:p-9 my-12">
          <h2 className="text-2xl font-black tracking-[-0.03em] mb-6">Practical Checklist</h2>
          <ul className="grid gap-4">
            {post.checklist.map((item) => (
              <li key={item} className="flex gap-3 text-[rgba(240,240,248,0.62)] leading-[1.7]">
                <span className="mt-2 w-2 h-2 rounded-full bg-[var(--accent)] shrink-0 shadow-[0_0_10px_rgba(155,255,110,0.45)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-black tracking-[-0.03em] mb-5">Related Services</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {post.relatedServices.map((service) => (
              <Link key={service.href} href={service.href} className="glass-card p-5 no-underline block group">
                <span className="text-white font-bold group-hover:text-[var(--accent)] transition-colors">{service.label}</span>
                <span className="mt-2 block text-sm text-[rgba(240,240,248,0.45)]">Explore how AblyArt can support this growth area.</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="glass-card p-8 md:p-10 text-center my-12">
          <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em] mb-4">Want This Applied To Your Business?</h2>
          <p className="text-[rgba(240,240,248,0.55)] leading-[1.8] max-w-xl mx-auto mb-7">
            Book a free audit and we will review where search, social, lead generation, and paid media can create the fastest lift.
          </p>
          <Button href={OFFICIAL_LINKS.calendly} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
            Book a Free Audit
          </Button>
        </section>
      </article>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between gap-4 mb-7">
          <h2 className="text-2xl md:text-3xl font-black tracking-[-0.03em]">Keep Reading</h2>
          <Link href="/blog" className="btn-outline px-5 py-3 rounded-full no-underline text-sm font-bold">
            All Posts
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {relatedPosts.map((related) => (
            <Link key={related.slug} href={`/blog/${related.slug}`} className="glass-card p-6 no-underline block group">
              <span className="text-xs font-bold uppercase tracking-[0.12em]" style={{ color: related.accent }}>
                {related.category}
              </span>
              <h3 className="mt-4 text-lg font-extrabold tracking-[-0.02em] text-white group-hover:text-[var(--accent)] transition-colors">
                {related.title}
              </h3>
              <p className="mt-3 text-sm text-[rgba(240,240,248,0.45)] leading-[1.65]">{related.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
