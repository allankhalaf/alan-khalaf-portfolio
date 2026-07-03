import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useGsapReveal } from '@hooks/useGsapReveal';
import { Phone, Mail, Github, MessageCircle, Briefcase, Code, Languages } from 'lucide-react';
import GlassCard from '@components/ui/GlassCard';
import GlowButton from '@components/ui/GlowButton';

const contactLinks = [
  { icon: Phone, label: 'contact_phone', href: 'tel:+963988317684', value: '+963 988 317 684' },
  { icon: Mail, label: 'contact_email', href: 'mailto:allan4tech@gmail.com', value: 'allan4tech@gmail.com' },
  { icon: Github, label: 'contact_github', href: 'https://github.com/allankhalaf', value: 'github.com/allankhalaf' },
  { icon: MessageCircle, label: 'contact_whatsapp', href: 'https://wa.me/963988317684', value: '+963 988 317 684' },
];

const focusAreas = [
  { icon: Briefcase, key: 'contact_card_1' },
  { icon: Code, key: 'contact_card_2' },
  { icon: Languages, key: 'contact_card_3' },
];

const ContactSection = () => {
  const { t } = useLanguage();
  const sectionRef = useGsapReveal({ stagger: 0.15 });

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4 reveal-child">
            <div className="section-kicker inline-flex">{t('contact_kicker')}</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text">{t('contact_title')}</h2>
            <p className="text-text-soft text-lg">{t('contact_text')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="reveal-child flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <link.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted">{t(link.label)}</div>
                    <div className="text-text font-medium">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <GlassCard className="reveal-child" glow>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_0_6px_rgba(50,210,150,0.2)]" />
                <span className="text-sm text-text-soft">{t('contact_card_status')}</span>
              </div>

              <h3 className="text-xl font-bold text-text mb-6">{t('contact_card_title')}</h3>

              <div className="space-y-4">
                {focusAreas.map((area) => (
                  <div key={area.key} className="flex items-center gap-3">
                    <area.icon size={18} className="text-secondary" />
                    <span className="text-text-soft">{t(area.key)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <GlowButton variant="primary" href="#projects">
                  {t('contact_btn')}
                </GlowButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
