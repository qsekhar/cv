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
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
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
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <Projects />
                </div>
            </section>

            {/* Technologies Used Section */}
            <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-800 dark:to-neutral-900">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {[
                            { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-500", description: "Frontend Library" },
                            { name: "Next.js", icon: "▲", color: "from-gray-700 to-black", description: "React Framework" },
                            { name: "Node.js", icon: "💚", color: "from-green-500 to-green-600", description: "Backend Runtime" },
                            { name: "Python", icon: "🐍", color: "from-yellow-400 to-blue-500", description: "Programming Language" },
                            { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-700", description: "Type Safety" },
                            { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-700", description: "NoSQL Database" },
                            { name: "PostgreSQL", icon: "🐘", color: "from-blue-700 to-indigo-600", description: "SQL Database" },
                            { name: "Docker", icon: "🐳", color: "from-blue-500 to-blue-600", description: "Containerization" },
                            { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600", description: "Cloud Platform" },
                            { name: "GraphQL", icon: "🔗", color: "from-pink-500 to-purple-600", description: "Query Language" },
                            { name: "Redis", icon: "🔴", color: "from-red-500 to-red-600", description: "In-Memory DB" },
                            { name: "Kubernetes", icon: "⚙️", color: "from-blue-600 to-indigo-700", description: "Orchestration" },
                        ].map((tech, index) => (
                            <FadeInWhenVisible key={tech.name} delay={0.8 + index * 0.1}>
                                <div className="group relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                                    <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-6 h-full flex flex-col items-center text-center space-y-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            {tech.icon}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold text-lighttext dark:text-darktext group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                                                {tech.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                                {tech.description}
                                            </p>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>

                    <FadeInWhenVisible delay={1.5}>
                        <div className="mt-16 text-center">
                            <p className="text-lg text-lighttext dark:text-darktext opacity-80">
                                ...and many more technologies in my toolkit
                            </p>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
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
