"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const Section: React.FC<{
  imageSrc: string | StaticImageData;
  tag: string | undefined;
  title: string | undefined;
  clientName: string | undefined;
  projectDate: string | undefined;
  category: string | undefined;
  stacks: string[] | undefined;
}> = ({ imageSrc, tag, title, clientName, projectDate, category, stacks }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden z-10">
      <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
       style={{ y }} className="absolute w-full h-[120%]">
        <Image
          src={imageSrc}
          alt={title || "Image du projet"}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={75}
        />
        <div className="absolute inset-0 bg-black/30 z-0" />
      </motion.div>

      <div className="relative flex flex-col gap-4 text-white p-24 z-10">
        <h2 className="text-4xl font-bold max-w-[25ch]">{title}</h2>
        <p className="text-sm uppercase">{tag}</p>

        <div className="relative flex flex-col gap-4 mt-4">
          <div className="inline-block w-fit">
            <h3
              className="text-sm font-extralight text-stone-100 hover:text-white font-inter uppercase tracking-wide relative
                            before:content-[''] before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 
                            before:bg-white before:origin-right before:scale-x-0 hover:before:origin-left hover:before:scale-x-100
                            before:transition-transform before:duration-500 before:ease-in-out"
            >
              Technologies utilisées :
            </h3>
          </div>
          <ul className="list-disc list-inside grid gap-1 mt-4">
            {stacks?.map((tech: string, techIndex: number) => (
              <li key={techIndex}>
                <p className="text-sm inline-block bg-black text-white rounded-full px-3 py-[2px]">
                  {tech}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 p-24 flex justify-between w-4/5 gap-[4px] max-w-[700px] text-white z-[2001]">
        <HightLightItem
          title="Client"
          content={clientName || "Nom du client"}
        />
        <div className="relative w-[2px] h-full bg-white" />
        <HightLightItem
          title="Date"
          content={projectDate || "Date du projet"}
        />
        <div className="relative w-[2px] h-full bg-white" />
        <HightLightItem
          title="Catégorie"
          content={category || "Catégorie du projet"}
        />
      </div>
    </section>
  );
};

const HightLightItem: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <div className="flex flex-col items-start gap-4 border-l-2 border-white pl-4">
      <span
        className="text-sm font-extralight text-stone-100 hover:text-white font-inter uppercase tracking-wide relative
                            before:content-[''] before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 
                            before:bg-white before:origin-right before:scale-x-0 hover:before:origin-left hover:before:scale-x-100
                            before:transition-transform before:duration-500 before:ease-in-out"
      >
        {title}
      </span>
      <p className="text-xl font-extralight font-inter">{content}</p>
    </div>
  );
};
