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
    <section ref={sectionRef} className="relative h-screen overflow-hidden ">
      <motion.div style={{ y }} className="absolute w-full h-[120%] z-[2000]">
        <Image
          src={imageSrc}
          alt={title || "Image du projet"}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30 z-0" />
      </motion.div>

      <div className="relative flex flex-col gap-4 text-white p-24 z-[2001]">
        <h2 className="text-4xl font-bold max-w-[25ch]">{title}</h2>
        <p className="text-sm uppercase">{tag}</p>

        <div className="relative flex flex-col gap-4 mt-4">
            <span className="text-sm uppercase underline underline-offset-4">Technologies utilisées :</span>
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
        <HightLightItem title="Client" content={clientName || "Nom du client"} />
        <div className="relative w-[2px] h-full bg-white" />
        <HightLightItem title="Date" content={projectDate || "Date du projet"} />
        <div className="relative w-[2px] h-full bg-white" />
        <HightLightItem title="Catégorie" content={category || "Catégorie du projet"} />
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
      <span className="text-sm uppercase underline underline-offset-4">
        {title}
      </span>
      <p className="text-xl font-bold">{content}</p>
    </div>
  );
};
