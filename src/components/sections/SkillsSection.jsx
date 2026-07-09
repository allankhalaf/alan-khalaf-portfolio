import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useGsapReveal } from '@hooks/useGsapReveal';
import { technicalSkills } from '@data/skills';
import SkillBar from '@components/ui/SkillBar';

const SkillsSection = () => {
  const { t } = useLanguage();
  const skillsRef = useGsapReveal({ stagger: 0.1 });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="section-kicker">
            <span className="w-2 h-2 rounded-full bg-primary inline-block mr-2" />
            {t('dev_kicker')}
          </div>
          <h2 className="text-display-3 sm:text-display-2 font-display font-bold text-text">
            {t('dev_skills_title')}
          </h2>
        </div>

        <div ref={skillsRef} className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
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