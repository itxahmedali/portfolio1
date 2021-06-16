import React from 'react';
import './Skills.css';

export default function Skills() {
    return (
      <section id="services" className="container skills-section">
    <div className="skills-section1">
      <h1>Skills</h1>
    </div>
    <div className="skills-section2">
    <div className="bar advanced" data-skill="HTML"></div>
    <div className="bar advanced" data-skill="CSS"></div>
    <div className="bar intermediate" data-skill="JavaScript"></div>
    <div className="bar advanced" data-skill="Bootstrap"></div>
    <div className="bar advanced" data-skill="Responsive Design & Mobile-First Websites"></div>
    <div className="bar learning" data-skill="React.js"></div>
    <div className="bar intermediate" data-skill="Graphic Designing"></div>
    <div className="bar basic" data-skill="Python"></div>
    <div className="bar basic" data-skill="C"></div>
    </div>
  </section>
  
    )
}
