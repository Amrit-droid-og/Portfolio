import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Lenis from 'lenis';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Arsenal from './sections/Arsenal';
import Projects from './sections/Projects';
import CreatorZone from './sections/CreatorZone';
import Contact from './sections/Contact';

// Components & Context
import { CursorProvider } from './context/CursorContext';
import CustomCursor from './components/CustomCursor';
import AuraBackground from './components/AuraBackground';
import Preloader from './components/Preloader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = 'unset';
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <CursorProvider>
      <Preloader onComplete={() => setLoading(false)} />
      
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-screen bg-dark-bg font-body text-zinc-350 selection:bg-brand-blue/20 selection:text-white"
          >
            {/* Custom Cursor & Animated Backdrop */}
            <CustomCursor />
            <AuraBackground />

            {/* Floating Header */}
            <Navbar />

            {/* Main Content Sections */}
            <main className="relative z-10">
              <Hero />
              <About />
              <Arsenal />
              <Projects />
              <CreatorZone />
            </main>
            
            {/* Footer / Connect Section */}
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </CursorProvider>
  );
}

