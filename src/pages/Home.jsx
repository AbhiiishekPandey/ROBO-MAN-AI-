import React, { useEffect } from 'react';
import Hero from '../sections/Hero';
import Explore from '../sections/Explore';
import Experience from '../sections/Experience';

import { useLocation } from 'react-router-dom';

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [hash]);

    return (
        <>
            <Hero />
            <Explore />
            <Experience />

        </>
    );
};

export default Home;
