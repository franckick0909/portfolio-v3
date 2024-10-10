import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ScrollRevealImagesProps {
  topImageSrc: string;
  bottomImageSrc: string;
  alt: string;
}

export const ScrollRevealImages: React.FC<ScrollRevealImagesProps> = ({ topImageSrc, bottomImageSrc, alt }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const clipPath = useTransform(scrollYProgress, [0, 1],["inset(0% 0% 0% 0%)", "inset(100% 0% 0% 0%)"]);

  return (
    <div ref={containerRef} className="relative w-full min-h-[80vh] h-full overflow-hidden shadow-xl">
      <motion.div
        className="absolute inset-0 z-10"
        style={{ clipPath }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image 
          src={topImageSrc} 
          alt={`${alt} (top)`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0">
        <Image 
          src={bottomImageSrc} 
          alt={`${alt} (bottom)`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};