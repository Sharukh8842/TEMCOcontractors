"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AntiGravityWrapper from "../AntiGravityWrapper";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
    const [value, setValue] = useState(from);

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percent = Math.min(progress / (duration * 1000), 1);

            setValue(Math.floor(from + (to - from) * percent));

            if (percent < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [from, to, duration, isInView]);

    return <span ref={nodeRef}>{value}</span>;
}

import MagneticWrapper from "../MagneticWrapper";

export default function HeroSection() {
    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Assembly Wireframes */}
            <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                {[
                    { x: -1000, y: -1000, rotate: -45, delay: 0 },
                    { x: 1000, y: -1000, rotate: 45, delay: 0.2 },
                    { x: -1000, y: 1000, rotate: -135, delay: 0.4 },
                    { x: 1000, y: 1000, rotate: 135, delay: 0.6 }
                ].map((piece, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-[150vw] h-[2px] bg-orange/30 origin-center"
                        initial={{ x: piece.x, y: piece.y, rotate: piece.rotate, opacity: 0 }}
                        animate={{ x: "-50%", y: "-50%", rotate: piece.rotate, opacity: [0, 1, 0] }}
                        transition={{ duration: 2.5, delay: piece.delay, ease: "easeOut" }}
                    />
                ))}
            </div>

            {/* Background Image */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.2, opacity: 0, filter: "blur(20px)" }}
                animate={{ scale: 1.05, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
            >
                <img
                    src="/images/image copy 3.png"
                    alt="TEMCO Architecture"
                    className="w-full h-full object-cover filter brightness-[0.6] sepia-[0.3] hue-rotate-[140deg] saturate-[1.5] mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-charcoal/40 to-charcoal/80"></div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-4xl px-4 mt-8 pb-32">
                <motion.h1
                    className="font-primary font-bold text-5xl md:text-6xl lg:text-7xl tracking-widest text-cream mb-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
                >
                    DESIGN<span className="text-orange">.</span> BUILD<span className="text-orange">.</span> DELIVER<span className="text-orange">.</span>
                </motion.h1>

                <motion.p
                    className="font-secondary text-lg md:text-xl text-cream mb-6 tracking-wide"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 2.7 }}
                >
                    Your <span className="text-orange font-semibold">vision</span>, powered by our people.
                </motion.p>

                <motion.p
                    className="font-secondary text-sm md:text-base text-cream/90 mb-10 max-w-2xl mx-auto leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 2.9 }}
                >
                    Integrated BIM, Construction & Workforce Solutions<br />
                    Across KSA, Bahrain & India
                </motion.p>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 3.1 }}
                >
                    <MagneticWrapper>
                        <button className="magnetic mt-12 px-8 py-4 border border-orange text-cream rounded-full font-secondary relative overflow-hidden group z-20 hover:text-[var(--color-charcoal)] transition-colors duration-500">
                            <span className="relative z-10 uppercase tracking-widest font-semibold text-xs">
                                GET <span className="text-orange group-hover:text-[var(--color-charcoal)] transition-colors duration-500">FREE</span> CONSULTATION
                            </span>
                            <div className="absolute inset-0 bg-orange transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-[0]"></div>
                        </button>
                    </MagneticWrapper>
                </motion.div>
            </div>

            {/* Down Arrow */}
            <motion.div
                className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
                <div className="w-6 h-6 border-b-2 border-r-2 border-orange transform rotate-45"></div>
            </motion.div>

            {/* Hero Stats */}
            <AntiGravityWrapper delay={0.5} yOffset={8} className="absolute bottom-12 left-0 w-full z-20 px-8">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8 md:gap-4">
                    <div className="text-left flex flex-col">
                        <h3 className="font-primary font-bold text-3xl md:text-4xl text-cream mb-1 leading-none">
                            <Counter from={0} to={30} /><span className="text-orange">+</span>
                        </h3>
                        <span className="font-secondary text-xs text-cream/80 uppercase tracking-wider">Years Of<br />Experience</span>
                    </div>

                    <div className="text-left flex flex-col">
                        <h3 className="font-primary font-bold text-3xl md:text-4xl text-cream mb-1 leading-none">
                            <Counter from={0} to={300} /><span className="text-orange">+</span>
                        </h3>
                        <span className="font-secondary text-xs text-cream/80 uppercase tracking-wider">Client Served</span>
                    </div>

                    <div className="text-left flex flex-col">
                        <h3 className="font-primary font-bold text-3xl md:text-4xl text-cream mb-1 leading-none">
                            0<Counter from={0} to={3} />
                        </h3>
                        <span className="font-secondary text-xs text-cream/80 uppercase tracking-wider">Countries</span>
                    </div>

                    <div className="text-left flex flex-col">
                        <h3 className="font-primary font-bold text-3xl md:text-4xl text-cream mb-1 leading-none">
                            <Counter from={0} to={90} /><span className="text-orange">%</span>
                        </h3>
                        <span className="font-secondary text-xs text-cream/80 uppercase tracking-wider">Retention</span>
                    </div>
                </div>
            </AntiGravityWrapper>
        </section>
    );
}
