import { useState, useEffect } from 'react';
import { PROJECTS } from '../utils/constants';
import { FiExternalLink, FiGithub, FiGlobe, FiGrid } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

// -------------------------------------------------------------
// PROJECT 1: Trust-Browser Visual Simulation
// -------------------------------------------------------------
function TrustBrowserVisual() {
  const [stats, setStats] = useState({ trackers: 4124, cookies: 892 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        trackers: prev.trackers + Math.floor(Math.random() * 3),
        cookies: prev.cookies + Math.floor(Math.random() * 2)
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full bg-[#050508] p-3 flex flex-col font-sans select-none overflow-hidden">
      {/* Search / Private Dashboard Header */}
      <div className="flex items-center justify-between border-b border-zinc-900 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="h-4.5 w-4.5 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 text-[10px] border border-amber-500/20">🛡️</div>
          <span className="text-[10px] font-bold text-zinc-300">Trust Shield v1.2</span>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded text-[8px] text-emerald-400 font-mono">
          <span className="h-1 w-1 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Shield: Active</span>
        </div>
      </div>

      {/* Main Panel - Search Container & Stats */}
      <div className="flex-1 grid grid-cols-3 gap-3 min-h-0">
        {/* Left Side: Privacy Shields Stats */}
        <div className="col-span-1 border border-zinc-900/60 bg-zinc-950/40 rounded-lg p-2.5 flex flex-col justify-between">
          <div className="space-y-2">
            <span className="text-[7.5px] font-bold text-zinc-500 uppercase tracking-widest block">// BLOCKED THREATS</span>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center bg-zinc-950 p-1.5 rounded border border-zinc-900">
                <span className="text-[8px] text-zinc-400">Trackers</span>
                <span className="text-[9px] font-bold text-amber-500 font-mono">{stats.trackers}</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-950 p-1.5 rounded border border-zinc-900">
                <span className="text-[8px] text-zinc-400">Cookies</span>
                <span className="text-[9px] font-bold text-amber-500 font-mono">{stats.cookies}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-500/5 border border-amber-500/10 rounded p-1.5 text-center">
            <div className="text-[7px] text-zinc-500">Telemetry status</div>
            <div className="text-[8px] text-amber-400 font-mono font-bold">100% BLOCKED</div>
          </div>
        </div>

        {/* Right Side: Private Search Interface */}
        <div className="col-span-2 border border-zinc-900 bg-zinc-950/20 rounded-lg relative p-3 flex flex-col justify-center items-center">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.2px,transparent_1.2px)] bg-[size:12px_12px] opacity-10"></div>
          
          <div className="relative z-10 w-full max-w-[180px] flex flex-col items-center gap-3">
            {/* Logo */}
            <div className="flex items-center gap-1.5">
              <span className="text-xl">🛡️</span>
              <span className="font-display text-xs font-extrabold text-white tracking-wide">TRUST <span className="text-amber-500">BROWSER</span></span>
            </div>

            {/* Simulated Address Bar */}
            <div className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1.5 flex items-center justify-between text-zinc-500 text-[8px] font-mono">
              <span>search privately...</span>
              <span className="text-zinc-600">⏎</span>
            </div>

            {/* Quick links */}
            <div className="flex gap-2">
              <div className="border border-zinc-900 bg-zinc-950/60 px-1.5 py-1 rounded text-[6px] text-zinc-500">DuckDuckGo</div>
              <div className="border border-zinc-900 bg-zinc-950/60 px-1.5 py-1 rounded text-[6px] text-zinc-500">GitHub</div>
              <div className="border border-zinc-900 bg-zinc-950/60 px-1.5 py-1 rounded text-[6px] text-zinc-500">Tor Node</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// PROJECT 2: ARVR Visual Simulation
// -------------------------------------------------------------
function ARVRVisual() {
  const [coords, setCoords] = useState({ x: 0.125, y: 1.250, z: -1.500 });
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 2) % 360);
      const rad = (angle * Math.PI) / 180;
      setCoords({
        x: (Math.sin(rad) * 1.25).toFixed(3),
        y: (1.2 + Math.cos(rad * 2) * 0.35).toFixed(3),
        z: (Math.cos(rad) * 1.85).toFixed(3)
      });
    }, 45);
    return () => clearInterval(interval);
  }, [angle]);

  return (
    <div className="relative h-full w-full bg-[#04040a] p-3 flex flex-col font-mono select-none overflow-hidden text-xs text-purple-400">
      {/* Simulation Header */}
      <div className="flex items-center justify-between border-b border-purple-950 pb-2 mb-2">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-purple-500 font-bold">●</span>
          <span className="text-[9px] font-bold tracking-wider text-purple-300 uppercase">WEBOCTREE_XR ENGINE</span>
        </div>
        <div className="text-[8px] bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded text-purple-300">
          FPS: 90.0 // RIFT_ACTIVE
        </div>
      </div>

      {/* Viewport Area */}
      <div className="flex-1 border border-purple-950/60 bg-[#060611] rounded relative p-2 overflow-hidden flex items-center justify-center">
        {/* Spatial grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.06)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        
        {/* Horizon Grid Perspective Projection */}
        <div 
          className="absolute w-[200%] h-[200%] border border-purple-900/10 rounded-full" 
          style={{
            background: 'radial-gradient(circle, transparent 40%, rgba(139,92,246,0.02) 70%)',
            transform: 'perspective(200px) rotateX(60deg) translateZ(-50px)',
            opacity: 0.4
          }}
        ></div>

        {/* HUD Reticle */}
        <div className="absolute h-8 w-8 border border-purple-500/30 rounded-full flex items-center justify-center pointer-events-none opacity-40">
          <div className="h-1.5 w-1.5 bg-purple-400 rounded-full"></div>
          <div className="absolute w-10 h-px bg-purple-500/30"></div>
          <div className="absolute h-10 w-px bg-purple-500/30"></div>
        </div>

        {/* Orbiting spatial element */}
        <div 
          className="absolute z-10 flex flex-col items-center"
          style={{
            transform: `translate(${coords.x * 25}px, ${-coords.y * 15}px)`
          }}
        >
          {/* Glowing node point */}
          <div className="h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7] animate-pulse"></div>
          <div className="mt-1 bg-black/80 px-1 rounded border border-purple-500/40 text-[6px] text-purple-200">
            Node_A
          </div>
        </div>

        {/* Live Coordinate Logger Overlay */}
        <div className="absolute bottom-2 left-2 bg-black/70 border border-purple-950 p-2 rounded text-[7px] text-purple-300 font-mono space-y-0.5">
          <div>POS_VECTOR:</div>
          <div>X: <span className="text-white">{coords.x}</span></div>
          <div>Y: <span className="text-white">{coords.y}</span></div>
          <div>Z: <span className="text-white">{coords.z}</span></div>
        </div>

        {/* Device simulation telemetry */}
        <div className="absolute top-2 right-2 text-right text-[6.5px] text-purple-500 space-y-0.5">
          <div>FOV: 110.0°</div>
          <div>BUFFER: OK</div>
          <div>IPD: 64.0mm</div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// PROJECT 3: Mother-day-special Visual Simulation
// -------------------------------------------------------------
function MotherDayVisual() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles
    const initialParticles = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 60 + 30,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2
    }));
    setParticles(initialParticles);

    // Drifting interval
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          y: p.y - 1 < -10 ? 110 : p.y - 0.5
        }))
      );
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full bg-[#0a050d] p-3 flex flex-col font-sans select-none overflow-hidden">
      {/* Greeting Header */}
      <div className="flex items-center justify-between border-b border-pink-950 pb-2 mb-2.5">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-pink-500/10 flex items-center justify-center text-[10px] text-pink-400 border border-pink-500/20">💝</div>
          <span className="text-[10px] font-bold text-pink-300 tracking-wider">Mother-Day greeting</span>
        </div>
        <div className="text-[8px] bg-pink-500/10 border border-pink-500/20 px-2 py-0.5 rounded text-pink-300">
          STATUS: ANIMS_PLAYING
        </div>
      </div>

      {/* Simulation Viewport */}
      <div className="flex-1 bg-gradient-to-br from-[#120718] to-[#0d040f] rounded-lg relative overflow-hidden flex flex-col items-center justify-center border border-pink-950/40 p-4">
        {/* Floating Heart Particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute text-pink-500/25 pointer-events-none transition-all duration-300 animate-pulse"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              fontSize: `${p.size + 4}px`
            }}
          >
            ♥
          </div>
        ))}

        {/* Card Mockup Board */}
        <div className="relative z-10 w-full max-w-[210px] border border-pink-500/30 bg-black/60 backdrop-blur-sm rounded-lg p-3 text-center flex flex-col items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.05)]">
          {/* Pulsing Main Heart SVG */}
          <div className="animate-bounce mb-2" style={{ animationDuration: '2.5s' }}>
            <svg 
              className="h-10 w-10 text-pink-500 filter drop-shadow-[0_0_8px_#ec4899]" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>

          <div className="text-[11px] font-bold text-white tracking-wide uppercase drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
            To: <span className="text-pink-400">Mummy</span> 💖
          </div>
          
          <div className="mt-1.5 text-[7px] text-pink-300/80 font-mono italic max-w-[160px]">
            "A mother is she who can take the place of all others but whose place no one else can take."
          </div>

          <div className="mt-2.5 rounded bg-pink-500/10 border border-pink-500/20 px-2 py-0.5 text-[6px] font-mono text-pink-400 uppercase tracking-wider">
            With love // Amrit
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { enterHover, leaveHover } = useCursor();

  return (
    <section id="projects" className="py-24 border-t border-zinc-900/80 bg-zinc-950/20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-xs text-brand-blue uppercase tracking-widest">03 / Works</span>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl tracking-tight">Selected Work</h2>
          <div className="h-px flex-1 bg-zinc-900"></div>
        </motion.div>

        {/* Projects Layout */}
        <div className="space-y-28">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.85, type: 'spring', damping: 22, stiffness: 80 }}
                className={`flex flex-col gap-12 lg:flex-row lg:items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Browser Mockup (Visual Representation) */}
                <motion.div 
                  className="w-full lg:w-7/12"
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onMouseEnter={() => enterHover()}
                  onMouseLeave={leaveHover}
                >
                  <a 
                    href={project.liveUrl || project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl hover:border-brand-blue/30 transition-all duration-300 cursor-pointer"
                  >
                    {/* Simulated Browser Bar */}
                    <div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-900/40 px-4 py-3 select-none">
                      {/* Red/Yellow/Green Window Dots */}
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-850"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-850"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-zinc-850"></span>
                      </div>
                      
                      {/* Browser Address Bar URL */}
                      <div className="flex items-center gap-1.5 rounded bg-zinc-950 px-3 py-1 font-mono text-[9px] text-zinc-550 w-1/2 justify-center">
                        <FiGlobe className="text-[10px]" />
                        <span>
                          {project.id === 1 && 'github.com/Amrit-droid-og/Trust-Browser'}
                          {project.id === 2 && 'github.com/Amrit-droid-og/ARVR'}
                          {project.id === 3 && 'amrit-droid-og.github.io/Mother-day-special'}
                        </span>
                      </div>

                      {/* Right space spacer */}
                      <div className="w-10"></div>
                    </div>

                    {/* Dynamic Simulated Render Body */}
                    <div className="aspect-video w-full overflow-hidden border-t border-zinc-900/30">
                      {project.id === 1 && <TrustBrowserVisual />}
                      {project.id === 2 && <ARVRVisual />}
                      {project.id === 3 && <MotherDayVisual />}
                    </div>
                  </a>
                </motion.div>

                {/* Details Section */}
                <div className={`w-full lg:w-5/12 flex flex-col justify-center`}>
                  {/* Category Tag */}
                  <span className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-brand-blue font-semibold">
                    {project.tagline}
                  </span>

                  {/* Project Title */}
                  <h3 className="mb-5 font-display text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>

                  {/* Description Box */}
                  <div className="mb-6 rounded-xl border border-zinc-900/60 bg-zinc-950/40 p-6 text-zinc-400 text-sm leading-relaxed">
                    <p>{project.description}</p>
                  </div>

                  {/* Tech stack badge pill elements */}
                  <div className="mb-8 flex flex-wrap gap-2.5">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="rounded bg-zinc-900/60 border border-zinc-850 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => enterHover()}
                      onMouseLeave={leaveHover}
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:text-white cursor-pointer"
                      aria-label={`${project.title} GitHub Source`}
                    >
                      <FiGithub />
                      <span>Code</span>
                    </a>
                    <span className="text-zinc-850">/</span>
                    <a 
                      href={project.liveUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => enterHover()}
                      onMouseLeave={leaveHover}
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-brand-blue transition-colors hover:text-white cursor-pointer"
                      aria-label={`${project.title} Live Site`}
                    >
                      <FiExternalLink />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
