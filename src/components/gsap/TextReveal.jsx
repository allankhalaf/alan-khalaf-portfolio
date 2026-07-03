import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ children, className = '', stagger = 0.03, duration = 0.8 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll('.word');

    gsap.set(words, { yPercent: 100, opacity: 0 });

    const animation = gsap.to(words, {
      yPercent: 0,
      opacity: 1,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [stagger, duration]);

  const wrapWords = (text) => {
    if (typeof text !== 'string') return text;
    return text.split(' ').map((word, i) => (
      <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
        <span className="word inline-block">{word}</span>
      </span>
    ));
  };

  return (
    <div ref={ref} className={className}>
      {typeof children === 'string' ? wrapWords(children) : children}
    </div>
  );
};

export default TextReveal;
