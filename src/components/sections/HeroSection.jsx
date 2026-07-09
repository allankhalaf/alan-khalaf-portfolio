import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useLanguage } from '@context/LanguageContext';
import { ArrowDown, Briefcase, Calendar, Globe, FileText, Download, MapPin, Mail } from 'lucide-react';
import GlowButton from '@components/ui/GlowButton';
import HeroScene from '@components/three/HeroScene';

const HeroSection = () => {
  const { t, language, direction } = useLanguage();
  const textRef = useRef(null);
  const [typedIndex, setTypedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const isRTL = direction === 'rtl';

  const typedTexts = useMemo(() => {
    return [
      t('hero_typed_1'),
      t('hero_typed_2'),
      t('hero_typed_3'),
      t('hero_typed_4'),
    ].filter(Boolean);
  }, [t]);

  useEffect(() => {
    setIsVisible(true);
    if (textRef.current) {
      textRef.current.style.opacity = '0';
      textRef.current.style.transform = 'translateY(30px)';
      const timer = setTimeout(() => {
        if (textRef.current) {
          textRef.current.style.transition = 'all 1s cubic-bezier(0.22, 1, 0.36, 1)';
          textRef.current.style.opacity = '1';
          textRef.current.style.transform = 'translateY(0)';
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (typedTexts.length === 0) return;
    const interval = setInterval(() => {
      setTypedIndex((prev) => (prev + 1) % typedTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [typedTexts.length]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const cvUrl = '/files/Alan_Khalaf_CV.pdf';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/30 via-transparent to-bg-primary/30 z-[1]" />
      <div className="absolute inset-0 noise-overlay z-[1]" />

      <div ref={textRef} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">

        {/* 
          التخطيط:
          - LTR: النص ← يسار | الصورة ← يمين (flex-row)
          - RTL: الصورة ← يمين | النص ← يسار (flex-row-reverse)
        */}
        <div className={`flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>

          {/* ===== TEXT CONTENT ===== */}
          <div className="text-center lg:text-start flex flex-col items-center lg:items-start space-y-6">

            {/* Badge */}
            <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md transition-all duration-500 hover:bg-primary/15 hover:border-primary/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-body-sm font-semibold text-primary tracking-wide whitespace-nowrap">
                {t('hero_badge') || 'Available for Work'}
              </span>
            </div>

            {/* Greeting */}
            <p className={`text-body-lg text-text-muted font-medium transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              {t('hero_greeting') || "Hello, I'm"}
            </p>

            {/* Title */}
            <h1 className={`text-display-1 sm:text-[4rem] lg:text-[5rem] font-bold leading-[0.95] tracking-tight ${isRTL ? 'font-arabic' : 'font-display'} transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
              {isRTL ? (
                <span className="block" style={{ 
                  background: 'linear-gradient(135deg, #6ea8fe 0%, #30c7b5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  paddingBottom: '0.15em',
                  display: 'inline-block'
                }}>
                  {t('hero_name') || 'ألان خلف'}
                </span>
              ) : (
                <span className="text-gradient block">{t('hero_name') || 'Alan Khalaf'}</span>
              )}
            </h1>

            {/* Typed Text */}
            {typedTexts.length > 0 && (
              <div className={`h-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
                <p className="text-heading-2 sm:text-display-3 font-semibold text-primary transition-all duration-500 whitespace-nowrap">
                  <span className="inline-block animate-fade-in">{typedTexts[typedIndex] || typedTexts[0]}</span>
                  <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-blink align-middle" />
                </p>
              </div>
            )}

            {/* Description */}
            <p className={`text-body-lg text-text-muted max-w-lg leading-relaxed transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
              {t('hero_desc') || 'Building beautiful, responsive, and user-friendly web experiences.'}
            </p>

            {/* Quick Info */}
            <div className={`flex items-center gap-4 flex-wrap justify-center lg:justify-start transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '550ms' }}>
              <div className="flex items-center gap-1.5 text-text-muted text-body-sm">
                <MapPin size={14} className="text-accent flex-shrink-0" />
                <span>{t('location_value') || 'Syria - Al Hasakah'}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-text-muted/30" />
              <div className="flex items-center gap-1.5 text-text-muted text-body-sm">
                <Mail size={14} className="text-secondary flex-shrink-0" />
                <span>alan.khalaf@email.com</span>
              </div>
            </div>

            {/* Stats */}
            <div className={`flex items-center gap-6 sm:gap-8 flex-wrap justify-center lg:justify-start transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
              <div className="flex items-center gap-2 text-text-muted group cursor-default">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Briefcase size={16} className="text-primary" />
                </div>
                <span className="text-body-sm font-medium whitespace-nowrap">6+ {t('stat_projects') || 'Projects'}</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted group cursor-default">
                <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Calendar size={16} className="text-secondary" />
                </div>
                <span className="text-body-sm font-medium whitespace-nowrap">8+ {t('stat_years') || 'Years'}</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted group cursor-default">
                <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Globe size={16} className="text-accent" />
                </div>
                <span className="text-body-sm font-medium whitespace-nowrap">3 {t('stat_languages') || 'Languages'}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center gap-4 pt-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '700ms' }}>
              <GlowButton variant="primary" onClick={scrollToProjects} icon={ArrowDown}>
                {t('hero_cta_primary') || 'View My Work'}
              </GlowButton>
              <GlowButton variant="secondary" onClick={scrollToContact}>
                {t('hero_cta_secondary') || 'Contact Me'}
              </GlowButton>

              {/* Download CV Button */}
              <a 
                href={cvUrl} 
                download
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-bg-secondary/60 border border-line/50 backdrop-blur-sm text-text-primary font-semibold text-body-sm transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
              >
                <FileText size={18} className="text-primary transition-transform group-hover:-translate-y-0.5" />
                <span className="whitespace-nowrap">{t('download_cv') || 'Download CV'}</span>
                <Download size={16} className="text-text-muted transition-all group-hover:text-primary group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* ===== PROFILE IMAGE ===== */}
          <div className={`flex-shrink-0 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Animated Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-xl opacity-40 animate-pulse" style={{ transform: 'scale(1.15)' }} />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-primary to-secondary blur-lg opacity-30 animate-spin" style={{ transform: 'scale(1.2)', animationDuration: '8s' }} />

            {/* Image container */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 border-primary/30 backdrop-blur-sm bg-bg-secondary/50 shadow-2xl shadow-primary/10 group cursor-pointer transition-transform duration-500 hover:scale-105">
              <img 
                src="/images/profile.jpg" 
                alt={isRTL ? 'ألان خلف' : 'Alan Khalaf'}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWEwMDM3Ii8+PHRleHQgeD0iNTAlIiB5PSI1NSUiIGZvbnQtZmFtaWx5PSJDYWlybyIgZm9udC1zaXplPSI3MCIgZmlsbD0iIzZlYThmZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+8J+OjTwvdGV4dD48L3N2Zz4=';
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white text-body-xs font-semibold">{t('view_profile') || 'View Profile'}</span>
              </div>
            </div>

            {/* Status Badge */}
            <div className={`absolute -bottom-1 ${isRTL ? '-left-2' : '-right-2'} flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-secondary/90 border border-green-500/30 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-green-500/20 hover:border-green-500/50`}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
              <span className="text-body-xs font-semibold text-green-400 whitespace-nowrap">
                {t('available') || 'Available'}
              </span>
            </div>

            {/* Experience Badge */}
            <div className={`absolute -top-2 ${isRTL ? '-right-2' : '-left-2'} px-2.5 py-1 rounded-lg bg-primary/20 border border-primary/30 backdrop-blur-md`}>
              <span className="text-body-xs font-bold text-primary">8+</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-16 flex justify-center">
          <div 
            className="w-8 h-12 rounded-full border-2 border-line flex items-start justify-center p-2 cursor-pointer hover:border-primary/50 transition-colors duration-300 group"
            onClick={scrollToProjects}
          >
            <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce mt-1 group-hover:bg-secondary transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
