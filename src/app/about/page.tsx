import { Inter } from "next/font/google";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible";
import { FaCode, FaBrain, FaRocket, FaUsers } from "react-icons/fa";
import { generateCanonicalMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from 'next';

const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "About Me - Subhra Sekhar | Full Stack Developer",
    description: "Learn about Subhra Sekhar Mukherjee - Full Stack Developer & Tech Consultant with 13+ years of experience in creating innovative digital solutions.",
    ...generateCanonicalMetadata('about')
};

export default function AboutPage() {
    return (
        <div className={inter.className}>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-darkbackground dark:via-neutral-900 dark:to-neutral-800">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <FadeInWhenVisible delay={0.2}>
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-6xl font-bold">
                                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                        About Me
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-lighttext dark:text-darktext leading-relaxed">
                                    Hi, I'm Subhra Sekhar Mukherjee, a passionate Full Stack Developer 
                                    and Tech Consultant with over 13 years of experience crafting 
                                    innovative digital solutions.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium">
                                        Full Stack Developer
                                    </span>
                                    <span className="px-4 py-2 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded-full font-medium">
                                        Tech Consultant
                                    </span>
                                    <span className="px-4 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full font-medium">
                                        Problem Solver
                                    </span>
                                </div>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={0.4}>
                            <div className="relative">
                                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full p-1">
                                    <div className="w-full h-full bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center">
                                        <div className="text-6xl">👨‍💻</div>
                                    </div>
                                </div>
                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-200 dark:bg-primary-800 rounded-full flex items-center justify-center animate-float">
                                    <FaCode className="text-primary-600 text-xl" />
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-200 dark:bg-secondary-800 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                                    <FaBrain className="text-secondary-600 text-xl" />
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white dark:bg-neutral-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInWhenVisible delay={0.6}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lighttext dark:text-darktext">
                                My Story
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
                        </div>
                    </FadeInWhenVisible>

                    <div className="space-y-8 text-lg text-lighttext dark:text-darktext leading-relaxed">
                        <FadeInWhenVisible delay={0.8}>
                            <p>
                                My journey in technology began over a decade ago with a simple fascination: 
                                how could lines of code transform into powerful, user-friendly applications 
                                that solve real-world problems? This curiosity has driven me through 13+ 
                                years of continuous learning, building, and innovating in the ever-evolving 
                                landscape of web development.
                            </p>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={1.0}>
                            <p>
                                Starting as a freelancer in 2012, I've had the privilege of working with 
                                diverse clients across various industries – from early-stage startups with 
                                bold visions to established enterprises seeking digital transformation. 
                                Each project has been a unique puzzle, requiring not just technical expertise 
                                but creative problem-solving and strategic thinking.
                            </p>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={1.2}>
                            <p>
                                What sets me apart is my holistic approach to development. I don't just 
                                write code; I architect solutions. I consider user experience, scalability, 
                                maintainability, and business objectives in every line I write. Whether 
                                it's crafting elegant frontend interfaces with React and Next.js or 
                                building robust backend systems with Node.js and Python, I ensure that 
                                every solution is tailored to meet specific needs and exceed expectations.
                            </p>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-800 dark:to-neutral-900">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <FadeInWhenVisible delay={1.4}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    What Drives Me
                                </span>
                            </h2>
                            <p className="text-lg text-lighttext dark:text-darktext max-w-2xl mx-auto">
                                The core values and principles that guide my work and relationships with clients
                            </p>
                        </div>
                    </FadeInWhenVisible>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: FaCode,
                                title: "Clean Code",
                                description: "Writing maintainable, scalable, and efficient code that stands the test of time.",
                                color: "from-blue-500 to-blue-600"
                            },
                            {
                                icon: FaUsers,
                                title: "Client Success",
                                description: "Your success is my success. I'm committed to delivering solutions that drive real business value.",
                                color: "from-green-500 to-green-600"
                            },
                            {
                                icon: FaBrain,
                                title: "Continuous Learning",
                                description: "Staying ahead of technology trends to bring you the most innovative solutions.",
                                color: "from-purple-500 to-purple-600"
                            },
                            {
                                icon: FaRocket,
                                title: "Innovation",
                                description: "Thinking outside the box to solve complex problems with creative, efficient solutions.",
                                color: "from-orange-500 to-orange-600"
                            }
                        ].map((value, index) => (
                            <FadeInWhenVisible key={value.title} delay={1.6 + index * 0.1}>
                                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                                        <value.icon className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-lighttext dark:text-darktext">
                                        {value.title}
                                    </h3>
                                    <p className="text-lighttext dark:text-darktext leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Highlights */}
            <section className="py-20 bg-white dark:bg-neutral-900">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <FadeInWhenVisible delay={2.0}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lighttext dark:text-darktext">
                                Experience Highlights
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
                        </div>
                    </FadeInWhenVisible>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FadeInWhenVisible delay={2.2}>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">13+</div>
                                <h3 className="text-xl font-semibold mb-2 text-lighttext dark:text-darktext">Years of Experience</h3>
                                <p className="text-lighttext dark:text-darktext">
                                    Over a decade of hands-on development across various technologies and industries
                                </p>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={2.4}>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-secondary-600 mb-4">100+</div>
                                <h3 className="text-xl font-semibold mb-2 text-lighttext dark:text-darktext">Projects Delivered</h3>
                                <p className="text-lighttext dark:text-darktext">
                                    Successfully completed projects ranging from MVPs to enterprise-level applications
                                </p>
                            </div>
                        </FadeInWhenVisible>

                        <FadeInWhenVisible delay={2.6}>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-accent-600 mb-4">50+</div>
                                <h3 className="text-xl font-semibold mb-2 text-lighttext dark:text-darktext">Happy Clients</h3>
                                <p className="text-lighttext dark:text-darktext">
                                    Building lasting relationships through exceptional service and reliable delivery
                                </p>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
                    <FadeInWhenVisible delay={2.8}>
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Let's Build Something Amazing Together
                            </h2>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto">
                                Whether you're a startup with a revolutionary idea or an established business 
                                looking to innovate, I'm here to help turn your vision into reality.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                                >
                                    Start a Conversation
                                </a>
                                <a
                                    href="/projects"
                                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-105"
                                >
                                    View My Work
                                </a>
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>
        </div>
    );
}
