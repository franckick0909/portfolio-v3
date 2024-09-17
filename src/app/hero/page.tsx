"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "../../components/magneticButton";
import { ScaleButton } from "../../components/scaleButton";
import StickyCursor from "../../components/stickyCursor";
import { AnimatedText } from "@/components/animatedText";

export default function Hero() {
  const interactiveElementRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white text-black p-4 z-[200] overflow-hidden">
      <div className="fixed inset-0 overflow-hidden">

        <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16 xl:px-32">
          <div className="flex flex-col items-center justify-center mb-20 leading-tight -space-y-4 text-3xl md:text-5xl lg:text-6xl xl:text-7xl ">
            <div className="flex items-center">
              <AnimatedText
                text="Franck Chapelon"
                className="font-berkshire-swash z-10 tracking-tight flex items-center"
              />
              <AnimatedText
                text="est&nbsp;un"
                className="font-pinyon-script z-10 leading-[0.9] "
              />
            </div>

            <div className="flex items-center leading-normal">
              <AnimatedText text="Freelance" className="font-pinyon-script leading-[0.9]" />

              <AnimatedText
                text="Designer"
                className="font-serif tracking-tight"
              />
              <AnimatedText text="&" className="font-allura leading-[0.8]" />
            </div>


            <AnimatedText
              text="Développeur Nextjs"
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
              className="absolute h-[0.2px] bg-black top-1/2 transform -translate-y-1/2 z-0 hidden sm:block"
            ></motion.div>

            {/* Boutons */}
            <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center w-full relative text-sm md:text-base">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                className="relative"
              >
                <MagneticButton>
                  <ScaleButton
                    text="Voir mon travail"
                    hoverText="Découvrir mes projets"
                    href="#work"
                    bg="bg-white"
                    className="text-white bg-black hover:text-black flex z-10 whitespace-nowrap relative"
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
                className="relative"
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
