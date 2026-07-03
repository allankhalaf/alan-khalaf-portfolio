import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyrightText = language === 'ar'
    ? `جميع الحقوق محفوظة ، Alan Khalaf ${currentYear}`
    : `All Rights Reserved, Alan Khalaf ${currentYear}`;

  return (
    <footer className="py-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright Text */}
          <div
            className="text-text-muted text-sm text-center sm:text-left"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {copyrightText}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
            aria-label={language === 'ar' ? 'العودة للأعلى' : 'Back to top'}
          >
            <ArrowUp size={18} className="text-text-muted group-hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;