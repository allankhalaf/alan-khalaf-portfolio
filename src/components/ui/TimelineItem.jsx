import React from 'react';
import { useLanguage } from '@context/LanguageContext';

const TimelineItem = ({ experience, index, isLast }) => {
  const { t } = useLanguage();

  return (
    <div className="timeline-item relative pl-14 pb-12 last:pb-0">
      {!isLast && (
        <div className="absolute left-[22px] top-10 bottom-0 w-px bg-gradient-to-b from-primary/30 to-transparent hidden md:block" />
      )}

      <div className="absolute left-0 top-1 w-11 h-11 rounded-full bg-bg-card-solid border-2 border-primary/30 flex items-center justify-center shadow-glow-primary">
        <div className="w-3 h-3 rounded-full bg-primary" />
      </div>

      <div className="timeline-item-content space-y-4 bg-bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-line/50 hover:border-primary/20 transition-all duration-300">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="text-primary font-display font-semibold text-body-sm tracking-wide">
            {t(experience.orgKey)}
          </span>
          <span className="w-1 h-1 rounded-full bg-text-muted" />
          <span className="text-text-muted font-medium">{t(experience.dateKey)}</span>
        </div>

        <h3 className="text-heading-2 font-display font-bold text-text">
          {t(experience.titleKey)}
        </h3>

        <ul className="space-y-3">
          {experience.itemsKey.map((itemKey, i) => (
            <li key={i} className="text-body-sm text-text-soft flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0 shadow-glow-secondary" />
              {t(itemKey)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;