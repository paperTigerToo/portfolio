import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Associate of Science in Computer Science",
      school: "Union Community College",
      year: "2022-2023",
      gpa: "3.6/4.0"
    },
    {
      degree: "High School Diploma",
      school: "Westfield highschool",
      year: "2011-2015",
      gpa: "3.6/4.0"
    }
  ];

  const experience = [
    {
      title: "warehouse worker",
      company: "UPS",
      period: "2021-2023",
      responsibilities: [
        "long physical hours durning the night shift 2 am to 9am",
        "fill truck with boxes",
        "sort boxes"
      ]
    },
    {
      title: "warehouse supervisor",
      company: "UPS",
      period: "2023-2024",
      responsibilities: [
        "manage upwards of 30 individuals",
        "Train new employees",
        "Assign work and make sure all in an efficient manner"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java", "C++"],
    "Frameworks & Libraries": ["React", "Node.js"],
    "Tools & Technologies": ["Git", "VS Code", "MongoDB"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;