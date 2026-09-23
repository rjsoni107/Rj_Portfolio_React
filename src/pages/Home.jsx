
import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaArrowRight, FaCode, FaBolt, FaShieldAlt } from "react-icons/fa";
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
            icon: <FaGithub color="#ffffff" size={20} />,
            url: "https://github.com/rjsoni107",
            label: "GitHub",
            hoverBorder: "hover:border-white/50",
            glow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]",
        },
        {
            icon: <FaLinkedin color="#0A66C2" size={20} />,
            url: "https://www.linkedin.com/in/kuldeep-soni-560b5b246",
            label: "LinkedIn",
            hoverBorder: "hover:border-[#0A66C2]/60",
            glow: "hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]",
        },
        {
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="homeInstaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fdf497" />
                            <stop offset="5%" stopColor="#fdf497" />
                            <stop offset="45%" stopColor="#fd5949" />
                            <stop offset="60%" stopColor="#d6249f" />
                            <stop offset="90%" stopColor="#285AEB" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#homeInstaGradient)"
                        d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                    />
                </svg>
            ),
            url: "https://www.instagram.com/raj.soni.rj?igsh=NDUycXVrYTVscTdm",
            label: "Instagram",
            hoverBorder: "hover:border-[#d6249f]/60",
            glow: "hover:shadow-[0_0_15px_rgba(214,36,159,0.4)]",
        },
        {
            icon: <FaWhatsapp color="#25D366" size={20} />,
            url: "https://wa.me/919524000107",
            label: "WhatsApp",
            hoverBorder: "hover:border-[#25D366]/60",
            glow: "hover:shadow-[0_0_15px_rgba(37,211,102,0.4)]",
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
            className="relative w-full min-h-screen flex flex-col justify-center bg-[#05070e] text-white overflow-hidden pt-24 pb-16 lg:pt-24 lg:pb-12"
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start min-h-[calc(100vh-6.5rem)] py-2">

                    {/* LEFT COLUMN: Profile Showcase & Floating Tech Badges */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                        className="lg:col-span-5 flex justify-center items-start relative order-1 lg:order-1 pt-0"
                    >
                        {/* Ambient Glow Mesh behind Image */}
                        <div className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-tr from-emerald-500/30 via-teal-400/20 to-cyan-500/30 blur-3xl -z-10 animate-pulse" />

                        {/* Edge-to-Edge Sleek Poster Card Container */}
                        <div className="relative group w-full max-w-[290px] sm:max-w-[330px] lg:max-w-[345px] flex justify-center">

                            {/* Outer Neon Glow Aura Border */}
                            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-tr from-emerald-500/50 via-teal-400/30 to-cyan-500/40 opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />

                            {/* Main Card Wrapper holding raj.webp */}
                            <div className="relative w-full rounded-[2rem] overflow-hidden border border-white/20 bg-[#040c1a] shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500 group-hover:border-emerald-400/60 group-hover:shadow-[0_25px_60px_rgba(16,185,129,0.25)]">
                                <img
                                    src={heroImg}
                                    alt="Kuldeep Raj Soni"
                                    className="w-full h-auto object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-[1.03]"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </div>

                            {/* Floating Badge 1: Expertise (Top Right) */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-4 -right-3 sm:-right-14 px-3.5 py-2 rounded-2xl bg-[#091124]/95 border border-emerald-500/50 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center gap-2.5 z-20"
                            >
                                <div className="w-7 h-7 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 text-xs">
                                    <FaShieldAlt />
                                </div>
                                <div>
                                    <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">Expertise</p>
                                    <p className="text-xs font-bold text-white">Payment & Fintech</p>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2: Performance (Bottom Right) */}
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-14 -right-3 sm:-right-6 px-3.5 py-2 rounded-2xl bg-[#091124]/95 border border-cyan-500/50 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center gap-2.5 z-20"
                            >
                                <div className="w-7 h-7 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 text-xs">
                                    <FaBolt />
                                </div>
                                <div>
                                    <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">Performance</p>
                                    <p className="text-xs font-bold text-white">High-Speed UI</p>
                                </div>
                            </motion.div>

                            {/* Floating Badge 3: React Specialist (Bottom Left) */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="absolute bottom-28 -left-3 sm:-left-14 px-3.5 py-2 rounded-2xl bg-[#091124]/95 border border-teal-500/50 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center gap-2 z-20"
                            >
                                <div className="w-7 h-7 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 text-xs">
                                    <FaCode />
                                </div>
                                <div>
                                    <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider">Core Stack</p>
                                    <p className="text-xs font-bold text-white">React Specialist</p>
                                </div>
                            </motion.div>
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
                        {/* <motion.div
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
                        </motion.div> */}

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
                                        className={`p-2.5 sm:p-3 rounded-full bg-white/[0.05] border border-white/10 ${item.hoverBorder} ${item.glow} hover:bg-white/10 transition-all duration-300 hover:scale-110 shadow-sm flex items-center justify-center`}
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
