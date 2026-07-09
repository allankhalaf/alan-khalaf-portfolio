import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useGsapReveal } from '@hooks/useGsapReveal';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import GlassCard from '@components/ui/GlassCard';

const educationData = [
  { icon: GraduationCap, titleKey: 'edu_1_title', schoolKey: 'edu_1_school', fieldKey: 'edu_1_field', color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  { icon: Award, titleKey: 'edu_2_title', schoolKey: 'edu_2_school', fieldKey: 'edu_2_field', color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' },
  { icon: BookOpen, titleKey: 'edu_3_title', schoolKey: 'edu_3_school', fieldKey: 'edu_3_field', color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' },
];

const EducationSection = () => {
  const { t } = useLanguage();
  const sectionRef = useGsapReveal({ stagger: 0.2 });

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={sectionRef} className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="section-kicker reveal-child">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block mr-2" />
              {t('edu_kicker')}
            </div>
            <h2 className="text-display-3 sm:text-display-2 font-display font-bold text-text reveal-child">
              {t('edu_title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {educationData.map((edu) => (
              <div key={edu.titleKey} className="reveal-child">
                <GlassCard className="group h-full" glow>
                  <div className={`w-14 h-14 rounded-2xl ${edu.bg} border ${edu.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <edu.icon size={26} className={edu.color} />
                  </div>
                  <h3 className="text-heading-2 font-display font-bold text-text mb-2">
                    {t(edu.titleKey)}
                  </h3>
                  <p className="text-body text-text-muted mb-1">
                    {t(edu.schoolKey)}
                  </p>
                  <p className="text-body-sm text-text-soft">
                    {t(edu.fieldKey)}
                  </p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;