import gsap from 'gsap';

// ═══════════════════════════════════════════
//  REVEAL TIMELINE — Clip-path from bottom
// ═══════════════════════════════════════════
export function createRevealTimeline(element, options = {}) {
  const {
    duration = 1,
    delay = 0,
    ease = 'power3.out',
  } = options;

  return gsap.fromTo(
    element,
    { clipPath: 'inset(100% 0% 0% 0%)' },
    { clipPath: 'inset(0% 0% 0% 0%)', duration, delay, ease }
  );
}

// ═══════════════════════════════════════════
//  STAGGER TIMELINE — Fade-up stagger
// ═══════════════════════════════════════════
export function createStaggerTimeline(elements, options = {}) {
  const {
    stagger = 0.08,
    duration = 0.8,
    y = 60,
    ease = 'power3.out',
  } = options;

  return gsap.from(elements, {
    y,
    opacity: 0,
    duration,
    stagger,
    ease,
  });
}

// ═══════════════════════════════════════════
//  GLITCH TIMELINE — RGB split flicker
// ═══════════════════════════════════════════
export function createGlitchTimeline(element) {
  const tl = gsap.timeline();

  tl.to(element, {
    x: -2,
    textShadow: '-2px 0 #FF00AA, 2px 0 #00F0FF',
    duration: 0.05,
  })
    .to(element, {
      x: 2,
      textShadow: '2px 0 #FF00AA, -2px 0 #00F0FF',
      duration: 0.05,
    })
    .to(element, {
      x: -1,
      textShadow: '-1px 0 #8B5CF6, 1px 0 #00F0FF',
      duration: 0.05,
    })
    .to(element, {
      x: 0,
      textShadow: 'none',
      duration: 0.05,
    });

  return tl;
}

// ═══════════════════════════════════════════
//  MAGNETIC EFFECT — quickTo for pull
// ═══════════════════════════════════════════
export function createMagneticEffect(ref, strength = 0.3) {
  if (!ref.current) return { destroy: () => {} };

  const el = ref.current;
  const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
  const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });

  const handleMove = (e) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    xTo(dx);
    yTo(dy);
  };

  const handleLeave = () => {
    xTo(0);
    yTo(0);
  };

  el.addEventListener('mousemove', handleMove);
  el.addEventListener('mouseleave', handleLeave);

  return {
    destroy: () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    },
  };
}

// ═══════════════════════════════════════════
//  SPLIT TEXT REVEAL — Word-by-word scroll
// ═══════════════════════════════════════════
export function splitTextReveal(element, options = {}) {
  const {
    stagger = 0.03,
    duration = 0.8,
    ease = 'power3.out',
    scrollTrigger = null,
  } = options;

  // Split into words
  const text = element.textContent;
  const words = text.split(' ');
  element.innerHTML = '';

  words.forEach((word, i) => {
    const wrapper = document.createElement('span');
    wrapper.style.display = 'inline-block';
    wrapper.style.overflow = 'hidden';
    wrapper.style.verticalAlign = 'top';

    const inner = document.createElement('span');
    inner.style.display = 'inline-block';
    inner.textContent = word;
    inner.classList.add('split-word');

    wrapper.appendChild(inner);
    element.appendChild(wrapper);

    // Add space between words
    if (i < words.length - 1) {
      const space = document.createTextNode('\u00A0');
      element.appendChild(space);
    }
  });

  const wordElements = element.querySelectorAll('.split-word');

  const config = {
    y: '110%',
    opacity: 0,
    duration,
    stagger,
    ease,
  };

  if (scrollTrigger) {
    config.scrollTrigger = scrollTrigger;
  }

  return gsap.from(wordElements, config);
}
