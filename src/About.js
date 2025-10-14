import { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    const skillsData = {
      "skills" : ["JavaScript", "Python", "Java", "C++"],
      "technologies": ["Git", "VS Code", "MongoDB"]
    };
    const description = [
      {
        about : "I am currently a student at njit and im interested in advancing my career"

      }
    ]
    return (
      <section id='about' className="about-section">
        <div className="about-container">
            <h2 className="about-title">About</h2>
            <div className="about-block">
              <img
                src="/look.jpg"
                alt="Profile"
                className="about-photo"
              />
              <div className="about-text">
                <ul className="about-content">
                  <li>{description[0].about}</li>
                </ul>
              
                <h4 className="item-title">Skills & Technologies</h4>
                  <div className="item-details">
                    {skillsData.skills.map((skill, index) => (
                      <span key={index} className="item-skill">{skill}</span>
                    ))}
                    {skillsData.technologies.map((tech, index) => (
                      <span key={index} className="item-skill">{tech}</span>
                    ))}
                  </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

export default About;