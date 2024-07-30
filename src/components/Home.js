import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h2>👋 Hello.</h2>
        <h1>Nice to meet you! My name is Nadia Shovkovy.</h1>
        <p>This is a place where I share my tech projects, my passions, and more.</p>
          <div className="home-buttons">
          <button className="cta-button">Learn more about me...</button>
          <a href="https://docs.google.com/document/d/186M1_Q00dXBVX05e31C9_-zDlmeups3Pqb--8ydOx4Y">
            <button className="cta-button">My Resume</button>
          </a>
          </div>
      </div>
      <img src="https://raw.githubusercontent.com/nadiashovkovy/nadia-personal-site/main/src/assets/images/profile.png" alt="Nadia Shovkovy" className="profile-image" />
    </section>
  );
}

export default Home;