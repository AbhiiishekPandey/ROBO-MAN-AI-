import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, X } from 'lucide-react';
import Button from '../components/Button';

const Register = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
    };

    const handleGGISelection = (isGGI) => {
        if (isGGI) {
            setStep(3);
        } else {
            navigate('/#explore');
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-dark-bg p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-radial-gradient from-dark-bg via-dark-bg to-black pointer-events-none z-0 opacity-80" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] pointer-events-none z-0" />

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="w-full max-w-md p-10 rounded-3xl border border-white/10 relative z-10 text-center shadow-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl"
                        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
                    >
                        <h2 className="text-4xl font-orbitron font-extrabold mb-2 tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-100 drop-shadow-sm">
                            STUDENT ENTRY
                        </h2>
                        <div className="my-8">
                            <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-cyan-400 to-neon-green drop-shadow-[0_0_25px_rgba(0,243,255,0.4)] tracking-wide">
                                FREE
                            </span>
                        </div>
                        <p className="text-gray-300 mb-10 leading-relaxed text-lg font-medium drop-shadow-md">
                            Access to all <span className="text-white font-bold">Tech & Culture Days</span>,<br />
                            Night Shows, and Food Zones.
                        </p>

                        <Button
                            variant="primary"
                            className="w-full py-4 text-xl font-bold tracking-wider text-white shadow-[0_0_20px_rgba(0,243,255,0.2)] hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] bg-gradient-to-r from-neon-blue to-teal-500 border-none relative overflow-hidden group"
                            onClick={() => setStep(2)}
                        >
                            <span className="relative z-10">START REGISTRATION</span>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Button>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="w-full max-w-md p-10 rounded-3xl border border-white/10 relative z-10 text-center shadow-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl"
                    >
                        <h2 className="text-3xl font-orbitron font-bold mb-10 leading-relaxed text-white drop-shadow-lg">
                            Are you a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-400 font-black drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] tracking-wide text-4xl block mt-2">Gulzar Group of Institutions</span><br />
                            (GGI) student?
                        </h2>

                        <div className="flex gap-6 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 py-4 rounded-xl border border-neon-blue bg-gradient-to-br from-neon-blue/20 to-transparent text-neon-blue font-extrabold text-xl tracking-widest hover:bg-neon-blue hover:text-black transition-all shadow-[0_0_20px_rgba(0,243,255,0.2)] backdrop-blur-sm"
                                onClick={() => handleGGISelection(true)}
                            >
                                YES
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 py-4 rounded-xl border border-white/20 hover:border-white text-gray-300 hover:text-white font-extrabold text-xl tracking-widest transition-all hover:bg-white/10 backdrop-blur-sm bg-gradient-to-br from-white/5 to-transparent"
                                onClick={() => handleGGISelection(false)}
                            >
                                NO
                            </motion.button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="w-full max-w-md p-10 rounded-3xl border border-neon-green/30 relative z-10 text-center shadow-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl"
                    >
                        <div className="w-24 h-24 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,255,157,0.2)] border border-neon-green/20">
                            <CheckCircle size={48} className="text-neon-green drop-shadow-[0_0_10px_rgba(0,255,157,0.8)]" />
                        </div>

                        <h2 className="text-3xl font-orbitron font-extrabold mb-6 text-white drop-shadow-md leading-tight">
                            YOU ARE ALREADY IN <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-emerald-300 to-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,157,0.5)] underline decoration-neon-green/30 underline-offset-8 mr-3">
                                CHILL
                            </span>
                            <span className="inline-block text-4xl transform translate-y-1 drop-shadow-[0_0_15px_rgba(0,255,157,0.6)] filter contrast-125 hover:scale-110 transition-transform cursor-default">
                                😎
                            </span>
                        </h2>

                        <p className="text-gray-300 mb-10 leading-relaxed text-lg font-medium">
                            Just show your valid <span className="text-white font-bold border-b border-white/30 pb-0.5">GGI Identity Card</span><br />
                            at the entrance gates on<br />
                            <span className="text-neon-blue font-bold">20 & 21 February</span>.
                        </p>

                        <div className="flex flex-col gap-4 items-center">
                            <Link to="/#explore">
                                <Button variant="primary" className="px-8 py-3 text-lg">
                                    Explore Events
                                </Button>
                            </Link>

                            <Link to="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors font-medium tracking-wide group mt-2">
                                <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Register;
