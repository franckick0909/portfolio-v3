"use client";

import { AnimatedImage } from "@/components/animatedImage";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/magneticButton";
import { ScaleButton } from "@/components/scaleButton";
import { AnimatedTitle } from "@/components/animatedTitle";
import { FaEnvelope } from "react-icons/fa";

export default function A_Propos() {
  return (
    <section
      id="a_propos"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-20 bg-white overflow-hidden z-[201]"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-start justify-between gap-10 px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="relative flex flex-1 filter grayscale hover:grayscale-0 transition-all duration-300 shadow-lg">
          <div className="absolute top-0 left-0 w-full h-0 sm:h-full bg-black -rotate-1 shadow-lg z-[-1] opacity-50" />
          <div className="absolute top-0 left-0 w-full h-0 sm:h-full bg-stone-500 -rotate-2 shadow-lg z-[-1] opacity-50" />
          <AnimatedImage
            imageSrc="/lunette.webp"
            alt="À propos"
            maxHeight="50vh"
          />
          <Image
            src="/lunette.webp"
            alt="À propos"
            width={400}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover block md:hidden"
          />
        </div>

        <div className="flex flex-1 flex-col items-start">
          <div className="container mx-auto px-4 relative">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-marcellus text-start mb-4"
            >
              À Propos
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex items-center mb-16"
            >
              <h3 className="text-base md:text-lg lg:text-xl font-inter uppercase text-stone-700">
                Qui suis-je
              </h3>
              <div className="w-1/2 h-[1px] bg-black ml-4" />
            </motion.div>

            <div className="flex flex-col max-w-lg text-base md:text-lg text-stone-700">
              <p className="">
                Je suis un développeur web front-end, spécialisé dans la
                conception d&apos;identité et de sites Web.
              </p>
              <p className="">
                Si vous souhaitez en savoir un peu plus sur moi, cliquez sur le
                bouton ci-dessous.
              </p>
            </div>

            <div className="mt-8 relative inline-block">
              <MagneticButton>
                <ScaleButton
                  text="En savoir plus"
                  hoverText="Un peu plus"
                  href="/a_propos/plus"
                  bg="bg-white"
                  icon=""
                  target=""
                  rel=""
                  className="text-white bg-black hover:text-black flex z-10 whitespace-nowrap relative"
                  type="button"
                />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-48 text-start flex flex-col gap-8">
        <div className="container mx-auto px-4 relative">
          <AnimatedTitle
            text="Créons quelque chose"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-marcellus text-start mb-4"
            delay={0}
          />
          <div className="flex items-center mb-16">
            <AnimatedTitle
              text="ensemble"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-pinyon-script text-start mb-4 pt-2 text-stone-700"
              delay={0.1}
            />
            <div className="w-[5%] sm:w-[10%] md:w-[15%] h-[1px] bg-stone-700" />

            <MagneticButton>
              <ScaleButton
                text="Je suis prêt"
                hoverText="Contactez-moi"
                href="/contact"
                bg="bg-white"
                className="text-white bg-black hover:text-black inline-block z-10 whitespace-nowrap gap-2 md:gap-4 text-sm md:text-base"
                icon={<FaEnvelope />}
                target=""
                rel=""
                type="button"
              />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
