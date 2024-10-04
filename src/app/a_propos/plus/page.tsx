"use client";

import { motion, useSpring, useScroll } from "framer-motion";
import MagneticButton from "@/components/magneticButton";
import { ScaleButton } from "@/components/scaleButton";
import { FaEnvelope } from "react-icons/fa6";
import PageTransition from "@/components/pageTransition";
import PageEnterTransition from "@/components/pageEnterTransition";
import { dataAbout } from "@/data/data";
import { ScrollRevealImages } from "@/components/scrollRevealImages";
import { AnimatedTitle } from "@/components/animatedTitle";

export default function Plus() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <PageTransition>
      <PageEnterTransition>
        <section
          id="plus"
          className="relative w-full flex flex-col items-center justify-start pt-32 pb-20 bg-white overflow-visible z-[201]"
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
            <div className="relative flex flex-col md:flex-row items-start gap-12 md:gap-24 min-h-screen">
              <div className="flex flex-col w-full md:w-1/3">
                <motion.h2
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-marcellus mb-4"
                >
                  F.
                </motion.h2>
                <h2 className="text-lg md:text-xl mb-12 text-gray-600 uppercase">
                  Développeur web front-end basé à Savignac de Nontron
                </h2>

                <div className="relative flex flex-col gap-24">
                  {/* <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200" /> */}
                  <motion.div
                    style={{ scaleY }}
                    className="absolute left-0 top-0 bottom-0 w-1 bg-black origin-top z-10"
                  />
                  {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-stone-300" />
                      <div className="pl-8">
                        <h3 className="text-2xl font-bold mb-4">
                          {
                            dataAbout[
                              `subtitle${index}` as keyof typeof dataAbout
                            ]
                          }
                        </h3>
                        <p>
                          {
                            dataAbout[
                              `description${index}` as keyof typeof dataAbout
                            ]
                          }
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-1/2 md:sticky my-4 md:top-0 md:my-48 h-full">
                <div className="h-full relative">
                  <div className=" h-full">
                    <ScrollRevealImages
                      topImageSrc="/snap1.jpg"
                      bottomImageSrc="/snap2.jpg"
                      alt="À propos"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative py-20 text-start flex flex-col gap-8">
              <div className="container mx-auto px-4 relative">
                <AnimatedTitle
                  text="Créons quelque chose"
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-marcellus text-start mb-4"
                  delay={0.1}
                />
                <div className="flex items-center mb-16">
                    <AnimatedTitle
                        text="ensemble"
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-pinyon-script text-start mb-4 pt-2 text-stone-700"
                        delay={0.2}
                    />
                  <div className="w-[16%] h-[1px] bg-stone-700" />

                <MagneticButton>
                  <ScaleButton
                    text="Je suis prêt"
                    hoverText="Contactez-moi"
                    href="/contact"
                    bg="bg-white"
                    className="text-white bg-black hover:text-black inline-block z-10 whitespace-nowrap gap-4"
                    icon={<FaEnvelope />}
                    target=""
                    rel=""
                  />
                </MagneticButton>

                </div>

              </div>



            </div>
          </div>
        </section>
      </PageEnterTransition>
    </PageTransition>
  );
}
