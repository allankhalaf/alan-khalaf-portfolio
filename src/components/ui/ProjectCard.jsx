import React, { useState, useCallback } from 'react';
import { useLanguage } from '@context/LanguageContext';
import { ExternalLink, Github, Eye, X, ArrowUpRight, Layers, Wrench } from 'lucide-react';
import GlassCard from './GlassCard';

const ProjectCard = ({ project }) => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';
  const hasGithubUrl = project.githubUrl && project.githubUrl !== '#';

  const placeholderImage = `data:image/svg+xml,${encodeURIComponent(`
    <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#131b32;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0d1424;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="url(#grad)"/>
      <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" 
        fill="#6ea8fe" font-family="Arial, sans-serif" font-size="22" font-weight="bold">
        ${project.title}
      </text>
      <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" 
        fill="#6b7a94" font-family="Arial, sans-serif" font-size="13">
        ${project.tech.slice(0, 3).join(' · ')}
      </text>
    </svg>
  `)}`;

  return (
    <>
      <GlassCard className="group h-full flex flex-col overflow-hidden" glow={project.featured}>
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl -mx-8 -mt-8 mb-6">
          <img
            src={imageError ? placeholderImage : project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImageError(true)}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
          
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md">
              <span className="text-xs font-display font-bold text-accent flex items-center gap-1.5">
                <Layers size={12} />
                {t('featured')}
              </span>
            </div>
          )}

          {project.status === 'in-development' && (
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-md">
              <span className="text-xs font-display font-bold text-secondary flex items-center gap-1.5">
                <Wrench size={12} />
                {t('in_development') || 'In Development'}
              </span>
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-bg-primary/50 backdrop-blur-sm">
            <button
              onClick={openModal}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-text hover:bg-primary hover:border-primary hover:text-bg-primary transition-all duration-300 hover:scale-110"
              aria-label={t('view_project')}
            >
              <Eye size={20} />
            </button>
            {hasGithubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-text hover:bg-text hover:border-text hover:text-bg-primary transition-all duration-300 hover:scale-110"
                aria-label={t('source_code')}
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={20} />
              </a>
            )}
            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-text hover:bg-secondary hover:border-secondary hover:text-bg-primary transition-all duration-300 hover:scale-110"
                aria-label={t('live_demo')}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-caption font-display font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">
              {t(project.tagKey)}
            </span>
            {project.year && (
              <span className="text-caption text-text-muted font-medium">{project.year}</span>
            )}
          </div>

          <h3 className="text-heading-2 font-display font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300 overflow-hidden text-ellipsis whitespace-nowrap">
            {project.title}
          </h3>

          <p className="text-body text-text-soft leading-relaxed mb-5 overflow-hidden" style={{ WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', display: '-webkit-box' }}>
            {t(project.textKey)}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-caption text-text-muted bg-white/5 px-2.5 py-1.5 rounded-lg border border-line hover:border-primary/20 hover:text-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-auto pt-5 border-t border-line/50">
            <button
              onClick={openModal}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-line text-body-sm font-display font-semibold text-text-soft hover:bg-white/10 hover:text-text hover:border-line-strong transition-all duration-300"
            >
              <Eye size={16} />
              {t('view_project')}
            </button>
            
            {hasLiveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-body-sm font-display font-bold text-bg-primary hover:bg-primary-strong transition-all duration-300 hover:shadow-glow-primary"
              >
                {t('live_demo')}
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-line/50 text-body-sm font-display font-semibold text-text-muted cursor-not-allowed opacity-50">
                {t('live_demo')}
                <ArrowUpRight size={16} />
              </span>
            )}
          </div>
        </div>
      </GlassCard>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg-primary/90 backdrop-blur-xl"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-bg-card-solid border border-line rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[21/9] overflow-hidden rounded-t-3xl">
              <img
                src={imageError ? placeholderImage : project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card-solid via-transparent to-transparent" />
              
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 w-11 h-11 rounded-full bg-bg-primary/80 border border-line backdrop-blur-md flex items-center justify-center text-text-soft hover:text-text hover:bg-bg-primary transition-all duration-300"
                aria-label={t('close') || 'Close'}
              >
                <X size={20} />
              </button>

              {project.featured && (
                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md">
                  <span className="text-sm font-display font-bold text-accent flex items-center gap-2">
                    <Layers size={14} />
                    {t('featured')}
                  </span>
                </div>
              )}
            </div>

            <div className="p-8 sm:p-10 space-y-8">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-body-sm font-display font-bold text-primary bg-primary/10 px-4 py-2 rounded-xl border border-primary/20">
                    {t(project.tagKey)}
                  </span>
                  {project.category && (
                    <span className="text-body-sm text-text-muted">{project.category}</span>
                  )}
                  {project.year && (
                    <span className="text-body-sm text-text-muted flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-line-strong" />
                      {project.year}
                    </span>
                  )}
                </div>
                <h2 className="text-display-3 font-display font-bold text-text">{project.title}</h2>
              </div>

              <div className="space-y-4">
                <p className="text-body-lg text-text-soft leading-relaxed">
                  {t(project.textKey)}
                </p>
                {project.highlight && (
                  <p className="text-body text-primary/80 font-medium border-l-2 border-primary/30 pl-4">
                    {project.highlight}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <h4 className="text-caption font-display font-bold text-text-muted uppercase tracking-widest">
                  {t('tech_stack')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-body-sm font-medium text-text bg-white/5 px-4 py-2 rounded-xl border border-line hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-line/50">
                {hasLiveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-bg-primary font-display font-bold hover:bg-primary-strong transition-all duration-300 hover:shadow-glow-primary"
                  >
                    {t('live_demo')}
                    <ArrowUpRight size={20} />
                  </a>
                ) : (
                  <span className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-line/50 text-text-muted font-display font-bold cursor-not-allowed opacity-50">
                    {t('live_demo')}
                    <ArrowUpRight size={20} />
                  </span>
                )}

                {hasGithubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/5 border border-line text-text font-display font-bold hover:bg-white/10 hover:border-line-strong transition-all duration-300"
                  >
                    <Github size={20} />
                    {t('source_code')}
                  </a>
                )}

                <button
                  onClick={closeModal}
                  className="sm:w-auto w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent border border-line text-text-soft font-display font-semibold hover:bg-white/5 hover:text-text transition-all duration-300"
                >
                  {t('close') || 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;