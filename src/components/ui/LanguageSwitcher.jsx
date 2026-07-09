import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLang, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <div className="flex items-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
      <button 
        onClick={() => setLang('en')}
        className={`px-4 py-2 rounded-full text-sm font-display font-semibold transition-all duration-300 whitespace-nowrap ${
          language === 'en' 
            ? 'bg-primary text-[#0a0f1c] shadow-glow-primary' 
            : 'text-text-soft hover:text-text'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button 
        onClick={() => setLang('ar')}
        className={`px-4 py-2 rounded-full text-sm font-display font-semibold transition-all duration-300 whitespace-nowrap ${
          language === 'ar' 
            ? 'bg-primary text-[#0a0f1c] shadow-glow-primary' 
            : 'text-text-soft hover:text-text'
        }`}
        aria-label="التبديل إلى العربية"
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageSwitcher;
