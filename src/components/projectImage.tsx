"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/data/data";

interface ProjectImageProps {
  projectIndex: number;
  imageIndex: number;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ projectIndex, imageIndex }) => {
  const project = projectsData[projectIndex];

  if (!project || !project.images || !project.images[imageIndex]) {
    return null; // Ou un composant d'erreur
  }

  const image = project.images[imageIndex];

  return (
    <motion.div
      className=""
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Image
        src={image.src}
        alt={image.alt || project.title}
        width={500} // Ajustez selon vos besoins
        height={300} // Ajustez selon vos besoins
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
      <motion.p
        className="text-black text-lg md:text-xl mt-4 text-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {image.alt || project.title}
      </motion.p>
    </motion.div>
  );
};

export default ProjectImage;
