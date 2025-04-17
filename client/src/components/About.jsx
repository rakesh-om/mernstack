import React, { useEffect, useState } from 'react';
import { getProfile } from '../api/api';
import './AboutMe.css';

// Icons
import { FaBrain, FaRocket } from 'react-icons/fa';

const AboutMe = () => {
  const [profile, setProfile] = useState(null);
  const [titleArray, setTitleArray] = useState([]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      const res = await getProfile();
      if (Array.isArray(res) && res.length > 0) {
        const fetchedProfile = res[0];
        setProfile(fetchedProfile);

        // Split title into dynamic segments
        const titles = fetchedProfile.title.split('/').map(t => t.trim());
        setTitleArray(titles);
      }
    };

    fetchProfile();
  }, []);

  // Loop through dynamic title
  useEffect(() => {
    if (titleArray.length === 0) return;

    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titleArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [titleArray]);

  if (!profile) return <div className="loading">Loading...</div>;

  return (
    <section className="about-section">
      <div className="container page-wrapper">
        <div className="about-content">
          <div className='imgae-about'><img
            src={profile.avatar || '/default-profile.png'}
            alt={profile.name}
            className="about-avatar"
          /></div>

          <div className="about-text">
            <h2 className="about-name">{profile.name}</h2>
            <h4 className="about-title">{titleArray[currentTitleIndex]}</h4>

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
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
