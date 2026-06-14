import { useRef, useMemo, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function AuraBackground({ className = '' }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Soft spring for the glowing orb following the mouse
  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const auraX = useSpring(mouseX, springConfig);
  const auraY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Center the orb on the cursor
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className={`pointer-events-none fixed inset-0 z-0 overflow-hidden bg-bg-primary ${className}`}>
      <motion.div
        className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: auraX,
          y: auraY,
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.1) 40%, rgba(0,0,0,0) 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Ambient static orbs for depth */}
      <div 
        className="absolute left-[20%] top-[20%] h-[40vh] w-[40vh] rounded-full mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div 
        className="absolute bottom-[10%] right-[10%] h-[50vh] w-[50vh] rounded-full mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(147,197,253,0.05) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
}
