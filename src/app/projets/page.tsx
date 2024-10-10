"use client";

import Link from "next/link";
import { projectsData } from "@/data/data";
import Image from "next/image";
import Digits from "@/components/digits";
import {
  useMotionValue,
  motion,
  useSpring,
  MotionValue,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";
import Arrow from "@/components/arrow";
import { AnimatedTitle } from "@/components/animatedTitle";

export default function Projets() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      x.set(mouseX / rect.width - 0.5);
      y.set(mouseY / rect.height - 0.5);

      // Vérifier quel projet est actuellement survolé
      const hoveredIndex = projectRefs.current.findIndex((projectRef) => {
        if (projectRef) {
          const projectRect = projectRef.getBoundingClientRect();
          return (
            mouseY >= projectRect.top - rect.top &&
            mouseY <= projectRect.bottom - rect.top
          );
        }
        return false;
      });

      if (hoveredIndex !== -1) {
        setHoveredProject(projectsData[hoveredIndex].id);
      } else {
        setHoveredProject(null);
      }
    }
  };


  return (
    <section
      id="projets"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredProject(null)}
      className="relative flex flex-col items-center justify-center min-h-[100vh] w-full bg-stone-100 py-20 z-[202]"
    >
      <div className="px-4 relative flex flex-col items-start pb-20">
        <AnimatedTitle
          text="Projets Sélectionnés"
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-marcellus mb-4 leading-normal"
          delay={0.2}
        />

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex items-center"
        >
          <div className="w-16 h-[1px] bg-black mr-4" />
          <h3 className="text-base md:text-lg lg:text-xl font-inter uppercase text-stone-700">
            Mes derniers projets
          </h3>
        </motion.div>
      </div>

      <div className="w-full h-full">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            className="group relative cursor-pointer bg-white border-b-[1px] py-0 sm:py-2 md:py-4 "
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-stone-100"
              variants={{
                hover: { y: "100%" },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1px] bg-stone-500 "
              initial={{ scaleX: 0, transformOrigin: "right" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 50,
                delayChildren: 0.1,
                delay: 0.2,
                mass: 0.5,
              }}
            />
            <div className="relative">
              <Link href={project.link}>
                <div className="flex items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mx-auto w-full z-10">
                  <div className="relative flex items-center justify-between w-full z-10">
                    <div className="leading-snug py-2 h-full flex items-center justify-start group-hover:translate-x-12 transition-transform duration-500">
                      <Digits id={project.id} />
                      <div className="">
                        <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-inter ml-20 z-50">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                    <div className="absolute right-0 hidden md:block z-[400] overflow-visible">
                      <ImageProjets
                        image={project.coverImage}
                        name={project.name}
                        isHovered={hoveredProject === project.id}
                        mouseX={mouseXSpring}
                        mouseY={mouseYSpring}
                      />
                    </div>
                  </div>
                  <span className="relative group-hover:-translate-x-8  sm:group-hover:-translate-x-12 transition-transform duration-500">
                    <Arrow
                      width={100}
                      height={100}
                      fill="black"
                      stroke="none"
                      className="rotate-90 w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
                    />
                  </span>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full h-full overflow-hidden z-[202] py-10 mt-24 inline-block text-center">

      </div>
    </section>
  );
}

const ImageProjets = ({
  image,
  name,
  isHovered,
  mouseX,
}: {
  image: string;
  name: string;
  isHovered: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) => {
  const transformedX = useTransform(mouseX, [-0.5, 0.5], ["-25%", "25%"]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        y: isHovered ? 0 : 100,
      }}
      transition={{
        opacity: { type: "spring", stiffness: 80, damping: 20 },
        y: { type: "spring", stiffness: 100, damping: 20 },
      }}
      className="relative lg:w-[30vw] lg:h-[30vh] rounded-full overflow-hidden z-[400]"
      style={{
        x: transformedX,
        translateX: "-50%",
      }}
    >
      <motion.div
        className="absolute w-full h-full rounded-full overflow-hidden z-50"
        style={{
          top: "50%",
          left: "50%",
          x: transformedX,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <Image
          src={image}
          alt={name}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </motion.div>
  );
};


{/* 




                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>


 */}