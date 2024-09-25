"use client";

import Link from "next/link";
import { ScaleButton } from "./scaleButton";
import MagneticButton from "./magneticButton";
import { motion } from "framer-motion";
import Image from "next/image";

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
  coverImage: string;
  description: string;
  images: ImageData[];
  subtitle: string;
  stacks: string[];
  clientName: string;
  projectDate: string;
  category: string;
  site: string;
  github: string;
}

interface ProjectDisplayProps {
  project: Project;
  prevProject?: Project;
  nextProject?: Project;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({
  project,
  prevProject,
  nextProject,
}) => {
  return (
    <div className="py-12 relative">
      <div className="relative z-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <p className="text-xl lg:text-3xl mb-14 font-bold font-marcellus">
          {project.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full mb-4">
          <div className="flex flex-col w-full">
            <strong>Technologies utilisées:</strong>
            <ul className="list-disc list-inside grid gap-1 mt-4">
              {project.stacks.map((tech: string, techIndex: number) => (
                <li key={techIndex}>
                  <p className="text-sm inline-block bg-black text-white rounded-full px-3 py-[2px]">
                    {tech}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col w-full">
            <p className="mt-2">
              <strong>Client:</strong> {project.clientName}
            </p>
            <p>
              <strong>Date:</strong> {project.projectDate}
            </p>
            <p>
              <strong>Catégorie:</strong> {project.category}
            </p>
          </div>

          <div className="flex">
            <MagneticButton>
              <ScaleButton
                text="Voir le site"
                hoverText="ANGEL-TATTOO"
                href={project.site}
                bg="bg-white"
                className="text-white bg-black hover:text-black flex z-10 whitespace-nowrap relative"
              />
            </MagneticButton>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <div className="flex flex-col w-full">
            <strong>Description:</strong>
            <p className="text-sm md:text-base lg:text-lg">
              {project.description}
            </p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-current mt-10" />
      </div>

      <div className="relative w-full min-h-screen flex flex-col flex-wrap mb-8">
        <motion.div
          className="flex flex-col items-center justify-start w-full h-full"
          style={{}}
        >
          <div className="max-w-5xl mx-auto my-8 w-full">
            <Image
              src={project.images[0].src}
              alt={project.images[0].alt || "Image du projet"}
              width={project.images[0].width}
              height={project.images[0].height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              quality={100}
              className="object-contain w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-black mt-2">{project.images[0].alt}</p>
          </div>
        </motion.div>

        <div className="w-full flex flex-col items-center justify-center py-72 bg-white px-4">
          <h2 className="text-6xl font-normal text-black font-marcellus mb-20">
            Exploration
          </h2>
          <div className="h-36 w-px bg-black mb-20" />

          <div className="max-w-3xl w-full border-2 border-black flex flex-col p-14 bg-white">
            <h3 className="text-3xl font-normal text-black font-marcellus uppercase text-center mb-4">
              Créer et itérer
            </h3>
            <div className="h-px bg-black w-16 mx-auto mb-6" />

            <p className="text-base text-black mb-4">
              Étant donné que Linea 7 ne disposait daucun élément de conception
              et dune table rase, une grande partie de ce projet consistait à
              affiner les options et à affiner le langage de conception de la
              marque.
            </p>
            <p className="text-base text-black">
              Jai commencé par créer trois designs initiaux pour la page
              daccueil afin de nous offrir plusieurs styles différents parmi
              lesquels choisir. Ils variaient de très clairs et épurés utilisant
              des polices sans empattement géométriques à un thème sombre avec
              une sensation et des mises en page plus artistiques. Nous avons
              fini par opter pour loption B que jai continué à affiner au fur et
              à mesure que nous avancions.
            </p>
          </div>
        </div>

        <motion.div className="flex items-center w-full h-full" style={{}}>
          <div className="max-w-7xl mx-auto my-8 w-full px-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {project.images.slice(1, 4).map((image, index) => (
                <div key={index} className="flex-grow mb-4 sm:mb-0">
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
                  <p className="text-sm text-black mt-2">{image.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mx-auto my-72 w-full ">
          <Image
            src={project.images[4].src}
            alt={project.images[4].alt || "Image du projet"}
            width={project.images[4].width}
            height={project.images[4].height}
            sizes="100vw"
            priority
            quality={100}
            className="object-contain w-full h-auto"
          />
          <p className="text-sm text-black mt-2 text-center">
            {project.images[4].alt}
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center py-72 bg-white px-4">
          <h2 className="text-6xl font-normal text-black font-marcellus mb-20">
            Conception de sites Web
          </h2>
          <div className="h-36 w-px bg-black mb-20" />

          <div className="max-w-3xl w-full border-2 border-black flex flex-col p-14 bg-white">
            <h3 className="text-3xl font-normal text-black font-marcellus uppercase text-center mb-4">
              Créer un portfolio dynamique
            </h3>
            <div className="h-px bg-black w-16 mx-auto mb-6" />

            <p className="text-base text-black mb-4">
              Une fois que nous avons atterri sur un style de conception
              général, jai défini les détails en utilisant Roc Grotesk comme
              police daffichage associée à Sweet Sans Pro pour le corps du
              texte. Pour la palette de couleurs, nous avons opté pour un thème
              sombre en niveaux de gris avec un peu de chaleur ajoutée pour
              compléter léclairage doux utilisé dans une grande partie de la
              documentation de Linea 7.
            </p>
            <p className="text-base text-black">
              En ce qui concerne la structure, nous avons opté pour une
              expérience minimale et facile à naviguer, comprenant une page
              daccueil dynamique expliquant les capacités du studio et des pages
              de projet individuelles présentant le résumé du projet, les
              caractéristiques de conception et les images du produit final.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-72 w-full px-4">
          <Image
            src={project.images[5].src}
            alt={project.images[5].alt || "Image du projet"}
            width={project.images[5].width}
            height={project.images[5].height}
            sizes="100vw"
            priority
            quality={100}
            className="object-contain w-full h-auto"
          />
          <p className="text-sm text-black mt-2 text-center">
            {project.images[5].alt}
          </p>
        </div>

        <motion.div className="flex items-center w-full h-full" style={{}}>
          <div className=" mx-auto my-8 w-full px-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {project.images.slice(6, 8).map((image, index) => (
                <div key={index} className="flex-grow mb-4 sm:mb-0">
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
                  <p className="text-sm text-black mt-2">{image.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="w-full flex flex-col items-center justify-center py-72 bg-white px-4">
          <h2 className="text-6xl font-normal text-black font-marcellus mb-20">
            Développement
          </h2>
          <div className="h-36 w-px bg-black mb-20" />

          <div className="max-w-3xl w-full border-2 border-black flex flex-col p-14 bg-white">
            <h3 className="text-3xl font-normal text-black font-marcellus uppercase text-center mb-4">
              et... lancer
            </h3>
            <div className="h-px bg-black w-16 mx-auto mb-6" />

            <p className="text-base text-black mb-4">
              En ce qui concerne le développement, jai créé le site Web à laide
              de Webflow. Il sagissait dun processus relativement transparent
              dans lequel jai ajouté des interactions, construit la structure
              CMS pour le portefeuille et veillé à ce que le site soit
              complètement réactif et optimisé pour les mobiles.
            </p>
          </div>
        </div>

        <motion.div
          className="flex items-center w-full h-full py-72"
          style={{}}
        >
          <div className="max-w-[100rem] mx-auto my-8 w-full px-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {project.images.slice(8, 11).map((image, index) => (
                <div key={index} className="flex-grow mb-4 sm:mb-0">
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
                  <p className="text-sm text-black mt-2">{image.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-start w-full h-full"
          style={{}}
        >
          <div className="max-w-5xl mx-auto my-8 w-full">
            <Image
              src={project.coverImage}
              alt={project.name || "Image du projet"}
              width={project.images[0].width}
              height={project.images[0].height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              quality={100}
              className="object-contain w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-black mt-2">{project.name}</p>
          </div>
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
          <Link href="/hero" className="font-semibold hover:underline">
            ← Retour Accueil
          </Link>
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

{
  /* 


          <Image
            src={project.images[0].src}
            alt={project.images[0].alt || "Image du projet"}
            width={project.images[0].width}
            height={project.images[0].height}
            sizes="100vw"
            priority
            quality={100}
            className="object-contain w-full h-auto"
          />

 */
}
