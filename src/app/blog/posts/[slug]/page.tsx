import { NextPage } from "next";
import type { Metadata, ResolvingMetadata } from 'next'
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
import { HiOutlineHome, HiOutlineCalendar, HiOutlineArrowRight } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import { LiaBlogSolid } from "react-icons/lia";
import SayHi from "@/app/components/SayHi";
import SocialShare from "@/app/components/SocialShare";
import FadeInWhenVisible from "@/app/components/animations/FadeInWhenVisible";

interface Props {
    params: {
        slug: Slug;
    };
}

const folder: string = process.env.POST_FOLDER || "";

if (!folder) {
    throw new Error("POST_FOLDER environment variable is not defined.");
}

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
    // read route params
    const slug = params.slug
    const content =  matter(await getPostContent(slug));
   
    return {
      title: 'Full stack freelancer | ' + content.data.title,
      description: content.data.subtitle,
      publisher: "Subhra Sekhar Mukherjee",
      applicationName: "SSM's Blog",
    }
  }

export async function generateStaticParams() {
    const postMetadata: Postmeta[] = await GetBlogPostMetadata();
    return postMetadata.map((meta: Postmeta) => ({ slug: meta.slug }));
}

const Post: NextPage<Props> = async (props: Props) => {
    const { slug } = props.params;
    const content = matter(await getPostContent(slug));
    const postMetadata: Postmeta[] = await GetBlogPostMetadata();
    const otherLinks = postMetadata.filter(
        (meta: Postmeta) => meta.slug !== slug
    );

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": content.data.title,
        "description": content.data.subtitle,
        "datePublished": content.data.date,
        "dateModified": content.data.lastModified,
        "author": [{
            "@type": "Person",
            "name": "Subhra Sekhar Mukherjee",
        }]
      }


    //
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-darkbackground dark:to-neutral-800 overflow-x-hidden">
            {/* Header Section */}
            <section className="py-8 sm:py-12 lg:py-12 border-b border-neutral-200 dark:border-neutral-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <FadeInWhenVisible delay={0.1}>
                        <nav className="flex items-center gap-2 mb-6 sm:mb-8 lg:mb-8 text-sm lg:text-base text-neutral-600 dark:text-neutral-400 overflow-x-auto">
                            <Link
                                href="/"
                                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex-shrink-0"
                            >
                                <HiOutlineHome size={16} className="lg:size-5" />
                            </Link>
                            <RiArrowRightSLine size={16} className="flex-shrink-0 lg:size-5" />
                            <Link 
                                href="/blog" 
                                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex-shrink-0"
                            >
                                Blog
                            </Link>
                            <RiArrowRightSLine size={16} className="flex-shrink-0 lg:size-5" />
                            <span className="text-primary-600 dark:text-primary-400 font-medium truncate min-w-0">
                                {content.data.title}
                            </span>
                        </nav>
                    </FadeInWhenVisible>

                    {/* Article Header */}
                    <FadeInWhenVisible delay={0.2}>
                        <div className="max-w-4xl">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    {content.data.title}
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl lg:text-xl text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6 lg:mb-6 leading-relaxed">
                                {content.data.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:gap-6 text-sm lg:text-base text-neutral-500 dark:text-neutral-500">
                                <div className="flex items-center gap-2">
                                    <HiOutlineCalendar size={16} className="lg:size-5" />
                                    <span>Published {content.data.date}</span>
                                </div>
                                {content.data.lastModified && content.data.lastModified !== content.data.date && (
                                    <div className="flex items-center gap-2">
                                        <span className="hidden sm:inline">•</span>
                                        <span>Updated {content.data.lastModified}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-8 sm:py-12 lg:py-16 xl:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16 2xl:gap-20 space-y-8 lg:space-y-0">
                        {/* Main Content */}
                        <FadeInWhenVisible delay={0.3}>
                            <article className="w-full lg:w-2/3 order-1 min-w-0">
                                <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 sm:p-8 lg:p-8 shadow-lg border border-neutral-100 dark:border-neutral-700/50">
                                    <div className="prose prose-base sm:prose-lg lg:prose-lg dark:prose-invert max-w-none min-w-0
                                                    prose-headings:text-neutral-900 dark:prose-headings:text-neutral-100 prose-headings:font-bold
                                                    prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-p:leading-relaxed prose-p:mb-6
                                                    prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                                                    prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-medium
                                                    prose-pre:bg-neutral-100 dark:prose-pre:bg-neutral-800 prose-pre:border prose-pre:border-neutral-200 dark:prose-pre:border-neutral-700 prose-pre:overflow-x-auto prose-pre:rounded-lg prose-pre:p-6
                                                    prose-blockquote:border-l-4 prose-blockquote:border-l-primary-500 prose-blockquote:text-neutral-600 dark:prose-blockquote:text-neutral-400 prose-blockquote:font-medium prose-blockquote:italic
                                                    prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100 prose-strong:font-bold
                                                    prose-ul:text-neutral-700 dark:prose-ul:text-neutral-300 prose-ul:mb-6
                                                    prose-ol:text-neutral-700 dark:prose-ol:text-neutral-300 prose-ol:mb-6
                                                    prose-li:text-neutral-700 dark:prose-li:text-neutral-300 prose-li:mb-2
                                                    prose-h1:text-2xl sm:prose-h1:text-3xl lg:prose-h1:text-3xl prose-h1:leading-tight prose-h1:mb-8
                                                    prose-h2:text-xl sm:prose-h2:text-2xl lg:prose-h2:text-2xl prose-h2:leading-tight prose-h2:mb-6 prose-h2:mt-12
                                                    prose-h3:text-lg sm:prose-h3:text-xl lg:prose-h3:text-xl prose-h3:leading-tight prose-h3:mb-4 prose-h3:mt-8
                                                    prose-h4:text-base sm:prose-h4:text-lg lg:prose-h4:text-lg prose-h4:leading-tight prose-h4:mb-4 prose-h4:mt-6
                                                    prose-img:rounded-lg prose-img:shadow-lg prose-img:border prose-img:border-neutral-200 dark:prose-img:border-neutral-700">
                                        <Markdown key={slug}>
                                            {content.content}
                                        </Markdown>
                                    </div>

                                    {/* Social Share */}
                                    <div className="mt-8 lg:mt-12 xl:mt-16 pt-6 sm:pt-8 lg:pt-10 xl:pt-12 border-t border-neutral-200 dark:border-neutral-700">
                                        <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold mb-4 lg:mb-6 xl:mb-8 text-neutral-800 dark:text-neutral-200">
                                            Share this article
                                        </h3>
                                        <SocialShare />
                                    </div>
                                </div>
                            </article>
                        </FadeInWhenVisible>

                        {/* Sidebar */}
                        <aside className="w-full lg:w-1/3 order-2 min-w-0">
                            {/* Related Posts */}
                            <FadeInWhenVisible delay={0.4}>
                                <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-4 sm:p-5 lg:p-5 shadow-lg border border-neutral-100 dark:border-neutral-700/50 mb-6 sm:mb-8">
                                    <h3 className="text-lg sm:text-xl lg:text-lg font-bold mb-4 sm:mb-5 lg:mb-4 text-neutral-800 dark:text-neutral-200">
                                        Related Articles
                                    </h3>
                                    <div className="space-y-3 sm:space-y-3 lg:space-y-3">
                                        {otherLinks &&
                                            otherLinks
                                                .sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())
                                                .slice(0, 5)
                                                .map((meta: Postmeta) => (
                                                    <Link key={meta.slug} href={`/blog/posts/${meta.slug}`}>
                                                        <article className="group p-3 sm:p-3 lg:p-3 rounded-xl border border-neutral-100 dark:border-neutral-700 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 hover:bg-primary-50/50 dark:hover:bg-primary-900/10 hover:shadow-md">
                                                            <h4 className="font-semibold text-sm sm:text-sm lg:text-sm line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2 leading-snug">
                                                                {meta.title}
                                                            </h4>
                                                            <div className="flex items-center justify-between text-xs lg:text-xs text-neutral-500 dark:text-neutral-500">
                                                                <span>{meta.date}</span>
                                                                <HiOutlineArrowRight size={12} className="group-hover:translate-x-1 transition-transform lg:size-3" />
                                                            </div>
                                                        </article>
                                                    </Link>
                                                ))}
                                    </div>
                                </div>
                            </FadeInWhenVisible>

                            {/* Contact CTA */}
                            <FadeInWhenVisible delay={0.5}>
                                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-4 sm:p-5 lg:p-5 text-white shadow-lg">
                                    <h3 className="text-lg sm:text-xl lg:text-lg font-bold mb-3 sm:mb-4 lg:mb-3">
                                        Need help with your project?
                                    </h3>
                                    <p className="mb-4 sm:mb-5 lg:mb-4 text-white/90 text-sm sm:text-sm lg:text-sm leading-relaxed">
                                        Let's discuss how I can help you build something amazing.
                                    </p>
                                    <div className="bg-white rounded-xl p-3 sm:p-3 lg:p-3">
                                        <SayHi />
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        </aside>
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
};

export default Post;
