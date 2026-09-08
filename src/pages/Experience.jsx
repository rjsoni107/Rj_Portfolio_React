import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBriefcase, FaGraduationCap, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import schoolDashboardImage from '../assets/images/schoolDashboard.png';
import remitzDashboardImage from '../assets/images/remitzDashboard.png';
import exPayLoginImage from '../assets/images/exPayLogin.png';
import fanozDashboardImage from '../assets/images/fanozDashboard.png';
import dmtDashboardImage from '../assets/images/dmtDashboard.png';
import letzpeDashboardImage from '../assets/images/letzpeDashboard.png';
import birsaImage from '../assets/images/birsaImage.png';

export default function Experience() {
    const [activeTab, setActiveTab] = useState("work");

    useEffect(() => {
        AOS.init({ duration: 900, once: true, offset: 120 });
    }, []);

    const workExperience = [
        {
            id: 1,
            title: "Frontend Developer Intern",
            company: "Letzpay Solution Private Limited",
            period: "July 2022 - January 2023",
            description: "Worked as a Frontend Developer Intern in a Payment Gateway company. Assisted in developing and maintaining CRM modules using HTML, CSS, JavaScript, and jQuery. Collaborated with senior developers to implement UI components, dashboards, and basic API integrations. Gained hands-on experience in real-time fintech projects and version control using Git.",
            tags: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Git", "CRM Systems", "Payment Gateway", "Fintech"],
        },
        {
            id: 2,
            title: "Software Engineer (Frontend)",
            company: "Letzpay Solution Private Limited",
            period: "January 2023 - Present",
            description: "Currently working as a Software Engineer with a strong focus on Frontend Development. Designing and developing scalable CRM systems for payment gateway platforms. Working closely with product, design, and backend teams to build dashboards, reporting modules, user management, payouts, nodal transfer, and transaction routing features. Actively involved in performance optimization and reusable component development using React.",
            tags: ["React.js", "JavaScript", "React Router", "Redux Toolkit", "jQuery", "HTML", "CSS", "Tailwind", "Bootstrap", "REST APIs", "Node.js", "Git"],
        },
    ];

    const education = [
        {
            id: 1,
            degree: "Advance Certificate in Computer Application (ACCA)",
            institution: "AFCA Computer Center, Hisar",
            period: "June 2019 - December 2019",
            description: "Gained strong foundation in computer programming, database management, and software applications.",
        },
        {
            id: 2,
            degree: "Bachelor of Arts (B.A.)",
            institution: "Govt College Barwala, Kurukshetra University",
            period: "2016 - 2019",
            description: "Completed Bachelor of Arts with graduation from Kurukshetra University.",
        },
        {
            id: 3,
            degree: "Computer Diploma (Basic)",
            institution: "Govt College Barwala, Hisar",
            period: "July 2016 - July 2017",
            description: "Learned basic computer concepts, operating systems, and office productivity tools.",
        },
        {
            id: 4,
            degree: "12th (H.B.S.E Board)",
            institution: "J.D. Sr. Sec. School, Hisar",
            period: "2015 - 2016",
            description: "Completed 12th standard from Haryana Board of School Education.",
        },
    ];

    const projects = [
        {
            id: 1,
            title: "Letzpe Payment Gateway CRM",
            description: "Developed and enhanced a comprehensive CRM system for a payment gateway platform. Worked on dashboards, reporting, user management, payouts, nodal transfer, and transaction routing. Supported multiple user roles like admin, subadmin, merchant, and end-users.",
            image: letzpeDashboardImage,
            tags: ["HTML", "CSS", "JavaScript", "jQuery", "Payment Gateway", "CRM"],
            demo: "https://www.letzpe.com/crm/jsp/index",
        },
        {
            id: 2,
            title: "Multi-Tier E-Governance CRM & Public Works Management System",
            description: "An enterprise-grade CRM and e-governance platform designed to streamline administrative workflows across multi-level government bodies (State to Panchayat). 5-Tier Hierarchical Dashboard (State, District, Block, Panchayat, Mukhiya)",
            image: birsaImage,
            tags: ['React.js', 'Redux Toolkit', 'MUI', 'Bootstrap', 'i18next', 'REST APIs'],
            // demo: "https://www.letzpe.com/crm/jsp/index",
        },
        {
            id: 2,
            title: "Remitz – International Money Transfer Platform",
            description: "Developed a modern web interface for an international remittance and forex platform. Implemented send money abroad, buy/sell forex, real-time currency conversion. Focused on clean UI, and user-friendly transaction experience for cross-border payments.",
            image: remitzDashboardImage,
            tags: ["Fintech", "Money Transfer", "Forex", "React.js", "Tailwind CSS", "Responsive UI", "Payment Flow"],
            demo: "https://www.remitz.in/",
        },
        // {
        //     id: 3,
        //     title: "Ex2Pay Payment Gateway CRM",
        //     description: "Designed and developed responsive web pages using React.js. Integrated payment processing functionalities and optimized website performance. Built reusable and modular components for scalability.",
        //     image: exPayLoginImage,
        //     tags: ["HTML", "CSS", "JavaScript", "jQuery", "Payment Gateway", "CRM"],
        //     // demo: "https://www.ex2pay.com/crm/jsp/login",
        // },
        {
            id: 4,
            title: "School Fee Management System (Saral Fee)",
            description: "Developed a fee management system supporting multiple user roles like Super Admin, School Admin, Teacher, Student, and Parent. Integrated secure payment gateways and automated fee reminders.",
            image: schoolDashboardImage,
            tags: ["HTML", "CSS", "JavaScript", "Payments", "Role Management", "Bootstrap"],
            // demo: "https://liveschool.saralfee.com/school/login",
        },
        {
            id: 5,
            title: "Domestic Money Transfer (DMT)",
            description: "Worked on Domestic Money Transfer platform supporting multiple user roles. Ensured secure and reliable money transfers with efficient transaction management.",
            image: dmtDashboardImage,
            tags: ["Payment Gateway", "CRM", "Transactions", "Finance", "Bootstrap"],
            // demo: "https://dmt.letzpe.com/crm/jsp/index",
        },
        {
            id: 6,
            title: "Fanoz Admin Dashboard – Deposit & Payout System",
            description: "Designed and developed a role-based fintech admin dashboard to manage deposits, payouts, customers, and fund transfers. Implemented analytics cards, date-wise filters, interactive charts, and structured navigation for invoices, bills, users, and customers.",
            image: fanozDashboardImage,
            tags: ["React", "Fintech", "Admin Dashboard", "CRM", "Payment System", "Analytics", "Responsive UI"],
            // demo: "#",
        }
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
                    { key: "projects", icon: <FaCode />, label: "Key Projects" }].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex items-center gap-2 px-5 py-2 rounded-full border backdrop-blur-xl transition-all duration-300 text-sm
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
                                <h3 className="text-xl font-semibold text-emerald-500">{exp.title}</h3>
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
                                <h3 className="text-xl font-semibold text-emerald-500">{edu.degree}</h3>
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

                                    {project.demo && <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all">
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            className="flex items-center gap-2 text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 hover:text-white transition-all"
                                        >
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                    </div>
                                    }
                                </div>

                                <div className="p-5">
                                    <h3 className="text-xl font-semibold mb-1 text-emerald-500">{project.title}</h3>
                                    <p className="text-gray-300 text-sm">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-500/30"
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


