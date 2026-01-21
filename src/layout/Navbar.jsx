import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../components/Button';

import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Explore', href: '#explore' },
        { name: 'Experience', href: '#experience' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-2' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Left: Logo */}
                <div className="flex-shrink-0 flex items-center">
                    <a href="#" className="flex flex-col group">
                        <h1 className="font-orbitron font-bold text-2xl tracking-[0.2em] text-white group-hover:text-neon-blue transition-colors">
                            ROBOMAN<span className="text-neon-blue">AI</span>
                        </h1>
                        <span className="text-[10px] tracking-[0.4em] text-gray-500 uppercase">2026</span>
                    </a>
                </div>

                {/* Center: Navigation Links */}
                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="font-orbitron text-xs font-bold text-gray-300 hover:text-white transition-all uppercase tracking-widest relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-neon-blue group-hover:w-full transition-all duration-300" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Actions */}
                <div className="hidden md:flex items-center space-x-6">

                    <Link to="/register">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 border border-white/20 hover:border-neon-blue rounded text-sm font-orbitron tracking-wider text-white hover:text-neon-blue transition-colors uppercase"
                        >
                            Register
                        </motion.button>
                    </Link>


                </div>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center space-x-4">

                    <button
                        className="text-white hover:text-neon-blue transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center space-y-6 py-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="font-orbitron text-lg text-white hover:text-neon-blue"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button onClick={() => setIsMobileMenuOpen(false)}>Register Now</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
