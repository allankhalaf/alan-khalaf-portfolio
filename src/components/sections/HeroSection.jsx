import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@context/LanguageContext';
import { ArrowDown, Download, Briefcase, Globe, Phone, Mail, Github } from 'lucide-react';
import GlowButton from '@components/ui/GlowButton';

const HeroSection = () => {
  const { t, direction } = useLanguage();
  const heroRef = useRef(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll('.animate-in');
    elements?.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'all 0.8s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300 + i * 200);
    });
  }, []);

  const scrollToWork = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = './cv/Alan_Khalaf_CV.pdf';
    link.download = 'Alan_Khalaf_CV.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg-soft to-bg-card-2 z-0" />
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="animate-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              {t('hero_eyebrow')}
            </div>

            <div className="animate-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text leading-tight">
                {t('hero_title')}
              </h1>
              <p className="text-lg sm:text-xl text-text-soft mt-6 max-w-xl leading-relaxed">
                {t('hero_subtitle')}
              </p>
            </div>

            <div className="animate-in flex flex-wrap gap-3">
              <GlowButton variant="primary" onClick={scrollToWork} icon={Briefcase}>
                {t('hero_btn_work')}
              </GlowButton>
              <GlowButton variant="secondary" href="#contact">
                {t('hero_btn_contact')}
              </GlowButton>
              <GlowButton variant="outline" icon={Download} onClick={downloadCV}>
                {t('hero_btn_cv')}
              </GlowButton>
            </div>

            <div className="animate-in flex flex-wrap gap-2">
              {[t('hero_tag_1'), t('hero_tag_2'), t('hero_tag_3')].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full text-sm text-text-soft bg-white/5 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            <div className="animate-in grid grid-cols-3 gap-6 pt-4">
              {[
                { num: t('hero_stat_1_num'), label: t('hero_stat_1_label') },
                { num: t('hero_stat_2_num'), label: t('hero_stat_2_label') },
                { num: t('hero_stat_3_num'), label: t('hero_stat_3_label') },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-gradient">{stat.num}</div>
                  <div className="text-sm text-text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Profile Card - Visible on ALL screens */}
          <div className="animate-in order-1 lg:order-2">
            <div className="glass-card p-6 sm:p-8 space-y-6 max-w-md mx-auto lg:ml-auto">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_0_6px_rgba(50,210,150,0.2)]" />
                <span className="text-sm text-text-soft">{t('hero_card_status')}</span>
              </div>

              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img 
                    src="./images/alan-profile.jpg" 
                    alt="Alan Khalaf"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl font-bold text-gradient">AK</div>';
                    }}
                  />
                </div>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold text-text">{t('hero_card_name')}</h3>
                <p className="text-text-muted mt-1">{t('hero_card_role')}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <Briefcase size={18} className="text-primary mb-2" />
                  <div className="text-sm font-medium text-text">{t('hero_mini_exp_title')}</div>
                  <div className="text-xs text-text-muted">{t('hero_mini_exp_text')}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5">
                  <Globe size={18} className="text-secondary mb-2" />
                  <div className="text-sm font-medium text-text">{t('hero_mini_lang_title')}</div>
                  <div className="text-xs text-text-muted">{t('hero_mini_lang_text')}</div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <a href="tel:+963988317684" className="flex items-center gap-2 text-sm text-text-soft hover:text-primary transition-colors">
                  <Phone size={14} />
                  {t('hero_contact_phone')}
                </a>
                <a href="mailto:allan4tech@gmail.com" className="flex items-center gap-2 text-sm text-text-soft hover:text-primary transition-colors">
                  <Mail size={14} />
                  {t('hero_contact_email')}
                </a>
                <a href="https://github.com/allankhalaf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-text-soft hover:text-primary transition-colors">
                  <Github size={14} />
                  {t('hero_contact_github')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted animate-bounce">
          <span className="text-xs">{direction === 'rtl' ? 'اسحب للأسفل' : 'Scroll Down'}</span>
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
