"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaGithub, FaDiscord, FaEnvelope, FaHeart } from "react-icons/fa";

const socialLinks = [
    {
        href: "https://api.whatsapp.com/send?phone=919674540974",
        icon: FaWhatsapp,
        label: "WhatsApp",
    },
    {
        href: "https://www.linkedin.com/in/subhra-sekhar-mukherjee",
        icon: FaLinkedin,
        label: "LinkedIn",
    },
    {
        href: "https://github.com/qsekhar",
        icon: FaGithub,
        label: "GitHub",
    },
    {
        href: "https://discordapp.com/users/trozan7550/",
        icon: FaDiscord,
        label: "Discord",
    },
];

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/timeline", label: "Timeline" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

const services = [
    "Full Stack Development",
    "Web Applications",
    "Mobile App Development",
    "API Development",
    "Tech Consulting",
    "UI/UX Design",
];

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-neutral-300">
            {/* Main Footer */}
            <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                            Subhra Sekhar Mukherjee
                        </Link>
                        <p className="text-neutral-400 leading-relaxed">
                            Full Stack Developer & Tech Consultant with 12+ years of experience 
                            crafting innovative digital solutions.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-all duration-300"
                                        title={social.label}
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service} className="text-neutral-400">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
                        <div className="space-y-3">
                            <a
                                href="mailto:hello@subhrasekhar.in"
                                className="flex items-center space-x-3 text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                            >
                                <FaEnvelope size={16} />
                                <span>hello@subhrasekhar.in</span>
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=919674540974"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                            >
                                <FaWhatsapp size={16} />
                                <span>+91 9674 540 974</span>
                            </a>
                            <div className="pt-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                                >
                                    Start a Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800">
                <div className="max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-neutral-400 text-sm">
                            © {new Date().getFullYear()} Subhra Sekhar Mukherjee. All rights reserved.
                        </div>
                        <div className="flex items-center space-x-1 text-neutral-400 text-sm">
                            <span>Made with</span>
                            <FaHeart className="text-red-500 mx-1" size={12} />
                            <span>and lots of ☕</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
