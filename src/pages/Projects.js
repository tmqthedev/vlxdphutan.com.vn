import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LazyLoad from '../components/LazyLoad';
import projectsData from '../data/projectsData.json';
import '../styles/Projects.css';

const Projects = () => {
  const [projects] = useState(projectsData);
  const navigate = useNavigate();

  const handleProjectClick = (slug) => {
    navigate(`/projects/${slug}`);
  };

  const handleKeyPress = (e, slug) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(`/projects/${slug}`);
    }
  };

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>Những dự án tiêu biểu của Phú Tân Construction</h1>
      </div>

      <LazyLoad animation="slideUp">
        <div className="projects-grid">
          {projects.map(project => (
            <button
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project.slug)}
              onKeyPress={(e) => handleKeyPress(e, project.slug)}
              type="button"
              aria-label={`View ${project.title} project details`}
            >
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />

              {/* Project Info Overlay - Bottom Right */}
              <div className="project-info">
                <div className="project-category">{project.category}</div>
                <div className="project-card-title">{project.title}</div>
              </div>
            </button>
          ))}
        </div>
      </LazyLoad>
    </div>
  );
};

export default Projects;
