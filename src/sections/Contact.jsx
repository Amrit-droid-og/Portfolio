import { useState } from 'react';
import { SOCIAL_LINKS, EMAIL } from '../utils/constants';
import { FiGithub, FiYoutube, FiInstagram, FiMail, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import Magnetic from '../components/Magnetic';

const ICON_MAP = {
  github: FiGithub,
  youtube: FiYoutube,
  instagram: FiInstagram
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { enterHover, leaveHover } = useCursor();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
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
    <footer id="contact" className="relative pt-24 pb-12 border-t border-zinc-900 bg-zinc-950/40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Contact Container Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-15% 0px' }}
          className="grid gap-12 lg:grid-cols-12 items-center mb-16"
        >
          
          {/* Header & Quick Intro (Left Column) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs text-brand-blue uppercase tracking-widest">// CONNECT</span>
            <h2 className="font-display text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Get In Touch.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              I am currently looking for new opportunities. Whether you have a project idea, 
              a technical question, or simply want to say hello, feel free to drop a line.
            </p>
            <div className="pt-2">
              <a 
                href={`mailto:${EMAIL}`}
                onMouseEnter={() => enterHover()}
                onMouseLeave={leaveHover}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-blue hover:text-white transition-colors"
              >
                <FiMail />
                <span>{EMAIL}</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Form Card (Right Column) */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/60 p-6 sm:p-8 shadow-2xl relative hover:border-brand-blue/15 transition-colors duration-300">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="h-10 w-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    ✓
                  </div>
                  <h3 className="font-display text-sm font-semibold text-white">Message Dispatched</h3>
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                    Thank you, I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Name input */}
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                        Your Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        onMouseEnter={() => enterHover()}
                        onMouseLeave={leaveHover}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-zinc-900 bg-zinc-950 px-4 py-2.5 font-mono text-xs text-white placeholder-zinc-700 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/25 transition-all"
                      />
                    </div>
                    
                    {/* Email input */}
                    <div className="space-y-2">
                      <label htmlFor="form-email" className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        onMouseEnter={() => enterHover()}
                        onMouseLeave={leaveHover}
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-zinc-900 bg-zinc-950 px-4 py-2.5 font-mono text-xs text-white placeholder-zinc-700 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/25 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message input */}
                  <div className="space-y-2">
                    <label htmlFor="form-message" className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      id="form-message"
                      rows="4"
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      onMouseEnter={() => enterHover()}
                      onMouseLeave={leaveHover}
                      placeholder="Hi, I wanted to discuss..."
                      className="w-full rounded-lg border border-zinc-900 bg-zinc-950 px-4 py-2.5 font-mono text-xs text-white placeholder-zinc-700 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/25 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    onMouseEnter={() => enterHover()}
                    onMouseLeave={leaveHover}
                    className="w-full group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-mono text-xs uppercase tracking-wider text-zinc-950 transition-all duration-300 hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/5 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <FiSend className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[10px]" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </motion.div>

        {/* Divider */}
        <div className="h-px bg-zinc-900 mb-8"></div>

        {/* Footer Meta & Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright Metadata */}
          <div className="font-mono text-[10px] text-zinc-655 uppercase tracking-wider select-none order-2 sm:order-1">
            © {new Date().getFullYear()} Amrit. Crafted with React & Tailwind.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 order-1 sm:order-2">
            {SOCIAL_LINKS.map((social) => {
              const Icon = ICON_MAP[social.icon];
              if (!Icon) return null;

              return (
                <Magnetic key={social.label} strength={0.35}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => enterHover()}
                    onMouseLeave={leaveHover}
                    className="p-2 inline-block text-zinc-550 hover:text-white transition-colors cursor-pointer"
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}
