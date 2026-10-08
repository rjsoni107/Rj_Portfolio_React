import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorGlow = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Spring physics configuration for inner dot (snappy) and outer ring (smooth float)
    const dotSpring = { damping: 35, stiffness: 600, mass: 0.2 };
    const ringSpring = { damping: 25, stiffness: 180, mass: 0.4 };

    const dotX = useSpring(-100, dotSpring);
    const dotY = useSpring(-100, dotSpring);

    const ringX = useSpring(-100, ringSpring);
    const ringY = useSpring(-100, ringSpring);

    useEffect(() => {
        // Disable on touch devices / mobile screens
        if (window.innerWidth < 768 || 'ontouchstart' in window) {
            setIsVisible(false);
            return;
        }

        setIsVisible(true);

        const handleMouseMove = (e) => {
            const { clientX, clientY, target } = e;

            dotX.set(clientX);
            dotY.set(clientY);

            ringX.set(clientX);
            ringY.set(clientY);

            // Check if hovering over interactive elements
            if (target && target.closest) {
                const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover');
                setIsHovered(!!isInteractive);
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [dotX, dotY, ringX, ringY]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
            {/* Subtle Ambient Spotlight */}
            <motion.div
                className="fixed rounded-full blur-[45px] transition-opacity duration-300 pointer-events-none"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(6, 182, 212, 0.03) 60%, transparent 85%)',
                }}
            />

            {/* Crisp Outer Ring */}
            <motion.div
                className={`fixed rounded-full border pointer-events-none transition-all duration-300 ease-out flex items-center justify-center ${
                    isHovered
                        ? 'border-emerald-400/80 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                        : 'border-emerald-400/40 bg-emerald-500/[0.02] shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                }`}
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: isHovered ? '52px' : '36px',
                    height: isHovered ? '52px' : '36px',
                }}
            />

            {/* Sharp Center Dot */}
            <motion.div
                className={`fixed rounded-full bg-emerald-400 pointer-events-none transition-transform duration-200 ${
                    isHovered ? 'scale-150 shadow-[0_0_12px_#10b981]' : 'shadow-[0_0_8px_#10b981]'
                }`}
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: '6px',
                    height: '6px',
                }}
            />
        </div>
    );
};

export default CursorGlow;
