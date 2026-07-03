import React, { useEffect, useState, useRef } from 'react';
import { LanguageProvider } from '@context/LanguageContext';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import ScrollProgress from '@components/layout/ScrollProgress';
import FloatingButtons from '@components/layout/FloatingButtons';
import HeroSection from '@components/sections/HeroSection';
import AboutSection from '@components/sections/AboutSection';
import ServicesSection from '@components/sections/ServicesSection';
import ExperienceSection from '@components/sections/ExperienceSection';
import SkillsSection from '@components/sections/SkillsSection';
import ProjectsSection from '@components/sections/ProjectsSection';
import TranslationSection from '@components/sections/TranslationSection';
import EducationSection from '@components/sections/EducationSection';
import ContactSection from '@components/sections/ContactSection';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const progressRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      // Exit animation
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(onComplete, 200);
        }
      });

      tl.to(textRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
      })
      .to(progressRef.current, {
        opacity: 0,
        duration: 0.3
      }, '-=0.2')
      .to(preloaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut'
      });
    }
  }, [progress, onComplete]);

  return (
    <div 
      ref={preloaderRef}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0b1220',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999,
        flexDirection: 'column',
        gap: '24px'
      }}
    >
      {/* Logo Text */}
      <div 
        ref={textRef}
        style={{
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #6ea8fe, #30c7b5)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '2px'
        }}
      >
        Alan Khalaf
      </div>

      {/* Progress Bar */}
      <div 
        ref={progressRef}
        style={{
          width: '200px',
          height: '4px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            width: `${Math.min(progress, 100)}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #6ea8fe, #30c7b5)',
            borderRadius: '2px',
            transition: 'width 0.3s ease'
          }}
        />
      </div>

      {/* Progress Number */}
      <div style={{
        color: '#6ea8fe',
        fontSize: '14px',
        fontFamily: 'monospace'
      }}>
        {Math.min(Math.round(progress), 100)}%
      </div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LanguageProvider>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div style={{ 
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease',
        visibility: isLoading ? 'hidden' : 'visible'
      }}>
        <ScrollProgress />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <TranslationSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </LanguageProvider>
  );
};

export default App;