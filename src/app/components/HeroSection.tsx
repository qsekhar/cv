"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp, FaDiscord } from "react-icons/fa6";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://api.whatsapp.com/send?phone=919674540974",
    icon: FaWhatsapp,
    label: "WhatsApp",
    color: "hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-300 dark:hover:border-emerald-500/40",
  },
  {
    href: "https://www.linkedin.com/in/subhra-sekhar-mukherjee",
    icon: CiLinkedin,
    label: "LinkedIn",
    color: "hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/40",
  },
  {
    href: "https://github.com/qsekhar",
    icon: FaGithub,
    label: "GitHub",
    color: "hover:text-neutral-800 dark:hover:text-neutral-100 hover:border-neutral-400 dark:hover:border-white/30",
  },
  {
    href: "https://discordapp.com/users/trozan7550/",
    icon: FaDiscord,
    label: "Discord",
    color: "hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/40",
  },
];

const skillBars = [
  { label: "Frontend", value: 95, gradient: "from-primary-500 to-primary-400" },
  { label: "Backend", value: 92, gradient: "from-secondary-500 to-secondary-400" },
  { label: "DevOps / Cloud", value: 78, gradient: "from-accent-500 to-accent-400" },
];

const techTags = ["React", "Next.js", "Node.js", "Python", "TypeScript"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/30 dark:from-[#060612] dark:via-[#08081a] dark:to-[#0c0c22]">

      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary-200/50 dark:bg-primary-600/15 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-secondary-200/50 dark:bg-secondary-600/15 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[35%] left-[45%] w-[300px] h-[300px] rounded-full bg-accent-200/30 dark:bg-accent-600/10 blur-[80px]"
        />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.3] dark:opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgb(99 102 241 / 0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center py-24 lg:py-28">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-7 order-2 lg:order-1"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            {/* Name heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-neutral-900 dark:text-white">
                Subhra Sekhar
                <br />
                <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 dark:from-primary-400 dark:via-secondary-400 dark:to-accent-400 bg-clip-text text-transparent">
                  Mukherjee
                </span>
              </h1>
            </motion.div>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-xl sm:text-2xl font-light text-neutral-500 dark:text-neutral-400"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React & Next.js Expert",
                  2000,
                  "API & Backend Developer",
                  2000,
                  "Tech Consultant",
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                cursor={true}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md"
            >
              I build web apps, REST APIs, and SaaS products that actually ship —
              with 13+ years of experience and a track record of 100+ delivered
              projects for startups and businesses worldwide.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.72 }}
              className="flex gap-8 py-1"
            >
              {[
                { value: "13+", label: "Years Exp." },
                { value: "100+", label: "Projects" },
                { value: "50+", label: "Clients" },
              ].map((stat, i) => (
                <div key={stat.label} className={i > 0 ? "pl-8 border-l border-neutral-200 dark:border-white/10" : ""}>
                  <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.88 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 text-white rounded-xl font-semibold text-base shadow-lg shadow-primary-500/20 dark:shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/30 dark:hover:shadow-primary-500/40 transition-all duration-300 hover:scale-[1.03]"
              >
                Hire Me — Free Consultation
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={13} />
              </Link>
              <a
                href="./SubhraSekharMukherjeeResume.pdf"
                download="SubhraSekharMukherjeeResume.pdf"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-200 rounded-xl font-semibold text-base hover:bg-neutral-100 dark:hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] shadow-sm"
              >
                <FaDownload className="group-hover:animate-bounce" size={13} />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.04 }}
              className="flex items-center gap-3 pt-1"
            >
              <span className="text-xs text-neutral-400 dark:text-neutral-500 font-medium mr-1">Find me on</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2.5 rounded-xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-neutral-400 transition-all duration-300 ${social.color} shadow-sm`}
                    title={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Profile card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
            className="hidden lg:flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[380px]">

              {/* Profile card */}
              <div className="relative rounded-3xl p-8 bg-white dark:bg-white/[0.03] border border-neutral-200/80 dark:border-white/10 shadow-2xl dark:shadow-none backdrop-blur-sm overflow-hidden">
                {/* Gradient top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500" />

                {/* Inner glow (dark only) */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.04] to-secondary-500/[0.04] dark:from-primary-500/[0.06] dark:to-secondary-500/[0.06] pointer-events-none" />

                {/* Avatar */}
                <div className="relative flex flex-col items-center text-center mb-8">
                  <div className="relative mb-4">
                    <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center text-5xl shadow-lg">
                      👨‍💻
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-emerald-400 rounded-lg border-2 border-white dark:border-[#0a0a1a] shadow-sm flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-white rounded-full" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Subhra Sekhar M.</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">Full Stack Developer</p>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {skillBars.map((skill) => (
                    <div key={skill.label}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-neutral-600 dark:text-neutral-400 font-medium">{skill.label}</span>
                        <span className="text-neutral-400 dark:text-neutral-500">{skill.value}%</span>
                      </div>
                      <div className="h-1.5 bg-neutral-100 dark:bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.value}%` }}
                          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-neutral-100 dark:border-white/[0.07]">
                  {techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating stat: years */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -left-8 px-4 py-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 shadow-xl dark:shadow-primary-900/20"
              >
                <div className="text-2xl font-bold text-neutral-900 dark:text-white">13+</div>
                <div className="text-xs text-neutral-400 dark:text-neutral-500">Years Exp.</div>
              </motion.div>

              {/* Floating stat: projects */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -right-8 px-4 py-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 shadow-xl dark:shadow-secondary-900/20"
              >
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">100+</div>
                <div className="text-xs text-neutral-400 dark:text-neutral-500">Projects Done</div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-300 dark:border-white/20 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neutral-400 dark:bg-white/40 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
