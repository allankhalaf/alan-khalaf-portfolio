import React, { useEffect, useState } from 'react';
import { LanguageProvider } from '@context/LanguageContext';
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import ScrollProgress from '@components/layout/ScrollProgress';
import FloatingButtons from '@components/layout/FloatingButtons';
import CustomCursor from '@components/layout/CustomCursor';
import HeroSection from '@components/sections/HeroSection';
import AboutSection from '@components/sections/AboutSection';
import ServicesSection from '@components/sections/ServicesSection';
import ExperienceSection from '@components/sections/ExperienceSection';
import SkillsSection from '@components/sections/SkillsSection';
import ProjectsSection from '@components/sections/ProjectsSection';
import TranslationSection from '@components/sections/TranslationSection';
import EducationSection from '@components/sections/EducationSection';
import ContactSection from '@components/sections/ContactSection';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          minHeight: '100vh', 
          background: '#0b1220', 
          color: '#f3f6fb',
          padding: '40px',
          fontFamily: 'sans-serif'
        }}>
          <h1 style={{ color: '#ff6b6b' }}>Something went wrong</h1>
          <pre style={{ color: '#b9c4d6', whiteSpace: 'pre-wrap' }}>
            {this.state.error?.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <CustomCursor />
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
      </LanguageProvider>
    </ErrorBoundary>
  );
};

export default App;
