import React from 'react';
import { useLanguage } from '@context/LanguageContext';

const TimelineItem = ({ experience, index, isLast }) => {
  const { t } = useLanguage();

  return (
    <div className="timeline-item relative pl-12 pb-8 last:pb-0">
      {!isLast && (
        <div className="absolute left-[18px] top-8 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
      )}

      <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-bg-card border border-primary/30 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-primary" />
      </div>

      <div className="timeline-item-content space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="text-primary font-semibold">{t(experience.orgKey)}</span>
          <span className="text-text-muted">&#8226;</span>
          <span className="text-text-muted">{t(experience.dateKey)}</span>
        </div>

        <h3 className="text-lg font-bold text-text">{t(experience.titleKey)}</h3>

        <ul className="space-y-2">
          {experience.itemsKey.map((itemKey, i) => (
            <li key={i} className="text-sm text-text-soft flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
              {t(itemKey)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
