import dynamic from "next/dynamic";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Hero from "../components/editorial/Hero";
import Wrap from "../components/editorial/Wrap";
import SectionHeader from "../components/editorial/SectionHeader";
import Disclosure from "../components/editorial/Disclosure";
import { generatePageMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from "next";

const SayHi = dynamic(() => import("../components/SayHi"));

export const metadata: Metadata = generatePageMetadata({
  path: "contact",
  title: "Contact — Start a Project",
  description:
    "Get in touch with Subhra Sekhar Mukherjee — Full Stack Developer & Tech Consultant. Free 30-minute consultation. Email, WhatsApp, or send a note from this page.",
});

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
        <>
            {/* Hero */}
            <Hero
                title="Tell me about your project."
                lede="Whether you have a full brief or just an idea — send me a message. First consultation is always free."
            />

            {/* Contact Info Grid */}
            <section className="py-9 lg:py-10">
                <Wrap>
                    <SectionHeader kicker="Section 02" title="Direct." refLabel="§02" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Email */}
                        <div className="bg-paper-2 border border-line p-5 lg:p-6">
                            <div className="font-mono uppercase text-[10px] tracking-label text-muted mb-2 flex items-center gap-2">
                                <FaEnvelope size={12} />
                                Email
                            </div>
                            <a
                                href="mailto:qsekhar@gmail.com"
                                className="font-serif text-h3 text-ink hover:text-accent transition-colors break-all"
                            >
                                qsekhar@gmail.com
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-paper-2 border border-line p-5 lg:p-6">
                            <div className="font-mono uppercase text-[10px] tracking-label text-muted mb-2 flex items-center gap-2">
                                <FaWhatsapp size={12} />
                                WhatsApp
                            </div>
                            <a
                                href="https://api.whatsapp.com/send?phone=919674540974"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-serif text-h3 text-ink hover:text-accent transition-colors"
                            >
                                +91 9674 540 974
                            </a>
                        </div>

                        {/* Location */}
                        <div className="bg-paper-2 border border-line p-5 lg:p-6">
                            <div className="font-mono uppercase text-[10px] tracking-label text-muted mb-2">Location</div>
                            <div className="font-serif text-h3 text-ink">
                                Kolkata, India (IST)
                            </div>
                        </div>
                    </div>
                </Wrap>
            </section>

            {/* Contact Form */}
            <section className="py-9 lg:py-10 bg-paper-2">
                <Wrap>
                    <SectionHeader kicker="Section 03" title="Send a note." refLabel="§03" />
                    <SayHi />
                </Wrap>
            </section>

            {/* FAQ */}
            <section className="py-9 lg:py-10">
                <Wrap>
                    <SectionHeader kicker="Section 04" title="Questions." refLabel="§04" />
                    <div className="flex flex-col divide-y divide-line border-y border-line">
                        {faqs.map((faq) => (
                            <Disclosure
                                key={faq.question}
                                question={faq.question}
                            >
                                {faq.answer}
                            </Disclosure>
                        ))}
                    </div>
                </Wrap>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
        </>
    );
}
