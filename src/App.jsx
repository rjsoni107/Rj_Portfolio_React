import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

// Import components
import Footer from './components/Footer';

// Import sections
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Experience = React.lazy(() => import('./pages/Experience'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));
import './assets/js/global.js';

function App() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Handle scroll to show/hide scroll to top button
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            easing: "ease-in-out", // smoother easing
            once: false, // trigger only once
            offset: window.innerWidth < 768 ? 100 : 80,
        });

    }, []);

    return (
        <div className="min-h-screen bg-[#05070e] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white antialiased">
            <main>
                <Home />
                <About />
                <Services />
                <Experience />
                <Projects />
                <Contact />
            </main>

            <Footer />

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] flex items-center justify-center z-40 transition-all duration-300 group cursor-pointer border border-emerald-400/40"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp className="text-base group-hover:-translate-y-0.5 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
