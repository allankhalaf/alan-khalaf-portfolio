import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';
import GlassCard from './GlassCard';

const ProjectCard = ({ project }) => {
  const { t } = useLanguage();

  return (
    <GlassCard className="group h-full flex flex-col" glow>
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-bg-card-2">
        {/* Project Image */}
        <img 
          src={project.image} 
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-text-muted hidden">
          <span className="text-4xl font-bold opacity-20">{project.title[0]}</span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary text-[#06111f] text-sm font-semibold hover:bg-primary-strong transition-colors">
            <ExternalLink size={14} />
            {t('project_btn_live')}
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 text-text border border-white/20 text-sm font-semibold hover:bg-white/20 transition-colors">
            <Github size={14} />
            {t('project_btn_code')}
          </a>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <span className="text-xs font-medium text-secondary mb-2">{t(project.tagKey)}</span>
        <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted mb-4 flex-1">{t(project.textKey)}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-text-soft border border-white/10">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
