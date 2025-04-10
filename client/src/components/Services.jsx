import React, { useEffect, useState } from 'react';
import { getProfile } from '../api/api';
import './Services.css';
import {
  FaShopify,
  FaTools,
  FaPencilRuler,
  FaCode,
  FaPlug,
  FaMobileAlt
} from 'react-icons/fa';

const Services = () => {
  const [services, setServices] = useState([]);

  const iconMap = {
    'Shopify Theme Customization': { icon: <FaShopify />, color: '#95bf47' },
    'Shopify App Development': { icon: <FaTools />, color: '#5c6ac4' },
    'UI/UX Design': { icon: <FaPencilRuler />, color: '#ff6f61' },
    'Frontend Development': { icon: <FaCode />, color: '#61dafb' },
    'API Integration': { icon: <FaPlug />, color: '#f97316' },
    'Responsive Web Design': { icon: <FaMobileAlt />, color: '#00c4cc' }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProfile();
      if (Array.isArray(res) && res.length > 0 && Array.isArray(res[0].services)) {
        setServices(res[0].services);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="services-section">
      <div className="page-wrapper">
        <h2 className="section-title">Services I Offer</h2>
        <div className="services-grid">
          {services.map((service, index) => {
            const iconData = iconMap[service] || { icon: '🔧', color: '#f97316' };
            return (
              <div key={index} className="service-card">
                <div className="service-icon" style={{ color: iconData.color }}>
                  {iconData.icon}
                </div>
                <h3>{service}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
