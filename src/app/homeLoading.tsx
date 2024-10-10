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

      '/projets/bdMovies/alien1.webp',
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

      "/projets/portfoliov2/oeil.webp",
      "/projets/portfoliov2/portfolio1.webp",
      "/projets/portfoliov2/portfolio2.webp",
      "/projets/portfoliov2/portfolio3.webp",
      "/projets/portfoliov2/portfolio4.webp",
      "/projets/portfoliov2/portfolio5.webp",
      "/projets/portfoliov2/portfolio6.webp",
      "/projets/portfoliov2/portfolio7.webp",
      "/projets/portfoliov2/portfolio8.webp",
      "/projets/portfoliov2/portfolio9.webp",
      "/projets/portfoliov2/portfolio10.webp",
      "/projets/portfoliov2/portfolio11.webp",

      "/projets/sophiebluel/sophie1.webp",
      "/projets/sophiebluel/sophie2.webp",
      "/projets/sophiebluel/sophie3.webp",
      "/projets/sophiebluel/sophie4.webp",
      "/projets/sophiebluel/sophie5.webp",
      "/projets/sophiebluel/sophie6.webp",
      "/projets/sophiebluel/sophie7.webp",
      "/projets/sophiebluel/sophie8.webp",
      "/projets/sophiebluel/sophie9.webp",
      "/projets/sophiebluel/sophie10.webp",
      "/projets/sophiebluel/sophie11.webp",
      "/projets/sophiebluel/sophie12.webp",

      "/projets/kasa/kasa1.webp",
      "/projets/kasa/kasa2.webp",
      "/projets/kasa/kasa3.webp",
      "/projets/kasa/kasa4.webp",
      "/projets/kasa/kasa5.webp",
      "/projets/kasa/kasa6.webp",
      "/projets/kasa/kasa7.webp",
      "/projets/kasa/kasa8.webp",
      "/projets/kasa/kasa9.webp",
      "/projets/kasa/kasa10.webp",
      "/projets/kasa/kasa11.webp",
      "/projets/kasa/kasa12.webp",
      
    ];

    let loadedImages = 0;
    const totalImages = imagesToPreload.length;
    const minLoadTime = 3500; // 2 secondes minimum
    const startTime = Date.now();

    const preloadImage = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
          loadedImages++;
          resolve();
        };
        img.onerror = reject;
      });
    };

    const updateLoadingPercentage = () => {
      const elapsedTime = Date.now() - startTime;
      const realPercentage = Math.round((loadedImages / totalImages) * 100);
      const timePercentage = Math.min(Math.round((elapsedTime / minLoadTime) * 100), 100);
      const targetPercentage = Math.max(realPercentage, timePercentage);

      setLoadingPercentage(prevPercentage => {
        if (prevPercentage >= targetPercentage) return prevPercentage;
        return prevPercentage + 1;
      });
    };

    const loadingInterval = setInterval(updateLoadingPercentage, 20);

    Promise.all(imagesToPreload.map(preloadImage))
      .then(() => {
        return new Promise(resolve => {
          const remainingTime = Math.max(0, minLoadTime - (Date.now() - startTime));
          setTimeout(resolve, remainingTime);
        });
      })
      .then(() => {
        clearInterval(loadingInterval);
        setLoadingPercentage(100);
        setTimeout(() => {
          setIsLoading(false);
          onLoadingComplete(); // Assurez-vous que cette ligne est présente
        }, 500);
      })
      .catch(console.error);

    return () => clearInterval(loadingInterval);
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
            <div>Franck Chapelon</div>
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-20 bg-white" />
              <div>Portfolio &copy; 2024</div>
            </div>
          </div>
          <div className="text-8xl font-bold self-end">
            <span>{loadingPercentage}</span>
            <span>%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}