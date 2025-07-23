import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible";

const Skills = dynamic(() => import("../components/Skills"));
const OtherSkills = dynamic(() => import("../components/OtherSkills"));

const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function SkillsPage() {
    return (
        <div className={inter.className}>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-darkbackground dark:via-neutral-900 dark:to-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeInWhenVisible delay={0.2}>
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    Technical Skills
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-lighttext dark:text-darktext max-w-3xl mx-auto leading-relaxed">
                                A comprehensive overview of my technical expertise across the full 
                                technology stack, honed through 12+ years of hands-on experience.
                            </p>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* Main Skills Section */}
            <section className="py-20 bg-white dark:bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInWhenVisible delay={0.4}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lighttext dark:text-darktext">
                                Core Technologies
                            </h2>
                            <p className="text-lg text-lighttext dark:text-darktext max-w-2xl mx-auto">
                                My primary areas of expertise that form the foundation of modern web development
                            </p>
                        </div>
                    </FadeInWhenVisible>
                    
                    <Skills />
                </div>
            </section>

            {/* Additional Skills Section */}
            <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-800 dark:to-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInWhenVisible delay={0.6}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    Additional Expertise
                                </span>
                            </h2>
                            <p className="text-lg text-lighttext dark:text-darktext max-w-2xl mx-auto">
                                Specialized skills and tools that complement my core development capabilities
                            </p>
                        </div>
                    </FadeInWhenVisible>
                    
                    <div className="flex justify-center">
                        <OtherSkills />
                    </div>
                </div>
            </section>

            {/* Skill Categories */}
            <section className="py-20 bg-white dark:bg-neutral-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInWhenVisible delay={0.8}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lighttext dark:text-darktext">
                                Skill Categories
                            </h2>
                        </div>
                    </FadeInWhenVisible>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Frontend Development",
                                icon: "🎨",
                                skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
                                color: "from-blue-500 to-cyan-500"
                            },
                            {
                                title: "Backend Development",
                                icon: "⚙️",
                                skills: ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "REST APIs"],
                                color: "from-green-500 to-teal-500"
                            },
                            {
                                title: "Database & Storage",
                                icon: "🗄️",
                                skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "AWS S3", "Prisma"],
                                color: "from-purple-500 to-pink-500"
                            },
                            {
                                title: "DevOps & Cloud",
                                icon: "☁️",
                                skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Nginx", "Linux"],
                                color: "from-orange-500 to-red-500"
                            },
                            {
                                title: "Mobile Development",
                                icon: "📱",
                                skills: ["React Native", "Flutter", "Progressive Web Apps", "Responsive Design"],
                                color: "from-indigo-500 to-purple-500"
                            },
                            {
                                title: "Tools & Workflow",
                                icon: "🛠️",
                                skills: ["Git", "VS Code", "Figma", "Postman", "Jest", "Webpack"],
                                color: "from-gray-500 to-gray-700"
                            }
                        ].map((category, index) => (
                            <FadeInWhenVisible key={category.title} delay={1 + index * 0.1}>
                                <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-center mb-4 text-lighttext dark:text-darktext">
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-sm rounded-full text-lighttext dark:text-darktext"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeInWhenVisible delay={1.2}>
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Need These Skills for Your Project?
                            </h2>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto">
                                Let's discuss how my technical expertise can help solve your specific challenges 
                                and drive your project to success.
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

export const metadata = {
    title: "Skills - Subhra Sekhar Mukherjee",
    description: "Technical skills and expertise of Subhra Sekhar Mukherjee - Full Stack Developer & Tech Consultant. 12+ years of experience across modern technologies.",
};
