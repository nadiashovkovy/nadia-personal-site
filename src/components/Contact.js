import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Let's Connect.</h1>
      <div className="contact-grid">
      <a href="https://www.linkedin.com/in/nadia-shovkovy" target="_blank" rel="noopener noreferrer">
        <img src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-3mmtnow6.png" alt="LinkedIn" className="contact-logo" />
      </a>
      <a href="https://medium.com/@nadiashovkovy" target="_blank" rel="noopener noreferrer">
        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/medium-round-icon.png" alt="Medium" className="contact-logo" />
      </a>
      <a href="https://github.com/nadiashovkovy" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="contact-logo" />
      </a>
      <a href="https://www.instagram.com/nadiashovkovy/" target="_blank" rel="noopener noreferrer">
        <img src="https://static.vecteezy.com/system/resources/previews/022/498/176/non_2x/3d-render-camera-icon-isolated-on-transparent-background-camera-logo-for-web-site-app-ui-and-logo-free-png.png" alt="Instagram" className="contact-logo" />
      </a>
    </div>
    </section>
  );
}

export default Contact;

