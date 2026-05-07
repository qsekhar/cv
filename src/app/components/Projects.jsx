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
    },
    {
        name: "AI-Powered Face Detection",
        description: "An advanced face detection system utilizing AI algorithms for real-time recognition and analysis. made for photographers and videographers to enhance their workflow with automated tagging and organization of visual content.",
        urls: ["http://soorti.com"],
        year: "2025",
        location: "Remote",
        tech: ["Python", "TensorFlow", "OpenCV", "next.js"],
        category: "AI & Machine Learning",
        color: "from-pink-500 to-red-500"
    }
];

export default function Projects() {
    return (
        <div className="max-w-8xl 2xl:max-w-9xl mx-auto">
            {projects.map((project, i) => (
                <article
                    key={project.name}
                    className={`grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 md:gap-7 py-7${i !== 0 ? " border-t border-line" : ""}`}
                >
                    <div className="font-mono text-[11px] tracking-label text-muted uppercase">
                        {String(i + 1).padStart(2, "0")}
                    </div>

                    <div>
                        <h3 className="font-serif text-h3 text-ink mb-2">{project.name}</h3>
                        <p className="text-small text-ink/85 max-w-[60ch] mb-4">{project.description}</p>
                        {project.tech && project.tech.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="font-mono text-[11px] tracking-label text-muted uppercase px-2 py-0.5 border border-line rounded"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {project.urls && project.urls.length > 0 && (
                        <div className="flex flex-col gap-2">
                            {project.urls.map((url) => (
                                <a
                                    key={url}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono uppercase text-[11px] tracking-label text-accent"
                                >
                                    Visit →
                                </a>
                            ))}
                        </div>
                    )}
                </article>
            ))}
        </div>
    );
}
