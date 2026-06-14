import { FiArrowRight, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Magnetic from '../components/Magnetic';
import { useCursor } from '../context/CursorContext';

export default function Hero() {
  const { enterHover, leaveHover } = useCursor();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(5px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 22,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section 
      id="hero" 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative flex min-h-screen flex-col justify-center pt-24 pb-16 overflow-hidden dot-bg"
    >
      {/* Subtle radial glow overlay for lighting effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_60%)]"></div>

      <div className="relative max-w-4xl z-10 px-4 md:px-8">
        {/* Status Badge */}
        <motion.div 
          variants={itemVariants}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-blue/25 bg-brand-blue/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-brand-blue"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-blue"></span>
          </span>
          Available for new opportunities
        </motion.div>
        
        {/* Main Title */}
        <motion.h1 
          variants={itemVariants}
          className="mb-6 font-display text-5xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl leading-[1.05]"
        >
          <span className="text-gradient">Building digital tools.</span> <br />
          <span className="text-gradient-accent">Master of open source.</span>
        </motion.h1>
        
        {/* Short Bio */}
        <motion.p 
          variants={itemVariants}
          className="mb-10 max-w-2xl font-body text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed"
        >
          Hi, I'm <strong className="text-white font-semibold">Amrit</strong>. A frontend engineer and content creator 
          crafting high-performance user interfaces, building browser-based ecosystems, and leveling up 
          developer productivity.
        </motion.p>
        
        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-4"
        >
          <Magnetic strength={0.2}>
            <a 
              href="#projects" 
              onMouseEnter={() => enterHover()}
              onMouseLeave={leaveHover}
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-mono text-xs uppercase tracking-wider text-zinc-950 transition-all duration-300 hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/5"
            >
              Explore Work
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a 
              href="#contact" 
              onMouseEnter={() => enterHover()}
              onMouseLeave={leaveHover}
              className="group inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/40 px-5 py-3 font-mono text-xs uppercase tracking-wider text-zinc-300 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/50 hover:text-white"
            >
              Get in Touch
              <FiMail className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Decorative vertical coordinates overlay for technical vibe */}
      <motion.div 
        variants={itemVariants}
        className="absolute right-8 bottom-12 hidden md:flex flex-col gap-1 font-mono text-[9px] text-zinc-600 select-none"
      >
        <span>SYS.STATUS // ONLINE</span>
        <span>LATENCY // 14ms</span>
        <span>LOC // 30.7333° N, 76.7794° E</span>
      </motion.div>
    </motion.section>
  );
}
