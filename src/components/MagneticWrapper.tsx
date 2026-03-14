"use client";

import { motion, useSpring } from "framer-motion";
import React, { useRef, useState } from "react";

interface MagneticWrapperProps {
    children: React.ReactNode;
    className?: string;
    strength?: number; // How much it pulls towards the cursor
}

export default function MagneticWrapper({ children, className = "", strength = 25 }: MagneticWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Spring configs for smooth physics, simulating a weightless pull
    const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };

    // X and Y offset from center
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Calculate exact center of element
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance pointer is from the center
        const distX = (e.clientX - centerX);
        const distY = (e.clientY - centerY);

        // Apply magnetic pull factor based on distance
        x.set(distX * (strength / 100));
        y.set(distY * (strength / 100));
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Spring back to absolute center
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            ref={ref}
            className={`magnetic inline-block ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{ x, y }}
            animate={{
                rotateX: isHovered ? y.get() * 0.1 : 0,
                rotateY: isHovered ? x.get() * -0.1 : 0
            }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.div>
    );
}
