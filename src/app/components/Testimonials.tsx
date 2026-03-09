"use client";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";

const testimonials = [
    {
        name: "James Whitfield",
        role: "Founder",
        company: "Finova Labs",
        location: "London, UK",
        quote: "Subhra built our entire SaaS dashboard from scratch — React frontend, Node.js API, and PostgreSQL backend. Delivered on time, clean code, and he was available whenever we needed him. Highly recommend.",
        rating: 5,
        project: "SaaS Dashboard",
        color: "from-primary-500 to-secondary-500",
    },
    {
        name: "Priya Nair",
        role: "CTO",
        company: "GreenCart",
        location: "Singapore",
        quote: "We needed a full e-commerce overhaul in under 6 weeks. Subhra delivered a pixel-perfect Next.js storefront with payment integration and CMS. The site now converts 3× better than our old one.",
        rating: 5,
        project: "E-Commerce Platform",
        color: "from-emerald-500 to-teal-500",
    },
    {
        name: "Lars Eriksson",
        role: "Product Manager",
        company: "NetOps AB",
        location: "Stockholm, Sweden",
        quote: "We hired Subhra for a WiFi management API project. His technical depth is impressive — he understood our infrastructure requirements immediately and built something robust and well-documented.",
        rating: 5,
        project: "REST API Development",
        color: "from-violet-500 to-purple-500",
    },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <FaStar key={i} className="text-amber-400 text-sm" />
            ))}
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="py-16 sm:py-20 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-100 dark:border-white/[0.04]">
            <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                <FadeInWhenVisible delay={0.1}>
                    <div className="text-center mb-12">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-600 dark:text-primary-400 mb-2">
                            Client Feedback
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                            What clients say
                        </h2>
                    </div>
                </FadeInWhenVisible>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <FadeInWhenVisible key={t.name} delay={0.2 + index * 0.1}>
                            <div className="relative flex flex-col h-full rounded-2xl bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.07] p-6 shadow-sm hover:shadow-md hover:border-primary-200 dark:hover:border-primary-500/30 transition-all duration-300">
                                {/* Quote icon */}
                                <FaQuoteLeft className="text-primary-200 dark:text-primary-500/30 text-3xl mb-4 flex-shrink-0" />

                                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-6 flex-grow">
                                    "{t.quote}"
                                </p>

                                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-white/[0.05]">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0 text-white font-bold text-sm`}>
                                        {t.name[0]}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-neutral-900 dark:text-white truncate">{t.name}</p>
                                        <p className="text-xs text-neutral-400 dark:text-neutral-500 truncate">{t.role}, {t.company} · {t.location}</p>
                                    </div>
                                    <div className="ml-auto flex-shrink-0">
                                        <StarRating count={t.rating} />
                                    </div>
                                </div>
                            </div>
                        </FadeInWhenVisible>
                    ))}
                </div>

                <FadeInWhenVisible delay={0.5}>
                    <p className="text-center text-xs text-neutral-400 dark:text-neutral-600 mt-8">
                        50+ satisfied clients across Europe, the US, the Middle East, and Asia
                    </p>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}
