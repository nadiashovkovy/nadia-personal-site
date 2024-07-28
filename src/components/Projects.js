import React from 'react';
import './Projects.css'; 

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h1>My Projects</h1>
      <div className="horizontal-scroll-container">
        <div className="horizontal-scroll-content">
          <div className="scroll-item">Volunteen</div>
          <div className="scroll-item">Machine Learning Research</div>
          <div className="scroll-item">Kids in Tech</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

