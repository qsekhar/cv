import type { Metadata } from 'next'
import matter from "gray-matter";
import fs from "fs/promises";
import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import GetBlogPostMetadata from "../../../components/utils/GetBlogPostMetadata";
import {
    Metadata as Postmeta,
    Slug,
} from "../../../components/interfaces/Post";
import Link from "next/link";
import Wrap from "@/app/components/editorial/Wrap";
import Kicker from "@/app/components/editorial/Kicker";
import Badge from "@/app/components/editorial/Badge";
import SocialShare from "@/app/components/SocialShare";
import { generateCanonicalMetadata } from "../../../components/utils/CanonicalUrl";

interface Props {
    params: {
        slug: Slug;
    };
}

const folder: string = process.env.POST_FOLDER || "";

if (!folder) {
    throw new Error("POST_FOLDER environment variable is not defined.");
}

// Calculate reading time from markdown content
const calculateReadingTime = (text: string): number => {
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
};

const getPostContent = async (slug: Slug) => {
    const file = `${folder}/${slug}.md`;

    try {
        await fs.stat(file);
    } catch (err) {
        notFound();
    }
    const content = await fs.readFile(file, "utf8");

    return content;
};

export async function generateMetadata(
    { params }: Props,

  ): Promise<Metadata> {
    const slug = params.slug
    const content =  matter(await getPostContent(slug));
    const canonicalUrl = `https://www.subhrasekhar.in/blog/posts/${slug}`;
    const ogImageUrl = `https://www.subhrasekhar.in/blog/posts/${slug}/opengraph-image`;

    return {
      title: `${content.data.title} | Subhra Sekhar — Freelance Full Stack Developer`,
      description: content.data.subtitle,
      publisher: "Subhra Sekhar Mukherjee",
      applicationName: "SSM's Blog",
      authors: [{ name: "Subhra Sekhar Mukherjee", url: "https://www.subhrasekhar.in/about" }],
      keywords: ["full stack developer", "freelance developer", "web development", "React", "Next.js", ...(content.data.tags || [])],
      openGraph: {
        type: "article",
        title: content.data.title,
        description: content.data.subtitle,
        url: canonicalUrl,
        siteName: "Subhra Sekhar — Freelance Full Stack Developer",
        publishedTime: content.data.date,
        modifiedTime: content.data.lastModified || content.data.date,
        authors: ["Subhra Sekhar Mukherjee"],
        images: [{ url: ogImageUrl, width: 1200, height: 630, alt: content.data.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: content.data.title,
        description: content.data.subtitle,
        images: [ogImageUrl],
      },
      ...generateCanonicalMetadata(`blog/posts/${slug}`)
    }
  }

export async function generateStaticParams() {
    const postMetadata: Postmeta[] = await GetBlogPostMetadata();
    return postMetadata.map((meta: Postmeta) => ({ slug: meta.slug }));
}

export default async function PostPage({ params }: Props) {
    const { slug } = params;
    const content = matter(await getPostContent(slug));
    const postMetadata: Postmeta[] = await GetBlogPostMetadata();
    const relatedPosts = postMetadata
        .filter((meta: Postmeta) => meta.slug !== slug)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    // Calculate reading time
    const readingTime = calculateReadingTime(content.content);

    // Format date as "DD MMM YYYY"
    const publishDate = new Date(content.data.date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": content.data.title,
        "description": content.data.subtitle,
        "datePublished": content.data.date,
        "dateModified": content.data.lastModified || content.data.date,
        "image": `https://www.subhrasekhar.in/blog/posts/${slug}/opengraph-image`,
        "url": `https://www.subhrasekhar.in/blog/posts/${slug}`,
        "author": [{
            "@type": "Person",
            "name": "Subhra Sekhar Mukherjee",
            "url": "https://www.subhrasekhar.in/about",
        }],
        "publisher": {
            "@type": "Person",
            "name": "Subhra Sekhar Mukherjee",
            "url": "https://www.subhrasekhar.in",
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="bg-navy text-paper border-b-[6px] border-accent">
                <Wrap className="py-9 lg:py-10">
                    <div className="font-mono uppercase tracking-kicker text-[11px] text-accent mb-4">
                        {publishDate} · {readingTime} min read
                    </div>
                    <h1 className="font-serif text-h1 text-paper leading-[1.1]">
                        {content.data.title}
                    </h1>
                    {content.data.subtitle && (
                        <p className="mt-5 max-w-[640px] text-paper/80 text-[17px] leading-[1.55] font-sans">
                            {content.data.subtitle}
                        </p>
                    )}
                </Wrap>
            </section>

            {/* Article Content */}
            <Wrap className="py-9 lg:py-10">
                <article className="prose mx-auto">
                    <Markdown key={slug}>
                        {content.content}
                    </Markdown>
                </article>

                {/* Tags */}
                {content.data.tags && content.data.tags.length > 0 && (
                    <div className="max-w-[65ch] mx-auto mt-8 pt-6 border-t border-line">
                        <Kicker className="mb-3">Tags</Kicker>
                        <div className="flex flex-wrap gap-2">
                            {content.data.tags.map((tag: string) => (
                                <Badge key={tag}>{tag}</Badge>
                            ))}
                        </div>
                    </div>
                )}

                {/* Share */}
                <div className="max-w-[65ch] mx-auto mt-6 pt-6 border-t border-line">
                    <Kicker className="mb-3">Share</Kicker>
                    <SocialShare />
                </div>
            </Wrap>

            {/* Related Posts */}
            {relatedPosts && relatedPosts.length > 0 && (
                <section className="py-9 lg:py-10 bg-paper-2">
                    <Wrap>
                        <div className="flex items-end justify-between border-b border-line pb-3 mb-6">
                            <div className="flex flex-col gap-2">
                                <Kicker>Related</Kicker>
                                <h2 className="font-serif text-h2 text-ink">More from the journal.</h2>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            {relatedPosts.map((post, i) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/posts/${post.slug}`}
                                    className={`grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-4 md:gap-7 py-5 group ${i > 0 ? "border-t border-line" : ""}`}
                                >
                                    <div className="font-mono uppercase text-[10px] tracking-label text-muted">
                                        {new Date(post.date).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric"
                                        })}
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-h3 text-ink group-hover:text-accent transition-colors">
                                            {post.title}
                                        </h3>
                                        {post.subtitle && (
                                            <p className="text-small text-ink/75 mt-1 line-clamp-2">
                                                {post.subtitle}
                                            </p>
                                        )}
                                    </div>
                                    <span className="font-mono uppercase text-[10px] tracking-label text-accent self-start md:self-center">
                                        Read →
                                    </span>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-6 text-right">
                            <Link
                                href="/blog"
                                className="font-mono uppercase text-[11px] tracking-label text-accent hover:text-navy transition-colors"
                            >
                                All articles →
                            </Link>
                        </div>
                    </Wrap>
                </section>
            )}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}
