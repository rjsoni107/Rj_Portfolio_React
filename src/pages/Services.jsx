import React, { useEffect } from 'react';
import { FaCode, FaMobileAlt, FaSearch, FaPaintBrush, FaLaptopCode, FaPlug, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
    {
        icon: <FaCode className="text-2xl text-emerald-400" />,
        glowColor: "from-emerald-500/20 to-teal-500/10",
        borderColor: "group-hover:border-emerald-500/40",
        title: 'Front-End & Web Architecture',
        desc: 'Building responsive, ultra-fast, and interactive web applications with modern React, Vite, and cutting-edge JavaScript.',
        tags: ['React.js', 'Next.js', 'Tailwind', 'PWA']
    },
    {
        icon: <FaLaptopCode className="text-2xl text-cyan-400" />,
        glowColor: "from-cyan-500/20 to-blue-500/10",
        borderColor: "group-hover:border-cyan-500/40",
        title: 'Fintech & CRM Dashboards',
        desc: 'Engineering complex, high-volume payment gateway platforms, multi-tier user hierarchies, analytics, and transaction engines.',
        tags: ['Payment Gateway', 'CRM', 'Routing', 'Fintech']
    },
    {
        icon: <FaPlug className="text-2xl text-indigo-400" />,
        glowColor: "from-indigo-500/20 to-purple-500/10",
        borderColor: "group-hover:border-indigo-500/40",
        title: 'REST API & State Integration',
        desc: 'Seamless backend integrations, WebSocket real-time feeds, token authentication, and robust Redux Toolkit state flow.',
        tags: ['REST APIs', 'Redux', 'Axios', 'WebSockets']
    },
    {
        icon: <FaMobileAlt className="text-2xl text-teal-400" />,
        glowColor: "from-teal-500/20 to-emerald-500/10",
        borderColor: "group-hover:border-teal-500/40",
        title: 'Mobile-First & PWA Solutions',
        desc: 'Developing fluid cross-platform responsive layouts and Progressive Web Apps for native-like performance on all devices.',
        tags: ['PWA', 'Responsive', 'Cross-Platform', 'Mobile']
    },
    {
        icon: <FaPaintBrush className="text-2xl text-purple-400" />,
        glowColor: "from-purple-500/20 to-pink-500/10",
        borderColor: "group-hover:border-purple-500/40",
        title: 'UI/UX Design Implementation',
        desc: 'Translating Figma & modern design systems into pixel-perfect, accessible code with fluid micro-interactions and animations.',
        tags: ['Figma to Code', 'Framer Motion', 'Micro-Interactions']
    },
    {
        icon: <FaSearch className="text-2xl text-amber-400" />,
        glowColor: "from-amber-500/20 to-emerald-500/10",
        borderColor: "group-hover:border-amber-500/40",
        title: 'Speed & SEO Optimization',
        desc: 'Optimizing bundle size, Core Web Vitals, lazy loading, and semantic structure for top Google search visibility.',
        tags: ['Core Web Vitals', 'SEO', 'Performance', 'Lighthouse']
    },
];

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 100 });
    }, []);

    return (
        <section id="services" className="relative py-20 bg-[#05070e] text-white overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div data-aos="fade-up" className="text-center mb-16">
                    <span className="text-xs sm:text-sm font-semibold tracking-widest text-cyan-400 uppercase font-mono px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                        Capabilities & Expertise
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight">
                        <span className="text-slate-200">My</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Services</span>
                    </h2>
                    <p className="text-slate-400 text-base max-w-xl mx-auto mt-3">
                        High-quality engineering solutions tailored for scalable web applications, fintech platforms, and modern digital experiences.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 80}
                            className={`group relative bg-white/[0.03] hover:bg-white/[0.06] border border-emerald-500/40 ${service.borderColor} rounded-3xl p-8 backdrop-blur-xl shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden`}
                        >
                            {/* Card Ambient Glow on Hover */}
                            <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full bg-gradient-to-br ${service.glowColor} blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`} />

                            <div>
                                {/* Icon Pill */}
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-200 mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-slate-300/90 text-sm leading-relaxed mb-6">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                                {service.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/5 font-mono"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
