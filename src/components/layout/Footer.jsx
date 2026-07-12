import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const { t, dir, language } = useLanguage();
  const isRTL = dir === 'rtl';
  const isArabic = language === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/allankhalaf', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/allankhalaf', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:allan4tech@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+963988317684', label: 'Phone' },
  ];

  const quickLinks = [
    { href: '#hero', label: t('nav_home') || 'Home' },
    { href: '#about', label: t('nav_about') || 'About' },
    { href: '#projects', label: t('nav_projects') || 'Projects' },
    { href: '#contact', label: t('nav_contact') || 'Contact' },
  ];

  const services = [
    t('service_web') || 'Web Development',
    t('service_ui') || 'UI/UX Design',
    t('service_responsive') || 'Responsive Design',
    t('service_seo') || 'SEO Optimization',
  ];

  return (
    <footer id="footer" className="relative bg-bg-card/30 border-t border-line/50" dir={dir}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

        {/* Desktop: 4 columns with explicit order */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 lg:gap-12">
          <div className={isRTL ? 'lg:order-4' : 'lg:order-1'}>
            <ContactColumn />
          </div>
          <div className={isRTL ? 'lg:order-3' : 'lg:order-2'}>
            <ServicesColumn />
          </div>
          <div className={isRTL ? 'lg:order-2' : 'lg:order-3'}>
            <LinksColumn />
          </div>
          <div className={isRTL ? 'lg:order-1' : 'lg:order-4'}>
            <BrandColumn />
          </div>
        </div>

        {/* Tablet: 2 columns */}
        <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-8">
          <div className={isRTL ? 'sm:order-2' : 'sm:order-1'}>
            <ContactColumn />
          </div>
          <div className={isRTL ? 'sm:order-1' : 'sm:order-2'}>
            <BrandColumn />
          </div>
          <div className={isRTL ? 'sm:order-4' : 'sm:order-3'}>
            <ServicesColumn />
          </div>
          <div className={isRTL ? 'sm:order-3' : 'sm:order-4'}>
            <LinksColumn />
          </div>
        </div>

        {/* Mobile: 1 column */}
        <div className="grid sm:hidden grid-cols-1 gap-8">
          <BrandColumn />
          <LinksColumn />
          <ServicesColumn />
          <ContactColumn />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-line/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Copyright */}
            <p className="text-text-muted text-xs sm:text-sm text-center sm:text-left" dir="auto">
              {isArabic ? (
                <>
                  <bdi>© {currentYear} Alan Khalaf.</bdi>
                  {' '}
                  <bdi>جميع الحقوق محفوظة.</bdi>
                </>
              ) : (
                <span>© {currentYear} Alan Khalaf. {t('footer_rights') || 'All rights reserved.'}</span>
              )}
            </p>

            {/* Made with love */}
            <p className="text-text-muted text-xs sm:text-sm" dir="auto">
              {isArabic ? (
                <span className="inline-flex items-center gap-1.5">
                  <bdi>صُنع بـ</bdi>
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                  <bdi>بواسطة</bdi>
                  <bdi className="text-primary font-medium">Alan Khalaf</bdi>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5">
                  <span>{t('footer_made') || 'Made with'}</span>
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                  <span>{t('footer_by') || 'by'}</span>
                  <span className="text-primary font-medium">Alan Khalaf</span>
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-bg-primary shadow-lg shadow-primary/30 flex items-center justify-center hover:bg-primary-light transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ 
          right: isRTL ? 'auto' : '1.5rem', 
          left: isRTL ? '1.5rem' : 'auto'
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );

  // Sub-components
  function BrandColumn() {
    return (
      <div className={`text-center sm:text-left ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
        <div className={`flex items-center gap-3 mb-4 justify-center sm:justify-start ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-bold text-text">Alan Khalaf</span>
        </div>
        <p className={`text-text-soft text-sm leading-relaxed mb-6 max-w-xs mx-auto sm:mx-0 ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('footer_description') || 'Full Stack Developer specializing in building exceptional digital experiences with modern technologies.'}
        </p>
        <div className={`flex items-center gap-3 justify-center sm:justify-start ${isRTL ? 'flex-row-reverse' : ''}`}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-bg-card border border-line/50 flex items-center justify-center text-text-soft hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  function LinksColumn() {
    return (
      <div className={`text-center sm:text-left ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
        <h3 className={`text-text font-semibold mb-4 text-sm uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('footer_links') || 'Quick Links'}
        </h3>
        <ul className="space-y-3">
          {quickLinks.map((link) => (
            <li key={link.href} className={isRTL ? 'text-right' : 'text-left'}>
              <a href={link.href} className="text-text-soft hover:text-primary transition-colors text-sm inline-block">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function ServicesColumn() {
    return (
      <div className={`text-center sm:text-left ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
        <h3 className={`text-text font-semibold mb-4 text-sm uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('footer_services') || 'Services'}
        </h3>
        <ul className="space-y-3">
          {services.map((service, i) => (
            <li key={i} className={`text-text-soft text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
              {service}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function ContactColumn() {
    return (
      <div className={`text-center sm:text-left ${isRTL ? 'sm:text-right' : 'sm:text-left'}`}>
        <h3 className={`text-text font-semibold mb-4 text-sm uppercase tracking-wider ${isRTL ? 'text-right' : 'text-left'}`}>
          {t('footer_contact') || 'Contact'}
        </h3>
        <ul className="space-y-3">
          {/* Email */}
          <li className={isRTL ? 'text-right' : 'text-left'}>
            <a 
              href="mailto:allan4tech@gmail.com" 
              className="text-text-soft hover:text-primary transition-colors text-sm inline-flex items-center gap-2"
              style={{ direction: isRTL ? 'rtl' : 'ltr' }}
            >
              <Mail className="w-4 h-4 shrink-0" />
              <span>allan4tech@gmail.com</span>
            </a>
          </li>

          {/* Phone */}
          <li className={isRTL ? 'text-right' : 'text-left'}>
            <a 
              href="tel:+963988317684" 
              className="text-text-soft hover:text-primary transition-colors text-sm inline-flex items-center gap-2"
              style={{ direction: isRTL ? 'rtl' : 'ltr' }}
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span dir="ltr">+963 988 317 684</span>
            </a>
          </li>

          {/* Location */}
          <li className={isRTL ? 'text-right' : 'text-left'}>
            <div 
              className="text-text-soft text-sm inline-flex items-center gap-2"
              style={{ direction: isRTL ? 'rtl' : 'ltr' }}
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{isArabic ? 'الحسكة، سوريا' : (t('footer_location') || 'Al Hassakah, Syria')}</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
};

export default Footer;
