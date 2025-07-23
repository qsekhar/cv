"use client";
import { useState } from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { sendGAEvent } from "@next/third-parties/google";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

interface newErrorType {
    name?: string;
    email?: string;
    message?: string;
}

const capchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function SayHi() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({} as newErrorType);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setIsSubmitting(true);

        const newErrors: newErrorType = {};
        if (!name) newErrors.name = "Name is required";
        if (!email) newErrors.email = "Email is required";
        else if (!validateEmail(email)) newErrors.email = "Email is invalid";
        if (!message) newErrors.message = "Message is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const body = JSON.stringify({ name, email, message });
            sendGAEvent({ event: "saidHi", value: email });
            
            try {
                const res = await fetch("/api/mail", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: body,
                });

                if (res.ok) {
                    alert("Message sent successfully! I'll get back to you soon.");
                    setName("");
                    setEmail("");
                    setMessage("");
                } else {
                    alert("Failed to send message. Please try again.");
                }
            } catch (error) {
                alert("Failed to send message. Please try again.");
            }
        }
        setIsSubmitting(false);
    };

    return (
        <ReCaptchaProvider reCaptchaKey={capchaKey}>
            <div className="w-full">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                            Get Your Free Consultation Today!
                        </span>
                    </h2>
                    <p className="text-lg text-lighttext dark:text-darktext leading-relaxed">
                        Are you looking for expert advice but not sure where to start? 
                        I'm offering a free consultation to help you navigate your next 
                        steps with confidence. Whether you're facing a tough decision, 
                        planning a new project, or just need some guidance, I am here 
                        to assist you—at no cost!
                    </p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-lighttext dark:text-darktext mb-2"
                            >
                                Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 bg-white dark:bg-neutral-700 text-lighttext dark:text-darktext placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                                    errors.name 
                                        ? "border-red-300 focus:border-red-500" 
                                        : "border-neutral-200 dark:border-neutral-600 focus:border-primary-500"
                                }`}
                                placeholder="Your name"
                            />
                            {errors.name && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 text-sm mt-1"
                                >
                                    {errors.name}
                                </motion.p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-lighttext dark:text-darktext mb-2"
                            >
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 bg-white dark:bg-neutral-700 text-lighttext dark:text-darktext placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                                    errors.email 
                                        ? "border-red-300 focus:border-red-500" 
                                        : "border-neutral-200 dark:border-neutral-600 focus:border-primary-500"
                                }`}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 text-sm mt-1"
                                >
                                    {errors.email}
                                </motion.p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-lighttext dark:text-darktext mb-2"
                        >
                            Message *
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={6}
                            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 bg-white dark:bg-neutral-700 text-lighttext dark:text-darktext placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 resize-vertical ${
                                errors.message 
                                    ? "border-red-300 focus:border-red-500" 
                                    : "border-neutral-200 dark:border-neutral-600 focus:border-primary-500"
                            }`}
                            placeholder="Tell me about your project, goals, and how I can help you..."
                        />
                        {errors.message && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-500 text-sm mt-1"
                            >
                                {errors.message}
                            </motion.p>
                        )}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                            isSubmitting
                                ? "bg-neutral-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-xl"
                        } text-white`}
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <FaPaperPlane className="text-lg" />
                                Send Message
                            </>
                        )}
                    </motion.button>

                    <p className="text-sm text-center text-neutral-500 dark:text-neutral-400">
                        I typically respond within 24 hours. For urgent matters, 
                        feel free to reach out via{" "}
                        <a 
                            href="https://api.whatsapp.com/send?phone=919674540974" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 font-medium"
                        >
                            WhatsApp
                        </a>
                        .
                    </p>
                </motion.form>
            </div>
        </ReCaptchaProvider>
    );
}
