import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import GlassCard from './GlassCard';

const ServiceCard = ({ service, icon: Icon }) => {
  const { t } = useLanguage();

  return (
    <GlassCard className="group h-full" glow>
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="text-lg font-bold text-text mb-2">{t(service.titleKey)}</h3>
      <p className="text-sm text-text-muted">{t(service.textKey)}</p>
    </GlassCard>
  );
};

export default ServiceCard;
