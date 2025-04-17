import React, { useEffect, useState } from 'react';
import './Skills.css'; // Make sure this file exists and is named correctly

const Skills = () => {
  const [skills, setSkills] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/profiles'); 
        const data = await response.json();

       
        if (Array.isArray(data) && data.length > 0) {
          setSkills(data[0].skills);
        } else {
          console.warn('No profile data found');
        }
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) return <p>Loading skills...</p>;
  if (!skills) return <p>No skills available.</p>;

  return (
    <section className="skills-section">
      <div className ="container page-wrapper">
      <div className="skills-category-container ">

        <h2 className="skills-heading">Skills</h2>
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-grid">
              {skillList.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="skill-image"
                  />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;
