import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Music, Mic, Camera, Briefcase, Gamepad2, Code, Cpu } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 1,
        title: 'TECHNOMAN-AI',
        slug: 'technoman-ai',
        icon: <Cpu size={40} className="text-neon-blue" />,
        events: ['Vibe Code Hackathon', 'Circuit Buzz', 'Robo Race', 'Robo Soccer', 'AutoCAD Arena'],
        color: 'from-neon-blue/20 to-blue-900/20'
    },
    {
        id: 2,
        title: 'ARTS AND AI',
        slug: 'arts-and-ai',
        icon: <Music size={40} className="text-neon-purple" />,
        events: ['Gen AI Music Generation', 'Open Live Stage'],
        color: 'from-neon-purple/20 to-purple-900/20'
    },
    {
        id: 3,
        title: 'CULTURAL MELA',
        slug: 'cultural-mela',
        icon: <Mic size={40} className="text-pink-500" />,
        events: ['Dance', 'Singing', 'Band Performance', 'Stand-up Comedy'],
        color: 'from-pink-500/20 to-red-900/20'
    },
    {
        id: 4,
        title: 'CRETOMAN-AI',
        slug: 'cretoman-ai',
        icon: <Camera size={40} className="text-yellow-400" />,
        events: ['Reel Making', 'Short Film', 'On-the-Spot Photography'],
        color: 'from-yellow-400/20 to-orange-900/20'
    },
    {
        id: 5,
        title: 'BUSINESSMAN-AI',
        slug: 'businessman-ai',
        icon: <Briefcase size={40} className="text-neon-green" />,
        events: ['The Genai Prompt-Off', 'Brand-Wash', 'Deadpool Market Analysis', 'Marketing Mania', 'Business Escape Room'],
        color: 'from-neon-green/20 to-green-900/20'
    },
    {
        id: 6,
        title: 'GAMES',
        slug: 'games',
        icon: <Gamepad2 size={40} className="text-red-500" />,
        events: ['BGMI Contest', 'Chess', 'Badminton', 'Table Tennis'],
        color: 'from-red-500/20 to-red-900/20'
    }
];

const EventCard = ({ category, index }) => {
    return (
        <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            className="h-full"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative h-full p-8 rounded-2xl border border-white/10 overflow-hidden group hover:border-white/30 transition-all duration-500 bg-gradient-to-b from-[#0f1014] to-[#1a1b26] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
            >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none mix-blend-overlay`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-6 p-4 bg-black/40 border border-white/5 rounded-xl w-fit group-hover:scale-110 group-hover:bg-black/60 transition-all duration-300 shadow-lg">
                        {category.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-orbitron font-extrabold mb-4 text-white tracking-wide drop-shadow-md group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                        {category.title}
                    </h3>

                    {/* Events List */}
                    <ul className="space-y-3 mb-8 flex-grow">
                        {category.events.map((event, i) => (
                            <li key={i} className="text-base text-gray-300 font-medium flex items-start leading-relaxed group-hover:text-white transition-colors">
                                <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-3 mt-2 shadow-[0_0_5px_#00f3ff]" />
                                {event}
                            </li>
                        ))}
                    </ul>

                    {/* Button */}
                    <Link to={`/events/${category.slug}`} className="w-full mt-auto">
                        <button className="w-full py-3 border border-white/20 rounded-lg text-white font-bold uppercase text-xs tracking-[0.2em] group-hover:bg-white group-hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 transform group-hover:-translate-y-1">
                            View Details
                        </button>
                    </Link>
                </div>
            </motion.div>
        </Tilt>
    );
};

const Explore = () => {
    return (
        <section id="explore" className="relative py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                        Explore <span className="text-neon-blue">Events</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Dive into the world of technology, creativity, and competition.
                        From coding wars to cultural beats, we have something for everyone.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <EventCard key={category.id} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Explore;
