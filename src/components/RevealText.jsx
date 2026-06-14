import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function RevealText({
  children,
  className = '',
  as: Tag = 'p',
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  // If children is not a simple string, just fade the whole block
  if (typeof children !== 'string') {
    return (
      <Tag ref={ref} className={className}>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
            visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 1, delay } },
          }}
        >
          {children}
        </motion.div>
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className}>
      <motion.div
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em' }}
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            style={{ display: 'inline-block' }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </Tag>
  );
}
