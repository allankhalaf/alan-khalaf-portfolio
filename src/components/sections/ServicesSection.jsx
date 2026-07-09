import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useGsapReveal, useGsapStagger } from '@hooks/useGsapReveal';
import { ShoppingCart, Laptop, Paintbrush, Languages, PenLine, FileSignature } from 'lucide-react';
import { devServices, translationServices } from '@data/services';
import ServiceCard from '@components/ui/ServiceCard';

const devIcons = {
  ecommerce: ShoppingCart,
  portfolio: Laptop,
  ui: Paintbrush,
};

const transIcons = {
  translation: Languages,
  editing: PenLine,
  writing: FileSignature,
};

const devColors = {
  ecommerce: { color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  portfolio: { color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' },
  ui: { color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' },
};

const transColors = {
  translation: { color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
  editing: { color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' },
  writing: { color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' },
};

const ServicesSection = () => {
  const { t } = useLanguage();
  const devRef = useGsapStagger({ stagger: 0.15 });
  const transRef = useGsapStagger({ stagger: 0.15 });

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-32">
        {/* Dev Services */}
        <div className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="section-kicker">
              <span className="w-2 h-2 rounded-full bg-primary inline-block mr-2" />
              {t('dev_kicker')}
            </div>
            <h2 className="text-display-3 sm:text-display-2 font-display font-bold text-text">
              {t('dev_title')}
            </h2>
            <p className="text-body-lg text-text-soft max-w-2xl mx-auto">
              {t('dev_text')}
            </p>
          </div>

          <div>
            <h3 className="text-heading-1 font-display font-bold text-text mb-10 text-center">
              {t('dev_services_title')}
            </h3>
            <div ref={devRef} className="grid md:grid-cols-3 gap-8">
              {devServices.map((service) => (
                <div key={service.id} className="stagger-card">
                  <ServiceCard 
                    service={service} 
                    icon={devIcons[service.id]} 
                    colors={devColors[service.id]} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Translation Services */}
        <div className="space-y-16">
          <div>
            <h3 className="text-heading-1 font-display font-bold text-text mb-10 text-center">
              {t('trans_services_title')}
            </h3>
            <div ref={transRef} className="grid md:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;