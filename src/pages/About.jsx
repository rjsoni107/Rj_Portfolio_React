import React from 'react';
import { FaPhoneAlt, FaDownload } from 'react-icons/fa';
import aboutImage from '../assets/images/about.webp';
import { resumeUrl } from '../assets/js/global';

const About = () => {
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
                    className="relative flex-1 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
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

                    <div className="flex flex-wrap gap-4 pt-4 justify-center">
                        {/* Contact Me */}
                        <a
                            href="#contact"
                            className="
                                relative inline-flex items-center gap-2
                                rounded-full border-0
                                px-6 py-3 md:px-12
                                font-semibold text-base
                                text-white
                                bg-[#005693]
                                shadow-md
                                outline-none
                                select-none
                                transition-all duration-300
                                hover:scale-110 hover:shadow-xl
                                hover:text-white
                                before:content-['']
                                before:absolute before:top-0 before:left-[4%]
                                before:h-1/2 before:w-[92%]
                                before:rounded-full
                                before:bg-gradient-to-b
                                before:from-white/80 before:to-white/0
                                before:opacity-50
                                before:transition-all before:duration-300
                                "
                        >
                            <FaPhoneAlt className="text-lg" />
                            Contact Me
                        </a>

                        {/* Download CV */}
                        <a
                            href={resumeUrl}
                            download
                            target="_blank"
                            className="
                                relative inline-flex items-center gap-2
                                rounded-full border-0
                                px-6 py-3 md:px-12
                                font-semibold text-base
                                text-white
                                bg-emerald-700
                                shadow-md
                                outline-none
                                select-none
                                transition-all duration-300
                                hover:scale-110 hover:shadow-xl
                                hover:text-white
                                before:content-['']
                                before:absolute before:top-0 before:left-[4%]
                                before:h-1/2 before:w-[92%]
                                before:rounded-full
                                before:bg-gradient-to-b
                                before:from-white/80 before:to-white/0
                                before:opacity-50
                                before:transition-all before:duration-300
                                "
                        >
                            <FaDownload className="text-lg" />
                            Download CV
                        </a>
                    </div>


                    {/* Neon glow border pulse */}
                    <div className="absolute inset-0 rounded-3xl border border-emerald-400/20 pointer-events-none animate-pulse-slow"></div>
                </div>
            </div>
        </section>
    );
};

export default About;