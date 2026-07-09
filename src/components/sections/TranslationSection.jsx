import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useGsapReveal, useGsapStagger } from '@hooks/useGsapReveal';
import { Languages, PenLine, FileSignature, Mail, FileText, BookOpen } from 'lucide-react';
import { translationServices } from '@data/services';
import { languageSkills } from '@data/skills';
import ServiceCard from '@components/ui/ServiceCard';
import CircularProgress from '@components/ui/CircularProgress';
import GlassCard from '@components/ui/GlassCard';

const transIcons = {
  translation: Languages,
  editing: PenLine,
  writing: FileSignature,
};

const transColors = {
  translation: { color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  editing: { color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' },
  writing: { color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' },
};

const sampleIcons = [Mail, FileText, BookOpen];
const sampleColors = [
  { color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  { color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' },
  { color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' },
];

const TranslationSection = () => {
  const { t } = useLanguage();
  const servicesRef = useGsapStagger({ stagger: 0.15 });
  const samplesRef = useGsapReveal({ stagger: 0.2 });

  return (
    <section id="translation" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="section-kicker">
            <span className="w-2 h-2 rounded-full bg-secondary inline-block mr-2" />
            {t('trans_kicker')}
          </div>
          <h2 className="text-display-3 sm:text-display-2 font-display font-bold text-text">
            {t('trans_title')}
          </h2>
          <p className="text-body-lg text-text-soft max-w-2xl mx-auto">
            {t('trans_text')}
          </p>
        </div>

        {/* Language Skills */}
        <div className="flex justify-center gap-12 flex-wrap">
          {languageSkills.map((lang) => (
            <CircularProgress key={lang.name} value={lang.level} label={lang.name} />
          ))}
        </div>

        {/* Services */}
        <div>
          <h3 className="text-heading-1 font-display font-bold text-text mb-10 text-center">
            {t('trans_services_title')}
          </h3>
          <div ref={servicesRef} className="grid md:grid-cols-3 gap-8">
            {translationServices.map((service) => (
              <div key={service.id} className="stagger-card">
                <ServiceCard 
                  service={service} 
                  icon={transIcons[service.id]} 
                  colors={transColors[service.id]} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Samples */}
        <div>
          <h3 className="text-heading-1 font-display font-bold text-text mb-10 text-center">
            {t('trans_samples_title')}
          </h3>
          <div ref={samplesRef} className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num, index) => {
              const Icon = sampleIcons[index];
              const colors = sampleColors[index];
              return (
                <div key={num} className="reveal-child">
                  <GlassCard className="group h-full" glow>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                        <Icon size={20} className={colors.color} />
                      </div>
                      <span className={`text-xs font-display font-bold uppercase tracking-wider ${colors.color}`}>
                        {t(`trans_sample_${num}_badge`)}
                      </span>
                    </div>
                    <h4 className="text-heading-2 font-display font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300">
                      {t(`trans_sample_${num}_title`)}
                    </h4>
                    <p className="text-body text-text-muted leading-relaxed">
                      {t(`trans_sample_${num}_text`)}
                    </p>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranslationSection;