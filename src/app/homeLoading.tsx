"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    Image: {
      new (): HTMLImageElement;
    }
  }
}

export default function HomeLoading({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagesToPreload = [
      '/projets/tattoo/covertattoo.webp',
      '/projets/bdMovies/alien1.webp',
      '/projets/kasa/kasa1.webp',
      '/projets/portfoliov2/oeil.webp',
      '/projets/sophiebluel/sophie1.png',
      '/lunette.webp',
      '/projets/tattoo/tattoo1.webp',
      '/projets/tattoo/tattoo2.webp',
      '/projets/tattoo/tattoo3.webp',
      '/projets/tattoo/tattoo4.webp',
      '/projets/tattoo/tattoo5.webp',
      '/projets/tattoo/tattoo6.webp',
      '/projets/tattoo/tattoo7.webp',
      '/projets/tattoo/tattoo8.webp',
      '/projets/tattoo/tattoo9.webp',
      '/projets/tattoo/tattoo10.webp',
      '/projets/tattoo/tattoo11.webp',

      '/projets/bdMovies/db1.webp',
      '/projets/bdMovies/db2.webp',
      '/projets/bdMovies/db3.webp',
      '/projets/bdMovies/db4.webp',
      '/projets/bdMovies/db5.webp',
      '/projets/bdMovies/db6.webp',
      '/projets/bdMovies/db7.webp',
      '/projets/bdMovies/db8.webp',
      '/projets/bdMovies/db9.webp',
      '/projets/bdMovies/db10.webp',
      '/projets/bdMovies/db11.webp',
      '/projets/bdMovies/db12.webp',

      '/projets/sophiebluel/sophie1.webp',
      '/projets/sophiebluel/sophie2.png',
      '/projets/sophiebluel/sophie3.webp',
      '/projets/sophiebluel/sophie4.png',
      '/projets/sophiebluel/sophie5.webp',
      '/projets/sophiebluel/sophie6.webp',
      '/projets/sophiebluel/sophie7.png',
      '/projets/sophiebluel/sophie8.webp',
      '/projets/sophiebluel/sophie9.webp',
      '/projets/sophiebluel/sophie10.png',
      '/projets/sophiebluel/sophie11.webp',
      '/projets/sophiebluel/sophie12.webp',

      '/projets/portfoliov2/portfolio1.webp',
      '/projets/portfoliov2/portfolio2.webp',
      '/projets/portfoliov2/portfolio3.webp',
      '/projets/portfoliov2/portfolio4.webp',
      '/projets/portfoliov2/portfolio5.webp',
      '/projets/portfoliov2/portfolio6.webp',
      '/projets/portfoliov2/portfolio7.webp',
      '/projets/portfoliov2/portfolio8.webp',
      '/projets/portfoliov2/portfolio9.webp',
      '/projets/portfoliov2/portfolio10.webp',

      '/snap1.webp',
      '/snap2.webp',
      // Ajoutez uniquement les images critiques ici
    ];

    const preloadImage = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = src;
      });
    };

    const loadImages = async () => {
      const totalImages = imagesToPreload.length;
      let loadedImages = 0;

      const imagePromises = imagesToPreload.map((src) => 
        preloadImage(src).then(() => {
          loadedImages++;
          setLoadingPercentage(Math.round((loadedImages / totalImages) * 100));
        })
      );

      await Promise.race([
        Promise.all(imagePromises),
        new Promise(resolve => setTimeout(resolve, 3000)) // Timeout de 3 secondes
      ]);

      setLoadingPercentage(100);
      setTimeout(() => {
        setIsLoading(false);
        onLoadingComplete();
      }, 2000); // Petit délai pour s'assurer que 100% est affiché
    };

    loadImages();
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loadingScreen"
          className="fixed inset-0 flex flex-col justify-between bg-black text-white z-[2001] p-8"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-2xl font-medium uppercase font-inter">
            Franck Chapelon
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-20 bg-white" />
              Portfolio &copy; 2024
            </div>
          </div>
          <div className="text-8xl font-bold self-end">
            {loadingPercentage}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}