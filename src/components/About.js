import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h1>Curious About Me?</h1>
        <div className="about-details">
          <p>
            Hi! My name is Nadia and I am currently an undergrad studying computer science at Barrett, the Honors College at Arizona State University. I am most passionate about software development, machine learning, and I am highly committed to leadership and volunteer work.
          </p>
        </div>
      </div>

      <div className="tech-skills">
        <h1>My Technical Skills</h1>
        <div className="skill-details">
          <p>
            Languages: Java (Intermediate), Python (Intermediate), Javascript (Intermediate), Swift/SwiftUI (Advanced).
          </p>
          <p>
            Tools: PyCharm, Xcode, PyTorch, Webflow, Figma.
          </p> 
        </div>
      </div>
    </section>
  );
}

export default About;

