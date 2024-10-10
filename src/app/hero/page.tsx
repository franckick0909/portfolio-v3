"use client";

import { motion } from "framer-motion";
import MagneticButton from "../../components/magneticButton";
import { ScaleButton } from "../../components/scaleButton";
import { AnimatedText } from "@/components/animatedText";
import CerclesAnimes from "@/components/cerclesAnimés";
import HeroTransition from "@/components/heroTransition";

export default function Hero() {

  
  return (
    <HeroTransition>
      <motion.section
        id="accueil"
        className="relative min-h-[105vh] w-full flex flex-col items-center justify-center bg-white text-black p-4 z-[200] overflow-hidden"
      >
        <CerclesAnimes />
        <div className="fixed inset-0 overflow-hidden z-10">
          <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="flex flex-col items-center justify-center mb-20 text-3xl md:text-5xl lg:text-6xl xl:text-7xl max-w-full">
              <div className="flex w-full items-center leading-normal">
                <AnimatedText
                  text="Franck Chapelon"
                  className="font-marcellus z-10 font-semibold flex items-center tracking-tight"
                  delay={0.2}
                />
                <AnimatedText
                  text="est&nbsp;un"
                  className="font-pinyon-script z-10 text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
                  delay={0.4}
                />
              </div>

              <div className="flex items-center leading-normal w-full"> 
                <AnimatedText
                  text="Freelance"
                  className="font-pinyon-script z-10 text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
                  delay={0.5}
                />

                <AnimatedText
                  text="Designer"
                  className="font-marcellus tracking-tight font-semibold"
                  delay={0.6}
                />
                <AnimatedText
                  text="&"
                  className="font-marcellus font-extralight leading-normal"
                  delay={0.7}
                />
              </div>

              <AnimatedText
                text="Développeur Nextjs"
                className="font-marcellus z-10 font-semibold leading-normal"
                delay={0.9}
              />
            </div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-0 relative w-full max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >

              {/* Trait horizontal */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "75%", opacity: 1 }}
                transition={{
                  width: {
                    delay: 1.3,
                    duration: 1.5,
                    ease: "easeInOut",
                  },
                  opacity: {
                    delay: 0.5,
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
                    delay: 1.4,
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
                      href="#projets"
                      bg="bg-white"
                      icon=""
                      target=""
                      rel=""
                      className="text-white bg-black hover:text-black flex z-10 whitespace-nowrap relative"
                      type="button"
                    />
                  </MagneticButton>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 1.4,
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
                      href="/contact"
                      bg="bg-black"
                      icon=""
                      target=""
                      rel=""
                      className="text-black bg-white hover:text-white z-10 whitespace-nowrap"
                      type="button"
                    />
                  </MagneticButton>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </HeroTransition>
  );
}
