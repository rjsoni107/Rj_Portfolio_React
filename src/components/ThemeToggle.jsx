import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = "" }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={toggleTheme}
            className={`relative p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden ${
                isDark
                    ? 'bg-slate-800/80 border-slate-700 text-amber-300 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]'
                    : 'bg-white border-slate-200 text-indigo-600 hover:border-indigo-400/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)]'
            } ${className}`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <motion.div
                key={theme}
                initial={{ y: isDark ? 15 : -15, opacity: 0, rotate: isDark ? 45 : -45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: isDark ? -15 : 15, opacity: 0, rotate: isDark ? -45 : 45 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex items-center justify-center"
            >
                {isDark ? (
                    <FaSun className="text-lg text-amber-300" />
                ) : (
                    <FaMoon className="text-lg text-indigo-600" />
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
