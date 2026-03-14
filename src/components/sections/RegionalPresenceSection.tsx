"use client";

import { motion } from "framer-motion";
import AntiGravityWrapper from "../AntiGravityWrapper";

export default function RegionalPresenceSection() {
    return (
        <section id="regional-presence" className="py-24 md:py-32 px-4 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Full Slide Graphic */}
                <motion.div
                    className="w-full relative flex items-center justify-center p-4 md:p-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <AntiGravityWrapper delay={0.2} yOffset={12} duration={9} className="w-full">
                        <img
                            src="/images/regional-presence-.png"
                            alt="Regional Presence and Saudi Expansion"
                            className="w-full h-auto object-contain mix-blend-multiply"
                            onError={(e) => {
                                // Fallback if image not found during dev
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1589519160732-57fc4e12e1f2?auto=format&fit=crop&q=80&w=1200';
                            }}
                        />
                    </AntiGravityWrapper>
                </motion.div>

            </div>
        </section>
    );
}
