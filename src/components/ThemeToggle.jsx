import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="relative p-2 rounded-full border border-gray-200 dark:border-white/10 glass hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
        >
            <div className="relative z-10 w-6 h-6 flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={false}
                    animate={{ y: isDark ? 0 : -30, opacity: isDark ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute"
                >
                    <Moon size={20} className="text-neon-blue" />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{ y: isDark ? 30 : 0, opacity: isDark ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute"
                >
                    <Sun size={20} className="text-yellow-500" />
                </motion.div>
            </div>
        </button>
    );
};

export default ThemeToggle;
