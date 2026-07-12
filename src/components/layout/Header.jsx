import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@context/LanguageContext';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';

const Header = () => {
  const { t, toggleLanguage, dir, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRTL = dir === 'rtl';
  const isArabic = language === 'ar';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#hero', label: t('nav_home') || 'Home' },
    { href: '#about', label: t('nav_about') || 'About' },
    { href: '#experience', label: t('nav_experience') || 'Experience' },
    { href: '#projects', label: t('nav_projects') || 'Projects' },
    { href: '#contact', label: t('nav_contact') || 'Contact' },
  ];

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-bg-primary/95 backdrop-blur-xl shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-base">A</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-text hidden sm:block">
                Alan Khalaf
              </span>
            </a>

            {/* Desktop Nav - Center */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 py-2 text-sm font-medium text-text-soft hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Side - Language + Mobile Menu ONLY */}
            <div className="flex items-center gap-2">
              {/* Language Switcher - Shows target language */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-text-soft hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {isArabic ? 'English' : 'العربية'}
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-text-soft hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 ${isRTL ? 'right-0' : 'left-0'} h-full w-[280px] max-w-[80vw] z-50 bg-bg-primary border-${isRTL ? 'r' : 'l'} border-line shadow-2xl transform transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : isRTL ? 'translate-x-full' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-text">Alan Khalaf</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-text-soft hover:text-primary rounded-lg hover:bg-primary/5"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex-1 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="w-full px-4 py-3 text-left text-text-soft hover:text-primary hover:bg-primary/5 rounded-xl transition-colors text-base font-medium"
                style={{ textAlign: isRTL ? 'right' : 'left' }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile CTA - Single Button at Bottom */}
          <div className="pt-6 border-t border-line">
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full py-3 bg-primary text-bg-primary font-semibold rounded-xl hover:bg-primary-light transition-colors flex items-center justify-center gap-2"
            >
              {t('nav_contact') || 'Contact Me'}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
