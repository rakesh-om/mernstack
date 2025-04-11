import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      alert('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        timeline: '',
        projectDetails: '',
      });
    } catch (err) {
      console.error('Failed to send message:', err);
      alert('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Contact Me</h2>
      <p className="contact-form-subtitle">
        Let’s collaborate! Fill out the form to get in touch.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-row">
          <div className="form-input-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
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
              id="email"
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
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-input-group">
            <label htmlFor="service" className="form-label">Interested Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Choose a service</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app-development">Mobile App Development</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="digital-marketing">Digital Marketing</option>
            </select>
          </div>
        </div>

        <div className="contact-form-row">
          <div className="form-input-group">
            <label htmlFor="timeline" className="form-label">Project Timeline</label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-input-group">
            <label htmlFor="projectDetails" className="form-label">Project Description</label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              rows={4}
              className="form-textarea"
            />
          </div>
        </div>

        <div className="form-button-container">
          <button type="submit" className="form-submit-button">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
