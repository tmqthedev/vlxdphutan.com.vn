import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Dự Án 1',
      description: 'Tháo dỡ và chuyển văn phòng công ty A',
      image: 'placeholder'
    },
    {
      id: 2,
      title: 'Dự Án 2',
      description: 'Mua bán nội thất cho khách sạn B',
      image: 'placeholder'
    },
    {
      id: 3,
      title: 'Dự Án 3',
      description: 'Thi công lắp đặt kính cường lực tòa nhà C',
      image: 'placeholder'
    },
    {
      id: 4,
      title: 'Dự Án 4',
      description: 'Thu mua phế liệu kho bãi D',
      image: 'placeholder'
    }
  ];

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>Các Dự Án Đã Thực Hiện</h1>
        <p>Những dự án tiêu biểu của Phú Tân</p>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">{project.image}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
