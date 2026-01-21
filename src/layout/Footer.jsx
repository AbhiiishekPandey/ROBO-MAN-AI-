import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black/90 pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="font-orbitron font-bold text-3xl mb-4">
                            ROBOMAN<span className="text-neon-blue">AI</span> <span className="text-sm text-gray-500 block mt-1">2026</span>
                        </h2>
                        <p className="text-gray-400 max-w-md mb-6">
                            Empowering the future through Artificial Intelligence and Robotics.
                            Join us for 2 days of innovation, creativity, and technology at Gulzar Group of Institutions.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                {
                                    icon: Instagram,
                                    href: "https://www.instagram.com/ggi_ludhiana?igsh=MXZrMWJnZnZ0d2pvMw==",
                                    label: "Instagram",
                                    classes: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white"
                                },
                                {
                                    icon: Facebook,
                                    href: "https://www.facebook.com/share/1AgJK718YK/?mibextid=wwXIfr",
                                    label: "Facebook",
                                    classes: "hover:bg-blue-600 hover:text-white"
                                },
                                {
                                    icon: Linkedin,
                                    href: "https://www.linkedin.com/company/ggi-gulzar-group-of-institutes/",
                                    label: "LinkedIn",
                                    classes: "hover:bg-blue-700 hover:text-white"
                                }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className={`w-12 h-12 rounded-full glass flex items-center justify-center text-white transition-all duration-300 group ${social.classes} border border-white/10 hover:border-transparent hover:scale-110 shadow-lg`}
                                >
                                    <social.icon size={20} className="transition-transform group-hover:scale-110" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-orbitron font-bold text-lg mb-6 text-neon-purple">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'Explore Events', 'Experience', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-orbitron font-bold text-lg mb-6 text-neon-blue">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start text-gray-400">
                                <MapPin className="w-5 h-5 mr-3 text-neon-blue shrink-0 mt-1" />
                                <span>Gulzar Group of Institutions,<br />G.T. Road, Khanna, Ludhiana,<br />Punjab</span>
                            </li>
                            <li className="flex items-center text-gray-400 group">
                                <Phone className="w-5 h-5 mr-3 text-neon-blue shrink-0 group-hover:text-white transition-colors" />
                                <a href="tel:09914666777" className="hover:text-white transition-colors">09914666777</a>
                            </li>
                            <li className="flex items-center text-gray-400 group">
                                <Mail className="w-5 h-5 mr-3 text-neon-blue shrink-0 group-hover:text-white transition-colors" />
                                <a href="mailto:info@ggi.ac.in" className="hover:text-white transition-colors">info@ggi.ac.in</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2026 ROBOMAN AI. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
