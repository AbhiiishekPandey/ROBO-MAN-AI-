import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Mouse position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring physics for the follower
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Check for touch device/mobile
        const isTouchDevice = () => {
            return (('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0) ||
                (navigator.msMaxTouchPoints > 0));
        };

        if (isTouchDevice()) return;

        setIsVisible(true);
        document.body.style.cursor = 'none';

        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('interactive') ||
                target.closest('.interactive');

            setIsHovered(!!isInteractive);
        };

        // Hide cursor when leaving window
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Primary Dot */}
            <motion.div
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                className="absolute w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff]"
            />

            {/* Follower Ring */}
            <motion.div
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    opacity: 1, // Always visible
                    borderWidth: isHovered ? '2px' : '1px',
                    borderColor: isHovered ? 'rgba(0, 243, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
                }}
                transition={{ duration: 0.2 }}
                className="absolute w-8 h-8 border border-white/30 rounded-full backdrop-blur-[1px]"
            >
                {/* Inner glow effect on hover */}
                <motion.div
                    animate={{ opacity: isHovered ? 0.2 : 0 }}
                    className="absolute inset-0 bg-neon-blue rounded-full blur-md"
                />
            </motion.div>
        </div>
    );
};

export default Cursor;
