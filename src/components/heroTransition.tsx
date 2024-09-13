"use client"

import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const lineVariants: Variants = {
  initial: { scaleX: 0, x: '0%' },
  animate: {
    scaleX: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
  exit: {
    x: '100%',
    transition: { duration: 1, ease: "easeInOut" }
  }
};

const numberVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }
};

export default function HeroTransition({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30); // Ajustez cette valeur pour modifier la vitesse de l'animation des chiffres

    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1000);
    const timer3 = setTimeout(() => setStage(3), 1500);
    const timer4 = setTimeout(() => onLoadingComplete(), 3000); // Ajustez ce délai si nécessaire

    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[9999]">
      <div className="relative">
      <AnimatePresence mode="wait">
        {stage < 2 && (
          <motion.div
            key="blackBackground"
            className="fixed inset-0 bg-black flex items-start justify-end pr-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              key={progress}
              variants={numberVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="text-white text-[18vw] font-bold font-inter"
            >
              {progress}%
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        {stage < 1 && (
          <motion.div key="hero" className="fixed inset-0 flex items-center justify-center">
            <div className="relative w-full">
              <motion.div
                key="redLine"
                className="absolute left-0 right-0 h-[1px] bg-white"
                style={{
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
                variants={lineVariants}
                initial="initial"
                animate="animate"
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3, delay: 0.2 }
                }}
              />
              <div className="grid items-start gap-2 font-berkshire-swash text-white text-6xl font-extralight text-center">
                <h3 className="">Franck</h3>
                <div className="flex items-center justify-center italic ml-28">
                    <span className='w-10 h-[1px] bg-white mr-2'></span>
                    <h3 className="">Chapelon</h3>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {stage >= 2 && (
          <motion.div key="splitBackground">
            <motion.div
              key="topSplit"
              className="fixed inset-0 bg-black"
              initial={{ clipPath: 'inset(0 0 50% 0)' }}
              animate={{ clipPath: 'inset(0 0 100% 0)' }}
              exit={{ clipPath: 'inset(0 0 50% 0)' }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              key="bottomSplit"
              className="fixed inset-0 bg-black"
              initial={{ clipPath: 'inset(50% 0 0 0)' }}
              animate={{ clipPath: 'inset(100% 0 0 0)' }}
              exit={{ clipPath: 'inset(50% 0 0 0)' }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}