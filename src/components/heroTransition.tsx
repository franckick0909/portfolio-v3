"use client"

import { motion, Variants, AnimatePresence, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo from './logo';
import LoaderSpiral from './loaderSpiral';
const numberVariants: Variants = {
  initial: { y: 0, opacity: 1 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0.5, transition: { duration: 0.5, ease: "easeInOut" } }
};

export default function HeroTransition({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [stage, setStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const lineControls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);

    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1000);
    const timer3 = setTimeout(() => setStage(3), 1500);
    const timer4 = setTimeout(() => onLoadingComplete(), 3000);

    // Animer la ligne en fonction du progrès
    lineControls.start({ scaleX: progress / 100, transition: { type: "spring", stiffness: 100, damping: 10, mass: 0.5 } });

    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onLoadingComplete, progress, lineControls]);

  return (
    <div className="fixed inset-0 z-[9999]">
      <div className="relative">
        <AnimatePresence mode="wait">
          {stage < 2 && (
            <motion.div
              key="blackBackground"
              className="fixed inset-0 bg-black flex items-start justify-end pr-20"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden absolute top-10 right-20">
                <motion.div
                  key={progress}
                  variants={numberVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ 
                    type: "spring",
                    stiffness: 500,
                    damping: 10,
                    mass: 0.5
                  }}
                  className="text-white text-[5vw] font-bold font-sawarabi-mincho"
                >
                  {progress}%
                </motion.div>
                <div className="flex items-center gap-2">
                  <p className="text-zinc-500 text-base font-inter">Chargement en cours...</p>
                  <LoaderSpiral />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <AnimatePresence mode="wait">
          {stage < 1 && (
            <motion.div key="hero" className="fixed inset-0 flex items-center justify-center">
              <div className="relative w-full">
                <motion.div
                  key="redLine"
                  className="absolute left-0 right-0 h-[1px] bg-white origin-center"
                  style={{
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={lineControls}
                />
                <div className="grid place-items-center items-start gap-4 md:gap-6 lg:gap-8 xl:gap-10 text-white text-6xl font-extralight text-center">

                  <Logo className="text-[7vw] gap-4 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-28" />
{/*                  <h3 className="font-berkshire-swash text-[10vw]">Franck</h3>
                  <div className="flex items-center justify-center italic ml-36">
                    <span className='w-10 h-[0.2px] bg-zinc-400 mr-2'></span>
                    <h3 className="font-inter text-[10vw]">Chapelon</h3>
                  </div> */}
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