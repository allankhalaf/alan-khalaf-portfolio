import React, { useState, useEffect } from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useActiveSection } from '@hooks/useScrollProgress';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '@components/ui/LanguageSwitcher';

const navItems = [
  { id: 'about', key: 'nav_about' },
  { id: 'services', key: 'nav_services' },
  { id: 'experience', key: 'nav_experience' },
  { id: 'skills', key: 'nav_skills' },
  { id: 'projects', key: 'nav_projects' },
  { id: 'contact', key: 'nav_contact' },
];

const Header = () => {
  const { t, language, direction } = useLanguage();
  const activeSection = useActiveSection(navItems.map(item => item.id), 300);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isRTL = direction === 'rtl';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-bg-primary/80 backdrop-blur-2xl border-b border-line/50 shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20" dir={isRTL ? 'rtl' : 'ltr'}>
            {/* Logo */}
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-3 group shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow-primary group-hover:scale-110 transition-transform duration-300">
                <span className="text-bg-primary font-display font-bold text-lg">A</span>
              </div>
              <span className="font-display font-bold text-xl text-text group-hover:text-primary transition-colors duration-300 hidden sm:block whitespace-nowrap">
                {isRTL ? 'الان' : 'Alan'}
              </span>
            </a>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center gap-1 mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-xl text-body-sm font-display font-medium transition-all duration-300 whitespace-nowrap ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-text-soft hover:text-text hover:bg-white/5'
                  }`}
                >
                  {t(item.key)}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Side - Language Switcher */}
            <div className="flex items-center gap-4 shrink-0">
              <LanguageSwitcher />

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-xl bg-white/5 border border-line flex items-center justify-center text-text hover:bg-white/10 transition-all duration-300"
                aria-label={isMobileMenuOpen ? t('close_menu') : t('open_menu')}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-2xl" onClick={() => setIsMobileMenuOpen(false)} />
        <nav 
          dir={isRTL ? 'rtl' : 'ltr'}
          className={`absolute top-24 left-4 right-4 bg-bg-card-solid border border-line rounded-3xl p-6 shadow-2xl transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full px-5 py-4 rounded-2xl text-body font-display font-medium transition-all duration-300 text-start ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10 border border-primary/20'
                    : 'text-text-soft hover:text-text hover:bg-white/5'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center justify-between">
                  {t(item.key)}
                  {activeSection === item.id && (
                    <span className="w-2 h-2 rounded-full bg-primary shadow-glow-primary" />
                  )}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
