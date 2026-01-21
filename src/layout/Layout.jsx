import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from '../components/Cursor';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-dark-bg text-white overflow-hidden relative selection:bg-neon-blue selection:text-black">
            <Cursor />
            <Navbar />
            <main className="relative z-10 w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
