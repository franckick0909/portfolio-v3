"use client";

import { projectsData } from "@/data/data";
import ProjectDisplay, { Project } from "@/components/projectDisplay";
import Image from "next/image";
import PageTransition from "@/components/pageTransition";
import PageEnterTransition from "@/components/pageEnterTransition";
import { motion } from "framer-motion";

export default function ProjetDbMovies() {
    const currentProjectIndex = projectsData.findIndex((p) => p.id === "03");
    const projet = projectsData[currentProjectIndex] as unknown as Project;
  
    if (!projet) {
      return <div>Projet non trouvé</div>;
    }
  
    const prevProject = projectsData[currentProjectIndex - 1] as unknown as
      | Project
      | undefined;
    const nextProject = projectsData[currentProjectIndex + 1] as unknown as
      | Project
      | undefined;
  
    return (
      <PageTransition>
        <PageEnterTransition>
          <section className="bg-white min-h-screen h-full w-full">
            <motion.div
              className="w-full h-screen relative flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1, delay: 0.8 }}
            >
              <Image
                src={projet.coverImage}
                alt={`${projet.name} cover`}
                fill
                sizes="100vw"
                priority
                quality={100}
                className="object-cover"
              />
  
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {projet.name}
              </h1>
            </motion.div>
  
            <div className="overflow-hidden">
              <ProjectDisplay
                project={projet}
                prevProject={prevProject}
                nextProject={nextProject}
              />
            </div>
          </section>
        </PageEnterTransition>
      </PageTransition>
    );
  }
