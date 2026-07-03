import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TimelineAnimation = ({ children, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const line = el.querySelector('.timeline-line');
    const dots = el.querySelectorAll('.timeline-dot');
    const items = el.querySelectorAll('.timeline-item-content');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 70%',
        toggleActions: 'play none none none',
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

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill();
      });
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default TimelineAnimation;
