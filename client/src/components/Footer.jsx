import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaBehance, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        {/* <div className="footer-logo">MyPortfolio</div> */}

        {/* Navigation Links */}
        <nav className="footer-nav">
          {/* <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul> */}
        </nav>

        {/* Social Links */}
        {/* <div className="footer-social">
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://behance.net/" target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <FaBehance />
          </a>
        </div> */}

        {/* Contact Info */}
        <div className="footer-contact">
          <p><FaEnvelope className="footer-icon" /> <a href="mailto:Mahmood.fazile.7005@gmail.com">Mahmood.fazile.7005@gmail.com</a></p>
          <p><FaPhone className="footer-icon" /> +93 729 107 005</p>
        </div>
      </div>

      {/* <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Designed by @mahmood.fazile | UI/UX Designer</p>
      </div> */}
    </footer>
  );
};

export default Footer;
