import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';
import headerLogo from "../assets/images/logo.webp";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
            const sections = ['home', 'about', 'services', 'experience', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 120;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const { offsetTop, offsetHeight } = el;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleNavClick = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
            window.scrollTo({ top: el.offsetTop - 75, behavior: 'smooth' });
            setActiveSection(sectionId);
            setIsMenuOpen(false);
        }
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <header
            className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-[#05070e]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                    className="flex items-center gap-2 z-50 relative group"
                >
                    <img src={headerLogo} alt="Raj Soni Portfolio" className="h-10 sm:h-12 w-auto object-contain drop-shadow-md" />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-1 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                                activeSection === link.id
                                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center">
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-semibold text-xs transition-all duration-200 hover:scale-105"
                    >
                        <FaEnvelope className="text-xs" />
                        <span>Let's Talk</span>
                    </a>
                </div>

                {/* Mobile Hamburger Toggle */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white z-50 relative focus:outline-none"
                    aria-label="Toggle Navigation Menu"
                >
                    {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                </button>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden absolute top-full left-0 right-0 bg-[#05070e]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-6 px-6"
                        >
                            <nav className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                                        className={`py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                                            activeSection === link.id
                                                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold'
                                                : 'text-slate-300 hover:bg-white/5 hover:text-white'
                                        }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;