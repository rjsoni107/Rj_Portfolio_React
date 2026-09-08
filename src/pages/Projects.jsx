import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import rjElectronicsImage from '../assets/images/rjElectronicsBanner.png';
import clockImage from '../assets/images/clockImage.png';
import popupImage from '../assets/images/popUpImage.png';
import rjSoniPortfolioImage from '../assets/images/RjSoniPortfolioImage.png';
import chatterAppImage from '../assets/images/chatterAppImage.png';
import datePickerImage from '../assets/images/datePickerImage.png';
import jaraJewellersImage from '../assets/images/jaraJewellersImage.png';

export default function Projects() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 100 });
    }, []);

    const projects = [
        {
            id: 1,
            title: 'ChatterApp – Real-Time Collaboration Suite',
            description: 'Cross-platform real-time chat application with instant WebSockets, live typing indicators, online presence tracking, message read receipts, and client-side media compression.',
            image: chatterAppImage,
            tags: ['React', 'Node.js', 'React Native', 'Expo', 'Appwrite', 'PWA'],
            demo: 'https://chatterapp-web.vercel.app/',
            code: 'https://github.com/rjsoni107/ChatSync_Git_Project',
            featured: true,
        },
        {
            id: 2,
            title: 'JaRa Jewellers – Luxury E-Commerce Web App',
            description: 'Luxury fine jewellery shopping portal featuring interactive product filtering, instant cart/wishlist state management, multi-step checkout, and silky-smooth micro-animations.',
            image: jaraJewellersImage,
            tags: ['React.js', 'Vite', 'Tailwind CSS', 'Context API', 'PWA'],
            demo: 'https://jara-jewellers.vercel.app/',
            code: 'https://github.com/rjsoni107/Jewellery_Shopping_Git_Project',
            featured: true,
        },
        {
            id: 3,
            title: 'Rj Electronics – Modern Electronics Store',
            description: 'High-speed e-commerce frontend designed for gadget showcases. Built with dynamic product galleries, responsive cart flows, and GSAP smooth scroll animations.',
            image: rjElectronicsImage,
            tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Responsive UI'],
            demo: 'https://rj-electronics.vercel.app/',
            code: 'https://github.com/rjsoni107/rj-electronics',
        },
        {
            id: 4,
            title: 'Personal Portfolio Web Experience',
            description: 'Modern developer portfolio showcasing interactive UI engineering, clean architecture, responsive components, and fluid animations.',
            image: rjSoniPortfolioImage,
            tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
            demo: 'https://rjsoni.vercel.app/',
            code: 'https://github.com/rjsoni107/rjsoni',
        },
        {
            id: 5,
            title: "Date Range Picker Library",
            description: "Customizable zero-dependency date range picker built in vanilla JavaScript. Supports custom date formats, predefined presets, and easy plug-and-play integration.",
            image: datePickerImage,
            tags: ["JavaScript", "UI Component", "DOM", "CSS3"],
            demo: "https://date-range-picker-three.vercel.app/",
            code: "https://github.com/rjsoni107/DateRangePicker"
        },
        {
            id: 6,
            title: 'Dynamic Popup & Modal Handler',
            description: 'Lightweight animated notification and modal management library for web applications with customizable status themes, alerts, and smooth CSS transitions.',
            image: popupImage,
            tags: ['JavaScript', 'Animation', 'Library', 'CSS3'],
            demo: 'https://dynamicpopuphandler.vercel.app/',
            code: 'https://github.com/rjsoni107/popup-handler',
        },
        {
            id: 7,
            title: 'Real-Time Analog & Digital Clock Engine',
            description: 'Interactive real-time clock application with smooth SVG sweep second hands, time zone detection, and responsive dark glass aesthetic.',
            image: clockImage,
            tags: ['JavaScript', 'CSS3 Animation', 'Math/Trig', 'HTML5'],
            demo: 'https://clock-git-project.vercel.app/',
            code: 'https://github.com/rjsoni107/Clock_Git_Project',
        },
    ];

    return (
        <section id="projects" className="relative py-20 bg-[#05070e] text-white overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-10 -right-32 w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div data-aos="fade-up" className="text-center mb-16">
                    <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-400 uppercase font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                        Portfolio Highlights
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight">
                        <span className="text-slate-200">Featured</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Projects</span>
                    </h2>
                    <p className="text-slate-400 text-base max-w-xl mx-auto mt-3">
                        A curated selection of production apps, open-source libraries, and interactive digital products.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            data-aos="fade-up"
                            data-aos-delay={idx * 70}
                            className="group relative rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border-2 border-emerald-500/40 hover:border-emerald-500 backdrop-blur-xl shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-2"
                        >
                            {/* Card Media Preview Container */}
                            <div className="relative h-52 w-full overflow-hidden bg-[#0a1122]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#05070e] via-transparent to-black/20 opacity-30" />

                                {project.featured && (
                                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-500/90 text-white font-mono text-[10px] font-bold tracking-wide shadow-md backdrop-blur-md">
                                        FEATURED
                                    </span>
                                )}
                            </div>

                            {/* Card Body */}
                            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2.5 line-clamp-2">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-slate-300/90 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-white/5">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/5 font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex items-center gap-3">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-[0_0_18px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-[1.02]"
                                            >
                                                <FaExternalLinkAlt className="text-xs" />
                                                <span>Live Demo</span>
                                            </a>
                                        )}

                                        {project.code && (
                                            <a
                                                href={project.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/30 text-white font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02]"
                                                aria-label="View Code on GitHub"
                                            >
                                                <FaGithub className="text-sm" />
                                                <span>Code</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

