import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useGsapReveal } from '@hooks/useGsapReveal';
import { experience } from '@data/experience';
import TimelineItem from '@components/ui/TimelineItem';

const ExperienceSection = () => {
  const { t } = useLanguage();
  const sectionRef = useGsapReveal({ stagger: 0.2 });

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <div className="section-kicker">
            <span className="w-2 h-2 rounded-full bg-accent inline-block mr-2" />
            {t('human_kicker')}
          </div>
          <h2 className="text-display-3 sm:text-display-2 font-display font-bold text-text">
            {t('human_title')}
          </h2>
          <p className="text-body-lg text-text-soft max-w-2xl mx-auto">
            {t('human_text')}
          </p>
        </div>

        <div ref={sectionRef} className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent hidden md:block" />
          
          {experience.map((exp, index) => (
            <div key={exp.id} className="reveal-child">
              <TimelineItem experience={exp} index={index} isLast={index === experience.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;