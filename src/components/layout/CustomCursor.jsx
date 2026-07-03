import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '@hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    if (cursorRef.current && cursorDotRef.current) {
      cursorRef.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
      cursorDotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
    }
  }, [x, y]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/50 pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden lg:block"
        style={{ willChange: 'transform' }} />
      <div ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] hidden lg:block"
        style={{ willChange: 'transform' }} />
    </>
  );
};

export default CustomCursor;
