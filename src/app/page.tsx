"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Hero from "./hero/page";
import Projets from "./projets/page";
import Header from "@/components/header";
import Services from "./services/page";
import A_Propos from "./à propos/page";
const HeroTransition = dynamic(() => import("../components/heroTransition"), {
  ssr: false,
});
const Branding = dynamic(() => import("./branding/page"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasLoaded = localStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    localStorage.setItem('hasLoaded', 'true');
  };

  useEffect(() => {
    if (!isLoading) {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    }
  }, [isLoading]);

  if (!isMounted) {
    return null; // ou un composant de chargement si vous préférez
  }

  return (
    <main className="relative flex flex-col items-center justify-center w-full bg-white">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <HeroTransition
            key="transition"
            onLoadingComplete={handleLoadingComplete}
          />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Header />
            <Hero />
            <Branding />
            <Projets />
            <Services />
            <A_Propos />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
