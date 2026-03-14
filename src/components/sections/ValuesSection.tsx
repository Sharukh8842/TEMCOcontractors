"use client";

import { motion } from "framer-motion";
import AntiGravityWrapper from "../AntiGravityWrapper";
import { Leaf, TrendingUp, Users, Cpu, ShieldCheck, HeartHandshake } from "lucide-react";

export default function ValuesSection() {
    return (
        <section id="values" className="py-32 px-4 relative z-20 text-cream">
            <div className="max-w-7xl mx-auto space-y-32">

                {/* Vision 2030 Alignment */}
                <div>
                    <div className="text-center mb-16">
                        <motion.h2
                            className="font-primary font-extrabold text-4xl md:text-5xl mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            Vision 2030 <span className="text-orange">Alignment</span>
                        </motion.h2>
                        <p className="font-secondary text-gray text-lg max-w-2xl mx-auto">
                            Our growth strategy is in parallel with the region's transformational goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Leaf, title: "Sustainable Practices", desc: "Energy-efficient designs and sustainable material procurement." },
                            { icon: TrendingUp, title: "Economic Growth", desc: "Driving regional infrastructure capability and scale." },
                            { icon: Users, title: "Localized Workforce", desc: "Empowering local talent and investing in community skills." },
                            { icon: Cpu, title: "Innovation & Tech", desc: "Integrating BIM, AI, and smart systems in our projects." }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                className="glass-dark p-8 rounded-2xl flex flex-col items-center text-center hover:border-orange/30 transition-colors duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                            >
                                <value.icon size={48} className="text-orange mb-6" strokeWidth={1.5} />
                                <h4 className="font-primary font-bold text-xl mb-3">{value.title}</h4>
                                <p className="font-secondary text-gray text-sm">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Quality & Safety and Workforce */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    <motion.div
                        className="space-y-12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <ShieldCheck size={40} className="text-orange" />
                                <h3 className="font-primary font-bold text-3xl">Quality & Safety</h3>
                            </div>
                            <p className="font-secondary text-gray leading-relaxed text-lg">
                                Our QS teams operate independently to uphold rigorous international standards. From ISO-certified protocols to daily on-site safety inductions, <strong className="text-cream">Safety is not a metric, it is a prerequisite</strong> for everything we build.
                            </p>
                        </div>

                        <div className="pt-12 border-t border-white/10">
                            <div className="flex items-center gap-4 mb-6">
                                <HeartHandshake size={40} className="text-orange" />
                                <h3 className="font-primary font-bold text-3xl">Workforce Welfare</h3>
                            </div>
                            <ul className="space-y-4 font-secondary text-gray text-lg">
                                <li className="flex items-start gap-4">
                                    <span className="text-orange text-xl mt-1">•</span>
                                    <span><strong>Dedicated Facilities:</strong> Premium accommodation, recreation, and catering.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-orange text-xl mt-1">•</span>
                                    <span><strong>Health & Safety:</strong> 24/7 medical support and preventative care access.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-orange text-xl mt-1">•</span>
                                    <span><strong>Fair Compensation:</strong> Strict compliance with international labor laws.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <AntiGravityWrapper delay={0} duration={12} yOffset={10} className="h-full relative mt-8 lg:mt-0">
                        <div className="rounded-3xl overflow-hidden aspect-[4/5] relative border border-white/5">
                            <img
                                src="/images/safety-pic.jpg"
                                alt="Construction Safety and Quality"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-charcoal/20 mix-blend-multiply"></div>
                        </div>
                    </AntiGravityWrapper>

                </div>

            </div>
        </section>
    );
}
