import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBriefcase, FaGraduationCap, FaExternalLinkAlt, FaCode, FaCalendarAlt, FaBuilding, FaCheck } from "react-icons/fa";
import schoolDashboardImage from '../assets/images/schoolDashboard.png';
import remitzDashboardImage from '../assets/images/remitzDashboard.png';
import fanozDashboardImage from '../assets/images/fanozDashboard.png';
import dmtDashboardImage from '../assets/images/dmtDashboard.png';
import letzpeDashboardImage from '../assets/images/letzpeDashboard.png';
import birsaImage from '../assets/images/bsksmImage.png';
import exPayLoginImage from '../assets/images/exPayLogin.png';
import letzpeBridgeImage from '../assets/images/letzpeBridge.png';

export default function Experience() {
    const [activeTab, setActiveTab] = useState("work");

    useEffect(() => {
        AOS.init({ duration: 900, once: true, offset: 100 });
    }, []);

    const workExperience = [
        {
            id: 1,
            role: "Software Engineer (Frontend)",
            company: "Letzpay Solution Private Limited",
            period: "January 2023 - Present",
            type: "Full-Time",
            location: "Noida / Delhi NCR",
            description: "Currently engineering scalable front-end architecture for high-volume Payment Gateway and Fintech platforms. Leading the design and implementation of responsive CRM dashboards, automated payout engines, merchant onboarding, transaction routing, and real-time settlement modules using React.",
            achievements: [
                "Built and maintained high-security merchant CRM modules with role-based access control.",
                "Optimized bundle performance, reducing dashboard initial load time by 35%.",
                "Integrated real-time payment status webhooks and RESTful APIs with seamless Redux state management."
            ],
            tags: ["React.js", "Redux Toolkit", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Fintech", "Payment Gateways", "CRM Systems", "Git"],
        },
        {
            id: 2,
            role: "Frontend Developer Intern",
            company: "Letzpay Solution Private Limited",
            period: "July 2022 - January 2023",
            type: "Internship",
            location: "Noida / Delhi NCR",
            description: "Assisted senior developers in building and maintaining merchant-facing web modules. Developed reusable UI components, responsive layout fixes, and integrated basic API endpoints for transaction logging and reporting.",
            achievements: [
                "Developed 10+ responsive dashboard UI components using JavaScript and Bootstrap.",
                "Collaborated on cross-browser testing and legacy code refactoring."
            ],
            tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Git", "Payment Flow"],
        },
    ];

    const education = [
        {
            id: 1,
            degree: "Advance Certificate in Computer Application (ACCA)",
            institution: "AFCA Computer Center, Hisar",
            period: "June 2019 - December 2019",
            description: "Deep dive into core programming foundations, database design, algorithms, and software architecture basics.",
        },
        {
            id: 2,
            degree: "Bachelor of Arts (B.A.)",
            institution: "Govt College Barwala, Kurukshetra University",
            period: "2016 - 2019",
            description: "Completed graduation with focus on analytical reasoning, communication, and humanities.",
        },
        {
            id: 3,
            degree: "Computer Diploma (Basic Computing & Office Tools)",
            institution: "Govt College Barwala, Hisar",
            period: "July 2016 - July 2017",
            description: "Hands-on foundation in computer fundamentals, operating systems, and productivity suites.",
        },
        {
            id: 4,
            degree: "Higher Secondary (12th H.B.S.E Board)",
            institution: "J.D. Sr. Sec. School, Hisar",
            period: "2015 - 2016",
            description: "Completed 12th standard with distinction.",
        },
    ];

    // const keyProjects = [
    //     {
    //         id: 1,
    //         title: "Letzpe Payment Gateway CRM",
    //         description: "Enterprise CRM system for merchant transactions, nodal transfers, settlement tracking, and multi-tier user permissions.",
    //         image: letzpeDashboardImage,
    //         tags: ["React.js", "Payment Gateway", "CRM", "JavaScript", "REST APIs"],
    //         demo: "https://www.letzpe.com/crm/jsp/index",
    //     },
    //     {
    //         id: 2,
    //         title: "BSKSM – Multi-Tier E-Governance CRM & Public Works System",
    //         description: "Government of Jharkhand — 5-Tier Administrative Dashboard Built a bilingual, data-driven hierarchical dashboard covering State, District, Block, Panchayat, and Mukhiya levels, with granular analytics and role-based insights for efficient governance and monitoring.",
    //         image: birsaImage,
    //         tags: ['React.js', 'Redux Toolkit', 'MUI', 'REST APIs', 'i18next'],
    //     },
    //     {
    //         id: 3,
    //         title: "Remitz – International Money Transfer & Forex Platform",
    //         description: "Cross-border payment platform with live forex currency conversion, clean KYC flow, and lightning-fast transaction checkouts.",
    //         image: remitzDashboardImage,
    //         tags: ["Fintech", "Forex", "React.js", "Tailwind CSS", "Responsive UI"],
    //         demo: "https://www.remitz.in/",
    //     },
    //     {
    //         id: 4,
    //         title: "School Fee Management System (Saral Fee)",
    //         description: "Automated fee collection and reconciliation portal with multi-role dashboards for admins, teachers, and parents.",
    //         image: schoolDashboardImage,
    //         tags: ["JavaScript", "Payments", "Role Management", "Bootstrap"],
    //     },
    //     {
    //         id: 5,
    //         title: "Domestic Money Transfer (DMT) Engine",
    //         description: "High-security domestic remittance module with instant beneficiary validation and real-time transaction receipts.",
    //         image: dmtDashboardImage,
    //         tags: ["Payment Gateway", "CRM", "Transactions", "Fintech"],
    //     },
    //     {
    //         id: 6,
    //         title: "Fanoz Admin Dashboard – Deposit & Payout System",
    //         description: "Fintech analytics dashboard with interactive revenue charts, transaction filters, and automated invoice generators.",
    //         image: fanozDashboardImage,
    //         tags: ["React", "Analytics", "CRM", "Payment System"],
    //     },
    //     {
    //         id: 3,
    //         title: "Ex2Pay Payment Gateway CRM",
    //         description: "Designed and developed responsive web pages using React.js. Integrated payment processing functionalities and optimized website performance. Built reusable and modular components for scalability.",
    //         image: exPayLoginImage,
    //         tags: ["HTML", "CSS", "JavaScript", "jQuery", "Payment Gateway", "CRM"],
    //         // demo: "https://www.ex2pay.com/crm/jsp/login",
    //     },
    // ];

//     const keyProjects = [
//     {
//         id: 1,
//         title: "Letzpe Payment Gateway CRM",
//         description:
//             "Enterprise-grade CRM for managing merchant transactions, nodal transfers, settlements, and multi-level user permissions with streamlined payment operations.",
//         image: letzpeDashboardImage,
//         tags: ["React.js", "Payment Gateway", "CRM", "JavaScript", "REST APIs"],
//         demo: "https://www.letzpe.com/crm/jsp/index",
//     },

//     {
//         id: 2,
//         title: "BSKSM – Multi-Tier E-Governance CRM & Public Works System",
//         description:
//             "Government of Jharkhand’s bilingual 5-tier e-governance platform covering State, District, Block, Panchayat, and Mukhiya levels, with granular analytics, role-based access, and data-driven monitoring.",
//         image: birsaImage,
//         tags: ["React.js", "Redux Toolkit", "MUI", "REST APIs", "i18next"],
//     },

//     {
//         id: 3,
//         title: "Remitz – International Money Transfer & Forex Platform",
//         description:
//             "Cross-border money transfer platform featuring live forex conversion, streamlined KYC workflows, beneficiary management, and fast, secure transaction processing.",
//         image: remitzDashboardImage,
//         tags: ["Fintech", "Forex", "React.js", "Tailwind CSS", "Responsive UI"],
//         demo: "https://www.remitz.in/",
//     },

//     {
//         id: 4,
//         title: "School Fee Management System (Saral Fee)",
//         description:
//             "Digital fee management platform for schools with automated fee collection, payment reconciliation, and dedicated dashboards for administrators, teachers, and parents.",
//         image: schoolDashboardImage,
//         tags: ["JavaScript", "Payments", "Role Management", "Bootstrap"],
//     },

//     {
//         id: 5,
//         title: "Domestic Money Transfer (DMT) Engine",
//         description:
//             "Secure domestic remittance system supporting instant beneficiary validation, transaction processing, real-time status tracking, and automated transaction receipts.",
//         image: dmtDashboardImage,
//         tags: ["Payment Gateway", "CRM", "Transactions", "Fintech"],
//     },

//     {
//         id: 6,
//         title: "Fanoz Admin Dashboard – Deposit & Payout System",
//         description:
//             "Fintech administration dashboard with real-time transaction insights, interactive revenue analytics, advanced filtering, and automated invoice generation.",
//         image: fanozDashboardImage,
//         tags: ["React", "Analytics", "CRM", "Payment System"],
//     },

//     {
//         id: 7,
//         title: "Ex2Pay Payment Gateway CRM",
//         description:
//             "Responsive payment gateway CRM built with reusable React components, integrated payment processing workflows, and performance-focused UI architecture for scalable web applications.",
//         image: exPayLoginImage,
//         tags: ["HTML", "CSS", "JavaScript", "jQuery", "Payment Gateway", "CRM"],
//         // demo: "https://www.ex2pay.com/crm/jsp/login",
//     },
// ];


const keyProjects = [
    {
        id: 1,
        title: "Letzpe Payment Gateway CRM",
        description:
            "Enterprise-grade CRM platform designed to manage merchant transactions, nodal transfers, settlement tracking, and multi-level user access with secure and efficient payment operations.",
        image: letzpeDashboardImage,
        tags: ["React.js", "Payment Gateway", "CRM", "JavaScript", "REST APIs"],
        demo: "https://www.letzpe.com/crm/jsp/index",
    },

    {
        id: 2,
        title: "BSKSM – Multi-Tier E-Governance (ERP) Portal & Public Works System",
        description:
            "Bilingual 5-tier e-governance platform for the Government of Jharkhand, covering State, District, Block, Panchayat, and Mukhiya levels with granular analytics and role-based access.",
        image: birsaImage,
        tags: ["React.js", "Redux Toolkit", "MUI", "REST APIs", "i18next"],
    },

    {
        id: 3,
        title: "Letzpe Bridge – Digital Remittance Management Platform",
        description:
            "Letzpe Bridge is a modern React-based remittance management platform for secure money transfers from Australia to India, China, and the Philippines, featuring KYC verification, beneficiary management, exchange rates, transaction tracking, and reporting.",
        image: letzpeBridgeImage,
        tags: ["Fintech", "Forex", "React.js", "Tailwind CSS", "Responsive UI"],
        demo: "https://www.remitz.in/",
    },

    {
        id: 4,
        title: "School Fee Management System (Saral Fee)",
        description:
            "School fee management platform for automated fee collection, payment reconciliation, and multi-role access for administrators, teachers, and parents.",
        image: schoolDashboardImage,
        tags: ["JavaScript", "Payments", "Role Management", "Bootstrap"],
    },

    {
        id: 5,
        title: "Domestic Money Transfer (DMT) Engine",
        description:
            "Domestic remittance platform with beneficiary validation, transaction processing, real-time status tracking, and automated transaction receipts.",
        image: dmtDashboardImage,
        tags: ["Payment Gateway", "CRM", "Transactions", "Fintech"],
    },

    {
        id: 6,
        title: "Remitz – International Money Transfer & Forex Platform",
        description:
            "Cross-border money transfer platform with live forex conversion, streamlined KYC workflows, and fast, secure transaction processing.",
        image: remitzDashboardImage,
        tags: ["Fintech", "Forex", "React.js", "Tailwind CSS", "Responsive UI"],
        demo: "https://www.remitz.in/",
    }, 
    {
        id: 7,
        title: "Fanoz Admin Dashboard – Deposit & Payout System",
        description:
            "Fintech admin dashboard featuring transaction analytics, interactive revenue charts, advanced filtering, and automated invoice generation.",
        image: fanozDashboardImage,
        tags: ["React", "Analytics", "CRM", "Payment System"],
    },

    {
        id: 8,
        title: "Ex2Pay Payment Gateway CRM",
        description:
            "Responsive payment gateway CRM with integrated payment processing, reusable UI components, and performance-optimized web pages.",
        image: exPayLoginImage,
        tags: ["HTML", "CSS", "JavaScript", "jQuery", "Payment Gateway", "CRM"],
        // demo: "https://www.ex2pay.com/crm/jsp/login",
    },
];
    return (
        <section id="experience" className="relative py-20 bg-[#05070e] text-white overflow-hidden">
            {/* Ambient Lights */}
            <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-10 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Heading */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-xs sm:text-sm font-semibold tracking-widest text-emerald-400 uppercase font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                        Career Trajectory
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 tracking-tight">
                        <span className="text-slate-200">Experience &</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Education</span>
                    </h2>
                    <p className="text-slate-400 text-base max-w-xl mx-auto mt-3">
                        Proven track record of building production-grade fintech solutions, scalable CRMs, and high-performance web systems.
                    </p>
                </div>

                {/* Modern Pill Tabs */}
                <div className="flex justify-center gap-3 sm:gap-4 mb-14" data-aos="fade-up">
                    {[
                        { key: "work", icon: <FaBriefcase />, label: "Work Experience" },
                        { key: "education", icon: <FaGraduationCap />, label: "Education" },
                        { key: "projects", icon: <FaCode />, label: "Fintech Works" }
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex items-center gap-2.5 px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md cursor-pointer
                                ${activeTab === tab.key
                                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_25px_rgba(16,185,129,0.35)] border border-emerald-400/50 scale-105"
                                    : "bg-white/[0.04] text-slate-300 border border-white/10 hover:bg-white/[0.08] hover:text-white"
                                }`}
                        >
                            <span className="text-sm sm:text-base">{tab.icon}</span>
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Work Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === "work" && (
                        <motion.div
                            key="work"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-8 max-w-4xl mx-auto"
                        >
                            {workExperience.map((exp) => (
                                <div
                                    key={exp.id}
                                    data-aos="fade-up"
                                    className="relative p-7 sm:p-9 rounded-3xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 overflow-hidden group"
                                >
                                    {/* Left highlight strip */}
                                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-l-3xl" />

                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm sm:text-base mt-1">
                                                <FaBuilding className="text-xs" />
                                                <span>{exp.company}</span>
                                                <span className="text-white/30">•</span>
                                                <span className="text-slate-400 text-xs">{exp.location}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-300 self-start sm:self-auto">
                                            <FaCalendarAlt className="text-emerald-400 text-xs" />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>

                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    {/* Bullet Achievements */}
                                    <div className="space-y-2 mb-6">
                                        {exp.achievements.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300/90">
                                                <FaCheck className="text-emerald-400 text-xs mt-1 shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                                        {exp.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-mono"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Education Tab Content */}
                    {activeTab === "education" && (
                        <motion.div
                            key="education"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                        >
                            {education.map((edu) => (
                                <div
                                    key={edu.id}
                                    data-aos="fade-up"
                                    className="p-7 rounded-3xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-xl">
                                                <FaGraduationCap />
                                            </div>
                                            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-400">
                                                {edu.period}
                                            </span>
                                        </div>

                                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-cyan-400 font-medium text-sm mb-3">
                                            {edu.institution}
                                        </p>
                                        <p className="text-slate-300 text-sm leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Projects Tab Content */}
                    {activeTab === "projects" && (
                        <motion.div
                            key="projects"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
                        >
                            {keyProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border-2 border-emerald-500/40 hover:border-emerald-500 overflow-hidden backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2"
                                >
                                    <div className="relative h-48 overflow-hidden bg-black/40">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#05070e] via-transparent to-transparent opacity-80" />

                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="absolute top-3 right-3 p-2.5 rounded-full bg-black/70 border border-white/20 text-white hover:text-emerald-400 hover:border-emerald-400 backdrop-blur-md transition-all duration-200"
                                                aria-label="View Demo"
                                            >
                                                <FaExternalLinkAlt className="text-xs" />
                                            </a>
                                        )}
                                    </div>

                                    <div className="p-6 flex flex-col justify-between flex-1">
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}



