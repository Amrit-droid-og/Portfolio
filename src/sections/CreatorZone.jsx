import { YOUTUBE_VIDEOS, SOCIAL_LINKS } from '../utils/constants';
import { FiYoutube, FiPlay, FiEye, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import Magnetic from '../components/Magnetic';



export default function CreatorZone() {
  const { enterHover, leaveHover } = useCursor();
  const youtubeLink = SOCIAL_LINKS.find(s => s.label === 'YouTube')?.url || 'https://youtube.com';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 35, opacity: 0 },
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
    <section id="creator" className="py-24 border-t border-zinc-900/80 bg-zinc-950/10">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16 flex items-center gap-4"
        >
          <span className="font-mono text-xs text-brand-blue uppercase tracking-widest">04 / Creator</span>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl tracking-tight">Content Creation</h2>
          <div className="h-px flex-1 bg-zinc-900"></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mb-16 max-w-2xl text-zinc-400 text-sm sm:text-base leading-relaxed"
        >
          I share my building journey, developer setups, and software engineering insights on YouTube. 
          Here are some topics I've covered recently.
        </motion.p>

        {/* Videos Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-15% 0px' }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {YOUTUBE_VIDEOS.map((video) => {
            return (
              <motion.a
                key={video.id}
                href={video.url || youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                onMouseEnter={() => enterHover()}
                onMouseLeave={leaveHover}
                className="group flex flex-col rounded-xl border border-zinc-900 bg-zinc-950 overflow-hidden shadow-md transition-colors duration-300 hover:border-zinc-800 hover:shadow-xl cursor-pointer"
              >
                {/* Visual Thumbnail Card */}
                <div className={`aspect-video w-full bg-gradient-to-tr ${video.grad || 'from-zinc-800 to-zinc-950'} border-b border-zinc-900/80 relative flex items-center justify-center overflow-hidden`}>
                  {/* Subtle Grid overlay inside thumbnail */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] bg-[size:10px_10px]"></div>

                  {/* Red Play Button Overlay */}
                  <div className="absolute h-10 w-10 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-red-650 group-hover:border-red-500 shadow-lg group-hover:shadow-red-500/20 z-10">
                    <FiPlay className="text-xs ml-0.5" />
                  </div>

                  {/* Left Bottom Pill: Views */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-zinc-350 select-none">
                    <FiEye size={10} />
                    <span>{video.views}</span>
                  </div>

                  {/* Right Bottom Pill: Duration */}
                  <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-zinc-350 select-none">
                    <FiClock size={10} />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="flex flex-1 flex-col p-5 bg-zinc-950">
                  {/* Category Code Label */}
                  <span className="mb-2 font-mono text-[9px] uppercase tracking-widest text-zinc-500 select-none">
                    // TYPE: {video.type}
                  </span>

                  {/* Title */}
                  <h3 className="mb-4 font-display text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors leading-snug">
                    {video.title}
                  </h3>

                  {/* View Details Button */}
                  <div className="mt-auto pt-2 border-t border-zinc-900/60 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-zinc-550 group-hover:text-brand-blue transition-colors select-none">
                    <span>Watch Video</span>
                    <FiYoutube className="text-sm text-zinc-655 group-hover:text-red-500 transition-colors" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer Channel Link Button */}
        <div className="mt-16 flex justify-center">
          <Magnetic strength={0.25}>
            <a 
              href={youtubeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={() => enterHover()}
              onMouseLeave={leaveHover}
              className="group inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950 px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-zinc-300 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/50 hover:text-white"
            >
              <FiYoutube className="text-zinc-400 group-hover:text-red-500 transition-colors" />
              <span>Visit YouTube Channel</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
