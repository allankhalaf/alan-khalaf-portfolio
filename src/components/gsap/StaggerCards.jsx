import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StaggerCards = ({ children, className = '', stagger = 0.15, duration = 0.6 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cards = el.children;
    if (cards.length === 0) return;

    gsap.set(cards, { scale: 0.95, y: 30, opacity: 0 });

    const animation = gsap.to(cards, {
      scale: 1,
      y: 0,
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

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default StaggerCards;
