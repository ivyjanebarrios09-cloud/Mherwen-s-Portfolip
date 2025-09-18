'use client';

import { motion, type Variants } from 'framer-motion';

interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export function ScaleIn({
  children,
  className,
  duration = 0.5,
  delay = 0,
}: ScaleInProps) {
  const variants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
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
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
