"use client";
import { useState } from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { sendGAEvent } from "@next/third-parties/google";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import { Button } from "./editorial/Button";

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
            <div className="w-full bg-paper border border-line p-6 lg:p-8 flex flex-col gap-5">
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
                                <div className="w-16 h-16 bg-success/10 flex items-center justify-center">
                                    <FaCheckCircle className="text-success text-3xl" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-serif text-h2 text-ink">Message Sent!</h3>
                                <p className="text-muted max-w-sm mx-auto leading-relaxed">
                                    Thanks for reaching out. I'll get back to you within <strong className="text-ink">24 hours</strong>.
                                </p>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send?phone=919674540974"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 font-sans font-medium text-small tracking-wide border bg-success text-paper border-success hover:opacity-85 transition-colors focus:outline-none focus-visible:focus-ring"
                            >
                                <FaWhatsapp size={16} />
                                Or message me on WhatsApp for faster response
                            </a>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="block w-full text-small font-mono text-muted hover:text-ink mt-4 transition-colors"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        /* ── Form state ── */
                        <div
                            key="form"
                        >
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-5"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="font-mono uppercase text-[10px] tracking-label text-muted">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={`bg-paper border px-3 py-2 font-sans text-body text-ink placeholder:text-muted focus:outline-none focus-visible:focus-ring ${
                                                errors.name
                                                    ? "border-danger"
                                                    : "border-ink"
                                            }`}
                                            placeholder="John Smith"
                                        />
                                        {errors.name && (
                                            <p className="font-mono uppercase text-[11px] tracking-label text-danger mt-1">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="font-mono uppercase text-[10px] tracking-label text-muted">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={`bg-paper border px-3 py-2 font-sans text-body text-ink placeholder:text-muted focus:outline-none focus-visible:focus-ring ${
                                                errors.email
                                                    ? "border-danger"
                                                    : "border-ink"
                                            }`}
                                            placeholder="john@company.com"
                                        />
                                        {errors.email && (
                                            <p className="font-mono uppercase text-[11px] tracking-label text-danger mt-1">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="font-mono uppercase text-[10px] tracking-label text-muted">
                                        Tell me about your project *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={5}
                                        className={`bg-paper border px-3 py-2 font-sans text-body text-ink placeholder:text-muted focus:outline-none focus-visible:focus-ring resize-none ${
                                            errors.message
                                                ? "border-danger"
                                                : "border-ink"
                                        }`}
                                        placeholder="Briefly describe your project — what you need built, your timeline, and budget range..."
                                    />
                                    {errors.message && (
                                        <p className="font-mono uppercase text-[11px] tracking-label text-danger mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {submitError && (
                                    <div className="p-4 bg-paper border border-danger text-small text-danger font-mono uppercase tracking-label">
                                        {submitError}
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    variant="primary"
                                    className="w-full justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-paper border-t-transparent animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane size={14} />
                                            Send Message — It's Free
                                        </>
                                    )}
                                </Button>

                                <p className="text-small text-center text-muted">
                                    I respond within 24 hours. Need faster?{" "}
                                    <a
                                        href="https://api.whatsapp.com/send?phone=919674540974"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-ink hover:underline font-medium"
                                    >
                                        Message me on WhatsApp
                                    </a>
                                </p>
                            </form>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </ReCaptchaProvider>
    );
}
