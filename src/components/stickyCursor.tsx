'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface StickyCursorProps {
  stickyElements?: string[];
}

const StickyCursor: React.FC<StickyCursorProps> = ({ stickyElements = [] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef<HTMLDivElement>(null);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const scale = useSpring(1, smoothOptions);

  const cursorSize = useTransform(scale, [1, 2], [10, 10]);
  const ringSize = useTransform(scale, [1, 2], [0, 150]); // Augmentation de la taille pour plus d'espace

  const manageMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  }, [mouse.x, mouse.y]);

  const manageMouseOver = useCallback(() => {
    setIsHovered(true);
    scale.set(2);
  }, [scale]);

  const manageMouseLeave = useCallback(() => {
    setIsHovered(false);
    scale.set(1);
  }, [scale]);

  useEffect(() => {
    if (!stickyElements || stickyElements.length === 0) return; // Vérification supplémentaire

    const elements = stickyElements.flatMap(selector => 
      Array.from(document.querySelectorAll(selector))
    );
    
    elements.forEach(element => {
      element.addEventListener("mouseenter", manageMouseOver as EventListener);
      element.addEventListener("mouseleave", manageMouseLeave as EventListener);
    });

    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      elements.forEach(element => {
        element.removeEventListener("mouseenter", manageMouseOver as EventListener);
        element.removeEventListener("mouseleave", manageMouseLeave as EventListener);
      });
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [stickyElements, manageMouseMove, manageMouseOver, manageMouseLeave]);

  return (
    <>
      <motion.div 
        ref={cursor}
        style={{
          position: 'fixed',
          left: mouse.x,
          top: mouse.y,
          width: cursorSize,
          height: cursorSize,
          borderRadius: '50%',
          backgroundColor: 'white',
          mixBlendMode: "difference",
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <motion.div 
        style={{
          position: 'fixed',
          left: smoothMouse.x,
          top: smoothMouse.y,
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          border: "0.2px solid #BAB1B479",
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 1 : 0,
          mixBlendMode: "difference",
        }}
      >
        {isHovered && (
          <motion.svg
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity,
            }}
            viewBox="0 0 100 100"
            style={{ width: '100%', height: '100%', overflow: 'visible' }}
          >
            {[0, 120, 240].map((angle, index) => (
              <motion.text
                key={index}
                x="50"
                y="50"
                fontSize="10"
                fontFamily="Inter"
                fontWeight="500"
                fill="white"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ 
                  transform: `rotate(${angle}deg) translate(0, -47px)`,
                  transformOrigin: 'center',
                }}
              >
                • VOIR •
              </motion.text>
            ))}
          </motion.svg>
        )}
      </motion.div>
    </>
  );
};

export default StickyCursor;