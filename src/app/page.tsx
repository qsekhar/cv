import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import FadeInWhenVisible from "./components/animations/FadeInWhenVisible";
import GetBlogPostMetadata from "./components/utils/GetBlogPostMetadata";
import { Metadata } from "./components/interfaces/Post";
import Link from "next/link";

const HeroSection = dynamic(() => import("./components/HeroSection"));
const Projects = dynamic(() => import("./components/Projects"));
const Skills = dynamic(() => import("./components/Skills"));
const SayHi = dynamic(() => import("./components/SayHi"));

const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export default async function Home() {
    const postMetadata: Metadata[] = await GetBlogPostMetadata();
    const recentPosts = postMetadata
        ?.sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime())
        .slice(0, 3);

    return (
        <div className={inter.className}>
            {/* Hero Section */}
            <HeroSection />


            {/* Skills Preview Section */}
            <section className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-800/50 dark:to-neutral-900/50">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <FadeInWhenVisible delay={0.4}>
                        <div className="text-center mb-12 sm:mb-16 lg:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-6">
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    Technical Expertise
                                </span>
                            </h2>
                        </div>
                    </FadeInWhenVisible>
                    <Skills />
                </div>
            </section>

            {/* Recent Blog Posts Section */}
            {recentPosts && recentPosts.length > 0 && (
                <section className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-white dark:bg-neutral-900/50">
                    <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                        <FadeInWhenVisible delay={0.6}>
                            <div className="text-center mb-12 sm:mb-16 lg:mb-16">
                                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-6">
                                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                        Latest Insights
                                    </span>
                                </h2>
                                <p className="text-lg sm:text-xl lg:text-xl xl:text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
                                    Thoughts and tutorials on modern web development
                                </p>
                            </div>
                        </FadeInWhenVisible>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                            {recentPosts.map((post, index) => (
                                <FadeInWhenVisible key={post.slug} delay={0.8 + index * 0.1}>
                                    <Link href={`/blog/posts/${post.slug}`}>
                                        <div className="group bg-white dark:bg-neutral-800/50 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-neutral-100 dark:border-neutral-700/50 h-full">
                                            <div className="space-y-4 sm:space-y-6">
                                                <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                                                    {post.title}
                                                </h3>
                                                <p className="text-neutral-600 dark:text-neutral-300 line-clamp-3 text-base sm:text-lg lg:text-lg leading-relaxed">
                                                    {post.subtitle}
                                                </p>
                                                <div className="flex items-center justify-between text-sm sm:text-base lg:text-base text-neutral-500 dark:text-neutral-400">
                                                    <span>{post.date}</span>
                                                    <span className="text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform font-medium">
                                                        Read more →
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </FadeInWhenVisible>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
                            <Link
                                href="/blog"
                                className="inline-flex items-center px-6 sm:px-8 lg:px-8 py-3 sm:py-4 lg:py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-base sm:text-lg lg:text-lg rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                                View All Articles
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
                    <FadeInWhenVisible delay={0.8}>
                        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-lg sm:text-xl lg:text-xl xl:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                                Let's discuss how we can bring your vision to life with cutting-edge technology and proven expertise.
                            </p>
                            <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 sm:p-8 lg:p-12 max-w-3xl mx-auto">
                                <SayHi />
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>
        </div>
    );
}
