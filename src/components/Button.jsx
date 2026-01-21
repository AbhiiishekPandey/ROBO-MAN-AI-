import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, className, variant = 'primary', ...props }) => {
    const baseStyles = "relative px-6 py-2 font-orbitron font-bold tracking-wider uppercase transition-all duration-300 rounded-sm overflow-hidden group";

    const variants = {
        primary: "text-neon-blue border border-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]",
        secondary: "text-white border border-white/20 hover:border-white/50 hover:bg-white/5",
        glow: "bg-neon-blue text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-neon-blue/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            )}
        </motion.button>
    );
};

export default Button;
