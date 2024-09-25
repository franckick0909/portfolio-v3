import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ScaleButtonProps {
  text: string;
  hoverText: string;
  href: string;
  bg: string;
  className: string;
  icon: React.ReactNode;
  target: string;
  rel: string;
}

export const ScaleButton: React.FC<ScaleButtonProps> = ({ text, hoverText, href, bg, className, icon, target, rel }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel} 
      className={`shadow-md relative flex items-center justify-center px-10 py-2 overflow-hidden rounded-full border border-black ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scaleX: 1.05, transition: { type: "spring", stiffness: 200, damping: 10, bounce: 1 } }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`absolute inset-0 rounded-full ${bg}`}
        initial={{ clipPath: 'ellipse(100% 0% at 50% 100%)' }}
        animate={{ clipPath: isHovered ? 'ellipse(150% 150% at 50% 100%)' : 'ellipse(0% 0% at 50% 100%)' }}
        transition={{ type: "spring", stiffness: 100, damping: 20, restDelta: 0.001, mass: 0.5 }}
        style={{ originY: '100%' }}
      />
      <motion.span
        className="relative z-10 block"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: isHovered ? -40 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {text}
      </motion.span>
      {icon}
      <motion.span
        className="absolute inset-0 z-10 flex items-center justify-center"
        initial={{ y: 40 }}
        animate={{ y: isHovered ? 0 : 40 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {hoverText}
      </motion.span>
    </motion.a>
  );
};