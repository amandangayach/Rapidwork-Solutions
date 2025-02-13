"use client"
import { motion, usePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface SpringTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const SpringText = ({ text, className = "", delay = 0 }: SpringTextProps) => {
  const [isClient, setIsClient] = useState(false);
  const [isPresent, safeToRemove] = usePresence();
  const letters = Array.from(text);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <span className={className}>
        {text}
      </span>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * 0.1 }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
    }
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      key={`spring-text-${text}`}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${text}-${index}`}
          variants={child}
          className="inline-block"
          style={{ willChange: 'transform' }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default SpringText;
