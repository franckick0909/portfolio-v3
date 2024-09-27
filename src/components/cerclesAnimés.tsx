"use client";

import React, { useEffect, useRef, useCallback } from 'react';

const CerclesAnimes: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  const creerCercles = useCallback(() => {
    const tailles = [1.2, 1, 0.8, 0.6, 0.2];
    const vitesses = [9000, 5000, 10000, 8000, 2000];
    
    tailles.forEach((taille, index) => {
      creerCercle(taille, vitesses[index]);
    });
  }, []);

  useEffect(() => {
    if (backgroundRef.current) {
      creerCercles();
    }
  }, [creerCercles]);

  const creerCercle = (echelle: number, dureeBase: number) => {
    const circle = document.createElement('div');
    circle.className = 'absolute rounded-full border-2 border-zinc-100';
    
    const taille = Math.max(window.innerWidth, window.innerHeight) * echelle;
    const x = (window.innerWidth - taille) / 2;
    const y = (window.innerHeight - taille) / 2;
    
    circle.style.width = `${taille}px`;
    circle.style.height = `${taille}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    
    backgroundRef.current?.appendChild(circle);
    
    animerCercle(circle, dureeBase, echelle);
  };

  const animerCercle = (cercle: HTMLDivElement, dureeBase: number, echelle: number) => {
    const duree = dureeBase + Math.random() * 10000;
    const amplitude = 100 * (1 - echelle) + 20;
    const dx = Math.random() * amplitude - amplitude / 2;
    const dy = Math.random() * amplitude - amplitude / 2;
    
    cercle.animate([
      { transform: 'translate(0, 0) rotate(0deg)' },
      { transform: `translate(${dx}px, ${dy}px) rotate(${360 * echelle}deg)` }
    ], {
      duration: duree,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });
  };

  return (
    <div ref={backgroundRef} className="fixed inset-0 -z-50 overflow-hidden"></div>
  );
};

export default CerclesAnimes;