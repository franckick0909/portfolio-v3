"use client";

import { AnimatedTitle } from "@/components/animatedTitle";
import ContactForm from "./_components/contactForm";
import PageTransition from "@/components/pageTransition";
import PageEnterTransition from "@/components/pageEnterTransition";
import StickyCursor from "@/components/stickyCursor";

export default function Contact() {
  const stickyElements = ["contact", "h3", "AnimatedTitle", "ScaleButton", "MagneticButton", "button", "a" ];
  return (
    <PageTransition>
      <PageEnterTransition>
        <section
          id="contact"
          className="bg-white py-28 md:py-48 flex flex-col items-center justify-center"
        >
          <StickyCursor stickyElements={stickyElements} />
          <div className="px-4 max-w-[48rem] w-full">
            <div className="flex flex-col py-2 mb-20 md:mb-32">
              <AnimatedTitle
                text="Salut !"
                className="font-marcellus text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                delay={0.7}
              />
              <AnimatedTitle
                text="Commençons"
                className="font-marcellus text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                delay={0.8}
              />

              <div className="h-1 w-[15%] bg-stone-400 my-6 rounded-full" />

              <p>
                Ce formulaire ne prend que deux minutes à remplir et m&apos;aide
                à mieux comprendre votre situation et vos besoins commerciaux
                afin que nous puissions démarrer plus rapidement votre projet.
                Sinon, envoie-moi juste un e-mail
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </PageEnterTransition>
    </PageTransition>
  );
}
