import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaDownload, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import workplaceImage from '../assets/images/rj_workplace.png';
import { resumeUrl } from '../assets/js/global';

const About = () => {
    const highlights = [
        "4+ Years Fintech & Payment Gateway Experience",
        "React.js, Modern ES6+, Redux & High-Speed UI",
        "Scalable CRM & Dashboard Architecture",
        "Performance Optimization & Reusable Components"
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
                        className="lg:col-span-6 flex justify-center w-full"
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
                                    Frontend Lead
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Bio & Highlights Card */}
                    <div
                        data-aos="fade-left"
                        className="lg:col-span-6 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-10 shadow-2xl relative hover:border-emerald-500/30 transition-all duration-300"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Passionate Front-End Engineer & <span className="text-emerald-400">Fintech Specialist</span>
                        </h3>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                            With over <span className="text-white font-semibold">4 years of experience</span> in a high-volume Payment Gateway company, I specialize in crafting high-speed, scalable web applications and modular dashboards. Proficient in <span className="text-emerald-300 font-medium">ReactJS, modern JavaScript, Tailwind CSS, Redux, and REST API integration</span>.
                        </p>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                            At Letzpay Solution, I spearhead front-end architecture for multi-tier CRM systems, payout solutions, and transaction routing modules. I take pride in writing clean, reusable, and well-documented code that delivers silky-smooth user experiences.
                        </p>

                        {/* Bullet Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5">
                                    <FaCheckCircle className="text-emerald-400 text-base mt-0.5 shrink-0" />
                                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            {/* Download CV */}
                            <a
                                href={resumeUrl}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm sm:text-base shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
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
                </div>
            </div>
        </section>
    );
};

export default About;

