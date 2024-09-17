import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  words: string;
  className?: string;
  startDelay?: number;
  children?: React.ReactNode;
}

export function SplitText({ words, className, startDelay = 0, children }: SplitTextProps) {
  const allWords = [...words.split(' '), ...(children ? [children] : [])];

  return (
    <div className={className}>
      {allWords.map((word, index) => (
        <motion.div key={index} style={{ overflow: 'hidden', display: 'inline-block', paddingRight: '0.25em', lineHeight: '1.25' }}>
          <motion.span    
            initial={{ y: '100%', opacity: 0.8, skewY: 20, perspective: 1000, scale: 0.8 }}
            whileInView={{ y: 0, opacity: 1, skewY: 0, perspective: 1000, scale: 1 }}
            transition={{ 
              duration: 0.8,
              delay: startDelay + index * 0.1,
              ease: [0.33, 1, 0.68, 1],
              viewport: { once: false, amount: 0.5 },
            }}
            style={{ display: typeof word === 'string' ? 'inline-block' : 'block' }}
          >
            {word}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}
