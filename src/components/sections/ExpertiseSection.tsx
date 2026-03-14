"use client";

import { motion } from "framer-motion";
import AntiGravityWrapper from "../AntiGravityWrapper";
import MagneticWrapper from "../MagneticWrapper";

export default function ExpertiseSection() {
    return (
        <section id="expertise" className="py-32 px-4 relative z-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h2
                        className="font-primary font-extrabold text-4xl md:text-5xl text-cream mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        Our <span className="text-orange">Expertise</span>
                    </motion.h2>

                    {/* SVG 90% Progress Indicator */}
                    <div className="flex flex-col items-center justify-center">
                        <motion.div
                            className="relative w-48 h-48 flex flex-col items-center justify-center shadow-2xl rounded-full bg-white/50 backdrop-blur-sm border border-charcoal/5"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                                <circle cx="96" cy="96" r="88" stroke="rgba(26,26,26,0.05)" strokeWidth="4" fill="transparent" />
                                <motion.circle
                                    cx="96" cy="96" r="88"
                                    stroke="#E87A30" strokeWidth="6" fill="transparent"
                                    strokeDasharray={2 * Math.PI * 88}
                                    initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
                                    whileInView={{ strokeDashoffset: 2 * Math.PI * 88 * (1 - 0.90) }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span className="font-primary font-bold text-5xl text-cream">90<span className="text-orange">%</span></span>
                        </motion.div>
                        <motion.span
                            className="block font-secondary text-xs font-bold tracking-widest uppercase text-cream/60 mt-6"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                        >
                            Why Leading Contractors Choose Us
                        </motion.span>
                    </div>
                </div>

                {/* Expertise Row 1 */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-32">
                    <motion.div
                        className="flex-1 relative z-10"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-[10rem] md:text-[15rem] font-primary font-black text-orange opacity-15 leading-[0.7] -mb-16 select-none -z-10 relative">
                            01
                        </div>
                        <h3 className="text-3xl font-bold text-cream mb-8 relative z-10">Civil & Building Works</h3>
                        <ul className="space-y-4 text-gray text-lg pl-4 border-l-2 border-orange/30">
                            <li className="flex items-center gap-3"><span className="text-orange text-2xl leading-none">•</span> Infrastructure & Civil Engineering</li>
                            <li className="flex items-center gap-3"><span className="text-orange text-2xl leading-none">•</span> Residential & Commercial Buildings</li>
                            <li className="flex items-center gap-3"><span className="text-orange text-2xl leading-none">•</span> Industrial Facilities</li>
                            <li className="flex items-center gap-3"><span className="text-orange text-2xl leading-none">•</span> Structural & Steel Works</li>
                            <li className="flex items-center gap-3"><span className="text-orange text-2xl leading-none">•</span> Project Management</li>
                        </ul>
                        <button className="magnetic mt-10 px-8 py-3 border border-orange text-cream rounded-full font-secondary font-semibold text-sm uppercase tracking-wider hover:bg-[rgba(232,122,48,0.1)] transition-colors duration-300">
                            Learn More
                        </button>
                    </motion.div>
                    <AntiGravityWrapper className="flex-1 w-full" delay={0} yOffset={10}>
                        <div className="rounded-3xl overflow-hidden aspect-[4/3] relative">
                            <img src="/images/Civil & Building Works.jpg" alt="Civil Works" className="w-full h-full object-cover" />
                        </div>
                    </AntiGravityWrapper>
                </div>

                {/* Expertise Row 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16 mb-32 text-right">
                    <motion.div
                        className="flex-1 relative z-10 flex flex-col items-end"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-[10rem] md:text-[15rem] font-primary font-black text-orange opacity-15 leading-[0.7] -mb-16 select-none -z-10 relative">
                            02
                        </div>
                        <h3 className="text-3xl font-bold text-cream mb-8 relative z-10">MEP Services</h3>
                        <ul className="space-y-4 text-gray text-lg pr-4 border-r-2 border-orange/30 flex flex-col items-end w-full">
                            <li className="flex items-center justify-end gap-3 w-full text-right">HVAC & Ventilation <span className="text-orange text-2xl leading-none">•</span></li>
                            <li className="flex items-center justify-end gap-3 w-full text-right">Electrical Systems <span className="text-orange text-2xl leading-none">•</span></li>
                            <li className="flex items-center justify-end gap-3 w-full text-right">Plumbing & Fire Protection <span className="text-orange text-2xl leading-none">•</span></li>
                            <li className="flex items-center justify-end gap-3 w-full text-right">BMS & Security <span className="text-orange text-2xl leading-none">•</span></li>
                            <li className="flex items-center justify-end gap-3 w-full text-right">Testing & Commissioning <span className="text-orange text-2xl leading-none">•</span></li>
                        </ul>
                        <button className="magnetic mt-10 px-8 py-3 border border-orange text-cream rounded-full font-secondary font-semibold text-sm uppercase tracking-wider hover:bg-[rgba(232,122,48,0.1)] transition-colors duration-300">
                            Learn More
                        </button>
                    </motion.div>
                    <AntiGravityWrapper className="flex-1 w-full" delay={0.3} duration={12} yOffset={14}>
                        <div className="rounded-3xl overflow-hidden aspect-[4/3] relative">
                            <img src="/images/mep.jpg" alt="MEP Services" className="w-full h-full object-cover" />
                        </div>
                    </AntiGravityWrapper>
                </div>

                {/* Expertise Row 3 */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    <motion.div
                        className="flex-1 relative z-10"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-[10rem] md:text-[15rem] font-primary font-black text-orange opacity-15 leading-[0.7] -mb-16 select-none -z-10 relative">
                            03
                        </div>
                        <h3 className="text-3xl font-bold text-cream mb-8 relative z-10">Interior & Fit-Out Works</h3>
                        <ul className="space-y-4 text-gray text-lg pl-4 border-l-2 border-orange/30">
                            <li className="flex items-center gap-3"><span className="text-orange text-2xl leading-none">•</span> Office & Commercial Fit-Out</li>
                            <li className="flex items-center gap-3"><span className="text-orange text-2xl leading-none">•</span> Residential & Hospitality</li>
                        </ul>
                    </motion.div>
                    <AntiGravityWrapper className="flex-1 w-full" delay={0.6} duration={9} yOffset={8}>
                        <div className="rounded-3xl overflow-hidden aspect-[4/3] relative">
                            <img src="/images/Interior & Fit-Out Works.jpg" alt="Interior Works" className="w-full h-full object-cover" />
                        </div>
                    </AntiGravityWrapper>
                </div>

                {/* Expertise Row 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16 mt-32 text-right">
                    <motion.div
                        className="flex-1 relative z-10 flex flex-col items-end"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-[10rem] md:text-[15rem] font-primary font-black text-orange opacity-15 leading-[0.7] -mb-16 select-none -z-10 relative">
                            04
                        </div>
                        <h3 className="text-3xl font-bold text-cream mb-8 relative z-10">Secondment & Staffing</h3>
                        <ul className="space-y-4 text-gray text-lg pr-4 border-r-2 border-orange/30 flex flex-col items-end w-full">
                            <li className="flex items-center justify-end gap-3 w-full text-right">Engineering & Technical Professionals <span className="text-orange text-2xl leading-none">•</span></li>
                            <li className="flex items-center justify-end gap-3 w-full text-right">Project Support & Admin Services <span className="text-orange text-2xl leading-none">•</span></li>
                            <li className="flex items-center justify-end gap-3 w-full text-right">Skilled, Semi-skilled & Unskilled Manpower <span className="text-orange text-2xl leading-none">•</span></li>
                            <li className="flex items-center justify-end gap-3 w-full text-right">Global Talent Sourcing & Deployment <span className="text-orange text-2xl leading-none">•</span></li>
                        </ul>
                    </motion.div>
                    <AntiGravityWrapper className="flex-1 w-full" delay={0.9} duration={14} yOffset={12}>
                        <div className="rounded-3xl overflow-hidden aspect-[4/3] relative">
                            <img src="/images/Secondment & Staffing.jpg" alt="Workforce Solutions" className="w-full h-full object-cover" />
                        </div>
                    </AntiGravityWrapper>
                </div>

            </div>
        </section>
    );
}
