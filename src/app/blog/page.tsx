import Link from "next/link";
import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import GetBlogPostMetadata from "../components/utils/GetBlogPostMetadata";
import { Metadata as PostMeta } from "../components/interfaces/Post";
import { generatePageMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  path: "blog",
  title: "Journal — Writing on Engineering & Practice",
  description:
    "Articles on full-stack engineering, architecture, and practice notes by Subhra Sekhar Mukherjee.",
});

export default async function BlogPage() {
  const posts: PostMeta[] = (await GetBlogPostMetadata()) ?? [];
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Hero
        title="Journal."
        lede="Notes from practice — engineering decisions, architecture sketches, and the occasional opinion."
      />

      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 02" title="All articles." refLabel="§02" />
          <div className="flex flex-col">
            {sorted.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/posts/${post.slug}`}
                className={`grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-4 md:gap-7 py-5 group ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <div className="font-mono uppercase text-[10px] tracking-label text-muted">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "2-digit", month: "short", year: "numeric"
                  })}
                </div>
                <div>
                  <h3 className="font-serif text-h3 text-ink group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  {post.subtitle && (
                    <p className="text-small text-ink/75 mt-1 line-clamp-2">{post.subtitle}</p>
                  )}
                </div>
                <span className="font-mono uppercase text-[10px] tracking-label text-accent self-start md:self-center">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </Wrap>
      </section>
    </>
  );
}