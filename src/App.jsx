import React from 'react';
import { LanguageProvider } from '@context/LanguageContext';
import CustomCursor from '@components/CustomCursor';
import ScrollProgress from '@components/sections/ScrollProgress';
import FloatingButtons from '@components/sections/FloatingButtons';
import Header from '@components/layout/Header';
import HeroSection from '@components/sections/HeroSection';
import AboutSection from '@components/sections/AboutSection';
import EducationSection from '@components/sections/EducationSection';
import ExperienceSection from '@components/sections/ExperienceSection';
import SkillsSection from '@components/sections/SkillsSection';
import ServicesSection from '@components/sections/ServicesSection';
import TranslationSection from '@components/sections/TranslationSection';
import ProjectsSection from '@components/sections/ProjectsSection';
import ContactSection from '@components/sections/ContactSection';
import Footer from '@components/layout/Footer';
import ErrorBoundary from '@components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <div className="relative min-h-screen bg-bg-primary text-text overflow-x-hidden">
          <CustomCursor />
          <ScrollProgress />
          <FloatingButtons />
          
          <Header />
          
          <main>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <ExperienceSection />
            <SkillsSection />
            <ServicesSection />
            <TranslationSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          
          <Footer />
        </div>
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;