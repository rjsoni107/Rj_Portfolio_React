import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaInstagram, FaArrowRight, FaCode, FaBolt, FaShieldAlt } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/images/raj.webp";
import { resumeUrl } from "../assets/js/global";
import Header from "../components/Header";

const Home = () => {
    const sequence = [
        "Front-End Engineer",
        2000,
        "React.js Specialist",
        2000,
        "Fintech Web Developer",
        2000,
        "UI/UX Implementation Pro",
        2000,
        "High-Speed Web Architect",
        2000,
    ];

    const stats = [
        { value: "4+", label: "Years Exp." },
        { value: "15+", label: "Projects Completed" },
        { value: "Fintech", label: "Core Domain" },
    ];

    const socialLinks = [
        {
            icon: <FaGithub size={18} />,
            url: "https://github.com/rjsoni107",
            label: "GitHub",
        },
        {
            icon: <FaLinkedin size={18} />,
            url: "https://www.linkedin.com/in/kuldeep-soni-560b5b246",
            label: "LinkedIn",
        },
        {
            icon: <FaInstagram size={18} />,
            url: "https://www.instagram.com/raj.soni.rj?igsh=NDUycXVrYTVscTdm",
            label: "Instagram",
        },
    ];

    const handleScrollToProjects = (e) => {
        e.preventDefault();
        const el = document.getElementById("projects");
        if (el) {
            window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative w-full min-h-screen flex flex-col justify-center bg-[#05070e] text-white overflow-hidden pt-24 pb-16 lg:py-0"
        >
            {/* Header */}
            <Header />

            {/* Ambient Background Glow Mesh */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top-left Emerald Radial Glow */}
                <div className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full bg-emerald-500/15 blur-[130px]" />

                {/* Center-Right Cyan Glow */}
                <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-cyan-500/15 blur-[140px]" />

                {/* Bottom Center Indigo Glow */}
                <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[140px]" />

                {/* Subtle Modern Tech Grid Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
                        backgroundSize: "36px 36px",
                        maskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, #000 60%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, #000 60%, transparent 100%)",
                    }}
                />
            </div>

            {/* Main Hero Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)] py-8">

                    {/* LEFT COLUMN: Profile Showcase & Floating Tech Badges */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                        className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-1"
                    >
                        {/* Ambient Aura behind Image */}
                        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-emerald-500/30 via-teal-400/20 to-cyan-500/30 blur-3xl -z-10 animate-pulse" />

                        {/* Futuristic Frame / Card Container */}
                        <div className="relative group w-full max-w-[340px] sm:max-w-[390px] flex justify-center">

                            {/* Glowing Neon Ring Border */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-emerald-500/40 via-cyan-500/20 to-transparent p-[1px] blur-[1px] group-hover:from-emerald-400 group-hover:via-teal-400 transition-all duration-500" />

                            {/* Glass Base Platform */}
                            <div className="relative w-full rounded-[2.5rem] bg-gradient-to-b from-white/[0.07] to-white/[0.01] border border-white/10 backdrop-blur-xl p-4 sm:p-6 shadow-2xl overflow-visible flex flex-col items-center">

                                {/* Inner Profile Cutout */}
                                <div className="relative w-full overflow-hidden rounded-3xl flex justify-center pt-2">
                                    <img
                                        src={heroImg}
                                        alt="Kuldeep Raj Soni"
                                        className="w-auto h-[380px] sm:h-[420px] object-contain object-bottom drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-[1.03]"
                                        loading="eager"
                                        fetchPriority="high"
                                    />

                                    {/* Bottom subtle gradient fade so the image baseline blends smoothly */}
                                    <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#090e1c] via-[#090e1c]/60 to-transparent pointer-events-none" />
                                </div>

                                {/* Floating Live Badge 1: Fintech Specialist (Top Right) */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-3 sm:-right-5 px-3.5 py-2 rounded-2xl bg-[#091124]/90 border border-emerald-500/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-2.5 z-20"
                                >
                                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 text-sm">
                                        <FaShieldAlt />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Expertise</p>
                                        <p className="text-xs font-bold text-white">Payment & Fintech</p>
                                    </div>
                                </motion.div>

                                {/* Floating Live Badge 2: High Performance (Bottom Left) */}
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-4 -left-3 sm:-left-5 px-3.5 py-2 rounded-2xl bg-[#091124]/90 border border-cyan-500/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-2.5 z-20"
                                >
                                    <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 text-sm">
                                        <FaBolt />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Performance</p>
                                        <p className="text-xs font-bold text-white">High-Speed UI</p>
                                    </div>
                                </motion.div>

                                {/* Floating Live Badge 3: React & Modern Stack (Center Left/Right) */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                    className="hidden sm:flex absolute top-1/2 -left-6 px-3 py-1.5 rounded-xl bg-[#091124]/90 border border-teal-500/30 backdrop-blur-md shadow-lg items-center gap-2 z-20"
                                >
                                    <div className="w-7 h-7 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-300 text-xs">
                                        <FaCode />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-200">React Specialist</span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Hero Copy & Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-2 lg:order-2"
                    >
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                            </span>
                            <span>Available for Opportunities</span>
                            <span className="text-white/40">|</span>
                            <span className="text-white/80 font-mono text-xs">Fintech & Web3</span>
                        </motion.div>

                        {/* Name & Title Heading */}
                        <div className="space-y-3">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-sm sm:text-base font-semibold tracking-wider text-emerald-400 uppercase font-mono"
                            >
                                Hi, I am Kuldeep Soni (Raj) 👋
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.7 }}
                                className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.15] tracking-tight"
                            >
                                <span className="text-slate-300">Building High-Speed</span>{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                                    Front-End
                                </span>{" "}
                                <span className="text-slate-300">Experiences for Fintech & Beyond</span>
                            </motion.h1>
                        </div>

                        {/* Animated Typing Specialization */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-base sm:text-xl font-medium text-slate-300"
                        >
                            <span className="text-slate-400">Specialized in:</span>
                            <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-emerald-300 font-semibold shadow-inner">
                                <TypeAnimation
                                    sequence={sequence}
                                    wrapper="span"
                                    speed={40}
                                    style={{ display: "inline-block" }}
                                    repeat={Infinity}
                                />
                            </span>
                        </motion.div>

                        {/* Subtitle Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-slate-300/90 text-sm sm:text-base leading-relaxed max-w-xl"
                        >
                            Front-End Engineer with <span className="text-white font-semibold">4+ years</span> of core experience in high-volume <span className="text-emerald-400 font-medium">Payment Gateway & Fintech</span> ecosystems. Dedicated to ultra-fast UI rendering, clean scalable code, and intuitive user experiences.
                        </motion.p>

                        {/* Quick Stats Strip */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="grid grid-cols-3 gap-3 sm:gap-6 py-2 w-full max-w-md"
                        >
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex flex-col items-center lg:items-start transition-all duration-300 hover:border-emerald-500/40 hover:bg-white/[0.06]"
                                >
                                    <span className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-emerald-300">
                                        {stat.value}
                                    </span>
                                    <span className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Action CTAs & Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
                        >
                            {/* Primary Button: Download CV */}
                            <a
                                href={resumeUrl}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <FaDownload className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
                                <span className="relative z-10">Download CV</span>
                            </a>

                            {/* Secondary Button: Explore Projects */}
                            <a
                                href="#projects"
                                onClick={handleScrollToProjects}
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-emerald-400/50 text-white font-medium text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
                            >
                                <span>Explore Projects</span>
                                <FaArrowRight className="text-xs text-emerald-400 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>

                            {/* Quick Socials */}
                            <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:pl-3">
                                {socialLinks.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.label}
                                        className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-110 shadow-sm"
                                    >
                                        {item.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Floating Ambient Particles */}
            <div className="pointer-events-none absolute inset-0 z-0 hidden md:block overflow-hidden">
                {[...Array(16)].map((_, i) => (
                    <span
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-emerald-400/30 rounded-full animate-float"
                        style={{
                            top: `${(i * 19) % 95}%`,
                            left: `${(i * 23) % 95}%`,
                            animationDuration: `${4 + (i % 4)}s`,
                            animationDelay: `${(i % 3) * 1.2}s`,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Home;
