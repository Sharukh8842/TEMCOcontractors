"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [hoverText, setHoverText] = useState("");

    const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
    const mouseX = useSpring(0, springConfig);
    const mouseY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, .magnetic, .hover-project-trigger")) {
                setIsHovered(true);
                if (target.closest(".hover-project-trigger")) {
                    setHoverText("View Project");
                } else {
                    setHoverText("");
                }
            } else {
                setIsHovered(false);
                setHoverText("");
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-orange-500 pointer-events-none z-[9999] flex items-center justify-center font-primary text-[10px] font-bold text-cream tracking-wide uppercase transition-colors duration-300"
            style={{
                x: mouseX,
                y: mouseY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                scale: isHovered ? (hoverText ? 3 : 1.5) : 1,
                backgroundColor: isHovered ? (hoverText ? "rgba(232, 122, 48, 0.9)" : "transparent") : "transparent",
                borderColor: isHovered && !hoverText ? "rgba(232, 122, 48, 1)" : "rgba(232, 122, 48, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {isHovered && hoverText && <span className="scale-[0.33] opacity-100">{hoverText}</span>}
        </motion.div>
    );
}
