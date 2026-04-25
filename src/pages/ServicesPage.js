import React from 'react';
import Services from '../components/Services';
import Stats from '../components/Stats';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Discover what makes us the preferred choice for tech enthusiasts</p>
        </div>
      </section>

      <Services showImages={true} />

      <section className="why-choose-us section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose CampFire?</h2>
            <p>We go the extra mile to ensure your satisfaction</p>
          </div>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <i className="fa-solid fa-medal"></i>
              </div>
              <h3>Premium Quality</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon">
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <h3>Best Prices</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon">
                <i className="fa-solid fa-rotate"></i>
              </div>
              <h3>Easy Returns</h3>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </section>

      <Stats />
    </div>
  );
};

export default ServicesPage;
