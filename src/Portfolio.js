import { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: "",
          title: "E-commerce Website",
          description: "A full-stack e-commerce platform built with React and Node.js",
          technologies: ["React", "Node.js", "MongoDB", "CSS3"],
        },
        {
          project_image: "",
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
        },
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-section">
      <h2 className="portfolio-title">My Portfolio</h2>
        <div className="portfolio-grid">
          {this.state.projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <div className="portfolio-image">
                <img src="imageNotHere.png" alt={project.title} />
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="portfolio-buttons">
                  <a href={project.demo} className="btn demo-btn">Live Demo</a>
                  \<a href={project.code} className="btn code-btn">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;