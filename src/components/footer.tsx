"use client";

import Link from "next/link";
import { navLinks, socialLinks, projectsData } from "../data/data";
import Logo from "./logo";
import { ScaleButton } from "./scaleButton";
import SimpleAnimatedLink from "./simpleAnimatedLink";

export default function Footer() {


  return (
    <footer className="bg-black text-white py-16 px-4 md:px-12 lg:px-24 xl:px-48 z-[201]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Logo et slogan */}
          <div className="col-span-1">
            <Logo className="text-6xl md:text-8xl mb-8 inline-flex" />
            <p className="text-xl mb-4">Freelance designer & développeur web</p>
          </div>

          {/* Navigation, Projets et Social */}
          <div className="col-span-1 grid grid-cols-2 gap-8 relative">
            <div>
              {/* Liens de navigation */}
              <div className="flex flex-col relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-8 before:w-px before:bg-white before:opacity-30">
                <nav className="mb-8 pl-8">
                  <ul>
                    {navLinks.slice(0, 5).map((link) => (
                      <li key={link.id} className="mb-2">
                        <SimpleAnimatedLink
                          href={link.href}
                          text={link.name}
                          className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-white font-marcellus"
                        />
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Lien Contact */}
              <div className="flex flex-col relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white before:opacity-30">
                <div className="mb-8 pl-8">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl mb-2 font-marcellus inline-block">
                    Contact
                  </h3>
                  <div className="w-8 h-0.5 bg-white mb-4"></div>
                  <ScaleButton
                    text="Me contacter"
                    hoverText="Me contacter"
                    href="/contact"
                    bg="bg-white"
                    icon=""
                    target=""
                    rel=""
                    type="button"
                    className="text-white bg-black hover:text-black z-10 whitespace-nowrap relative inline-flex ring-1 ring-white"
                  />
                </div>
              </div>
            </div>

            <div className="">
              {/* Projets */}
              <div className="flex flex-col relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-8 before:w-px before:bg-white before:opacity-30">
                <div className="mb-8 pl-8">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl mb-2 font-marcellus inline-block">
                    Projets
                  </h3>
                  <div className="w-8 h-0.5 bg-white mb-4"></div>

                  <ul>
                    {projectsData.slice(0, 5).map((project) => (
                      <li key={project.id} className="mb-2">
                        <Link
                          href={project.link}
                          className="text-sm font-extralight text-stone-300 hover:text-white font-inter uppercase tracking-wide relative inline-block
                          before:content-[''] before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 
                          before:bg-white before:origin-right before:scale-x-0 hover:before:origin-left hover:before:scale-x-100
                          before:transition-transform before:duration-500 before:ease-in-out"
                        >
                          {project.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Liens sociaux */}
              <div className="flex flex-col relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-white before:opacity-30">
                <div className="mb-8 pl-8">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl mb-2 font-marcellus inline-block">
                    Social
                  </h3>
                  <div className="w-8 h-0.5 bg-white mb-4"></div>
                  <ul className="flex flex-wrap gap-4">
                    {socialLinks.map((link) => (
                      <li key={link.id}>
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl text-stone-500 hover:text-white transition-colors"
                        >
                          <link.icon />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm mt-16">
            © Franck Chapelon, {new Date().getFullYear()}. Tous droits réservés.
            <Link
              href="/privacy-policy"
              className="ml-4  relative inline-block before:content-[''] before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 
                          before:bg-white before:origin-right before:scale-x-0 hover:before:origin-left hover:before:scale-x-100
                          before:transition-transform before:duration-500 before:ease-in-out"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
