import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import './FAQPage.css';

const FAQPage = () => {
  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="faq-hero-content">
          <h1>Help Center</h1>
          <p>Find answers to your questions or reach out to our support team</p>
        </div>
      </section>

      <FAQ />

      <section className="faq-contact-cta section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Still Have Questions?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Our support team is 
                here to help you with any inquiries.
              </p>
              <Link to="/contact" className="btn btn-primary">
                <i className="fa-solid fa-envelope"></i>
                Contact Us
              </Link>
            </div>
            <div className="cta-features">
              <div className="cta-feature">
                <i className="fa-solid fa-bolt"></i>
                <span>Quick Response</span>
              </div>
              <div className="cta-feature">
                <i className="fa-solid fa-user-tie"></i>
                <span>Expert Support</span>
              </div>
              <div className="cta-feature">
                <i className="fa-solid fa-clock"></i>
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
