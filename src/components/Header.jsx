// import React, { useState, useEffect } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Header = ({ scrollToSection }) => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState('home');

//     useEffect(() => {
//         const handleScroll = () => {
//             // Handle header background on scroll
//             if (window.scrollY > 50) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }

//             // Update active section based on scroll position
//             const sections = ['home', 'about', 'services', 'experience', 'projects', 'contact'];
//             const scrollPosition = window.scrollY + 100;

//             for (const section of sections) {
//                 const element = document.getElementById(section);
//                 if (element) {
//                     const { offsetTop, offsetHeight } = element;
//                     if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//                         setActiveSection(section);
//                         break;
//                     }
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const handleNavClick = (sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             window.scrollTo({
//                 top: element.offsetTop - 80,
//                 behavior: 'smooth',
//             });
//             setActiveSection(sectionId);
//             setIsMenuOpen(false);
//         }
//     };

//     const navLinks = [
//         { id: 'home', name: 'Home' },
//         { id: 'about', name: 'About' },
//         { id: 'services', name: 'Services' },
//         { id: 'experience', name: 'Experience' },
//         { id: 'projects', name: 'Projects' },
//         { id: 'contact', name: 'Contact' },
//     ];

//     return (
//         <header className={`fixed top-0 w-full z-20 transition-all duration-300 ${isScrolled ? 'bg-black opacity-90 shadow-md py-6' : 'bg-black/30 backdrop-blur-sm py-6'}`}>
//             <div className="w-full max-w-7xl mx-auto px-10 flex justify-between items-center">
//                 <a
//                     href="#home"
//                     onClick={(e) => {
//                         e.preventDefault();
//                         handleNavClick('home');
//                     }}
//                     className="text-2xl font-bold text-gray-50"
//                 >
//                     Rj Portfolio
//                 </a>

//                 {/* Mobile menu button */}
//                 <button
//                     onClick={toggleMenu}
//                     className="lg:hidden p-2 text-gray-700 focus:outline-none"
//                     aria-label="Toggle menu"
//                 >
//                     {isMenuOpen ? (
//                         <FaTimes className="w-6 h-6" />
//                     ) : (
//                         <FaBars className="w-6 h-6" />
//                     )}
//                 </button>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden lg:flex space-x-8 items-center">
//                     {navLinks.map((link) => (
//                         <a
//                             key={link.id}
//                             href={`#${link.id}`}
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 handleNavClick(link.id);
//                             }}
//                             className={`font-medium letter-spacing-[2px] transition-colors ${isScrolled ? 'text-gray-50' : 'text-black hover:text-gray-50'} ${activeSection === link.id
//                                 ? 'text-green-500'
//                                 : 'text-white hover:text-green-500'
//                                 }`}
//                         >
//                             {link.name}
//                         </a>
//                     ))}
//                 </nav>

//                 {/* Mobile Navigation */}
//                 <AnimatePresence>
//                     {isMenuOpen && (
//                         <motion.div
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             className="lg:hidden absolute top-16 left-0 right-0 bg-black shadow-lg py-6 px-6"
//                         >
//                             <nav className="flex flex-col space-y-4">
//                                 {navLinks.map((link) => (
//                                     <a
//                                         key={link.id}
//                                         href={`#${link.id}`}
//                                         onClick={(e) => {
//                                             e.preventDefault();
//                                             handleNavClick(link.id);
//                                         }}
//                                         className={`py-2 px-4 rounded-md transition-colors ${activeSection === link.id
//                                             ? 'bg-black text-green-500'
//                                             : 'text-white hover:bg-black'
//                                             }`}
//                                     >
//                                         {link.name}
//                                     </a>
//                                 ))}
//                             </nav>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </div>
//         </header>
//     );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const sections = ['home', 'about', 'services', 'experience', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

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
            window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            setActiveSection(sectionId);
            setIsMenuOpen(false);
        }
    };

    const navLinks = ['home', 'about', 'services', 'experience', 'projects', 'contact'];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 shadow-lg py-4' : 'bg-black/50 backdrop-blur-md py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="text-2xl font-bold text-white z-50 relative">Rj Portfolio</a>

                {/* Desktop */}
                <nav className="hidden lg:flex space-x-8 z-50">
                    {navLinks.map((link) => (
                        <a key={link} href={`#${link}`} onClick={(e) => { e.preventDefault(); handleNavClick(link); }} className={`font-medium transition-colors ${activeSection === link ? 'text-emerald-400' : 'text-white hover:text-emerald-400'}`}>
                            {link.charAt(0).toUpperCase() + link.slice(1)}
                        </a>
                    ))}
                </nav>

                {/* Mobile */}
                <button onClick={toggleMenu} className="lg:hidden p-2 text-white z-50 relative" aria-label="Toggle menu">
                    {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
                </button>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="lg:hidden absolute top-16 left-0 right-0 bg-black/80 shadow-lg py-6 px-6 backdrop-blur-md rounded-b-2xl">
                            <nav className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <a key={link} href={`#${link}`} onClick={(e) => { e.preventDefault(); handleNavClick(link); }} className={`py-2 px-4 rounded-md transition-colors ${activeSection === link ? 'bg-emerald-500/20 text-emerald-400' : 'text-white hover:bg-white/10'}`}>
                                        {link.charAt(0).toUpperCase() + link.slice(1)}
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