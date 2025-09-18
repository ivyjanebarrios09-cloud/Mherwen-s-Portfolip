'use client';

import { motion, type Variants } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  y?: number;
}

export function SlideUp({
  children,
  className,
  duration = 0.5,
  delay = 0,
  y = 20,
}: SlideUpProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
