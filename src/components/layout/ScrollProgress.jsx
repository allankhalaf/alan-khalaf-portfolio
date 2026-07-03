import React from 'react';
import { useScrollProgress } from '@hooks/useScrollProgress';

const ScrollProgress = () => {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100"
        style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ScrollProgress;
