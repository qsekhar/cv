"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
    {
        name: "WiFi Management Platform",
        description: "A comprehensive management platform for public WiFi providers, featuring real-time network monitoring, user authentication, and detailed analytics. Built with Django REST Framework for robust backend operations and React.js for dynamic frontend experience.",
        urls: ["https://app.b-connect.co.uk"],
        year: '2024',
        location: "London, United Kingdom",
        tech: ["Django", "React", "PostgreSQL", "Redis"],
        category: "Full Stack",
        color: "from-blue-500 to-cyan-500"
    },
    {
        name: "Net Zero Initiative",
        description: "A sophisticated sustainability platform supporting environmental initiatives with tools and resources for achieving net-zero carbon emissions. Features intuitive dashboards and scalable architecture for organizations worldwide.",
        urls: ["https://netzeronow.org"],
        year: '2024',
        location: "London, United Kingdom",
        tech: ["Laravel", "Vue.js", "MySQL", "AWS"],
        category: "Web Application",
        color: "from-green-500 to-emerald-500"
    },
    {
        name: "Medical Exam Preparation Suite",
        description: "Five advanced medical exam preparation platforms enabling real-time practice with vast question databases. Features progress tracking, instant feedback, and comprehensive analytics for medical students.",
        urls: [
            "https://mrcemexamprep.net",
            "https://frcrexamprep.co.uk",
            "https://mrcgpexamprep.co.uk",
            "https://plabprep.co.uk",
            "https://anatomyprep.co.uk",
        ],
        year: "2017 - 2024",
        location: "London, United Kingdom",
        tech: ["Laravel", "Angular", "MySQL", "Docker"],
        category: "Education Platform",
        color: "from-purple-500 to-pink-500"
    },
    {
        name: "E-commerce Solutions",
        description: "Specialized e-commerce platforms for industrial equipment sales, featuring secure payment processing, inventory management, and customer service integration. Optimized for both individual and bulk purchases.",
        urls: [
            "https://www.bluedogwirestripper.com/",
            "https://reddogzone.com/",
        ],
        year: "2015 - 2017",
        location: "Ontario, Canada",
        tech: ["PrestaShop", "PHP", "MySQL", "PayPal"],
        category: "E-commerce",
        color: "from-orange-500 to-red-500"
    },
    {
        name: "Nature House Booking",
        description: "Eco-friendly vacation rental platform connecting users with unique nature accommodations. Promotes sustainable tourism with comprehensive property listings and seamless booking experience.",
        urls: ["https://www.natuurhuisje.nl"],
        year: "2012 - 2014",
        location: "Netherlands",
        tech: ["Core PHP", "MySQL", "jQuery", "CSS3"],
        category: "Travel & Tourism",
        color: "from-teal-500 to-green-500"
    },
    {
        name: 'Corpus Setup Helper For G-Suite',
        description: "A specialized tool for setting up Google Workspace (formerly G Suite) accounts, streamlining the process of configuring user accounts, email settings, and security features for organizations.",
        urls: ["https://chromewebstore.google.com/detail/corpus-setup-helper-for-g/lnhbffdmnngondikaagohfjjhgjbdioi"],
        year: "2025",
        location: "Remote",
        tech: ["Chrome Extension", "JavaScript", "TypeScript", "HTML", "CSS"],
        category: "Productivity Tool",
        color: "from-indigo-500 to-violet-500"
    }
];

export default function Projects() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="max-w-8xl 2xl:max-w-9xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        onHoverStart={() => setHoveredCard(index)}
                        onHoverEnd={() => setHoveredCard(null)}
                        className="group relative"
                    >
                        {/* Gradient Background */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                        
                        {/* Main Card */}
                        <div className="relative bg-white dark:bg-neutral-800 rounded-3xl p-8 h-full shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${project.color}`}></div>
                                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-lighttext dark:text-darktext mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                        {project.year} • {project.location}
                                    </p>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, techIndex) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                                        className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg`}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-justify">
                                {project.description}
                            </p>

                            {/* URLs */}
                            <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                    Live Projects
                                </h4>
                                <div className="space-y-2">
                                    {project.urls.map((url, urlIndex) => (
                                        <motion.div
                                            key={url}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 + urlIndex * 0.1 }}
                                        >
                                            <a
                                                href={url}
                                                target="_blank"
                                                rel="nofollow"
                                                className="group/link inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
                                                <span className="font-medium group-hover/link:underline underline-offset-2">
                                                    {url.replace('https://', '').replace('www.', '')}
                                                </span>
                                                <svg className="w-4 h-4 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Effect Indicator */}
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-b-3xl"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: hoveredCard === index ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
