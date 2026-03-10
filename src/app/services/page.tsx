import { Inter } from "next/font/google";
import Link from "next/link";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible";
import { generateCanonicalMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from "next";
import {
    FaCode, FaServer, FaMobile, FaShoppingCart, FaBrain, FaRocket,
    FaCheckCircle, FaArrowRight, FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineClock, HiOutlineChatAlt2, HiOutlineShieldCheck, HiOutlineDocumentText } from "react-icons/hi";

const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Services — Freelance Full Stack Developer | Subhra Sekhar",
    description: "Web app development, REST API design, mobile apps, e-commerce, and MVP development. Hire Subhra Sekhar — 13+ years, 100+ delivered projects, free consultation.",
    keywords: [
        "hire full stack developer",
        "freelance web developer",
        "React Next.js developer for hire",
        "API development services",
        "mobile app development",
        "MVP development",
        "e-commerce development",
        "tech consulting India",
    ],
    ...generateCanonicalMetadata("services"),
};

const services = [
    {
        id: "web-app",
        icon: FaCode,
        title: "Web App Development",
        tagline: "Production-ready apps built with modern tech",
        description:
            "I design and build full-featured web applications using React, Next.js, and TypeScript — optimised for performance, SEO, and accessibility. From MVPs to enterprise dashboards, I deliver clean, maintainable code.",
        deliverables: [
            "Responsive, mobile-first UI",
            "SEO & Core Web Vitals optimised",
            "Auth, roles, and permissions",
            "CI/CD-ready codebase",
            "Ongoing maintenance available",
        ],
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
        color: "from-primary-500 to-primary-600",
        lightBg: "bg-primary-50 dark:bg-primary-500/10",
        border: "border-primary-100 dark:border-primary-500/20",
        accent: "text-primary-600 dark:text-primary-400",
    },
    {
        id: "api-backend",
        icon: FaServer,
        title: "API & Backend Development",
        tagline: "Scalable, secure, and well-documented APIs",
        description:
            "Need a backend that can grow with you? I build REST APIs and server-side systems with Node.js, Python, or PHP — with proper authentication, error handling, and documentation included as standard.",
        deliverables: [
            "REST or GraphQL API design",
            "JWT / OAuth authentication",
            "Database design & optimisation",
            "Swagger / OpenAPI docs",
            "Cloud deployment (AWS, GCP, Vercel)",
        ],
        tech: ["Node.js", "Python", "PHP", "PostgreSQL", "MongoDB", "Redis"],
        color: "from-secondary-500 to-secondary-600",
        lightBg: "bg-secondary-50 dark:bg-secondary-500/10",
        border: "border-secondary-100 dark:border-secondary-500/20",
        accent: "text-secondary-600 dark:text-secondary-400",
    },
    {
        id: "mobile",
        icon: FaMobile,
        title: "Mobile App Development",
        tagline: "One codebase — iOS and Android",
        description:
            "Cross-platform mobile apps that feel native. Using Flutter or React Native, I build apps that are fast, smooth, and ready for both app stores — saving you the cost of two separate development teams.",
        deliverables: [
            "iOS & Android from one codebase",
            "Native look and feel",
            "App Store & Play Store submission",
            "Push notifications",
            "Offline-first support",
        ],
        tech: ["Flutter", "React Native", "Dart", "Firebase", "REST APIs"],
        color: "from-accent-500 to-accent-600",
        lightBg: "bg-accent-50 dark:bg-accent-500/10",
        border: "border-accent-100 dark:border-accent-500/20",
        accent: "text-accent-600 dark:text-accent-400",
    },
    {
        id: "ecommerce",
        icon: FaShoppingCart,
        title: "E-Commerce Solutions",
        tagline: "Online stores that convert browsers into buyers",
        description:
            "From custom storefronts to WooCommerce customisations — I build e-commerce experiences optimised for conversion. Payment gateways, inventory management, and admin dashboards included.",
        deliverables: [
            "Custom storefront UI",
            "Stripe / Razorpay / PayPal integration",
            "Cart, checkout, and order management",
            "Product & inventory CMS",
            "Performance & SEO optimisation",
        ],
        tech: ["Next.js", "WooCommerce", "Stripe", "Shopify", "PostgreSQL"],
        color: "from-emerald-500 to-emerald-600",
        lightBg: "bg-emerald-50 dark:bg-emerald-500/10",
        border: "border-emerald-100 dark:border-emerald-500/20",
        accent: "text-emerald-600 dark:text-emerald-400",
    },
    {
        id: "consulting",
        icon: FaBrain,
        title: "Tech Consulting",
        tagline: "Expert guidance — save months of wrong decisions",
        description:
            "Architecture reviews, tech stack selection, code audits, and team mentoring. If you're building something and want an experienced second opinion before committing to a direction, I'm here to help.",
        deliverables: [
            "Architecture review & recommendations",
            "Tech stack selection advice",
            "Code quality & security audit",
            "Team onboarding & mentoring",
            "Written report with action items",
        ],
        tech: ["System Design", "Code Review", "Security", "Performance", "Best Practices"],
        color: "from-violet-500 to-violet-600",
        lightBg: "bg-violet-50 dark:bg-violet-500/10",
        border: "border-violet-100 dark:border-violet-500/20",
        accent: "text-violet-600 dark:text-violet-400",
    },
    {
        id: "mvp",
        icon: FaRocket,
        title: "MVP Development",
        tagline: "From idea to launch — fast",
        description:
            "Have a startup idea but need to validate it quickly? I've launched 100+ MVPs and know exactly what to build — and what to skip — to get you in front of real users as fast as possible.",
        deliverables: [
            "Scoped feature set for launch",
            "Working product in weeks, not months",
            "User feedback integration",
            "Scalable foundation for growth",
            "Investor-ready demo",
        ],
        tech: ["React", "Next.js", "Node.js", "Supabase", "Vercel"],
        color: "from-rose-500 to-rose-600",
        lightBg: "bg-rose-50 dark:bg-rose-500/10",
        border: "border-rose-100 dark:border-rose-500/20",
        accent: "text-rose-600 dark:text-rose-400",
    },
];

