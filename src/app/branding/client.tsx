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
    "Identité",
  ];

  return (
    <div className="relative bg-black text-white min-h-[200vh] w-full flex flex-col items-center py-20 z-[300] overflow-hidden">
      <h1 className="text-[8vw] font-pinyon-script font-light">Spécialisé</h1>
      <div className="relative flex items-center gap-14 justify-center">
        <h2 className="text-[8vw] font-pinyon-script font-light">Dans la</h2>
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
        <h2 className="text-[7vw] font-berkshire-swash font-light">Création</h2>
      </div>
      <div className="relative border-[0.1px] border-zinc-600 w-[72vw] h-48 rounded-full overflow-hidden bg-transparent flex items-center justify-center">
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

      <h2 className="text-[8vw] font-pinyon-script font-light">
        D&apos;identités de marque
      </h2>
      <div className="relative flex items-center gap-10 justify-center">
      <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.5,
            ease: [0.76, 0.1, 0.24, 1],
            viewport: { once: true, amount: 0.5 },
          }}
          className="relative h-[0.2px] w-[8vw] bg-zinc-600 origin-left"
        ></motion.div>
        <h2 className="text-[8vw] font-serif font-light">&</h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.5,
            ease: [0.76, 0.1, 0.24, 1],
            viewport: { once: true, amount: 0.5 },
          }}
          className="relative h-[0.2px] w-[8vw] bg-zinc-600 origin-right"
        ></motion.div>
      </div>
      <h2 className="text-[8vw] font-pinyon-script font-light">Sites Web</h2>
      <div className="relative w-full h-[200px] mt-10 overflow-hidden">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100, damping: 20, viewport: { once: true, amount: 0.5 } }}
          className="relative w-full h-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" className="w-full h-full rotate-180">
            <path
              d="M90.54,0H89.46C71.61,23.72,49,47,27.43,65.3l.87,1.08c22-14.14,39.61-31.56,60.72-52C88.8,69,86.41,139.09,84.23,180H95.77c-2.18-40.92-4.79-111-5-165.64,20.89,19.81,38.75,37.66,60.94,52l.87-1.08C130.81,47.67,108.39,23.72,90.54,0Z"
              fill="white"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}