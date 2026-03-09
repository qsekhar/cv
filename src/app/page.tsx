import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import FadeInWhenVisible from "./components/animations/FadeInWhenVisible";
import GetBlogPostMetadata from "./components/utils/GetBlogPostMetadata";
import { Metadata } from "./components/interfaces/Post";
import Link from "next/link";
import { generateCanonicalMetadata } from "./components/utils/CanonicalUrl";
import type { Metadata as NextMetadata } from 'next';
import { FaArrowRight, FaCode, FaMobile, FaServer, FaShoppingCart, FaBrain, FaRocket } from "react-icons/fa";

const HeroSection = dynamic(() => import("./components/HeroSection"));
const Projects = dynamic(() => import("./components/Projects"));
const Skills = dynamic(() => import("./components/Skills"));
const SayHi = dynamic(() => import("./components/SayHi"));
const Testimonials = dynamic(() => import("./components/Testimonials"));

const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: NextMetadata = {
    ...generateCanonicalMetadata()
};

export default async function Home() {
    const postMetadata: Metadata[] = await GetBlogPostMetadata();
    const recentPosts = postMetadata
        ?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    const [featuredPost, ...sidePosts] = recentPosts ?? [];

    return (
        <div className={inter.className}>
            {/* Hero Section */}
            <HeroSection />

            {/* Services Section — What I Build */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-white/[0.04]">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <FadeInWhenVisible delay={0.1}>
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-3">
                                What I Build
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                                Services I Offer
                            </h2>
                            <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                                From idea to production — I handle the full stack so you don't have to manage multiple developers.
                            </p>
                        </div>
                    </FadeInWhenVisible>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                        {[
                            {
                                icon: FaCode,
                                title: "Web App Development",
                                description: "Full-featured web applications built with React, Next.js, and TypeScript. Fast, accessible, and SEO-friendly.",
                                tags: ["React", "Next.js", "TypeScript"],
                                color: "from-primary-500 to-primary-600",
                                bg: "bg-primary-50 dark:bg-primary-500/10",
                                border: "border-primary-100 dark:border-primary-500/20"
                            },
                            {
                                icon: FaServer,
                                title: "API & Backend Development",
                                description: "Scalable REST APIs and backend systems with Node.js, Python, or PHP. Secure, documented, and production-ready.",
                                tags: ["Node.js", "Python", "PostgreSQL"],
                                color: "from-secondary-500 to-secondary-600",
                                bg: "bg-secondary-50 dark:bg-secondary-500/10",
                                border: "border-secondary-100 dark:border-secondary-500/20"
                            },
                            {
                                icon: FaMobile,
                                title: "Mobile App Development",
                                description: "Cross-platform mobile apps with Flutter or React Native. One codebase — iOS and Android covered.",
                                tags: ["Flutter", "React Native", "iOS/Android"],
                                color: "from-accent-500 to-accent-600",
                                bg: "bg-accent-50 dark:bg-accent-500/10",
                                border: "border-accent-100 dark:border-accent-500/20"
                            },
                            {
                                icon: FaShoppingCart,
                                title: "E-Commerce Solutions",
                                description: "Custom online stores and payment integrations. From WooCommerce to fully bespoke platforms.",
                                tags: ["WooCommerce", "Stripe", "Custom"],
                                color: "from-emerald-500 to-emerald-600",
                                bg: "bg-emerald-50 dark:bg-emerald-500/10",
                                border: "border-emerald-100 dark:border-emerald-500/20"
                            },
                            {
                                icon: FaBrain,
                                title: "Tech Consulting",
                                description: "Architecture reviews, tech stack decisions, code audits. Save months of wrong turns with expert guidance.",
                                tags: ["Architecture", "Code Review", "Strategy"],
                                color: "from-violet-500 to-violet-600",
                                bg: "bg-violet-50 dark:bg-violet-500/10",
                                border: "border-violet-100 dark:border-violet-500/20"
                            },
                            {
                                icon: FaRocket,
                                title: "MVP Development",
                                description: "Get your startup idea to market fast. I've launched 100+ MVPs — lean, working, and investor-ready.",
                                tags: ["Startups", "Fast Delivery", "Scalable"],
                                color: "from-rose-500 to-rose-600",
                                bg: "bg-rose-50 dark:bg-rose-500/10",
                                border: "border-rose-100 dark:border-rose-500/20"
                            },
                        ].map((service, index) => (
                            <FadeInWhenVisible key={service.title} delay={0.15 + index * 0.07}>
                                <div className={`group rounded-2xl p-6 ${service.bg} border ${service.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col`}>
                                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <service.icon className="text-white text-lg" />
                                    </div>
                                    <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">{service.title}</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">{service.description}</p>
                                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-current/10" style={{ borderColor: 'inherit' }}>
                                        {service.tags.map(tag => (
                                            <span key={tag} className="px-2 py-0.5 text-xs font-medium rounded-md bg-white/60 dark:bg-white/5 text-neutral-600 dark:text-neutral-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>

                    <FadeInWhenVisible delay={0.5}>
                        <div className="text-center mt-10">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-semibold text-sm hover:opacity-90 transition-all duration-300 hover:scale-[1.03] shadow-sm"
                            >
                                Get a Free Quote <FaArrowRight size={12} />
                            </Link>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-neutral-50 dark:bg-neutral-900/60 border-y border-neutral-100 dark:border-white/[0.04]">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <FadeInWhenVisible delay={0.2}>
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-3">
                                Tech Stack
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
                                Technical{" "}
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    Expertise
                                </span>
                            </h2>
                        </div>
                    </FadeInWhenVisible>
                    <Skills />
                </div>
            </section>

            {/* Recent Blog Posts — Bento Grid */}
            {recentPosts && recentPosts.length > 0 && (
                <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-neutral-950">
                    <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                        <FadeInWhenVisible delay={0.2}>
                            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-2">
                                        From the Blog
                                    </p>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
                                        Latest{" "}
                                        <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                            Insights
                                        </span>
                                    </h2>
                                </div>
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:gap-3 transition-all duration-300"
                                >
                                    All Articles <FaArrowRight size={12} />
                                </Link>
                            </div>
                        </FadeInWhenVisible>

                        {/* Bento grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
                            {/* Featured post */}
                            {featuredPost && (
                                <FadeInWhenVisible delay={0.3}>
                                    <Link href={`/blog/posts/${featuredPost.slug}`} className="lg:col-span-2 block group h-full">
                                        <div className="relative h-full min-h-[280px] rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-primary-600 to-secondary-700 dark:from-primary-700 dark:to-secondary-800 overflow-hidden flex flex-col justify-between shadow-xl shadow-primary-500/20 hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-1">
                                            {/* Background pattern */}
                                            <div
                                                className="absolute inset-0 opacity-[0.07]"
                                                style={{
                                                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                                                    backgroundSize: "28px 28px",
                                                }}
                                            />
                                            {/* Glow blob */}
                                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                                            <div className="relative z-10 space-y-4">
                                                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white/90 text-xs font-semibold tracking-wide backdrop-blur-sm">
                                                    Featured
                                                </span>
                                                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight group-hover:text-white/90 transition-colors">
                                                    {featuredPost.title}
                                                </h3>
                                                <p className="text-white/70 leading-relaxed line-clamp-3 text-base">
                                                    {featuredPost.subtitle}
                                                </p>
                                            </div>

                                            <div className="relative z-10 flex items-center justify-between mt-8 pt-6 border-t border-white/20">
                                                <span className="text-white/60 text-sm">{featuredPost.date}</span>
                                                <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                                    Read more <FaArrowRight size={12} />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </FadeInWhenVisible>
                            )}

                            {/* Side posts */}
                            <div className="flex flex-col gap-5 lg:gap-6">
                                {sidePosts.map((post, index) => (
                                    <FadeInWhenVisible key={post.slug} delay={0.4 + index * 0.1}>
                                        <Link href={`/blog/posts/${post.slug}`} className="block group h-full">
                                            <div className="h-full rounded-2xl p-6 sm:p-7 bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.07] hover:border-primary-200 dark:hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
                                                <div className="space-y-3">
                                                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-neutral-500 dark:text-neutral-400 line-clamp-2 text-sm leading-relaxed">
                                                        {post.subtitle}
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between mt-5 pt-5 border-t border-neutral-100 dark:border-white/[0.05]">
                                                    <span className="text-xs text-neutral-400 dark:text-neutral-500">{post.date}</span>
                                                    <span className="inline-flex items-center gap-1.5 text-primary-600 dark:text-primary-400 text-xs font-semibold group-hover:gap-2.5 transition-all duration-300">
                                                        Read <FaArrowRight size={10} />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </FadeInWhenVisible>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Testimonials */}
            <Testimonials />

            {/* CTA / Contact Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-neutral-950 dark:bg-[#06060f] relative overflow-hidden">
                {/* Ambient glow */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-30%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary-600/10 blur-[120px]" />
                    <div className="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] rounded-full bg-secondary-600/10 blur-[100px]" />
                </div>

                {/* Dot grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />

                <div className="relative z-10 max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <FadeInWhenVisible delay={0.2}>
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-10 space-y-4">
                                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-400 mb-2">
                                    Let's Work Together
                                </p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                    Ready to Start Your{" "}
                                    <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                        Project?
                                    </span>
                                </h2>
                                <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed">
                                    Let's discuss how we can bring your vision to life with cutting-edge technology and proven expertise.
                                </p>
                            </div>

                            <div className="rounded-2xl p-6 sm:p-8 bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm shadow-2xl">
                                <SayHi />
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>
        </div>
    );
}
