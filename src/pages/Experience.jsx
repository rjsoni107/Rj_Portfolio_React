import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    FaBriefcase,
    FaGraduationCap,
    FaExternalLinkAlt,
    FaGithub,
    FaCode,
} from "react-icons/fa";

export default function Experience() {
    const [activeTab, setActiveTab] = useState("work");

    useEffect(() => {
        AOS.init({ duration: 900, once: true, offset: 120 });
    }, []);

    const workExperience = [
        {
            id: 1,
            title: "Senior Web Developer",
            company: "Tech Solutions Inc.",
            period: "2021 - Present",
            description:
                "Led team in building scalable web apps using React & Node.js. Improved performance by 40%.",
            tags: ["React", "Node.js", "MongoDB", "AWS"],
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "Digital Creations",
            period: "2019 - 2021",
            description:
                "Built responsive UI and implemented pixel‑perfect designs with modern JS tools.",
            tags: ["JavaScript", "React", "Redux", "SASS"],
        },
    ];

    const education = [
        {
            id: 1,
            degree: "Master of Computer Applications",
            institution: "University of Technology",
            period: "2015 - 2017",
            description: "Specialized in Web Technologies & software engineering.",
        },
    ];

    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description:
                "A scalable full‑stack e‑commerce solution with auth, cart & payments.",
            image: "/assets/project1.jpg",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            demo: "#",
            code: "#",
        },
    ];

    return (
        <section id="experience" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <h2 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        Experience
                    </h2>
                    <p className="text-gray-400 text-lg mt-2">My Professional Journey</p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-6 mb-12" data-aos="zoom-in">
                    {[{ key: "work", icon: <FaBriefcase />, label: "Work" },
                    { key: "education", icon: <FaGraduationCap />, label: "Education" },
                    { key: "projects", icon: <FaCode />, label: "Projects" }].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex items-center gap-2 px-6 py-2 rounded-full border backdrop-blur-xl transition-all duration-300 text-sm
                ${activeTab === tab.key
                                    ? "bg-blue-600 border-blue-500 shadow-lg shadow-blue-500/30"
                                    : "bg-white/5 border-white/10 hover:bg-white/10"
                                }`}
                        >
                            <span className="text-lg">{tab.icon}</span> {tab.label}
                        </button>
                    ))}
                </div>

                {/* Work */}
                {activeTab === "work" && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {workExperience.map((exp) => (
                            <div
                                key={exp.id}
                                data-aos="fade-up"
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl hover:shadow-xl hover:shadow-blue-500/10 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-2 text-blue-400 text-2xl">
                                    <FaBriefcase />
                                    <span className="text-sm text-gray-400">{exp.period}</span>
                                </div>
                                <h3 className="text-xl font-semibold">{exp.title}</h3>
                                <h4 className="text-gray-400 mb-3">{exp.company}</h4>
                                <p className="text-gray-300">{exp.description}</p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {exp.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* Education */}
                {activeTab === "education" && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {education.map((edu) => (
                            <div
                                key={edu.id}
                                data-aos="fade-up"
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl hover:shadow-xl hover:shadow-emerald-500/10 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-2 text-emerald-400 text-2xl">
                                    <FaGraduationCap />
                                    <span className="text-sm text-gray-400">{edu.period}</span>
                                </div>
                                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                <h4 className="text-gray-400 mb-3">{edu.institution}</h4>
                                <p className="text-gray-300">{edu.description}</p>
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* Projects */}
                {activeTab === "projects" && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                whileHover={{ y: -8 }}
                                data-aos="zoom-in"
                                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-xl hover:shadow-xl hover:shadow-purple-500/10 transition-all"
                            >
                                <div className="relative group h-40 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                                    />

                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all">
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            className="flex items-center gap-2 text-white bg-blue-600 px-3 py-1 rounded"
                                        >
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            className="flex items-center gap-2 text-white bg-gray-700 px-3 py-1 rounded"
                                        >
                                            <FaGithub /> Code
                                        </a>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                    <p className="text-gray-300 text-sm">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}


