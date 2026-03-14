"use client";

import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import MagneticWrapper from "../MagneticWrapper";

export default function Footer() {
    const [scrollY, setScrollY] = useState(0);
    const form = useRef<HTMLFormElement>(null);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;
        setSubmitStatus("sending");

        // IMPORTANT: Replace these with your actual EmailJS credentials
        // You can get these by signing up at https://www.emailjs.com/
        const SERVICE_ID = "YOUR_SERVICE_ID";
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
        const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setSubmitStatus("success");
                form.current?.reset();
                setTimeout(() => setSubmitStatus("idle"), 5000);
            }, (error) => {
                console.error("EmailJS Error:", error);
                setSubmitStatus("error");
                setTimeout(() => setSubmitStatus("idle"), 5000);
            });
    };

    return (
        <footer id="contact" className="relative overflow-hidden text-cream pt-32 pb-16 px-4 z-20 w-full">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">

                    <div className="lg:col-span-2">
                        <div className="mb-8 select-none">
                            <h2 className="font-primary font-black text-3xl tracking-wide leading-none">
                                <span className="text-orange">TEMCO</span> <span className="text-cream">CONTRACTING</span>
                            </h2>
                            <span className="font-secondary text-[0.6rem] tracking-[0.4em] text-gray uppercase block mt-1">Contracting</span>
                        </div>

                        <p className="font-primary font-bold text-lg mb-6">
                            DESIGN<span className="text-orange">.</span> BUILD<span className="text-orange">.</span> DELIVER<span className="text-orange">.</span>
                        </p>

                        <p className="font-secondary text-gray text-sm leading-relaxed max-w-sm mb-8">
                            Delivering integrated construction, MEP, BIM, and turnkey solutions across the Gulf region with a commitment to quality, safety, and excellence.
                        </p>

                        <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-lg w-full">

                            <input type="text" name="user_name" placeholder="Your Name" required className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-gray focus:outline-none focus:border-orange transition-colors duration-300 focus:bg-white/5" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="email" name="user_email" placeholder="Email Address" required className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-gray focus:outline-none focus:border-orange transition-colors duration-300 focus:bg-white/5" />
                                <input type="tel" name="user_phone" placeholder="Phone Number" className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-gray focus:outline-none focus:border-orange transition-colors duration-300 focus:bg-white/5" />
                            </div>
                            <textarea name="message" placeholder="How can we help you?" rows={5} required className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-sm text-cream placeholder:text-gray focus:outline-none focus:border-orange transition-colors duration-300 focus:bg-white/5 resize-none"></textarea>

                            {submitStatus === "success" && <p className="text-green-500 text-sm font-secondary">Message sent successfully!</p>}
                            {submitStatus === "error" && <p className="text-red-500 text-sm font-secondary">Failed to send. Please check your EmailJS keys.</p>}

                            <MagneticWrapper>
                                <button type="submit" disabled={submitStatus === "sending"} className="magnetic disabled:opacity-50 w-full px-6 py-4 bg-orange text-white rounded-lg font-secondary font-bold text-sm uppercase tracking-wider hover:bg-orange/80 transition-colors duration-300 shadow-xl shadow-orange/20">
                                    {submitStatus === "sending" ? "Sending..." : "Submit Request"}
                                </button>
                            </MagneticWrapper>
                        </form>
                    </div>

                    <div>
                        <h4 className="font-primary font-bold text-lg mb-6 text-cream">Our Services</h4>
                        <ul className="space-y-4 font-secondary text-sm text-gray">
                            <li><a href="#" className="hover:text-orange transition-colors">Civil & Building Works</a></li>
                            <li><a href="#" className="hover:text-orange transition-colors">MEP Engineering</a></li>
                            <li><a href="#" className="hover:text-orange transition-colors">BIM Solutions</a></li>
                            <li><a href="#" className="hover:text-orange transition-colors">Interior & Fit-Out</a></li>
                            <li><a href="#" className="hover:text-orange transition-colors">Infrastructure Development</a></li>
                            <li><a href="#" className="hover:text-orange transition-colors">Workforce Solutions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-primary font-bold text-lg mb-6 text-cream">Quick Links</h4>
                        <ul className="space-y-4 font-secondary text-sm text-gray">
                            <li><a href="#about" className="hover:text-orange transition-colors">About Us</a></li>
                            <li><a href="#expertise" className="hover:text-orange transition-colors">Our Expertise</a></li>
                            <li><a href="#portfolio" className="hover:text-orange transition-colors">Our Projects</a></li>
                            <li><a href="#" className="hover:text-orange transition-colors">Industries We Serve</a></li>
                            <li><a href="#" className="hover:text-orange transition-colors">Careers</a></li>
                            <li><a href="#contact" className="hover:text-orange transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-primary font-bold text-lg mb-6 text-cream">Contact Us</h4>
                        <ul className="space-y-4 font-secondary text-sm text-gray">
                            <li>Call - +966 531275697 </li>
                            <li>Email - temcocontracting.sa@gmail.com</li>
                            <li>Address - Olaya Street, P.O. Box 3007, Riyadh 11372, Saudi Arabia</li>
                            <li>Hours - Sun - Thu: 9:00 AM - 6:00 PM</li>
                        </ul>
                    </div>

                </div>

                <div className="w-full h-px bg-white/10 mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-secondary text-xs text-gray uppercase tracking-widest">
                    <span>© 2026 TEMCO Contracting. All Rights Reserved.</span>
                    <span>Privacy Policy | Terms & Conditions</span>
                </div>
            </div>

            {/* Huge Watermark */}
            <div className="absolute bottom-[-10vw] left-1/2 -translate-x-1/2 font-primary font-black text-[25vw] leading-none text-white/[0.02] whitespace-nowrap z-0 pointer-events-none select-none">
                TEMCO
            </div>
        </footer>
    );
}
