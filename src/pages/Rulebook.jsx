import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, User, MapPin, Calendar, AlertCircle, Phone, BookOpen, Download, ExternalLink } from 'lucide-react';
import { eventsData } from '../data/eventsData';
import Button from '../components/Button';

const Rulebook = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const event = eventsData.find((e) => e.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!event) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-dark-bg text-white">
                <h1 className="text-4xl font-orbitron mb-4">Rulebook Not Found</h1>
                <Button onClick={() => navigate('/')}>Return Home</Button>
            </div>
        );
    }

    // Fallback if no specific rulebook structure exists, modify existing simple rules
    const rulebook = event.rulebook || {
        venue: 'Gulzar Group of Institutions',
        generalRules: event.rules || [],
        sections: [],
        coordinators: { teachers: [], students: [] }
    };

    return (
        <div className="min-h-screen bg-dark-bg text-white pt-24 pb-20">
            {/* Navigation */}
            <div className="container mx-auto px-6 mb-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Link to="/" className="hover:text-neon-blue transition-colors">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/#explore" className="hover:text-neon-blue transition-colors">Events</Link>
                    <span className="mx-2">/</span>
                    <Link to={`/events/${slug}`} className="hover:text-neon-blue transition-colors">{event.title}</Link>
                    <span className="mx-2">/</span>
                    <span className="text-white">Rulebook</span>
                </div>
                <Link to={`/events/${slug}`} className="inline-flex items-center text-gray-400 hover:text-white transition-colors group">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Event
                </Link>
            </div>

            {/* Header */}
            <div className="container mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-8 md:p-12 rounded-3xl border border-${event.color}/30 bg-gradient-to-br from-gray-900 via-gray-900 to-${event.color}/10 relative overflow-hidden`}
                >
                    <div className="relative z-10">
                        <div className="flex items-center mb-4">
                            <BookOpen size={32} className={`text-${event.color} mr-4`} />
                            <h1 className="text-3xl md:text-5xl font-orbitron font-bold">
                                {event.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">RULEBOOK</span>
                            </h1>
                        </div>

                        <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-300 mt-6">
                            <div className="flex items-center">
                                <Calendar className="mr-2 text-neon-blue" size={18} />
                                <span>20-21 Feb 2026</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="mr-2 text-neon-green" size={18} />
                                <span>{rulebook.venue} {rulebook.gameLocation ? `• ${rulebook.gameLocation}` : ''}</span>
                            </div>
                            <div className="flex items-center">
                                <User className="mr-2 text-neon-purple" size={18} />
                                <span>{rulebook.registrationType || 'Online'} Registration</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">

                {/* Rules Column */}
                <div className="lg:col-span-3 space-y-12">

                    {/* General Rules */}
                    {rulebook.generalRules && rulebook.generalRules.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-orbitron font-bold mb-6 text-white border-b border-white/10 pb-4">
                                SECTION 1: GENERAL RULES
                            </h2>
                            <ul className="space-y-4 bg-white/5 p-8 rounded-2xl border border-white/5">
                                {rulebook.generalRules.map((rule, idx) => (
                                    <li key={idx} className="flex items-start text-gray-300 leading-relaxed">
                                        <AlertCircle size={18} className={`mr-3 mt-1 text-${event.color} shrink-0`} />
                                        <span>{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Specific Sections (Game wise or Round wise) */}
                    {rulebook.sections && rulebook.sections.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-orbitron font-bold mb-8 text-white border-b border-white/10 pb-4">
                                SECTION 2: {slug === 'games' ? 'GAME-WISE RULES' : 'EVENT DETAILS'}
                            </h2>
                            <div className="space-y-8">
                                {rulebook.sections.map((section, idx) => (
                                    <div key={idx} className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-colors">
                                        <h3 className={`text-xl font-bold mb-4 text-${event.color} font-orbitron`}>
                                            {idx + 1}. {section.title}
                                        </h3>

                                        {section.location && (
                                            <p className="mb-4 text-sm text-gray-400 flex items-center">
                                                <MapPin size={14} className="mr-2" />
                                                <strong className="text-gray-300 mr-2">Location:</strong> {section.location}
                                            </p>
                                        )}

                                        {section.format && section.format.length > 0 && (
                                            <div className="mb-4">
                                                <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Format</h4>
                                                <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm pl-2">
                                                    {section.format.map((fmt, i) => (
                                                        <li key={i}>{fmt}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <div className="mb-4">
                                            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">Rules</h4>
                                            <ul className="space-y-2">
                                                {section.rules.map((r, i) => (
                                                    <li key={i} className="flex items-start text-gray-300 text-sm">
                                                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-1.5 mr-3 shrink-0" />
                                                        {r}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {section.prizes && section.prizes.length > 0 && (
                                            <div className="mt-6 pt-4 border-t border-white/10">
                                                <h4 className="font-bold text-neon-yellow text-sm uppercase tracking-wider mb-2">Winning & Prizes</h4>
                                                <ul className="space-y-1">
                                                    {section.prizes.map((p, i) => (
                                                        <li key={i} className="text-sm text-gray-300">🏆 {p}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar: Coordinators & Actions */}
                <div className="space-y-8">
                    <div className="sticky top-24 space-y-8">
                        {/* Coordinators */}
                        {(rulebook.coordinators?.teachers?.length > 0 || rulebook.coordinators?.students?.length > 0) && (
                            <div className="p-6 rounded-2xl border border-white/10 bg-black/40">
                                <h3 className="font-orbitron font-bold text-lg mb-6 border-b border-white/10 pb-2">
                                    SECTION 3: COORDINATORS
                                </h3>

                                {rulebook.coordinators.teachers.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-xs font-bold text-neon-blue uppercase tracking-widest mb-3">Faculty Coordinators</h4>
                                        <ul className="space-y-3">
                                            {rulebook.coordinators.teachers.map((c, i) => (
                                                <li key={i} className="text-sm">
                                                    <div className="font-bold text-white">{c.name}</div>
                                                    <a href={`tel:${c.phone}`} className="text-gray-400 hover:text-white flex items-center mt-1">
                                                        <Phone size={12} className="mr-2" /> {c.phone}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {rulebook.coordinators.students.length > 0 && (
                                    <div>
                                        <h4 className="text-xs font-bold text-neon-green uppercase tracking-widest mb-3">Student Coordinators</h4>
                                        <ul className="space-y-3">
                                            {rulebook.coordinators.students.map((c, i) => (
                                                <li key={i} className="text-sm">
                                                    <div className="font-bold text-white">{c.name}</div>
                                                    {c.phone && (
                                                        <a href={`tel:${c.phone}`} className="text-gray-400 hover:text-white flex items-center mt-1">
                                                            <Phone size={12} className="mr-2" /> {c.phone}
                                                        </a>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-black/80 text-center">
                            <h3 className="font-bold text-white mb-2">Have Questions?</h3>
                            <p className="text-sm text-gray-400 mb-4">Contact our coordinators or reach out via email.</p>
                            <a href="mailto:info@ggi.ac.in" className="text-neon-blue hover:text-white text-sm font-bold underline">
                                info@ggi.ac.in
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Universal Rulebook Download Section */}
            <div className="container mx-auto px-6 mt-12 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 rounded-3xl border border-neon-blue/30 bg-white/5 backdrop-blur-md relative overflow-hidden text-center"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center mb-6 border border-neon-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                            <Download size={32} className="text-neon-blue" />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-2">
                            Download Complete Rulebooks
                        </h2>

                        <p className="text-gray-300 mb-8 max-w-2xl text-lg">
                            Access the official ROBOMANIA AI 2026 rulebooks for all events from one place.
                        </p>

                        <a
                            href="https://drive.google.com/drive/folders/1aXowevRiFumE-pLpn7jgJWB_DVk5fF1H?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <button className="px-8 py-4 rounded-xl bg-neon-blue/10 hover:bg-neon-blue/20 border border-neon-blue/50 hover:border-neon-blue text-neon-blue hover:text-white transition-all duration-300 font-bold uppercase tracking-wider flex items-center shadow-[0_0_20px_rgba(0,243,255,0.1)] hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]">
                                <span className="mr-3">RULEBOOK DRIVE</span>
                                <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>

                        <p className="text-gray-500 text-xs mt-6 max-w-md">
                            This drive contains all official rulebooks issued by Gulzar Group of Institutions for ROBOMANIA AI 2026.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Rulebook;
