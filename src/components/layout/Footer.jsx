import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { Heart, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const { t, language, direction } = useLanguage();
  const currentYear = new Date().getFullYear();
  const isRTL = direction === 'rtl';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, url: 'https://github.com/allankhalaf', label: 'GitHub' },
    { icon: Linkedin, url: '#', label: 'LinkedIn' },
    { icon: Twitter, url: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { id: 'about', key: 'nav_about' },
    { id: 'services', key: 'nav_services' },
    { id: 'projects', key: 'nav_projects' },
    { id: 'contact', key: 'nav_contact' },
  ];

  return (
    <footer className="relative py-16 border-t border-line/50 overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          className="grid md:grid-cols-3 gap-12 mb-12"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow-primary">
                <span className="text-bg-primary font-display font-bold text-lg">A</span>
              </div>
              <span className="font-display font-bold text-xl text-text whitespace-nowrap">
                {isRTL ? 'الان' : 'Alan'}
              </span>
            </div>
            <p className="text-body text-text-muted max-w-xs">
              {t('footer_description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-heading-3 font-display font-bold text-text">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-body text-text-muted hover:text-primary transition-colors duration-300 block w-full text-start"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-heading-3 font-display font-bold text-text whitespace-nowrap">
              {isRTL ? 'تواصل معي' : (t('footer_contact_me') || 'Contact Me')}
            </h4>
            <div className="space-y-2">
              <p className="text-body text-text-muted ltr-value">{t('phone_number')}</p>
              
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div 
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-line/50 gap-6"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 border border-line flex items-center justify-center text-text-soft hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-body-sm text-text-muted flex items-center gap-1.5 justify-center whitespace-nowrap">
              {t('footer_copyright')}
              <Heart size={12} className="text-danger fill-danger" />
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-body-sm text-text-muted hover:text-primary transition-colors duration-300 group whitespace-nowrap"
          >
            {t('back_to_top')}
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
