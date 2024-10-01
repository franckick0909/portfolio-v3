"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

interface AnimatedImageProps {
  imageSrc: string | StaticImageData;
  alt: string;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({ imageSrc, alt }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute w-full h-[120%]">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={100}
        />
      </motion.div>
    </div>
  );
};