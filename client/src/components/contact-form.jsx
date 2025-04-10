import React, { useState } from 'react';
import './ContactForm.css'; // External CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    projectDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      timeline: '',
      projectDetails: '',
    });
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Contact Me</h2>
      <p className="contact-form-subtitle">Cultivating Connections: Reach Out And Connect With Me</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-row">
          <div className="form-input-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="contact-form-row">
          <div className="form-input-group">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="service" className="form-label">Service of Interest</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app-development">Mobile App Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="digital-marketing">Digital Marketing</option>
            </select>
          </div>
        </div>

        <div className="contact-form-row">
          <div className="form-input-group">
            <label htmlFor="timeline" className="form-label">Timeline</label>
            <input
              type="text"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="projectDetails" className="form-label">Project Details</label>
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              rows={4}
              className="form-textarea"
            />
          </div>
        </div>

        <div className="form-button-container">
          <button type="submit" className="form-submit-button">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
