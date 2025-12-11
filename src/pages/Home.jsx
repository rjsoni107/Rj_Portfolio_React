import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
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
                <img src={headerBg} alt="Background" className="w-full h-full lg:h-auto object-cover" fetchPriority="high" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Header */}
            <Header />

            {/* Content */}
            <div className="relative z-10 mt-28 mb-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-1 px-16 rounded-3xl backdrop-blur-sm shadow-lg">
                {/* Left: Image */}
                <div className="flex-1 flex justify-center lg:justify-start">
                    <div className="relative group perspective-1000">
                        <img
                            src={heroImg}
                            alt="Raj Soni"
                            className="w-72 xs:w-60 sm:w-72 md:w-80 h-auto rounded-3xl transition-transform duration-500 transform-gpu group-hover:rotate-y-3 group-hover:scale-105"
                            loading="eager"
                            fetchPriority="high"
                        />
                    </div>
                </div>

                {/* Right: Text – new hero copy like screenshot */}
                <div className="flex-2 max-w-xl text-white text-center lg:text-left space-y-5 sm:space-y-4 ">
                    {/* <span className="inline-block bg-emerald-600/90 px-6 py-1.5 sm:px-8 sm:py-2 rounded-full animate-pulse">HI!</span> */}

                    {/* main heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-tight tracking-tight">
                        <span className="block text-gray-800">Building High-Speed</span>
                        <span className="block">
                            <span className="text-emerald-600">Front-End Experiences</span>
                        </span>
                        <span className="block text-gray-800">for Fintech & Beyond</span>
                    </h1>

                    {/* badges */}
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-[13px] sm:text-sm">
                        <span className="rounded-full border border-emerald-400/90 bg-emerald-700 px-4 py-1">
                            3+ years experience
                        </span>
                        <span className="rounded-full border border-blue-400/90 bg-blue-800/80 px-4 py-1">
                            Payment Gateway · Fintech
                        </span>
                    </div>
                    {/* top label */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-black/60 border border-white/90 px-4 py-1 text-[14px] sm:text-xs tracking-[0.2em] mx-auto lg:mx-0">
                        <span className="text-lg">🔥</span>
                        <span className="font-bold text-emerald-500">Kuldeep Soni</span> - Front-end Developer
                        <span className="text-lg">🔥</span>
                    </div>

                    {/* animated specialties */}
                    <div className="text-sm sm:text-base md:text-lg text-slate-100/90 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                        <span className="text-slate-900">Specialised in</span>
                        <TypeAnimation
                            sequence={sequence}
                            wrapper="span"
                            speed={30}
                            style={{ display: "inline-block" }}
                            repeat={Infinity}
                            className="font-semibold text-blue-900"
                        />
                    </div>

                    {/* CTA buttons */}
                    <div className="pt-4 sm:pt-6">
                        <a
                            href={resumeUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                relative inline-flex items-center gap-2
                                rounded-full border-0
                                px-8 py-3 md:px-12
                                font-semibold text-base
                                text-white
                                bg-emerald-600
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
                            <span className="relative flex items-center gap-2">
                                <FaDownload className="text-base sm:text-lg" />
                                <span>Download CV</span>
                            </span>

                            <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-emerald-500 rounded-full blur opacity-75 animate-ping" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Floating neon particles – mobile par band, performance ke liye */}
            <div className="pointer-events-none fixed inset-0 z-0 hidden sm:block">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-800 rounded-full opacity-40 animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Home;
