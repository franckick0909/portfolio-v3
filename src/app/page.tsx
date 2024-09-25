"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Hero from "./hero/page";
import Projets from "./projets/page";
import Header from "@/components/header";
const HeroTransition = dynamic(() => import("../components/heroTransition"), {
  ssr: false,
});
const Branding = dynamic(() => import("./branding/page"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

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
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
