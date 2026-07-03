import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapReveal = (options = {}) => {
  const ref = useRef(null);
  const {
    y = 40,
    opacity = 0,
    duration = 0.8,
    ease = 'power3.out',
    start = 'top 90%',
    stagger = 0.15,
    childrenSelector = '.reveal-child',
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const elements = el.querySelectorAll(childrenSelector);
      if (elements.length === 0) return;

      gsap.set(elements, { y, opacity });

      gsap.to(elements, {
        y: 0,
        opacity: 1,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
};

export const useGsapStagger = (options = {}) => {
  const ref = useRef(null);
  const {
    scale = 0.95,
    y = 30,
    duration = 0.6,
    stagger = 0.15,
    start = 'top 90%',
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Get all direct children instead of using invalid selector
      const cards = el.children;
      if (cards.length === 0) return;

      gsap.set(cards, { scale, y, opacity: 0 });

      gsap.to(cards, {
        scale: 1,
        y: 0,
        opacity: 1,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
};

export const useGsapTimeline = (options = {}) => {
  const ref = useRef(null);
  const { start = 'top 90%' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const line = el.querySelector('.timeline-line');
      const dots = el.querySelectorAll('.timeline-dot');
      const items = el.querySelectorAll('.timeline-item-content');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
          once: true,
        },
      });

      if (line) {
        tl.from(line, {
          scaleY: 0,
          transformOrigin: 'top',
          duration: 1,
          ease: 'power2.inOut',
        });
      }

      if (dots.length > 0) {
        tl.from(dots, {
          scale: 0,
          duration: 0.4,
          stagger: 0.2,
          ease: 'back.out(2)',
        }, '-=0.8');
      }

      if (items.length > 0) {
        tl.from(items, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.out',
        }, '-=0.6');
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
};

export default useGsapReveal;
