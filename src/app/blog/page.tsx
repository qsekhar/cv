import Link from "next/link";
import { HiOutlineHome, HiOutlineCalendar, HiOutlineArrowRight } from "react-icons/hi";
import { Metadata as PostMeta } from "../components/interfaces/Post";
import GetBlogPostMetadata from "../components/utils/GetBlogPostMetadata";
import SocialShare from "../components/SocialShare";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible";
import { generateCanonicalMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog - Subhra Sekhar | Web Development Insights",
    description: "Explore articles about modern web development, tech insights, tutorials, and industry trends from a full-stack developer's perspective.",
    ...generateCanonicalMetadata('blog')
};

export default async function Blog() {
    const postMetadata: PostMeta[] = await GetBlogPostMetadata();
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-darkbackground dark:to-neutral-800">
            {/* Header Section */}
            <section className="py-20">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    {/* Breadcrumb */}
                    <FadeInWhenVisible delay={0.1}>
                        <div className="flex items-center gap-2 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
                            <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                <HiOutlineHome size={16} />
                            </Link>
                            <span>→</span>
                            <span className="text-primary-600 dark:text-primary-400 font-medium">Blog</span>
                        </div>
                    </FadeInWhenVisible>

                    {/* Hero Content */}
                    <FadeInWhenVisible delay={0.2}>
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    SSM's Blog
                                </span>
                            </h1>
                            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                                Insights, tutorials, and thoughts on modern web development, technology trends, and software engineering best practices.
                            </p>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="pb-20">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {postMetadata &&
                            postMetadata
                                .sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())
                                .map((meta: PostMeta, index) => (
                                    <FadeInWhenVisible key={meta.slug} delay={0.3 + index * 0.1}>
                                        <Link href={`/blog/posts/${meta.slug}`}>
                                            <article className="group bg-white dark:bg-neutral-800/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-neutral-100 dark:border-neutral-700/50 h-full">
                                                <div className="space-y-4">
                                                    <h2 className="text-xl font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                                                        {meta.title}
                                                    </h2>
                                                    <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3">
                                                        {meta.subtitle}
                                                    </p>
                                                    <div className="flex items-center justify-between text-sm">
                                                        <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-500">
                                                            <HiOutlineCalendar size={16} />
                                                            <span>{meta.date}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform">
                                                            <span className="font-medium">Read more</span>
                                                            <HiOutlineArrowRight size={16} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    </FadeInWhenVisible>
                                ))}
                    </div>

                    {/* Social Share */}
                    <FadeInWhenVisible delay={0.8}>
                        <div className="mt-16 text-center">
                            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg inline-block">
                                <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
                                    Share this blog
                                </h3>
                                <SocialShare />
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>
        </div>
    );
}