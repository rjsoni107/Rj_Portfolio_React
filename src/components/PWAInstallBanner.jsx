import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaTimes, FaShareAlt, FaPlusSquare } from 'react-icons/fa';

const DISMISS_KEY = 'pwa_install_banner_dismissed_until';
const DISMISS_DURATION_DAYS = 7; // Hide for 7 days if user dismisses banner

const PWAInstallBanner = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showBanner, setShowBanner] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [showIOSInstructions, setShowIOSInstructions] = useState(false);

    useEffect(() => {
        // Check if app is running in standalone mode (already installed & opened as PWA)
        const isStandalone = 
            window.matchMedia('(display-mode: standalone)').matches ||
            window.navigator.standalone ||
            document.referrer.includes('android-app://');

        if (isStandalone) {
            return; // Don't show banner if already installed/standalone
        }

        // Check dismissal preference
        const dismissedUntil = localStorage.getItem(DISMISS_KEY);
        if (dismissedUntil && new Date().getTime() < parseInt(dismissedUntil, 10)) {
            return; // Still in dismissal cooldown
        }

        // Check for iOS
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
        const isSafari = /safari/.test(userAgent) && !/chrome|crios|fxios|edgios/.test(userAgent);

        if (isIOSDevice && isSafari) {
            setIsIOS(true);
            // Delay showing iOS banner slightly for smoother UX
            const timer = setTimeout(() => {
                setShowBanner(true);
            }, 3000);
            return () => clearTimeout(timer);
        }

        // Handle beforeinstallprompt for Android / Desktop Chrome / Edge
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            // Delay showing banner slightly after load
            setTimeout(() => {
                setShowBanner(true);
            }, 2500);
        };

        const handleAppInstalled = () => {
            setShowBanner(false);
            setDeferredPrompt(null);
            console.log('PWA was installed successfully!');
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.addEventListener('appinstalled', handleAppInstalled);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            window.removeEventListener('appinstalled', handleAppInstalled);
        };
    }, []);

    const handleInstallClick = async () => {
        if (isIOS) {
            setShowIOSInstructions(true);
            return;
        }

        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
            setShowBanner(false);
        }
        setDeferredPrompt(null);
    };

    const handleDismiss = () => {
        setShowBanner(false);
        setShowIOSInstructions(false);
        // Save dismissal cooldown (7 days)
        const expiryTime = new Date().getTime() + DISMISS_DURATION_DAYS * 24 * 60 * 60 * 1000;
        localStorage.setItem(DISMISS_KEY, expiryTime.toString());
    };

    if (!showBanner) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 pointer-events-auto"
            >
                <div className="relative overflow-hidden rounded-2xl bg-[#090d16]/95 border border-emerald-500/30 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-xl text-slate-100">
                    {/* Glowing highlight border effect */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60" />

                    <div className="flex items-center gap-3.5">
                        {/* App Icon */}
                        <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-900/40 p-0.5 border border-emerald-500/40 shadow-inner flex items-center justify-center overflow-hidden">
                            <img
                                src="/icon-192x192.png"
                                alt="App Icon"
                                className="w-full h-full object-cover rounded-[10px]"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                            <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center font-bold text-emerald-400 text-lg">
                                RS
                            </div>
                        </div>

                        {/* Title & Description */}
                        <div className="flex-1 min-w-0 pr-6">
                            <div className="flex items-center gap-1.5">
                                <h4 className="text-sm font-semibold text-white tracking-wide truncate">
                                    Install Raj Soni App
                                </h4>
                                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                    PWA
                                </span>
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                                Fast access & offline experience on your home screen.
                            </p>
                        </div>

                        {/* Close button */}
                        <button
                            onClick={handleDismiss}
                            className="absolute top-3 right-3 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800/60 transition-colors cursor-pointer"
                            aria-label="Dismiss banner"
                        >
                            <FaTimes className="text-sm" />
                        </button>
                    </div>

                    {/* iOS Specific Helper Note when toggled */}
                    {showIOSInstructions && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-300 space-y-2 bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-500/20"
                        >
                            <div className="flex items-center gap-2 font-medium text-emerald-400">
                                <FaShareAlt className="text-sm flex-shrink-0" />
                                <span>To install on iPhone / iPad:</span>
                            </div>
                            <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-300 pl-1">
                                <li>Tap the <span className="font-semibold text-white">Share</span> button in Safari's bottom toolbar.</li>
                                <li>Scroll down and tap <span className="font-semibold text-white inline-flex items-center gap-1"><FaPlusSquare className="inline text-emerald-400" /> Add to Home Screen</span>.</li>
                            </ol>
                        </motion.div>
                    )}

                    {/* Action Buttons */}
                    <div className="mt-3.5 flex items-center justify-end gap-2.5">
                        <button
                            onClick={handleDismiss}
                            className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                        >
                            Not now
                        </button>
                        <button
                            onClick={handleInstallClick}
                            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all cursor-pointer font-sans active:scale-95"
                        >
                            <FaDownload className="text-[11px]" />
                            <span>{isIOS ? 'How to Install' : 'Install App'}</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PWAInstallBanner;
