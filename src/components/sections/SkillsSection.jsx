import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useGsapReveal } from '@hooks/useGsapReveal';
import { technicalSkills } from '@data/skills';
import SkillBar from '@components/ui/SkillBar';

const SkillsSection = () => {
  const { t } = useLanguage();
  const skillsRef = useGsapReveal({ stagger: 0.1 });

  return (
    <section id="development" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="section-kicker inline-flex">{t('dev_kicker')}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">{t('dev_skills_title')}</h2>
        </div>

        <div ref={skillsRef} className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {technicalSkills.map((skill, index) => (
            <div key={skill.name} className="reveal-child">
              <SkillBar name={skill.name} level={skill.level} icon={skill.icon} delay={index * 100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
