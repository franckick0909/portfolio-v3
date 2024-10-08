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
      '/projets/tattoo/tattoo1.jpg',
      '/projets/tattoo/tattoo1.png',
      '/projets/tattoo/tattoo2.png',
      '/projets/tattoo/tattoo3.png',
      '/projets/tattoo/tattoo4.png',
      '/projets/tattoo/tattoo5.png',
      '/projets/tattoo/tattoo6.png',
      '/projets/tattoo/tattoo7.png',
      '/projets/tattoo/tattoo8.png',
      '/projets/tattoo/tattoo9.png',
      '/projets/tattoo/tattoo10.png',
      '/projets/tattoo/tattoo11.png',

      '/projets/bdMovies/alien1.webp',
      '/projets/bdMovies/db1.png',
      '/projets/bdMovies/db2.png',
      '/projets/bdMovies/db3.png',
      '/projets/bdMovies/db4.png',
      '/projets/bdMovies/db5.png',
      '/projets/bdMovies/db6.png',
      '/projets/bdMovies/db7.png',
      '/projets/bdMovies/db8.png',
      '/projets/bdMovies/db9.png',
      '/projets/bdMovies/db10.png',
      '/projets/bdMovies/db11.png',
      '/projets/bdMovies/db12.png',

      "/projets/portfoliov2/oeil.jpg",
      "/projets/portfoliov2/portfolio1.png",
      "/projets/portfoliov2/portfolio2.png",
      "/projets/portfoliov2/portfolio3.png",
      "/projets/portfoliov2/portfolio4.png",
      "/projets/portfoliov2/portfolio5.png",
      "/projets/portfoliov2/portfolio6.png",
      "/projets/portfoliov2/portfolio7.png",
      "/projets/portfoliov2/portfolio8.png",
      "/projets/portfoliov2/portfolio9.png",
      "/projets/portfoliov2/portfolio10.png",
      "/projets/portfoliov2/portfolio11.png",

      "/projets/sophiebluel/appartement-paris-v.png",
      "/projets/sophiebluel/im1.png",
      "/projets/sophiebluel/le-coteau-cassis.png",
      "/projets/sophiebluel/appartement-paris-v.png",
      "/projets/sophiebluel/appartement-paris-xviii.png",
      "/projets/sophiebluel/sophie3.jpg",
      "/projets/sophiebluel/sophie-bluel-2.webp",
      "/projets/sophiebluel/bar-lullaby-paris.png",
      "/projets/sophiebluel/la-balisiere.png",
      "/projets/sophiebluel/bluel4.png",
      "/projets/sophiebluel/bluel5.png",
      "/projets/sophiebluel/bluel6.png",

      "/projets/kasa/kasa14.jpg",
      "/projets/kasa/oc-kasa.jpg",
      "/projets/kasa/kasa3.png",
      "/projets/kasa/kasa5.webp",
      "/projets/kasa/kasa4.webp",
      "/projets/kasa/kasa12.jpg",
      "/projets/kasa/kasa13.jpg",
      "/projets/kasa/kasa21.jpg",
      "/projets/kasa/kasa16.jpg",
      "/projets/kasa/kasa18.jpg",
      "/projets/kasa/kasa22.jpg",
      "/projets/kasa/kasa23.jpg",
      
    ];

    let loadedImages = 0;
    const totalImages = imagesToPreload.length;
    const minLoadTime = 3000; // 2 secondes minimum
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