import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Download, ExternalLink, AlertCircle } from 'lucide-react';
import { eventsData } from '../data/eventsData';
import Button from '../components/Button';

const EventDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const event = eventsData.find(e => e.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!event) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-dark-bg text-white">
                <h1 className="text-4xl font-orbitron mb-4">Event Not Found</h1>
                <Button onClick={() => navigate('/')}>Return Home</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark-bg text-white pt-24 pb-20">
            {/* Header / Navigation */}
            <div className="container mx-auto px-6 mb-8">
                <Link to="/#explore" className="inline-flex items-center text-gray-400 hover:text-white transition-colors group">
                    <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Explore
                </Link>
            </div>

            {/* Hero Section */}
            <div className="container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`relative p-8 md:p-16 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${event.gradient}`}
                >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                    <div className="relative z-10">
                        <div className="mb-6 inline-block p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                            {event.icon}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-orbitron font-extrabold mb-4 tracking-wide shadow-black drop-shadow-lg">
                            {event.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-100 font-medium italic opacity-90 mb-6">
                            "{event.tagline}"
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm font-bold tracking-wider uppercase">
                            <div className="flex items-center px-4 py-2 rounded-full bg-black/40 border border-white/10">
                                <Calendar size={16} className="mr-2 text-neon-blue" />
                                <span>20-21 FEB 2026</span>
                            </div>
                            <div className="flex items-center px-4 py-2 rounded-full bg-black/40 border border-white/10">
                                <User size={16} className="mr-2 text-neon-green" />
                                <span>OPEN TO ALL</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Column: Overview & Sub-Events */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Overview */}
                    <section>
                        <h2 className="text-3xl font-orbitron font-bold mb-6 flex items-center">
                            <span className={`w-2 h-8 mr-4 bg-${event.color} rounded-full`}></span>
                            Overview
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5">
                            {event.description}
                        </p>
                    </section>

                    {/* Sub-Events */}
                    <section>
                        <h2 className="text-3xl font-orbitron font-bold mb-8 flex items-center">
                            <span className={`w-2 h-8 mr-4 bg-${event.color} rounded-full`}></span>
                            Sub-Events
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {event.subEvents.map((sub, idx) => (
                                <div key={idx} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                                    <h3 className={`text-xl font-bold mb-2 group-hover:text-${event.color} transition-colors`}>
                                        {sub.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {sub.description || sub.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Rules & Registration */}
                <div className="space-y-8">
                    {/* Registration Card */}
                    <div className="p-8 rounded-3xl border border-neon-blue/30 bg-gradient-to-br from-gray-900 to-gray-800 shadow-[0_0_30px_rgba(0,243,255,0.1)] sticky top-24">
                        <h3 className="text-2xl font-orbitron font-bold mb-6 text-center">Ready to Compete?</h3>

                        {event.registrationLinks ? (
                            <div className="space-y-4">
                                {event.registrationLinks.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full group"
                                    >
                                        <div className="w-full flex items-center justify-center py-4 text-lg font-bold bg-gradient-to-r from-neon-blue to-cyan-400 text-black hover:from-white hover:to-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] rounded-lg transform group-hover:-translate-y-1">
                                            <span className="mr-3 tracking-wider">{link.label}</span>
                                            <ExternalLink size={24} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <a
                                href={event.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full group"
                            >
                                <div className="w-full flex items-center justify-center py-4 text-lg font-bold bg-gradient-to-r from-neon-blue to-cyan-400 text-black hover:from-white hover:to-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] rounded-lg transform group-hover:-translate-y-1">
                                    <span className="mr-3 tracking-wider">Register Now</span>
                                    <ExternalLink size={24} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        )}

                        <p className="text-gray-500 text-xs text-center mt-4 flex items-center justify-center">
                            <AlertCircle size={12} className="mr-1" />
                            Opens Google Form in new tab
                        </p>

                        <div className="my-8 border-t border-white/10" />

                        {event.rules && event.rules.length > 0 && (
                            <>
                                <h4 className="font-bold mb-4 font-orbitron">Rule Book</h4>
                                <ul className="space-y-3 mb-6">
                                    {event.rules.map((rule, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-300">
                                            <span className={`w-1.5 h-1.5 rounded-full bg-${event.color} mt-1.5 mr-2 shrink-0`} />
                                            {rule}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <Link to={`/rulebook/${event.slug}`} className="block w-full">
                            <button className="w-full py-3 rounded-xl border border-white/20 hover:border-white hover:bg-white/5 text-gray-300 hover:text-white transition-all flex items-center justify-center text-sm font-bold uppercase tracking-wider">
                                <Download size={16} className="mr-2" />
                                VIEW RULEBOOK
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
