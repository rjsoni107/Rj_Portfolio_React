// import React from "react";
// import Heading from "../components/Heading";
// import { FaPhoneAlt, FaDownload } from "react-icons/fa";
// import aboutImage from "../assets/images/about.webp";
// import { resumeUrl } from "../assets/js/global";

// const About = () => {
//     return (
//         <section
//             id="about"
//             className="bg-[#f9fbff] dark:bg-[#0c111c] py-20 text-gray-800 dark:text-gray-300 relative overflow-hidden"
//         >
//             <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12">
//                 {/* === Left Image === */}
//                 <div
//                     data-aos="zoom-in"
//                     data-aos-duration="1000"
//                     data-aos-delay="50"
//                     className="flex-1 flex justify-center lg:justify-start"
//                 >
//                     <img
//                         src={aboutImage}
//                         alt="About Appointer"
//                         className="rounded-2xl max-w-sm sm:max-w-md lg:max-w-lg object-cover"
//                     />
//                 </div>

//                 {/* === Right Content === */}
//                 <div
//                     data-aos="fade-left"
//                     data-aos-duration="1000"
//                     data-aos-delay="50"
//                     className="flex-1 space-y-6 text-center lg:text-left"
//                 >
//                     <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">
//                         About <span className="text-blue-600 dark:text-blue-400">Myself</span>
//                     </h2>
//                     {/* <Heading title="About my self" subtitle=" Who am I" /> */}

//                     <p className="text-gray-600 dark:text-gray-200 text-md leading-relaxed first-letter-big">
//                         Passionate Front-End Developer with 3.5 years of experience in a Payment Gateway company, specialising in Web Development and
//                         optimising landing pages. Proficient in ReactJS, HTML, CSS, JavaScript and jQuery.
//                         Throughout my career as a front-end developer, I have prioritised
//                         the creation of scalable and well-documented code. I enjoy working
//                         collaboratively, but can also run projects on my own.
//                     </p>

//                     <p className="text-gray-600 dark:text-gray-200 text-md leading-relaxed">
//                         In my role at Letzpay Solution Private Limited, I've contributed significantly to web development projects,
//                         collaborating with design and back-end teams to create reusable
//                         code and ensure smooth functionality. My skills also extend to API
//                         integration, Bootstrap and responsive web design.
//                     </p>

//                     {/* === CTA Button === */}
//                     <div className="flex flex-wrap gap-4 pt-4">

//                         <a
//                             href="#contact"
//                             className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:text-white hover:bg-blue-300 dark:hover:bg-blue-600 transition-all duration-300"
//                         >
//                             <FaPhoneAlt className="text-lg" />
//                             Contact Me
//                         </a>
//                         <a
//                             href={resumeUrl}
//                             download
//                             target="_blank"
//                             className="inline-flex items-center gap-2 bg-emerald-500 dark:bg-emerald-500 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:text-white hover:bg-emerald-300 dark:hover:bg-emerald-600 transition-all duration-300"
//                         >
//                             <FaDownload className="text-lg" />
//                             Download CV
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </section>

//     );
// };

// export default About;


import React, { useEffect } from 'react';
import Heading from '../components/Heading';
import { FaPhoneAlt, FaDownload } from 'react-icons/fa';
import aboutImage from '../assets/images/about.webp';
import { resumeUrl } from '../assets/js/global';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 120 });
    }, []);

    return (
        <section
            id="about"
            className="relative py-24 bg-gradient-to-b from-[#05040a] to-[#071026] text-white overflow-hidden"
        >
            {/* Floating neon particles */}
            <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/20 to-blue-500/10 blur-3xl opacity-80 pointer-events-none" />
            <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/10 blur-3xl opacity-80 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Image with 3D parallax */}
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="flex-1 flex justify-center lg:justify-start perspective-1000 hover:rotate-y-0 hover:rotate-x-0 transform-style-preserve"
                >
                    <img
                        src={aboutImage}
                        alt="About"
                        className="rounded-2xl max-w-sm sm:max-w-md lg:max-w-lg object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Right Glass Card */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="relative flex-1 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 space-y-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                        About <span className="text-white">Myself</span>
                    </h2>
                    <p className="text-gray-300 text-md leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:text-emerald-400">
                        Passionate Front-End Developer with 3.5 years of experience in a Payment Gateway company, specialising in Web Development and optimising landing pages. Proficient in ReactJS, HTML, CSS, JavaScript and jQuery. Throughout my career, I have prioritised creating scalable and well-documented code. I enjoy working collaboratively, but can also run projects independently.
                    </p>
                    <p className="text-gray-300 text-md leading-relaxed">
                        At Letzpay Solution Private Limited, I've contributed significantly to web development projects, collaborating with design and back-end teams to create reusable code and ensure smooth functionality. My skills also extend to API integration, Bootstrap, and responsive web design.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-400 px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            <FaPhoneAlt className="text-lg" /> Contact Me
                        </a>
                        <a
                            href={resumeUrl}
                            download
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-400 px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            <FaDownload className="text-lg" /> Download CV
                        </a>
                    </div>

                    {/* Neon glow border pulse */}
                    <div className="absolute inset-0 rounded-3xl border border-emerald-400/20 pointer-events-none animate-pulse-slow"></div>
                </div>
            </div>

            {/* Custom animation for pulse */}
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

export default About;