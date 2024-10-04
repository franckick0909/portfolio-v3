"use client";

import { useState, useEffect } from "react";
import { navLinks, socialLinks } from "../data/data";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import BurgerButton from "./burgerButton";
import AnimatedLink from "./animatedLink";
import Arrow from "./arrow";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuVariants = {
    closed: {
      opacity: 0.7,
      y: "100%",
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const socialLinkVariants = {
    closed: {
      opacity: 0,
      x: -30,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const backgroundVariants = {
    closed: {
      clipPath: "ellipse(0% 100% at 100% 50%)",
      opacity: 0.7,
      transition: {
        when: "afterChildren",
        duration: 1,
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.2,
      },
    },
    open: {
      clipPath: "ellipse(40% 100% at 100% 50%)",
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 1,
        type: "spring",
        stiffness: 100,
        damping: 30,
        delay: 0.6,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace('/#', ''));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial pour définir la section active au chargement

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[2000] mix-blend-difference mx-4 md:mx-12 lg:mx-24 xl:mx-48 h-24 flex items-center justify-between"
      >

          <div className=" flex justify-between items-center mix-blend-difference z-[300]">
            {/* Logo */}
            <Link
              href="/"
              className="text-base md:text-lg lg:text-2xl text-white hover:text-gray-300 transition-colors flex flex-col items-start group z-[300] mix-blend-difference"
            >
              <div className="flex items-center font-marcellus font-semibold">
                <span className="w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-6 mr-2"></span>
                <span className="transform transition-all duration-300 group-hover:translate-x-2 ">
                  Franck
                </span>
              </div>
              <div className="flex items-center font-light font-marcellus">
                <span className="w-6 h-[1px] bg-white transition-all duration-300 group-hover:w-0 mr-2"></span>
                <span className=" transform transition-all duration-300 group-hover:-translate-x-2">
                  Chapelon
                </span>
              </div>
            </Link>
          </div>

          <BurgerButton isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
      </header>

      {/* Navigation Mobile */}
      <AnimatePresence mode="sync">
        {isOpen && (
          <motion.nav
            key="nav"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-zinc-200 flex z-[301]"
          >
            <motion.div
              variants={backgroundVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute inset-0 bg-white hidden lg:block"
            />

            <div className="w-full grid grid-cols-1 lg:grid-cols-2  place-content-center px-4 md:px-12 lg:px-24 xl:px-48 mx-auto container gap-8">
              {/* Navigation Links */}
              <div className="w-full  col-span-1 flex flex-col items-start justify-center">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.id || index}
                    variants={linkVariants}
                    className="overflow-hidden"
                  >
                    <AnimatedLink
                      href={item.href}
                      text={item.name}
                      index={index}
                      isActive={activeSection === item.href.replace('/#', '')}
                      onClick={() => setIsOpen(false)}
                    />
                  </motion.div>
                ))}
              </div>
              {/* Social Links */}
              <div className="relative w-full h-full col-span-1 flex flex-col justify-start items-start lg:items-end gap-1 lg:gap-4 text-start">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={item.id || `social-${index}`}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg lg:text-2xl font-light text-black hover:text-gray-600 transition-colors flex items-center gap-6 group"
                    variants={socialLinkVariants}
                  >
                    <item.icon className="text-base md:text-lg lg:text-2xl group-hover:text-gray-600 transition-colors" />
                    {item.name}
                    <span className="text-base md:text-lg lg:text-2xl rotate-90 translate-x-0 group-hover:translate-x-6 transition-all duration-300 ease-in-out mr-6 ">
                      <Arrow width={40} height={40} fill="black" stroke="none" />
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
