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
    color: "hover:text-green-500",
  },
  {
    href: "https://www.linkedin.com/in/subhra-sekhar-mukherjee",
    icon: CiLinkedin,
    label: "LinkedIn",
    color: "hover:text-blue-600",
  },
  {
    href: "https://github.com/qsekhar",
    icon: FaGithub,
    label: "GitHub",
    color: "hover:text-gray-800 dark:hover:text-gray-200",
  },
  {
    href: "https://discordapp.com/users/trozan7550/",
    icon: FaDiscord,
    label: "Discord",
    color: "hover:text-indigo-500",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-darkbackground dark:to-neutral-800" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 dark:from-primary-400/20 to-secondary-200/30 dark:to-secondary-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-secondary-200/30 dark:from-secondary-400/20 to-accent-200/30 dark:to-accent-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-8xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8 lg:space-y-12"
        >
          {/* Main heading */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                Subhra Sekhar
              </span>
              <br />
              <span className="text-neutral-800 dark:text-neutral-200">
                Mukherjee
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-neutral-600 dark:text-neutral-300 font-light"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Tech Consultant",
                  2000,
                  "Problem Solver",
                  2000,
                  "Innovation Catalyst",
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                cursor={true}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
              />
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto text-lg sm:text-xl lg:text-xl xl:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed"
          >
            Crafting innovative digital solutions with 13+ years of experience.
            Specializing in modern web technologies and scalable architectures
            that drive business success.
          </motion.p>

          {/* Experience badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-flex items-center px-6 sm:px-8 lg:px-8 py-3 sm:py-4 lg:py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold shadow-lg"
          >
            <span className="text-lg sm:text-xl lg:text-lg">13+ Years Experience</span>
            <span className="ml-2 text-2xl sm:text-3xl lg:text-2xl">🚀</span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center px-6 sm:px-8 lg:px-8 py-3 sm:py-4 lg:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-base sm:text-lg lg:text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="./SubhraSekharMukherjeeResume.pdf"
              download="SubhraSekharMukherjeeResume.pdf"
              className="group inline-flex items-center px-6 sm:px-8 lg:px-8 py-3 sm:py-4 lg:py-4 border-2 border-primary-500 text-primary-600 dark:text-primary-400 text-base sm:text-lg lg:text-lg rounded-full font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <FaDownload className="mr-2 group-hover:animate-bounce" />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 lg:pt-12"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 sm:p-4 lg:p-5 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 ${social.color}`}
                  title={social.label}
                >
                  <Icon size={24} className="sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
