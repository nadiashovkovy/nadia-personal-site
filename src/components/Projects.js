import React from 'react';
import './Projects.css'; 

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <h1>Some of my recent work...</h1>
      <div className="my-projects">
        <div className="project-item">
          <h3>
            VolunTeen
          </h3>
          <p>
            VolunTeen is an iOS app connecting teen volunteers with community service events in Arizona.
            I programmed the UI and the backend code on Xcode with Swift & SwiftUI. I also Implemented user authentication and in-app messaging using Firebase.
          </p>
        </div>
        <div className="project-item">
          <h3>
            Machine Learning Research
          </h3>
          <p>
            During my third year of high school, I wrote a transfer learning program with Mask R-CNN (Pre-trained with the COCO2017 dataset) using the Stanford Background Dataset and PyTorch.
          </p>
        </div>
        <div className="project-item">
          <h3>
            Kids In Tech
          </h3>
          <p>
            Kids In Tech Arizona is a volunteering organization dedicated to teaching engineering and coding at elementary schools. As a program founder, I designed and led workshops on block-coding, mBots, and Girls in Tech at Ryan Elementary.
            I also helped to establish and coach Weinberg Elementary’s First Lego League Explore team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

