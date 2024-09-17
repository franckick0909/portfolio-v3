"use client";

import { VelocityText } from "@/components/velocityText";
import {
  GiPolarStar,
  GiDeathStar,
  GiStarShuriken,
  GiNorthStarShuriken,
  GiFlatStar,
} from "react-icons/gi";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/animatedText";

export default function Branding() {
  const textVelocity: (string | JSX.Element)[] = [
    "Unique",
    <GiPolarStar key="polar-star" className="text-zinc-400 text-[2vw]" />,
    "Propre",
    <GiNorthStarShuriken
      key="north-star"
      className="text-zinc-400 text-[2vw]"
    />,
    "Design",
    <GiDeathStar
      key="death-star"
      className="text-end text-zinc-400 text-[2vw]"
    />,
    "Marketing",
    <GiStarShuriken key="star-shuriken" className="text-zinc-400 text-[2vw]" />,
    "Vitrine",
    <GiFlatStar key="flat-star" className="text-zinc-400 text-[2vw]" />,
    "Identité Personnalisée",
  ];

  return (
    <section className="relative bg-black text-white min-h-screen w-full py-16 z-[300]">
      <div className="relative mx-4 md:mx-12 lg:mx-24 xl:mx-48 flex flex-col items-center justify-center mb-20">
        <div className="flex flex-col items-center justify-center sm:leading-tight">
          <AnimatedText
            text="Spécialisé"
            className="text-[7vw] font-pinyon-script font-light"
          />
          <div className="flex items-center gap-2 md:gap-8">
            <AnimatedText
              text="Dans la"
              className="text-[7vw] font-pinyon-script font-light -mr-2"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                delay: 0.2,
                duration: 1.5,
                ease: [0.76, 0.1, 0.24, 1],
                viewport: { once: false, amount: 0.5 },
              }}
              className="relative h-[0.2px] w-[8vw] bg-zinc-600 origin-center"
            ></motion.div>
            <AnimatedText
              text="Création"
              className="text-[6vw] font-serif font-semibold"
              el="h2"
            />
          </div>
        </div>
        <div className="relative border-[0.1px] border-zinc-600 w-full sm:w-[72vw] h-[12vw] rounded-full overflow-hidden bg-transparent flex items-center justify-center">
          <VelocityText containerClassName="relative h-48 flex items-center">
            {textVelocity.map((item, index) => (
              <span
                key={index}
                className="relative text-[6vw] font-sawarabi-mincho font-light text-zinc-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                {item}
              </span>
            ))}
          </VelocityText>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center sm:leading-tight -space-y-4">
          <AnimatedText
            text="D'identités de marque"
            className="text-[6vw] font-serif font-semibold"
          />
          <div className="relative flex items-center justify-center gap-2">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                delay: 0.2,
                duration: 1.5,
                ease: [0.76, 0.1, 0.24, 1],
                viewport: { once: true, amount: 0.5 },
              }}
              className="relative h-[0.2px] w-[12vw] bg-zinc-600 origin-left"
            ></motion.div>
            <AnimatedText
              text="&"
              className="text-[6vw] font-serif font-light -mr-4 lg:pl-4"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                delay: 0.2,
                duration: 1.5,
                ease: [0.76, 0.1, 0.24, 1],
                viewport: { once: true, amount: 0.5 },
              }}
              className="relative h-[0.2px] w-[12vw] bg-zinc-600 origin-right"
            ></motion.div>
          </div>
          <AnimatedText
            text="Sites Web"
            className="text-[6vw] font-pinyon-script font-light"
          />
          <div className="relative overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                damping: 20,
                viewport: { once: true, amount: 0.5 },
              }}
              className="relative w-full h-full py-10"
            >
              <svg viewBox="0 0 180 180" className="w-[8vw] rotate-180 mx-auto">
                <path
                  d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z"
                  fill="white"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-20">
            <h2 className="text-[4vw] font-inter font-light">
              Vous avez la vision,
            </h2>
            <h2 className="text-[4vw] font-inter font-light">
              je vous aide à vous démarquer.
            </h2>

            <div className="mt-12 sm:mt-20 max-w-[50vw] w-full grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 text-base md:text-lg">
              <div className="h-full sm:max-w-[320px] col-span-1">
                <p>
                  Je découvre ce qui faisait déjà partie de votre entreprise. Je
                  prends en compte vos objectifs, vos passions et tous les
                  petits détails qui vous distinguent des autres, et je
                </p>
              </div>
              <div className="h-full sm:max-w-[320px] col-span-1">
                <p>
                  leur donne une voix et une présence que les gens ne peuvent
                  ignorer. Vous savez déjà que ce que vous faites change la
                  donne, mais je peux aider les autres à le
                </p>
              </div>
              <div className="h-full sm:max-w-[320px] col-span-1">
                <p>
                  comprendre. Alors, commençons, j&apos;aimerais entendre ce que
                  vous créez et en faire partie.
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
