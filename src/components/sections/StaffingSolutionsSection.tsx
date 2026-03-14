"use client";

import { motion } from "framer-motion";
import { Settings, ClipboardCheck, Wrench, Globe2 } from "lucide-react";
import MagneticWrapper from "../MagneticWrapper";

const solutions = [
    {
        title: "Engineering & Technical Professionals",
        description: "Highly specialized engineers, designers, and technical experts who deliver precise, innovative solutions for the region's most complex projects including civil, mechanical, electrical, instrumentation, control, process, and architectural disciplines.",
        icon: <Settings className="w-8 h-8 text-cream" />
    },
    {
        title: "Project Support & Administration",
        description: "Skilled professionals who organize and facilitate project execution, ensuring smooth operations from document control to procurement and site coordination.",
        icon: <ClipboardCheck className="w-8 h-8 text-cream" />
    },
    {
        title: "Skilled Trades & Craft Workers",
        description: "Expert welders, electricians, pipefitters, and highly specialized craftsmen who bring precision and excellence to complex structural and mechanical installations.",
        icon: <Wrench className="w-8 h-8 text-cream" />
    },
    {
        title: "Global Talent Sourcing & Deployment",
        description: "Leveraging international recruitment channels to identify, evaluate, and mobilize specialized talent from across the globe, ensuring the right fit for your specific project.",
        icon: <Globe2 className="w-8 h-8 text-cream" />
    }
];

export default function StaffingSolutionsSection() {
    return (
        <section id="staffing" className="py-32 px-4 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.h2
                        className="font-primary font-extrabold text-4xl md:text-5xl text-cream mb-6 uppercase tracking-wide uppercase"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        SECONDMENT <span className="text-orange">&</span> STAFFING SOLUTIONS
                    </motion.h2>
                    <motion.p
                        className="font-secondary text-lg text-cream/70 font-bold mb-8 uppercase tracking-widest"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Comprehensive Workforce Solutions
                    </motion.p>
                    <motion.p
                        className="font-secondary text-cream/80 text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        As a premier staffing solutions provider, TEMCO efficiently deploys skilled personnel across the region... providing our clients with tailored, reliable, and compliant staffing solutions to navigate specific project challenges and optimize productivity.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors duration-500 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className="flex items-start gap-6">
                                <MagneticWrapper>
                                    <div className="w-16 h-16 rounded-2xl bg-orange/20 border border-orange/50 flex items-center justify-center shrink-0 group-hover:bg-orange transition-colors duration-500">
                                        {item.icon}
                                    </div>
                                </MagneticWrapper>
                                <div>
                                    <h3 className="font-primary font-bold text-2xl text-cream mb-4">{item.title}</h3>
                                    <p className="font-secondary text-cream/70 leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-24 p-8 bg-orange/10 border border-orange/30 rounded-2xl text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p className="font-secondary text-cream/90 text-lg italic tracking-wide">
                        "From end-to-end building functions to securing rapid mobilization timelines, we are empowering technical teams, HR, and centralized resourcing nodes to effectively deliver their project success."
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
