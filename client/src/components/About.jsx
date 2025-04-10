import React, { useEffect, useState } from 'react';
import { getProfile } from '../api/api';
import './AboutMe.css';

// Icons from react-icons
import { FaBrain, FaRocket, FaHandshake } from 'react-icons/fa';

const AboutMe = () => {
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

  if (!profile) return <div className="loading">Loading...</div>;

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <img src={profile.avatar} alt={profile.name} className="about-avatar" />
          <div className="about-text">
            <h2 className="about-name">{profile.name}</h2>
            <h4 className="about-title">{profile.title}</h4>
            <p className="bio">{profile.bio}</p>
            <p className="summary">{profile.summary}</p>
            <div className="quick-facts">
              <span className="fact">
                <FaBrain className="icon icon-experience" />
                <strong>Experience:</strong> {profile.experienceSummary}
              </span>
              <span className="fact">
                <FaRocket className="icon icon-projects" />
                <strong>Projects:</strong> {profile.projectSummary}
              </span>
              <span className="fact">
                <FaHandshake className="icon icon-clients" />
                <strong>Clients:</strong> {profile.clients}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
