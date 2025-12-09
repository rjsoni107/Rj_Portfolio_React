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
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
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

                {/* Right: Text */}
                <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-5 text-white">
                    <span className="inline-block bg-emerald-600/90 px-6 py-1.5 sm:px-8 sm:py-2 rounded-full animate-pulse">HI!</span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        <span className="text-blue-800 neon-text">I am </span>
                        <span className="text-emerald-800 neon-text">Kuldeep</span>
                    </h1>

                    <h2 className="text-lg sm:text-xl md:text-2xl text-gray-800  font-medium  min-h-[40px] sm:min-h-[48px]  flex items-center  justify-center lg:justify-start">
                        <TypeAnimation sequence={sequence} wrapper="span" speed={30} style={{ display: "inline-block" }} repeat={Infinity} />
                    </h2>

                    {/* Button */}
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

                            {/* Glow effect – mobile par hide, bigger screens par show */}
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
