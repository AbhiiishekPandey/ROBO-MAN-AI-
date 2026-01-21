import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroBackground from '../components/HeroBackground';
import Button from '../components/Button';

import ggiLogo from '../assets/ggi-naac-logo.jpg';

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* Content Overlay */}
            <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full pt-16">

                {/* Animated Pill */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="px-6 py-2 rounded-full border border-neon-blue/50 bg-black/30 text-white font-orbitron tracking-[0.2em] text-sm uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                        Prompt the Future
                    </span>
                </motion.div>

                {/* Main Title */}
                <div className="flex flex-col items-center leading-tight mb-6">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl lg:text-[130px] font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_25px_rgba(0,243,255,0.4)] tracking-wide"
                    >
                        ROBOMAN AI
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-6xl md:text-8xl lg:text-[130px] font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600 tracking-wide mt-[-10px] md:mt-[-20px]"
                    >
                        2026
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-400 font-light tracking-widest max-w-2xl mx-auto mb-12 uppercase"
                >
                    Your Imagination, <span className="text-white font-semibold">AI’s Execution</span>
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6"
                >

                    <Link to="/register" className="inline-block">
                        <button className="w-full px-10 py-4 text-lg font-orbitron font-bold uppercase tracking-wider border border-white/20 text-white hover:border-neon-blue hover:text-neon-blue hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:-translate-y-1 transition-all duration-300 bg-transparent">
                            Register Now
                        </button>
                    </Link>
                    <a href="#explore" className="px-10 py-4 text-lg font-orbitron font-bold uppercase tracking-wider border border-white/20 text-white hover:border-neon-blue hover:text-neon-blue hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:-translate-y-1 transition-all duration-300 text-center bg-transparent">
                        Explore Events
                    </a>
                </motion.div>
            </div>

            {/* Vignette & Gradient */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark-bg/50 to-dark-bg pointer-events-none z-0" />
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#050510] to-transparent pointer-events-none z-10" />
        </section>
    );
};

export default Hero;
