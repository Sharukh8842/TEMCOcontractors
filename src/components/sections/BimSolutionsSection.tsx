"use client";

import { motion } from "framer-motion";
import AntiGravityWrapper from "../AntiGravityWrapper";

export default function BimSolutionsSection() {
    const services = [
        "BIM Modeling",
        "Digital Engineering",
        "GIS Solutions",
        "4D & 5D BIM",
        "Scan-to-BIM",
        "Clash Coordination"
    ];

    return (
        <section id="bim" className="py-32 px-4 relative z-20 w-full overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

                {/* Left Content */}
                <motion.div
                    className="flex-1 w-full"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-12">
                        <span className="font-secondary text-sm font-bold text-orange tracking-widest uppercase mb-4 block">
                            TEMCO Contracting
                        </span>
                        <h2 className="font-primary font-extrabold text-5xl md:text-6xl text-cream mb-4">
                            BIM <span className="text-orange">Solutions</span>
                        </h2>
                        <p className="font-secondary text-gray text-lg tracking-wide">
                            Where Technology Meets Construction
                        </p>
                    </div>

                    {/* Services Grid with dashed borders */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="border border-dashed border-gray/20 p-6 flex items-center justify-center text-center group cursor-none hover-project-trigger transition-colors duration-300 hover:bg-white/5"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <span className="font-secondary text-sm text-orange group-hover:text-cream transition-colors duration-300">
                                    {service}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Wireframe Graphic */}
                <motion.div
                    className="flex-1 w-full max-w-2xl lg:max-w-none relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <AntiGravityWrapper delay={0.2} duration={12} yOffset={15}>
                        {/* Using the wireframe image provided, falling back to a geometric abstraction if image fails */}
                        <div className="relative w-[120%] lg:w-[150%] -right-[10%] lg:-right-[20%] opacity-80 mix-blend-screen pointer-events-none">
                            <img
                                src="/images/bim.png"
                                alt="BIM Wireframe"
                                className="w-full h-auto object-contain filter contrast-125"
                                onError={(e) => {
                                    // Fallback if image not found during dev
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800';
                                }}
                            />
                        </div>
                    </AntiGravityWrapper>
                </motion.div>

            </div>
        </section>
    );
}
