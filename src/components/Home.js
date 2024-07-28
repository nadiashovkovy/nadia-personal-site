import React from 'react';
import './Home.css';
import profileImage from 'nadia-personal-site/src/assets/images/profile.png';  // Adjust the path as needed

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h2>👋 Hello.</h2>
        <h1>Nice to meet you! My name is Nadia Shovkovy.</h1>
        <p>This is a place where I share my tech projects, my passions, and more.</p>
        <button className="cta-button">Learn more about me...</button>
      </div>
      <img src={profileImage} alt="Nadia Shovkovy" className="profile-image" />
    </section>
  );
}

export default Home;