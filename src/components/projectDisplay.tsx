"use client";

import Link from "next/link";
import { ScaleButton } from "./scaleButton";
import MagneticButton from "./magneticButton";
import {
  motion,
  Variants,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import BoxProjets from "./boxProjets";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import { AnimatedImage } from "./animatedImage";
import StickyCursor from "./stickyCursor";

interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  name: string;
  link: string;
  coverImage: string | StaticImageData;
  description: string;
  images: ImageData[];
  subtitle: string;
  stacks: string[];
  clientName: string;
  projectDate: string;
  category: string;
  site: string;
  github: string;
  title1: string;
  subtitle1: string;
  description1_1: string;
  description1_2: string;
  title2: string;
  subtitle2: string;
  description2_1: string;
  description2_2: string;
  title3: string;
  subtitle3: string;
  description3_1: string;
  description3_2: string;
  traitBg: string;
}

interface ProjectDisplayProps {
  project: Project;
  prevProject?: Project;
  nextProject?: Project;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Décalage entre chaque enfant
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
    },
  },
};

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({
  project,
  prevProject,
  nextProject,
}) => {
  const router = useRouter();

  const handleReturnToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/");
    setTimeout(() => {
      const projectsSection = document.getElementById("projets");
      projectsSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-200, 2000]);
  const springY1 = useSpring(y1, { stiffness: 200, damping: 30 });

  const y2 = useTransform(scrollYProgress, [0, 1], [-200, 700]);
  const springY2 = useSpring(y2, { stiffness: 200, damping: 30 });

  const y3 = useTransform(scrollYProgress, [0, 1], [100, -300]);
  const springY3 = useSpring(y3, { stiffness: 200, damping: 30 });

  const scaleY1 = useTransform(scrollYProgress, [0, 1], [0.5, 1.2]);
  const springScaleY1 = useSpring(scaleY1, { stiffness: 200, damping: 30 });
  const scaleY2 = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const springScaleY2 = useSpring(scaleY2, { stiffness: 200, damping: 30 });

  const stickyElements = ["angel_tattoo", "h3", "AnimatedTitle", "ScaleButton", "MagneticButton", "button", "a", "img" ];

  return (
    <div className="py-12 relative">
      <StickyCursor stickyElements={stickyElements} />  
      <div className="relative z-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full mb-4">

          <MagneticButton>
            <ScaleButton
              text="Voir le site"
              hoverText="ANGEL-TATTOO"
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              icon
              bg="bg-white"
              className="text-white bg-black hover:text-black flex z-10 whitespace-nowrap relative"
              type="button"
            />
          </MagneticButton>

          <MagneticButton>
            <ScaleButton
              text="Voir le code"
              hoverText="ANGEL-TATTOO"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaGithub size={24} />}
              bg="bg-white"
              className="text-white bg-black hover:text-black flex z-10 whitespace-nowrap relative gap-2"
              type="button"
            />
          </MagneticButton>
        </div>
        <div className="w-full h-[1px] bg-current mt-10" />
      </div>

      <div
        ref={container}
        className="relative w-full min-h-screen flex flex-col flex-wrap mb-8"
      >
        <motion.div className="flex flex-col items-center justify-start w-full  overflow-hidden mt-8 pt-20">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto my-8 w-full"
            style={{ y: springY1 }}
          >
            <Image
              src={project.images[0].src}
              alt={project.images[0].alt || "Image du projet"}
              width={project.images[0].width}
              height={project.images[0].height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              quality={100}
              className="object-cover w-full h-auto rounded-lg shadow-lg"
            />

            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-black mt-2"
            >
              {project.images[0].alt}
            </motion.p>
          </motion.div>
        </motion.div>

        <BoxProjets
          titles={project.title1}
          subtitle={project.subtitle1}
          description1={project.description1_1}
          description2={project.description1_2}
          traitBg={project.traitBg}
        />

        <motion.div className="flex items-center w-full h-full">
          <div className="max-w-7xl mx-auto my-8 w-full px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-between gap-4 overflow-hidden py-8"
            >
              {project.images.slice(1, 4).map((image, index) => (
                <motion.div
                  key={index}
                  className="flex-grow mb-4 sm:mb-0"
                  variants={itemVariants}
                  style={{
                    y:
                      index === 0
                        ? springY2
                        : index === 1
                        ? springY3
                        : springY2,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt || "Image du projet"}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    priority
                    quality={100}
                    className="object-cover w-full h-auto shadow-lg"
                  />
                  <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-black mt-2"
                  >
                    {image.alt}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <AnimatedImage
          imageSrc={project.images[4].src}
          alt={project.images[4].alt || "Image du projet"}
        />
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-black mt-2 text-center"
        >
          {project.images[4].alt}
        </motion.p>

        <BoxProjets
          titles={project.title2}
          subtitle={project.subtitle2}
          description1={project.description2_1}
          description2={project.description2_2}
          traitBg={project.traitBg}
        />

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-72 w-full px-4"
        >
          <AnimatedImage
            imageSrc={project.images[5].src}
            alt={project.images[5].alt || "Image du projet"}
          />
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-black mt-2 text-center"
          >
            {project.images[5].alt}
          </motion.p>
        </motion.div>

        <motion.div className="flex items-center w-full h-[70%] overflow-hidden">
          <div className=" mx-auto my-8 w-full px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-between gap-4"
            >
              {project.images.slice(6, 8).map((image, index) => (
                <motion.div
                  variants={itemVariants}
                  key={index}
                  className="flex-grow mb-4 sm:mb-0"
                >
                  <Image
                    src={image.src}
                    alt={image.alt || "Image du projet"}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    priority
                    quality={100}
                    className="object-cover w-full h-auto shadow-lg"
                  />
                  <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-black mt-2"
                  >
                    {image.alt}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <BoxProjets
          titles={project.title3}
          subtitle={project.subtitle3}
          description1={project.description3_1}
          description2={project.description3_2}
          traitBg={project.traitBg}
        />

        <motion.div className="flex items-center w-full h-full py-72">
          <div className="max-w-[100rem] mx-auto my-8 w-full px-4 overflow-hidden py-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-between gap-4"
            >
              {project.images.slice(8, 11).map((image, index) => (
                <motion.div
                  variants={itemVariants}
                  key={index}
                  className="flex-grow mb-4 sm:mb-0"
                  style={{
                    scale:
                      index === 0
                        ? springScaleY2
                        : index === 1
                        ? springScaleY1
                        : springScaleY2,
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt || "Image du projet"}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    priority
                    quality={100}
                    className="object-cover w-full h-auto shadow-lg"
                  />
                  <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-black mt-2"
                  >
                    {image.alt}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-start w-full h-full"
          style={{}}
        >
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto my-8 w-full max-h-auto"
          >

            <AnimatedImage imageSrc={project.coverImage} alt={project.name || "Image du projet"} />
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-black mt-2"
            >
              {project.name}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation entre les projets */}
      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="w-full h-[1px] bg-current mt-10" />

        <div className="flex items-center justify-between w-full py-10">
          {prevProject && (
            <Link
              href={prevProject.link}
              className="font-semibold hover:underline"
            >
              ← {prevProject.name}
            </Link>
          )}
          <a
            href="/#projets"
            onClick={handleReturnToProjects}
            className="font-semibold hover:underline"
          >
            ← Retour Projets
          </a>
          {nextProject && (
            <Link
              href={nextProject.link}
              className="font-semibold hover:underline"
            >
              {nextProject.name} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
