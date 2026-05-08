import dynamic from "next/dynamic";
import Link from "next/link";
import GetBlogPostMetadata from "./components/utils/GetBlogPostMetadata";
import { Metadata } from "./components/interfaces/Post";
import { generateCanonicalMetadata } from "./components/utils/CanonicalUrl";
import type { Metadata as NextMetadata } from "next";

import Hero from "./components/editorial/Hero";
import Wrap from "./components/editorial/Wrap";
import SectionHeader from "./components/editorial/SectionHeader";
import Card from "./components/editorial/Card";

const Projects = dynamic(() => import("./components/Projects"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const ClosingCTA = dynamic(() => import("./components/ClosingCTA"));

export const metadata: NextMetadata = {
  ...generateCanonicalMetadata(),
};

export default async function Home() {
  const postMetadata: Metadata[] = await GetBlogPostMetadata();
  const recentPosts = postMetadata
    ?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3) ?? [];

    return (
    <>
      <Hero
        title="Subhra Sekhar."
        lede="An editorial, engineering-first practice. Full-stack work for teams that care about clarity, calm interfaces, and software that behaves well in the wild."
        meta={[
          { label: "Discipline", value: "Full-stack engineering" },
          { label: "Based in", value: "Kolkata, IN" },
          { label: "Available", value: "Q2 2026" },
        ]}
      />

      {/* §02 — What I provide */}
      <section className="py-9 lg:py-10">
        <Wrap>
          <SectionHeader kicker="Section 02" title="What I provide." refLabel="§02" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: "01", title: "Web applications", body: "Production React / Next.js front-ends and Node back-ends. Type-safe end-to-end." },
              { id: "02", title: "APIs",            body: "REST and GraphQL services. Boring on purpose. Documented, observable, well-versioned." },
              { id: "03", title: "MVPs",            body: "From idea to shipped product in weeks, not quarters. Tight scope, opinionated stack." },
              { id: "04", title: "Mobile apps",     body: "React Native cross-platform builds where it pays. PWA when it doesn't." },
              { id: "05", title: "E-commerce",      body: "Headless storefronts. Payments, taxes, fulfilment that don't keep you up." },
              { id: "06", title: "Tech consulting", body: "Architecture review, hiring help, and second opinions for early-stage teams." },
            ].map(item => (
              <Card key={item.id}>
                <div className="font-mono uppercase text-[10px] tracking-label text-muted mb-2">{item.id}</div>
                <h3 className="font-serif text-h3 text-ink mb-2">{item.title}</h3>
                <p className="text-small text-ink/80">{item.body}</p>
              </Card>
            ))}
          </div>
        </Wrap>
      </section>

      {/* §03 — Selected work */}
      {/* <section className="py-9 lg:py-10 bg-paper-2">
        <Wrap>
          <SectionHeader kicker="Section 03" title="Selected work." refLabel="§03" />
          <Projects />
        </Wrap>
      </section> */}

      {/* §03 — Journal */}
      {recentPosts.length > 0 && (
        <section className="py-9 lg:py-10">
          <Wrap>
            <SectionHeader kicker="Section 03" title="From the journal." refLabel="§04" />
            <div className="flex flex-col">
              {recentPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/posts/${post.slug}`}
                  className={`grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-4 md:gap-7 py-5 ${
                    i > 0 ? "border-t border-line" : ""
                  } group`}
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
            <div className="mt-6 text-right">
              <Link href="/blog" className="font-mono uppercase text-[11px] tracking-label text-accent hover:text-navy">
                All articles →
              </Link>
            </div>
          </Wrap>
        </section>
      )}

      {/* §05 — Testimonials */}
      <section className="py-9 lg:py-10 bg-paper-2">
        <Wrap>
          <SectionHeader kicker="Section 04" title="Said about the work." refLabel="§05" />
          <Testimonials />
        </Wrap>
      </section>

      {/* §06 — Closing */}
      <ClosingCTA />
    </>
  );
}
