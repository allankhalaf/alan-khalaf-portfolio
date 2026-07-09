import React from 'react';
import { useScrollProgress } from '@hooks/useScrollProgress';

const ScrollProgress = () => {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-100"
        style={{ width: `${progress}%`, boxShadow: '0 0 10px rgba(110, 168, 254, 0.5)' }} 
      />
    </div>
  );
};

export default ScrollProgress;