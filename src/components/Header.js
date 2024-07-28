import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={1000}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={1000}>About</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={1000}>Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1000}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

