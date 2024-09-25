import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleProjectHover = (e: CustomEvent) => {
      setIsHovering(e.detail.isHovering);
    };

    window.addEventListener("projectHover", handleProjectHover as EventListener);

    return () => {
      window.removeEventListener("projectHover", handleProjectHover as EventListener);
    };
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-[300] flex items-center justify-center ${
        isHovering ? "bg-rose-400 text-black" : "bg-transparent"
      }`}
      animate={{
        x: mousePosition.x - 60,
        y: mousePosition.y - 60,
      }}
      transition={{ type: "tween", stiffness: 500, damping: 10 }}
    >
      {isHovering && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="text-sm md:text-base lg:text-lg font-medium"
        >
          en voir plus
        </motion.span>
      )}
    </motion.div>
  );
}