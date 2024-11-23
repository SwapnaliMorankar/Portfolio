import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import menu1 from '../../assets/hamburger_open.png';
import menu2 from '../../assets/hamburger_close.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className='navbar'>
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={menuOpen ? menu2 : menu1} alt="menu toggle" />
        </div>

        {/* Desktop Menu */}
        <div className={`menu2 ${menuOpen ? 'active' : ''}`}>
          <div className="menu3">
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/work-experience">Work Experience</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/position-of-responsibility">Position of Responsibility</Link></li>
              <div className="nav-connect">
                <HashLink smooth to="/#connect">Connect With Me</HashLink>
              </div>
            </ul>
          </div>
          <div className="menu4">
            <ul className="nav-menu">
              <li><Link to="/certifications">Certifications and Trainings</Link></li>
              <li><Link to="/co-curricular">Co-Curricular Activities</Link></li>
              <li><Link to="/extra-curricular">Extra Curricular Engagements</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line">
        <hr />
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-menu">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/education" onClick={toggleMenu}>Education</Link></li>
            <li><Link to="/work-experience" onClick={toggleMenu}>Work Experience</Link></li>
            <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="/position-of-responsibility" onClick={toggleMenu}>Position of Responsibility</Link></li>
            <li><HashLink smooth to="/home#connect" onClick={toggleMenu}>Connect With Me</HashLink></li>
            <li><Link to="/certifications" onClick={toggleMenu}>Certifications and Trainings</Link></li>
            <li><Link to="/co-curricular" onClick={toggleMenu}>Co-Curricular Activities</Link></li>
            <li><Link to="/extra-curricular" onClick={toggleMenu}>Extra Curricular Engagements</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
