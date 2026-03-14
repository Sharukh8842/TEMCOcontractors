"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AntiGravityWrapper from "../AntiGravityWrapper";
import { Key, X } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    image: string;
    speed: number;
    description: string;
    location: string;
    role: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "2 Storey Villa",
        category: "2-Storey Villa | East Hidd, Bahrain",
        year: "Nov 2020–May 2021",
        image: "/images/2 story villa.jpg",
        speed: 0.1,
        description: `2-Storey Villa | East Hidd, Bahrain
Fast-track residential delivery with uncompromised quality
We completed this elegant 2-storey villa for Mr. Omar AbdulRahim in East Hidd, demonstrating our ability to deliver high-quality residential projects on accelerated timelines through efficient execution and meticulous planning.
Project Highlights
•	Client: Mr. Omar AbdulRahim
•	Consultant: Mohammed Al Gharib Architects & Engineers
•	Location: East Hidd, Bahrain
•	Duration: 6 Months (Nov 2020–May 2021)
•	Value: BHD 85,000 (SAR 850,000)
•	Scope: Complete Turnkey Solution
Key Achievement: Complete villa delivery in just 6 months, showcasing our streamlined construction processes and commitment to maintaining superior quality standards even on fast-track schedules.

`,
        location: "East Hidd, Bahrain",
        role: "Lead Contractor"
    },
    {
        id: 2,
        title: "2 Storey Luxury Villa",
        category: "2-Storey Luxury Villa | Hidd, Bahrain",
        year: " 2010–2011",
        image: "/images/2-storey-luxury-villa.png",
        speed: -0.15,
        description: `2-Storey Luxury Villa | Hidd, Bahrain
Premium turnkey residential delivery
Complete turnkey luxury villa with swimming pool for Mr. Khalid Al Kawari in Hidd, featuring full structural, architectural, and finishing works.
Project Highlights:
•	Client: Mr. Khalid Al Kawari
•	Consultant: Designing Values Design
•	Location: Hidd, Bahrain
•	Duration: 19 Months (May 2010–2011)
•	Value: BHD 220,000 (SAR 2.2 Million)
•	Scope: Complete Turnkey Solution
Key Achievement: Full turnkey delivery of luxury villa with premium finishes and swimming pool facilities.

`,
        location: "Hidd, Bahrain",
        role: "Main Contractor"
    },
    {
        id: 3,
        title: "2 Storey Villa",
        category: "2-Storey Luxury Villa | Reef Island, Bahrain",
        year: "Jan 2025–Dec 2025",
        image: "/images/2-storey-villa.jpg",
        speed: 0.05,
        description: `Premium turnkey delivery in Bahrain's most exclusive waterfront location
                        Sophisticated 2-storey luxury villa with underground basement parking and expansive swimming pool for Mr.Khalid Al Kawari in prestigious Reef Island.
                        Project Highlights:
                        • Client: Mr.Khalid Al Kawari
                        • Consultant: Tasmeem Architects & Engineering
                        • Location: Reef Island, Bahrain
                        • Duration: 12 Months (Jan 2025–Dec 2025)
                        • Value: BHD 596,700 (SAR 5.97 Million)
                        • Scope: Complete Turnkey Solution
                        Key Achievement: Multi-million-dollar luxury villa with underground parking and premium amenities in Bahrain's premier waterfront development.`,
        location: "Reef Island, Bahrain",
        role: "Contractor"
    },
    {
        id: 4,
        title: "2-Storey Villa",
        category: "2-Storey Villa | East Hidd, Bahrain",
        year: "Nov 2021–May 2022",
        image: "/images/2-storey-villa-2.jpg",
        speed: 0.2,
        description: `2-Storey Villa | East Hidd, Bahrain
Fast-track residential delivery with uncompromised quality
We completed this elegant 2-storey villa for Mr. Ghazi Abdulrahman in East Hidd, demonstrating our ability to deliver high-quality residential projects on accelerated timelines through efficient execution and meticulous planning.
Project Highlights
•	Client: Mr. Ghazi Abdulrahman Mohd
•	Consultant: Fajor Al Umarrah Engineering 
•	Location: East Hidd, Bahrain
•	Duration: 6 Months (Nov 2021–May 2022)
•	Value: BHD 80,000 (SAR 800,000)
•	Scope: Complete Turnkey Solution


`,
        location: "Riyadh, KSA",
        role: "MEP Engineer"
    },
    {
        id: 5,
        title: "2-Storey Villa",
        category: "2-Storey Villa | Galali, Bahrain",
        year: "Nov 2023–May 2024",
        image: "/images/2-storey-villa-3.jpg",
        speed: -0.1,
        description: `Fast-track residential delivery with uncompromised quality
We completed this elegant 2-storey villa for Mr. Fahad Ahmed Ebrahim Buzabon in Galali, demonstrating our ability to deliver high-quality residential projects on accelerated timelines through efficient execution and meticulous planning.
Project Highlights:
•	Client: Mr. Fahad Ahmed Ebrahim Buzabon
•	Consultant: Saad Abdul Ghani Engineering 
•	Location: Galali, Bahrain
•	Duration: 6 Months (Nov 2023–May 2024)
•	Value: BHD 75,000 (SAR 750,000)
•	Scope: Complete Turnkey Solution


`,
        location: "Galali, Bahrain",
        role: "Lead Contractor",
    },
    {
        id: 6,
        title: "Busaiteen Building",
        category: "Mixed-use development | Busaiteen, Bahrain",
        year: "Nov 2024–Dec 2025",
        image: "/images/busaitee-building.png",
        speed: 0.15,
        description: `Mixed-use development delivered turnkey
Complete turnkey execution of a 4-storey commercial and residential building for Mrs. Mona Khalil Bozoboon in Busaiteen.
Project Highlights:
•	Client: Mrs. Mona Khalil Bozoboon
•	Consultant: Gareeb Engineering
•	Location: Busaiteen, Bahrain
•	Duration: 13 Months (Nov 2024–Dec 2025)
•	Value: BHD 115,000 (SAR 1.15 Million)
•	Scope: Complete Turnkey Solution
Key Achievement: Full turnkey delivery of mixed-use commercial and residential building.
`,
        location: "Busaiteen, Bahrain",
        role: "Project Manager",
    },
    {
        id: 7,
        title: "6-Storey Building",
        category: "Mixed-use development | Adliya, Bahrain",
        year: "2006–2007",
        image: "/images/4-storey.jpg",
        speed: 0.15,
        description: `Complete turnkey delivery in Bahrain's vibrant urban center
Full turnkey execution of a 6-storey apartment building for Mr. Ahmed Mussalam in Adliya's prime location.
Project Highlights:
•	Client: Mr. Ahmed Mussalam
•	Consultant: Sanad Engineering
•	Location: Adliya, Bahrain
•	Duration: 12 Months (2006–2007)
•	Scope: Complete Turnkey Solution
Key Achievement: Complete multi-storey residential building delivered turnkey in central Bahrain location.

`,
        location: "Adliya, Bahrain",
        role: "Main Contractor",
    },
    {
        id: 8,
        title: "8 Luxury Villas",
        category: "Mixed-use development | Busaiteen, Bahrain",
        year: "Jan 2021–Feb 2022",
        image: "/images/8-villas.jpg",
        speed: 0.15,
        description: `8 Luxury Villas | Budaiya, Bahrain
Multi-unit residential development showcasing large-scale execution excellence
We delivered a prestigious compound of eight 3-storey luxury villas for Al Raha Real Estate in Budaiya—a comprehensive development demonstrating our capability to manage large-scale residential projects with consistent quality across multiple units.
Project Highlights:
•	Client: Al Raha Real Estate
•	Consultant: Emaar Architects & Engineers
•	Location: Budaiya, Bahrain
•	Duration: 14 Months (Jan 2021–Feb 2022)
•	Value: BHD 1,500,000 (SAR 15,000,000)
•	Scope: Complete Turnkey Solution
Comprehensive Delivery: Eight fully-equipped luxury villas featuring complete civil, structural, and MEP works, premium finishes, landscaping, swimming pools, gymnasium, and multipurpose hall—all delivered as a unified residential compound

`,
        location: "Budaiya, Bahrain",
        role: "Project Manager",
    },
    {
        id: 9,
        title: "121 Units, 2-Storey Villas",
        category: "Residential development | Al Budaiya, Bahrain",
        year: "2018–2020",
        image: "/images/villas.jpg",
        speed: 0.15,
        description: `121 Units, 2-Storey Villas | Al Budaiya, Bahrain
Large-scale real estate development delivered turnkey
Complete turnkey development of 121 two-storey villas including full infrastructure for Eskan Property in Al Budaiya.
Project Highlights:
•	Client: Eskan Property
•	Project Name: Danaat Al Budaiya
•	Consultant: Emaar Architects & Engineering
•	Location: Al Budaiya, Bahrain
•	Value: BHD 8.4 Million (SAR 84 Million)
•	Scope: Complete Turnkey - Villas & Infrastructure
Key Achievement: Full turnkey execution of 121-unit residential development with complete infrastructure, demonstrating large-scale real estate project capabilities.

`,
        location: "Al Budaiya, Bahrain",
        role: "Lead Contractor",
    },
    {
        id: 10,
        title: "19-Storey Residential Tower",
        category: "Residential development | Courtyard @ Seef, Bahrain",
        year: "2023-2024",
        image: "/images/courtyard @ SEEF.jpeg",
        speed: 0.15,
        description: `19-Storey Residential Tower | Courtyard @ Seef, Bahrain
High-rise construction excellence in Bahrain's prime location
We executed major structural and finishing works for this impressive 19-storey residential development in Seef, showcasing our capability to deliver complex multi-storey projects with precision and efficiency in collaboration with leading contractors.
Project Highlights:
•	Main Contractor: Al Namal Trading and Contracting
•	Project Name: Courtyard 
•	Consultant: Mohammed Al Gharib Architects & Engineers
•	Location: Seef, Bahrain
•	Scope: Structural Works, Blockwork & Plastering
Key Achievement: Successful delivery of critical structural and finishing works for a major high-rise development, demonstrating our expertise in large-scale vertical construction projects.

`,
        location: "Seef, Bahrain",
        role: "Lead Contractor"
    },
    {
        id: 11,
        title: "14-Storey Western The Olive Hotel",
        category: "Hotel development | Juffair, Bahrain",
        year: "2022-2023",
        image: "/images/OLIVE-HOTEL @ juffair.jpg",
        speed: 0.15,
        description: `14-Storey Western The Olive Hotel | Juffair, Bahrain
High-rise hospitality construction excellence in Bahrain's prime location
We executed major structural and finishing works for this impressive 14-storey hotel development in Juffair, showcasing our capability to deliver complex multi-storey hospitality projects with precision and efficiency in collaboration with leading contractors.
Project Highlights:
•	Client: VKL Holding
•	Main Contractor: Al Namal Trading and Contracting
•	Project Name: Western The Olive Hotel
•	Consultant: Mohammed Al Gharib Architects & Engineers
•	Location: Juffair, Bahrain
•	Scope: Structural Works, Blockwork & Plastering

`,
        location: "Juffair, Bahrain",
        role: "Lead Contractor",
    }
];

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="portfolio" className="py-32 px-4 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.h2
                        className="font-primary font-extrabold text-4xl md:text-5xl text-cream"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        Featured <span className="text-orange">Architecture</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`relative cursor-none hover-project-trigger ${index % 2 === 1 ? 'md:mt-32' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <AntiGravityWrapper delay={index * 0.5} yOffset={8}>
                                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative group">
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="mt-6 flex justify-between items-end">
                                    <div>
                                        <h4 className="font-primary font-bold text-2xl text-cream uppercase">{project.title}</h4>
                                        <span className="font-secondary text-gray text-sm uppercase tracking-wider">{project.category} • {project.year}</span>
                                    </div>
                                </div>
                            </AntiGravityWrapper>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex justify-center items-center p-4 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-xl" onClick={() => setSelectedProject(null)}></div>

                        <motion.div
                            className="bg-charcoal border border-white/10 rounded-3xl w-full max-w-6xl h-[85vh] relative overflow-hidden flex flex-col md:flex-row z-10 shadow-2xl"
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <button
                                className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-cream hover:bg-cream hover:text-charcoal transition-colors duration-300 z-50 bg-charcoal/50 backdrop-blur-md"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X size={24} />
                            </button>

                            <div className="w-full md:w-[60%] h-[40vh] md:h-full relative">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-start h-[45vh] md:h-full overflow-y-auto">
                                <h2 className="font-primary font-bold text-3xl md:text-4xl text-cream mb-6 uppercase text-balance break-words shrink-0 pt-4 md:pt-0">{selectedProject.title}</h2>

                                <div className="grid grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-8 pb-4 md:pb-8 border-b border-white/10 shrink-0">
                                    <div>
                                        <span className="block font-secondary text-xs text-gray uppercase tracking-widest mb-2">Category</span>
                                        <span className="font-bold text-base md:text-lg text-cream break-words">{selectedProject.category}</span>
                                    </div>
                                    <div>
                                        <span className="block font-secondary text-xs text-gray uppercase tracking-widest mb-2">Year</span>
                                        <span className="font-bold text-lg text-cream">{selectedProject.year}</span>
                                    </div>
                                    <div>
                                        <span className="block font-secondary text-xs text-gray uppercase tracking-widest mb-2">Role</span>
                                        <span className="font-bold text-lg text-cream break-words">{selectedProject.role}</span>
                                    </div>
                                    <div>
                                        <span className="block font-secondary text-xs text-gray uppercase tracking-widest mb-2">Location</span>
                                        <span className="font-bold text-lg text-cream break-words">{selectedProject.location}</span>
                                    </div>
                                </div>

                                <p className="font-secondary text-gray/90 leading-relaxed text-base break-words whitespace-pre-line mt-4">
                                    {selectedProject.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
