import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useGsapReveal } from '@hooks/useGsapReveal';
import { Code, Heart, Languages } from 'lucide-react';
import GlassCard from '@components/ui/GlassCard';

const aboutCards = [
  { icon: Code, key: 'about_card_1', color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  { icon: Heart, key: 'about_card_2', color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' },
  { icon: Languages, key: 'about_card_3', color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' },
];

const AboutSection = () => {
  const { t } = useLanguage();
  const sectionRef = useGsapReveal({ stagger: 0.2 });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={sectionRef} className="space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="section-kicker reveal-child">
              <span className="w-2 h-2 rounded-full bg-primary inline-block mr-2" />
              {t('about_kicker')}
            </div>
            <h2 className="text-display-3 sm:text-display-2 font-display font-bold text-text reveal-child">
              {t('about_title')}
            </h2>
            <p className="text-body-lg text-text-soft leading-relaxed reveal-child max-w-2xl mx-auto">
              {t('about_text')}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {aboutCards.map((card) => (
              <div key={card.key} className="reveal-child">
                <GlassCard className="group h-full" glow>
                  <div className={`w-14 h-14 rounded-2xl ${card.bg} border ${card.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <card.icon size={26} className={card.color} />
                  </div>
                  <h3 className="text-heading-2 font-display font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300">
                    {t(`${card.key}_title`)}
                  </h3>
                  <p className="text-body text-text-muted leading-relaxed">
                    {t(`${card.key}_text`)}
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

export default AboutSection;