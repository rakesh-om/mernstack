import React, { useEffect, useState } from 'react';
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
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="navbar-logo">
          {profile?.name || 'LOGO'}
        </div>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-link">Home</li>
          <li className="navbar-link">Services</li>
          <li className="navbar-link">About me</li>
          <li className="navbar-link">Portfolio</li>
          <li className="navbar-link">Contact me</li>
        </ul>

        <button className="hire-button">Hire me</button>
      </nav>
    </header>
  );
};

export default Header;