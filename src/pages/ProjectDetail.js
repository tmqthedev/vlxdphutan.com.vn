import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import projectsData from '../data/projectsData.json';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = useMemo(() => {
    return projectsData.find(p => p.slug === slug) || null;
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="not-found">
        <h2>Dự án không tìm thấy</h2>
        <button onClick={() => navigate('/projects')}>Quay lại danh sách dự án</button>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <section className="project-hero">
        <img 
          src={project.image} 
          alt={project.title}
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </section>

      {/* Project Description Section */}
      <section className="project-description-section">
        <div className="container">
          <div className="description-content">
            <div className="description-header">
              <div className="project-detail-title">{project.title}</div>
              <div className="project-meta">
                <div className="meta-item">
                  <span className="meta-label">Loại Hình:</span>
                  <span className="meta-value">{project.type}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Hạng Mục:</span>
                  <span className="meta-value">{project.category}</span>
                </div>
              </div>
            </div>
            <div className="description-text">
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="project-gallery-section">
        <div className="container">
          <h2 className="gallery-title">Hình Ảnh Dự Án</h2>
          {project.gallery && project.gallery.length > 0 ? (
            <ImageSlider images={project.gallery} title={project.title} />
          ) : (
            <p className="no-gallery">Không có hình ảnh để hiển thị</p>
          )}
        </div>
      </section>

      {/* Back Button */}
      <section className="project-footer">
        <div className="container">
          <button 
            className="back-button"
            onClick={() => navigate('/projects')}
          >
            ← Quay lại danh sách dự án
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
