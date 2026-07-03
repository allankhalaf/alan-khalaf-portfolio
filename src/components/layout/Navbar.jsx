import React, { useState, useEffect } from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useActiveSection } from '@hooks/useScrollProgress';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { id: 'home', key: 'nav_home' },
  { id: 'about', key: 'nav_about' },
  { id: 'humanitarian', key: 'nav_humanitarian' },
  { id: 'development', key: 'nav_development' },
  { id: 'translation', key: 'nav_translation' },
  { id: 'projects', key: 'nav_projects' },
  { id: 'education', key: 'nav_education' },
  { id: 'contact', key: 'nav_contact' },
];

const Navbar = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map(link => link.id), 200);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-bg/80 backdrop-blur-glass border-b border-line' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollToSection('home')} className="text-xl font-bold text-gradient font-poppins">
              Alan Khalaf
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id ? 'text-primary bg-primary/10' : 'text-text-soft hover:text-text hover:bg-white/5'
                  }`}>
                  {t(link.key)}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-text-soft hover:text-text hover:bg-white/5 transition-all duration-300"
                aria-label="Toggle language">
                <Globe size={16} />
                <span className="hidden sm:inline">{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full text-text-soft hover:text-text hover:bg-white/5 transition-all duration-300"
                aria-label="Toggle menu">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-bg/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-20 left-4 right-4 bg-bg-card border border-line rounded-2xl p-6 shadow-lg transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)}
                className={`px-4 py-3 rounded-xl text-left text-base font-medium transition-all duration-300 ${
                  activeSection === link.id ? 'text-primary bg-primary/10' : 'text-text-soft hover:text-text hover:bg-white/5'
                }`}>
                {t(link.key)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
