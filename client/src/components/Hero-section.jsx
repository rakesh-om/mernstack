import React, { useEffect, useState } from 'react';
import { getProfile } from '../api/api';
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaEnvelope
} from 'react-icons/fa';
import '../components/Hero.css';

const Hero = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProfile();
      if (Array.isArray(res) && res.length > 0) {
        setProfile(res[0]);
      }
    };
    fetchData();
  }, []);

  if (!profile) return null;

  return (
    <section className="hero-section">
      <div className="hero-profile page-wrapper">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-left">
            <h4>Hi I am</h4>
            <h2>{profile.name}</h2>
            <h1>{profile.title}</h1>

            {/* Social Icons */}
            <div className="social-links">
              {profile.contact?.social?.instagram && (
                <a href={profile.contact.social.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              )}
              {profile.contact?.social?.linkedin && (
                <a href={profile.contact.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              )}
              {profile.contact?.social?.facebook && (
                <a href={profile.contact.social.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
              )}
              {profile.contact?.social?.email && (
                <a href={`mailto:${profile.contact.social.email}`} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope />
                </a>
              )}
            </div>

            {/* Buttons */}
            <div className="hero-buttons">
              {profile.cta?.hire_me && (
                <button className="btn-orange">Hire Me</button>
              )}
              {profile.cta?.download_cv && (
                <a href={profile.cv_link} download>
                  <button className="btn-outline">Download CV</button>
                </a>
              )}
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="details">
                <span className="highlight">{profile.experienceSummary}</span>
                Experiences
              </div>
              <div className="divider"></div>

              <div className="details">
                <span className="highlight">{profile.projectSummary}</span>
                Project done
              </div>
              <div className="divider"></div>

              <div className="details">
                <span className="highlight">{profile.clients}</span>
                Happy Clients
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-right">
            <img
              src={profile.avatar || '/default-profile.png'}
              alt={profile.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
