import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProfile } from '../api/api';
import '../components/Navbar.css';

const Header = () => {
  const [profile, setProfile] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      if (Array.isArray(data) && data.length > 0) {
        setProfile(data[0]);
      }
    };

    fetchProfile();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='header'>
      <nav className="navbar">
        <div className="navbar-burger" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? 'close' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'close' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'close' : ''}`}></div>
        </div>

        <div className="navbar-logo">
          <Link to="/" className="navbar-brand">
            {profile?.name || 'LOGO'}
          </Link>
        </div>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/about" className="navbar-link">About Me</Link></li>
          <li><Link to="/services" className="navbar-link">Services</Link></li>
          <li><Link to="/contact" className="navbar-link">Contact Me</Link></li>
        </ul>

        <a href="/contact" className="hire-button">Hire me</a>
      </nav>
    </header>
  );
};

export default Header;
