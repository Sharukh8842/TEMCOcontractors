"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AntiGravityProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
}

export default function AntiGravityWrapper({
    children,
    className = "",
    delay = 0,
    duration = 8,
    yOffset = 10,
}: AntiGravityProps) {
    return (
        <motion.div
            className={className}
            animate={{ y: [-yOffset, yOffset] }}
            transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: duration,
                ease: "easeInOut",
                delay: delay,
            }}
            style={{
                willChange: "transform",
            }}
        >
            {children}
        </motion.div>
    );
}
