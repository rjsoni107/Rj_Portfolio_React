import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaDownload, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import workplaceImage from '../assets/images/rj_workplace.png';
import { resumeUrl } from '../assets/js/global';

const About = () => {
    const highlights = [
        "4+ Years in Fintech & Payment Systems",
        "Scalable CRM & Dashboard Architecture",
        "High-Performance React Applications",
        "Reusable Components & API Integration"
    ];

    return (
        <section
            id="about"
            className="relative py-20 bg-[#05070e] text-white overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute -left-28 top-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none" />
            <div className="absolute -right-28 bottom-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

            {/* Tech grid texture */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                    backgroundSize: "36px 36px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-400 uppercase font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                        Get To Know Me
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight">
                        <span className="text-slate-200">About</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Myself</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left: Framed Workstation Showcase */}
                    <div
                        data-aos="fade-right"
                        className="lg:col-span-6 flex flex-col items-center w-full"
                    >
                        <div className="relative group w-full max-w-xl">
                            {/* Ambient Aura */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/25 via-teal-400/20 to-cyan-500/25 blur-2xl -z-10 group-hover:scale-105 transition-transform duration-500" />

                            {/* Border Ring */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-emerald-500/40 via-cyan-500/20 to-transparent p-[1px] blur-[0.5px]" />

                            {/* Widescreen Studio Frame */}
                            <div className="relative rounded-[2.5rem] bg-gradient-to-b from-white/[0.09] to-white/[0.02] border border-white/10 backdrop-blur-xl p-3 sm:p-4 shadow-2xl overflow-hidden">

                                {/* Workplace Image Container */}
                                <div className="relative rounded-3xl overflow-hidden">
                                    <img
                                        src={workplaceImage}
                                        alt="Kuldeep Raj Soni - Workstation Setup"
                                        className="w-full h-[300px] sm:h-[360px] lg:h-[390px] object-cover object-center drop-shadow-xl transition-transform duration-700 group-hover:scale-[1.03]"
                                    />
                                </div>
                            </div>

                            {/* Glassmorphic Floating Badge - Placed below the image box */}
                            <div className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl flex items-center justify-between shadow-xl hover:border-emerald-500/30 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 text-lg shrink-0">
                                        <FaBriefcase />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-mono">Development Lab & Tech Stack</p>
                                        <p className="text-sm font-bold text-white">JaRa Tech Solutions</p>
                                    </div>
                                </div>
                                <span className="text-xs font-mono text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 shrink-0">
                                    Founder • Frontend Engineer
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons (CTAs) - Placed outside the green aura container */}
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 w-full max-w-xl">
                            {/* Download CV */}
                            <a
                                href={resumeUrl}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <FaDownload className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
                                <span className="relative z-10">Download CV</span>
                            </a>

                            {/* Contact Me */}
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-emerald-400/50 text-white font-medium text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
                            >
                                <FaPhoneAlt className="text-sm text-emerald-400" />
                                <span>Get In Touch</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Bio & Highlights Card */}
                    <div
                        data-aos="fade-left"
                        className="lg:col-span-6 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-10 shadow-2xl relative hover:border-emerald-500/30 transition-all duration-300"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                            Passionate Front-End Engineer & <span className="text-emerald-400">Fintech Specialist</span>
                        </h3>

                        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                            <p>
                                I’m a <span className="text-white font-semibold">Front-End Engineer</span> with <span className="text-emerald-400 font-semibold">4+ years of experience</span> building scalable, high-performance web applications in the <span className="text-emerald-300 font-medium">fintech and payment gateway</span> domain.
                            </p>
                            <p>
                                At <span className="text-white font-semibold">Letzpay Solution</span>, I work on multi-tier CRM systems, payout platforms, transaction routing modules, and dashboard-driven applications, focusing on performance, usability, and maintainable front-end architecture.
                            </p>
                            <p>
                                I specialize in turning complex business workflows into clean, intuitive, and responsive user experiences. My approach combines reusable component architecture, performance optimization, API integration, and attention to detail to build products that are reliable at scale.
                            </p>
                            <p>
                                Alongside my professional work, I also work through <span className="text-emerald-400 font-semibold">JaRa Tech Solutions</span>, where I build modern websites and digital experiences for businesses.
                            </p>
                        </div>

                        {/* Bullet Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5">
                                    <FaCheckCircle className="text-emerald-400 text-base mt-0.5 shrink-0" />
                                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

