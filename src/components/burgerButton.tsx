"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface BurgerButtonProps {
    isOpen: boolean;
    toggleOpen: () => void;
}

export default function BurgerButton({ isOpen, toggleOpen }: BurgerButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const topBarVariants = {
        closed: { rotate: 0, y: -6, width: '100%', right: 0 },
        open: { rotate: 45, y: 0, width: '100%', right: 0 },
        hover: { width: '50%', right: 0 }
    };

    const bottomBarVariants = {
        closed: { rotate: 0, y: 6, width: '50%', right: 0 },
        open: { rotate: -45, y: 0, width: '100%', right: 0 },
        hover: { width: '100%', right: 0 }
    };

    const transition = { duration: 0.3, ease: [0.76, 0, 0.24, 1] };

    return (
        <button
            type="button"
            onClick={toggleOpen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Menu de navigation"
            className=" w-16 h-16 rounded-full flex items-center justify-center p-2  group mix-blend-difference"
        >
            <div className="relative w-8 h-8 flex flex-col justify-center items-center">
                <motion.span
                    variants={topBarVariants}
                    initial="closed"
                    animate={isOpen ? "open" : isHovered ? "hover" : "closed"}
                    transition={transition}
                    className={`absolute h-[2.2px] bg-white transform rounded-full z-[400]`}
                ></motion.span>

                <motion.span
                    variants={bottomBarVariants}
                    initial="closed"
                    animate={isOpen ? "open" : isHovered ? "hover" : "closed"}
                    transition={transition}
                    className={`absolute h-[2.2px] bg-white transform rounded-full self-end z-[400]`}
                ></motion.span>
            </div>
        </button>
    )
}
