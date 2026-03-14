"use client";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ValuesSection from "@/components/sections/ValuesSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BimSolutionsSection from "@/components/sections/BimSolutionsSection";
import ArchitectureShowcaseSection from "@/components/sections/ArchitectureShowcaseSection";
import RegionalPresenceSection from "@/components/sections/RegionalPresenceSection";
import Footer from "@/components/sections/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Map scroll progress to background color (Strict Dark/Grey Theme)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.7, 0.8, 1],
    ["#0F0F10", "#0F0F10", "#1C1E22", "#1C1E22", "#0F0F10", "#0F0F10"]
  );

  return (
    <main className="min-h-screen flex flex-col items-center justify-between w-full overflow-hidden relative">
      {/* Dynamic Background */}
      <motion.div
        className="fixed inset-0 z-[-10]"
        style={{ backgroundColor }}
      />

      {/* Brand Watermark */}
      <div className="fixed inset-0 z-[-5] flex items-center justify-center pointer-events-none opacity-[0.03]">
        <h1 className="font-primary font-black text-[25vw] tracking-tighter text-white whitespace-nowrap select-none">
          TEMCO
        </h1>
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-12 py-6 flex justify-between items-center text-cream bg-gradient-to-b from-charcoal/80 to-transparent">
        <div className="flex flex-col select-none cursor-pointer">
          <span className="font-primary font-bold text-xl tracking-wider text-orange uppercase leading-none">TEMCO</span>
          <span className="font-secondary text-[10px] tracking-[0.3em] text-cream uppercase mt-1">Contracting</span>
        </div>

        <div className="hidden md:flex items-center justify-center gap-12 font-secondary text-sm tracking-widest text-cream/80 absolute left-1/2 -translate-x-1/2">
          <a href="#hero" className="hover:text-orange transition-colors">Home</a>
          <a href="#expertise" className="hover:text-orange transition-colors">Services</a>
          <a href="#about" className="hover:text-orange transition-colors">About Us</a>
          <a href="#portfolio" className="hover:text-orange transition-colors">Projects</a>
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="px-6 py-2 border border-cream/30 rounded-full hover:border-orange hover:text-orange transition-colors text-xs font-semibold tracking-widest uppercase">Contact Us</a>
        </div>
      </nav>

      {/* Page Sections */}
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <RegionalPresenceSection />
      <ArchitectureShowcaseSection />
      <ExpertiseSection />
      <BimSolutionsSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
