"use client";

import React, { useRef, useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

interface AnimatedImageProps {
  imageSrc: string | StaticImageData;
  alt: string;
  maxHeight?: string;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({ imageSrc, alt, maxHeight = "100vh" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageAspectRatio, setImageAspectRatio] = useState(1);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      setImageAspectRatio(img.width / img.height);
    };
    img.src = typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  return (
    <motion.div 
      ref={containerRef} 
      className="relative w-full overflow-hidden"
      style={{ 
        height: `min(${maxHeight}, ${100 / imageAspectRatio}vw)`,
        maxHeight: maxHeight 
      }}
    >
      <motion.div 
        style={{ y }} 
        className="absolute w-full h-[120%]"
      >
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
    </motion.div>
  );
};


{/* <AnimatedImage imageSrc="/image.jpg" alt="Description de l'image" maxHeight="80vh taille comme je veux" /> */}