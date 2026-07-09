import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import translations from '@data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-lang') || 'en';
    }
    return 'en';
  });

  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const html = document.documentElement;
    const body = document.body;
    const dir = language === 'ar' ? 'rtl' : 'ltr';

    html.setAttribute('lang', language);
    html.setAttribute('dir', dir);

    body.classList.remove('rtl', 'ltr');
    body.classList.add(dir);

    setDirection(dir);

    // Safe title update
    const titleText = translations[language]?.hero_title || 'Alan Khalaf';
    document.title = `${titleText} | Portfolio`;
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

  // Safe translation function with fallback
  const t = useCallback((key) => {
    if (!key) return '';
    const translation = translations[language]?.[key];
    if (translation === undefined) {
      console.warn(`Translation missing for key: "${key}" in language: "${language}"`);
      return key;
    }
    return translation;
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
