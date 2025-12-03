// import React from "react";
// import { FaDownload } from "react-icons/fa";
// import { TypeAnimation } from 'react-type-animation';
// import heroImg from "../assets/images/raj.webp";
// import headerBg from "../assets/images/header-bg.webp";
// import { resumeUrl } from "../assets/js/global";
// import Header from "../components/Header";

// const Home = () => {
//     const sequence = ['Software Engineer ', 1500, 'Front-end Developer ', 1500, 'Web Developer ', 1500, 'React Developer ', 1500, 'Freelancer ', 1500, 'Web Designer ', 1500,]
//     return (
//         <section
//             id="home"
//             className="pt-20 relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
//             style={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover', }}
//         >
//             <Header />
//             <div className="w-full max-w-7xl mx-auto bg-black/50 pt-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 relative z-0">

//                 {/* Left: Image */}
//                 <div className="flex-1 flex justify-center">
//                     <div className="relative">
//                         <img src={heroImg} alt="Raj Soni" className="w-full max-w-md h-auto" />
//                     </div>
//                 </div>

//                 {/* Right: Content */}
//                 <div className="flex-1 text-center lg:text-left space-y-5 header-title">
//                     <span className="up inline-block bg-emerald-500 text-white px-8 shadow-lg relative">
//                         HI!
//                     </span>

//                     <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold color-blue-lightest">
//                         I am <span className="text-emerald-400">Kuldeep Soni</span>
//                     </h1>

//                     <h2 className="text-2xl md:text-3xl text-gray-300 font-medium min-h-[42px] md:min-h-[48px] flex items-center justify-center lg:justify-start">
//                         <TypeAnimation
//                             sequence={sequence}
//                             wrapper="span"
//                             speed={30}
//                             style={{ display: 'inline-block' }}
//                             repeat={Infinity}
//                         />
//                     </h2>

//                     <div className="pt-4">
//                         <a
//                             href={resumeUrl}
//                             download
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
//                         >
//                             <FaDownload className="text-xl" /> Download CV
//                         </a>
//                     </div>
//                 </div>


//             </div>
//         </section>
//     );
// };

// export default Home;



import React from "react";
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import heroImg from "../assets/images/raj.webp";
import headerBg from "../assets/images/header-bg.webp";
import { resumeUrl } from "../assets/js/global";
import Header from "../components/Header";

const Home = () => {
    const sequence = ['Software Engineer ', 1500, 'Front-end Developer ', 1500, 'Web Developer ', 1500, 'React Developer ', 1500, 'Freelancer ', 1500, 'Web Designer ', 1500];

    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img src={headerBg} alt="Background" className="w-full object-cover" />
                <div className="absolute inset-0 bg-black/90 "></div>
            </div>


            {/* Header */}
            <Header />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 pt-20">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center lg:justify-start">
                    <div className="relative group perspective-1000">
                        <img src={heroImg} alt="Raj Soni" className="w-full max-w-md h-auto transition-transform duration-500 transform-gpu group-hover:rotate-y-3 group-hover:scale-105" />
                    </div>
                </div>

                {/* Right: Text */}
                <div className="flex-1 text-center lg:text-left space-y-5 text-white">
                    <span className="inline-block bg-emerald-500/80 px-8 py-2 rounded-full font-semibold shadow-lg animate-pulse">
                        HI!
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        <span className="text-blue-400 neon-text">I am </span><span className="text-emerald-400 neon-text">Kuldeep Soni</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 font-medium min-h-[48px] flex items-center justify-center lg:justify-start">
                        <TypeAnimation sequence={sequence} wrapper="span" speed={30} style={{ display: 'inline-block' }} repeat={Infinity} />
                    </h2>

                    <div className="pt-6">
                        <a href={resumeUrl} download target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg neon-button hover:scale-105 transition-transform duration-300">
                            <FaDownload className="text-xl" /> Download CV
                            <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-emerald-500 rounded-full blur opacity-75 animate-ping"></span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Floating neon particles */}
            <div className="pointer-events-none fixed inset-0 z-0">
                {[...Array(30)].map((_, i) => (
                    <div key={i} className="absolute w-2 h-2 bg-blue-800 rounded-full opacity-50 animate-float" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }}></div>
                ))}
            </div>
        </section>
    );
};

export default Home;