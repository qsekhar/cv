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

            {/* Featured Projects Section */}
            <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden">
                {/* Dynamic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/30 dark:from-neutral-900 dark:via-neutral-800/80 dark:to-primary-900/20"></div>
                
                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-secondary-400/20 to-accent-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-primary-300/15 to-secondary-300/15 rounded-full blur-xl animate-bounce delay-500"></div>
                </div>

                <div className="relative z-10 max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <FadeInWhenVisible delay={0.2}>
                        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                            {/* Decorative line */}
                            <div className="flex items-center justify-center mb-6 sm:mb-8">
                                <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-primary-400"></div>
                                <div className="mx-4 p-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-secondary-400"></div>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-8">
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                                        Project Portfolio
                                    </span>
                                    {/* Underline decoration */}
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-60"></div>
                                </span>
                            </h2>
                            
                            <div className="relative max-w-4xl mx-auto">
                                <p className="text-lg sm:text-xl lg:text-xl xl:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                                    Innovative solutions crafted with precision and expertise for clients worldwide
                                </p>
                                <div className="flex items-center justify-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium">
                                        12+ Years Experience
                                    </span>
                                    <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded-full font-medium">
                                        50+ Projects
                                    </span>
                                    <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full font-medium">
                                        Global Clients
                                    </span>
                                </div>
                            </div>
                        </div>
                    </FadeInWhenVisible>

                    {/* Enhanced Projects Component Container */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-neutral-800/50 rounded-3xl blur-3xl"></div>
                        <div className="relative">
                            <Projects />
                        </div>
                    </div>

                    <div className="text-center mt-16 sm:mt-20 lg:mt-24">
                        <FadeInWhenVisible delay={0.6}>
                            <div className="relative inline-block group">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                
                                <Link
                                    href="/projects"
                                    className="relative inline-flex items-center px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-5 bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-500 text-white text-base sm:text-lg lg:text-lg rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 overflow-hidden"
                                >
                                    {/* Button background animation */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    <span className="relative flex items-center">
                                        <span className="mr-2">Explore All Projects</span>
                                        <svg 
                                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                    
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></div>
                                </Link>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </section>

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
                            <p className="text-lg sm:text-xl lg:text-xl xl:text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
                                Mastery across the full technology stack with 12+ years of experience
                            </p>
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
