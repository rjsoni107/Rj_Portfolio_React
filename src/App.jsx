import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

// Import components
import Footer from './components/Footer';
import PWAInstallBanner from './components/PWAInstallBanner';

// Above-the-fold section loaded immediately for fast initial rendering & LCP
import Home from './pages/Home';

// Below-the-fold sections lazy-loaded to reduce initial main-thread JavaScript execution time
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

import './assets/js/global.js';

function App() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Handle scroll to show/hide scroll to top button with passive listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        // Defer AOS initialization to idle time to eliminate forced reflow & main-thread blocking
        const initAos = () => {
            AOS.init({
                duration: 800,
                easing: "ease-in-out",
                once: true,
                disableMutationObserver: true,
                offset: window.innerWidth < 768 ? 50 : 80,
            });
        };

        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            window.requestIdleCallback(initAos);
        } else {
            setTimeout(initAos, 200);
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#05070e] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white antialiased">
            <main>
                <Home />
                <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center text-emerald-400 text-sm font-mono">Loading sections...</div>}>
                    <About />
                    <Services />
                    <Experience />
                    <Projects />
                    <Contact />
                </Suspense>
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

            {/* PWA Install Banner */}
            <PWAInstallBanner />
        </div>
    );
}

export default App;
