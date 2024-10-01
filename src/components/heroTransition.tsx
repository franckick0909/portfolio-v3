"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroTransition({ children }: { children: React.ReactNode }) {
  const [isEntering, setIsEntering] = useState(true);
  const [showLine, setShowLine] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsEntering(false), 1000);
    const timer2 = setTimeout(() => setShowLine(false), 1200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const splitVariants = {
    initial: { clipPath: "inset(0 0 50% 0)" },
    animate: { clipPath: "inset(0 0 100% 0)" },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence>
        {showLine && (
          <motion.div
            aria-hidden="true"
            key="horizontalLine"
            className="absolute left-0 top-1/2 w-full h-[2px] bg-white origin-center z-[100]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
          />
        )}
      </AnimatePresence>
      <motion.div
        variants={splitVariants}
        initial="initial"
        animate="animate"
        key="topSplit"
        className="absolute inset-0 z-50 bg-black"
        transition={{ 
          clipPath: { delay: 0.8, type: "spring", stiffness: 100, damping: 30 },
        }}
      />
      <motion.div
        variants={splitVariants}
        initial={{ clipPath: "inset(50% 0 0 0)" }}
        animate={{ clipPath: "inset(100% 0 0 0)" }}
        key="bottomSplit"
        className="absolute inset-0 z-50 bg-black"
        transition={{ 
          clipPath: { delay: 0.8, type: "spring", stiffness: 100, damping: 30 },
        }}
      />
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isEntering ? 0 : 1, y: isEntering ? 20 : 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: isEntering ? 0 : 0.2
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}