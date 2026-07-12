import React from 'react';
import { useLanguage } from '@context/LanguageContext';

const TimelineItem = ({ experience, index, isLast }) => {
  const { t, dir } = useLanguage();
  const isRTL = dir === 'rtl';

  return (
    <div 
      className={`timeline-item relative pb-12 ${isLast ? '' : 'mb-12'}`}
      style={{ 
        paddingLeft: isRTL ? '0' : '56px',
        paddingRight: isRTL ? '56px' : '0'
      }}
    >
      {/* Timeline Line */}
      {!isLast && (
        <div 
          className="absolute top-10 bottom-0 w-px bg-gradient-to-b from-primary/30 to-transparent hidden md:block"
          style={{ 
            left: isRTL ? 'auto' : '22px',
            right: isRTL ? '22px' : 'auto'
          }}
        />
      )}

      {/* Dot */}
      <div 
        className="absolute top-1 w-11 h-11 rounded-full bg-bg-card-solid border-2 border-primary/30 flex items-center justify-center shadow-glow-primary"
        style={{ 
          left: isRTL ? 'auto' : '0',
          right: isRTL ? '0' : 'auto'
        }}
      >
        <div className="w-3 h-3 rounded-full bg-primary" />
      </div>

      {/* Content Card */}
      <div className="timeline-item-content space-y-4 bg-bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-line/50 hover:border-primary/20 transition-all duration-300">

        {/* Header: Org + Date */}
        <div 
          className="flex flex-wrap items-center gap-3 text-sm"
          style={{ direction: isRTL ? 'rtl' : 'ltr' }}
        >
          <span className="text-primary font-display font-semibold text-body-sm tracking-wide">
            {t(experience.orgKey)}
          </span>
          <span className="w-1 h-1 rounded-full bg-text-muted" />
          <span className="text-text-muted font-medium">{t(experience.dateKey)}</span>
        </div>

        {/* Title */}
        <h3 
          className="text-heading-2 font-display font-bold text-text"
          style={{ textAlign: isRTL ? 'right' : 'left' }}
        >
          {t(experience.titleKey)}
        </h3>

        {/* Items */}
        <ul className="space-y-3">
          {experience.itemsKey.map((itemKey, i) => (
            <li 
              key={i} 
              className="text-body-sm text-text-soft flex items-start gap-3"
              style={{ 
                direction: isRTL ? 'rtl' : 'ltr',
                textAlign: isRTL ? 'right' : 'left'
              }}
            >
              <span 
                className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0 shadow-glow-secondary"
                style={{ order: isRTL ? 1 : 0 }}
              />
              <span className="flex-1">{t(itemKey)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
