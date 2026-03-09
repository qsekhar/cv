import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible";
import { FaWhatsapp, FaLinkedin, FaGithub, FaDiscord, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { generateCanonicalMetadata } from "../components/utils/CanonicalUrl";
import type { Metadata } from 'next';

const SayHi = dynamic(() => import("../components/SayHi"));

const inter = Inter({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Contact Me - Subhra Sekhar | Get In Touch",
    description: "Get in touch with Subhra Sekhar Mukherjee - Full Stack Developer & Tech Consultant. Available for freelance projects and consulting opportunities.",
    ...generateCanonicalMetadata('contact')
};

const contactMethods = [
    {
        icon: FaEnvelope,
        title: "Email",
        description: "Drop me a line anytime",
        value: "qsekhar@gmail.com",
        href: "mailto:qsekhar@gmail.com",
        color: "from-blue-500 to-blue-600"
    },
    // {
    //     icon: FaWhatsapp,
    //     title: "WhatsApp",
    //     description: "Quick chat or call",
    //     value: "+91 9674 540 974",
    //     href: "https://api.whatsapp.com/send?phone=919674540974",
    //     color: "from-green-500 to-green-600"
    // },
    {
        icon: FaLinkedin,
        title: "LinkedIn",
        description: "Let's connect professionally",
        value: "subhra-sekhar-mukherjee",
        href: "https://www.linkedin.com/in/subhra-sekhar-mukherjee",
        color: "from-blue-600 to-blue-700"
    },
    {
        icon: FaMapMarkerAlt,
        title: "Location",
        description: "Based in India",
        value: "Kolkata, West Bengal",
        href: "#",
        color: "from-red-500 to-red-600"
    }
];

const socialLinks = [
    {
        icon: FaGithub,
        name: "GitHub",
        href: "https://github.com/qsekhar",
        color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
        icon: FaLinkedin,
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/subhra-sekhar-mukherjee",
        color: "hover:text-blue-600"
    },
    {
        icon: FaWhatsapp,
        name: "WhatsApp",
        href: "https://api.whatsapp.com/send?phone=919674540974",
        color: "hover:text-green-500"
    },
    {
        icon: FaDiscord,
        name: "Discord",
        href: "https://discordapp.com/users/trozan7550/",
        color: "hover:text-indigo-500"
    }
];

export default function ContactPage() {
    return (
        <div className={inter.className}>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-darkbackground dark:via-neutral-900 dark:to-neutral-800">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
                    <FadeInWhenVisible delay={0.2}>
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold">
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    Get In Touch
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-lighttext dark:text-darktext max-w-3xl mx-auto leading-relaxed">
                                Ready to start your next project? I'd love to hear about your ideas 
                                and discuss how we can bring them to life together.
                            </p>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-20 bg-white dark:bg-neutral-900">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                    <FadeInWhenVisible delay={0.4}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lighttext dark:text-darktext">
                                How to Reach Me
                            </h2>
                            <p className="text-lg text-lighttext dark:text-darktext max-w-2xl mx-auto">
                                Choose the method that works best for you. I'm always excited to connect with new people and discuss interesting projects.
                            </p>
                        </div>
                    </FadeInWhenVisible>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactMethods.map((method, index) => (
                            <FadeInWhenVisible key={method.title} delay={0.6 + index * 0.1}>
                                <a
                                    href={method.href}
                                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className="group bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center block"
                                >
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <method.icon className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-lighttext dark:text-darktext group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {method.title}
                                    </h3>
                                    <p className="text-sm text-lighttext dark:text-darktext mb-2">
                                        {method.description}
                                    </p>
                                    <p className="font-medium text-primary-600 dark:text-primary-400">
                                        {method.value}
                                    </p>
                                </a>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-800 dark:to-neutral-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInWhenVisible delay={1.0}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                                    Send Me a Message
                                </span>
                            </h2>
                            <p className="text-lg text-lighttext dark:text-darktext max-w-2xl mx-auto">
                                Fill out the form below and I'll get back to you as soon as possible. 
                                I'm offering free consultations for new projects!
                            </p>
                        </div>
                    </FadeInWhenVisible>

                    <FadeInWhenVisible delay={1.2}>
                        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-xl">
                            <SayHi />
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white dark:bg-neutral-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeInWhenVisible delay={1.4}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lighttext dark:text-darktext">
                                Frequently Asked Questions
                            </h2>
                        </div>
                    </FadeInWhenVisible>

                    <div className="space-y-8">
                        {[
                            {
                                question: "What's your typical response time?",
                                answer: "I usually respond within 24 hours during weekdays. For urgent matters, feel free to reach out via WhatsApp for faster communication."
                            },
                            {
                                question: "Do you offer free consultations?",
                                answer: "Yes! I offer free initial consultations to understand your project requirements and provide guidance on the best approach for your needs."
                            },
                            {
                                question: "What types of projects do you work on?",
                                answer: "I work on a wide range of projects including web applications, mobile apps, e-commerce platforms, APIs, and custom software solutions for businesses of all sizes."
                            },
                            {
                                question: "What are your rates?",
                                answer: "My rates vary depending on the project complexity, timeline, and requirements. I provide detailed quotes after understanding your specific needs during our initial consultation."
                            },
                            {
                                question: "Do you work with international clients?",
                                answer: "Absolutely! I work with clients worldwide and am comfortable with different time zones. I use modern communication tools to ensure smooth collaboration regardless of location."
                            }
                        ].map((faq, index) => (
                            <FadeInWhenVisible key={index} delay={1.6 + index * 0.1}>
                                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-neutral-800 dark:to-neutral-700 rounded-xl p-6">
                                    <h3 className="text-xl font-bold mb-3 text-lighttext dark:text-darktext">
                                        {faq.question}
                                    </h3>
                                    <p className="text-lighttext dark:text-darktext leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </FadeInWhenVisible>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Links */}
            <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
                    <FadeInWhenVisible delay={2.0}>
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Let's Connect
                            </h2>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto">
                                Follow me on social media for updates, insights, and behind-the-scenes content
                            </p>
                            
                            <div className="flex justify-center gap-6">
                                {socialLinks.map((social, index) => (
                                    <FadeInWhenVisible key={social.name} delay={2.2 + index * 0.1}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 bg-white/10 backdrop-blur-sm rounded-full text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                                            title={social.name}
                                        >
                                            <social.icon size={24} />
                                        </a>
                                    </FadeInWhenVisible>
                                ))}
                            </div>

                            <div className="pt-8">
                                <p className="text-white/80">
                                    Available for freelance work and consulting opportunities
                                </p>
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </section>
        </div>
    );
}
