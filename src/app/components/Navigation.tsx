"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHome, FaUser, FaBriefcase, FaClock, FaBlog, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "Home", icon: FaHome },
  { href: "/about", label: "About", icon: FaUser },
  { href: "/projects", label: "Projects", icon: FaBriefcase },
  { href: "/timeline", label: "Timeline", icon: FaClock },
  { href: "/blog", label: "Blog", icon: FaBlog },
  { href: "/contact", label: "Contact", icon: FaEnvelope },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-darkbackground/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                SSM
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                        isActive
                          ? "text-primary-600 dark:text-primary-400"
                          : "text-lighttext dark:text-darktext hover:text-primary-600 dark:hover:text-primary-400"
                      }`}
                    >
                      <Icon size={16} />
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-lg"
                          style={{ zIndex: -1 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Theme Toggle & Mobile menu button */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-lighttext dark:text-darktext hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 dark:bg-darkbackground/95 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center gap-3 ${
                        isActive
                          ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                          : "text-lighttext dark:text-darktext hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                      }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* Spacer to prevent content from being hidden behind fixed nav */}
      <div className="h-16" />
    </>
  );
}
