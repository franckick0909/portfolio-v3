import { projectsData } from "@/data/data";
import ProjectDisplay, { Project } from "@/components/projectDisplay";
import PageTransition from "@/components/pageTransition";
import PageEnterTransition from "@/components/pageEnterTransition";
import { Section } from "@/components/section";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DBMovies",
  description: "DBMovies est une application de gestion de film.",
  keywords: ["gestion", "film", "DBMovies", "React", "TypeScript", "TailwindCSS", "Next.js", "API", "TMDB", "Franck Chapelon"],
  authors: [{ name: "Franck Chapelon" }],
  creator: "Franck Chapelon | Développeur web front-end",
};

export default function ProjetDbMovies() {
    const currentProjectIndex = projectsData.findIndex((p) => p.id === "02");
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