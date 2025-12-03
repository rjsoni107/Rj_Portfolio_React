// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// const Projects = () => {
//     const projects = [
//         {
//             id: 1,
//             title: 'E-commerce Platform',
//             description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
//             tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
//             demo: '#',
//             code: '#'
//         },
//         {
//             id: 2,
//             title: 'Task Management App',
//             description: 'A collaborative task management application with real-time updates and team collaboration features.',
//             tags: ['React', 'Firebase', 'Material-UI'],
//             demo: '#',
//             code: '#'
//         },
//         {
//             id: 3,
//             title: 'Portfolio Website',
//             description: 'A personal portfolio website to showcase projects, skills, and experience.',
//             tags: ['React', 'Framer Motion', 'Tailwind CSS'],
//             demo: '#',
//             code: '#'
//         },
//     ];

//     return (
//         <div className="container mx-auto px-4">
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="text-center mb-16"
//             >
//                 <h2 className="text-4xl font-bold mb-4">My Projects</h2>
//                 <p className="text-gray-600 max-w-2xl mx-auto">Here are some of my recent projects that showcase my skills and experience.</p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {projects.map((project) => (
//                     <motion.div
//                         key={project.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: project.id * 0.1 }}
//                         viewport={{ once: true }}
//                         className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                     >
//                         <div className="h-48 bg-gray-200"></div>
//                         <div className="p-6">
//                             <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                             <p className="text-gray-600 mb-4">{project.description}</p>
//                             <div className="flex flex-wrap gap-2 mb-4">
//                                 {project.tags.map((tag, index) => (
//                                     <span key={index} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
//                                         {tag}
//                                     </span>
//                                 ))}
//                             </div>
//                             <div className="flex space-x-4">
//                                 <a
//                                     href={project.demo}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
//                                 >
//                                     <FaExternalLinkAlt className="mr-1" /> Demo
//                                 </a>
//                                 <a
//                                     href={project.code}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
//                                 >
//                                     <FaGithub className="mr-1" /> Code
//                                 </a>
//                             </div>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Projects;



import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 120 });
    }, []);

    const projects = [
        {
            id: 1,
            title: 'E-commerce Platform',
            description:
                'A full-stack e-commerce platform with secure auth, product management and Stripe payments.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            demo: '#',
            code: '#',
        },
        {
            id: 2,
            title: 'Task Management App',
            description:
                'Real-time collaborative task app with presence, notifications and offline support.',
            tags: ['React', 'Firebase', 'Realtime'],
            demo: '#',
            code: '#',
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description: 'Personal portfolio showcasing projects, blog and contact with animations.',
            tags: ['React', 'Framer Motion', 'Tailwind'],
            demo: '#',
            code: '#',
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
      `}</style>

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
                                    Project Preview
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
                                    <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-400/10 border border-emerald-400/20 hover:scale-[1.02] transition">
                                        <FaExternalLinkAlt /> <span>Demo</span>
                                    </a>

                                    <a href={project.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-full bg-white/5 border border-white/8 hover:bg-white/6 transition">
                                        <FaGithub /> <span>Code</span>
                                    </a>
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
