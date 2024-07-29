'use client'

import { motion, Variants } from 'framer-motion';

type FadeInWhenVisibleProps = {
  children: React.ReactNode;
  delay?: number; // Add the delay prop with an optional type
  varients?: Variants 
};

export default function FadeInWhenVisible({ children, delay = 0, varients={
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: { opacity: 0, scale: 1, y: '-100%' },
} }: FadeInWhenVisibleProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
            variants={varients}
        >
            {children}
        </motion.div>
    );
}