const processSteps = [
    {
        step: "01",
        icon: HiOutlineChatAlt2,
        title: "Free Discovery Call",
        description: "We discuss your project — goals, timeline, budget. No sales pitch, just a real conversation about what you need.",
    },
    {
        step: "02",
        icon: HiOutlineDocumentText,
        title: "Proposal & Scope",
        description: "I send a clear written proposal: what I'll build, how long it takes, and what it costs. No hidden fees.",
    },
    {
        step: "03",
        icon: FaCode,
        title: "Design & Build",
        description: "I build in weekly sprints, sharing progress regularly. You're always in the loop — no black-box development.",
    },
    {
        step: "04",
        icon: HiOutlineShieldCheck,
        title: "Review & Launch",
        description: "You review and approve before anything goes live. I handle deployment and make sure everything runs smoothly.",
    },
];

const guarantees = [
    { icon: HiOutlineClock, text: "Free initial consultation" },
    { icon: FaCheckCircle, text: "Fixed-price or hourly — your choice" },
    { icon: HiOutlineShieldCheck, text: "Code ownership — yours forever" },
    { icon: HiOutlineChatAlt2, text: "Responsive communication" },
];

const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Freelance Full Stack Development",
    "description": "Web app development, API design, mobile apps, e-commerce, and MVP development services by Subhra Sekhar Mukherjee.",
    "provider": {
        "@type": "Person",
        "name": "Subhra Sekhar Mukherjee",
        "url": "https://www.subhrasekhar.in",
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Development Services",
        "itemListElement": services.map((s) => ({
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": s.title,
                "description": s.description,
            },
        })),
    },
};

