import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import headerLogo from "../assets/images/logo.png";
import '../css/footer.css';

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const navLinks = ['home', 'about', 'services', 'experience', 'projects'];
    const handleNavClick = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
            window.scrollTo({ top: el.offsetTop - 65, behavior: 'smooth' });
        }
    };

    const socialLinks = [
        {
            icon: <FaGithub color="#ffffff" size={25} />,
            url: "https://github.com/rjsoni107"
        },
        {
            icon: <FaLinkedin color="#0A66C2" size={25} />,
            url: "https://www.linkedin.com/in/kuldeep-soni-560b5b246"
        },
        {
            icon: (
                <svg width="26" height="26" viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fdf497" />
                            <stop offset="5%" stopColor="#fdf497" />
                            <stop offset="45%" stopColor="#fd5949" />
                            <stop offset="60%" stopColor="#d6249f" />
                            <stop offset="90%" stopColor="#285AEB" />
                        </linearGradient>
                    </defs>

                    <path
                        fill="url(#instaGradient)"
                        d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                    />
                </svg>
            ),
            url: "https://www.instagram.com/raj.soni.rj?igsh=NDUycXVrYTVscTdm"
        },
        {
            icon: <FaWhatsapp color="#25D366" size={25} />,
            url: "https://wa.me/919524000107"
        },
        {
            icon: <FaFacebook color="#559fff" size={25} />,
            url: "https://www.facebook.com/share/1BVBcybbH7/"
        }
    ];


    return (
        <footer className="relative overflow-hidden pt-20 pb-8 bg-black backdrop-blur-xl border-t border-white/10 footer-wrapper">

            {/* 🔥 Floating Neon Particles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {[...Array(25)].map((_, i) => (
                    <span
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-float"
                        style={{
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animationDuration: 3 + Math.random() * 4 + 's',
                            animationDelay: Math.random() * 5 + 's'
                        }}
                    ></span>
                ))}
            </div>

            {/* 🌊 Neon Wave Separator */}
            {/* <div className="absolute -top-1 left-0 w-full h-6 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-500 opacity-70 blur-xl"></div> */}

            {/* 🟦 Gradient Animated Border */}
            <div className="absolute inset-0 border border-transparent rounded-xl animate-borderGlow"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Footer Reveal Animation */}
                <div data-aos="fade-up" className="grid md:grid-cols-3 gap-10 text-white/80">
                    {/* About */}
                    <div className="flex flex-col justify-between space-y-4 max-w-md">
                        <div>
                            {/* Logo */}
                            <div className="inline-block mb-3">
                                <img
                                    src={headerLogo}
                                    alt="Raj Soni Logo"
                                    className="h-16 sm:h-20 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-transform duration-300 hover:scale-[1.02]"
                                />
                            </div>

                            {/* Subheading */}
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                A passionate web developer dedicated to creating beautiful, responsive and polished web experiences.
                            </p>
                        </div>

                        {/* Social Icons - Modern Glassmorphic Cards */}
                        <div className="pt-2">
                            <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold mb-3 block">
                                Connect With Me
                            </span>
                            <div className="flex items-center gap-3 flex-wrap">
                                {socialLinks.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:bg-white/[0.1] hover:border-emerald-400/50 shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center shrink-0"
                                    >
                                        <div className="transition-transform duration-300 group-hover:scale-110">
                                            {item.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col justify-start">
                        <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold mb-4 block">
                            Quick Links
                        </span>
                        <ul className="space-y-3">
                            {navLinks.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={`#${link}`}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link); }}
                                        className="group inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 text-sm sm:text-base font-medium transition-all duration-300"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/40 group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {link.charAt(0).toUpperCase() + link.slice(1)}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col justify-start">
                        <span className="text-xs uppercase tracking-widest font-mono text-emerald-400 font-semibold mb-4 block">
                            Newsletter
                        </span>
                        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                            Subscribe for latest updates.
                        </p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="relative flex items-center bg-white/[0.04] border border-white/10 backdrop-blur-xl rounded-2xl p-1.5 focus-within:border-emerald-400/50 focus-within:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
                        >
                            <input
                                type="email"
                                className="w-full bg-transparent px-3.5 py-2 text-white placeholder-slate-400 text-sm focus:outline-none"
                                placeholder="Your email address"
                                required
                            />
                            <button
                                type="submit"
                                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-medium text-sm shadow-md hover:shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shrink-0"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex items-center justify-between text-white/60 border-t border-white/10 pt-6">
                    <p>© {currentYear} Raj Soni • All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
