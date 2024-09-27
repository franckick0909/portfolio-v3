"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = 12; // Ajustez ce nombre en fonction du nombre total d'images à précharger

  useEffect(() => {
    const preloadImages = [
      '/projets/tattoo/tattoo1.png',
      '/projets/tattoo/tattoo1.jpg',
      '/projets/tattoo/tattoo2.jpg',
      '/projets/tattoo/tattoo3.jpg',
      '/projets/tattoo/tattoo4.jpg',
      '/projets/tattoo/tattoo5.jpg',
      '/projets/tattoo/tattoo6.jpg',
      '/projets/tattoo/tattoo7.jpg',
      '/projets/tattoo/tattoo8.jpg',
      '/projets/tattoo/tattoo9.jpg',
      '/projets/tattoo/tattoo10.jpg',
      '/projets/tattoo/tattoo11.jpg',
      // Ajoutez ici les chemins vers toutes les images que vous voulez précharger
    ];

    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImagesLoaded((prev) => prev + 1);
      };
    });

    // Simuler le chargement des animations (remplacez ceci par votre logique réelle)
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
        }
        return next > 100 ? 100 : next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const totalProgress = (progress + (imagesLoaded / totalImages) * 100) / 2;

  return (
    <AnimatePresence>
      {totalProgress < 100 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-center"
          >
            <h1 className="text-4xl mb-4">Chargement...</h1>
            <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: '0%' }}
                animate={{ width: `${totalProgress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="mt-2">{Math.round(totalProgress)}%</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;