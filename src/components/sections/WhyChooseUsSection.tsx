"use client";

import { motion } from "framer-motion";
import AntiGravityWrapper from "../AntiGravityWrapper";

const stats = [
    {
        number: "90%",
        title: "90% Client Retention Rate",
        description: "Trusted by contractors and developers, we consistently deliver skilled professionals who integrate quickly and add immediate value to every project.",
        bgColor: "bg-[#1A1C20]" // Darkest
    },
    {
        number: "85%",
        title: "Rapid Mobilization",
        description: "Qualified, pre-screened professionals deployed within 72 hours—ensuring fast workforce support without compromising quality or compliance.",
        bgColor: "bg-[#25282F]"
    },
    {
        number: "95%",
        title: "Rigorous Quality Assurance",
        description: "Every candidate undergoes rigorous vetting to ensure the right skills, safety standards, and cultural fit for seamless project performance.",
        bgColor: "bg-[#2D3139]"
    },
    {
        number: "92%",
        title: "Flexible Engagement Models",
        description: "Flexible secondment and staffing solutions tailored to your project needs—short-term, long-term, and scalable workforce support when you need it most.",
        bgColor: "bg-[#363A44]"
    },
    {
        number: "88%",
        title: "Complete Regulatory Compliance",
        description: "Full compliance with local labor laws, documentation, certifications, and safety regulations—giving you complete peace of mind and risk-free workforce management.",
        bgColor: "bg-[#424651]" // Lightest grey
    }
];

export default function WhyChooseUsSection() {
    return (
        <section id="why-choose-us" className="py-32 px-4 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h2
                        className="font-primary font-extrabold text-4xl md:text-5xl text-cream mb-4 uppercase tracking-widest"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        WHY LEADING CONTRACTORS
                        <br />
                        <span className="text-orange text-5xl md:text-6xl mt-2 block">CHOOSE TEMCO</span>
                    </motion.h2>
                    <motion.p
                        className="font-secondary text-cream/70 text-lg uppercase tracking-widest"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Measurable Excellence in Strategic Workforce Solutions
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {stats.map((stat, index) => (
                        <AntiGravityWrapper key={index} delay={index * 0.1} yOffset={10}>
                            <motion.div
                                className="flex flex-col h-full rounded-2xl overflow-hidden border border-white/5 bg-charcoal shadow-2xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                {/* Metric Header Block */}
                                <div className={`${stat.bgColor} h-40 flex items-center justify-center p-6 border-b border-white/10`}>
                                    <span className="font-primary font-bold text-5xl text-cream tracking-tight">
                                        {stat.number}
                                    </span>
                                </div>

                                {/* Content Block */}
                                <div className="p-8 flex-1 flex flex-col items-center text-center">
                                    <h4 className="font-primary font-bold text-sm text-cream mb-4 min-h-[40px] flex items-center justify-center">
                                        {stat.title}
                                    </h4>
                                    <p className="font-secondary text-cream/60 text-xs leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>
                            </motion.div>
                        </AntiGravityWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
