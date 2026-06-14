import {
  SiReact, SiJavascript, SiFirebase, SiLinux, SiPython,
  SiThreedotjs, SiGreensock, SiTailwindcss, SiNodedotjs,
  SiGit, SiHtml5, SiTypescript,
  SiNextdotjs, SiFigma
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { FaCss3Alt } from 'react-icons/fa';

// ═══════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════
export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Arsenal', href: '#arsenal' },
  { label: 'Projects', href: '#projects' },
  { label: 'Creator', href: '#creator' },
  { label: 'Contact', href: '#contact' },
];

// ═══════════════════════════════════════════
//  HERO ROLES (cycling subtitles)
// ═══════════════════════════════════════════
export const HERO_ROLES = [
  'Tech Enthusiast',
  'Web Developer',
  'Content Creator',
  'Open-Source Advocate',
];

// ═══════════════════════════════════════════
//  ABOUT — Terminal commands
// ═══════════════════════════════════════════
export const TERMINAL_COMMANDS = [
  {
    command: '$ whoami',
    output: 'Amrit — An ambitious builder who thrives on open-source, mastering tools, and building in public.',
  },
  {
    command: '$ cat journey.txt',
    output: 'Started coding with curiosity, evolved into a relentless creator.\nI follow a solo-leveling productivity framework —\nevery day is a chance to rank up through discipline and deep work.',
  },
  {
    command: '$ cat philosophy.txt',
    output: '"Ship fast. Learn faster. Build things that matter."\nI believe in the power of open-source communities\nand the beauty of crafting digital experiences that inspire.',
  },
  {
    command: '$ ls passions/',
    output: 'web-development/  open-source/  linux-customization/\ncontent-creation/  ui-design/  productivity-systems/',
  },
];

// ═══════════════════════════════════════════
//  SKILLS — Arsenal
// ═══════════════════════════════════════════
export const SKILLS = [
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'language' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'language' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', category: 'frontend' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'styling' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'backend' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'backend' },
  { name: 'Python', icon: SiPython, color: '#3776AB', category: 'language' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#FFFFFF', category: 'creative' },
  { name: 'GSAP', icon: SiGreensock, color: '#88CE02', category: 'creative' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624', category: 'tools' },
  { name: 'Git', icon: SiGit, color: '#F05032', category: 'tools' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'frontend' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', category: 'styling' },
  { name: 'VS Code', icon: VscCode, color: '#007ACC', category: 'tools' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'design' },
];

// ═══════════════════════════════════════════
//  PROJECTS
// ═══════════════════════════════════════════
export const PROJECTS = [
  {
    id: 1,
    title: 'Trust-Browser',
    tagline: 'Privacy-Focused Chromium Browser',
    description: 'An open-source Chromium-based desktop browser built for privacy. Blocks trackers, removes telemetry, and gives you complete control over your browsing data. Free, transparent, and community-driven.',
    techStack: ['Electron', 'Chromium', 'JavaScript', 'Node.js'],
    liveUrl: 'https://github.com/Amrit-droid-og/Trust-Browser',
    githubUrl: 'https://github.com/Amrit-droid-og/Trust-Browser',
    color: '#f59e0b',
  },
  {
    id: 2,
    title: 'ARVR',
    tagline: 'Spatial AR/VR Simulations',
    description: 'Experimental augmented and virtual reality simulation experiences built on top of web graphics APIs. Immersive spatial mechanics running directly in the browser or head-mounted displays.',
    techStack: ['Three.js', 'WebXR', 'HTML5', 'CSS3'],
    liveUrl: 'https://github.com/Amrit-droid-og/ARVR',
    githubUrl: 'https://github.com/Amrit-droid-og/ARVR',
    color: '#8b5cf6',
  },
  {
    id: 3,
    title: 'Mother-day-special',
    tagline: 'Interactive Mother\'s Day Greeting',
    description: 'A beautiful, interactive, and responsive mother\'s day special greeting card with smooth animations, customized messaging, and particle effects built to deliver a heartfelt digital experience.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    liveUrl: 'https://amrit-droid-og.github.io/Mother-day-special/',
    githubUrl: 'https://github.com/Amrit-droid-og/Mother-day-special',
    color: '#ec4899',
  },
];

// ═══════════════════════════════════════════
//  YOUTUBE VIDEOS — Creator Zone
// ═══════════════════════════════════════════
export const YOUTUBE_VIDEOS = [
  {
    id: 'F1P8ayxTA4M',
    title: 'Holi Aur Ghotala | Amrit Crazy VineZ | ft: @isshreshth',
    views: '544 views',
    duration: '11:24',
    type: 'COMEDY',
    url: 'https://www.youtube.com/watch?v=F1P8ayxTA4M',
    grad: 'from-rose-500/10 to-orange-500/15',
  },
  {
    id: 'l9deGwjXjA8',
    title: 'Meri Pyari Mummy | Amrit Crazy VineZ',
    views: '208 views',
    duration: '6:42',
    type: 'VINE/PARODY',
    url: 'https://www.youtube.com/watch?v=l9deGwjXjA8',
    grad: 'from-pink-500/10 to-red-500/15',
  },
  {
    id: '1DUpB8BNc_o',
    title: 'Garmi Aur Kand In India | Amrit Crazy VineZ',
    views: '1.0K views',
    duration: '8:15',
    type: 'COMEDY VINE',
    url: 'https://www.youtube.com/watch?v=1DUpB8BNc_o',
    grad: 'from-amber-600/10 to-yellow-500/15',
  },
  {
    id: 'UumlsZl9Sgo',
    title: 'Indian Roasters And Reacters IN NUTSHELL',
    views: '477 views',
    duration: '5:30',
    type: 'PARODY',
    url: 'https://www.youtube.com/watch?v=UumlsZl9Sgo',
    grad: 'from-purple-600/10 to-indigo-700/15',
  },
  {
    id: 'uovoBxjqqQw',
    title: 'Types Of Indian Youtubers Parody',
    views: '249 views',
    duration: '9:15',
    type: 'PARODY/COMEDY',
    url: 'https://www.youtube.com/watch?v=uovoBxjqqQw',
    grad: 'from-blue-600/10 to-cyan-500/15',
  },
  {
    id: 'DArQPtsaB1s',
    title: 'POV: THAT ONE BRO AND FRIEND WHO CANT LET YOU STAY DEPRESSED',
    views: '647 views',
    duration: '0:50',
    type: 'SHORTS',
    url: 'https://www.youtube.com/shorts/DArQPtsaB1s',
    grad: 'from-emerald-500/10 to-teal-500/15',
  },
];

// ═══════════════════════════════════════════
//  SOCIAL LINKS
// ═══════════════════════════════════════════
export const EMAIL = 'amritprasadpanda@gmail.com';

export const SOCIAL_LINKS = [
  { label: 'GitHub', url: 'https://github.com/Amrit-droid-og', icon: 'github' },
  { label: 'YouTube', url: 'https://www.youtube.com/@AmritCrazyVineZ', icon: 'youtube' },
  { label: 'Instagram', url: 'https://instagram.com/amrit_crazy_vinez', icon: 'instagram' },
];

// ═══════════════════════════════════════════
//  COLORS
// ═══════════════════════════════════════════
export const COLORS = {
  accentBlue: '#3b82f6',
  accentGlow: '#93c5fd',
  accentGold: '#f59e0b',
  bgPrimary: '#0a0a0c',
  bgElevated: '#111115',
  textPrimary: '#f8fafc',
  textSecondary: '#94a3b8',
};
