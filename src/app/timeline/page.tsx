import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible";
import { motion } from "framer-motion";

const TimeLine = dynamic(() => import("../components/TimeLine"));

const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function TimelinePage() {
    return (
        <div className={inter.className}>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-darkbackground dark:via-neutral-900 dark:to-neutral-800">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
                    <FadeInWhenVisible delay={0.2}>
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    My Journey
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-lighttext dark:text-darktext max-w-3xl mx-auto leading-relaxed">
                                A decade-plus journey through the evolving landscape of technology, 
                                from early experiments to leading complex projects across industries.
                            </p>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-white dark:bg-neutral-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInWhenVisible delay={0.4}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lighttext dark:text-darktext">
                                Professional Timeline
                            </h2>
                            <p className="text-lg text-lighttext dark:text-darktext max-w-2xl mx-auto">
                                Key milestones, achievements, and experiences that shaped my career
                            </p>
                        </div>
                    </FadeInWhenVisible>
                    
                    <div className="relative">
                        <TimeLine />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <FadeInWhenVisible delay={0.6}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            <div className="space-y-2">
                                <div className="text-3xl md:text-4xl font-bold">13+</div>
                                <div className="text-lg opacity-90">Years Experience</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl md:text-4xl font-bold">100+</div>
                                <div className="text-lg opacity-90">Projects Completed</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl md:text-4xl font-bold">50+</div>
                                <div className="text-lg opacity-90">Happy Clients</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl md:text-4xl font-bold">24/7</div>
                                <div className="text-lg opacity-90">Support</div>
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>
        </div>
    );
}

export const metadata = {
    title: "Timeline - Subhra Sekhar Mukherjee",
    description: "Professional journey and career timeline of Subhra Sekhar Mukherjee - Full Stack Developer & Tech Consultant",
};
