import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useGsapReveal } from '@hooks/useGsapScroll';
import { experience } from '@data/experience';
import TimelineItem from '@components/ui/TimelineItem';

const ExperienceSection = () => {
  const { t } = useLanguage();
  const sectionRef = useGsapReveal({ stagger: 0.2 });

  return (
    <section id="humanitarian" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="section-kicker inline-flex">{t('human_kicker')}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">{t('human_title')}</h2>
          <p className="text-text-soft text-lg">{t('human_text')}</p>
        </div>

        <div ref={sectionRef} className="max-w-3xl mx-auto relative">
          <div className="absolute left-[18px] top-8 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
          {experience.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} isLast={index === experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
