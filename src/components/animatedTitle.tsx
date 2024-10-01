import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const letterVariants = {
  initial: { y: 400 },
  animate: { 
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1
    }
  }
};

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ 
  text, 
  className = '', 
  delay = 0,
  once = true
}) => {
  const wordVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.04
      }
    }
  };

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={wordVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once }}
    >
      {text.split(' ').map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block mr-[0.25em]"
          variants={wordVariants}
        >
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
};