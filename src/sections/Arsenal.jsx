import { useState } from 'react';
import { SKILLS } from '../utils/constants';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const CATEGORIES = {
  language: { label: 'Languages', description: 'Core syntax and typing' },
  frontend: { label: 'Frontend', description: 'Interactive frameworks' },
  backend: { label: 'Backend', description: 'APIs, state and databases' },
  styling: { label: 'Design & Style', description: 'UIs and aesthetic styling' },
  creative: { label: 'Creative', description: 'ThreeJS and motion engines' },
  tools: { label: 'Development', description: 'Command line and version control' }
};

export default function Arsenal() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { enterHover, leaveHover } = useCursor();

  // Group skills by category
  const groupedSkills = SKILLS.reduce((acc, skill) => {
    const cat = skill.category || 'tools';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="arsenal" className="py-24 border-t border-zinc-900/80 bg-zinc-950/10">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-xs text-brand-blue uppercase tracking-widest">02 / Skills</span>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl tracking-tight">Technical Arsenal</h2>
          <div className="h-px flex-1 bg-zinc-900"></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mb-16 max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed"
        >
          A curated collection of languages, frameworks, and digital tools I use to build robust 
          web applications and clean systems. Hover over any tile to reveal its identity.
        </motion.p>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-15% 0px' }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {Object.entries(CATEGORIES).map(([key, info]) => {
            const skillsInCat = groupedSkills[key] || [];

            return (
              <motion.div 
                key={key} 
                variants={cardVariants}
                className="rounded-xl border border-zinc-900 bg-zinc-950/60 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <h3 className="font-display text-base font-bold text-white tracking-wide">{info.label}</h3>
                  <p className="mb-6 font-mono text-[10px] text-zinc-500 uppercase tracking-wider">{info.description}</p>
                </div>

                {/* Sub-grid of skills */}
                <div className="grid grid-cols-2 gap-3">
                  {skillsInCat.map((skill) => {
                    const Icon = skill.icon;
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <motion.div
                        key={skill.name}
                        onMouseEnter={() => {
                          setHoveredSkill(skill.name);
                          enterHover();
                        }}
                        onMouseLeave={() => {
                          setHoveredSkill(null);
                          leaveHover();
                        }}
                        whileHover={{ scale: 1.04, y: -2 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        style={
                          isHovered
                            ? {
                                borderColor: skill.color,
                                boxShadow: `0 0 20px ${skill.color}24`,
                                background: `${skill.color}08`
                              }
                            : {}
                        }
                        className="flex items-center gap-2.5 rounded-lg border border-zinc-900 bg-zinc-950 px-3.5 py-3 transition-all duration-200 select-none cursor-pointer"
                      >
                        <Icon 
                          style={isHovered ? { color: skill.color } : {}}
                          className="text-lg text-zinc-400 transition-colors duration-300" 
                        />
                        <span 
                          style={isHovered ? { color: '#ffffff' } : {}}
                          className="font-mono text-[11px] text-zinc-400 uppercase tracking-wide transition-colors duration-300"
                        >
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
