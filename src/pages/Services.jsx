// import React from "react";
// import { FaCode, FaMobile, FaSearch, FaPalette, FaServer, FaChartLine } from "react-icons/fa";
// import Heading from "../components/Heading";
// import "aos/dist/aos.css";

// const services = [
//     {
//         icon: <FaCode className="text-4xl text-yellow-500 " />,
//         title: "Web Development",
//         desc: "Building responsive and interactive websites using modern web technologies.",
//     },
//     {
//         icon: <FaMobile className="text-4xl text-red-500" />,
//         title: "Mobile Development",
//         desc: "Creating cross-platform mobile applications with React Native.",
//     },
//     {
//         icon: <FaSearch className="text-4xl text-blue-500" />,
//         title: "SEO Optimization",
//         desc: "Improving website visibility and ranking on search engines.",
//     },
//     {
//         icon: <FaPalette className="text-4xl text-green-500" />,
//         title: "UI/UX Design",
//         desc: "Designing beautiful and intuitive user interfaces and experiences.",
//     },
//     {
//         icon: <FaServer className="text-4xl text-pink-500" />,
//         title: "Backend Development",
//         desc: "Building robust and scalable server-side applications.",
//     },
//     {
//         icon: <FaChartLine className="text-4xl text-green-500" />,
//         title: "Digital Marketing",
//         desc: "Strategies to grow your online presence and reach your target audience.",
//     },
// ];
// const Services = () => {

//     return (
//         <section id="services" className="pt-20 pb-10 bg-[#ebf1fe] dark:bg-[#111827] text-center">
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* === Section Heading === */}
//                 <div
//                     data-aos="zoom-in-up"
//                     className="mb-12"
//                     data-aos-delay="100"
//                     data-aos-offset="120"
//                 >
//                     <Heading title="My Services" subtitle="What I Offer" headingClass="text-white" />
//                 </div>

//                 {/* === Services Grid === */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {services.map((service, i) => (
//                         <div
//                             key={i}
//                             data-aos="flip-left"
//                             data-aos-delay={i * 100}
//                             transition={{ type: "spring", stiffness: 200 }}
//                             className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-transparent hover:border-emerald-500 hover:-translate-y-2"
//                         >
//                             <div className="flex flex-col items-center text-center space-y-4">
//                                 <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full">
//                                     {service.icon}
//                                 </div>
//                                 <h3 className="text-xl font-semibold text-blue-400 group-hover:text-emerald-500 transition-colors duration-100">
//                                     {service.title}
//                                 </h3>
//                                 <p className="text-gray-600 dark:text-gray-200 leading-relaxed text-center transition-colors duration-100">{service.desc}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Services;



import React, { useEffect } from 'react';
import { FaCode, FaMobile, FaSearch, FaPalette, FaServer, FaChartLine } from 'react-icons/fa';
import Heading from '../components/Heading';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
    { icon: <FaCode className="text-4xl text-yellow-400" />, title: 'Web Development', desc: 'Building responsive and interactive websites using modern web technologies.' },
    { icon: <FaMobile className="text-4xl text-red-400" />, title: 'Mobile Development', desc: 'Creating cross-platform mobile applications with React Native.' },
    { icon: <FaSearch className="text-4xl text-blue-400" />, title: 'SEO Optimization', desc: 'Improving website visibility and ranking on search engines.' },
    { icon: <FaPalette className="text-4xl text-green-400" />, title: 'UI/UX Design', desc: 'Designing beautiful and intuitive user interfaces and experiences.' },
    { icon: <FaServer className="text-4xl text-pink-400" />, title: 'Backend Development', desc: 'Building robust and scalable server-side applications.' },
    { icon: <FaChartLine className="text-4xl text-purple-400" />, title: 'Digital Marketing', desc: 'Strategies to grow your online presence and reach your target audience.' },
];

const Services = () => {
    useEffect(() => { AOS.init({ duration: 800, once: true, offset: 120 }); }, []);

    return (
        <section id="services" className="relative py-24 bg-gradient-to-b from-[#05040a] to-[#071026] text-white overflow-hidden">
            {/* Floating neon particles */}
            <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-500/10 blur-3xl opacity-80 pointer-events-none" />
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/10 blur-3xl opacity-80 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div data-aos="zoom-in-up" className="mb-12">
                    <Heading title="My Services" subtitle="What I Offer" headingClass="text-white" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div key={i} data-aos="flip-left" data-aos-delay={i * 100} className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            {/* Neon glow pulse border */}
                            <div className="absolute inset-0 rounded-3xl border border-emerald-400/20 pointer-events-none animate-pulse-slow"></div>

                            <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-blue-400 group-hover:text-emerald-500 transition-colors duration-100">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-center transition-colors duration-100">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes pulse-slow {
                    0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.2); }
                    50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.35); }
                }
                .animate-pulse-slow { animation: pulse-slow 2.5s infinite ease-in-out; }
            `}</style>
        </section>
    );
};

export default Services;