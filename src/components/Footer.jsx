import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const navLinks = ['home', 'about', 'services', 'experience', 'projects', 'contact'];
    const handleNavClick = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
            window.scrollTo({ top: el.offsetTop - 65, behavior: 'smooth' });
        }
    };

    return (
        <footer className="relative overflow-hidden pt-20 pb-10 bg-black backdrop-blur-xl border-t border-white/10 footer-wrapper">

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
            <div className="absolute -top-1 left-0 w-full h-10 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-500 opacity-70 blur-xl"></div>

            {/* 🟦 Gradient Animated Border */}
            <div className="absolute inset-0 border border-transparent rounded-xl animate-borderGlow"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Footer Reveal Animation */}
                <div data-aos="fade-up" className="grid md:grid-cols-3 gap-10 text-white/80">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-3">Raj Soni</h3>
                        <p className="mb-4 text-white/70">A passionate web developer dedicated to creating beautiful, responsive and polished web experiences.</p>

                        {/* Social Icons - Neon Orbit */}
                        <div className="flex gap-4 mt-4">
                            {[{ icon: <FaGithub />, url: '#' }, { icon: <FaLinkedin />, url: '#' }, { icon: <FaTwitter />, url: '#' }, { icon: <FaEnvelope />, url: '#' }].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.url}
                                    className="relative group text-xl p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:border-cyan-400 transition-all"
                                >
                                    <span className="absolute inset-0 rounded-full border border-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-orbit"></span>
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
                                    <a href={`#${link}`} onClick={(e) => { e.preventDefault(); handleNavClick(link); }} className="hover:text-cyan-400 transition">
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
                                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-white/40 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.6)] transition"
                                placeholder="Your email address"
                                required
                            />
                            <button className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg shadow-lg hover:opacity-90 transition">
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