export default function ServicesPage() {
    return (
        <div className={inter.className}>
            {/* Hero */}
            <section className="relative py-20 sm:py-28 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-[#060612] dark:via-[#08081a] dark:to-[#0c0c22] overflow-hidden">
                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgb(99 102 241 / 0.8) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />
                {/* Glow orbs */}
                <div className="absolute top-[-10%] right-[15%] w-[400px] h-[400px] rounded-full bg-primary-300/20 dark:bg-primary-500/10 blur-[100px] pointer-events-none" />
                <div className="absolute bottom-[-5%] left-[5%] w-[300px] h-[300px] rounded-full bg-secondary-300/20 dark:bg-secondary-500/10 blur-[80px] pointer-events-none" />

                <div className="relative z-10 max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <FadeInWhenVisible delay={0.1}>
                        <div className="max-w-3xl">
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-4">
                                What I Offer
                            </p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white leading-tight mb-6">
                                Services that{" "}
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    ship products
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 max-w-2xl">
                                13+ years of freelance experience across web, mobile, and API development. I work with startups and businesses worldwide — remotely, reliably, and on budget.
                            </p>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-4 mb-10">
                                {guarantees.map((g) => (
                                    <div key={g.text} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                                        <g.icon className="text-primary-500 flex-shrink-0" />
                                        <span>{g.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-primary-500/25"
                                >
                                    Get a Free Consultation <FaArrowRight size={12} />
                                </Link>
                                <a
                                    href="https://wa.me/917980350073?text=Hi%20Subhra%2C%20I%20want%20to%20discuss%20a%20project"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.03]"
                                >
                                    <FaWhatsapp size={16} /> Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* Service Cards */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-neutral-950">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <FadeInWhenVisible delay={0.1}>
                        <div className="text-center mb-14">
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                                Full-service{" "}
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    development
                                </span>
                            </h2>
                            <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
                                From a single landing page to a multi-platform SaaS product — I cover the whole stack.
                            </p>
                        </div>
                    </FadeInWhenVisible>

                    <div className="space-y-8">
                        {services.map((service, index) => (
                            <FadeInWhenVisible key={service.id} delay={0.1 + index * 0.07}>
                                <div
                                    id={service.id}
                                    className={`group rounded-2xl p-7 sm:p-8 lg:p-10 ${service.lightBg} border ${service.border} hover:shadow-lg transition-all duration-300 scroll-mt-24`}
                                >
                                    <div className="flex flex-col lg:flex-row lg:gap-12">
                                        {/* Left: header + description */}
                                        <div className="flex-1 mb-6 lg:mb-0">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                                                    <service.icon className="text-white text-xl" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                                                        {service.title}
                                                    </h3>
                                                    <p className={`text-sm font-medium ${service.accent}`}>
                                                        {service.tagline}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
                                                {service.description}
                                            </p>
                                            {/* Tech tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {service.tech.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="px-3 py-1 text-xs font-medium rounded-lg bg-white/70 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-300"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right: deliverables */}
                                        <div className="lg:w-72 xl:w-80 flex-shrink-0">
                                            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500 mb-3">
                                                What's included
                                            </p>
                                            <ul className="space-y-2.5">
                                                {service.deliverables.map((item) => (
                                                    <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                                                        <FaCheckCircle className={`${service.accent} mt-0.5 flex-shrink-0 text-sm`} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link
                                                href="/contact"
                                                className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${service.accent} hover:gap-3 transition-all duration-300`}
                                            >
                                                Discuss this service <FaArrowRight size={11} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 sm:py-20 lg:py-24 bg-neutral-50 dark:bg-neutral-900/50">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <FadeInWhenVisible delay={0.1}>
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-2">
                                How it works
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
                                Simple, transparent process
                            </h2>
                        </div>
                    </FadeInWhenVisible>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <FadeInWhenVisible key={step.step} delay={0.1 + index * 0.1}>
                                <div className="relative bg-white dark:bg-white/[0.03] rounded-2xl p-6 border border-neutral-200 dark:border-white/[0.07] hover:border-primary-200 dark:hover:border-primary-500/30 hover:shadow-md transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-3xl font-black text-neutral-100 dark:text-white/10 leading-none select-none">
                                            {step.step}
                                        </span>
                                        <div className="w-9 h-9 rounded-lg bg-primary-50 dark:bg-primary-500/10 border border-primary-100 dark:border-primary-500/20 flex items-center justify-center">
                                            <step.icon className="text-primary-600 dark:text-primary-400 text-base" />
                                        </div>
                                    </div>
                                    <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{step.description}</p>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 sm:py-20 bg-neutral-950 dark:bg-[#06060f] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary-600/10 blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-secondary-600/10 blur-[100px]" />
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                        }}
                    />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeInWhenVisible delay={0.2}>
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-400 mb-4">
                            Ready to build?
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Let's discuss your{" "}
                            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                project
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                            First consultation is always free. Tell me what you're building and I'll tell you exactly how I can help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-primary-500/25"
                            >
                                Start a Free Consultation <FaArrowRight size={12} />
                            </Link>
                            <a
                                href="https://wa.me/917980350073?text=Hi%20Subhra%2C%20I%20want%20to%20discuss%20a%20project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.03]"
                            >
                                <FaWhatsapp size={18} /> WhatsApp Me
                            </a>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
            />
        </div>
    );
}
