"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedLinkProps {
  href: string;
  text: string;
  isActive?: boolean;
  index: number;
  onClick: () => void;
}

export default function AnimatedLink({ href, text, isActive = false, index, onClick }: AnimatedLinkProps) {
  return (
    <div className="relative overflow-visible group inline-block">
      <Link
        href={href}
        className={`relative z-10 text-6xl font-light transition-colors flex items-end font-serif tracking-tighter ${
          isActive ? "text-zinc-800" : "text-black"
        }`}
        onClick={onClick}
      >
        <span className="relative overflow-visible inline-flex items-center leading-[1.2em] h-[1.2em] perspective-1000">
          <span className="inline-block transition-transform duration-700 ease-in-out group-hover:-translate-y-full group-hover:skew-y-3">
            {text}
          </span>
          <span className="absolute top-full left-0 inline-block whitespace-nowrap font-pinyon-script tracking-normal">
            {text.split('').map((letter, i) => (
              <motion.span 
                key={i} 
                className="inline-block transition-transform duration-700 ease-in-out group-hover:-translate-y-full group-hover:skew-y-3 text-black"
                style={{ transitionDelay: `${i * 25}ms` }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </span>
        </span>
        <span className={`ml-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-normal font-sawarabi-mincho shadow-md ${isActive ? 'bg-black text-white' : 'bg-white text-black'} transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:bg-black group-hover:text-white mb-2`}>
          {index + 1 + " . "}
        </span>
        {isActive && (
          <motion.div 
            className="absolute bottom-0 left-0 h-0.5 bg-black inline-block"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{ scaleX: 1, transformOrigin: "left" }}
            exit={{ scaleX: 0, transformOrigin: "right" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ width: `calc(100% - 2.5rem)` }}
          />
        )}
      </Link>
    </div>
  );
}