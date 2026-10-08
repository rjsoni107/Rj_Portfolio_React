import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy, FaCheck, FaEnvelope } from 'react-icons/fa';

const CopyEmailButton = ({
    email = "rjsoni107@gmail.com",
    variant = "full", // "full", "icon-only", "compact"
    className = ""
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch (err) {
            console.error("Failed to copy email:", err);
        }
    };

    if (variant === "icon-only") {
        return (
            <div className="relative inline-block">
                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={handleCopy}
                    className={`p-2 rounded-xl border transition-all duration-300 flex items-center justify-center cursor-pointer ${copied
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10'
                        } ${className}`}
                    title="Copy email to clipboard"
                    aria-label="Copy email to clipboard"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {copied ? (
                            <motion.span
                                key="check"
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 45 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaCheck className="text-emerald-400 text-sm" />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="copy"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaCopy className="text-sm" />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>

                <AnimatePresence>
                    {copied && (
                        <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.9 }}
                            animate={{ opacity: 1, y: -8, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.9 }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2.5 py-1 text-[11px] font-medium font-mono bg-emerald-600 text-white rounded-lg shadow-lg whitespace-nowrap pointer-events-none z-50"
                        >
                            Copied!
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div className="relative inline-block w-full sm:w-auto">
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCopy}
                className={`group relative flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 cursor-pointer overflow-hidden ${copied
                        ? 'bg-emerald-500/20 border-emerald-400/80 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]'
                        : 'bg-white/[0.04] border-white/10 text-slate-200 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400 shadow-sm'
                    } ${className}`}
                aria-label={`Copy email address ${email}`}
            >
                <div className="flex items-center gap-2.5 min-w-0">
                    <FaEnvelope className={`text-base flex-shrink-0 transition-colors ${copied ? 'text-emerald-400' : 'text-emerald-400'}`} />
                    <span className="font-mono text-xs sm:text-sm truncate select-all">{email}</span>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0 pl-2 border-l border-white/10">
                    <AnimatePresence mode="wait" initial={false}>
                        {copied ? (
                            <motion.div
                                key="copied-text"
                                initial={{ opacity: 0, x: 5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -5 }}
                                className="flex items-center gap-1 text-emerald-400 font-semibold text-xs"
                            >
                                <FaCheck className="text-xs" />
                                <span>Copied!</span>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="copy-text"
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 5 }}
                                className="flex items-center gap-1.5 text-slate-400 group-hover:text-emerald-400 transition-colors text-xs"
                            >
                                <FaCopy className="text-xs" />
                                <span className="hidden sm:inline">Copy</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.button>
        </div>
    );
};

export default CopyEmailButton;
