import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import EventDetail from './pages/EventDetail';
import Rulebook from './pages/Rulebook';

import HeroBackground from './components/HeroBackground';

function ForceHome() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the page seems to be loaded from a refresh or direct entry
    // and if we are not at the root
    if (location.pathname !== '/' || location.hash) {
      // We can use performance navigation timing to strictly detect 'reload' if needed,
      // but the user requirement "refresh website it will redirect to home" implies strictly landing on Home.
      // However, we should allow internal navigation. 
      // The simpliest interpretation: On App Mount, go to /.

      // Using window.performance to check for reload specifically
      const navEntry = performance.getEntriesByType("navigation")[0];
      if (navEntry && navEntry.type === 'reload') {
        navigate('/', { replace: true });
        window.scrollTo(0, 0);
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount (refresh/initial load)

  return null;
}

function App() {
  return (
    <Router>
      <ForceHome />
      <HeroBackground />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="/rulebook/:slug" element={<Rulebook />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
