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
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [titleArray, setTitleArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProfile();
      if (Array.isArray(res) && res.length > 0) {
        const fetchedProfile = res[0];
        setProfile(fetchedProfile);

        // ✅ Dynamically split the title string by `/`
        const titles = fetchedProfile.title.split('/').map(t => t.trim());
        setTitleArray(titles);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (titleArray.length === 0) return;
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titleArray.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [titleArray]);

  if (!profile) return null;

  return (
    <section className="hero-section">
      <div className="hero-profile page-wrapper">
        <div className="hero-content">
          {/* Left */}
          <div className="hero-left">
            <h4>Hi I am</h4>
            <h2>{profile.name}</h2>
            {/* ✅ Show one title at a time dynamically */}
            <h1>{titleArray[currentTitleIndex]}</h1>

            {/* Social Links */}
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
              {profile.contact?.email && (
                <a href={`mailto:${profile.contact.email}`} target="_blank" rel="noopener noreferrer">
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
