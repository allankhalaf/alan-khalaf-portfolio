import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import GlassCard from './GlassCard';

const ServiceCard = ({ service, icon: Icon, colors }) => {
  const { t } = useLanguage();

  return (
    <GlassCard className="group h-full" glow>
      <div className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
        <Icon size={26} className={colors.color} />
      </div>
      <h3 className="text-heading-2 font-display font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300">
        {t(service.titleKey)}
      </h3>
      <p className="text-body text-text-muted leading-relaxed">
        {t(service.textKey)}
      </p>
    </GlassCard>
  );
};

export default ServiceCard;