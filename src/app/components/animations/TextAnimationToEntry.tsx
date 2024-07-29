'use client'
import { motion } from 'framer-motion';

type TextAnimationToEntryProps = {
  children: React.ReactNode,
  delayOffset?: number
}

export default function TextAnimationToEntry({ children, delayOffset = 0 }: TextAnimationToEntryProps) {
    const textArr = children?.toString().split('');
    return (
        <>
            {textArr && textArr.map((char, index) => (
                <motion.span
                    className="inline-block"
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.1, delay: index * 0.1 + delayOffset, ease: "easeOut"}}
                    variants={{
                        visible: { opacity: 1, y: 0, scaleX: 1 },
                        hidden: { opacity: 0,  y: '100%', scaleX: 0 },
                    }}
                >
                    {char ?? '&nbsp; '}
                </motion.span>
            ))}
        </>
    );
}
