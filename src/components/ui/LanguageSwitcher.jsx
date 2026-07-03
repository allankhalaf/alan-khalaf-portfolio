import React from 'react';
import { useLanguage } from '@context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10">
      <button onClick={() => setLang('en')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en' ? 'bg-primary text-[#06111f]' : 'text-text-soft hover:text-text'
        }`}>
        EN
      </button>
      <button onClick={() => setLang('ar')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'ar' ? 'bg-primary text-[#06111f]' : 'text-text-soft hover:text-text'
        }`}>
        &#1593;&#1585;&#1576;&#1610;
      </button>
    </div>
  );
};

export default LanguageSwitcher;
