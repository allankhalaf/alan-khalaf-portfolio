import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { Heart, Code, Languages } from 'lucide-react';
import GlassCard from '@components/ui/GlassCard';

const aboutCards = [
  { icon: Heart, key: 'about_card_1' },
  { icon: Code, key: 'about_card_2' },
  { icon: Languages, key: 'about_card_3' },
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="section-kicker inline-flex">{t('about_kicker')}</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">{t('about_title')}</h2>
            <p className="text-text-soft text-lg leading-relaxed">{t('about_text')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {aboutCards.map((card) => (
              <GlassCard key={card.key} className="group" glow>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <card.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text mb-2">{t(`${card.key}_title`)}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{t(`${card.key}_text`)}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
