import PageEnterTransition from "@/components/pageEnterTransition";
import PageTransition from "@/components/pageTransition";
import ProjectDisplay, { Project } from "@/components/projectDisplay";
import { Section } from "@/components/section";
import { projectsData } from "@/data/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMMO1.shop – Boutique de crèmes de soins",
  description:
    "IMMO1.shop est un site e-commerce dédié aux crèmes de soins: expérience d'achat fluide, visuels produits soignés et design responsive.",
  keywords: [
    "IMMO1.shop",
    "e-commerce",
    "crèmes de soins",
    "Next.js",
    "TailwindCSS",
    "Framer Motion",
    "Franck Chapelon",
  ],
  authors: [{ name: "Franck Chapelon" }],
  creator: "Franck Chapelon | Développeur web front-end",
};

export default function ProjetImmo1Shop() {
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

  console.log("Image source:", projet.coverImage);

  return (
    <PageTransition>
      <PageEnterTransition>
        <section className="bg-white min-h-screen h-full w-full">
          <Section
            imageSrc={projet.coverImage}
            tag={projet.subtitle}
            title={projet.name}
            clientName={projet.clientName}
            projectDate={projet.projectDate}
            category={projet.category}
            stacks={projet.stacks}
          />

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
