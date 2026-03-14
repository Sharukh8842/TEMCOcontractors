"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MapSection() {
    const [dots, setDots] = useState<boolean[]>([]);
    const cols = 50;
    const rows = 25;

    useEffect(() => {
        // Generate dot matrix shape
        const newDots = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const distFromCenter = Math.pow((c - cols / 2) / cols, 2) + Math.pow((r - rows / 2) / rows, 2);
                // Random map-like shape
                newDots.push(distFromCenter < 0.2 + Math.random() * 0.1);
            }
        }
        setDots(newDots);
    }, []);

    return (
        <section id="map" className="py-32 px-4 bg-cream relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        className="font-primary font-extrabold text-4xl md:text-5xl text-cream mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        Our <span className="text-orange">Network</span>
                    </motion.h2>
                    <motion.p
                        className="font-secondary text-gray text-lg uppercase tracking-widest mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Global Presence
                    </motion.p>
                </div>

                <motion.div
                    className="w-full max-w-5xl mx-auto opacity-50 relative pointer-events-none"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 0.5, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <div
                        className="grid gap-[2px] pointer-events-auto"
                        style={{
                            gridTemplateColumns: `repeat(${cols}, 1fr)`,
                            gridTemplateRows: `repeat(${rows}, 1fr)`
                        }}
                    >
                        {dots.map((isDot, i) => (
                            <div
                                key={i}
                                className={`w-full aspect-square rounded-full transition-colors duration-300 ${isDot ? 'bg-charcoal/30 hover:bg-orange hover:scale-150 hover-project-trigger cursor-none' : ''}`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
