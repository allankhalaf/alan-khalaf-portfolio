import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import translations from '@data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-lang') || 'ar';
    }
    return 'ar';
  });

  const [direction, setDirection] = useState('rtl');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const html = document.documentElement;
    const body = document.body;

    html.setAttribute('lang', language);
    html.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');

    body.classList.remove('rtl', 'ltr');
    body.classList.add(language === 'ar' ? 'rtl' : 'ltr');

    setDirection(language === 'ar' ? 'rtl' : 'ltr');

    document.title = (translations[language]?.hero_title || 'Alan Khalaf') + ' | Portfolio';
  }, [language]);

  const toggleLanguage = useCallback(() => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-lang', newLang);
    }
  }, [language]);

  const setLang = useCallback((lang) => {
    if (lang === 'en' || lang === 'ar') {
      setLanguage(lang);
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-lang', lang);
      }
    }
  }, []);

  const t = useCallback((key) => {
    return translations[language]?.[key] || key;
  }, [language]);

  const value = {
    language,
    direction,
    toggleLanguage,
    setLang,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
