import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useGsapReveal } from '@hooks/useGsapReveal';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import GlassCard from '@components/ui/GlassCard';

const educationData = [
  { icon: GraduationCap, titleKey: 'edu_1_title', schoolKey: 'edu_1_school' },
  { icon: Award, titleKey: 'edu_2_title', schoolKey: 'edu_2_school' },
  { icon: BookOpen, titleKey: 'edu_3_title', schoolKey: 'edu_3_school' },
];

const EducationSection = () => {
  const { t } = useLanguage();
  const sectionRef = useGsapReveal({ stagger: 0.2 });

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4 reveal-child">
            <div className="section-kicker inline-flex">{t('edu_kicker')}</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">{t('edu_title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {educationData.map((edu) => (
              <GlassCard key={edu.titleKey} className="reveal-child group" glow>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <edu.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-1">{t(edu.titleKey)}</h3>
                <p className="text-sm text-text-muted">{t(edu.schoolKey)}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
