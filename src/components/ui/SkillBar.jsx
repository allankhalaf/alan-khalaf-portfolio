import React, { useRef, useEffect, useState } from 'react';

const SkillBar = ({ name, level, icon, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="space-y-3 group">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {icon && <i className={`${icon} text-primary text-lg`} />}
          <span className="text-body font-display font-semibold text-text">{name}</span>
        </div>
        <span className="text-body-sm font-display font-bold text-primary">{level}%</span>
      </div>
      <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 ease-out relative"
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default SkillBar;