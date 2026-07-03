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

const sampleIcons = [Mail, FileText, BookOpen];

const TranslationSection = () => {
  const { t } = useLanguage();
  const servicesRef = useGsapStagger({ stagger: 0.15 });
  const samplesRef = useGsapReveal({ stagger: 0.2 });

  return (
    <section id="translation" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="section-kicker inline-flex">{t('trans_kicker')}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">{t('trans_title')}</h2>
          <p className="text-text-soft text-lg">{t('trans_text')}</p>
        </div>

        <div className="flex justify-center gap-8">
          {languageSkills.map((lang) => (
            <CircularProgress key={lang.name} value={lang.level} label={lang.name} />
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold text-text mb-8 text-center">{t('trans_services_title')}</h3>
          <div ref={servicesRef} className="grid md:grid-cols-3 gap-6">
            {translationServices.map((service) => (
              <ServiceCard key={service.id} service={service} icon={transIcons[service.id]} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-text mb-8 text-center">{t('trans_samples_title')}</h3>
          <div ref={samplesRef} className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num, index) => {
              const Icon = sampleIcons[index];
              return (
                <GlassCard key={num} className="reveal-child group" glow>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={18} className="text-accent" />
                    <span className="text-xs font-medium text-accent">{t(`trans_sample_${num}_badge`)}</span>
                  </div>
                  <h4 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">{t(`trans_sample_${num}_title`)}</h4>
                  <p className="text-sm text-text-muted">{t(`trans_sample_${num}_text`)}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranslationSection;
