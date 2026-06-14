import { useState } from 'react';
import { FiFolder, FiFile, FiTerminal, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import RevealText from '../components/RevealText';

const FILES = {
  'whoami.js': {
    title: 'whoami.js',
    language: 'javascript',
    lines: [
      '// The developer identity file',
      'const developer = {',
      '  name: "Amrit",',
      '  role: "Full-Stack Web Architect",',
      '  passions: ["Open Source", "UI/UX", "Linux Ricing"],',
      '  philosophy: "Build things that matter.",',
      '  status: "Solo-leveling everyday"',
      '};',
      '',
      'console.log(`Hello, I am ${developer.name}!`);'
    ]
  },
  'journey.md': {
    title: 'journey.md',
    language: 'markdown',
    lines: [
      '# My Coding Odyssey',
      '',
      '- **Genesis**: Started by custom theme hacking (HTML/CSS)',
      '- **Evolution**: Mastered React, Next.js, and Modern Web architectures',
      '- **Productivity Framework**: Inspired by the "Solo Leveling" structure.',
      '  Every day is an opportunity to level up coding power,',
      '  deep focus, and technical capability.',
      '',
      'Currently crafting scalable tools and building in public.'
    ]
  },
  'philosophy.json': {
    title: 'philosophy.json',
    language: 'json',
    lines: [
      '{',
      '  "core_beliefs": [',
      '    "Ship fast. Learn faster.",',
      '    "Subtle micro-animations elevate the design.",',
      '    "Open-source communities drive the future of web tech.",',
      '    "A clean UI is a form of respect to the user."',
      '  ]',
      '}'
    ]
  },
  'passions.sh': {
    title: 'passions.sh',
    language: 'bash',
    lines: [
      '#!/bin/bash',
      'echo "Listing passions..."',
      '',
      'passions=(',
      '  "web-development"',
      '  "open-source"',
      '  "linux-customization"',
      '  "content-creation"',
      '  "productivity-systems"',
      ')',
      '',
      'for passion in "${passions[@]}"; do',
      '  echo "🔥 $passion"',
      'done'
    ]
  }
};

export default function About() {
  const [activeFile, setActiveFile] = useState('whoami.js');
  const { enterHover, leaveHover } = useCursor();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 80,
      },
    },
  };

  return (
    <section id="about" className="py-24 border-t border-zinc-900/80 bg-zinc-950/20 relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-xs text-brand-blue uppercase tracking-widest">01 / Profile</span>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl tracking-tight">About Me</h2>
          <div className="h-px flex-1 bg-zinc-900"></div>
        </motion.div>

        {/* Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-15% 0px' }}
          className="grid gap-12 lg:grid-cols-12 items-start"
        >
          {/* Biography Text (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <RevealText className="text-zinc-400 text-sm sm:text-base leading-relaxed" delay={0.05}>
              Hello! My name is Amrit. I craft elegant and modern web interfaces. My journey into web engineering began with custom scripting and custom desktop customizers, which quickly blossomed into a deep passion for building high-performance web systems.
            </RevealText>
            
            <RevealText className="text-zinc-400 text-sm sm:text-base leading-relaxed" delay={0.05}>
              Today, I specialize in the React ecosystem, blending robust frontend engineering with aesthetic visual details. My development methodology is heavily inspired by a structured productivity system: constantly seeking hard challenges to level up my skills and ship cleaner code.
            </RevealText>

            <RevealText className="text-zinc-400 text-sm sm:text-base leading-relaxed" delay={0.05}>
              I build tools in public, advocate for open-source initiatives, and occasionally create educational video content sharing design patterns and development tips.
            </RevealText>
          </div>

          {/* Interactive Code Editor Mockup (Right) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 w-full rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl"
          >
            {/* Editor Window Header */}
            <div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-900/40 px-4 py-3">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5">
                <span className="h-3.5 w-3.5 rounded-full bg-red-500/80"></span>
                <span className="h-3.5 w-3.5 rounded-full bg-yellow-500/80"></span>
                <span className="h-3.5 w-3.5 rounded-full bg-green-500/80"></span>
              </div>
              
              {/* File Title */}
              <div className="font-mono text-xs text-zinc-550 select-none">
                amrit@workspace: ~/src/about
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-brand-blue/80">
                <FiTerminal className="animate-pulse" />
                <span>IDE-MODE</span>
              </div>
            </div>

            <div className="flex min-h-[360px] flex-col sm:flex-row">
              {/* File Explorer Sidebar */}
              <div className="w-full sm:w-48 border-b sm:border-b-0 sm:border-r border-zinc-900 bg-zinc-950/80 p-3 select-none">
                <div className="mb-3 flex items-center gap-2 font-mono text-[10px] font-bold text-zinc-550 uppercase tracking-wider">
                  <FiFolder className="text-zinc-650" />
                  <span>workspace</span>
                </div>
                
                <div className="flex flex-col gap-1">
                  {Object.keys(FILES).map((fileName) => (
                    <button
                      key={fileName}
                      onClick={() => setActiveFile(fileName)}
                      onMouseEnter={() => enterHover()}
                      onMouseLeave={leaveHover}
                      className={`flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-left font-mono text-xs transition-colors cursor-pointer ${
                        activeFile === fileName 
                          ? 'bg-zinc-900 text-white' 
                          : 'text-zinc-550 hover:bg-zinc-900/50 hover:text-zinc-350'
                      }`}
                    >
                      <FiFile size={13} className={activeFile === fileName ? 'text-brand-blue' : 'text-zinc-650'} />
                      <span>{fileName}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Viewing Area */}
              <div className="flex-1 bg-zinc-950/40 p-4 font-mono text-xs leading-relaxed overflow-x-auto">
                {/* Tabs bar */}
                <div className="mb-4 flex border-b border-zinc-900/60 pb-2 select-none">
                  <span className="text-[10px] text-zinc-600 uppercase tracking-widest flex items-center gap-1">
                    <FiChevronRight /> {FILES[activeFile].language} rendering
                  </span>
                </div>

                {/* File contents with line numbers */}
                <div className="min-h-[220px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeFile}
                      initial={{ opacity: 0, y: 8, filter: 'blur(2px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="table w-full"
                    >
                      {FILES[activeFile].lines.map((line, idx) => (
                        <div key={idx} className="table-row">
                          {/* Line Number */}
                          <span className="table-cell w-8 select-none text-right pr-4 text-zinc-700 text-[11px] font-light">
                            {idx + 1}
                          </span>
                          {/* Code Content */}
                          <span className={`table-cell whitespace-pre-wrap ${
                            line.startsWith('//') || line.startsWith('#')
                              ? 'text-zinc-600 italic' 
                              : line.includes('const') || line.includes('let') || line.includes('function')
                                ? 'text-brand-purple/90'
                                : line.includes('console.log') || line.includes('echo')
                                  ? 'text-brand-blue/90'
                                  : 'text-zinc-350'
                          }`}>
                            {line}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Simulated Terminal Footer */}
            <div className="border-t border-zinc-900 bg-zinc-950 p-3.5 font-mono text-xs text-zinc-500">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="text-brand-blue">$</span>
                <span>cat {activeFile}</span>
              </div>
              <div className="mt-1.5 min-h-[36px] text-zinc-550 whitespace-pre-wrap leading-relaxed select-text">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFile}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {activeFile === 'whoami.js' && 'Amrit — An ambitious builder who thrives on open-source, mastering tools, and building in public.'}
                    {activeFile === 'journey.md' && 'Started coding with curiosity, evolved into a relentless creator.\nI follow a solo-leveling productivity framework — rank up through discipline.'}
                    {activeFile === 'philosophy.json' && '"Ship fast. Learn faster. Build things that matter."\nI believe in crafting digital experiences that inspire.'}
                    {activeFile === 'passions.sh' && 'web-development/  open-source/  linux-customization/  content-creation/'}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
