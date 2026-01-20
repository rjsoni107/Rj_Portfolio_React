import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import rjElectronicsImage from '../assets/images/rjElectronicsBanner.png';
import clockImage from '../assets/images/clockImage.png';
import popupImage from '../assets/images/popUpImage.png';
import rjSoniPortfolioImage from '../assets/images/RjSoniPortfolioImage.png';
import chatSyncImage from '../assets/images/chatSyncImage.png';
import datePickerImage from '../assets/images/datePickerImage.png';

export default function Projects() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 120 });
    }, []);

    const projects = [
        {
            id: 1,
            title: 'Modern E-Commerce Electronics Store',
            description: 'A fully responsive and visually engaging e-commerce website designed for electronic products. Built using HTML, CSS, and JavaScript with smooth GSAP animations. Features a dynamic product grid, interactive UI, and seamless performance across all devices.',
            image: rjElectronicsImage,
            tags: ['HTML', 'CSS', 'JavaScript', 'Gsap', 'Framer Motion', 'Responsive'],
            demo: 'https://rj-electronics.vercel.app/',
            code: 'https://github.com/rjsoni107/rj-electronics',
        },
        {
            id: 2,
            title: 'Real-Time Chat & CRM Management System',
            description: 'A real-time chat application integrated with a CRM system, built for team collaboration and customer management. Includes live messaging, notifications, user presence, and real-time updates using Socket.io. Designed for scalability and smooth user experience.',
            image: chatSyncImage,
            tags: ['React', 'MongoDB', 'Node.js', 'Socket.io', 'Realtime'],
            demo: 'https://chatsync-crm.onrender.com/login',
            code: 'https://github.com/rjsoni107/CRM_Project_with_NodeJs',
        },
        {
            id: 3,
            title: 'Personal Portfolio Website',
            description: 'A personal portfolio website showcasing my projects, skills, and contact details. Designed with modern UI, smooth animations, and a fully responsive layout to deliver a clean and professional online presence.',
            image: rjSoniPortfolioImage,
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
            demo: 'https://rjsoni.vercel.app/',
            code: 'https://github.com/rjsoni107/rjsoni',
        },
        {
            id: 4,
            title: "Date Range Picker Library",
            description: "A customizable date range picker built in vanilla JavaScript, allowing users to select a date range with ease. This library provides a simple and flexible way to integrate a date range selection feature into your web applications.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: datePickerImage,
            demo: "https://date-range-picker-three.vercel.app/",
            code: "https://github.com/rjsoni107/DateRangePicker"
        },
        {
            id: 5,
            title: 'Dynamic Popup Library',
            description: 'A customizable popup management system designed to show animated status messages such as success, error, and confirmation alerts. Built with pure JavaScript, featuring smooth animations and reusable components.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: popupImage,
            demo: 'https://dynamicpopuphandler.vercel.app/',
            code: 'https://github.com/rjsoni107/popup-handler',
        },
        {
            id: 6,
            title: 'Real-Time Analog Clock Application',
            description: 'A real-time analog clock application built with HTML, CSS, and JavaScript. Features smooth animations, a responsive layout, and accurate time display.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: clockImage,
            demo: 'https://clock-git-project.vercel.app/',
            code: 'https://github.com/rjsoni107/Clock_Git_Project',
        },

    ];

    // helper for mouse parallax / tilt — sets CSS variables on card element
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top; // y position within the element.
        const px = (x / rect.width - 0.5) * 2; // -1 .. 1
        const py = (y / rect.height - 0.5) * 2; // -1 .. 1

        // rotate limits
        const rotateY = px * 8; // horizontal movement -> rotateY
        const rotateX = -py * 8; // vertical movement -> rotateX (invert)

        card.style.setProperty('--rx', `${rotateX}deg`);
        card.style.setProperty('--ry', `${rotateY}deg`);

        // sheen position (0..100)
        card.style.setProperty('--sx', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--sy', `${(y / rect.height) * 100}%`);
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.setProperty('--rx', `0deg`);
        card.style.setProperty('--ry', `0deg`);
        card.style.setProperty('--sx', `50%`);
        card.style.setProperty('--sy', `50%`);
    };

    return (
        <section id="projects" className="relative py-24 bg-gradient-to-b from-[#05040a] to-[#071026] text-white overflow-hidden">

            {/* Particles (decorative) */}
            <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-500/10 blur-3xl opacity-90 pointer-events-none" />
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/10 blur-3xl opacity-90 pointer-events-none" />

            {/* Inline styles for card effects (kept in component for portability) */}
            <style>{`
                .project-card { 
                    transform: perspective(900px) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));
                    transition: transform 0.12s ease-out, box-shadow 0.2s ease;
                }
                .project-card::before {
                    content: "";
                    position: absolute; inset: 0; border-radius: 1rem;
                    padding: 1px; /* creates border effect */
                    background: linear-gradient(120deg, rgba(99,102,241,0.12), rgba(124,58,237,0.08));
                    -webkit-mask: linear-gradient(#fff,#fff) content-box, linear-gradient(#fff,#fff);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                }
                .sheen {
                    position: absolute; inset: 0; pointer-events: none; border-radius: 1rem; overflow: hidden;
                }
                .sheen::after {
                    content: ""; position: absolute; left: var(--sx, 50%); top: var(--sy, 50%); transform: translate(-50%, -50%) rotate(25deg);
                    width: 220%; height: 120%; background: radial-gradient(ellipse at center, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 15%, rgba(255,255,255,0) 40%);
                    mix-blend-mode: overlay; filter: blur(14px); opacity: 0.85; transition: left 0.12s, top 0.12s;
                }
                /* neon tag animations */
                .neon-tag { background: linear-gradient(90deg, rgba(99,102,241,0.12), rgba(124,58,237,0.12)); border: 1px solid rgba(124,58,237,0.18); color: #eae6ff; }
                .project-grid { grid-auto-rows: 1fr; }
                @keyframes floatSoft { 0%{transform: translateY(0)}50%{transform: translateY(-8px)}100%{transform: translateY(0)} }
                .float-soft { animation: floatSoft 6s ease-in-out infinite; }
            `}
            </style>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-blue-400 to-purple-400 drop-shadow-md">
                        Featured Projects
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mt-3">Selected works — interactive, high-performance and production-ready.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 project-grid">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            className="relative project-card rounded-2xl bg-white/3 border border-white/6 overflow-hidden shadow-xl hover:shadow-2xl"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            data-aos="zoom-in"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            viewport={{ once: true }}
                            style={{ transformStyle: 'preserve-3d', '--rx': '0deg', '--ry': '0deg', '--sx': '50%', '--sy': '50%' }}
                        >
                            {/* Card media / placeholder */}
                            <div className="h-44 bg-gradient-to-br from-white/6 to-white/3 flex items-center justify-center">
                                <div className="w-3/4 h-32 rounded-lg bg-gradient-to-r from-emerald-400/10 to-purple-400/10 border border-white/8 flex items-center justify-center text-sm text-gray-200">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Sheen overlay */}
                            <div className="sheen" />

                            {/* Card content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((t, i) => (
                                        <span key={i} className="neon-tag text-xs px-3 py-1 rounded-full backdrop-blur-sm">{t}</span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-400/10 border border-emerald-400/20 hover:scale-[1.02] transition">
                                        <FaExternalLinkAlt /> <span>Demo</span>
                                    </a>}

                                    {project.code && <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-full bg-white/5 border border-white/8 hover:bg-white/6 transition">
                                        <FaGithub /> <span>Code</span>
                                    </a>}
                                </div>

                                {/* subtle floating decorative orb */}
                                <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full blur-3xl ${idx % 2 === 0 ? 'bg-emerald-400/20' : 'bg-purple-400/20'} float-soft pointer-events-none`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
