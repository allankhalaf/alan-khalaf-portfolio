import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const gsapDefaults = {
  ease: 'power3.out',
  duration: 0.8,
};

export const scrollTriggerDefaults = {
  start: 'top 85%',
  toggleActions: 'play none none none',
};

export default gsap;
