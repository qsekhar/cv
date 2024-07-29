'use client'

import { motion } from 'framer-motion';

type FadeInWhenVisibleProps = {
  children: React.ReactNode;
  delay?: number; // Add the delay prop with an optional type
};

export default function FadeInWhenVisible({ children, delay = 0 }: FadeInWhenVisibleProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 2 },
            }}
        >
            {children}
        </motion.div>
    );
}
