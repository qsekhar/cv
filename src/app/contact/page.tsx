import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible";
import { FaWhatsapp, FaLinkedin, FaGithub, FaDiscord, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import { generateCanonicalMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from 'next';

const SayHi = dynamic(() => import("../components/SayHi"));

const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Hire Subhra Sekhar | Freelance Full Stack Developer — Free Consultation",
    description: "Contact Subhra Sekhar Mukherjee — freelance full stack developer available for web apps, APIs, and consulting. Free initial consultation. Responds within 24 hours.",
    ...generateCanonicalMetadata('contact')
};

const contactMethods = [
    {
        icon: FaEnvelope,
        title: "Email",
        description: "Best for detailed project briefs",
        value: "qsekhar@gmail.com",
        href: "mailto:qsekhar@gmail.com",
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: FaWhatsapp,
        title: "WhatsApp",
        description: "Fastest response — chat or call",
        value: "+91 9674 540 974",
        href: "https://api.whatsapp.com/send?phone=919674540974",
        color: "from-emerald-500 to-emerald-600"
    },
    {
        icon: FaLinkedin,
        title: "LinkedIn",
        description: "Connect professionally",
        value: "subhra-sekhar-mukherjee",
        href: "https://www.linkedin.com/in/subhra-sekhar-mukherjee",
        color: "from-blue-600 to-blue-700"
    },
    {
        icon: FaMapMarkerAlt,
        title: "Location",
        description: "Works with clients worldwide",
        value: "Kolkata, India (IST)",
        href: "#",
        color: "from-rose-500 to-rose-600"
    }
];

const guarantees = [
    { icon: FaClock, text: "Reply within 24 hours" },
    { icon: FaCheckCircle, text: "Free initial consultation" },
    { icon: FaCheckCircle, text: "No obligation quote" },
];

const faqs = [
    {
        question: "What's your typical response time?",
        answer: "I respond to all emails within 24 hours on weekdays. For urgent projects, WhatsApp is the fastest way to reach me — I usually reply within a few hours."
    },
    {
        question: "Do you offer free consultations?",
        answer: "Yes — the first consultation is always free. We'll discuss your project goals, tech requirements, and timeline. No commitment needed."
    },
    {
        question: "What kinds of projects do you take on?",
        answer: "Web apps, REST APIs, e-commerce platforms, SaaS products, mobile apps, CMS integrations, and tech consulting for startups and growing businesses."
    },
    {
        question: "What are your rates?",
        answer: "Rates depend on project scope, complexity, and timeline. I provide a detailed quote after the free consultation — transparent pricing, no hidden fees."
    },
    {
        question: "Do you work with international clients?",
        answer: "Absolutely. I've worked with clients across Europe, the US, the Middle East, and Asia. I'm flexible with time zones and communication tools."
    }
];

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

export default function ContactPage() {
    return (
        <div className={inter.className}>

            {/* Hero — short and direct */}
            <section className="relative py-16 sm:py-20 bg-gradient-to-br from-slate-50 via-white to-primary-50/30 dark:from-[#060612] dark:via-[#08081a] dark:to-neutral-900 border-b border-neutral-100 dark:border-white/[0.04]">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
                    <FadeInWhenVisible delay={0.1}>
                        <div className="space-y-4 max-w-3xl mx-auto">
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400">
                                Let's work together
                            </p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
                                Tell me about your{" "}
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    project
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                                Whether you have a full brief or just an idea — send me a message.
                                First consultation is <strong className="text-neutral-700 dark:text-neutral-300">always free</strong>.
                            </p>

                            {/* Trust guarantees */}
                            <div className="flex flex-wrap justify-center gap-4 pt-2">
                                {guarantees.map((g) => (
                                    <div key={g.text} className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                                        <g.icon className="text-emerald-500 text-xs" />
                                        {g.text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* Contact form — first section, maximum visibility */}
            <section className="py-16 sm:py-20 bg-white dark:bg-neutral-950">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

                        {/* Left: Quick contact info — col-span must be on a direct grid child, not inside FadeInWhenVisible */}
                        <div className="lg:col-span-2">
                            <FadeInWhenVisible delay={0.2}>
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                                            Direct Contact
                                        </h2>
                                        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                                            Prefer to reach out directly? Use any of the channels below.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        {contactMethods.map((method) => (
                                            <a
                                                key={method.title}
                                                href={method.href}
                                                target={method.href.startsWith('http') ? '_blank' : '_self'}
                                                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                                className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.07] hover:border-primary-200 dark:hover:border-primary-500/30 hover:shadow-md transition-all duration-300 group"
                                            >
                                                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                                    <method.icon className="text-white text-lg" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">{method.description}</p>
                                                    <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                        {method.value}
                                                    </p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>

                                    <div className="rounded-2xl p-5 bg-primary-50 dark:bg-primary-500/[0.08] border border-primary-100 dark:border-primary-500/20">
                                        <p className="text-sm font-semibold text-primary-700 dark:text-primary-300 mb-1">Available for new projects</p>
                                        <p className="text-sm text-primary-600/80 dark:text-primary-400/80 leading-relaxed">
                                            I'm currently taking on freelance projects. Let's discuss yours.
                                        </p>
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        </div>

                        {/* Right: Form */}
                        <div className="lg:col-span-3">
                            <FadeInWhenVisible delay={0.3}>
                                <div className="rounded-2xl p-6 sm:p-8 bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.07] shadow-sm">
                                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                                        Send a Message
                                    </h2>
                                    <SayHi />
                                </div>
                            </FadeInWhenVisible>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 sm:py-20 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-100 dark:border-white/[0.04]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInWhenVisible delay={0.2}>
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-2">FAQ</p>
                            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                                Common Questions
                            </h2>
                        </div>
                    </FadeInWhenVisible>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FadeInWhenVisible key={index} delay={0.3 + index * 0.07}>
                                <div className="rounded-2xl p-6 bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.07]">
                                    <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
        </div>
    );
}
