"use client";

import Link from "next/link";
import { projects } from "@/data/data";
import Image from "next/image";
import Digits from "@/components/digits";
import { useMotionValue, motion, useSpring, MotionValue, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

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
        setHoveredProject(projects[hoveredIndex].id);
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
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-stone-200 py-16 z-[300]"
    >
      <h2 className="text-4xl font-bold mb-8">Projets Sélectionnés</h2>
      <div className="w-full z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            ref={(el) => { projectRefs.current[index] = el; }}
            className="group relative border-b border-black cursor-pointer bg-white py-8"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-stone-200"
              variants={{
                hover: { y: "100%" },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <div className="relative">
              <Link href={project.link}>
                <div className="flex items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mx-auto w-full">
                  <div className="relative flex items-center justify-between w-full">
                    <div className="leading-snug py-2 h-full flex items-center justify-start group-hover:translate-x-12 transition-transform duration-500">
                      <Digits id={project.id} />
                      <div className="">
                        <h3 className="text-3xl font-inter ml-20">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                    <div className="relative">
                      <ImageProjets
                        image={project.image}
                        name={project.name}
                        isHovered={hoveredProject === project.id}
                        mouseX={mouseXSpring}
                        mouseY={mouseYSpring}
                      />
                    </div>
                  </div>
                  <span className="text-5xl group-hover:-translate-x-6 transition-transform duration-500">→</span>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12">
        <Link
          href="/projets/tous"
          className="text-lg font-semibold hover:underline"
        >
          Voir tous les projets →
        </Link>
      </div>
    </section>
  );
}

const ImageProjets = ({ image, name, isHovered, mouseX, mouseY }: {
  image: string, 
  name: string, 
  isHovered: boolean,
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>
}) => {
  const transformedX = useTransform(mouseX, [-0.5, 0.5], ["-15%", "15%"]);
  const transformedY = useTransform(mouseY, [-0.5, 0.5], ["10%", "-10%"]);

  return (
    <motion.div 
      className="absolute right-0 w-[50vw] h-[43vh] rounded-full overflow-hidden z-50 cursor-move shadow-2xl"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ 
        y: isHovered ? 0 : 100,
        opacity: isHovered ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 20,
        delayChildren: 0.1
      }}
      style={{
        top: "50%",
        translateY: "-50%",
        cursor: "move",
        x: transformedX,
        y: transformedY,
      }}
    >
      <motion.div
        className="absolute w-[100%] h-[100%]"
        initial={{ scale: 1 }}
        animate={{ 
          scale: isHovered ? 1.3 : 1, 
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        style={{
          top: "50%",
          left: "50%",
          x: transformedX,
          y: transformedY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-contain " 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </motion.div>
  );
};