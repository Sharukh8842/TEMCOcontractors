"use client";

import { motion } from "framer-motion";
import AntiGravityWrapper from "../AntiGravityWrapper";

export default function ArchitectureShowcaseSection() {
    return (
        <section id="architecture" className="py-24 md:py-32 px-4 relative z-20 w-full overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative">

                {/* Full Slide Graphic */}
                <motion.div
                    className="w-full relative flex items-center justify-center p-4 md:p-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <AntiGravityWrapper delay={0.4} yOffset={15} duration={12} className="w-full">
                        <img
                            src="/images/archatech.png"
                            alt="Architecture Showcase"
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            onError={(e) => {
                                // Fallback if image not found during dev
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200';
                            }}
                        />
                    </AntiGravityWrapper>
                </motion.div>

            </div>
        </section>
    );
}
