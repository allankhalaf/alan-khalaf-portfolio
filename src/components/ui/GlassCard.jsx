import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const GlassCard = ({ children, className, hover = true, glow = false }) => {
  return (
    <div
      className={cn(
        'glass-card p-8 transition-all duration-500',
        hover && 'hover:-translate-y-2 hover:shadow-card-hover hover:border-line-strong',
        glow && 'glow-border',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;