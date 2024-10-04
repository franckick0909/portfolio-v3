"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface SimpleAnimatedLinkProps {
  href: string;
  text: string;
  className?: string;
}

export default function SimpleAnimatedLink({ href, text, className }: SimpleAnimatedLinkProps) {
  return (
    <div className="relative overflow-visible group inline-block">
      <Link
        href={href}
        className={`relative z-10 flex items-end font-marcellus font-light tracking-tight ${className}`}
      >
        <span className="relative overflow-hidden inline-flex items-center perspective-1000">
          <span className="relative inline-block transition-transform duration-700 ease-in-out group-hover:-translate-y-full group-hover:skew-y-3 py-2 px-1">
            {text}
          </span>
          <span className="absolute top-full left-0 inline-block whitespace-nowrap font-pinyon-script tracking-normal">
            {text.split('').map((letter, i) => (
              <motion.span 
                key={i} 
                className="relative inline-block transition-transform duration-700 ease-in-out group-hover:-translate-y-full group-hover:skew-y-3 text-stone-100 py-2"
                style={{ transitionDelay: `${i * 25}ms` }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </span>
        </span>
      </Link>
    </div>
  );
}