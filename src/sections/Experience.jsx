import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Music, Cpu, Utensils } from 'lucide-react';

const experiences = [
    {
        id: 1,
        title: 'Laser Show',
        description: 'A spectacular display of lights and lasers synchronized to futuristic beats.',
        icon: <Zap size={60} />,
        color: 'bg-neon-blue'
    },
    {
        id: 2,
        title: 'Live Band',
        description: 'Electrifying performances by top college bands and guest artists.',
        icon: <Music size={60} />,
        color: 'bg-neon-purple'
    },
    {
        id: 3,
        title: 'Project Expo',
        description: 'Showcase of the most innovative AI and Robotics projects.',
        icon: <Cpu size={60} />,
        color: 'bg-neon-green'
    },
    {
        id: 4,
        title: 'Global Food Court',
        description: 'A taste of India and the world with diverse culinary delights.',
        icon: <Utensils size={60} />,
        color: 'bg-yellow-400'
    }
];

const ExperienceCard = ({ item }) => {
    return (
        <motion.div
            className="w-full h-full rounded-2xl overflow-hidden relative group border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
            {/* Color accent glow */}
            <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

            <div className="relative z-10 p-8 flex flex-col justify-center items-center text-center h-full">
                <div className={`mb-6 p-5 rounded-2xl bg-white/5 border border-white/5 text-${item.color.replace('bg-', '')} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-white tracking-wide group-hover:text-glow transition-all">{item.title}</h3>
                <p className="text-gray-300 font-medium leading-relaxed opacity-100">{item.description}</p>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative bg-dark-bg">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
                        Experience <span className="text-neon-purple">The Hype</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl text-lg">
                        Beyond the competitions, immerse yourself in the vibrant atmosphere of ROBOMAN AI 2026.
                    </p>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experiences.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ExperienceCard item={item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
