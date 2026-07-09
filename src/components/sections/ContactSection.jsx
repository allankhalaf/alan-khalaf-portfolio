import React, { useState } from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useGsapReveal } from '@hooks/useGsapReveal';
import { Send, Mail, MapPin, Phone, Github, MessageCircle, CheckCircle, AlertCircle, Clock, Globe, ArrowUpRight } from 'lucide-react';
import GlassCard from '@components/ui/GlassCard';
import GlowButton from '@components/ui/GlowButton';

const ContactSection = () => {
  const { t } = useLanguage();
  const sectionRef = useGsapReveal({ stagger: 0.15 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={sectionRef} className="space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="section-kicker reveal-child">
              <span className="w-2 h-2 rounded-full bg-primary inline-block mr-2" />
              {t('contact_badge')}
            </div>
            <h2 className="text-display-3 sm:text-display-2 font-display font-bold text-text reveal-child">
              {t('contact_title')}
            </h2>
            <p className="text-body-lg text-text-soft max-w-2xl mx-auto reveal-child">
              {t('contact_subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8 reveal-child">
              <GlassCard className="h-full" glow>
                <div className="space-y-8">
                  <h3 className="text-heading-2 font-display font-bold text-text mb-6">
                    {t('get_in_touch')}
                  </h3>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-body font-display font-semibold text-text mb-1">{t('contact_phone')}</h4>
                      <a href="tel:+963988317684" className="text-body text-text-soft hover:text-primary transition-colors duration-300 ltr-value">
                        {t('phone_number')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                      <Mail size={22} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-body font-display font-semibold text-text mb-1">{t('contact_email')}</h4>
                      <a href="mailto:allan4tech@gmail.com" className="text-body text-text-soft hover:text-secondary transition-colors duration-300 ltr-value">
                        allan4tech@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <Github size={22} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-body font-display font-semibold text-text mb-1">{t('contact_github')}</h4>
                      <a href="https://github.com/allankhalaf" target="_blank" rel="noopener noreferrer" className="text-body text-text-soft hover:text-accent transition-colors duration-300 ltr-value">
                        github.com/allankhalaf
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <MessageCircle size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-body font-display font-semibold text-text mb-1">{t('contact_whatsapp')}</h4>
                      <a href="https://wa.me/963988317684" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-body text-primary hover:text-primary-strong transition-colors duration-300">
                        {t('whatsapp_me')}
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-line/50 space-y-3">
                    <div className="flex items-center gap-3 text-text-muted">
                      <Clock size={16} className="text-secondary" />
                      <span className="text-body-sm">{t('response_time')}</span>
                    </div>
                    <div className="flex items-center gap-3 text-text-muted">
                      <Globe size={16} className="text-accent" />
                      <span className="text-body-sm">{t('location_value')}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 reveal-child">
              <GlassCard className="h-full" glow>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-body-sm font-display font-semibold text-text-soft">
                        {t('form_name')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-line text-text placeholder:text-text-muted focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all duration-300 text-body"
                        placeholder={t('placeholder_name')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-body-sm font-display font-semibold text-text-soft">
                        {t('form_email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-line text-text placeholder:text-text-muted focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all duration-300 text-body"
                        placeholder={t('placeholder_email')}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-body-sm font-display font-semibold text-text-soft">
                      {t('form_subject')}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-line text-text placeholder:text-text-muted focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all duration-300 text-body"
                      placeholder={t('placeholder_subject')}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-body-sm font-display font-semibold text-text-soft">
                      {t('form_message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-line text-text placeholder:text-text-muted focus:border-primary/50 focus:bg-white/10 focus:outline-none transition-all duration-300 text-body resize-none"
                      placeholder={t('placeholder_message')}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <GlowButton variant="primary" icon={Send} className="w-full sm:w-auto">
                      {t('send_message_btn')}
                    </GlowButton>
                    
                    {status === 'success' && (
                      <div className="flex items-center gap-2 text-secondary animate-fade-up">
                        <CheckCircle size={20} />
                        <span className="text-body-sm font-semibold">{t('message_sent')}</span>
                      </div>
                    )}
                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-danger animate-fade-up">
                        <AlertCircle size={20} />
                        <span className="text-body-sm font-semibold">{t('message_error')}</span>
                      </div>
                    )}
                  </div>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;