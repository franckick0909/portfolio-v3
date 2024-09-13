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

import React from "react";

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
    <div className="relative bg-black text-white min-h-[200vh] w-full flex flex-col items-center py-20 z-[300]">
      <h1 className="text-[8vw] font-pinyon-script font-light">Spécialisé</h1>
      <div className="flex items-center gap-14 justify-center">
        <h2 className="text-[8vw] font-pinyon-script font-light">Dans la</h2>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 10,
            viewport: { once: true, amount: 0.5 },
          }}
          className="h-[0.2px] w-[8vw] bg-zinc-600"
        ></motion.div>
        <h2 className="text-[7vw] font-berkshire-swash font-light">Création</h2>
      </div>
      <div className="border-[0.1px] border-zinc-600 w-[72vw] h-48 rounded-full overflow-hidden bg-transparent flex items-center justify-center">
        <VelocityText containerClassName="h-48 flex items-center">
          {textVelocity.map((item, index) => (
            <span
              key={index}
              className="text-[6vw] font-sawarabi-mincho font-light text-zinc-600 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              {item}
            </span>
          ))}
        </VelocityText>
      </div>

      <h2 className="text-[7vw] font-berkshire-swash font-light">
        D&apos;identités de marque
      </h2>
      <div className="flex items-center gap-10 justify-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 10,
            viewport: { once: true, amount: 0.5 },
          }}
          className="h-[0.2px] w-[8vw] bg-zinc-600"
        ></motion.div>
        <h2 className="text-[8vw] font-serif font-light">&</h2>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 10,
            viewport: { once: true, amount: 0.5 },
          }}
          className="h-[0.2px] w-[8vw] bg-zinc-600"
        ></motion.div>
      </div>
      <h2 className="text-[8vw] font-pinyon-script font-light">Sites Web</h2>
    </div>
  );
}
