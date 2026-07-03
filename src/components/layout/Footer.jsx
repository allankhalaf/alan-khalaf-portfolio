import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-line bg-bg-soft py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Alan Khalaf. {t('footer_rights')}
          </p>
          <button onClick={scrollToTop}
            className="flex items-center gap-2 text-text-muted hover:text-primary text-sm font-medium transition-colors duration-300 group">
            {t('footer_top')}
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
