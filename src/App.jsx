import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

// Import components
import Footer from './components/Footer';

// Import sections
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
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
                        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl flex items-center justify-center z-40 hover:shadow-2xl transition-all duration-300 group"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp className="text-xl group-hover:animate-bounce" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App
