"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "../../components/magneticButton";
import { ScaleButton } from "../../components/scaleButton";
import { SplitText } from "../../components/splitText";
import StickyCursor from "../../components/stickyCursor";

export default function Hero() {
  const interactiveElementRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white text-black p-4 z-[200] overflow-hidden">
      <div className="fixed inset-0 overflow-hidden">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-20 -space-y-3">
          <SplitText
            words="Franck Chapelon"
            startDelay={0}
            className="font-berkshire-swash z-10 tracking-tight flex items-center"
          >
            <span className="font-pinyon-script mt-2">est&nbsp;un </span>
          </SplitText>

          <SplitText
            words="Freelance"
            startDelay={0.1}
            className="font-pinyon-script z-10 pt-4 flex items-center"
          >
            <span className="font-serif mt-2 ">Designer</span>
            <span className="font-allura mt-2">&nbsp;&&nbsp;</span>
          </SplitText>

          <SplitText
            words="Développeur Nextjs"
            startDelay={0.2}
            className="font-serif z-10 tracking-tight"
          />
        </div>

        <motion.div
          ref={interactiveElementRef}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0 relative w-full max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <StickyCursor stickyElement={interactiveElementRef} />

          {/* Trait horizontal */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "75%", opacity: 1 }}
            transition={{
              width: {
                delay: 0.4,
                duration: 1.5,
                ease: "easeInOut",
              },
              opacity: {
                delay: 0.4,
                duration: 1,
              },
            }}
            className="absolute h-[0.2px] bg-black top-1/2 transform -translate-y-1/2 z-0"
          ></motion.div>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className=""
            >
              <MagneticButton>
                <ScaleButton
                  text="Voir mon travail"
                  hoverText="Découvrir mes projets"
                  href="#work"
                  bg="bg-white"
                  className="text-white bg-black hover:text-black flex z-10 whitespace-nowrap"
                />
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className=""
            >
              <MagneticButton>
                <ScaleButton
                  text="Me contacter"
                  hoverText="Discutons"
                  href="#contact"
                  bg="bg-black"
                  className="text-black bg-white hover:text-white z-10 whitespace-nowrap"
                />
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
      </div>
    </motion.div>
  );
}
