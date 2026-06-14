import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../utils/constants';
import { FiMenu, FiX } from 'react-icons/fi';
import Magnetic from './Magnetic';
import { useCursor } from '../context/CursorContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { enterHover, leaveHover } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-dark-bg/60 backdrop-blur-md border-b border-border-subtle' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Magnetic strength={0.15}>
          <a 
            href="#hero" 
            onMouseEnter={() => enterHover()}
            onMouseLeave={leaveHover}
            className="group flex items-center gap-1.5 font-display text-xl font-bold tracking-tighter text-white p-2"
          >
            <span>Amrit</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue transition-transform duration-300 group-hover:scale-150 group-hover:bg-brand-purple"></span>
          </a>
        </Magnetic>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Magnetic key={item.label} strength={0.2}>
              <a 
                key={item.label}
                href={item.href} 
                onMouseEnter={() => enterHover()}
                onMouseLeave={leaveHover}
                className="relative p-2 font-mono text-xs text-zinc-400 uppercase tracking-wider transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </Magnetic>
          ))}
          <Magnetic strength={0.25}>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={() => enterHover()}
              onMouseLeave={leaveHover}
              className="ml-2 inline-block rounded-lg border border-zinc-800 bg-zinc-950/40 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-brand-blue transition-all duration-300 hover:border-brand-blue/40 hover:bg-brand-blue/5 hover:text-white"
            >
              Resume
            </a>
          </Magnetic>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          onMouseEnter={() => enterHover()}
          onMouseLeave={leaveHover}
          className="flex items-center justify-center p-2 text-zinc-400 hover:text-white md:hidden cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`absolute inset-x-0 top-full bg-dark-bg/95 border-b border-border-subtle px-6 py-8 backdrop-blur-lg transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              onMouseEnter={() => enterHover()}
              onMouseLeave={leaveHover}
              className="font-mono text-sm text-zinc-300 uppercase tracking-widest hover:text-brand-blue transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            onMouseEnter={() => enterHover()}
            onMouseLeave={leaveHover}
            className="mt-2 text-center rounded-lg border border-zinc-850 bg-zinc-900/50 py-3 font-mono text-xs uppercase tracking-wider text-brand-blue"
          >
            Resume
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

