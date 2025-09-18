'use client';

import { motion, type Variants } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
}

export function FadeIn({
  children,
  className,
  duration = 0.5,
  delay = 0,
  stagger = 0,
}: FadeInProps) {
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration,
        delay,
        when: 'beforeChildren',
        staggerChildren: stagger,
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
