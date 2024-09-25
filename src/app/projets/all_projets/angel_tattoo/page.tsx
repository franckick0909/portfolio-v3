"use client";

import { projectsData } from '@/data/data';
import ProjectDisplay, { Project } from '@/components/projectDisplay';
import Image from 'next/image';
import PageTransition from '@/components/pageTransition';
import PageEnterTransition from '@/components/pageEnterTransition';
import { motion } from "framer-motion";

export default function AngelTattoo() {

    const currentProjectIndex = projectsData.findIndex(p => p.id === "01");
    const projet = projectsData[currentProjectIndex] as Project;
  
    if (!projet) {
      return <div>Projet non trouvé</div>;
    }
  
    const prevProject = projectsData[currentProjectIndex - 1] as Project | undefined;
    const nextProject = projectsData[currentProjectIndex + 1] as Project | undefined;
  
    return (
      <PageTransition>
      <PageEnterTransition>
        <section className='bg-white min-h-screen w-full'>
          <motion.div
            className="w-full h-[calc(100vh+50px)] relative flex"
            initial={{ y: 0 }}
            animate={{ y: -50 }}
            transition={{ ease: "easeOut", duration: 1 }}
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

            <h1 className='text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{projet.name}</h1>
          </motion.div>

          <div className="overflow-hidden">
            <ProjectDisplay project={projet} prevProject={prevProject} nextProject={nextProject} />
          </div>
        </section>
      </PageEnterTransition>
    </PageTransition>
  );
  };






{/* 




            <div className="relative w-full h-[50vh] mb-8">
                <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill
                    sizes="100vw"
                    priority
                    quality={100}
                    className="object-cover"
                />
            </div>



 */}