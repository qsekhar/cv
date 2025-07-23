import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible";

const Projects = dynamic(() => import("../components/Projects"));

const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function ProjectsPage() {
    return (
        <div className={inter.className}>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-darkbackground dark:via-neutral-900 dark:to-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeInWhenVisible delay={0.2}>
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    My Projects
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-lighttext dark:text-darktext max-w-3xl mx-auto leading-relaxed">
                                A comprehensive showcase of innovative solutions I've built for clients 
                                across various industries and technologies.
                            </p>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 bg-white dark:bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInWhenVisible delay={0.4}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lighttext dark:text-darktext">
                                Featured Work
                            </h2>
                            <p className="text-lg text-lighttext dark:text-darktext max-w-2xl mx-auto">
                                From startups to enterprise solutions, each project represents a unique 
                                challenge solved with cutting-edge technology and creative thinking.
                            </p>
                        </div>
                    </FadeInWhenVisible>
                    
                    <Projects />
                </div>
            </section>

            {/* Technologies Used Section */}
            <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-800 dark:to-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInWhenVisible delay={0.6}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    Technologies I Work With
                                </span>
                            </h2>
                            <p className="text-lg text-lighttext dark:text-darktext max-w-2xl mx-auto mb-12">
                                Modern tools and frameworks that power today's most successful applications
                            </p>
                        </div>
                    </FadeInWhenVisible>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { name: "React", color: "from-blue-400 to-blue-600" },
                            { name: "Next.js", color: "from-gray-700 to-gray-900" },
                            { name: "Node.js", color: "from-green-400 to-green-600" },
                            { name: "Python", color: "from-yellow-400 to-yellow-600" },
                            { name: "TypeScript", color: "from-blue-500 to-blue-700" },
                            { name: "MongoDB", color: "from-green-500 to-green-700" },
                            { name: "PostgreSQL", color: "from-blue-600 to-blue-800" },
                            { name: "Docker", color: "from-blue-400 to-blue-600" },
                            { name: "AWS", color: "from-orange-400 to-orange-600" },
                            { name: "GraphQL", color: "from-pink-400 to-pink-600" },
                            { name: "Redis", color: "from-red-400 to-red-600" },
                            { name: "Kubernetes", color: "from-blue-500 to-indigo-600" },
                        ].map((tech, index) => (
                            <FadeInWhenVisible key={tech.name} delay={0.8 + index * 0.1}>
                                <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center`}>
                                        <span className="text-white font-bold text-lg">
                                            {tech.name.charAt(0)}
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-lighttext dark:text-darktext">
                                        {tech.name}
                                    </h3>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeInWhenVisible delay={0.8}>
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Ready to Start Your Next Project?
                            </h2>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto">
                                Let's discuss how we can bring your vision to life with the same 
                                dedication and expertise shown in these projects.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                                >
                                    Get In Touch
                                </a>
                                <a
                                    href="./SubhraSekharMukherjeeResume.pdf"
                                    download="SubhraSekharMukherjeeResume.pdf"
                                    className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-105"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>
        </div>
    );
}

export const metadata = {
    title: "Projects - Subhra Sekhar Mukherjee",
    description: "Portfolio of projects by Subhra Sekhar Mukherjee - Full Stack Developer & Tech Consultant. View innovative solutions across various industries.",
};
