"use client";
import { useState } from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { sendGAEvent } from "@next/third-parties/google";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

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
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

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
                    headers: { "Content-Type": "application/json" },
                    body: body,
                });

                if (res.ok) {
                    setIsSubmitted(true);
                    setName("");
                    setEmail("");
                    setMessage("");
                } else {
                    setSubmitError("Something went wrong. Please try again or reach out via WhatsApp.");
                }
            } catch {
                setSubmitError("Something went wrong. Please try again or reach out via WhatsApp.");
            }
        }
        setIsSubmitting(false);
    };

    return (
        <ReCaptchaProvider reCaptchaKey={capchaKey}>
            <div className="w-full">
                <AnimatePresence mode="wait">
                    {isSubmitted ? (
                        /* ── Success state ── */
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="text-center py-10 space-y-5"
                        >
                            <div className="flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center">
                                    <FaCheckCircle className="text-emerald-500 text-3xl" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Message Sent!</h3>
                                <p className="text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto leading-relaxed">
                                    Thanks for reaching out. I'll get back to you within <strong className="text-neutral-700 dark:text-neutral-300">24 hours</strong>.
                                </p>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send?phone=919674540974"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition-colors"
                            >
                                <FaWhatsapp size={16} />
                                Or message me on WhatsApp for faster response
                            </a>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="block w-full text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 mt-4 transition-colors"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        /* ── Form state ── */
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.form
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-neutral-800/80 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 ${
                                                errors.name
                                                    ? "border-red-400 focus:border-red-400"
                                                    : "border-neutral-200 dark:border-neutral-700 focus:border-primary-500"
                                            }`}
                                            placeholder="John Smith"
                                        />
                                        {errors.name && (
                                            <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs mt-1.5">
                                                {errors.name}
                                            </motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-neutral-800/80 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 ${
                                                errors.email
                                                    ? "border-red-400 focus:border-red-400"
                                                    : "border-neutral-200 dark:border-neutral-700 focus:border-primary-500"
                                            }`}
                                            placeholder="john@company.com"
                                        />
                                        {errors.email && (
                                            <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs mt-1.5">
                                                {errors.email}
                                            </motion.p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                                        Tell me about your project *
                                    </label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={5}
                                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 bg-white dark:bg-neutral-800/80 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 resize-none ${
                                            errors.message
                                                ? "border-red-400 focus:border-red-400"
                                                : "border-neutral-200 dark:border-neutral-700 focus:border-primary-500"
                                        }`}
                                        placeholder="Briefly describe your project — what you need built, your timeline, and budget range..."
                                    />
                                    {errors.message && (
                                        <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs mt-1.5">
                                            {errors.message}
                                        </motion.p>
                                    )}
                                </div>

                                {submitError && (
                                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-sm text-red-600 dark:text-red-400">
                                        {submitError}
                                    </div>
                                )}

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2.5 ${
                                        isSubmitting
                                            ? "bg-neutral-300 dark:bg-neutral-700 cursor-not-allowed text-neutral-500"
                                            : "bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 hover:shadow-lg hover:shadow-primary-500/25 text-white"
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane size={14} />
                                            Send Message — It's Free
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
                                    I respond within 24 hours. Need faster?{" "}
                                    <a
                                        href="https://api.whatsapp.com/send?phone=919674540974"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                                    >
                                        Message me on WhatsApp
                                    </a>
                                </p>
                            </motion.form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ReCaptchaProvider>
    );
}
