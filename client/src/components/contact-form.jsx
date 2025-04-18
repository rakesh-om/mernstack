// client/src/components/ContactForm.jsx
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

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';

    if (formData.phone && !/^\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 7-15 digits';
    }

    if (!formData.service) newErrors.service = 'Please select a service';

    if (!formData.projectDetails.trim()) newErrors.projectDetails = 'Project description is required';
    else if (formData.projectDetails.length < 10) newErrors.projectDetails = 'Description must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

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
      setErrors({});
    } catch (err) {
      console.error('Failed to send message:', err);
      alert('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <section className='contact-form_section'>
      <div className="contact-form-container page-wrapper">
        <h2 className="contact-form-title">Contact Me</h2>
        <p className="contact-form-subtitle">Let’s collaborate! Fill out the form to get in touch.</p>

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
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
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
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
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
              {errors.phone && <p className="form-error">{errors.phone}</p>}
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
              {errors.service && <p className="form-error">{errors.service}</p>}
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
              {errors.projectDetails && <p className="form-error">{errors.projectDetails}</p>}
            </div>
          </div>

          <div className="form-button-container">
            <button type="submit" className="form-submit-button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
