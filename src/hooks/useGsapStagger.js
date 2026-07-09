import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const useGsapStagger = (options = {}) => {
  const ref = useRef(null);
  const { stagger = 0.15, y = 30, duration = 0.6 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll('.stagger-card');
    if (cards.length === 0) return;
    gsap.set(cards, { scale: 0.95, y, opacity: 0 });

    const animation = gsap.to(cards, {
      scale: 1, y: 0, opacity: 1, duration, stagger,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
    });
    return () => { animation.kill(); };
  }, [stagger, y, duration]);
  return ref;
};