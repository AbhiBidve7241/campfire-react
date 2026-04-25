import React, { useState } from 'react';
import PlaceholderImage from '../components/PlaceholderImage';
import Testimonials from '../components/Testimonials';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="contact-subtitle">
                Fill out the form or reach us through the following channels
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>Sector 24 Nigdi 411044, Pune, Maharashtra</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 986532147</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>support@campfire.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send Us a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map section">
        <div className="container">
          <div className="section-header">
            <h2>Visit Our Store</h2>
            <p>Come say hello at our headquarters</p>
          </div>
          <div className="map-wrapper">
            <PlaceholderImage 
              height="400px"
              text="Map Location"
              className="product-placeholder"
            />
            <div className="map-overlay">
              <div className="map-pin">
                <i className="fa-solid fa-location-dot"></i>
                <span>CampFire HQ, Pune</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Contact;
