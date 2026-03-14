"use client";

import { motion } from "framer-motion";
import AntiGravityWrapper from "../AntiGravityWrapper";
import MagneticWrapper from "../MagneticWrapper";

export default function AboutSection() {
    return (
        <section id="about" className="py-32 px-4 relative z-10 overflow-hidden text-cream">
            <div className="max-w-7xl mx-auto space-y-32">

                {/* CEO Row */}
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="font-primary font-extrabold text-4xl md:text-5xl mb-4">
                            Who We Are
                        </h2>

                        <div className="font-secondary text-[var(--color-cream)]/90 text-lg leading-relaxed space-y-6">
                            <p>
                                From mobilizing single maintenance electricians to managing a total solutions workforce of over 500 personnel across <span className="text-orange font-bold">Saudi Arabia, Bahrain, and India</span>, there is a deep understanding of the region's demanding project environments... we have worked hand in hand with our clients on projects shaping constructing, development, & our future.
                            </p>
                            <p>
                                Our core strategy focuses on identifying, vetting, and deploying highly qualified professionals — spanning engineering, technical, administrative, and skilled trades—who integrate seamlessly, adding immediate value to your projects. Through both local and international recruitment channels, <span className="font-bold">TEMCO Contracting</span> continues to refine its scope without compromising the attributes that demand <span className="font-bold">reliability, expertise, and success</span>.
                            </p>
                        </div>

                        <MagneticWrapper>
                            <button className="magnetic mt-12 px-8 py-4 border border-orange text-cream rounded-full font-secondary font-semibold text-sm uppercase tracking-wider hover:bg-[rgba(232,122,48,0.1)] transition-colors duration-300">
                                READ FULL MESSAGE
                            </button>
                        </MagneticWrapper>
                    </motion.div>

                    {/* CEO Image */}
                    <AntiGravityWrapper className="flex-1 w-full" delay={0.2} duration={10} yOffset={12}>
                        <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/5] md:max-w-md ml-auto group border border-white/5 bg-charcoal">
                            <img
                                src="/images/ceo-image.png"
                                alt="Muhammed Abdulrazaq - CEO"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
                        </div>
                    </AntiGravityWrapper>
                </div>

                {/* Vision & Mission Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-white/10">
                    <motion.div
                        className="glass-dark p-12 rounded-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="font-primary font-bold text-3xl mb-6 text-cream">Our Mission</h3>
                        <p className="font-secondary text-[var(--color-cream)]/80 text-lg leading-relaxed">
                            To support Saudi Arabia's rapid growth and construction boom by providing flexible, reliable, and highly skilled workforce solutions to contractors, developers, and project management firms - helping them meet tight project deadlines, maintain operational efficiency, and contribute to the Kingdom's Vision 2030 objectives.
                        </p>
                    </motion.div>

                    <motion.div
                        className="glass-dark p-12 rounded-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="font-primary font-bold text-3xl mb-6 text-cream">Our Vision</h3>
                        <p className="font-secondary text-[var(--color-cream)]/80 text-lg leading-relaxed">
                            To become the premier and most trusted staffing partner in the Kingdom's construction sector - driving industry excellence by enabling projects with the exact talent they need, and setting the benchmark for quality and reliability under a single entity.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
