"use client";
 
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
 
// import { cn } from "@/lib/utils";
 
interface ContentItem {
  type: 'text' | 'image';
  content: string;
}

interface VelocityScrollProps {
  content: ContentItem[];
  default_velocity?: number;
  className?: string;
}

interface ParallaxProps {
  content: ContentItem[];
  baseVelocity: number;
  className?: string;
}
 
export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
 
export function VelocityScroll({
  content,
  default_velocity = 5,
  className,
}: VelocityScrollProps) {
  function ParallaxContent({
    content,
    baseVelocity = 100,
    className,
  }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
 
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });
 
    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
 
    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && textRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const textWidth = textRef.current.offsetWidth;
          const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
          setRepetitions(newRepetitions);
        }
      };
 
      calculateRepetitions();
 
      window.addEventListener("resize", calculateRepetitions);
      return () => window.removeEventListener("resize", calculateRepetitions);
    }, [content]);
 
    const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
 
    const directionFactor = React.useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
 
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
 
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
 
      baseX.set(baseX.get() + moveBy);
    });
 
    return (
      <div
        className="w-full overflow-hidden whitespace-nowrap"
        ref={containerRef}
      >
        <motion.div className={`inline-block ${className}`} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <span key={i} ref={i === 0 ? textRef : null}>
              {content.map((item, index) => (
                <React.Fragment key={index}>
                  {item.type === 'text' ? (
                    item.content + " "
                  ) : (
                      <Image
                        src={item.content}
                      alt="Inline image"
                      width={300}
                      height={200}
                      className="inline-block mx-2 align-middle object-cover object-center w-96 h-48 filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-95 rounded-full"
                    />
                  )}
                </React.Fragment>
              ))}
            </span>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative w-full">
      <ParallaxContent baseVelocity={default_velocity} className={className} content={content} />
      <ParallaxContent baseVelocity={-default_velocity} className={className} content={content} />
    </section>
  );
}