import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { useGsapReveal, useGsapStagger } from '@hooks/useGsapReveal';
import { ExternalLink, ArrowRight, Sparkles, FolderGit } from 'lucide-react';
import { projects, landingPages } from '@data/projects';
import ProjectCard from '@components/ui/ProjectCard';
import GlassCard from '@components/ui/GlassCard';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const projectsRef = useGsapStagger({ stagger: 0.12, y: 40 });
  const landingRef = useGsapReveal({ stagger: 0.1 });

  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <div className="section-kicker">
            <Sparkles size={14} className="inline mr-2" />
            {t('projects_kicker')}
          </div>
          <h2 className="text-display-3 sm:text-display-2 font-display font-bold text-text">
            {t('projects_title')}
          </h2>
          <p className="text-body-lg text-text-soft max-w-2xl mx-auto leading-relaxed">
            {t('projects_text')}
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16 space-y-8">
            <h3 className="text-caption font-display font-semibold text-text-muted uppercase tracking-widest text-center">
              {t('featured')}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id} className="stagger-card">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects */}
        <div ref={projectsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project) => (
            <div key={project.id} className="stagger-card">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Landing Pages */}
        <div className="mt-32 space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-heading-1 font-display font-bold text-text">
              {t('landing_heading')}
            </h3>
            <p className="text-body text-text-muted max-w-xl mx-auto">
              {t('landing_text')}
            </p>
          </div>

          <div ref={landingRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {landingPages.map((page) => (
              <a 
                key={page.id} 
                href={page.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="reveal-child group"
              >
                <GlassCard 
                  className="text-center py-8 px-4 hover:border-primary/30 hover:-translate-y-1 transition-all duration-500" 
                  glow={false}
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                    <ExternalLink size={20} className="text-primary" />
                  </div>
                  <span className="text-body-sm font-display font-semibold text-text-soft group-hover:text-text transition-colors duration-300 block">
                    {page.title}
                  </span>
                  <ArrowRight 
                    size={14} 
                    className="mx-auto mt-3 text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
                  />
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