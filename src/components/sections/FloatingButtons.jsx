import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a href="https://wa.me/963988317684" target="_blank" rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp">
        <MessageCircle size={20} />
      </a>
      <a href="tel:+963988317684"
        className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Phone">
        <Phone size={20} />
      </a>
      {showScrollTop && (
        <button onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-bg-card border border-line text-text-soft flex items-center justify-center shadow-lg hover:bg-white/10 hover:text-text transition-all duration-300"
          aria-label="Scroll to top">
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
