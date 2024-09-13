'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface StickyCursorProps {
  stickyElement: React.RefObject<HTMLElement>;
}

const StickyCursor: React.FC<StickyCursorProps> = ({ stickyElement }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef<HTMLDivElement>(null);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions = { damping: 40, stiffness: 800, mass: 0.2 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const scale = useSpring(1, smoothOptions);

  const cursorSize = useTransform(scale, [1, 2], [10, 60]);
  const ringSize = useTransform(scale, (s) => s === 1 ? cursorSize.get() + 50 : cursorSize.get());

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
    const element = stickyElement.current;
    if (element) {
      element.addEventListener("mouseenter", manageMouseOver);
      element.addEventListener("mouseleave", manageMouseLeave);
    }
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", manageMouseOver);
        element.removeEventListener("mouseleave", manageMouseLeave);
      }
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [stickyElement, manageMouseMove, manageMouseOver, manageMouseLeave]);

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
          backgroundColor: isHovered ? 'white' : 'white',
          mixBlendMode: "difference",
          pointerEvents: 'none',
          zIndex: 9999,
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
          border: '0.2px solid #00000029',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default StickyCursor;