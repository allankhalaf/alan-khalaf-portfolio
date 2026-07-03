import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useGsapReveal, useGsapStagger } from '@hooks/useGsapScroll';
import { ExternalLink } from 'lucide-react';
import { projects, landingPages } from '@data/projects';
import ProjectCard from '@components/ui/ProjectCard';
import GlassCard from '@components/ui/GlassCard';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const projectsRef = useGsapStagger({ stagger: 0.15 });
  const landingRef = useGsapReveal({ stagger: 0.1 });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="section-kicker inline-flex">{t('projects_kicker')}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-text">{t('projects_title')}</h2>
          <p className="text-text-soft text-lg">{t('projects_text')}</p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="stagger-card">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold text-text mb-6 text-center">{t('landing_heading')}</h3>
          <p className="text-text-muted text-center mb-8">{t('landing_text')}</p>
          <div ref={landingRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {landingPages.map((page) => (
              <a key={page.id} href={page.url} target="_blank" rel="noopener noreferrer" className="reveal-child group">
                <GlassCard className="text-center py-6 hover:border-primary/30 transition-all duration-300">
                  <ExternalLink size={20} className="mx-auto mb-2 text-text-muted group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-text-soft group-hover:text-text transition-colors">{page.title}</span>
                </GlassCard>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
