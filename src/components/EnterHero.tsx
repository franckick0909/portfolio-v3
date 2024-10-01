"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function EnterHero({ children }: { children: React.ReactNode }) {
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

  const splitTransition = {
    delay: 0.7,
    type: "spring",
    stiffness: 120,
    damping: 30,
    mass: 0.2,
    restDelta: 0.0001
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {showLine && (
          <motion.div
            aria-hidden="true"
            key="horizontalLine"
            className="fixed left-0 top-1/2 w-full h-[2px] bg-white origin-center z-[100]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 120, 
              damping: 20, 
              mass: 0.3, 
              delay: 0.1,
              restDelta: 0.001,
              exit: { duration: 0.1 }
            }}
          />
        )}
      </AnimatePresence>
      <motion.div
        key="topSplit"
        className="fixed inset-0 z-50 bg-black"
        initial={{ clipPath: "inset(0 0 50% 0)" }}
        animate={{ clipPath: "inset(0 0 100% 0)" }}
        transition={splitTransition}
      />
      <motion.div
        key="bottomSplit"
        className="fixed inset-0 z-50 bg-black"
        initial={{ clipPath: "inset(50% 0 0 0)" }}
        animate={{ clipPath: "inset(100% 0 0 0)" }}
        transition={splitTransition}
      />
      <motion.div
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEntering ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}