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
            <div className="absolute -top-1 left-0 w-full h-6 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-500 opacity-70 blur-xl"></div>

            {/* 🟦 Gradient Animated Border */}
            <div className="absolute inset-0 border border-transparent rounded-xl animate-borderGlow"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Footer Reveal Animation */}
                <div data-aos="fade-up" className="grid md:grid-cols-3 gap-10 text-white/80">
                    {/* About */}
                    <div>
                        {/* <h3 className="text-2xl font-semibold text-white mb-3">Raj Soni</h3> */}
                        <img src={headerLogo} alt="logo" srcSet="" className="w-40 h-14" />
                        <p className="mb-4 text-white/70">A passionate web developer dedicated to creating beautiful, responsive and polished web experiences.</p>

                        {/* Social Icons - Neon Orbit */}
                        <div className="flex gap-6 mt-4">
                            {socialLinks.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.url}
                                    className="relative group text-xl p-2 rounded-full bg-black backdrop-blur-xl border border-white/20 hover:border-cyan-400 transition-all"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-white/70">
                            {navLinks.map((link, i) => (
                                <li key={i}>
                                    <a href={`#${link}`} onClick={(e) => { e.preventDefault(); handleNavClick(link); }} className="hover:text-cyan-400 text-white transition">
                                        {link.charAt(0).toUpperCase() + link.slice(1)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-3">Newsletter</h4>
                        <p className="text-white/70 mb-4">Subscribe for latest updates.</p>

                        <form className="flex items-center gap-3">
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white text-white placeholder-white/40 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.6)] transition"
                                placeholder="Your email address"
                                required
                            />
                            <button className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg shadow-lg hover:opacity-90 transition">
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
